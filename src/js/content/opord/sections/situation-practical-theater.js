/**
 * OPORD Situation - Practical Examples - Theater Level
 * UNCLASSIFIED content for theater-level situation analysis examples
 * Follows FM 5-0 standards with realistic strategic command designations
 */

export const theaterPracticalModule = {
    id: 'theater-practical',
    title: 'Theater Level Practical Examples',
    classification: 'UNCLASSIFIED',
    
    getContent: function() {
        return `
            <!-- Theater Level Practical Examples - Professional Military Layout -->
            <div id="theater-practical-section" style="margin-bottom: 24px;">
                <!-- Section Header -->
                <div style="margin-bottom: 20px; padding-bottom: 12px; border-bottom: 2px solid #374151;">
                    <h3 style="font-size: 18px; font-weight: 600; color: white; margin: 0; display: flex; align-items: center;">
                        <i class="fas fa-globe" style="margin-right: 8px; color: #10b981; font-size: 16px;"></i>
                        1. Situation - Theater Level Example
                    </h3>
                    <p style="color: #6ee7b7; font-size: 14px; margin: 8px 0 0 0;">
                        UNCLASSIFIED - U.S. Indo-Pacific Command (USINDOPACOM)
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
                                UNCLASSIFIED - USINDOPACOM AOR encompasses 36 nations across Pacific and Indian Ocean regions, covering 52% of Earth's surface.
                            </p>
                            <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 8px 0;">Geographic Boundaries</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>North: Arctic Ocean to Bering Strait</li>
                                    <li>South: Antarctica (60°S latitude)</li>
                                    <li>East: U.S. West Coast to International Date Line</li>
                                    <li>West: India-Pakistan border to Strait of Malacca</li>
                                    <li>Key Regions: Northeast Asia, Southeast Asia, Oceania</li>
                                </ul>
                            </div>
                            <div style="background-color: rgba(16, 185, 129, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #10b981;">
                                <h5 style="font-weight: 600; color: #6ee7b7; font-size: 12px; margin: 0 0 6px 0;">Strategic Terrain</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0; padding-left: 16px;">
                                    <li>First Island Chain: Critical maritime chokepoints</li>
                                    <li>Strait of Malacca: Global shipping bottleneck</li>
                                    <li>Korean Peninsula: Strategic land bridge</li>
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
                                UNCLASSIFIED - Near-peer adversary with strategic nuclear capabilities, advanced conventional forces, and global power projection.
                            </p>
                            <div style="background-color: rgba(127, 29, 29, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #dc2626; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 8px 0;">Strategic Capabilities</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Nuclear Triad: 400+ ICBMs, 12x SSBNs, 76x strategic bombers</li>
                                    <li>Naval Forces: 355 vessels including 3x aircraft carriers</li>
                                    <li>Air Forces: 2,800 aircraft with 5th generation stealth capability</li>
                                    <li>Ground Forces: 2,000,000 active personnel (75x divisions)</li>
                                    <li>Space/Cyber: Anti-satellite weapons, cyber warfare units</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #f87171;">
                                <h5 style="font-weight: 600; color: #fca5a5; font-size: 12px; margin: 0 0 6px 0;">Most Likely Strategic COA</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Establish regional hegemony through graduated escalation, anti-access/area-denial operations, and coalition disruption
                                </p>
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
                                UNCLASSIFIED - USINDOPACOM coordinates 385,000 personnel across all services with coalition partners in 36 nations.
                            </p>
                            <div style="background-color: rgba(30, 58, 138, 0.2); padding: 12px; border-radius: 6px; border: 1px solid #2563eb; border-left: 3px solid #60a5fa; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 8px 0;">Theater Command Structure</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.6; margin: 0; padding-left: 16px;">
                                    <li>U.S. Army Pacific (USARPAC): Land component</li>
                                    <li>U.S. Pacific Fleet (PACFLT): Naval component</li>
                                    <li>Pacific Air Forces (PACAF): Air component</li>
                                    <li>U.S. Marine Forces Pacific (MARFORPAC): Marine component</li>
                                    <li>U.S. Space Forces Indo-Pacific: Space component</li>
                                    <li>U.S. Special Operations Command Pacific (SOCPAC)</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #60a5fa;">
                                <h5 style="font-weight: 600; color: #93c5fd; font-size: 12px; margin: 0 0 6px 0;">Coalition Partners</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>QUAD Alliance: Australia, India, Japan</li>
                                    <li>AUKUS Partnership: Australia, United Kingdom</li>
                                    <li>Five Eyes: Intelligence sharing network</li>
                                    <li>ASEAN Partners: Regional security cooperation</li>
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
                                UNCLASSIFIED - Maintain strategic deterrence and defend U.S. interests across Indo-Pacific region through integrated deterrence.
                            </p>
                            <div style="background-color: rgba(168, 85, 247, 0.2); padding: 10px; border-radius: 6px; border: 1px solid #a855f7; margin-bottom: 12px;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 8px 0;">Strategic Objectives</h5>
                                <ul style="color: #d1d5db; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                                    <li>Maintain strategic deterrence against near-peer threats</li>
                                    <li>Strengthen alliance and partnership networks</li>
                                    <li>Ensure freedom of navigation and overflight</li>
                                    <li>Counter malign influence and gray zone activities</li>
                                    <li>Maintain readiness for large-scale combat operations</li>
                                </ul>
                            </div>
                            <div style="background-color: #374151; padding: 10px; border-radius: 6px; border-left: 3px solid #a855f7;">
                                <h5 style="font-weight: 600; color: #c4b5fd; font-size: 12px; margin: 0 0 6px 0;">Theater End State</h5>
                                <p style="color: #d1d5db; font-size: 12px; line-height: 1.4; margin: 0;">
                                    Free and open Indo-Pacific with strengthened deterrence, enhanced coalition interoperability, and preserved rules-based international order
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Classification Footer -->
                <div style="margin-top: 16px; padding: 12px; background-color: #065f46; border-radius: 6px; border-left: 3px solid #10b981;">
                    <p style="color: #6ee7b7; font-size: 12px; margin: 0; text-align: center;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Theater Level Practical Example per FM 5-0 Standards
                    </p>
                </div>
            </div>
        `;
    },
    
    initialize: function() {
        console.log('DEBUG: Theater Practical Examples module initialized');
        return true;
    }
};
