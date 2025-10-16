/**
 * MDMP Course of Action Development - Army Level Echelon Analysis
 * Strategic-Operational Interface Doctrinal Framework
 * Source: FM 5-0 (Operations Process), Chapter 12 - Course of Action Development
 * Target: Senior Military Officers at Army Command Level (4-star General)
 */

export const armyCOAAnalysisModule = {
  getContent() {
    return `
    <div style="padding:20px;">
      <!-- Army Header -->
      <div style="display:flex; align-items:center; margin-bottom:20px; padding-bottom:12px; border-bottom:2px solid #374151;">
        <i class="fas fa-flag-usa" style="margin-right:12px; color:#f59e0b; font-size:24px;"></i>
        <div>
          <h2 style="font-size:20px; font-weight:700; color:white; margin:0;">Army Level COA Development - Doctrinal Framework</h2>
          <p style="color:#9ca3af; font-size:14px; margin:0;">Strategic-Operational Interface Analysis and Educational Framework</p>
        </div>
      </div>

      <!-- Army-Level COA Development Doctrine -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-book" style="margin-right:8px; color:#1d4ed8;"></i>
          Army-Level COA Development Doctrine
        </h3>

        <div style="background-color:rgba(29, 78, 216, 0.1); padding:12px; border-radius:6px; border:1px solid #1d4ed8; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Army Doctrinal Foundation</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Army COA Development:</strong> The systematic process by which Army commanders and staffs develop multiple feasible courses of action to accomplish the Army mission within theater strategic guidance. This process integrates strategic direction with operational requirements, coordinating multi-corps operations across large geographic areas while maintaining strategic-operational interface coherence.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Doctrinal Principles -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-scroll" style="margin-right:8px; color:#1d4ed8;"></i>
              Army Doctrinal Principles
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Strategic-Operational Integration:</strong> Seamless integration of theater strategic guidance with operational execution</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Corps Coordination:</strong> Synchronized operations across multiple corps and operational areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Integration:</strong> Integration of multinational corps and division-level capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Optimization:</strong> Army-level resource allocation across competing corps priorities</p>
              <p style="margin:0;"><strong>• Operational Risk Management:</strong> Comprehensive assessment and mitigation of operational-level risks</p>
            </div>
          </div>

          <!-- Development Framework -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-cogs" style="margin-right:8px; color:#1d4ed8;"></i>
              Army Development Framework
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Array Forces:</strong> Army-level force positioning and multi-corps allocation across operational areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Develop Scheme:</strong> Army operational concept integrating strategic objectives with corps capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Assign Tasks:</strong> Mission assignment to subordinate corps and supporting commands</p>
              <p style="margin:0 0 8px 0;"><strong>• Prepare Sustainment:</strong> Army sustainment architecture supporting extended multi-corps operations</p>
              <p style="margin:0;"><strong>• Coordinate Integration:</strong> Synchronization of Army operations with theater and joint partners</p>
            </div>
          </div>

          <!-- Strategic Considerations -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-king" style="margin-right:8px; color:#1d4ed8;"></i>
              Army Strategic Considerations
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Theater Strategic Guidance:</strong> Implementation of theater commander's strategic direction and campaign plans</p>
              <p style="margin:0 0 8px 0;"><strong>• Army Strategy:</strong> Development of Army operational strategy within theater strategic framework</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Coordination:</strong> Integration with allied and partner nation Army-level commands</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Constraints:</strong> Army resource allocation within theater capability and priority limitations</p>
              <p style="margin:0;"><strong>• Operational Timeline:</strong> Army operational tempo and timeline coordination with theater requirements</p>
            </div>
          </div>

          <!-- Command Relationships -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-sitemap" style="margin-right:8px; color:#1d4ed8;"></i>
              Army Command Relationships
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Army Command:</strong> Army commander authority and responsibility for multi-corps operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps Commands:</strong> Corps command integration and operational coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Commands:</strong> Army aviation, artillery, and logistics command coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Commands:</strong> Multinational Army-level command structure integration</p>
              <p style="margin:0;"><strong>• Theater Interface:</strong> Interface with theater command and joint force coordination</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Army COA Development Process -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-process" style="margin-right:8px; color:#6366f1;"></i>
          Army COA Development Process and Methodology
        </h3>

        <div style="background-color:rgba(99, 102, 241, 0.1); padding:12px; border-radius:6px; border:1px solid #6366f1; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#a5b4fc; font-size:12px; margin:0 0 8px 0;">Army Process Methodology</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Army Development Process:</strong> Army COA development follows a systematic methodology integrating theater strategic guidance with operational requirements and corps capabilities. The process requires comprehensive analysis, extensive multi-corps coordination, and iterative refinement to produce viable operational options for theater commander consideration.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Initial Analysis -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-search" style="margin-right:8px; color:#6366f1;"></i>
              Army Initial Analysis Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Mission Analysis Review:</strong> Comprehensive review of Army mission analysis and theater strategic guidance</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Environment Assessment:</strong> Analysis of operational environment, threats, and multi-corps opportunities</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Assessment:</strong> Evaluation of available Army resources and multi-corps capability limitations</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Considerations:</strong> Assessment of coalition partner Army-level capabilities and constraints</p>
              <p style="margin:0;"><strong>• Timeline Analysis:</strong> Army operational timeline requirements and multi-corps tempo considerations</p>
            </div>
          </div>

          <!-- COA Generation -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-lightbulb" style="margin-right:8px; color:#6366f1;"></i>
              Army COA Generation Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Concept Development:</strong> Development of overarching Army operational concepts and approaches</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps Integration Design:</strong> Design of multi-corps integration supporting Army operational concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• Force Array Planning:</strong> Army force positioning and multi-corps allocation across operational areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Task Organization:</strong> Assignment of missions and tasks to subordinate corps commands</p>
              <p style="margin:0;"><strong>• Sustainment Architecture:</strong> Development of Army sustainment and logistics architecture</p>
            </div>
          </div>

          <!-- COA Development -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-drafting-compass" style="margin-right:8px; color:#6366f1;"></i>
              Army COA Development Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Detailed Planning:</strong> Comprehensive development of Army COA details and supporting operational plans</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps Coordination Integration:</strong> Integration of Army staff coordination and subordinate corps input</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Assessment:</strong> Comprehensive Army operational risk assessment and mitigation planning</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Allocation:</strong> Detailed Army resource allocation and distribution planning across corps</p>
              <p style="margin:0;"><strong>• Timeline Refinement:</strong> Detailed Army timeline development and operational phasing refinement</p>
            </div>
          </div>

          <!-- COA Refinement -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-edit" style="margin-right:8px; color:#6366f1;"></i>
              Army COA Refinement Phase
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Iterative Improvement:</strong> Continuous refinement based on Army analysis and multi-corps coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• SFADC Evaluation:</strong> Application of SFADC criteria and Army operational feasibility assessment</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Coordination:</strong> Integration of coalition partner Army-level feedback and requirements</p>
              <p style="margin:0 0 8px 0;"><strong>• Theater Coordination:</strong> Coordination with theater command and joint force requirements</p>
              <p style="margin:0;"><strong>• Final Validation:</strong> Final Army validation and preparation for theater decision briefing</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Strategic-Operational Interface -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-layer-group" style="margin-right:8px; color:#06b6d4;"></i>
          Army Strategic-Operational Interface and Multi-Corps Coordination
        </h3>

        <div style="background-color:rgba(6, 182, 212, 0.1); padding:12px; border-radius:6px; border:1px solid #06b6d4; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#67e8f9; font-size:12px; margin:0 0 8px 0;">Army Interface Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Strategic-Operational Integration:</strong> Army commanders must seamlessly integrate theater strategic guidance with operational requirements from subordinate corps commands, ensuring coherent translation of strategic objectives into executable operational concepts across multiple corps and large geographic areas.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Strategic Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#67e8f9; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-board" style="margin-right:8px; color:#06b6d4;"></i>
              Army Strategic Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Theater Strategic Guidance:</strong> Integration of theater commander's strategic direction and campaign plans</p>
              <p style="margin:0 0 8px 0;"><strong>• Army Strategic Direction:</strong> Implementation of Army commander's operational strategy and concepts</p>
              <p style="margin:0 0 8px 0;"><strong>• Strategic Objectives Translation:</strong> Conversion of strategic end states into Army operational objectives</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Allocation Guidance:</strong> Army resource prioritization and allocation across corps operations</p>
              <p style="margin:0;"><strong>• Risk Tolerance Framework:</strong> Army operational risk acceptance criteria and mitigation strategies</p>
            </div>
          </div>

          <!-- Operational Coordination -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#67e8f9; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-network-wired" style="margin-right:8px; color:#06b6d4;"></i>
              Army Operational Coordination
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Corps Command Integration:</strong> Synchronization of multiple corps operations across Army operational areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Command Coordination:</strong> Integration of Army aviation, artillery, and logistics commands</p>
              <p style="margin:0 0 8px 0;"><strong>• Adjacent Army Interface:</strong> Coordination with adjacent Army commands and joint force elements</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Area Synchronization:</strong> Coordination across multiple corps operational areas</p>
              <p style="margin:0;"><strong>• Mission Command Philosophy:</strong> Implementation of decentralized execution with centralized Army planning</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Coalition Integration -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-handshake" style="margin-right:8px; color:#8b5cf6;"></i>
          Army Coalition Integration and Multinational Command Structures
        </h3>

        <div style="background-color:rgba(139, 92, 246, 0.1); padding:12px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Army Coalition Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Army Multinational Integration:</strong> Army COA development must incorporate coalition partner Army-level capabilities, constraints, and national caveats while maintaining operational effectiveness across multiple corps. This requires sophisticated coordination mechanisms and shared understanding of operational objectives.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Coalition Army Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-users" style="margin-right:8px; color:#8b5cf6;"></i>
              Coalition Army Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multinational Army Commands:</strong> Integration of coalition partner Army-level commands and capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps-Level Integration:</strong> Coalition partner corps integration within Army operational framework</p>
              <p style="margin:0 0 8px 0;"><strong>• National Caveats:</strong> Partner nation Army-level operational limitations and political constraints</p>
              <p style="margin:0 0 8px 0;"><strong>• Capability Integration:</strong> Coalition Army unique capabilities and specialized force contributions</p>
              <p style="margin:0;"><strong>• Logistics Coordination:</strong> Multinational Army logistics support and host nation coordination</p>
            </div>
          </div>

          <!-- Command Structure Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-sitemap" style="margin-right:8px; color:#8b5cf6;"></i>
              Army Command Structure Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multinational Army Command:</strong> Combined Army command structure establishment and coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Command Relationships:</strong> Army-level operational control and coordination relationships</p>
              <p style="margin:0 0 8px 0;"><strong>• Staff Integration:</strong> Multinational Army staff integration and liaison coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Planning Synchronization:</strong> Coordinated Army planning processes and shared products</p>
              <p style="margin:0;"><strong>• Information Sharing:</strong> Coalition Army information sharing and security protocols</p>
            </div>
          </div>
        </div>
      </div>

      <!-- SFADC Criteria Application -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-check-double" style="margin-right:8px; color:#ef4444;"></i>
          Army SFADC Criteria Application - Operational Level Evaluation
        </h3>

        <div style="background-color:rgba(239, 68, 68, 0.1); padding:12px; border-radius:6px; border:1px solid #ef4444; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fca5a5; font-size:12px; margin:0 0 8px 0;">Army Evaluation Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Army SFADC Application:</strong> Army-level COAs must be rigorously evaluated against SFADC criteria with operational-level considerations including theater strategic objectives, coalition requirements, multi-corps resource constraints, and operational risk tolerance.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Suitable and Feasible -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-bullseye" style="margin-right:8px; color:#ef4444;"></i>
              Army Suitable and Feasible
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Theater Strategic Alignment:</strong> Direct contribution to theater strategic objectives and campaign plans</p>
              <p style="margin:0 0 8px 0;"><strong>• Army Mission Accomplishment:</strong> Capability to achieve assigned Army mission and operational end state</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Corps Capability:</strong> Sufficient corps forces available within Army and from theater reserve</p>
              <p style="margin:0 0 8px 0;"><strong>• Army Logistics Capability:</strong> Army sustainment architecture capable of supporting extended multi-corps operations</p>
              <p style="margin:0;"><strong>• Operational Timeline:</strong> Achievable within Army operational timeline and tempo requirements</p>
            </div>
          </div>

          <!-- Acceptable and Complete -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-balance-scale" style="margin-right:8px; color:#ef4444;"></i>
              Army Acceptable and Complete
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Risk Level:</strong> Risk level acceptable to theater command and Army leadership</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Acceptance:</strong> Risk level acceptable to coalition Army partners and alliance structures</p>
              <p style="margin:0 0 8px 0;"><strong>• Complete Army Framework:</strong> Comprehensive planning addressing all Army operational functions</p>
              <p style="margin:0 0 8px 0;"><strong>• Multi-Corps Integration:</strong> Complete multi-corps sustainment planning and coordination</p>
              <p style="margin:0;"><strong>• Risk Mitigation:</strong> Comprehensive Army risk mitigation and contingency planning</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Army Operational Risk Assessment -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-exclamation-triangle" style="margin-right:8px; color:#f97316;"></i>
          Army Operational Risk Assessment and Mitigation Framework
        </h3>

        <div style="background-color:rgba(249, 115, 22, 0.1); padding:12px; border-radius:6px; border:1px solid #f97316; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fb923c; font-size:12px; margin:0 0 8px 0;">Army Risk Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Army Operational Risk Management:</strong> Army-level risk assessment encompasses operational and tactical risks with potential theater-level consequences. Risk evaluation must consider probability, impact, and mitigation capabilities across multiple corps, extended operational areas, and coalition operations.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Operational Risk Categories -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fb923c; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-list-alt" style="margin-right:8px; color:#f97316;"></i>
              Army Operational Risk Categories
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Risk:</strong> Army mission failure, multi-corps coordination breakdown, and operational capability degradation</p>
              <p style="margin:0 0 8px 0;"><strong>• Strategic Risk:</strong> Theater strategic objective impact, coalition relationship consequences, and long-term implications</p>
              <p style="margin:0 0 8px 0;"><strong>• Tactical Risk:</strong> Corps-level tactical failure, force protection, and subordinate unit capability loss</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Risk:</strong> Army-level alliance cohesion, partner nation commitment, and multinational coordination</p>
              <p style="margin:0;"><strong>• Resource Risk:</strong> Army resource depletion, multi-corps sustainability, and competing priority impacts</p>
            </div>
          </div>

          <!-- Risk Assessment Process -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fb923c; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chart-line" style="margin-right:8px; color:#f97316;"></i>
              Army Risk Assessment Process
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Risk Identification:</strong> Comprehensive identification of Army operational and tactical risks across corps</p>
              <p style="margin:0 0 8px 0;"><strong>• Probability Assessment:</strong> Statistical and analytical assessment of Army risk probability and likelihood</p>
              <p style="margin:0 0 8px 0;"><strong>• Impact Analysis:</strong> Comprehensive analysis of potential consequences and operational implications</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Prioritization:</strong> Priority ranking based on probability, impact, and Army operational significance</p>
              <p style="margin:0;"><strong>• Mitigation Planning:</strong> Development of Army risk mitigation strategies and contingency plans</p>
            </div>
          </div>

          <!-- Risk Mitigation Strategies -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fb923c; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-shield-alt" style="margin-right:8px; color:#f97316;"></i>
              Army Risk Mitigation Strategies
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Risk Avoidance:</strong> Army COA modification to eliminate or significantly reduce identified risks</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Reduction:</strong> Implementation of Army measures to reduce risk probability or impact</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Transfer:</strong> Sharing Army risk burden with coalition partners or theater assets</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Acceptance:</strong> Conscious acceptance of residual Army risk with appropriate approval authority</p>
              <p style="margin:0;"><strong>• Contingency Planning:</strong> Development of Army branch and sequel plans for risk materialization</p>
            </div>
          </div>

          <!-- Risk Monitoring -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fb923c; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-eye" style="margin-right:8px; color:#f97316;"></i>
              Army Risk Monitoring and Control
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Continuous Assessment:</strong> Ongoing Army risk assessment and monitoring throughout operation execution</p>
              <p style="margin:0 0 8px 0;"><strong>• Early Warning Systems:</strong> Implementation of Army indicators and warning systems for risk detection</p>
              <p style="margin:0 0 8px 0;"><strong>• Decision Points:</strong> Predetermined Army decision points for risk reassessment and mitigation adjustment</p>
              <p style="margin:0 0 8px 0;"><strong>• Reporting Procedures:</strong> Regular Army risk reporting to theater headquarters and coalition partners</p>
              <p style="margin:0;"><strong>• Adaptive Management:</strong> Dynamic Army risk management and mitigation strategy adjustment</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Army Resource Allocation -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-chart-pie" style="margin-right:8px; color:#10b981;"></i>
          Army Resource Allocation and Distribution Framework
        </h3>

        <div style="background-color:rgba(16, 185, 129, 0.1); padding:12px; border-radius:6px; border:1px solid #10b981; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#6ee7b7; font-size:12px; margin:0 0 8px 0;">Army Resource Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Army Resource Management:</strong> Army commanders must optimize allocation of limited operational resources across competing corps priorities, coalition requirements, and extended operational timelines. Resource planning encompasses personnel, equipment, logistics, intelligence, and operational capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Force Allocation -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#6ee7b7; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-users-cog" style="margin-right:8px; color:#10b981;"></i>
              Army Force Allocation
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Corps Allocation:</strong> Distribution of corps forces across Army operational areas and mission priorities</p>
              <p style="margin:0 0 8px 0;"><strong>• Army Reserve:</strong> Allocation and employment of Army reserve forces and capabilities</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Forces:</strong> Integration and allocation of multinational corps and division contributions</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Commands:</strong> Allocation of Army aviation, artillery, and specialized capabilities</p>
              <p style="margin:0;"><strong>• Force Rotation:</strong> Army force rotation and sustainment planning across multiple corps</p>
            </div>
          </div>

          <!-- Logistics Resources -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#6ee7b7; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-truck" style="margin-right:8px; color:#10b981;"></i>
              Army Logistics Resources
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Supply Chain Management:</strong> Army supply chain optimization and multi-corps distribution network</p>
              <p style="margin:0 0 8px 0;"><strong>• Transportation Assets:</strong> Army transportation capability allocation and movement coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Fuel and Energy:</strong> Army fuel distribution and energy resource management across corps</p>
              <p style="margin:0 0 8px 0;"><strong>• Medical Resources:</strong> Army medical capability and evacuation resource allocation</p>
              <p style="margin:0;"><strong>• Maintenance Support:</strong> Army maintenance capability and equipment serviceability management</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Army Command Considerations -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-star" style="margin-right:8px; color:#f59e0b;"></i>
          Army Command Considerations and Strategic Leadership
        </h3>

        <div style="background-color:rgba(245, 158, 11, 0.1); padding:12px; border-radius:6px; border:1px solid #f59e0b; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#fbbf24; font-size:12px; margin:0 0 8px 0;">Army Command Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Army Strategic Command Authority:</strong> Army commanders exercise strategic-operational command authority over multiple corps, large geographic areas, and coalition partners. Command considerations encompass operational decision-making, strategic art application, and tactical execution oversight with comprehensive understanding of theater strategic objectives and operational implications.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Operational Decision Making -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-chess-king" style="margin-right:8px; color:#f59e0b;"></i>
              Army Operational Decision Making
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Vision:</strong> Development and communication of Army operational vision and commander's intent</p>
              <p style="margin:0 0 8px 0;"><strong>• Decision Authority:</strong> Exercise of Army operational decision authority within theater guidance parameters</p>
              <p style="margin:0 0 8px 0;"><strong>• Risk Acceptance:</strong> Army operational risk acceptance and mitigation decision-making</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Prioritization:</strong> Army resource allocation and priority determination across corps</p>
              <p style="margin:0;"><strong>• Coalition Leadership:</strong> Multinational Army leadership and alliance relationship management</p>
            </div>
          </div>

          <!-- Strategic Art Application -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-palette" style="margin-right:8px; color:#f59e0b;"></i>
              Army Strategic Art Application
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Design:</strong> Application of operational design methodology to Army operational problems</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Approach:</strong> Development of comprehensive Army operational approaches</p>
              <p style="margin:0 0 8px 0;"><strong>• Campaign Design:</strong> Army campaign design and operational concept development</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Functions:</strong> Integration of operational functions across Army operations</p>
              <p style="margin:0;"><strong>• Operational Sequencing:</strong> Army operation sequencing and phasing coordination</p>
            </div>
          </div>

          <!-- Staff Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-users-cog" style="margin-right:8px; color:#f59e0b;"></i>
              Army Staff Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Army Staff Coordination:</strong> Army staff integration and coordination across all staff sections</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps Staff Interface:</strong> Corps staff integration and Army planning coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Planning:</strong> Army operational planning process management and oversight</p>
              <p style="margin:0 0 8px 0;"><strong>• Decision Support:</strong> Army operational decision support system utilization and management</p>
              <p style="margin:0;"><strong>• Information Management:</strong> Army operational information management and intelligence integration</p>
            </div>
          </div>

          <!-- Operational Communication -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-bullhorn" style="margin-right:8px; color:#f59e0b;"></i>
              Army Operational Communication
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Theater Coordination:</strong> Communication with theater command and strategic leadership</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Communication:</strong> Army operational communication with coalition partners</p>
              <p style="margin:0 0 8px 0;"><strong>• Corps Coordination:</strong> Army operational coordination with subordinate corps commands</p>
              <p style="margin:0 0 8px 0;"><strong>• Information Operations:</strong> Army information operations and narrative development</p>
              <p style="margin:0;"><strong>• Joint Coordination:</strong> Coordination with joint force and interagency partners</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Army Timeline and Phasing -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-clock" style="margin-right:8px; color:#8b5cf6;"></i>
          Army Timeline and Operational Phasing Framework
        </h3>

        <div style="background-color:rgba(139, 92, 246, 0.1); padding:12px; border-radius:6px; border:1px solid #8b5cf6; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#c4b5fd; font-size:12px; margin:0 0 8px 0;">Army Phasing Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Army Operational Timeline Management:</strong> Army operations require comprehensive phasing and timeline coordination across multiple corps, coalition partners, and extended operational timelines. Phasing must accommodate operational deployment, multi-corps buildup, sustained operations, and operational transition with flexible adaptation capabilities.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Operational Phasing -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-layer-group" style="margin-right:8px; color:#8b5cf6;"></i>
              Army Operational Phasing
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Phase 0:</strong> Shape - Army shaping operations and operational preparation</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase I:</strong> Deter - Army deterrence and crisis response preparation</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase II:</strong> Seize Initiative - Initial Army operations and operational advantage establishment</p>
              <p style="margin:0 0 8px 0;"><strong>• Phase III:</strong> Dominate - Major Army combat operations and operational objective achievement</p>
              <p style="margin:0;"><strong>• Phase IV:</strong> Stabilize - Post-conflict Army stabilization and operational transition</p>
            </div>
          </div>

          <!-- Timeline Coordination -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-calendar-alt" style="margin-right:8px; color:#8b5cf6;"></i>
              Army Timeline Coordination
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Deployment:</strong> Army force deployment timeline and operational lift coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Synchronization:</strong> Multinational Army timeline coordination and partner integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Tempo:</strong> Sustainable Army operational tempo and endurance planning</p>
              <p style="margin:0 0 8px 0;"><strong>• Decision Points:</strong> Army operational decision points and branch/sequel planning triggers</p>
              <p style="margin:0;"><strong>• Transition Planning:</strong> Army phase transition criteria and operational milestone achievement</p>
            </div>
          </div>

          <!-- Synchronization Matrix -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-sync-alt" style="margin-right:8px; color:#8b5cf6;"></i>
              Army Synchronization Matrix
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multi-Corps Synchronization:</strong> Coordinated operations across all corps and operational functions</p>
              <p style="margin:0 0 8px 0;"><strong>• Supporting Command Coordination:</strong> Army aviation, artillery, and logistics command synchronization</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Integration:</strong> Multinational Army operation synchronization and coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Communication:</strong> Information operations and Army messaging coordination</p>
              <p style="margin:0;"><strong>• Resource Synchronization:</strong> Army resource allocation and distribution timing</p>
            </div>
          </div>

          <!-- Adaptive Planning -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-arrows-alt" style="margin-right:8px; color:#8b5cf6;"></i>
              Army Adaptive Planning
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Flexible Phasing:</strong> Adaptive Army phasing based on operational conditions and requirements</p>
              <p style="margin:0 0 8px 0;"><strong>• Branch Planning:</strong> Alternative Army courses of action for changing operational conditions</p>
              <p style="margin:0 0 8px 0;"><strong>• Sequel Planning:</strong> Follow-on Army operations and operational transition planning</p>
              <p style="margin:0 0 8px 0;"><strong>• Contingency Integration:</strong> Army contingency plan integration and crisis response capability</p>
              <p style="margin:0;"><strong>• Operational Agility:</strong> Rapid Army operational adaptation and flexibility</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Army Multi-Domain Operations Integration -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-globe" style="margin-right:8px; color:#1d4ed8;"></i>
          Army Multi-Domain Operations Integration and Convergence
        </h3>

        <div style="background-color:rgba(29, 78, 216, 0.1); padding:12px; border-radius:6px; border:1px solid #1d4ed8; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#93c5fd; font-size:12px; margin:0 0 8px 0;">Army Multi-Domain Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Army Multi-Domain Operations:</strong> Army commanders must integrate and synchronize operations across all domains - land, air, maritime, space, and cyberspace - to achieve operational objectives. Multi-domain convergence requires comprehensive understanding of domain interactions, cross-domain effects, and synchronized multi-corps operations across extended operational areas.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Land Domain Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-mountain" style="margin-right:8px; color:#1d4ed8;"></i>
              Army Land Domain Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Multi-Corps Operations:</strong> Synchronized land operations across multiple corps and operational areas</p>
              <p style="margin:0 0 8px 0;"><strong>• Terrain Integration:</strong> Army terrain analysis and multi-domain terrain utilization</p>
              <p style="margin:0 0 8px 0;"><strong>• Ground Maneuver:</strong> Large-scale ground maneuver coordination and multi-corps integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Urban Operations:</strong> Army urban operations and complex terrain navigation</p>
              <p style="margin:0;"><strong>• Coalition Ground Forces:</strong> Multinational ground force integration and coordination</p>
            </div>
          </div>

          <!-- Air Domain Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-plane" style="margin-right:8px; color:#1d4ed8;"></i>
              Army Air Domain Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Army Aviation:</strong> Army aviation integration and multi-corps aviation coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Air-Ground Integration:</strong> Close air support and Army ground operation coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Airspace Management:</strong> Army airspace coordination and joint airspace integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Air Mobility:</strong> Army air mobility and strategic lift coordination</p>
              <p style="margin:0;"><strong>• Air Defense:</strong> Army air defense and integrated air and missile defense</p>
            </div>
          </div>

          <!-- Maritime Domain Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-anchor" style="margin-right:8px; color:#1d4ed8;"></i>
              Army Maritime Domain Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Amphibious Operations:</strong> Army amphibious capability and joint amphibious coordination</p>
              <p style="margin:0 0 8px 0;"><strong>• Coastal Operations:</strong> Army coastal defense and littoral operation integration</p>
              <p style="margin:0 0 8px 0;"><strong>• Maritime Logistics:</strong> Army maritime logistics and sea-based sustainment</p>
              <p style="margin:0 0 8px 0;"><strong>• River Operations:</strong> Army riverine operations and inland waterway utilization</p>
              <p style="margin:0;"><strong>• Joint Maritime:</strong> Army-Navy coordination and maritime domain awareness</p>
            </div>
          </div>

          <!-- Space and Cyber Integration -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#93c5fd; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-satellite" style="margin-right:8px; color:#1d4ed8;"></i>
              Army Space and Cyber Integration
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Space Operations:</strong> Army space capability utilization and space-based enablers</p>
              <p style="margin:0 0 8px 0;"><strong>• Cyber Operations:</strong> Army cyber capability and defensive cyber operations</p>
              <p style="margin:0 0 8px 0;"><strong>• Electronic Warfare:</strong> Army electronic warfare and spectrum management</p>
              <p style="margin:0 0 8px 0;"><strong>• Information Operations:</strong> Army information operations and cognitive domain effects</p>
              <p style="margin:0;"><strong>• Intelligence Integration:</strong> Multi-domain intelligence and reconnaissance integration</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Army Operational Assessment Framework -->
      <div style="background-color:#0f172a; border:1px solid #334155; border-radius:8px; padding:16px; margin-bottom:20px;">
        <h3 style="color:#e2e8f0; font-size:16px; font-weight:600; margin:0 0 16px 0;">
          <i class="fas fa-chart-bar" style="margin-right:8px; color:#6366f1;"></i>
          Army Operational Assessment and Effectiveness Measurement
        </h3>

        <div style="background-color:rgba(99, 102, 241, 0.1); padding:12px; border-radius:6px; border:1px solid #6366f1; margin-bottom:16px;">
          <h5 style="font-weight:600; color:#a5b4fc; font-size:12px; margin:0 0 8px 0;">Army Assessment Framework</h5>
          <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
            <strong>Army Operational Assessment:</strong> Continuous assessment of Army operational effectiveness, progress toward objectives, and adaptation requirements. Assessment encompasses quantitative metrics, qualitative analysis, and comprehensive evaluation of Army operational performance across multiple corps and coalition partners.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <!-- Effectiveness Measures -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-ruler" style="margin-right:8px; color:#6366f1;"></i>
              Army Effectiveness Measures
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Mission Accomplishment:</strong> Army mission objective achievement and operational end state progress</p>
              <p style="margin:0 0 8px 0;"><strong>• Operational Capability:</strong> Army operational capability maintenance and multi-corps effectiveness</p>
              <p style="margin:0 0 8px 0;"><strong>• Coalition Effectiveness:</strong> Multinational Army effectiveness and alliance cohesion measurement</p>
              <p style="margin:0 0 8px 0;"><strong>• Resource Efficiency:</strong> Army resource utilization efficiency and optimization assessment</p>
              <p style="margin:0;"><strong>• Operational Tempo:</strong> Sustainable Army operational tempo and endurance evaluation</p>
            </div>
          </div>

          <!-- Performance Indicators -->
          <div style="background-color:#1e293b; border:1px solid #475569; border-radius:8px; padding:12px;">
            <h4 style="color:#a5b4fc; font-size:14px; font-weight:600; margin:0 0 12px 0;">
              <i class="fas fa-tachometer-alt" style="margin-right:8px; color:#6366f1;"></i>
              Army Performance Indicators
            </h4>
            <div style="color:#d1d5db; font-size:12px; line-height:1.4;">
              <p style="margin:0 0 8px 0;"><strong>• Operational Metrics:</strong> Quantitative Army operational performance metrics and statistical analysis</p>
              <p style="margin:0 0 8px 0;"><strong>• Qualitative Assessment:</strong> Army operational effectiveness qualitative evaluation and analysis</p>
              <p style="margin:0 0 8px 0;"><strong>• Comparative Analysis:</strong> Army performance comparison with operational plans and expectations</p>
              <p style="margin:0 0 8px 0;"><strong>• Trend Analysis:</strong> Army operational trend identification and performance trajectory assessment</p>
              <p style="margin:0;"><strong>• Predictive Assessment:</strong> Army operational outcome prediction and future performance estimation</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary Section -->
      <div style="background-color:#374151; padding:16px; border-radius:8px; border-left:4px solid #f59e0b; margin-bottom:20px;">
        <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 8px 0;">
          <i class="fas fa-graduation-cap" style="margin-right:8px;"></i>
          Army COA Development - Educational Framework Summary
        </h4>
        <p style="color:#d1d5db; font-size:12px; line-height:1.4; margin:0;">
          <strong>UNCLASSIFIED:</strong> This comprehensive doctrinal framework provides senior military officers with essential knowledge for Army-level COA development processes. The framework integrates FM 5-0 doctrine with operational-level considerations, coalition operations, and multi-corps coordination requirements essential for effective Army command and strategic military education.
        </p>
      </div>
    </div>
  `;
  }
};

export default armyCOAAnalysisModule;
