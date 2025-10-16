/**
 * JPP Step 7: Plan Development
 * Standardized header with universal buttons and dynamic content area
 */

// External initialization is performed by WorkspaceComponent based on category/module
// Import detailed analysis module for pre-loading
import { detailedAnalysisModule } from './sections/plan-development-detailed-analysis.js';

export const planDevelopmentContent = {
    title: "Step 7: Plan Development",
    description: "Joint operation plan development and comprehensive documentation",
    doctrine: `
        <div class="military-content">
            <!-- Standardized Header Section -->
            <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px; box-shadow:0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);">
                <div style="display:flex; align-items:center; justify-content:space-between;">
                    <div style="flex:1; padding-right:16px;">
                        <h1 style="font-size:20px; font-weight:bold; color:white; margin-bottom:4px;">
                            <i class="fas fa-drafting-compass" style="margin-right:8px; color:#f59e0b;"></i>
                            7. Plan Development
                        </h1>
                        <p style="font-size:14px; color:#9ca3af;">Joint operation plan development and comprehensive documentation</p>
                    </div>
                    <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
                        <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
                            <div>JP 5-0 (2017), Chapter 4, Para 4-7 — Plan Development</div>
                            <div>JP 3-0 (2018), Chapter 4 — Joint Plan Documentation</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Universal Button System Container -->
            <div id="universal-jpp-plan-development-nav" style="margin-bottom: 16px;"></div>

            <!-- Main Content Area for Module Loading -->
            <div id="plan-development-content-area" class="jpp-plan-dev-root">
                <!-- Pre-loaded default content: Detailed Analysis -->
                ${detailedAnalysisModule.getContent()}
            </div>
        </div>
    `,

    examples: []
};

export default planDevelopmentContent;
