/**
 * JPP Step 1: Planning Initiation - Echelon Analysis - Army Level
 * UNCLASSIFIED content for army-level planning initiation analysis
 * Follows JP 5-0 standards with army-level strategic analysis considerations
 */

export function getArmyPlanningInitiationAnalysis() {
    return `
        <div style="padding: 20px;">
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-star" style="margin-right: 12px; color: #a855f7; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Army Level Planning Initiation Analysis</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">Strategic Army Analysis Framework - 4-star General Level Command</p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 1: Army Strategic Mission Analysis Framework -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(220, 38, 38, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <!-- Enhanced background pattern -->
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background:
                            radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.08) 0%, transparent 40%),
                            radial-gradient(circle at 75% 75%, rgba(220, 38, 38, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <h4 style="
                        font-size: 16px;
                        font-weight: 700;
                        color: white;
                        margin: 0 0 16px 0;
                        display: flex;
                        align-items: center;
                        position: relative;
                        z-index: 1;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                        border-bottom: 2px solid rgba(220, 38, 38, 0.3);
                        padding-bottom: 8px;
                    ">
                        <i class="fas fa-crosshairs" style="margin-right: 10px; color: #dc2626; font-size: 18px; text-shadow: 0 0 12px rgba(220, 38, 38, 0.5);"></i>
                        Army Strategic Mission Analysis Framework
                    </h4>

                    <div style="position: relative; z-index: 1;">
                        <!-- Theater Strategic Guidance Integration -->
                        <div style="
                            background: linear-gradient(135deg, rgba(220, 38, 38, 0.15) 0%, rgba(220, 38, 38, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(220, 38, 38, 0.4);
                            margin-bottom: 16px;
                            box-shadow: 0 6px 16px rgba(220, 38, 38, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #fca5a5;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                                border-bottom: 1px solid rgba(220, 38, 38, 0.3);
                                padding-bottom: 6px;
                            ">Theater Strategic Guidance Integration</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Theater Commander's Intent:</strong> Army commanders must thoroughly analyze and integrate theater/CCDR strategic guidance, ensuring Army operations directly support theater campaign objectives and strategic end states.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Campaign Design Integration:</strong> Translation of theater campaign design into Army-specific operational approaches, ensuring seamless integration with joint, interagency, and multinational partners across the theater.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Strategic Objectives Analysis:</strong> Decomposition of theater strategic objectives into Army-achievable operational objectives, maintaining clear linkage between tactical actions and strategic outcomes.</p>
                                <p style="margin: 0;"><strong style="color: #fca5a5;">Multi-Domain Integration:</strong> Coordination of Army land operations with joint air, maritime, space, and cyberspace operations to achieve theater commander's strategic vision.</p>
                            </div>
                        </div>

                        <!-- Army Mission Development -->
                        <div style="
                            background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border-left: 4px solid #dc2626;
                            margin-bottom: 16px;
                            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #fca5a5;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                                border-bottom: 1px solid rgba(220, 38, 38, 0.3);
                                padding-bottom: 6px;
                            ">Army Mission Statement Development</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Mission Analysis Process:</strong> Systematic analysis of theater mission variables including who (Army forces), what (tasks), when (timeline), where (area of operations), and why (purpose) to develop clear Army mission statements.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Task Organization:</strong> Development of Army task organization that optimizes multi-corps capabilities for theater campaign requirements, including active, reserve, and National Guard integration.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Operational Approach:</strong> Articulation of how Army forces will accomplish assigned missions through sequencing of operations, allocation of resources, and coordination with joint partners.</p>
                                <p style="margin: 0;"><strong style="color: #fca5a5;">Success Criteria:</strong> Establishment of measurable criteria for Army mission success that directly contribute to theater campaign objectives and strategic end states.</p>
                            </div>
                        </div>

                        <!-- Multi-Corps Coordination Framework -->
                        <div style="
                            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(220, 38, 38, 0.6);
                            box-shadow: 0 6px 16px rgba(30, 64, 175, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #fca5a5;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                                border-bottom: 1px solid rgba(220, 38, 38, 0.3);
                                padding-bottom: 6px;
                            ">Multi-Corps Coordination and Theater Synchronization</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Corps Integration:</strong> Coordination of multiple corps headquarters to achieve theater-wide land operations, ensuring unity of effort across diverse geographic areas and operational environments.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Theater Synchronization:</strong> Alignment of Army operations with joint force timing, ensuring land operations support air, maritime, space, and cyberspace operations at critical decision points.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Coalition Coordination:</strong> Integration of multinational land forces under Army command, ensuring interoperability, burden-sharing, and unified operational approaches across coalition partners.</p>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Strategic Communication:</strong> Coordination of Army strategic communication efforts with theater information operations, ensuring consistent messaging and narrative control across all Army operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 2: Army Strategic Situation Analysis Framework -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(37, 99, 235, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <!-- Enhanced background pattern -->
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background:
                            radial-gradient(circle at 25% 75%, rgba(37, 99, 235, 0.08) 0%, transparent 40%),
                            radial-gradient(circle at 75% 25%, rgba(37, 99, 235, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <h4 style="
                        font-size: 16px;
                        font-weight: 700;
                        color: white;
                        margin: 0 0 16px 0;
                        display: flex;
                        align-items: center;
                        position: relative;
                        z-index: 1;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                        border-bottom: 2px solid rgba(37, 99, 235, 0.3);
                        padding-bottom: 8px;
                    ">
                        <i class="fas fa-map-marked-alt" style="margin-right: 10px; color: #2563eb; font-size: 18px; text-shadow: 0 0 12px rgba(37, 99, 235, 0.5);"></i>
                        Army Strategic Situation Analysis Framework
                    </h4>

                    <div style="position: relative; z-index: 1;">
                        <!-- Theater Operational Environment Analysis -->
                        <div style="
                            background: linear-gradient(135deg, rgba(37, 99, 235, 0.15) 0%, rgba(37, 99, 235, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(37, 99, 235, 0.4);
                            margin-bottom: 16px;
                            box-shadow: 0 6px 16px rgba(37, 99, 235, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #93c5fd;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                                border-bottom: 1px solid rgba(37, 99, 235, 0.3);
                                padding-bottom: 6px;
                            ">Theater Operational Environment Analysis</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Land Domain Analysis:</strong> Comprehensive assessment of terrain, weather, infrastructure, and population factors across the theater that directly impact Army operations and multi-corps coordination requirements.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Threat Assessment:</strong> Analysis of adversary land forces, capabilities, doctrine, and likely courses of action that could oppose Army operations within the theater area of responsibility.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Strategic Geography:</strong> Evaluation of key terrain, lines of communication, strategic chokepoints, and geographic factors that influence Army campaign design and corps employment.</p>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Cultural Considerations:</strong> Assessment of cultural, ethnic, religious, and social factors that affect Army operations, civil-military relations, and coalition partner integration.</p>
                            </div>
                        </div>

                        <!-- Multi-Domain Operations Integration -->
                        <div style="
                            background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border-left: 4px solid #2563eb;
                            margin-bottom: 16px;
                            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #93c5fd;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                                border-bottom: 1px solid rgba(37, 99, 235, 0.3);
                                padding-bottom: 6px;
                            ">Multi-Domain Operations Integration</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Joint Integration:</strong> Analysis of how Army land operations integrate with joint air, maritime, space, and cyberspace operations to achieve theater objectives through synchronized multi-domain effects.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Cross-Domain Synergy:</strong> Identification of opportunities for Army forces to enable joint operations in other domains while leveraging joint capabilities to enhance land operations effectiveness.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Information Environment:</strong> Assessment of information operations, strategic communication, and cyber warfare factors that affect Army operations and require coordination with joint partners.</p>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Space and Cyber Dependencies:</strong> Analysis of Army reliance on space-based and cyber capabilities for command, control, communications, and intelligence operations across the theater.</p>
                            </div>
                        </div>

                        <!-- Coalition and Partner Analysis -->
                        <div style="
                            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(37, 99, 235, 0.6);
                            box-shadow: 0 6px 16px rgba(30, 64, 175, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #93c5fd;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                                border-bottom: 1px solid rgba(37, 99, 235, 0.3);
                                padding-bottom: 6px;
                            ">Coalition and Partner Nation Analysis</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Alliance Capabilities:</strong> Assessment of allied and partner nation land forces, their capabilities, limitations, and potential contributions to theater land operations under Army command.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Interoperability Analysis:</strong> Evaluation of technical, procedural, and cultural interoperability factors that affect multinational land operations and coalition command relationships.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Host Nation Support:</strong> Analysis of host nation infrastructure, support agreements, and capacity to support U.S. and coalition Army forces during operations.</p>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Regional Security Cooperation:</strong> Assessment of security cooperation programs, military-to-military relationships, and partnership opportunities that enhance Army operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 3: Army Strategic Resource Analysis Framework -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(22, 163, 74, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <!-- Enhanced background pattern -->
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background:
                            radial-gradient(circle at 75% 25%, rgba(22, 163, 74, 0.08) 0%, transparent 40%),
                            radial-gradient(circle at 25% 75%, rgba(22, 163, 74, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <h4 style="
                        font-size: 16px;
                        font-weight: 700;
                        color: white;
                        margin: 0 0 16px 0;
                        display: flex;
                        align-items: center;
                        position: relative;
                        z-index: 1;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                        border-bottom: 2px solid rgba(22, 163, 74, 0.3);
                        padding-bottom: 8px;
                    ">
                        <i class="fas fa-cogs" style="margin-right: 10px; color: #16a34a; font-size: 18px; text-shadow: 0 0 12px rgba(22, 163, 74, 0.5);"></i>
                        Army Strategic Resource Analysis Framework
                    </h4>

                    <div style="position: relative; z-index: 1;">
                        <!-- Multi-Corps Force Structure -->
                        <div style="
                            background: linear-gradient(135deg, rgba(22, 163, 74, 0.15) 0%, rgba(22, 163, 74, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(22, 163, 74, 0.4);
                            margin-bottom: 16px;
                            box-shadow: 0 6px 16px rgba(22, 163, 74, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #86efac;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                                border-bottom: 1px solid rgba(22, 163, 74, 0.3);
                                padding-bottom: 6px;
                            ">Multi-Corps Force Structure and Capabilities</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Corps Integration:</strong> Analysis of multiple corps headquarters capabilities, including heavy, light, airborne, and air assault corps, ensuring optimal task organization for theater land operations.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Force Generation:</strong> Assessment of active, reserve, and National Guard force availability, readiness levels, and mobilization timelines to support sustained theater operations.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Specialized Capabilities:</strong> Evaluation of Army special operations forces, cyber units, space operations, and other specialized capabilities that support theater objectives.</p>
                                <p style="margin: 0;"><strong style="color: #86efac;">Enabler Forces:</strong> Analysis of critical enablers including intelligence, surveillance, reconnaissance, electronic warfare, and strategic communications capabilities.</p>
                            </div>
                        </div>

                        <!-- Theater Sustainment Analysis -->
                        <div style="
                            background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border-left: 4px solid #16a34a;
                            margin-bottom: 16px;
                            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #86efac;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                                border-bottom: 1px solid rgba(22, 163, 74, 0.3);
                                padding-bottom: 6px;
                            ">Theater Sustainment and Logistics Analysis</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Strategic Logistics:</strong> Assessment of theater distribution systems, strategic stockpiles, and sustainment capabilities required for multi-corps operations across extended lines of communication.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Strategic Mobility:</strong> Analysis of strategic airlift, sealift, and prepositioned equipment capabilities required to deploy, sustain, and redeploy Army forces within the theater.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Maintenance and Repair:</strong> Evaluation of theater-level maintenance capabilities, including depot-level maintenance, battle damage repair, and equipment reset operations.</p>
                                <p style="margin: 0;"><strong style="color: #86efac;">Medical Support:</strong> Assessment of theater medical capabilities, including combat support hospitals, medical evacuation, and casualty care across multiple corps areas of operation.</p>
                            </div>
                        </div>

                        <!-- Command and Control Systems -->
                        <div style="
                            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(22, 163, 74, 0.6);
                            box-shadow: 0 6px 16px rgba(30, 64, 175, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #86efac;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                                border-bottom: 1px solid rgba(22, 163, 74, 0.3);
                                padding-bottom: 6px;
                            ">Strategic Command and Control Systems</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">C4ISR Architecture:</strong> Analysis of theater command, control, communications, computers, intelligence, surveillance, and reconnaissance systems supporting Army operations.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Network Operations:</strong> Assessment of theater network capabilities, cybersecurity measures, and information systems that enable multi-corps coordination and joint integration.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Intelligence Systems:</strong> Evaluation of theater intelligence collection, analysis, and dissemination capabilities supporting Army operations and joint intelligence requirements.</p>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Coalition Interoperability:</strong> Analysis of command and control interoperability with allied and partner nation forces, including communication systems and information sharing protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 4: Army Strategic Risk Analysis Framework -->
                <div style="
                    background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                    border: 1px solid #374151;
                    border-radius: 12px;
                    padding: 20px;
                    min-height: 600px;
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(245, 158, 11, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                ">
                    <!-- Enhanced background pattern -->
                    <div style="
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background:
                            radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%),
                            radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%);
                        pointer-events: none;
                    "></div>

                    <h4 style="
                        font-size: 16px;
                        font-weight: 700;
                        color: white;
                        margin: 0 0 16px 0;
                        display: flex;
                        align-items: center;
                        position: relative;
                        z-index: 1;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                        border-bottom: 2px solid rgba(245, 158, 11, 0.3);
                        padding-bottom: 8px;
                    ">
                        <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                        Army Strategic Risk Analysis Framework
                    </h4>

                    <div style="position: relative; z-index: 1;">
                        <!-- Theater Campaign Risk Assessment -->
                        <div style="
                            background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(245, 158, 11, 0.4);
                            margin-bottom: 16px;
                            box-shadow: 0 6px 16px rgba(245, 158, 11, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #fbbf24;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                                border-bottom: 1px solid rgba(245, 158, 11, 0.3);
                                padding-bottom: 6px;
                            ">Theater Campaign Risk Assessment</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Strategic Risk Integration:</strong> Assessment of how Army operations contribute to or mitigate theater-level strategic risks, ensuring Army risk management supports theater commander's risk tolerance.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Campaign Timeline Risks:</strong> Analysis of risks associated with extended campaign timelines, including force rotation, equipment reset, and sustained operations over multiple years.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Political-Military Risks:</strong> Evaluation of political constraints, public support sustainability, and alliance cohesion risks that could affect Army operations and campaign success.</p>
                                <p style="margin: 0;"><strong style="color: #fbbf24;">Escalation Management:</strong> Assessment of risks associated with conflict escalation, including potential for operations to expand beyond current theater boundaries or involve additional adversaries.</p>
                            </div>
                        </div>

                        <!-- Multi-Corps Coordination Risks -->
                        <div style="
                            background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border-left: 4px solid #f59e0b;
                            margin-bottom: 16px;
                            box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #fbbf24;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                                border-bottom: 1px solid rgba(245, 158, 11, 0.3);
                                padding-bottom: 6px;
                            ">Multi-Corps Coordination and Synchronization Risks</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Command and Control Risks:</strong> Assessment of risks associated with coordinating multiple corps across extended geographic areas, including communication failures and decision-making delays.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Synchronization Challenges:</strong> Analysis of risks related to synchronizing multi-corps operations with joint forces, including timing, coordination, and mutual support requirements.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Resource Competition:</strong> Evaluation of risks associated with resource allocation among multiple corps, including priority conflicts and resource shortfalls during critical operations.</p>
                                <p style="margin: 0;"><strong style="color: #fbbf24;">Coalition Integration Risks:</strong> Assessment of risks related to integrating multinational forces under Army command, including interoperability challenges and political constraints.</p>
                            </div>
                        </div>

                        <!-- Operational Risk Mitigation -->
                        <div style="
                            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(245, 158, 11, 0.6);
                            box-shadow: 0 6px 16px rgba(30, 64, 175, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
                        ">
                            <h5 style="
                                font-weight: 700;
                                color: #fbbf24;
                                font-size: 14px;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                                border-bottom: 1px solid rgba(245, 158, 11, 0.3);
                                padding-bottom: 6px;
                            ">Operational Risk Mitigation and Contingency Planning</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Branch and Sequel Planning:</strong> Development of operational branches for likely contingencies and sequels for follow-on operations, ensuring Army forces can adapt to changing conditions.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Reserve Planning:</strong> Maintenance of operational reserves and surge capabilities to respond to unexpected developments, including forces held at Army level for contingencies.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Risk Communication:</strong> Establishment of clear risk communication channels to theater leadership, ensuring operational risks are understood and accepted at appropriate levels.</p>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Continuous Assessment:</strong> Implementation of continuous risk assessment processes, including operational warning indicators and decision points for risk mitigation actions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Army Strategic Planning Excellence Framework -->
            <div style="
                background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
                border: 2px solid rgba(168, 85, 247, 0.3);
                border-radius: 16px;
                padding: 24px;
                margin-bottom: 24px;
                box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(168, 85, 247, 0.1);
                position: relative;
                overflow: hidden;
            ">
                <!-- Enhanced background pattern -->
                <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background:
                        radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.08) 0%, transparent 40%),
                        radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 40%);
                    pointer-events: none;
                "></div>

                <h3 style="
                    color: #a855f7;
                    font-size: 18px;
                    font-weight: 700;
                    margin: 0 0 20px 0;
                    display: flex;
                    align-items: center;
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                    position: relative;
                    z-index: 1;
                ">
                    <i class="fas fa-star" style="margin-right: 12px; font-size: 20px; text-shadow: 0 0 12px rgba(168, 85, 247, 0.5);"></i>
                    Army Strategic Planning Excellence Framework
                </h3>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; position: relative; z-index: 1;">
                    <div style="
                        background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
                        padding: 16px;
                        border-radius: 10px;
                        border-left: 4px solid #a855f7;
                        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                    ">
                        <h4 style="
                            color: #c084fc;
                            font-size: 13px;
                            font-weight: 600;
                            margin: 0 0 12px 0;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                            border-bottom: 1px solid rgba(168, 85, 247, 0.3);
                            padding-bottom: 6px;
                        ">Army Strategic Integration</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Theater strategic guidance integration and campaign alignment</li>
                            <li style="margin-bottom: 4px;">Multi-corps coordination and theater synchronization</li>
                            <li style="margin-bottom: 4px;">Joint, interagency, and multinational integration</li>
                            <li style="margin-bottom: 4px;">Multi-domain operations coordination and planning</li>
                            <li>Strategic risk assessment and mitigation planning</li>
                        </ul>
                    </div>
                    <div style="
                        background: linear-gradient(135deg, #374151 0%, #2d3748 100%);
                        padding: 16px;
                        border-radius: 10px;
                        border-left: 4px solid #a855f7;
                        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                    ">
                        <h4 style="
                            color: #c084fc;
                            font-size: 13px;
                            font-weight: 600;
                            margin: 0 0 12px 0;
                            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                            border-bottom: 1px solid rgba(168, 85, 247, 0.3);
                            padding-bottom: 6px;
                        ">Army Strategic Capabilities</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Multi-corps force structure and capability integration</li>
                            <li style="margin-bottom: 4px;">Coalition land forces integration and coordination</li>
                            <li style="margin-bottom: 4px;">Theater sustainment and logistics coordination</li>
                            <li style="margin-bottom: 4px;">Strategic mobility and deployment coordination</li>
                            <li>Theater command and control architecture</li>
                        </ul>
                    </div>
                </div>

                <!-- Army Strategic Excellence Summary -->
                <div style="
                    background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%);
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(168, 85, 247, 0.4);
                    box-shadow: 0 8px 20px rgba(168, 85, 247, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05);
                    position: relative;
                    z-index: 1;
                ">
                    <h4 style="
                        color: #c084fc;
                        font-size: 16px;
                        font-weight: 700;
                        margin: 0 0 16px 0;
                        display: flex;
                        align-items: center;
                        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                        border-bottom: 2px solid rgba(168, 85, 247, 0.3);
                        padding-bottom: 8px;
                    ">
                        <i class="fas fa-medal" style="margin-right: 12px; font-size: 18px; text-shadow: 0 0 8px rgba(168, 85, 247, 0.4);"></i>
                        Army Strategic Command Excellence Summary (4-star General Level)
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="
                            background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(168, 85, 247, 0.2);
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                        ">
                            <h5 style="
                                color: #a855f7;
                                font-size: 14px;
                                font-weight: 600;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                                border-bottom: 1px solid rgba(168, 85, 247, 0.3);
                                padding-bottom: 6px;
                            ">Army Strategic Leader Responsibilities</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Theater Integration:</strong> Translate theater guidance into Army operational objectives</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Multi-Corps Leadership:</strong> Synchronize multiple corps under unified Army command</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Coalition Coordination:</strong> Lead multinational land forces and partnerships</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Strategic Risk Management:</strong> Balance Army objectives with operational risk</p>
                            </div>
                        </div>
                        <div style="
                            background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%);
                            padding: 16px;
                            border-radius: 10px;
                            border: 1px solid rgba(168, 85, 247, 0.2);
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                        ">
                            <h5 style="
                                color: #a855f7;
                                font-size: 14px;
                                font-weight: 600;
                                margin: 0 0 12px 0;
                                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                                border-bottom: 1px solid rgba(168, 85, 247, 0.3);
                                padding-bottom: 6px;
                            ">Army Strategic Planning Excellence</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Comprehensive Analysis:</strong> Systematic application of JP 5-0 and FM 3-94 doctrine</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Theater Integration:</strong> Seamless coordination from theater to corps execution</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Multi-Corps Synchronization:</strong> Unified planning across corps formations</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Strategic Decision Support:</strong> Timely intelligence for strategic decision making</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal Reference -->
            <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-top: 20px;">
                <div style="color: #dbeafe; font-size: 12px; line-height: 1.4; text-align: center;">
                    <i class="fas fa-book" style="margin-right: 8px; color: #93c5fd;"></i>
                    <strong>Doctrinal Reference:</strong> JP 5-0 (Joint Planning), Chapter 4 — Planning Initiation | JP 3-0 (Joint Operations) | FM 3-94 (Theater Army Operations) | FM 5-0 (Planning and Orders Production) | FM 3-0 (Operations)
                </div>
            </div>
        </div>
    `;
}

export default getArmyPlanningInitiationAnalysis;
