/**
 * MDMP Step 2: Mission Analysis
 * Mirrors MDMP Step 1 (Receipt of Mission) module architecture with universal mission analysis button system
 * - Maintains CSP and ES6 modular patterns
 * - Complete framework implementation with OPORD-matching visual aesthetics
 */

// Import mission analysis section modules
import { detailedAnalysisModule } from './sections/mission-detailed-analysis.js';
import { practicalExamplesModule } from './sections/mission-practical-examples.js';
import { echelonAnalysisModule } from './sections/mission-echelon-analysis.js';

export const missionAnalysisContent = {
    title: "Step 2: Mission Analysis",
    description: "Comprehensive analysis of the mission and operational environment",

    modules: {
        detailedAnalysis: detailedAnalysisModule,
        practicalExamples: practicalExamplesModule,
        echelonAnalysis: echelonAnalysisModule
    },

    getContent() {
        return this.doctrine;
    },

    doctrine: `
        <!-- Mission Analysis Module - Matches OPORD Execution structure -->
        <style>
            /* Navigation button styling (mission analysis variant) */
            .opord-nav-btn { display:flex; align-items:center; padding:8px 12px; font-size:14px; font-weight:500; border-radius:6px; border:none; cursor:pointer; transition:all .2s ease; user-select:none; white-space:nowrap; text-decoration:none; outline:none; }
            .opord-btn-blue { background-color:#2563eb; color:#fff; }
            .opord-btn-blue:hover { background-color:#1d4ed8; }
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
                            <i class="fas fa-search" style="margin-right:8px; color:#3b82f6;"></i>
                            Step 2: Mission Analysis
                        </h1>
                        <p style="font-size:14px; color:#9ca3af;">Comprehensive analysis of the mission and operational environment</p>
                    </div>
                    <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
                        <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
                            <div>FM 5-0 (Nov 2024), Chapter 11, Paragraphs 11-16 to 11-30 — Mission Analysis</div>
                            <div>ATP 5-0.1 (Jul 2015), Chapter 3 — Mission Analysis Process</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Universal Mission Analysis Button System Container -->
            <div id="universal-mission-analysis-nav" style="margin-bottom:16px;"></div>

            <!-- Main Content Area for Module Loading -->
            <div id="mission-analysis-content-area">
                <!-- Pre-loaded default content: Detailed Analysis -->
                ${detailedAnalysisModule.getContent()}
            </div>
        </div>
    `,
};

export default missionAnalysisContent;
