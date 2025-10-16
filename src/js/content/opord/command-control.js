/**
 * OPORD Section 5: Command & Control
 * Framework-only implementation following established architectural patterns from Sections 1-4
 * - ES6 module with dynamic loading via ContentLoader
 * - Universal Command Control Button System integration
 * - Three-section modular architecture (Detailed Analysis, Practical Examples, Echelon Analysis)
 */

// Import command control section modules
import { detailedAnalysisModule } from './sections/command-control-detailed-analysis.js';
import { practicalExamplesModule } from './sections/command-control-practical-examples.js';
import { echelonAnalysisModule } from './sections/command-control-echelon-analysis.js';

export const commandControlContent = {
    title: '5. COMMAND & CONTROL',
    description: 'Command structure, communications, and control measures framework',

    modules: {
        detailedAnalysis: detailedAnalysisModule,
        practicalExamples: practicalExamplesModule,
        echelonAnalysis: echelonAnalysisModule
    },

    getContent() {
        return this.doctrine;
    },

    doctrine: `
        <!-- Command & Control Module - Matches Sections 1-4 structure -->
        <style>
            /* Navigation button styling (command control variant) */
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
                            <i class="fas fa-satellite-dish" style="margin-right:8px; color:#f59e0b;"></i>
                            5. COMMAND & CONTROL
                        </h1>
                        <p style="font-size:14px; color:#9ca3af;">Command structure, communications, and control measures</p>
                    </div>
                    <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
                        <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
                            <div>FM 5-0 (Nov 2024), Chapter 10, Para 10-36 to 10-42 — Command & Control</div>
                            <div>FM 6-0 (May 2022) — Commander and Staff Organization and Operations</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Universal Command Control Button System Container -->
            <div id="universal-command-control-nav" style="margin-bottom:16px;"></div>

            <!-- Main Content Area for Module Loading -->
            <div id="command-control-content-area">
                <!-- Default placeholder content -->
                <div class="bg-gray-800 border border-gray-600 rounded-lg p-8 text-center">
                    <i class="fas fa-mouse-pointer text-yellow-400 text-3xl mb-4"></i>
                    <h3 class="text-white text-xl font-semibold mb-2">Select a Section</h3>
                    <p class="text-gray-300">Click one of the buttons above to load section content</p>
                </div>
            </div>
        </div>
    `,
};

export default commandControlContent;
