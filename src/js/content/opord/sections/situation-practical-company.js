/**
 * OPORD Situation - Practical Examples - Company Level
 * UNCLASSIFIED content for company-level situation analysis examples
 * Follows FM 5-0 standards with realistic unit designations
 */

export const companyPracticalModule = {
    id: 'company-practical',
    title: 'Company Level Practical Examples',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Company Level Practical Examples - Professional Military Layout -->
            <div id="company-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-user-friends" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        1. Situation - Company Level Example
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - Bravo Company, 2nd Battalion, 87th Infantry Regiment
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
                                UNCLASSIFIED - Company AO covers 2.5 km² urban sector with mixed terrain and infrastructure.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Boundaries & Control Measures</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Phase Line CHARLIE (18SUJ1234567900)</li>
                                    <li>South: Phase Line DELTA (18SUJ1234567700)</li>
                                    <li>East: Boundary with Bravo Company (1.5 km)</li>
                                    <li>West: Main Supply Route FLORIDA (2.0 km)</li>
                                    <li>Objective HAWK: Central market complex (500m x 300m)</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Key Terrain & Infrastructure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Hill 247: Dominant observation point (247m MSL, 360° visibility)</li>
                                    <li>Bridge 12: Critical mobility corridor (150m span, 4-lane capacity)</li>
                                    <li>Market Complex: Urban terrain feature (200m x 150m)</li>
                                    <li>Water Treatment Plant: Critical infrastructure (50m x 30m)</li>
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
                                UNCLASSIFIED - Enemy reinforced platoon (38 personnel) with crew-served weapons and IED capability.
                            </p>
                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Order of Battle</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>1x Platoon HQ (4 personnel)</li>
                                    <li>3x Squads (10 personnel each)</li>
                                    <li>1x Weapons Team: PKM (7.62mm), RPG-7V2 (40mm)</li>
                                    <li>IED emplacers and spotters (4 personnel)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Defend prepared positions for 0600-1400 hours (8 hours)</li>
                                    <li>Conduct coordinated withdrawal over 1.5 km route</li>
                                    <li>Emplace IEDs along 2 km of likely approach routes</li>
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
                                UNCLASSIFIED - Bravo Company (134 personnel) conducting urban operations as part of battalion assault.
                            </p>
                            <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; border-left: 3px solid #60a5fa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Company Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Company HQ: CO, XO, 1SG, RTO, Medics (8 personnel)</li>
                                    <li>1st Platoon: 31 personnel (3 squads + HQ)</li>
                                    <li>2nd Platoon: 31 personnel (3 squads + HQ)</li>
                                    <li>3rd Platoon: 31 personnel (3 squads + HQ)</li>
                                    <li>Weapons Platoon: 33 personnel (M240B, M249, AT4)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Supporting Elements</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Bravo Company: Eastern flank security (1.5 km separation)</li>
                                    <li>Battalion Mortars: M120 120mm mortar systems</li>
                                    <li>Engineer Squad: Breach and EOD support (12 personnel)</li>
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
                                UNCLASSIFIED - Seize Objective HAWK (market complex) to deny enemy use and establish forward operating base.
                            </p>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Essential Tasks</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Conduct movement to contact at H-Hour 0530</li>
                                    <li>Seize Objective HAWK (500m x 300m market complex) by H+4 hours (0930)</li>
                                    <li>Clear and secure market complex (12 buildings)</li>
                                    <li>Establish defensive positions on Hill 247 (247m MSL)</li>
                                    <li>Coordinate with Bravo Company (1.5 km to east)</li>
                                    <li>Prepare for battalion follow-on operations at H+12 hours</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Commander's Intent</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Rapidly seize Objective HAWK to prevent enemy reinforcement and establish base for subsequent operations
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #10b981;">
                    <p style="color: #6ee7b7; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Company Level Practical Example per FM 5-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Company Practical Examples module initialized');
        return true;
    }
};
