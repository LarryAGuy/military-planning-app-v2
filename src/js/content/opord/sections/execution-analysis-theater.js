/**
 * OPORD Execution - Echelon Analysis - Theater Level
 * UNCLASSIFIED content for theater-level execution analysis frameworks
 * Follows FM 5-0 standards with comprehensive strategic execution requirements
 * Foundation module for all subordinate echelon execution analysis modules
 */

export const theaterExecutionAnalysisModule = {
    id: 'theater-execution-analysis',
    title: 'Theater Level Execution Analysis',
    classification: 'UNCLASSIFIED',
    echelon: 'Theater',

    getContent() {
        return `
            <!-- Theater Level Execution Analysis - Strategic Command Framework -->
            <div id="theater-execution-analysis" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-globe" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        Theater Level Execution Analysis Framework
                    </h3>
                    <p style="color: #c4b5fd; font-size: 14px; margin: 8px 0 0 0;">
                        Strategic Command and Control - Multi-Domain Operations Execution
                    </p>
                </div>

                <!-- Analysis Cards Grid -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 1: Strategic Concept of Operations -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-chess-king" style="margin-right: 8px; color: #f97316; font-size: 12px;"></i>
                                Strategic Concept of Operations Framework
                            </h4>

                            <!-- Multi-Domain Operations Framework -->
                            <div style="background-color: rgba(249, 115, 22, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f97316; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 12px; margin: 0 0 6px 0;">Multi-Domain Operations (MDO)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Land Domain:</strong> Theater army operations, strategic ground mobility, cross-border operations</li>
                                    <li><strong>Air Domain:</strong> Theater air operations, strategic airlift, air superiority campaigns</li>
                                    <li><strong>Maritime Domain:</strong> Sea control operations, strategic sealift, naval integration</li>
                                    <li><strong>Space Domain:</strong> Satellite communications, space-based ISR, GPS/PNT operations</li>
                                    <li><strong>Cyber Domain:</strong> Network operations, information warfare, cyber defense</li>
                                    <li><strong>Information Environment:</strong> Strategic messaging, influence operations, MISO</li>
                                </ul>
                            </div>

                            <!-- Strategic Campaign Design -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f97316; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 12px; margin: 0 0 6px 0;">Strategic Campaign Design</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase 0:</strong> Shape<br>
                                        <strong>Phase I:</strong> Deter<br>
                                        <strong>Phase II:</strong> Seize Initiative
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Phase III:</strong> Dominate<br>
                                        <strong>Phase IV:</strong> Stabilize<br>
                                        <strong>Phase V:</strong> Enable Civil Authority
                                    </div>
                                </div>
                            </div>

                            <!-- Strategic Lines of Effort -->
                            <div style="background-color: rgba(249, 115, 22, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #f97316;">
                                <h5 style="font-weight: 600; color: #fdba74; font-size: 12px; margin: 0 0 4px 0;">Strategic Lines of Effort</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>LOE 1:</strong> Diplomatic • <strong>LOE 2:</strong> Information • <strong>LOE 3:</strong> Military • <strong>LOE 4:</strong> Economic
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 2: Theater Task Organization -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-sitemap" style="margin-right: 8px; color: #16a34a; font-size: 12px;"></i>
                                Theater Strategic Task Organization
                            </h4>

                            <!-- Joint Force Components -->
                            <div style="background-color: rgba(22, 163, 74, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Joint Force Components</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Joint Force Land Component (JFLCC):</strong> Theater Army, strategic ground operations</li>
                                    <li><strong>Joint Force Air Component (JFACC):</strong> Theater Air Force, strategic air operations</li>
                                    <li><strong>Joint Force Maritime Component (JFMCC):</strong> Theater Navy, strategic maritime operations</li>
                                    <li><strong>Joint Force Special Operations Component (JFSOCC):</strong> Theater SOF command</li>
                                    <li><strong>Joint Force Space Component (JFSPCC):</strong> Theater space operations</li>
                                    <li><strong>Joint Force Cyber Component (JFCYCC):</strong> Theater cyber operations</li>
                                </ul>
                            </div>

                            <!-- Theater Enabling Commands -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #16a34a; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 6px 0;">Theater Enabling Commands</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Theater Sustainment Command</strong><br>
                                        <strong>Theater Intelligence Command</strong><br>
                                        <strong>Theater Signal Command</strong>
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Theater Medical Command</strong><br>
                                        <strong>Theater Engineer Command</strong><br>
                                        <strong>Theater Military Police Command</strong>
                                    </div>
                                </div>
                            </div>

                            <!-- Coalition Integration Framework -->
                            <div style="background-color: rgba(22, 163, 74, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #16a34a;">
                                <h5 style="font-weight: 600; color: #86efac; font-size: 12px; margin: 0 0 4px 0;">Coalition Integration Framework</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>NATO:</strong> Article 5 collective defense • <strong>Bilateral:</strong> Status of Forces Agreements •
                                    <strong>Multinational:</strong> Combined Joint Task Force • <strong>Interoperability:</strong> STANAG compliance
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 3: Strategic Coordinating Instructions -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-cogs" style="margin-right: 8px; color: #eab308; font-size: 12px;"></i>
                                Strategic Coordinating Instructions Framework
                            </h4>

                            <!-- Strategic Control Measures -->
                            <div style="background-color: rgba(234, 179, 8, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Strategic Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Theater Boundaries:</strong> Geographic command limits, Area of Responsibility (AOR)</li>
                                    <li><strong>Strategic Phase Lines:</strong> Campaign milestone markers, decisive point indicators</li>
                                    <li><strong>Strategic Coordination Lines:</strong> Inter-theater coordination, adjacent command boundaries</li>
                                    <li><strong>Strategic Fire Support Coordination:</strong> Theater-level targeting, strategic fires deconfliction</li>
                                    <li><strong>Strategic Air Coordination:</strong> Theater airspace control, strategic airlift coordination</li>
                                    <li><strong>Strategic Maritime Coordination:</strong> Sea control areas, strategic sealift coordination</li>
                                </ul>
                            </div>

                            <!-- Strategic Decision Points -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #eab308; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 6px 0;">Strategic Decision Points & Triggers</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Political-Military:</strong> Escalation thresholds<br>
                                        <strong>Operational:</strong> Phase transition criteria<br>
                                        <strong>Strategic:</strong> Campaign termination conditions
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Coalition:</strong> Multinational decision points<br>
                                        <strong>Resource:</strong> Strategic reserve commitment<br>
                                        <strong>Information:</strong> Strategic messaging triggers
                                    </div>
                                </div>
                            </div>

                            <!-- Strategic ROE Framework -->
                            <div style="background-color: rgba(234, 179, 8, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #eab308;">
                                <h5 style="font-weight: 600; color: #fde047; font-size: 12px; margin: 0 0 4px 0;">Strategic Rules of Engagement Framework</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Theater ROE:</strong> Strategic engagement authority • <strong>Escalation:</strong> National command authority approval •
                                    <strong>Coalition:</strong> Multinational ROE coordination • <strong>LOAC:</strong> Law of Armed Conflict compliance
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 4: Theater Sustainment & Communications -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-satellite" style="margin-right: 8px; color: #06b6d4; font-size: 12px;"></i>
                                Theater Sustainment & Communications Framework
                            </h4>

                            <!-- Strategic Sustainment Architecture -->
                            <div style="background-color: rgba(6, 182, 212, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Strategic Sustainment Architecture</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Strategic Mobility:</strong> USTRANSCOM coordination, strategic airlift/sealift integration</li>
                                    <li><strong>Theater Distribution:</strong> Multi-modal logistics networks, strategic distribution hubs</li>
                                    <li><strong>Host Nation Support:</strong> Infrastructure utilization, bilateral logistics agreements</li>
                                    <li><strong>Strategic Reserves:</strong> Theater stockpiles, strategic petroleum reserves, ammunition</li>
                                    <li><strong>Contractor Support:</strong> Theater support contracts, logistics civil augmentation</li>
                                    <li><strong>Medical Support:</strong> Theater medical evacuation, strategic patient movement</li>
                                </ul>
                            </div>

                            <!-- Strategic Communications Architecture -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #06b6d4; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 6px 0;">Strategic Communications Architecture</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Satellite Communications:</strong> MILSATCOM, COMSATCOM<br>
                                        <strong>Terrestrial Networks:</strong> Fiber optic, microwave<br>
                                        <strong>Coalition Networks:</strong> NATO interoperability
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Cyber Defense:</strong> Theater network security<br>
                                        <strong>Information Systems:</strong> C4ISR integration<br>
                                        <strong>Strategic Messaging:</strong> Public affairs coordination
                                    </div>
                                </div>
                            </div>

                            <!-- Theater Intelligence Architecture -->
                            <div style="background-color: rgba(6, 182, 212, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #06b6d4;">
                                <h5 style="font-weight: 600; color: #67e8f9; font-size: 12px; margin: 0 0 4px 0;">Theater Intelligence Architecture</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Strategic ISR:</strong> National intelligence integration • <strong>Theater ISR:</strong> Joint collection management •
                                    <strong>Coalition Intel:</strong> Information sharing agreements • <strong>All-Source:</strong> Strategic intelligence fusion
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Additional Theater Analysis Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 5: Strategic Risk Assessment Framework -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-exclamation-triangle" style="margin-right: 8px; color: #dc2626; font-size: 12px;"></i>
                                Strategic Risk Assessment Framework
                            </h4>

                            <!-- Strategic Risk Categories -->
                            <div style="background-color: rgba(220, 38, 38, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Strategic Risk Categories</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Political Risk:</strong> Coalition cohesion, domestic support, international legitimacy</li>
                                    <li><strong>Strategic Risk:</strong> Escalation potential, strategic surprise, campaign failure</li>
                                    <li><strong>Operational Risk:</strong> Force protection, operational tempo, logistics vulnerability</li>
                                    <li><strong>Tactical Risk:</strong> Force ratio imbalances, terrain disadvantages, weather impacts</li>
                                    <li><strong>Information Risk:</strong> Cyber attacks, information warfare, strategic messaging</li>
                                    <li><strong>Economic Risk:</strong> Resource constraints, economic warfare, financial stability</li>
                                </ul>
                            </div>

                            <!-- Risk Mitigation Strategies -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #dc2626; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Risk Mitigation Strategies</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Preventive:</strong> Early warning systems<br>
                                        <strong>Protective:</strong> Force protection measures<br>
                                        <strong>Responsive:</strong> Crisis response plans
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Adaptive:</strong> Flexible planning<br>
                                        <strong>Redundant:</strong> Backup systems<br>
                                        <strong>Resilient:</strong> Recovery capabilities
                                    </div>
                                </div>
                            </div>

                            <!-- Strategic Decision Matrix -->
                            <div style="background-color: rgba(220, 38, 38, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #dc2626;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 4px 0;">Strategic Decision Matrix</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>High Impact/High Probability:</strong> Immediate action • <strong>High Impact/Low Probability:</strong> Contingency planning •
                                    <strong>Low Impact/High Probability:</strong> Standard procedures • <strong>Low Impact/Low Probability:</strong> Monitor
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 6: Strategic Assessment & Metrics -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-chart-line" style="margin-right: 8px; color: #8b5cf6; font-size: 12px;"></i>
                                Strategic Assessment & Metrics Framework
                            </h4>

                            <!-- Strategic Measures of Effectiveness -->
                            <div style="background-color: rgba(139, 92, 246, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Strategic Measures of Effectiveness (MOEs)</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Political Objectives:</strong> Coalition unity, international support, domestic approval</li>
                                    <li><strong>Strategic Objectives:</strong> Deterrence effectiveness, strategic stability, conflict termination</li>
                                    <li><strong>Operational Objectives:</strong> Campaign progress, force readiness, operational tempo</li>
                                    <li><strong>Information Objectives:</strong> Narrative dominance, influence operations, cyber resilience</li>
                                    <li><strong>Economic Objectives:</strong> Resource efficiency, economic stability, cost-effectiveness</li>
                                    <li><strong>Humanitarian Objectives:</strong> Civilian protection, humanitarian access, stability</li>
                                </ul>
                            </div>

                            <!-- Strategic Measures of Performance -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #8b5cf6; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Strategic Measures of Performance (MOPs)</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Force Deployment:</strong> Strategic mobility rates<br>
                                        <strong>Logistics:</strong> Sustainment flow rates<br>
                                        <strong>Intelligence:</strong> Collection effectiveness
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Operations:</strong> Mission success rates<br>
                                        <strong>Communications:</strong> Network availability<br>
                                        <strong>Coalition:</strong> Interoperability metrics
                                    </div>
                                </div>
                            </div>

                            <!-- Strategic Assessment Cycle -->
                            <div style="background-color: rgba(139, 92, 246, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #8b5cf6;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 4px 0;">Strategic Assessment Cycle</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Monitor:</strong> Continuous assessment • <strong>Evaluate:</strong> Progress analysis •
                                    <strong>Recommend:</strong> Course corrections • <strong>Decide:</strong> Strategic adjustments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Strategic Planning & Integration Cards -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">

                    <!-- Card 7: Strategic Planning Integration -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-puzzle-piece" style="margin-right: 8px; color: #059669; font-size: 12px;"></i>
                                Strategic Planning Integration Framework
                            </h4>

                            <!-- National Strategic Integration -->
                            <div style="background-color: rgba(5, 150, 105, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #059669; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">National Strategic Integration</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>National Security Strategy:</strong> Strategic guidance alignment, national objectives</li>
                                    <li><strong>National Defense Strategy:</strong> Defense priorities, strategic approach integration</li>
                                    <li><strong>National Military Strategy:</strong> Military strategic objectives, force employment</li>
                                    <li><strong>Combatant Command Strategy:</strong> Theater strategic objectives, campaign design</li>
                                    <li><strong>Joint Strategic Planning:</strong> JSPS integration, strategic estimate development</li>
                                    <li><strong>Interagency Coordination:</strong> Whole-of-government approach, USG integration</li>
                                </ul>
                            </div>

                            <!-- Strategic Planning Processes -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #059669; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Strategic Planning Processes</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>JSPS:</strong> Joint Strategic Planning System<br>
                                        <strong>JOPES:</strong> Joint Operation Planning & Execution<br>
                                        <strong>PPBE:</strong> Planning, Programming, Budgeting
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>GEF:</strong> Globally Integrated Operations<br>
                                        <strong>CCMD:</strong> Combatant Command Planning<br>
                                        <strong>JFC:</strong> Joint Force Commander Planning
                                    </div>
                                </div>
                            </div>

                            <!-- Strategic Synchronization -->
                            <div style="background-color: rgba(5, 150, 105, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #059669;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 4px 0;">Strategic Synchronization Matrix</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Vertical:</strong> National-Theater-Operational-Tactical • <strong>Horizontal:</strong> Joint-Interagency-Intergovernmental-Multinational •
                                    <strong>Temporal:</strong> Strategic-Operational-Tactical timelines • <strong>Functional:</strong> DIME integration
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Card 8: Theater Execution Control -->
                    <div style="
                        background-color: #1f2937;
                        border: 1px solid #374151;
                        border-radius: 8px;
                        padding: 16px;
                        display: flex;
                        flex-direction: column;
                        min-height: 400px;
                    ">
                        <div style="flex-grow: 1;">
                            <h4 style="font-size: 14px; font-weight: 600; color: white; margin: 0 0 12px 0; display: flex; align-items: center;">
                                <i class="fas fa-sliders-h" style="margin-right: 8px; color: #f59e0b; font-size: 12px;"></i>
                                Theater Execution Control Framework
                            </h4>

                            <!-- Strategic Command & Control -->
                            <div style="background-color: rgba(245, 158, 11, 0.1); padding: 10px; border-radius: 6px; border: 1px solid #f59e0b; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Strategic Command & Control Architecture</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0; padding-left: 14px;">
                                    <li><strong>Strategic Direction:</strong> National Command Authority, Secretary of War guidance</li>
                                    <li><strong>Theater Command:</strong> Combatant Commander strategic direction, theater objectives</li>
                                    <li><strong>Joint Force Command:</strong> Joint Task Force headquarters, component coordination</li>
                                    <li><strong>Component Command:</strong> Service component strategic execution, force employment</li>
                                    <li><strong>Coalition Command:</strong> Multinational coordination, combined operations control</li>
                                    <li><strong>Strategic Communications:</strong> Theater strategic messaging, information coordination</li>
                                </ul>
                            </div>

                            <!-- Execution Monitoring & Control -->
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f59e0b; margin-bottom: 10px;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 6px 0;">Execution Monitoring & Control Systems</h5>
                                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Strategic Monitoring:</strong> Campaign assessment<br>
                                        <strong>Operational Monitoring:</strong> Phase progress<br>
                                        <strong>Tactical Monitoring:</strong> Mission execution
                                    </div>
                                    <div style="color: #d1d5db; font-size: 12px; line-height: 1.3;">
                                        <strong>Strategic Control:</strong> Course corrections<br>
                                        <strong>Resource Control:</strong> Strategic allocation<br>
                                        <strong>Information Control:</strong> Strategic messaging
                                    </div>
                                </div>
                            </div>

                            <!-- Strategic Decision Cycle -->
                            <div style="background-color: rgba(245, 158, 11, 0.05); padding: 8px; border-radius: 4px; border: 1px dashed #f59e0b;">
                                <h5 style="font-weight: 600; color: #fbbf24; font-size: 12px; margin: 0 0 4px 0;">Strategic Decision Cycle (OODA Loop)</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.3; margin: 0;">
                                    <strong>Observe:</strong> Strategic intelligence collection • <strong>Orient:</strong> Strategic situation assessment •
                                    <strong>Decide:</strong> Strategic course of action • <strong>Act:</strong> Strategic directive implementation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Comprehensive Doctrinal Reference -->
                <div style="background-color: #064e3b; border: 1px solid #059669; border-radius: 8px; padding: 20px; margin-top: 20px;">
                    <h4 style="font-weight: 600; color: #a7f3d0; font-size: 16px; margin: 0 0 16px 0; display: flex; align-items: center;">
                        <i class="fas fa-book-open" style="margin-right: 10px; color: #6ee7b7;"></i>
                        Theater Execution Analysis Comprehensive Doctrinal Foundation
                    </h4>

                    <!-- Primary Joint & Strategic Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Primary Joint & Strategic Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Joint Strategic Planning:</strong> JP 5-0 (Joint Planning), JP 3-0 (Joint Operations), JP 1 (Doctrine for the Armed Forces)<br>
                            <strong>Theater Operations:</strong> JP 3-33 (Joint Task Force Headquarters), JP 3-31 (Joint Land Operations), JP 3-30 (Joint Air Operations)<br>
                            <strong>Multi-Domain Operations:</strong> JP 3-14 (Space Operations), JP 3-12 (Cyberspace Operations), JP 3-13 (Information Operations)
                        </p>
                    </div>

                    <!-- Army Strategic & Theater Doctrine -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Army Strategic & Theater Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Theater Army Operations:</strong> FM 3-94 (Theater Army Operations), ATP 3-94 (Theater Army Operations)<br>
                            <strong>Strategic Operations:</strong> FM 3-0 (Operations), ADP 3-0 (Operations), FM 5-0 (Operations Process)<br>
                            <strong>Multi-Domain Operations:</strong> FM 3-0 (Operations), ATP 3-94 (Theater Army Operations)
                        </p>
                    </div>

                    <!-- Strategic Planning & Assessment -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Strategic Planning & Assessment Doctrine</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Strategic Assessment:</strong> JP 5-0 (Joint Planning), FM 5-0 (Operations Process), JP 3-0 (Joint Operations)<br>
                            <strong>Risk Management:</strong> JP 5-0 (Joint Planning), FM 5-19 (Composite Risk Management), ATP 5-19 (Risk Management)<br>
                            <strong>Campaign Design:</strong> JP 5-0 (Joint Planning), FM 3-0 (Operations), ADP 5-0 (The Operations Process)
                        </p>
                    </div>

                    <!-- Coalition & Interagency Integration -->
                    <div style="margin-bottom: 16px;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Coalition & Interagency Integration</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Coalition Operations:</strong> JP 3-16 (Multinational Operations), FM 3-16 (The Army in Multinational Operations)<br>
                            <strong>Interagency Coordination:</strong> JP 3-08 (Interorganizational Cooperation), FM 3-57 (Civil Affairs Operations)<br>
                            <strong>NATO Integration:</strong> AJP-01 (Allied Joint Doctrine), AJP-3 (Allied Joint Doctrine for the Conduct of Operations)
                        </p>
                    </div>

                    <!-- Strategic Sustainment & Communications -->
                    <div style="margin-bottom: 0;">
                        <h5 style="color: #a7f3d0; font-size: 13px; font-weight: 600; margin: 0 0 8px 0;">Strategic Sustainment & Communications</h5>
                        <p style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0;">
                            <strong>Strategic Sustainment:</strong> JP 4-0 (Joint Logistics), FM 4-0 (Sustainment Operations), ATP 4-93 (Sustainment Brigade)<br>
                            <strong>Strategic Communications:</strong> JP 6-0 (Joint Communications System), FM 6-0 (Commander and Staff Organization)<br>
                            <strong>Theater Intelligence:</strong> JP 2-0 (Joint Intelligence), FM 2-0 (Intelligence), ATP 2-33.4 (Intelligence Analysis)
                        </p>
                    </div>
                </div>
            </div>
        `;
    }
};
