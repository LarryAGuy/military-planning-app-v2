/**
 * JPP Step 1: Planning Initiation - Echelon Analysis - Corps Level
 * UNCLASSIFIED content for corps-level planning initiation analysis
 * Follows JP 5-0 standards with corps-level strategic analysis considerations
 */

export function getCorpsPlanningInitiationAnalysis() {
    return `
        <div style="padding: 20px;">
            <div style="display: flex; align-items: center; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                <i class="fas fa-crown" style="margin-right: 12px; color: #a855f7; font-size: 24px;"></i>
                <div>
                    <h2 style="font-size: 20px; font-weight: 700; color: white; margin: 0;">Corps Level Planning Initiation Analysis</h2>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">Operational-Strategic Corps Analysis Framework - 3-star Lieutenant General Level Command</p>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
                <!-- Card 1: Corps Operational-Strategic Mission Analysis Framework -->
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
                        Corps Operational-Strategic Mission Analysis Framework
                    </h4>

                    <div style="position: relative; z-index: 1;">
                        <!-- Army Strategic Guidance Integration -->
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
                            ">Army Strategic Guidance Integration</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Army Commander's Intent:</strong> Corps commanders must thoroughly analyze and integrate Army strategic guidance, ensuring Corps operations directly support Army campaign objectives and theater strategic end states.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Operational Design Integration:</strong> Translation of Army operational design into Corps-specific operational approaches, ensuring seamless integration with joint forces and adjacent corps within the theater.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Strategic Objectives Analysis:</strong> Decomposition of Army operational objectives into Corps-achievable tactical objectives, maintaining clear linkage between division actions and operational outcomes.</p>
                                <p style="margin: 0;"><strong style="color: #fca5a5;">Multi-Domain Coordination:</strong> Integration of Corps land operations with joint air, maritime, space, and cyberspace operations to achieve Army commander's operational vision.</p>
                            </div>
                        </div>

                        <!-- Corps Mission Development -->
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
                            ">Corps Mission Statement Development</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Mission Analysis Process:</strong> Systematic analysis of Army mission variables including who (Corps forces), what (tasks), when (timeline), where (area of operations), and why (purpose) to develop clear Corps mission statements.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Task Organization:</strong> Development of Corps task organization that optimizes multi-division capabilities for Army operational requirements, including active, reserve, and National Guard integration.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fca5a5;">Operational Approach:</strong> Articulation of how Corps forces will accomplish assigned missions through sequencing of operations, allocation of resources, and coordination with adjacent units.</p>
                                <p style="margin: 0;"><strong style="color: #fca5a5;">Success Criteria:</strong> Establishment of measurable criteria for Corps mission success that directly contribute to Army operational objectives and theater strategic end states.</p>
                            </div>
                        </div>

                        <!-- Multi-Division Coordination Framework -->
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
                            ">Multi-Division Coordination and Operational Synchronization</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Division Integration:</strong> Coordination of multiple division headquarters to achieve Corps-wide land operations, ensuring unity of effort across diverse operational environments and mission sets.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Operational Synchronization:</strong> Alignment of Corps operations with Army timing and adjacent corps, ensuring land operations support joint force operations at critical decision points.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Coalition Coordination:</strong> Integration of multinational division-level forces under Corps command, ensuring interoperability, burden-sharing, and unified operational approaches.</p>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Information Operations:</strong> Coordination of Corps information operations with Army strategic communication, ensuring consistent messaging and narrative control across all Corps operations.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 2: Corps Operational Situation Analysis Framework -->
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
                        Corps Operational Situation Analysis Framework
                    </h4>

                    <div style="position: relative; z-index: 1;">
                        <!-- Operational Environment Analysis -->
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
                            ">Corps Area of Operations Analysis</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Operational Terrain Analysis:</strong> Comprehensive assessment of terrain, weather, infrastructure, and population factors within the Corps area of operations that impact multi-division coordination and operational success.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Operational Threat Assessment:</strong> Analysis of adversary operational-level forces, capabilities, doctrine, and likely courses of action that could oppose Corps operations within the assigned operational area.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Operational Geography:</strong> Evaluation of key terrain, lines of communication, operational chokepoints, and geographic factors that influence Corps operational design and division employment strategies.</p>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Civil Considerations:</strong> Assessment of civilian population, infrastructure, governance, and cultural factors that affect Corps operations and civil-military coordination requirements.</p>
                            </div>
                        </div>

                        <!-- Joint Operations Integration -->
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
                            ">Joint Operations Integration Analysis</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Joint Coordination:</strong> Analysis of how Corps land operations integrate with joint air, maritime, space, and cyberspace operations to achieve Army operational objectives through synchronized multi-domain effects.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Operational Fires Integration:</strong> Coordination of Corps fires with joint fires, including close air support, interdiction, and strategic fires to support division operations and operational objectives.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #93c5fd;">Intelligence Integration:</strong> Integration of Corps intelligence requirements with joint intelligence collection and analysis to support operational decision-making and division planning.</p>
                                <p style="margin: 0;"><strong style="color: #93c5fd;">Logistics Coordination:</strong> Analysis of joint logistics support to Corps operations, including strategic mobility, sustainment, and coordination with joint force logistics capabilities.</p>
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
                            ">Coalition Integration and Partner Analysis</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Coalition Division Integration:</strong> Assessment of allied and partner nation division-level forces, their capabilities, limitations, and potential contributions to Corps operations under unified command.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Operational Interoperability:</strong> Evaluation of technical, procedural, and cultural interoperability factors that affect multinational operations at the Corps level and division integration.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Host Nation Coordination:</strong> Analysis of host nation support capabilities, infrastructure, and coordination requirements that enable Corps operations and division sustainment.</p>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Regional Partnership:</strong> Assessment of regional security cooperation programs and military-to-military relationships that enhance Corps operational effectiveness and strategic objectives.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 3: Corps Operational Resource Analysis Framework -->
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
                        Corps Operational Resource Analysis Framework
                    </h4>

                    <div style="position: relative; z-index: 1;">
                        <!-- Multi-Division Force Structure -->
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
                            ">Multi-Division Force Structure and Capabilities</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Division Integration:</strong> Analysis of multiple division headquarters capabilities, including heavy, light, airborne, and air assault divisions, ensuring optimal task organization for Corps operational requirements.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Operational Force Generation:</strong> Assessment of division readiness levels, force availability, and mobilization timelines to support sustained Corps operations and Army objectives.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Specialized Capabilities:</strong> Evaluation of Corps-level specialized units including aviation, artillery, air defense, engineer, and military intelligence capabilities that support division operations.</p>
                                <p style="margin: 0;"><strong style="color: #86efac;">Enabler Integration:</strong> Analysis of critical enablers including intelligence, surveillance, reconnaissance, electronic warfare, and information operations capabilities at Corps level.</p>
                            </div>
                        </div>

                        <!-- Operational Sustainment Analysis -->
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
                            ">Corps Operational Sustainment and Logistics</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Operational Distribution:</strong> Assessment of Corps-level distribution systems, operational stockpiles, and sustainment capabilities required for multi-division operations across extended operational areas.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Maintenance Operations:</strong> Analysis of Corps-level maintenance capabilities, including field maintenance, battle damage repair, and equipment reset operations supporting division requirements.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #86efac;">Medical Support:</strong> Evaluation of Corps medical capabilities, including combat support hospitals, medical evacuation, and casualty care across multiple division areas of operation.</p>
                                <p style="margin: 0;"><strong style="color: #86efac;">Transportation Assets:</strong> Assessment of Corps transportation capabilities, including tactical mobility, operational movement, and coordination with Army-level strategic mobility assets.</p>
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
                            ">Corps Command and Control Systems</h5>
                            <div style="color: #e0e7ff; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">C4ISR Architecture:</strong> Analysis of Corps command, control, communications, computers, intelligence, surveillance, and reconnaissance systems supporting multi-division operations and Army integration.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Network Operations:</strong> Assessment of Corps network capabilities, cybersecurity measures, and information systems that enable multi-division coordination and joint integration.</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #a7f3d0;">Intelligence Systems:</strong> Evaluation of Corps intelligence collection, analysis, and dissemination capabilities supporting division operations and Army intelligence requirements.</p>
                                <p style="margin: 0;"><strong style="color: #a7f3d0;">Coalition Interoperability:</strong> Analysis of command and control interoperability with allied and partner nation division forces, including communication systems and information sharing protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Card 4: Corps Operational Risk Analysis Framework -->
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
                    <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                    <h4 style="font-size: 16px; font-weight: 700; color: white; margin: 0 0 16px 0; display: flex; align-items: center; position: relative; z-index: 1; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); border-bottom: 2px solid rgba(245, 158, 11, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-exclamation-triangle" style="margin-right: 10px; color: #f59e0b; font-size: 18px; text-shadow: 0 0 12px rgba(245, 158, 11, 0.5);"></i>
                        Corps Operational Risk Analysis Framework
                    </h4>
                    <div style="position: relative; z-index: 1;">
                        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0.08) 100%); padding: 16px; border-radius: 10px; border: 1px solid rgba(245, 158, 11, 0.4); margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Army Integration Risk Assessment</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #fbbf24;">Operational Risk Integration:</strong> Assessment of how Corps operations contribute to or mitigate Army-level operational risks, ensuring Corps risk management supports Army commander's risk tolerance.</p>
                                <p style="margin: 0;"><strong style="color: #fbbf24;">Multi-Division Coordination Risks:</strong> Analysis of risks associated with coordinating multiple divisions across extended operational areas, including communication failures and synchronization challenges.</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #f59e0b; margin-bottom: 16px;">
                            <h5 style="font-weight: 700; color: #fbbf24; font-size: 14px; margin: 0 0 12px 0; border-bottom: 1px solid rgba(245, 158, 11, 0.3); padding-bottom: 6px;">Operational Risk Mitigation</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.6;">
                                <p style="margin: 0;"><strong style="color: #fbbf24;">Contingency Planning:</strong> Development of operational branches and sequels, ensuring Corps forces can adapt to changing operational conditions and maintain mission success.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Corps Operational-Strategic Planning Excellence Framework -->
            <div style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 2px solid rgba(168, 85, 247, 0.3); border-radius: 16px; padding: 24px; margin-bottom: 24px; box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(168, 85, 247, 0.1); position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.08) 0%, transparent 40%), radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.06) 0%, transparent 40%); pointer-events: none;"></div>
                <h3 style="color: #a855f7; font-size: 18px; font-weight: 700; margin: 0 0 20px 0; display: flex; align-items: center; text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); position: relative; z-index: 1;">
                    <i class="fas fa-crown" style="margin-right: 12px; font-size: 20px; text-shadow: 0 0 12px rgba(168, 85, 247, 0.5);"></i>
                    Corps Operational-Strategic Planning Excellence Framework
                </h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; position: relative; z-index: 1;">
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Corps Operational Integration</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Army operational guidance integration and alignment</li>
                            <li style="margin-bottom: 4px;">Multi-division coordination and operational synchronization</li>
                            <li style="margin-bottom: 4px;">Joint and multinational integration at operational level</li>
                            <li>Operational risk assessment and mitigation planning</li>
                        </ul>
                    </div>
                    <div style="background: linear-gradient(135deg, #374151 0%, #2d3748 100%); padding: 16px; border-radius: 10px; border-left: 4px solid #a855f7;">
                        <h4 style="color: #c084fc; font-size: 13px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Corps Operational Capabilities</h4>
                        <ul style="color: #e5e7eb; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                            <li style="margin-bottom: 4px;">Multi-division force structure and capability integration</li>
                            <li style="margin-bottom: 4px;">Coalition division forces integration and coordination</li>
                            <li style="margin-bottom: 4px;">Operational sustainment and logistics coordination</li>
                            <li>Operational command and control architecture</li>
                        </ul>
                    </div>
                </div>
                <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.12) 0%, rgba(168, 85, 247, 0.06) 100%); padding: 20px; border-radius: 12px; border: 1px solid rgba(168, 85, 247, 0.4); position: relative; z-index: 1;">
                    <h4 style="color: #c084fc; font-size: 16px; font-weight: 700; margin: 0 0 16px 0; display: flex; align-items: center; border-bottom: 2px solid rgba(168, 85, 247, 0.3); padding-bottom: 8px;">
                        <i class="fas fa-medal" style="margin-right: 12px; font-size: 18px;"></i>
                        Corps Operational Command Excellence Summary (3-star Lieutenant General Level)
                    </h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Corps Operational Leader Responsibilities</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Army Integration:</strong> Translate Army guidance into Corps operational objectives</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Multi-Division Leadership:</strong> Synchronize multiple divisions under unified Corps command</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Operational Risk Management:</strong> Balance Corps objectives with operational risk</p>
                            </div>
                        </div>
                        <div style="background: linear-gradient(135deg, rgba(55, 65, 81, 0.8) 0%, rgba(45, 55, 72, 0.8) 100%); padding: 16px; border-radius: 10px;">
                            <h5 style="color: #a855f7; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; border-bottom: 1px solid rgba(168, 85, 247, 0.3); padding-bottom: 6px;">Corps Operational Planning Excellence</h5>
                            <div style="color: #e5e7eb; font-size: 12px; line-height: 1.5;">
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Comprehensive Analysis:</strong> Systematic application of JP 5-0 and FM 3-92 doctrine</p>
                                <p style="margin: 0 0 8px 0;"><strong style="color: #ddd6fe;">Operational Integration:</strong> Seamless coordination from Army to division execution</p>
                                <p style="margin: 0;"><strong style="color: #ddd6fe;">Multi-Division Synchronization:</strong> Unified planning across division formations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Doctrinal Reference -->
            <div style="background-color: #1e3a8a; border: 1px solid #2563eb; border-radius: 8px; padding: 16px; margin-top: 20px;">
                <div style="color: #dbeafe; font-size: 12px; line-height: 1.4; text-align: center;">
                    <i class="fas fa-book" style="margin-right: 8px; color: #93c5fd;"></i>
                    <strong>Doctrinal Reference:</strong> JP 5-0 (Joint Planning), Chapter 4 — Planning Initiation | JP 3-0 (Joint Operations) | FM 3-92 (Corps Operations) | FM 5-0 (Planning and Orders Production) | FM 3-0 (Operations)
                </div>
            </div>
        </div>
    `;
}

export default getCorpsPlanningInitiationAnalysis;
