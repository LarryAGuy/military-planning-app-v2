/**
 * OPORD Situation - Practical Examples - Brigade Level
 * UNCLASSIFIED content for brigade-level situation analysis examples
 * Follows FM 5-0 standards with realistic brigade command designations
 */

export const brigadePracticalModule = {
    id: 'brigade-practical',
    title: 'Brigade Level Practical Examples',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Brigade Level Practical Examples - Professional Military Layout -->
            <div id="brigade-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-chess-rook" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        1. Situation - Brigade Level Example
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - 3rd Armored Brigade Combat Team, 1st Armored Division (Bulldog Brigade)
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
                                UNCLASSIFIED - Brigade AO encompasses 85 km² of mixed terrain including urban centers, open terrain, and key infrastructure.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Operational Boundaries</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Phase Line IRON (18SUJ1234600000)</li>
                                    <li>South: Phase Line STEEL (18SUJ1234100000)</li>
                                    <li>East: Boundary with 1st IBCT (18 km)</li>
                                    <li>West: Boundary with 2nd IBCT (16 km)</li>
                                    <li>AO BULLDOG: Primary brigade operational area (85 km²)</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Key Infrastructure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Highway 12: Primary ground LOC (4-lane, 25 km)</li>
                                    <li>Forward Operating Base STEEL: Brigade support area</li>
                                    <li>Landing Zone BULLDOG: Helicopter operations (500m x 300m)</li>
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
                                UNCLASSIFIED - Enemy mechanized brigade (4,500 personnel) with integrated armor and artillery support.
                            </p>
                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Enemy Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Brigade HQ: Command and control (180 personnel)</li>
                                    <li>2x Mechanized Battalions (758 personnel each)</li>
                                    <li>1x Tank Battalion (758 personnel, 58x T-80U MBTs)</li>
                                    <li>1x Artillery Battalion (450 personnel, 2S19 152mm)</li>
                                    <li>1x Air Defense Battery (150 personnel, SA-15 systems)</li>
                                    <li>1x Support Battalion (446 personnel)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Enemy Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>Conduct coordinated defense for 72-96 hours</li>
                                    <li>Execute battalion-level counterattacks to 15 km</li>
                                    <li>Provide artillery support to 30 km range</li>
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
                                UNCLASSIFIED - 3rd Armored Brigade Combat Team (4,743 personnel) conducting offensive operations as part of 1st Armored Division.
                            </p>
                            <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; border-left: 3px solid #60a5fa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Brigade Organization</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>Brigade HQ: Command, staff, communications (200 personnel)</li>
                                    <li>2x Combined Arms Battalions (758 personnel each)</li>
                                    <li>1x Armor Battalion (758 personnel, 58x M1A2 Abrams)</li>
                                    <li>1x Field Artillery Battalion (450 personnel, M109A7 155mm)</li>
                                    <li>1x Brigade Engineer Battalion (758 personnel)</li>
                                    <li>Brigade Support Battalion (1,061 personnel)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Higher & Adjacent</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>1st Armored Division: Higher headquarters</li>
                                    <li>1st IBCT: Eastern boundary (18 km separation)</li>
                                    <li>2nd IBCT: Western boundary (16 km separation)</li>
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
                                UNCLASSIFIED - Conduct offensive operations to penetrate enemy defenses and seize key terrain in support of division attack.
                            </p>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Essential Tasks</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Conduct movement to contact at H-Hour 0530</li>
                                    <li>Penetrate enemy defenses along Highway 12 by H+6 hours (1130)</li>
                                    <li>Seize and secure FOB STEEL by H+12 hours (1730)</li>
                                    <li>Defeat enemy counterattacks for 72 hours (H+12 to H+84)</li>
                                    <li>Prepare for division exploitation at H+96 hours</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">End State</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Enemy defenses penetrated, FOB STEEL secured, enemy brigade defeated, conditions set for division exploitation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #10b981;">
                    <p style="color: #6ee7b7; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Brigade Level Practical Example per FM 5-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Brigade Practical Examples module initialized');
        return true;
    }
};
