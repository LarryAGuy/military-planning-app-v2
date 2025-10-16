/**
 * OPORD Situation - Practical Examples Module
 * Contains all content and functionality for the "Practical Examples" collapsible section
 * Includes: Company, Platoon, Battalion, and Brigade level examples with tab navigation
 */

export const practicalExamplesModule = {
    id: 'practical-examples',
    title: 'Practical Examples',
    defaultExpanded: false,
    
    getContent: function() {
        return `
            <!-- Practical Examples Section -->
            <div id="practical-examples-section" class="dashboard-widgets mb-12">
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
                        <i class="fas fa-file-alt" style="margin-right: 8px; color: #facc15; font-size: 16px;"></i>
                        Practical Examples
                    </h3>

                    <span style="color: #6b7280; font-size: 18px; font-weight: 300;">|</span>

                    <!-- Tactical Level Dropdown -->
                    <div class="echelon-dropdown" style="position: relative; display: inline-block;">
                        <button id="tactical-dropdown-btn" class="echelon-dropdown-btn" style="
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
                        <div id="tactical-dropdown-content" class="dropdown-content" style="
                            display: none;
                            position: fixed;
                            background-color: #1f2937;
                            border: 1px solid #374151;
                            border-radius: 6px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                            z-index: 10000;
                            min-width: 200px;
                            padding: 8px;
                            max-height: 300px;
                            overflow-y: auto;
                        ">
                            <button class="example-tab-btn dropdown-item" style="
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
                            <button class="example-tab-btn dropdown-item" style="
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
                            <button class="example-tab-btn dropdown-item" style="
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
                            <button class="example-tab-btn dropdown-item" style="
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
                        <button id="operational-dropdown-btn" class="echelon-dropdown-btn" style="
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
                        <div id="operational-dropdown-content" class="dropdown-content" style="
                            display: none;
                            position: fixed;
                            background-color: #1f2937;
                            border: 1px solid #374151;
                            border-radius: 6px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                            z-index: 10000;
                            min-width: 200px;
                            padding: 8px;
                            max-height: 300px;
                            overflow-y: auto;
                        ">
                            <button class="example-tab-btn dropdown-item" style="
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
                            <button class="example-tab-btn dropdown-item" style="
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
                            <button class="example-tab-btn dropdown-item" style="
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
                        <button id="strategic-dropdown-btn" class="echelon-dropdown-btn" style="
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
                        <div id="strategic-dropdown-content" class="dropdown-content" style="
                            display: none;
                            position: fixed;
                            background-color: #1f2937;
                            border: 1px solid #374151;
                            border-radius: 6px;
                            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
                            z-index: 10000;
                            min-width: 200px;
                            padding: 8px;
                            max-height: 300px;
                            overflow-y: auto;
                        ">
                            <button class="example-tab-btn dropdown-item" style="
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
                            <button class="example-tab-btn dropdown-item" style="
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
                            <button class="example-tab-btn dropdown-item" style="
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
                            <button class="example-tab-btn dropdown-item" style="
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
                <div class="example-tab-content" style="
                    background-color: #1f2937;
                    border-radius: 8px;
                    border: 1px solid #374151;
                    padding: 24px;
                    margin-top: 16px;
                ">
                    <!-- Default placeholder content -->
                    <div style="text-align: center; padding: 40px; color: #6b7280;">
                        <i class="fas fa-file-alt" style="font-size: 48px; margin-bottom: 16px; color: #10b981;"></i>
                        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: #d1d5db;">Practical Examples</h3>
                        <p style="font-size: 14px; line-height: 1.5;">Select an echelon level from the dropdowns above to view detailed practical examples.</p>
                        <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-top: 16px;">
                            <p style="color: #6ee7b7; font-size: 12px; margin: 0;">
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
        console.log('DEBUG: Practical Examples module initialized');

        // Initialize echelon button functionality
        this.initializeEchelonButtons();

        return true;
    },

    initializeEchelonButtons: function() {
        console.log('🎯 Initializing Practical Examples dropdown echelon system...');

        // Initialize dropdown functionality
        this.initializeDropdowns();

        // Initialize individual echelon buttons
        this.initializeIndividualButtons();

        // Add CSS for dropdown hover effects
        this.injectDropdownCSS();

        // No default content loading - start with clean placeholder
        console.log('🏠 Starting with clean placeholder content (no auto-loading)');

        console.log('✅ Dropdown echelon system initialized successfully');
    },

    initializeDropdowns: function() {
        console.log('🔽 Setting up dropdown functionality...');

        const dropdowns = document.querySelectorAll('.echelon-dropdown');
        console.log(`🔍 Found ${dropdowns.length} dropdown containers`);

        dropdowns.forEach((dropdown, index) => {
            const button = dropdown.querySelector('.echelon-dropdown-btn');
            const groupName = button.getAttribute('data-group');
            const content = dropdown.querySelector('.dropdown-content');
            let hideTimeout;

            console.log(`🔗 Setting up dropdown ${index + 1}: ${groupName}`);

            // Hover to show dropdown
            dropdown.addEventListener('mouseenter', () => {
                console.log(`🖱️ Mouse entered dropdown: ${groupName}`);
                // Clear any pending hide timeout
                if (hideTimeout) {
                    clearTimeout(hideTimeout);
                    hideTimeout = null;
                }
                this.showDropdown(groupName);
            });

            // Mouse leave to hide dropdown (with delay)
            dropdown.addEventListener('mouseleave', (e) => {
                console.log(`🖱️ Mouse left dropdown: ${groupName}`);

                if (content) {
                    // Check if mouse is moving to the dropdown content
                    const rect = content.getBoundingClientRect();
                    const mouseX = e.clientX;
                    const mouseY = e.clientY;

                    // If mouse is within dropdown content bounds, don't hide
                    if (mouseX >= rect.left && mouseX <= rect.right &&
                        mouseY >= rect.top && mouseY <= rect.bottom) {
                        return;
                    }
                }

                hideTimeout = setTimeout(() => {
                    this.hideDropdown(groupName);
                }, 150); // Small delay to prevent flickering
            });

            // Add mouseenter/mouseleave to dropdown content itself
            if (content) {
                content.addEventListener('mouseenter', () => {
                    console.log(`🖱️ Mouse entered dropdown content: ${groupName}`);
                    // Clear any pending hide timeout
                    if (hideTimeout) {
                        clearTimeout(hideTimeout);
                        hideTimeout = null;
                    }
                });

                content.addEventListener('mouseleave', () => {
                    console.log(`🖱️ Mouse left dropdown content: ${groupName}`);
                    hideTimeout = setTimeout(() => {
                        this.hideDropdown(groupName);
                    }, 150);
                });
            }

            console.log(`✅ Dropdown listeners attached: ${groupName}`);
        });
    },

    initializeIndividualButtons: function() {
        console.log('🔘 Setting up individual echelon buttons...');

        const tabButtons = document.querySelectorAll('.example-tab-btn');
        console.log(`🔍 Found ${tabButtons.length} echelon buttons`);

        if (tabButtons.length === 0) {
            console.warn('⚠️ No echelon buttons found in Practical Examples');
            return;
        }

        // Add click event listeners to each button
        tabButtons.forEach((button, index) => {
            const echelon = button.getAttribute('data-tab');
            console.log(`🔗 Setting up button ${index + 1}: ${echelon}`);

            // Remove existing listeners and add new ones (cross-browser compatibility)
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);

            // Add hover effect for dropdown items
            if (newButton.classList.contains('dropdown-item')) {
                newButton.addEventListener('mouseenter', () => {
                    newButton.style.backgroundColor = '#374151';
                });

                newButton.addEventListener('mouseleave', () => {
                    newButton.style.backgroundColor = 'transparent';
                });
            }

            newButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                console.log(`🖱️ Echelon button clicked: ${echelon}`);

                // Hide all dropdowns after selection
                this.hideAllDropdowns();

                // Update dropdown button states
                this.updateDropdownButtonStates(echelon);

                // Switch content
                this.switchEchelonContent(echelon);
            });

            console.log(`✅ Event listener attached to: ${echelon} button`);
        });
    },

    showDropdown: function(groupName) {
        console.log(`📂 Showing dropdown: ${groupName}`);

        const dropdown = document.getElementById(`${groupName}-dropdown-content`);
        const button = document.querySelector(`[data-group="${groupName}"]`);

        if (dropdown && button) {
            // Calculate position relative to viewport for fixed positioning
            const rect = button.getBoundingClientRect();
            dropdown.style.top = `${rect.bottom + 2}px`;
            dropdown.style.left = `${rect.left}px`;
            dropdown.style.display = 'block';
        }
    },

    hideDropdown: function(groupName) {
        console.log(`📁 Hiding dropdown: ${groupName}`);

        const dropdown = document.getElementById(`${groupName}-dropdown-content`);
        if (dropdown) {
            dropdown.style.display = 'none';
        }
    },

    hideAllDropdowns: function() {
        console.log('📁 Hiding all dropdowns');

        const groups = ['tactical', 'operational', 'strategic'];
        groups.forEach(group => {
            this.hideDropdown(group);
        });
    },

    updateDropdownButtonStates: function(activeEchelon) {
        console.log(`🎨 Updating dropdown button states, active: ${activeEchelon}`);

        // Determine which group the active echelon belongs to
        const echelonGroups = {
            'platoon': 'tactical',
            'company': 'tactical',
            'squadron': 'tactical',
            'battalion': 'tactical',
            'regiment': 'operational',
            'group': 'operational',
            'brigade': 'operational',
            'division': 'strategic',
            'corps': 'strategic',
            'army': 'strategic',
            'theater': 'strategic'
        };

        const activeGroup = echelonGroups[activeEchelon];

        // Update dropdown button colors
        const groups = ['tactical', 'operational', 'strategic'];
        groups.forEach(group => {
            const button = document.getElementById(`${group}-dropdown-btn`);
            if (button) {
                if (group === activeGroup) {
                    // Active group - green theme
                    button.style.color = '#10b981';
                } else {
                    // Inactive group - gray theme
                    button.style.color = '#9ca3af';
                }
            }
        });
    },

    injectDropdownCSS: function() {
        console.log('💉 Injecting dropdown CSS...');

        const styleElement = document.createElement('style');
        styleElement.id = 'dropdown-hover-styles';
        styleElement.textContent = `
            /* Dropdown hover effects */
            .echelon-dropdown-btn:hover {
                color: #10b981 !important;
            }

            .dropdown-item:hover {
                background-color: #374151 !important;
            }

            /* Smooth transitions */
            .echelon-dropdown-btn {
                transition: color 0.3s ease !important;
            }

            .dropdown-content {
                transition: opacity 0.2s ease !important;
            }
        `;

        // Remove existing styles if present
        const existingStyles = document.getElementById('dropdown-hover-styles');
        if (existingStyles) {
            existingStyles.remove();
        }

        document.head.appendChild(styleElement);
        console.log('✅ Dropdown CSS injected successfully');
    },

    updateEchelonButtonStates: function(activeEchelon) {
        console.log(`🎨 Updating echelon button states, active: ${activeEchelon}`);

        // Note: In dropdown layout, individual buttons don't need visual state changes
        // since they're only visible during hover. The dropdown button states are
        // managed by updateDropdownButtonStates() method.

        console.log(`✅ Button state management delegated to dropdown buttons for: ${activeEchelon}`);
    },

    switchEchelonContent: async function(echelon) {
        console.log(`📄 Switching to echelon content: ${echelon}`);

        // Find content area
        const contentArea = document.querySelector('.example-tab-content');
        if (!contentArea) {
            console.error('❌ Content area not found');
            return;
        }

        // Show loading indicator
        contentArea.innerHTML = `
            <div style="padding: 40px; text-align: center; background-color: #1f2937; border-radius: 8px; border: 1px solid #374151;">
                <div style="color: #10b981; font-size: 16px; margin-bottom: 12px;">
                    <i class="fas fa-spinner fa-spin" style="margin-right: 8px;"></i>
                    Loading ${echelon.charAt(0).toUpperCase() + echelon.slice(1)} Level Content...
                </div>
                <p style="color: #6ee7b7; font-size: 12px;">UNCLASSIFIED</p>
            </div>
        `;

        try {
            // Dynamic import based on echelon
            const moduleContent = await this.loadEchelonModule(echelon);

            if (moduleContent) {
                contentArea.innerHTML = moduleContent;
                console.log(`✅ Content loaded successfully for: ${echelon}`);
            } else {
                throw new Error(`No content available for ${echelon}`);
            }

        } catch (error) {
            console.error(`❌ Failed to load ${echelon} content:`, error);

            // Show error with fallback content
            contentArea.innerHTML = `
                <div style="padding: 20px; background-color: #1f2937; border-radius: 8px; border: 1px solid #374151;">
                    <h4 style="color: #f87171; font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                        <i class="fas fa-exclamation-triangle" style="margin-right: 8px;"></i>
                        Content Loading Error
                    </h4>
                    <p style="color: #d1d5db; font-size: 14px; line-height: 1.5; margin-bottom: 16px;">
                        UNCLASSIFIED - Unable to load ${echelon.toUpperCase()} level content.
                        This echelon may not have dedicated content yet.
                    </p>
                    <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #f87171;">
                        <p style="color: #fca5a5; font-size: 12px; margin: 0;">
                            <i class="fas fa-info-circle" style="margin-right: 6px;"></i>
                            Available echelons: Platoon, Company, Battalion. Additional echelons coming soon.
                        </p>
                    </div>
                </div>
            `;
        }
    },

    loadEchelonModule: async function(echelon) {
        console.log(`📦 Loading module for echelon: ${echelon}`);

        try {
            let module;

            switch (echelon.toLowerCase()) {
                case 'platoon':
                    module = await import('./situation-practical-platoon.js');
                    return module.platoonPracticalModule.getContent();

                case 'company':
                    module = await import('./situation-practical-company.js');
                    return module.companyPracticalModule.getContent();

                case 'squadron':
                    module = await import('./situation-practical-squadron.js');
                    return module.squadronPracticalModule.getContent();

                case 'battalion':
                    module = await import('./situation-practical-battalion.js');
                    return module.battalionPracticalModule.getContent();

                case 'division':
                    module = await import('./situation-practical-division.js');
                    return module.divisionPracticalModule.getContent();

                case 'corps':
                    module = await import('./situation-practical-corps.js');
                    return module.corpsPracticalModule.getContent();

                case 'army':
                    module = await import('./situation-practical-army.js');
                    return module.armyPracticalModule.getContent();

                case 'theater':
                    module = await import('./situation-practical-theater.js');
                    return module.theaterPracticalModule.getContent();

                case 'regiment':
                    module = await import('./situation-practical-regiment.js');
                    return module.regimentPracticalModule.getContent();

                case 'group':
                    module = await import('./situation-practical-group.js');
                    return module.groupPracticalModule.getContent();

                case 'brigade':
                    module = await import('./situation-practical-brigade.js');
                    return module.brigadePracticalModule.getContent();

                default:
                    console.error(`❌ Unknown echelon: ${echelon}`);
                    return null;
            }

        } catch (error) {
            console.error(`❌ Module import failed for ${echelon}:`, error);
            return null;
        }
    },

    getPlaceholderContent: function(echelon) {
        return `
            <div style="padding: 20px; background-color: #1f2937; border-radius: 8px; border: 1px solid #374151;">
                <h4 style="color: #10b981; font-size: 16px; font-weight: 600; margin-bottom: 12px;">
                    <i class="fas fa-layer-group" style="margin-right: 8px;"></i>
                    ${echelon.charAt(0).toUpperCase() + echelon.slice(1)} Level Example
                </h4>
                <p style="color: #d1d5db; font-size: 14px; line-height: 1.5; margin-bottom: 16px;">
                    UNCLASSIFIED - ${echelon.toUpperCase()} level practical example content is under development.
                    This echelon will feature comprehensive situation analysis examples following FM 5-0 standards.
                </p>
                <div style="background-color: #065f46; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981; margin-bottom: 16px;">
                    <h5 style="color: #6ee7b7; font-size: 12px; font-weight: 600; margin: 0 0 8px 0;">Coming Soon</h5>
                    <ul style="color: #6ee7b7; font-size: 12px; line-height: 1.5; margin: 0; padding-left: 16px;">
                        <li>Realistic ${echelon}-level unit designations</li>
                        <li>Appropriate scale area of operations</li>
                        <li>Enemy force composition and capabilities</li>
                        <li>Mission analysis and planning considerations</li>
                    </ul>
                </div>
                <div style="background-color: #374151; padding: 12px; border-radius: 6px; border-left: 3px solid #10b981;">
                    <p style="color: #6ee7b7; font-size: 12px; margin: 0;">
                        <i class="fas fa-info-circle" style="margin-right: 6px;"></i>
                        Hierarchical button system confirmed - ${echelon} content module ready for implementation
                    </p>
                </div>
            </div>
        `;
    }
};
