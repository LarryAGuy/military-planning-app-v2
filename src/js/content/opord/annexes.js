/**
 * OPORD Annexes A–L, T
 * Mirrors OPORD Sections 1–5 architecture with Universal Annexes Button System
 * Framework-only implementation (no doctrinal content yet)
 */

// Import annexes section modules
import { detailedAnalysisModule } from './sections/annexes-detailed-analysis.js';
import { practicalExamplesModule } from './sections/annexes-practical-examples.js';
import { echelonAnalysisModule } from './sections/annexes-echelon-analysis.js';

export const annexesContent = {
  title: 'Annexes A–L, T',
  description: 'Supporting annexes and appendices framework (no doctrinal content yet)',

  // Module references for UniversalAnnexesButtons
  modules: {
    detailedAnalysis: detailedAnalysisModule,
    practicalExamples: practicalExamplesModule,
    echelonAnalysis: echelonAnalysisModule
  },

  getContent() {
    return this.doctrine;
  },

  doctrine: `
    <!-- Annexes Module - Matches Situation/Mission structure -->
    <style>
      /* Navigation button styling (shared OPORD pattern) */
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
      <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px; box-shadow:0 1px 3px rgba(0,0,0,.1), 0 1px 2px rgba(0,0,0,.06);">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div style="flex:1; padding-right:16px;">
            <h1 style="font-size:20px; font-weight:bold; color:white; margin-bottom:4px;">
              <i class="fas fa-folder-open" style="margin-right:8px; color:#60a5fa;"></i>
              Annexes A–L, T
            </h1>
            <p style="font-size:14px; color:#9ca3af;">Supporting annexes and appendices framework</p>
          </div>
          <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
            <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
              <div>FM 5-0 (Nov 2024), Appendix C — Annexes</div>
              <div>FM 6-0 (May 2022) — Commander and Staff Organization and Operations</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Universal Button System Container -->
      <div id="universal-annexes-nav" style="margin-bottom:16px;"></div>

      <!-- Main Content Area for Module Loading -->
      <div id="annexes-content-area">
        <div class="bg-gray-800 border border-gray-600 rounded-lg p-8 text-center">
          <i class="fas fa-mouse-pointer text-blue-400 text-3xl mb-4"></i>
          <h3 class="text-white text-xl font-semibold mb-2">Select a Section</h3>
          <p class="text-gray-300">Click a button above to load annexes content</p>
        </div>
      </div>
    </div>

    <!-- External button system - no inline scripts -->
  `
};

export default annexesContent;

