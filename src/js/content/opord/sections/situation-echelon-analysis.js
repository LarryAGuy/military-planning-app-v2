/**
 * OPORD Situation - Echelon Analysis Module
 * Contains all content and functionality for the "Echelon Analysis" collapsible section
 * Includes: Header row dropdown navigation system with three levels (Tactical/Operational/Strategic)
 * Replicates exact structure from Practical Examples section
 *
 * CHROME CACHE FIX: Version 2.3.0 - Timestamp: 2025-01-11-14:15:00
 * Enhanced Chrome compatibility with robust DOM detection and debugging
 * Cache-busting enabled for dynamic imports
 */

export const echelonAnalysisModule = {
    id: 'echelon-analysis',
    title: 'Echelon Analysis',
    defaultExpanded: false,

    getContent: function() {
        return `
            <!-- Echelon Analysis Section -->
            <div id="echelon-analysis-section" class="dashboard-widgets mb-12">
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
                        <i class="fas fa-layer-group" style="margin-right: 8px; color: #a855f7; font-size: 16px;"></i>
                        Echelon Analysis
                    </h3>

                    <span style="color: #6b7280; font-size: 18px; font-weight: 300;">|</span>

                    <!-- Tactical Level Dropdown -->
                    <div class="echelon-dropdown" style="position: relative; display: inline-block;">
                        <button id="analysis-tactical-dropdown-btn" class="echelon-dropdown-btn" style="
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
                        <div id="analysis-tactical-dropdown-content" class="dropdown-content" style="
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
                            <button class="analysis-tab-btn dropdown-item" style="
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
                            <button class="analysis-tab-btn dropdown-item" style="
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
                            <button class="analysis-tab-btn dropdown-item" style="
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
                            <button class="analysis-tab-btn dropdown-item" style="
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
                        <button id="analysis-operational-dropdown-btn" class="echelon-dropdown-btn" style="
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
                        <div id="analysis-operational-dropdown-content" class="dropdown-content" style="
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
                            <button class="analysis-tab-btn dropdown-item" style="
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
                            <button class="analysis-tab-btn dropdown-item" style="
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
                                <i class="fas fa-star" style="margin-right: 8px; font-size: 12px;"></i>
                                Group
                            </button>
                            <button class="analysis-tab-btn dropdown-item" style="
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
                        <button id="analysis-strategic-dropdown-btn" class="echelon-dropdown-btn" style="
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
                        <div id="analysis-strategic-dropdown-content" class="dropdown-content" style="
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
                            <button class="analysis-tab-btn dropdown-item" style="
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
                            <button class="analysis-tab-btn dropdown-item" style="
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
                            <button class="analysis-tab-btn dropdown-item" style="
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
                                <i class="fas fa-globe-americas" style="margin-right: 8px; font-size: 12px;"></i>
                                Army
                            </button>
                            <button class="analysis-tab-btn dropdown-item" style="
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
                                <i class="fas fa-satellite" style="margin-right: 8px; font-size: 12px;"></i>
                                Theater
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Content Area for Dynamic Loading -->
                <div class="analysis-tab-content" style="
                    background-color: #1f2937;
                    border-radius: 8px;
                    border: 1px solid #374151;
                    padding: 24px;
                    margin-top: 16px;
                ">
                    <!-- Default placeholder content -->
                    <div style="text-align: center; padding: 40px; color: #6b7280;">
                        <i class="fas fa-layer-group" style="font-size: 48px; margin-bottom: 16px; color: #a855f7;"></i>
                        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #d1d5db;">Echelon Analysis</h3>
                        <p style="font-size: 14px; line-height: 1.5;">Select an echelon level from the dropdowns above to view detailed analysis content.</p>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #a855f7; margin-top: 16px;">
                            <p style="color: #c084fc; font-size: 12px; margin: 0;">
                                <i class="fas fa-info-circle" style="margin-right: 6px;"></i>
                                Available: Platoon, Company, Squadron, Battalion, Regiment, Group, Brigade, Division, Corps, Army, Theater
                            </p>
                        </div>
                    </div>
                </div>
            </div>














        `;
    },

    initialize: function() {
        console.log('DEBUG: Echelon Analysis module initialized');

        // Initialize dropdown functionality (like Practical Examples system)
        this.initializeAnalysisDropdowns();

        return true;
    },

    initializeAnalysisDropdowns: function() {
        console.log('Initializing Echelon Analysis dropdown system...');

        let attempts = 0;
        const maxAttempts = 50; // 5 seconds maximum wait time

        // Enhanced Chrome-compatible DOM waiting with detailed debugging
        const waitForElements = () => {
            attempts++;
            console.log(`🔍 Checking for DOM elements (attempt ${attempts}/${maxAttempts})...`);

            const section = document.getElementById('echelon-analysis-section');
            const dropdowns = document.querySelectorAll('#echelon-analysis-section .echelon-dropdown');

            console.log('📊 DOM Check Results:');
            console.log('  - Section found:', !!section);
            console.log('  - Dropdowns found:', dropdowns.length);

            if (section) {
                console.log('  - Section ID confirmed:', section.id);
                console.log('  - Section children:', section.children.length);

                // Debug: Log the actual HTML content
                console.log('  - Section HTML preview:', section.innerHTML.substring(0, 200) + '...');
            }

            if (section && dropdowns.length > 0) {
                console.log('✅ Echelon analysis elements found, setting up dropdowns...');
                try {
                    this.setupDropdownHovers();
                    this.setupEchelonClicks();
                    this.injectDropdownCSS();
                    console.log('✅ Echelon Analysis dropdowns initialized successfully');
                } catch (error) {
                    console.error('❌ Error during dropdown setup:', error);
                }
            } else if (attempts >= maxAttempts) {
                console.error('❌ Failed to find DOM elements after maximum attempts');
                console.error('   This may indicate a Chrome caching or rendering issue');
                console.error('   Try hard refresh (Ctrl+Shift+R) or clear browser cache');

                // Attempt to inject basic functionality anyway
                this.injectDropdownCSS();
            } else {
                console.log('⏳ Waiting for echelon analysis elements...');
                console.log(`   Retrying in 100ms (attempt ${attempts + 1}/${maxAttempts})...`);
                setTimeout(waitForElements, 100);
            }
        };

        // Start waiting for elements with longer initial delay for Chrome
        console.log('🚀 Starting DOM element detection (Chrome-optimized timing)...');
        setTimeout(waitForElements, 150);
    },

    setupDropdownHovers: function() {
        console.log('Setting up analysis dropdown hover interactions...');

        const dropdowns = document.querySelectorAll('#echelon-analysis-section .echelon-dropdown');
        console.log('Found ' + dropdowns.length + ' dropdown elements');

        if (dropdowns.length === 0) {
            console.error('No dropdown elements found! Check DOM structure.');
            return;
        }

        dropdowns.forEach((dropdown, index) => {
            const button = dropdown.querySelector('.echelon-dropdown-btn');
            const content = dropdown.querySelector('.dropdown-content');

            if (!button || !content) {
                console.error('Missing button or content in dropdown ' + index);
                return;
            }

            const groupName = button.getAttribute('data-group');
            console.log('Setting up hover for ' + groupName + ' dropdown');

            // Mouse enter - show dropdown
            dropdown.addEventListener('mouseenter', () => {
                console.log('Showing ' + groupName + ' dropdown');
                this.showAnalysisDropdown(groupName);
            });

            // Mouse leave - hide dropdown with delay
            dropdown.addEventListener('mouseleave', () => {
                console.log('Hiding ' + groupName + ' dropdown');
                setTimeout(() => this.hideAnalysisDropdown(groupName), 150);
            });
        });

        console.log('Hover interactions set up for ' + dropdowns.length + ' dropdowns');
    },

    setupEchelonClicks: function() {
        console.log('Setting up analysis echelon button clicks...');

        // Use event delegation for dynamically loaded buttons
        document.addEventListener('click', (e) => {
            if (e.target.closest('.analysis-tab-btn')) {
                const button = e.target.closest('.analysis-tab-btn');
                const echelon = button.getAttribute('data-tab');

                if (echelon) {
                    console.log('Analysis echelon button clicked: ' + echelon);
                    this.switchAnalysisEchelonContent(echelon);
                    this.hideAllAnalysisDropdowns();
                    this.updateAnalysisDropdownButtonStates(echelon);
                }
            }
        });
    },

    showAnalysisDropdown: function(groupName) {
        const dropdownId = 'analysis-' + groupName + '-dropdown-content';
        const dropdown = document.getElementById(dropdownId);
        if (dropdown) {
            dropdown.style.display = 'block';
            dropdown.style.opacity = '1';
            console.log('Successfully showed ' + groupName + ' dropdown');
        } else {
            console.error('Could not find dropdown element with ID: ' + dropdownId);
        }
    },

    hideAnalysisDropdown: function(groupName) {
        const dropdownId = 'analysis-' + groupName + '-dropdown-content';
        const dropdown = document.getElementById(dropdownId);
        if (dropdown) {
            dropdown.style.display = 'none';
            dropdown.style.opacity = '0';
            console.log('Successfully hid ' + groupName + ' dropdown');
        } else {
            console.error('Could not find dropdown element with ID: ' + dropdownId);
        }
    },

    hideAllAnalysisDropdowns: function() {
        console.log('Hiding all analysis dropdowns');
        const groups = ['tactical', 'operational', 'strategic'];
        groups.forEach(group => {
            this.hideAnalysisDropdown(group);
        });
    },

    updateAnalysisDropdownButtonStates: function(activeEchelon) {
        console.log('Updating analysis dropdown button states, active: ' + activeEchelon);
        // Implementation for button state updates
    },

    injectDropdownCSS: function() {
        console.log('Injecting analysis dropdown CSS...');

        const styleElement = document.createElement('style');
        styleElement.id = 'analysis-dropdown-hover-styles';
        styleElement.textContent =
            '/* Analysis dropdown hover effects */' +
            '.echelon-dropdown-btn:hover { color: #a855f7 !important; }' +
            '.dropdown-item:hover { background-color: #374151 !important; }' +
            '/* Smooth transitions */' +
            '.echelon-dropdown-btn { transition: color 0.3s ease !important; }' +
            '.dropdown-content { transition: opacity 0.2s ease !important; }';

        // Remove existing styles if present
        const existingStyles = document.getElementById('analysis-dropdown-hover-styles');
        if (existingStyles) {
            existingStyles.remove();
        }

        document.head.appendChild(styleElement);
        console.log('Analysis dropdown CSS injected successfully');
    },

    async switchAnalysisEchelonContent(echelon) {
        console.log('Switching to analysis echelon content: ' + echelon);

        // Find content area
        const contentArea = document.querySelector('#echelon-analysis-section .analysis-tab-content');
        if (!contentArea) {
            console.error('Analysis content area not found');
            return;
        }

        // Show loading indicator
        const loadingHTML = '<div style="padding: 40px; text-align: center; background-color: #1f2937; border-radius: 8px; border: 1px solid #374151;">' +
            '<div style="color: #a855f7; font-size: 16px; margin-bottom: 12px;">' +
            '<i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>' +
            'Loading ' + echelon.charAt(0).toUpperCase() + echelon.slice(1) + ' Level Analysis...' +
            '</div>' +
            '<p style="color: #c084fc; font-size: 12px;">UNCLASSIFIED</p>' +
            '</div>';

        contentArea.innerHTML = loadingHTML;

        try {
            // Dynamic import based on echelon
            const moduleContent = await this.loadAnalysisEchelonModule(echelon);

            if (moduleContent) {
                contentArea.innerHTML = moduleContent;
                console.log('Analysis content loaded successfully for: ' + echelon);
            } else {
                throw new Error('No analysis content available for ' + echelon);
            }

        } catch (error) {
            console.error('Failed to load ' + echelon + ' analysis content:', error);

            // Show error with fallback content
            const errorHTML = '<div style="padding: 20px; background-color: #1f2937; border-radius: 8px; border: 1px solid #374151;">' +
                '<h4 style="color: #f87171; font-size: 16px; font-weight: 600; margin-bottom: 12px;">' +
                '<i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>' +
                'Analysis Content Loading Error' +
                '</h4>' +
                '<p style="color: #d1d5db; font-size: 14px; line-height: 1.5; margin-bottom: 16px;">' +
                'UNCLASSIFIED - Unable to load ' + echelon.toUpperCase() + ' level analysis content. ' +
                'This echelon analysis module may not be implemented yet.' +
                '</p>' +
                '<div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f87171;">' +
                '<p style="color: #fca5a5; font-size: 12px; margin: 0;">' +
                '<i class="fas fa-info-circle" style="margin-right: 6px;"></i>' +
                'Analysis modules coming soon for all echelon levels.' +
                '</p>' +
                '</div>' +
                '</div>';

            contentArea.innerHTML = errorHTML;
        }
    },

    async loadAnalysisEchelonModule(echelon) {
        console.log('Loading analysis module for echelon: ' + echelon);

        try {
            let module;

            // Add cache-busting parameter for Chrome compatibility
            const cacheBuster = '?v=' + Date.now();

            switch (echelon.toLowerCase()) {
                case 'platoon':
                    module = await import('./situation-analysis-platoon.js' + cacheBuster);
                    return module.platoonAnalysisModule.getContent();

                case 'company':
                    module = await import('./situation-analysis-company.js' + cacheBuster);
                    return module.companyAnalysisModule.getContent();

                case 'squadron':
                    module = await import('./situation-analysis-squadron.js' + cacheBuster);
                    return module.squadronAnalysisModule.getContent();

                case 'battalion':
                    module = await import('./situation-analysis-battalion.js' + cacheBuster);
                    return module.battalionAnalysisModule.getContent();

                case 'regiment':
                    module = await import('./situation-analysis-regiment.js' + cacheBuster);
                    return module.regimentAnalysisModule.getContent();

                case 'group':
                    module = await import('./situation-analysis-group.js' + cacheBuster);
                    return module.groupAnalysisModule.getContent();

                case 'brigade':
                    module = await import('./situation-analysis-brigade.js' + cacheBuster);
                    return module.brigadeAnalysisModule.getContent();

                case 'division':
                    module = await import('./situation-analysis-division.js' + cacheBuster);
                    return module.divisionAnalysisModule.getContent();

                case 'corps':
                    module = await import('./situation-analysis-corps.js' + cacheBuster);
                    return module.corpsAnalysisModule.getContent();

                case 'army':
                    module = await import('./situation-analysis-army.js' + cacheBuster);
                    return module.armyAnalysisModule.getContent();

                case 'theater':
                    module = await import('./situation-analysis-theater.js' + cacheBuster);
                    return module.theaterAnalysisModule.getContent();

                default:
                    console.error('Unknown analysis echelon: ' + echelon);
                    return null;
            }

        } catch (error) {
            console.error('Error loading analysis module for ' + echelon + ':', error);
            throw error;
        }
    }
};
