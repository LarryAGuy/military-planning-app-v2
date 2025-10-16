/**
 * Tactics: Movement & Maneuver
 * Comprehensive implementation of movement and maneuver frameworks and tactical procedures
 * Contains detailed analysis, practical examples, and echelon-specific applications
 */

export const movementAndManeuverContent = {
    title: 'Tactics: Movement & Maneuver',
    description: 'Tactical mobility and formation movement execution frameworks',
    getContent(){
        return `
            <!-- Essential CSS for Module Integration -->
            <style>
                /* Cross-browser button standardization for navigation */
                .tactics-nav-btn {
                    // ... complete CSS structure from Battle Drills
                }
            </style>

            <!-- Section Header with Knowledge Reference Box -->
            <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="flex: 1; padding-right: 16px;">
                        <h1 style="font-size: 20px; font-weight: bold; color: white; margin-bottom: 4px;">
                            <i class="fas fa-route" style="margin-right: 8px; color: #60a5fa;"></i>
                            Movement & Maneuver
                        </h1>
                        <p style="font-size: 14px; color: #9ca3af;">Tactical mobility and formation movement execution frameworks</p>
                    </div>
                    <div style="background-color: #1e3a8a; border: 1px solid #1d4ed8; border-radius: 8px; padding: 8px; min-width: 192px; flex-shrink: 0;">
                        <div style="color: #dbeafe; font-size: 12px; line-height: 1.4;">
                            <div>FM 3-0 (Oct 2017), Chapter 6 — Movement</div>
                            <div>FM 3-90 (Jul 2021), Chapter 3 — Maneuver</div>
                            <div>JP 3-0 (Oct 2018), Chapter 4 — Movement</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Universal Button System Container -->
            <div id="universal-movement-and-maneuver-nav" style="margin-bottom: 16px;">
                <!-- Universal button system will be injected here -->
            </div>

            <!-- Main Content Area for Module Loading -->
            <div id="movement-and-maneuver-content-area">
                <!-- Module content will be loaded here based on button selection -->
                <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 40px; text-center;">
                    <i class="fas fa-mouse-pointer" style="color: #60a5fa; font-size: 48px; margin-bottom: 16px;"></i>
                    <h3 style="color: white; font-size: 20px; font-weight: 600; margin-bottom: 8px;">Select a Section</h3>
                    <p style="color: #9ca3af; font-size: 14px; margin: 0;">Click one of the buttons above to load section content</p>
                </div>
            </div>
        `;
    }
};
export default movementAndManeuverContent;