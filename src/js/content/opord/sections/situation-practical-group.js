/**
 * OPORD Situation - Practical Examples - Group Level
 * UNCLASSIFIED content for group-level situation analysis examples
 * Follows FM 5-0 standards with realistic group command designations
 */

export const groupPracticalModule = {
    id: 'group-practical',
    title: 'Group Level Practical Examples',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Group Level Practical Examples - Professional Military Layout -->
            <div id="group-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-layer-group" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        1. Situation - Group Level Example
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - 1st Special Forces Group (Airborne) (De Oppresso Liber)
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
                                UNCLASSIFIED - Group AO encompasses 40 km² of mountainous terrain with multiple infiltration routes and strategic targets.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Operational Boundaries</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Phase Line GREEN (18SUJ1234700000)</li>
                                    <li>South: Phase Line BERET (18SUJ1234300000)</li>
                                    <li>East: Boundary with conventional forces (8 km)</li>
                                    <li>West: International border (6 km)</li>
                                    <li>AO JADE: Primary group operational area (40 km²)</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Infiltration Routes</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Route WHISKEY: Mountain pass (2,100m elevation)</li>
                                    <li>Route X-RAY: River valley approach (15 km)</li>
                                    <li>Route YANKEE: Urban infiltration corridor (8 km)</li>
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
                                UNCLASSIFIED - Enemy special operations regiment (2,800 personnel) with counter-SOF capabilities and advanced equipment.
                            </p>
                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Regiment HQ: Command and intelligence (180 personnel)</li>
                                    <li>3x Special Operations Battalions (650 personnel each)</li>
                                    <li>1x Aviation Squadron (400 personnel, Mi-24 helicopters)</li>
                                    <li>1x Intelligence Battalion (300 personnel)</li>
                                    <li>1x Support Battalion (620 personnel)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Conduct counter-SOF operations for 24-48 hours</li>
                                    <li>Execute rapid reaction force deployment</li>
                                    <li>Provide close air support with attack helicopters</li>
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
                                UNCLASSIFIED - 1st Special Forces Group (1,847 personnel) conducting unconventional warfare as part of JSOTF operations.
                            </p>
                            <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; border-left: 3px solid #60a5fa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Group Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Group HQ: Command, staff, communications (120 personnel)</li>
                                    <li>1st Special Forces Battalion: 524 personnel (4x Companies)</li>
                                    <li>2nd Special Forces Battalion: 524 personnel (4x Companies)</li>
                                    <li>3rd Special Forces Battalion: 524 personnel (4x Companies)</li>
                                    <li>Group Support Battalion: 155 personnel</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>JSOTF: Joint special operations task force</li>
                                    <li>CIA SAD: Special activities division coordination</li>
                                    <li>Coalition SOF: Partner nation special forces</li>
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
                                UNCLASSIFIED - Conduct unconventional warfare to organize resistance and disrupt enemy operations in denied territory.
                            </p>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Essential Tasks</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Infiltrate AO JADE via Route WHISKEY at H-72 hours</li>
                                    <li>Establish safe houses and cache sites (6 locations)</li>
                                    <li>Organize indigenous resistance forces (200+ personnel)</li>
                                    <li>Conduct direct action against key targets</li>
                                    <li>Coordinate with conventional forces at H+240 hours</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">End State</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Resistance network established, enemy operations disrupted, indigenous forces organized, linkup with conventional forces achieved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #10b981;">
                    <p style="color: #6ee7b7; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Group Level Practical Example per FM 5-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Group Practical Examples module initialized');
        return true;
    }
};
