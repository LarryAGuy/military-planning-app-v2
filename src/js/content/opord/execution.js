/**
 * OPORD Section 3: Execution
 * Mirrors Situation and Mission module architecture with universal execution button system
 * - Maintains CSP and ES6 modular patterns
 * - Complete framework implementation with placeholder content
 */

// Import execution section modules
import { detailedAnalysisModule } from './sections/execution-detailed-analysis.js';
import { practicalExamplesModule } from './sections/execution-practical-examples.js';
import { echelonAnalysisModule } from './sections/execution-echelon-analysis.js';

export const executionContent = {
    title: "3. EXECUTION",
    description: "Operations concept, subordinate tasks, and coordination",

    modules: {
        detailedAnalysis: detailedAnalysisModule,
        practicalExamples: practicalExamplesModule,
        echelonAnalysis: echelonAnalysisModule
    },

    getContent() {
        return this.doctrine;
    },

    doctrine: `
        <!-- Execution Module - Matches Situation and Mission structure -->
        <style>
            /* Navigation button styling (execution variant) */
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
                            <i class="fas fa-play" style="margin-right:8px; color:#f97316;"></i>
                            3. EXECUTION
                        </h1>
                        <p style="font-size:14px; color:#9ca3af;">Operations concept, subordinate tasks, and coordination</p>
                    </div>
                    <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
                        <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
                            <div>FM 5-0 (Nov 2024), Chapter 10, Paragraphs 10-1 to 10-25 — Execution</div>
                            <div>FM 3-0 (Oct 2022), Chapter 6 — Offensive Operations</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Universal Execution Button System Container -->
            <div id="universal-execution-nav" style="margin-bottom:16px;"></div>

            <!-- Main Content Area for Module Loading -->
            <div id="execution-content-area">
                <!-- Default placeholder content -->
                <div class="bg-gray-800 border border-gray-600 rounded-lg p-8 text-center">
                    <i class="fas fa-mouse-pointer text-orange-400 text-3xl mb-4"></i>
                    <h3 class="text-white text-xl font-semibold mb-2">Select a Section</h3>
                    <p class="text-gray-300">Click one of the buttons above to load section content</p>
                </div>
            </div>
        </div>
    `,
};

export default executionContent;
