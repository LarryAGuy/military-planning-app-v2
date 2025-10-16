/**
 * Tactics: Battle Drills
 * Comprehensive implementation of battle drill frameworks and tactical procedures
 * Contains detailed analysis, practical examples, and echelon-specific applications
 */

export const battleDrillsContent = {
    title: 'Tactics: Battle Drills',
    description: 'Individual and collective tactical task execution frameworks',
    getContent(){
        return `
            <!-- Essential CSS for Module Integration -->
            <style>
                /* Cross-browser button standardization for navigation */
                .tactics-nav-btn {
                    display: flex !important;
                    align-items: center !important;
                    padding: 8px 12px !important;
                    font-size: 14px !important;
                    font-weight: 500 !important;
                    border-radius: 6px !important;
                    border: none !important;
                    cursor: pointer !important;
                    transition: all 0.2s ease !important;
                    user-select: none !important;
                    white-space: nowrap !important;
                    text-decoration: none !important;
                    outline: none !important;
                }

                /* Button color variants for navigation */
                .tactics-btn-blue { background-color: #2563eb !important; color: white !important; }
                .tactics-btn-blue:hover { background-color: #1d4ed8 !important; }
                .tactics-btn-green { background-color: #16a34a !important; color: white !important; }
                .tactics-btn-green:hover { background-color: #15803d !important; }
                .tactics-btn-purple { background-color: #7c3aed !important; color: white !important; }
                .tactics-btn-purple:hover { background-color: #6d28d9 !important; }
            </style>

            <!-- Section Header with Knowledge Reference Box -->
            <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="flex: 1; padding-right: 16px;">
                        <h1 style="font-size: 20px; font-weight: bold; color: white; margin-bottom: 4px;">
                            <i class="fas fa-crosshairs" style="margin-right: 8px; color: #60a5fa;"></i>
                            Battle Drills
                        </h1>
                        <p style="font-size: 14px; color: #9ca3af;">Individual and collective tactical task execution frameworks</p>
                    </div>
                    <div style="background-color: #1e3a8a; border: 1px solid #1d4ed8; border-radius: 8px; padding: 8px; min-width: 192px; flex-shrink: 0;">
                        <div style="color: #dbeafe; font-size: 12px; line-height: 1.4;">
                            <div>FM 3-21.8 (Apr 2016), Chapter 3 — Battle Drills</div>
                            <div>FM 3-21.10 (Jul 2006), Chapter 4 — Battle Drills</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Universal Button System Container -->
            <div id="universal-battle-drills-nav" style="margin-bottom: 16px;">
                <!-- Universal button system will be injected here -->
            </div>

            <!-- Main Content Area for Module Loading -->
            <div id="battle-drills-content-area">
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
export default battleDrillsContent;