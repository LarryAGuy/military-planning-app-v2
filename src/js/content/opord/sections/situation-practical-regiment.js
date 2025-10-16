/**
 * OPORD Situation - Practical Examples - Regiment Level
 * UNCLASSIFIED content for regiment-level situation analysis examples
 * Follows FM 5-0 standards with realistic regiment command designations
 */

export const regimentPracticalModule = {
    id: 'regiment-practical',
    title: 'Regiment Level Practical Examples',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Regiment Level Practical Examples - Professional Military Layout -->
            <div id="regiment-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-flag" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        1. Situation - Regiment Level Example
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - 87th Infantry Regiment (Iron Men)
                    </p>
                </div>

                <!-- 2x2 Content Card Grid -->
                <div style="
                    display: grid; 
                    grid-template-columns: 1fr 1fr; 
                    gap: 16px; 
                    margin-bottom: 24px;
                    min-height: calc(100vh - 300px);
                ">

                    <!-- Area of Operations Card -->
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
                                <i class="fas fa-map-marked-alt" style="margin-right: 8px; color: #10b981; font-size: 12px;"></i>
                                a. Area of Operations
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Regiment AO encompasses 65 km² of complex terrain including urban areas, airfields, and strategic targets.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Operational Boundaries</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Phase Line RANGER (18SUJ1234800000)</li>
                                    <li>South: Phase Line AIRBORNE (18SUJ1234200000)</li>
                                    <li>East: Boundary with 82nd Airborne Division (15 km)</li>
                                    <li>West: Boundary with coalition forces (12 km)</li>
                                    <li>AO RANGER: Primary regimental area (65 km²)</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Strategic Targets</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Airfield RANGER: 2,800m runway, strategic target</li>
                                    <li>Command Complex ALPHA: High-value target (500m x 300m)</li>
                                    <li>Communications Tower: 150m height, critical node</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Enemy Situation Card -->
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
                                <i class="fas fa-crosshairs" style="margin-right: 8px; color: #f87171; font-size: 12px;"></i>
                                b. Enemy Situation
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Enemy brigade-sized force (4,200 personnel) with integrated air defense and mechanized capabilities.
                            </p>
                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Brigade HQ: Command and control (150 personnel)</li>
                                    <li>3x Mechanized Battalions (1,200 personnel each)</li>
                                    <li>1x Tank Battalion (450 personnel, 58x T-72 MBTs)</li>
                                    <li>1x Artillery Battalion (400 personnel, 2S19 152mm)</li>
                                    <li>1x Air Defense Battalion (300 personnel, SA-15 systems)</li>
                                    <li>1x Support Battalion (500 personnel)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Conduct coordinated defense for 48-72 hours</li>
                                    <li>Execute battalion-level counterattacks</li>
                                    <li>Provide integrated air defense to 25 km range</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Friendly Forces Card -->
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
                                <i class="fas fa-shield-alt" style="margin-right: 8px; color: #60a5fa; font-size: 12px;"></i>
                                c. Friendly Forces
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - 87th Infantry Regiment (3,623 personnel) conducting combined arms operations as part of division task force.
                            </p>
                            <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; border-left: 3px solid #60a5fa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Regiment Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Regimental HQ: Command, staff, communications (200 personnel)</li>
                                    <li>1st Ranger Battalion: 758 personnel (Fort Moore)</li>
                                    <li>2nd Ranger Battalion: 758 personnel (Joint Base Lewis-McChord)</li>
                                    <li>3rd Ranger Battalion: 758 personnel (Fort Moore)</li>
                                    <li>Regimental Special Troops Battalion: 649 personnel</li>
                                    <li>Regimental Military Intelligence Battalion: 500 personnel</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>160th SOAR: Special operations aviation support</li>
                                    <li>Joint Terminal Attack Controllers (JTAC)</li>
                                    <li>Air Force Combat Control Teams (CCT)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Mission Analysis Card -->
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
                                <i class="fas fa-bullseye" style="margin-right: 8px; color: #a855f7; font-size: 12px;"></i>
                                d. Mission Analysis
                            </h4>
                            <p style="color: #d1d5db; font-size: 13px; line-height: 1.4; margin: 0 0 16px 0;">
                                UNCLASSIFIED - Conduct special operations raid to neutralize high-value targets and disrupt enemy command and control.
                            </p>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Essential Tasks</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Conduct airborne insertion at H-Hour 0230</li>
                                    <li>Neutralize Command Complex ALPHA by H+2 hours (0430)</li>
                                    <li>Seize and secure Airfield RANGER by H+4 hours (0630)</li>
                                    <li>Destroy communications infrastructure (150m tower)</li>
                                    <li>Conduct tactical recovery at H+8 hours (1030)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">End State</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    High-value targets neutralized, enemy C2 disrupted, Airfield RANGER secured, regiment extracted successfully
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #10b981;">
                    <p style="color: #6ee7b7; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Regiment Level Practical Example per FM 5-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Regiment Practical Examples module initialized');
        return true;
    }
};
