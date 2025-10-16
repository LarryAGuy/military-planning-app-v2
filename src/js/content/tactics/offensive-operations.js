/**
 * Tactics: Offensive Operations
 * Comprehensive implementation of offensive operations frameworks and tactical procedures
 * Contains detailed analysis, practical examples, and echelon-specific applications
 */

export const offensiveOperationsContent = {
    title: 'Tactics: Offensive Operations',
    description: 'Offensive tactics, maneuver, and operations execution frameworks',
    getContent(){
        return `
            <!-- Essential CSS for Module Integration -->
            <style>
                /* Cross-browser button standardization for navigation */
                .tactics-nav-btn {
                    display: inline-flex !important; align-items: center !important; justify-content: center !important;
                    padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
                    border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
                    transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
                    text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
                }
                .tactics-nav-btn:hover { transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(0,0,0,.3) !important; }
                .tactics-nav-btn:active { transform: translateY(0) !important; }
                .tactics-nav-btn:focus { outline: 2px solid #60a5fa !important; outline-offset: 2px !important; }
                .tactics-nav-btn i { margin-right: 8px !important; font-size: 14px !important; }
                @media (max-width: 768px) { .tactics-nav-btn { font-size: 12px !important; padding: 6px 10px !important; } }
            </style>

            <!-- Section Header with Knowledge Reference Box -->
            <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="flex: 1; padding-right: 16px;">
                        <h1 style="font-size: 20px; font-weight: bold; color: white; margin-bottom: 4px;">
                            <i class="fas fa-sword" style="margin-right: 8px; color: #60a5fa;"></i>
                            Offensive Operations
                        </h1>
                        <p style="font-size: 14px; color: #9ca3af;">Offensive tactics, maneuver, and operations execution frameworks</p>
                    </div>
                    <div style="background-color: #1e3a8a; border: 1px solid #1d4ed8; border-radius: 8px; padding: 8px; min-width: 192px; flex-shrink: 0;">
                        <div style="color: #dbeafe; font-size: 12px; line-height: 1.4;">
                            <div>FM 3-90 (Jul 2021), Chapter 7 — Offensive Operations</div>
                            <div>FM 3-21.8 (Apr 2016), Chapter 6 — Offense</div>
                            <div>JP 3-0 (Oct 2018), Chapter 4 — Offensive Operations</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Universal Button System Container -->
            <div id="universal-offensive-operations-nav" style="margin-bottom: 16px;">
                <!-- Universal button system will be injected here -->
            </div>

            <!-- Main Content Area for Module Loading -->
            <div id="offensive-operations-content-area">
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
export default offensiveOperationsContent;

