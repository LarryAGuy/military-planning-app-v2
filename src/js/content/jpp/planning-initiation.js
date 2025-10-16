/**
 * JPP Step 1: Planning Initiation
 * Joint planning initiation and guidance per JP 5-0
 */

// Import the Universal Button System for external initialization
import { UniversalPlanningInitiationButtons } from './UniversalPlanningInitiationButtons.js';
// Import detailed analysis module for pre-loading
import { detailedAnalysisModule } from './sections/planning-initiation-detailed-analysis.js';

export const planningInitiationContent = {
    title: "Step 1: Planning Initiation",
    description: "Joint planning initiation and strategic guidance development",

    // Initialize Universal Button System
    async initializeButtonSystem() {
        try {
            console.log('🚀 Initializing JPP Step 1 Universal Button System...');
            const buttonSystem = new UniversalPlanningInitiationButtons();
            await buttonSystem.initialize();

            // Make available globally for testing
            window.universalPlanningInitiationButtons = buttonSystem;

            console.log('✅ JPP Step 1 Universal Button System initialized successfully');
            return buttonSystem;
        } catch (error) {
            console.error('❌ Failed to initialize JPP Step 1 Universal Button System:', error);
            throw error;
        }
    },

    doctrine: `
        <div class="military-content">
            <!-- Standardized Header Section -->
            <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px; box-shadow:0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);">
                <div style="display:flex; align-items:center; justify-content:space-between;">
                    <div style="flex:1; padding-right:16px;">
                        <h1 style="font-size:20px; font-weight:bold; color:white; margin-bottom:4px;">
                            <i class="fas fa-flag" style="margin-right:8px; color:#60a5fa;"></i>
                            1. Planning Initiation
                        </h1>
                        <p style="font-size:14px; color:#9ca3af;">Joint planning initiation and strategic guidance development</p>
                    </div>
                    <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
                        <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
                            <div>JP 5-0 (2017), Chapter 4, Para 4-1</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Universal Button System Container -->
            <div id="universal-jpp-planning-initiation-nav" style="margin-bottom: 16px;">
                <!-- Universal button system will be injected here -->
            </div>

            <!-- Main Content Area for Module Loading -->
            <div id="planning-initiation-content-area">
                <!-- Pre-loaded default content: Detailed Analysis -->
                ${detailedAnalysisModule.getContent()}
            </div>

        <!-- External button system - no inline scripts -->

        </div>
    `,
    
};

export default planningInitiationContent;
