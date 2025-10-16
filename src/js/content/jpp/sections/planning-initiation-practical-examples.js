/**
 * JPP Step 1: Planning Initiation - Practical Examples Module
 * Joint planning initiation practical examples per JP 5-0
 */

// Import all echelon-specific practical example modules
import getPlatoonPlanningInitiationExample from './planning-initiation-practical-platoon.js';
import getCompanyPlanningInitiationExample from './planning-initiation-practical-company.js';
import getSquadronPlanningInitiationExample from './planning-initiation-practical-squadron.js';
import getBattalionPlanningInitiationExample from './planning-initiation-practical-battalion.js';
import getGroupPlanningInitiationExample from './planning-initiation-practical-group.js';
import getRegimentPlanningInitiationExample from './planning-initiation-practical-regiment.js';
import getBrigadePlanningInitiationExample from './planning-initiation-practical-brigade.js';
import getDivisionPlanningInitiationExample from './planning-initiation-practical-division.js';
import getCorpsPlanningInitiationExample from './planning-initiation-practical-corps.js';
import getArmyPlanningInitiationExample from './planning-initiation-practical-army.js';
import getTheaterPlanningInitiationExample from './planning-initiation-practical-theater.js';

export const practicalExamplesModule = {
    id: 'planning-initiation-practical-examples',
    title: 'Practical Examples',
    defaultExpanded: false,

    getContent: function() {
        return `
            <!-- Practical Examples Section -->
            <div id="planning-initiation-practical-examples-section" class="dashboard-widgets mb-12">
                <!-- Header Row with Echelon Dropdowns -->
                <div style="
                    display: flex;
                    align-items: center;
                    margin-bottom: 16px;
                    gap: 16px;
                    position: relative;
                ">
                    <h3 style="
                        font-size: 18px;
                        font-weight: 600;
                        color: white;
                        margin: 0;
                        display: flex;
                        align-items: center;
                    ">
                        <i class="fas fa-book-open" style="margin-right: 8px; color: #3b82f6; font-size: 16px;"></i>
                        Practical Examples
                    </h3>

                    <span style="color: #6b7280; font-size: 18px; font-weight: 300;">|</span>

                    <!-- Tactical Level Dropdown -->
                    <div class="echelon-dropdown" style="position: relative; display: inline-block;">
                        <button id="jpp-tactical-dropdown-btn" class="echelon-dropdown-btn" style="
                            background: none;
                            border: none;
                            color: #10b981;
                            font-size: 14px;
                            font-weight: 600;
                            cursor: pointer;
                            padding: 7px 14px;
                            display: flex;
                            align-items: center;
                            transition: color 0.3s ease;
                        " data-group="tactical">
                            Tactical Level
                            <i class="fas fa-chevron-down" style="margin-left: 6px; font-size: 12px;"></i>
                        </button>
                        <div id="jpp-tactical-dropdown-content" class="dropdown-content" style="
                            display: none;
                            position: absolute;
                            top: 100%;
                            left: 0;
                            background-color: #1f2937;
                            border: 1px solid #374151;
                            border-radius: 6px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                            z-index: 1000;
                            min-width: 200px;
                            padding: 8px;
                        ">
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                                margin-bottom: 4px;
                            " data-tab="platoon">
                                <i class="fas fa-users" style="margin-right: 8px; font-size: 12px;"></i>
                                Platoon
                            </button>
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                                margin-bottom: 4px;
                            " data-tab="company">
                                <i class="fas fa-user-friends" style="margin-right: 8px; font-size: 12px;"></i>
                                Company
                            </button>
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                                margin-bottom: 4px;
                            " data-tab="squadron">
                                <i class="fas fa-horse-head" style="margin-right: 8px; font-size: 12px;"></i>
                                Squadron
                            </button>
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                            " data-tab="battalion">
                                <i class="fas fa-flag" style="margin-right: 8px; font-size: 12px;"></i>
                                Battalion
                            </button>
                        </div>
                    </div>

                    <span style="color: #6b7280; font-size: 18px; font-weight: 300;">|</span>

                    <!-- Operational Level Dropdown -->
                    <div class="echelon-dropdown" style="position: relative; display: inline-block;">
                        <button id="jpp-operational-dropdown-btn" class="echelon-dropdown-btn" style="
                            background: none;
                            border: none;
                            color: #9ca3af;
                            font-size: 14px;
                            font-weight: 600;
                            cursor: pointer;
                            padding: 7px 14px;
                            display: flex;
                            align-items: center;
                            transition: color 0.3s ease;
                        " data-group="operational">
                            Operational Level
                            <i class="fas fa-chevron-down" style="margin-left: 6px; font-size: 12px;"></i>
                        </button>
                        <div id="jpp-operational-dropdown-content" class="dropdown-content" style="
                            display: none;
                            position: absolute;
                            top: 100%;
                            left: 0;
                            background-color: #1f2937;
                            border: 1px solid #374151;
                            border-radius: 6px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                            z-index: 1000;
                            min-width: 200px;
                            padding: 8px;
                        ">
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                                margin-bottom: 4px;
                            " data-tab="group">
                                <i class="fas fa-layer-group" style="margin-right: 8px; font-size: 12px;"></i>
                                Group
                            </button>
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                                margin-bottom: 4px;
                            " data-tab="regiment">
                                <i class="fas fa-medal" style="margin-right: 8px; font-size: 12px;"></i>
                                Regiment
                            </button>
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                            " data-tab="brigade">
                                <i class="fas fa-chess-rook" style="margin-right: 8px; font-size: 12px;"></i>
                                Brigade
                            </button>
                        </div>
                    </div>
                    <span style="color: #6b7280; font-size: 18px; font-weight: 300;">|</span>

                    <!-- Strategic Level Dropdown -->
                    <div class="echelon-dropdown" style="position: relative; display: inline-block;">
                        <button id="jpp-strategic-dropdown-btn" class="echelon-dropdown-btn" style="
                            background: none;
                            border: none;
                            color: #9ca3af;
                            font-size: 14px;
                            font-weight: 600;
                            cursor: pointer;
                            padding: 7px 14px;
                            display: flex;
                            align-items: center;
                            transition: color 0.3s ease;
                        " data-group="strategic">
                            Strategic Level
                            <i class="fas fa-chevron-down" style="margin-left: 6px; font-size: 12px;"></i>
                        </button>
                        <div id="jpp-strategic-dropdown-content" class="dropdown-content" style="
                            display: none;
                            position: absolute;
                            top: 100%;
                            left: 0;
                            background-color: #1f2937;
                            border: 1px solid #374151;
                            border-radius: 6px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                            z-index: 1000;
                            min-width: 200px;
                            padding: 8px;
                        ">
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                                margin-bottom: 4px;
                            " data-tab="division">
                                <i class="fas fa-chess-king" style="margin-right: 8px; font-size: 12px;"></i>
                                Division
                            </button>
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                                margin-bottom: 4px;
                            " data-tab="corps">
                                <i class="fas fa-crown" style="margin-right: 8px; font-size: 12px;"></i>
                                Corps
                            </button>
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                                margin-bottom: 4px;
                            " data-tab="army">
                                <i class="fas fa-star" style="margin-right: 8px; font-size: 12px;"></i>
                                Army
                            </button>
                            <button class="jpp-example-tab-btn dropdown-item" style="
                                display: block;
                                width: 100%;
                                padding: 8px 12px;
                                background: none;
                                border: none;
                                color: #d1d5db;
                                font-size: 14px;
                                text-align: left;
                                cursor: pointer;
                                border-radius: 4px;
                                transition: background-color 0.2s ease;
                            " data-tab="theater">
                                <i class="fas fa-globe" style="margin-right: 8px; font-size: 12px;"></i>
                                Theater
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Content Area for Dynamic Loading -->
                <div class="jpp-example-tab-content" style="
                    background-color: #1f2937;
                    border-radius: 8px;
                    border: 1px solid #374151;
                    padding: 24px;
                    margin-top: 16px;
                ">
                    <!-- Default placeholder content -->
                    <div style="text-align: center; padding: 40px; color: #6b7280;">
                        <i class="fas fa-book-open" style="font-size: 48px; margin-bottom: 16px; color: #3b82f6;"></i>
                        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #d1d5db;">JPP Step 1: Planning Initiation Examples</h3>
                        <p style="font-size: 14px; line-height: 1.5;">Select an echelon level from the dropdowns above to view detailed practical examples.</p>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-top: 16px;">
                            <p style="color: #93c5fd; font-size: 12px; margin: 0;">
                                <i class="fas fa-info-circle" style="margin-right: 6px;"></i>
                                Available: Platoon, Company, Squadron, Battalion, Group, Regiment, Brigade, Division, Corps, Army, Theater
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        `;
    },

    initialize: function() {
        console.log('🚀 Initializing JPP Planning Initiation Practical Examples...');

        // Initialize dropdown functionality
        this.initializeDropdowns();
        this.initializeTabButtons();
        this.injectDropdownCSS();

        console.log('✅ JPP Planning Initiation Practical Examples initialized');
        return true;
    },

    initializeDropdowns: function() {
        const dropdownButtons = ['jpp-tactical-dropdown-btn', 'jpp-operational-dropdown-btn', 'jpp-strategic-dropdown-btn'];

        dropdownButtons.forEach(buttonId => {
            const button = document.getElementById(buttonId);
            const contentId = buttonId.replace('-btn', '-content');
            const content = document.getElementById(contentId);
            const dropdown = button?.closest('.echelon-dropdown');

            if (button && content && dropdown) {
                // Click functionality
                button.addEventListener('click', (e) => {
                    e.stopPropagation();

                    // Close other dropdowns
                    dropdownButtons.forEach(otherId => {
                        if (otherId !== buttonId) {
                            const otherContent = document.getElementById(otherId.replace('-btn', '-content'));
                            if (otherContent) {
                                otherContent.style.display = 'none';
                            }
                        }
                    });

                    // Toggle current dropdown
                    content.style.display = content.style.display === 'none' ? 'block' : 'none';
                });

                // OPORD-style hover effects for dropdown containers
                dropdown.addEventListener('mouseenter', () => {
                    content.style.display = 'block';
                });

                dropdown.addEventListener('mouseleave', () => {
                    setTimeout(() => {
                        content.style.display = 'none';
                    }, 150);
                });
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            dropdownButtons.forEach(buttonId => {
                const content = document.getElementById(buttonId.replace('-btn', '-content'));
                if (content) {
                    content.style.display = 'none';
                }
            });
        });
    },

    initializeTabButtons: function() {
        const tabButtons = document.querySelectorAll('.jpp-example-tab-btn');

        tabButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();

                const tab = button.getAttribute('data-tab');
                this.loadTabContent(tab);

                // Close dropdown
                const dropdown = button.closest('.dropdown-content');
                if (dropdown) {
                    dropdown.style.display = 'none';
                }

                // Update button states
                this.updateDropdownButtonStates(button);
            });

            // Hover effects
            button.addEventListener('mouseenter', () => {
                button.style.backgroundColor = '#374151';
            });

            button.addEventListener('mouseleave', () => {
                button.style.backgroundColor = 'transparent';
            });
        });
    },

    updateDropdownButtonStates: function(selectedButton) {
        const tab = selectedButton.getAttribute('data-tab');
        const group = selectedButton.closest('.echelon-dropdown').querySelector('.echelon-dropdown-btn').getAttribute('data-group');

        // Update dropdown button color (keep original level text)
        const dropdownBtn = document.getElementById(`jpp-${group}-dropdown-btn`);
        if (dropdownBtn) {
            dropdownBtn.style.color = '#3b82f6';
            // Keep the original level text, don't change to specific echelon name
            const level = group === 'tactical' ? 'Tactical Level' :
                         group === 'operational' ? 'Operational Level' : 'Strategic Level';
            dropdownBtn.innerHTML = `${level} <i class="fas fa-chevron-down" style="margin-left: 6px; font-size: 12px;"></i>`;
        }

        // Reset other dropdown buttons
        const allDropdownBtns = ['jpp-tactical-dropdown-btn', 'jpp-operational-dropdown-btn', 'jpp-strategic-dropdown-btn'];
        allDropdownBtns.forEach(btnId => {
            if (btnId !== `jpp-${group}-dropdown-btn`) {
                const btn = document.getElementById(btnId);
                if (btn) {
                    btn.style.color = '#9ca3af';
                    const level = btnId.includes('tactical') ? 'Tactical Level' :
                                 btnId.includes('operational') ? 'Operational Level' : 'Strategic Level';
                    btn.innerHTML = `${level} <i class="fas fa-chevron-down" style="margin-left: 6px; font-size: 12px;"></i>`;
                }
            }
        });
    },

    loadTabContent: function(tab) {
        const contentArea = document.querySelector('.jpp-example-tab-content');
        if (!contentArea) return;

        // Show loading state
        contentArea.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #6b7280;">
                <i class="fas fa-spinner fa-spin" style="font-size: 32px; margin-bottom: 16px; color: #3b82f6;"></i>
                <div style="font-size: 16px;">Loading ${tab.charAt(0).toUpperCase() + tab.slice(1)} examples...</div>
            </div>
        `;

        // Load the appropriate echelon-specific module content
        setTimeout(() => {
            try {
                let moduleContent = '';

                // Map tab names to their corresponding module functions
                switch(tab.toLowerCase()) {
                    case 'platoon':
                        moduleContent = getPlatoonPlanningInitiationExample();
                        break;
                    case 'company':
                        moduleContent = getCompanyPlanningInitiationExample();
                        break;
                    case 'squadron':
                        moduleContent = getSquadronPlanningInitiationExample();
                        break;
                    case 'battalion':
                        moduleContent = getBattalionPlanningInitiationExample();
                        break;
                    case 'group':
                        moduleContent = getGroupPlanningInitiationExample();
                        break;
                    case 'regiment':
                        moduleContent = getRegimentPlanningInitiationExample();
                        break;
                    case 'brigade':
                        moduleContent = getBrigadePlanningInitiationExample();
                        break;
                    case 'division':
                        moduleContent = getDivisionPlanningInitiationExample();
                        break;
                    case 'corps':
                        moduleContent = getCorpsPlanningInitiationExample();
                        break;
                    case 'army':
                        moduleContent = getArmyPlanningInitiationExample();
                        break;
                    case 'theater':
                        moduleContent = getTheaterPlanningInitiationExample();
                        break;
                    default:
                        throw new Error(`Unknown echelon: ${tab}`);
                }

                // Display the module content
                contentArea.innerHTML = moduleContent;

                console.log(`✅ Loaded ${tab} practical examples module`);

            } catch (error) {
                console.error(`❌ Error loading ${tab} practical examples:`, error);

                // Show error state
                contentArea.innerHTML = `
                    <div style="text-align: center; padding: 40px; color: #6b7280;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 48px; margin-bottom: 16px; color: #ef4444;"></i>
                        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #d1d5db;">Error Loading Content</h3>
                        <p style="font-size: 14px; line-height: 1.5; margin-bottom: 16px;">Unable to load ${tab.charAt(0).toUpperCase() + tab.slice(1)} level examples.</p>
                        <div style="background-color: #374151; padding: 16px; border-radius: 6px; border-left: 3px solid #ef4444; margin-top: 16px;">
                            <p style="color: #fca5a5; font-size: 12px; margin: 0;">
                                Error: ${error.message}
                            </p>
                        </div>
                    </div>
                `;
            }
        }, 300);
    },

    injectDropdownCSS: function() {
        const style = document.getElementById('jpp-practical-dropdown-hover-styles') || document.createElement('style');
        style.id = 'jpp-practical-dropdown-hover-styles';
        style.textContent = `
            .echelon-dropdown-btn:hover { color:#10b981 !important; }
            .dropdown-item:hover { background-color:#374151 !important; }
            .echelon-dropdown-btn { transition: color .3s ease !important; }
            .dropdown-content { transition: opacity .2s ease !important; }
        `;
        const existing = document.getElementById('jpp-practical-dropdown-hover-styles');
        if (existing) existing.remove();
        document.head.appendChild(style);
    }
};

export default practicalExamplesModule;
