/**
 * MDMP Step 5: Course of Action Comparison
 * Mirrors MDMP Step 4 module architecture with universal COA comparison button system
 * - Maintains CSP and ES6 modular patterns
 * - Complete framework implementation with OPORD-matching visual aesthetics
 */

// Import COA comparison section modules
import { coaComparisonDetailedAnalysisModule } from './sections/coa-comparison-detailed-analysis.js';
import { coaComparisonPracticalExamplesModule } from './sections/coa-comparison-practical-examples.js';
import { coaComparisonEchelonAnalysisModule } from './sections/coa-comparison-echelon-analysis.js';

export const courseOfActionComparisonContent = {
  title: "Step 5: Course of Action Comparison",
  description: "Compare courses of action against evaluation criteria to identify the most effective option",

  getContent() {
    return this.doctrine;
  },

  doctrine: `
    <!-- Course of Action Comparison Module - Matches OPORD structure -->
    <style>
      /* Navigation button styling (COA comparison variant) */
      .opord-nav-btn { display:flex; align-items:center; padding:8px 12px; font-size:14px; font-weight:500; border-radius:6px; border:none; cursor:pointer; transition:all .2s ease; user-select:none; white-space:nowrap; text-decoration:none; outline:none; }
      .opord-btn-blue { background-color:#1d4ed8; color:#fff; }
      .opord-btn-blue:hover { background-color:#1e40af; }
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
              <i class="fas fa-balance-scale-right" style="margin-right:8px; color:#7c3aed;"></i>
              Step 5: Course of Action Comparison
            </h1>
            <p style="font-size:14px; color:#9ca3af;">Compare courses of action against evaluation criteria to identify the most effective option</p>
          </div>
          <div style="background-color:#1e3a8a; border:1px solid #2563eb; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
            <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
              <div>FM 5-0 (Nov 2024), Chapter 13 — COA Comparison</div>
              <div>ATP 5-0.1 (Jul 2015), COA Comparison</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Universal COA Comparison Button System Container -->
      <div id="universal-coa-comparison-nav" style="margin-bottom:16px;"></div>

      <!-- Main Content Area for Module Loading -->
      <div id="coa-comparison-content-area">
        <!-- Pre-loaded default content: Detailed Analysis -->
        ${coaComparisonDetailedAnalysisModule.getContent()}
      </div>
    </div>
  `,
};

export default courseOfActionComparisonContent;

