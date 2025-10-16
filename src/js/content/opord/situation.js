/**
 * OPORD Paragraph 1: Situation
 * Comprehensive implementation establishing visual design foundation for entire OPORD system
 * Contains enemy situation, friendly situation, environmental considerations, and echelon complexity analysis
 *
 * SPECIAL AUTHORIZATION: Exceeds 300-line limit due to extensive doctrinal content requirements
 */

// Import section modules
import { detailedAnalysisModule } from './sections/situation-detailed-analysis.js';
import { practicalExamplesModule } from './sections/situation-practical-examples.js';
import { echelonAnalysisModule } from './sections/situation-echelon-analysis.js';

export const situationContent = {
    title: "1. SITUATION",
    description: "Analysis of the operational environment including enemy, friendly, and environmental factors",

    // Module references for dynamic loading
    modules: {
        detailedAnalysis: detailedAnalysisModule,
        practicalExamples: practicalExamplesModule,
        echelonAnalysis: echelonAnalysisModule
    },

    doctrine: `
        <!-- Essential CSS for Module Integration -->
        <style>
            /* Cross-browser button standardization for navigation */
            .opord-nav-btn {
                display: flex !important;
                align-items: center !important;
                padding: 8px 12px !important;
                font-size: 14px !important;
                font-weight: 500 !important;
                border-radius: 6px !important;
                border: none !important;
                cursor: pointer !important;
                transition: all 0.2s ease !important;
                user-select: none !important;
                white-space: nowrap !important;
                text-decoration: none !important;
                outline: none !important;
            }



            /* Button color variants for navigation */
            .opord-btn-blue { background-color: #2563eb !important; color: white !important; }
            .opord-btn-blue:hover { background-color: #1d4ed8 !important; }
            .opord-btn-green { background-color: #16a34a !important; color: white !important; }
            .opord-btn-green:hover { background-color: #15803d !important; }
            .opord-btn-purple { background-color: #9333ea !important; color: white !important; }
            .opord-btn-purple:hover { background-color: #7c3aed !important; }
        </style>

        <div class="military-content h-full overflow-y-auto">
            <!-- Standardized Header Section -->
            <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 16px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div style="flex: 1; padding-right: 16px;">
                        <h1 style="font-size: 20px; font-weight: bold; color: white; margin-bottom: 4px;">
                            <i class="fas fa-map" style="margin-right: 8px; color: #60a5fa;"></i>
                            1. SITUATION
                        </h1>
                        <p style="font-size: 14px; color: #9ca3af;">Analysis of operational environment factors</p>
                    </div>
                    <div style="background-color: #1e3a8a; border: 1px solid #1d4ed8; border-radius: 8px; padding: 8px; min-width: 192px; flex-shrink: 0;">
                        <div style="color: #dbeafe; font-size: 12px; line-height: 1.4;">
                            <div>FM 5-0 (Nov 2024), Chapter 9, Para 9-15 — Situation Analysis</div>
                            <div>ADP 5-0 (Jul 2019), Chapter 2 — The Operations Process</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- NEW ARCHITECTURE: Universal Button System Container -->
            <div id="universal-situation-nav" style="margin-bottom: 16px;">
                <!-- Universal button system will be injected here -->
            </div>

            <!-- Main Content Area for Module Loading -->
            <div id="situation-content-area">
                <!-- Module content will be loaded here based on button selection -->
                <div class="bg-gray-800 border border-gray-600 rounded-lg p-8 text-center">
                    <i class="fas fa-mouse-pointer text-blue-400 text-3xl mb-4"></i>
                    <h3 class="text-white text-xl font-semibold mb-2">Select a Section</h3>
                    <p class="text-gray-300">Click one of the buttons above to load section content</p>
                </div>
            </div>

        <!-- NEW ARCHITECTURE: External button system - no inline scripts -->
    `,

    annexes: [
        {
            id: "A",
            title: "Task Organization",
            description: "Complete unit task organization, command relationships, and attachment/detachment of forces for the operation"
        },
        {
            id: "B",
            title: "Intelligence",
            description: "Detailed intelligence analysis, IPB products, enemy situation templates, and intelligence collection plan"
        },
        {
            id: "C",
            title: "Operations",
            description: "Detailed operational planning information, graphics, control measures, and coordination instructions"
        },
        {
            id: "D",
            title: "Fires",
            description: "Fire support planning, target lists, fire support coordination measures, and ammunition requirements"
        },
        {
            id: "E",
            title: "Protection",
            description: "Force protection measures, CBRN considerations, air defense planning, and survivability operations"
        },
        {
            id: "F",
            title: "Sustainment",
            description: "Logistics planning, supply operations, maintenance support, and medical evacuation procedures"
        },
        {
            id: "G",
            title: "Engineer",
            description: "Engineer support planning, obstacle operations, mobility/countermobility, and survivability"
        },
        {
            id: "H",
            title: "Air Defense",
            description: "Air defense planning, weapon control status, engagement criteria, and coordination procedures"
        },
        {
            id: "I",
            title: "Information Operations",
            description: "Information operations planning, OPSEC measures, deception operations, and electronic warfare (Updated FM 5-0 Nov 2024)"
        },
        {
            id: "J",
            title: "Public Affairs",
            description: "Public affairs guidance, media engagement procedures, and information release authority"
        },
        {
            id: "K",
            title: "Civil Affairs Operations",
            description: "Civil affairs operations, civil-military cooperation, and host nation coordination (Updated FM 5-0 Nov 2024)"
        },
        {
            id: "L",
            title: "Reconnaissance and Surveillance",
            description: "Reconnaissance and surveillance planning, collection management, and reporting procedures (Updated FM 5-0 Nov 2024)"
        },
        {
            id: "T",
            title: "Cyber Electromagnetic Activities",
            description: "Cyber electromagnetic activities, spectrum management, and electronic warfare coordination (New FM 5-0 Nov 2024)"
        }
    ]
};

export default situationContent;
