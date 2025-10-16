/**
 * MDMP Step 1: Receipt of Mission
 * Mirrors OPORD Section 3 (Execution) module architecture with universal receipt button system
 * - Maintains CSP and ES6 modular patterns
 * - Complete framework implementation with OPORD-matching visual aesthetics
 */

// Import receipt section modules
import { detailedAnalysisModule } from './sections/receipt-detailed-analysis.js';
import { practicalExamplesModule } from './sections/receipt-practical-examples.js';
import { echelonAnalysisModule } from './sections/receipt-echelon-analysis.js';

export const receiptOfMissionContent = {
    title: "Step 1: Receipt of Mission",
    description: "Initial planning activities and preparation for the MDMP",

    modules: {
        detailedAnalysis: detailedAnalysisModule,
        practicalExamples: practicalExamplesModule,
        echelonAnalysis: echelonAnalysisModule
    },

    getContent() {
        return this.doctrine;
    },

    doctrine: `
        <!-- Receipt of Mission Module - Matches OPORD Execution structure -->
        <style>
            /* Navigation button styling (receipt variant) */
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
                            <i class="fas fa-inbox" style="margin-right:8px; color:#10b981;"></i>
                            Step 1: Receipt of Mission
                        </h1>
                        <p style="font-size:14px; color:#9ca3af;">Initial planning activities and preparation for the MDMP</p>
                    </div>
                    <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
                        <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
                            <div>FM 5-0 (Nov 2024), Chapter 11, Paragraphs 11-1 to 11-15 — Receipt of Mission</div>
                            <div>ATP 5-0.1 (Jul 2015), Chapter 2 — Army Design Methodology</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Universal Receipt Button System Container -->
            <div id="universal-receipt-nav" style="margin-bottom:16px;"></div>

            <!-- Main Content Area for Module Loading -->
            <div id="receipt-content-area">
                <!-- Pre-loaded default content: Detailed Analysis -->
                ${detailedAnalysisModule.getContent()}
            </div>
        </div>
    `,
};

export default receiptOfMissionContent;