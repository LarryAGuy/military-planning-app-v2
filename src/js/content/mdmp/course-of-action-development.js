/**
 * MDMP Step 3: Course of Action Development
 * Mirrors MDMP Step 1-2 module architecture with universal COA development button system
 * - Maintains CSP and ES6 modular patterns
 * - Complete framework implementation with OPORD-matching visual aesthetics
 * - Teal/cyan theme (#0891b2) for Course of Action Development
 */

// Import COA development section modules
import { coaDetailedAnalysisModule } from './sections/coa-detailed-analysis.js';
import { coaPracticalExamplesModule } from './sections/coa-practical-examples.js';
import { coaEchelonAnalysisModule } from './sections/coa-echelon-analysis.js';

export const courseOfActionDevelopmentContent = {
    title: "Step 3: Course of Action Development",
    description: "Development and analysis of feasible courses of action",

    modules: {
        detailedAnalysis: coaDetailedAnalysisModule,
        practicalExamples: coaPracticalExamplesModule,
        echelonAnalysis: coaEchelonAnalysisModule
    },

    getContent() {
        return this.doctrine;
    },

    doctrine: `
        <!-- Course of Action Development Module - Matches OPORD Execution structure -->
        <style>
            /* Navigation button styling (COA development variant) */
            .opord-nav-btn { display:flex; align-items:center; padding:8px 12px; font-size:14px; font-weight:500; border-radius:6px; border:none; cursor:pointer; transition:all .2s ease; user-select:none; white-space:nowrap; text-decoration:none; outline:none; }
            .opord-btn-teal { background-color:#0891b2; color:#fff; }
            .opord-btn-teal:hover { background-color:#0e7490; }
            .opord-btn-green { background-color:#16a34a; color:#fff; }
            .opord-btn-green:hover { background-color:#15803d; }
            .opord-btn-purple { background-color:#9333ea; color:#fff; }
            .opord-btn-purple:hover { background-color:#7c3aed; }
        </style>

        <div class="military-content h-full overflow-y-auto">
            <!-- Standardized Header Section -->
            <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px; box-shadow:0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);">
                <div style="display:flex; align-items:center; justify-content:space-between;">
                    <div style="flex:1; padding-right:16px;">
                        <h1 style="font-size:20px; font-weight:bold; color:white; margin-bottom:4px;">
                            <i class="fas fa-route" style="margin-right:8px; color:#0891b2;"></i>
                            Step 3: Course of Action Development
                        </h1>
                        <p style="font-size:14px; color:#9ca3af;">Development and analysis of feasible courses of action</p>
                    </div>
                    <div style="background-color:#1e3a8a; border:1px solid #2563eb; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
                        <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
                            <div>FM 5-0 (Nov 2024), Chapter 12, Paragraphs 12-1 to 12-25 — COA Development</div>
                            <div>ATP 5-0.1 (Jul 2015), Chapter 4 — COA Development Process</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Universal COA Development Button System Container -->
            <div id="universal-coa-nav" style="margin-bottom:16px;"></div>

            <!-- Main Content Area for Module Loading -->
            <div id="coa-content-area">
                <!-- Pre-loaded default content: Detailed Analysis -->
                ${coaDetailedAnalysisModule.getContent()}
            </div>
        </div>
    `,
};

export default courseOfActionDevelopmentContent;
