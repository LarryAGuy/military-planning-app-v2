/**
 * Universal OPORD Examples Button System
 * Specialized system for echelon-based OPORD examples navigation
 * - Only implements three-tier echelon navigation (no section buttons)
 * - Scoped CSS to avoid conflicts with sidebar navigation
 * - Targets #universal-examples-nav container
 * - Follows Universal Button System architecture patterns
 */

export class UniversalExamplesButtons {
    constructor() {
        this.initialized = false;
        this.currentEchelon = null;
        this.browserInfo = this.detectBrowser();
        
        // Echelon configuration with military color coding
        this.echelonGroups = {
            tactical: {
                color: '#16a34a',
                label: 'Tactical Level',
                echelons: [
                    { tab: 'platoon', icon: 'fas fa-users', label: 'Platoon' },
                    { tab: 'company', icon: 'fas fa-user-friends', label: 'Company' },
                    { tab: 'squadron', icon: 'fas fa-horse-head', label: 'Squadron' },
                    { tab: 'battalion', icon: 'fas fa-flag', label: 'Battalion' }
                ]
            },
            operational: {
                color: '#3b82f6',
                label: 'Operational Level',
                echelons: [
                    { tab: 'brigade', icon: 'fas fa-chess-rook', label: 'Brigade' },
                    { tab: 'regiment', icon: 'fas fa-medal', label: 'Regiment' },
                    { tab: 'group', icon: 'fas fa-layer-group', label: 'Group' }
                ]
            },
            strategic: {
                color: '#8b5cf6',
                label: 'Strategic Level',
                echelons: [
                    { tab: 'division', icon: 'fas fa-chess-king', label: 'Division' },
                    { tab: 'corps', icon: 'fas fa-crown', label: 'Corps' },
                    { tab: 'army', icon: 'fas fa-star', label: 'Army' },
                    { tab: 'theater', icon: 'fas fa-globe', label: 'Theater' }
                ]
            }
        };
    }

    detectBrowser() {
        const ua = navigator.userAgent;
        if (ua.includes('Firefox')) return 'Firefox';
        if (ua.includes('Chrome') && !ua.includes('Edge')) return 'Chrome';
        if (ua.includes('Edge')) return 'Edge';
        if (ua.includes('Safari') && !ua.includes('Chrome')) return 'Safari';
        return 'Unknown';
    }

    async initialize() {
        if (this.initialized) {
            console.log('🔄 UniversalExamplesButtons already initialized');
            return;
        }

        console.log(`🚀 Initializing UniversalExamplesButtons for ${this.browserInfo}...`);
        
        try {
            // Step 1: Verify container exists
            await this.verifyContainer();
            
            // Step 2: Inject scoped CSS
            this.injectScopedCSS();
            
            // Step 3: Create echelon navigation HTML
            await this.createEchelonNavigation();
            
            // Step 4: Setup event listeners
            await this.setupEventListeners();

            // Step 5: Show default placeholder content
            await this.showDefaultPlaceholder();

            this.initialized = true;
            console.log(`✅ UniversalExamplesButtons initialized successfully for ${this.browserInfo}`);
            
        } catch (error) {
            console.error('❌ UniversalExamplesButtons initialization failed:', error);
            throw error;
        }
    }

    async verifyContainer() {
        const container = document.getElementById('universal-examples-nav');
        if (!container) {
            throw new Error('Navigation container not found: #universal-examples-nav');
        }
        console.log('✅ Examples navigation container found');
    }

    injectScopedCSS() {
        // Prevent duplicate CSS injection
        if (document.getElementById('universal-examples-styles')) {
            console.log('🎨 Examples CSS already injected');
            return;
        }

        console.log(`🎨 Injecting scoped CSS for ${this.browserInfo}...`);

        const styleElement = document.createElement('style');
        styleElement.id = 'universal-examples-styles';
        styleElement.textContent = `
            /* Scoped OPORD Examples Navigation Styles - High Specificity */
            div#universal-examples-nav .examples-echelon-dropdown {
                position: relative !important;
                display: inline-block !important;
            }

            div#universal-examples-nav .examples-dropdown-btn {
                background: none !important;
                border: none !important;
                color: #9ca3af !important;
                font-size: 14px !important;
                font-weight: 600 !important;
                cursor: pointer !important;
                padding: 7px 14px !important;
                display: flex !important;
                align-items: center !important;
                transition: color 0.3s ease !important;
            }

            div#universal-examples-nav .examples-dropdown-btn:hover {
                color: #10b981 !important;
            }

            div#universal-examples-nav .examples-dropdown-content {
                display: none !important;
                position: fixed !important;
                background-color: #1f2937 !important;
                border: 1px solid #374151 !important;
                border-radius: 6px !important;
                box-shadow: 0 8px 16px rgba(0,0,0,.4) !important;
                z-index: 10000 !important;
                min-width: 220px !important;
                padding: 8px !important;
                /* Override any conflicting transitions */
                transition: none !important;
                max-height: none !important;
                opacity: 1 !important;
                margin-top: 0 !important;
                /* Ensure dropdown doesn't cause overflow */
                max-height: 300px !important;
                overflow-y: auto !important;
            }

            /* Force show dropdown on hover via CSS as primary method */
            div#universal-examples-nav .examples-echelon-dropdown:hover .examples-dropdown-content {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            /* Ensure dropdown content appears above workspace overflow */
            .examples-dropdown-content.positioned {
                position: fixed !important;
                z-index: 10000 !important;
            }

            div#universal-examples-nav .examples-dropdown-item {
                display: block !important;
                width: 100% !important;
                padding: 8px 12px !important;
                background: none !important;
                border: none !important;
                color: #d1d5db !important;
                font-size: 14px !important;
                text-align: left !important;
                cursor: pointer !important;
                border-radius: 4px !important;
                transition: background-color 0.2s ease !important;
                margin-bottom: 4px !important;
            }

            div#universal-examples-nav .examples-dropdown-item:hover {
                background-color: #374151 !important;
            }
            
            /* Browser-specific fixes and fallbacks */
            @supports (-moz-appearance: none) {
                div#universal-examples-nav .examples-dropdown-btn {
                    -moz-user-select: none !important;
                }
                /* Firefox specific hover fix */
                div#universal-examples-nav .examples-echelon-dropdown:hover .examples-dropdown-content {
                    display: block !important;
                    visibility: visible !important;
                }
            }

            /* Webkit/Chrome specific fixes */
            @supports (-webkit-appearance: none) {
                div#universal-examples-nav .examples-dropdown-content {
                    -webkit-transform: translateZ(0) !important;
                }
            }

            /* Edge specific fixes */
            @supports (-ms-ime-align: auto) {
                div#universal-examples-nav .examples-dropdown-content {
                    -ms-filter: "alpha(opacity=100)" !important;
                }
            }
        `;

        document.head.appendChild(styleElement);
        console.log('✅ Scoped CSS injected successfully');
    }

    async createEchelonNavigation() {
        const container = document.getElementById('universal-examples-nav');
        
        const dropdownHTML = (groupKey, groupData) => `
            <div class="examples-echelon-dropdown">
                <button class="examples-dropdown-btn" data-group="${groupKey}" style="color: ${groupData.color};">
                    ${groupData.label}
                    <i class="fas fa-chevron-down" style="margin-left: 6px; font-size: 12px;"></i>
                </button>
                <div class="examples-dropdown-content">
                    ${groupData.echelons.map(echelon => `
                        <button class="examples-dropdown-item" data-group="${groupKey}" data-tab="${echelon.tab}">
                            <i class="${echelon.icon}" style="margin-right: 8px; font-size: 12px;"></i>
                            ${echelon.label}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        const navigationHTML = `
            <div style="display: flex; align-items: center; gap: 12px; position: relative;">
                ${Object.entries(this.echelonGroups).map(([key, data]) => dropdownHTML(key, data)).join('')}
            </div>
        `;

        container.innerHTML = navigationHTML;
        console.log('✅ Echelon navigation HTML created');

        // Debug: Verify HTML structure
        const createdDropdowns = container.querySelectorAll('.examples-echelon-dropdown');
        const createdContents = container.querySelectorAll('.examples-dropdown-content');
        console.log(`🔍 Created ${createdDropdowns.length} dropdown containers`);
        console.log(`🔍 Created ${createdContents.length} dropdown content areas`);

        // Debug: Log first dropdown structure
        if (createdDropdowns.length > 0) {
            const firstDropdown = createdDropdowns[0];
            const firstContent = firstDropdown.querySelector('.examples-dropdown-content');
            console.log('🔍 First dropdown structure:', {
                hasContent: !!firstContent,
                contentDisplay: firstContent ? firstContent.style.display : 'N/A',
                contentClass: firstContent ? firstContent.className : 'N/A'
            });
        }
    }

    async setupEventListeners() {
        console.log(`🎧 Setting up event listeners for ${this.browserInfo}...`);
        
        const container = document.getElementById('universal-examples-nav');
        
        // Setup hover behavior for dropdowns
        const dropdowns = container.querySelectorAll('.examples-echelon-dropdown');
        console.log(`🔍 Found ${dropdowns.length} dropdown containers`);

        dropdowns.forEach((dropdown, index) => {
            console.log(`🔍 Setting up hover for dropdown ${index + 1}`);

            // Store timeout on the dropdown element itself to ensure proper scoping
            dropdown._hideTimeout = null;

            const showDropdown = () => {
                const content = dropdown.querySelector('.examples-dropdown-content');
                console.log(`🖱️ Mouse enter dropdown ${index + 1}, content found:`, !!content);

                // Clear any pending hide timeout
                if (dropdown._hideTimeout) {
                    clearTimeout(dropdown._hideTimeout);
                    dropdown._hideTimeout = null;
                }

                if (content) {
                    // Calculate position relative to viewport for fixed positioning
                    const button = dropdown.querySelector('.examples-dropdown-btn');
                    const rect = button.getBoundingClientRect();

                    // Position dropdown below the button
                    content.style.top = `${rect.bottom + 2}px`;
                    content.style.left = `${rect.left}px`;
                    content.style.display = 'block';
                    console.log(`✅ Dropdown ${index + 1} content shown at position: ${rect.left}, ${rect.bottom + 2}`);
                }
            };

            const hideDropdown = () => {
                const content = dropdown.querySelector('.examples-dropdown-content');
                dropdown._hideTimeout = setTimeout(() => {
                    if (content) {
                        content.style.display = 'none';
                        console.log(`✅ Dropdown ${index + 1} content hidden`);
                    }
                    dropdown._hideTimeout = null;
                }, 200); // Slightly longer delay for better UX
            };

            // Button hover events
            dropdown.addEventListener('mouseenter', showDropdown);
            dropdown.addEventListener('mouseleave', hideDropdown);

            // Dropdown content hover events
            const content = dropdown.querySelector('.examples-dropdown-content');
            if (content) {
                content.addEventListener('mouseenter', () => {
                    console.log(`🖱️ Mouse enter dropdown content ${index + 1}`);
                    // Clear any pending hide timeout
                    if (dropdown._hideTimeout) {
                        clearTimeout(dropdown._hideTimeout);
                        dropdown._hideTimeout = null;
                    }
                });

                content.addEventListener('mouseleave', () => {
                    console.log(`🖱️ Mouse leave dropdown content ${index + 1}`);
                    hideDropdown();
                });
            }
        });

        // Setup click handlers for echelon selection
        container.querySelectorAll('.examples-dropdown-item').forEach(item => {
            const clone = item.cloneNode(true);
            const tab = item.getAttribute('data-tab');
            const group = item.getAttribute('data-group');
            item.parentNode.replaceChild(clone, item);

            clone.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                console.log(`🖱️ Echelon selected: ${group}/${tab}`);
                this.selectEchelon(group, tab);
                
                // Hide dropdown after selection
                const dropdown = clone.closest('.examples-echelon-dropdown');
                const content = dropdown.querySelector('.examples-dropdown-content');
                if (content) content.style.display = 'none';
            });
        });

        console.log('✅ Event listeners setup complete');

        // Add window resize handler to reposition dropdowns
        window.addEventListener('resize', () => {
            // Hide all visible dropdowns on resize to prevent positioning issues
            const visibleDropdowns = container.querySelectorAll('.examples-dropdown-content[style*="display: block"]');
            visibleDropdowns.forEach(content => {
                content.style.display = 'none';
            });
        });

        // Add scroll handler to reposition dropdowns when workspace scrolls
        const workspace = document.getElementById('workspace');
        if (workspace) {
            workspace.addEventListener('scroll', () => {
                // Hide all visible dropdowns on scroll to prevent positioning issues
                const visibleDropdowns = container.querySelectorAll('.examples-dropdown-content[style*="display: block"]');
                visibleDropdowns.forEach(content => {
                    content.style.display = 'none';
                });
            });
        }
    }

    async showDefaultPlaceholder() {
        console.log('📋 Showing default placeholder content...');

        const contentArea = document.getElementById('examples-content-area');
        if (!contentArea) {
            console.error('❌ examples-content-area not found for placeholder');
            return;
        }

        // Create default instructional content
        contentArea.innerHTML = `
            <div style="
                padding: 40px;
                background-color: #1f2937;
                border-radius: 12px;
                border: 1px solid #374151;
                text-align: center;
                max-width: 800px;
                margin: 0 auto;
            ">
                <!-- Header Section -->
                <div style="margin-bottom: 32px;">
                    <div style="
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        width: 64px;
                        height: 64px;
                        background-color: #374151;
                        border-radius: 50%;
                        margin-bottom: 16px;
                    ">
                        <i class="fas fa-file-contract" style="color: #60a5fa; font-size: 24px;"></i>
                    </div>
                    <h2 style="
                        color: white;
                        font-size: 24px;
                        font-weight: 600;
                        margin: 0 0 8px 0;
                    ">OPORD Examples by Echelon</h2>
                    <p style="
                        color: #9ca3af;
                        font-size: 16px;
                        margin: 0;
                    ">Select an echelon level to view comprehensive OPORD examples</p>
                </div>

                <!-- Instructions Section -->
                <div style="
                    background-color: #111827;
                    border: 1px solid #374151;
                    border-radius: 8px;
                    padding: 24px;
                    margin-bottom: 32px;
                    text-align: left;
                ">
                    <h3 style="
                        color: #10b981;
                        font-size: 18px;
                        font-weight: 600;
                        margin: 0 0 16px 0;
                        display: flex;
                        align-items: center;
                    ">
                        <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                        How to Use This Section
                    </h3>
                    <p style="
                        color: #d1d5db;
                        font-size: 14px;
                        line-height: 1.6;
                        margin: 0 0 16px 0;
                    ">
                        Hover over any of the three echelon level buttons above to reveal specific unit options,
                        then click on your desired echelon to view detailed OPORD examples following FM 5-0 standards.
                    </p>
                    <div style="
                        background-color: #1f2937;
                        border-left: 3px solid #60a5fa;
                        padding: 12px 16px;
                        border-radius: 4px;
                    ">
                        <p style="
                            color: #93c5fd;
                            font-size: 13px;
                            margin: 0;
                            font-style: italic;
                        ">
                            <i class="fas fa-lightbulb" style="margin-right: 6px;"></i>
                            Each example includes complete 5-paragraph format with realistic scenarios,
                            unit designations, and tactical details appropriate for the selected echelon level.
                        </p>
                    </div>
                </div>

                <!-- Echelon Options Grid -->
                <div style="
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                    gap: 20px;
                    margin-bottom: 24px;
                ">
                    <!-- Tactical Level -->
                    <div style="
                        background-color: #111827;
                        border: 1px solid #16a34a;
                        border-radius: 8px;
                        padding: 20px;
                        text-align: left;
                    ">
                        <h4 style="
                            color: #16a34a;
                            font-size: 16px;
                            font-weight: 600;
                            margin: 0 0 12px 0;
                            display: flex;
                            align-items: center;
                        ">
                            <i class="fas fa-users" style="margin-right: 8px;"></i>
                            Tactical Level
                        </h4>
                        <p style="
                            color: #d1d5db;
                            font-size: 13px;
                            line-height: 1.5;
                            margin: 0 0 12px 0;
                        ">Small unit operations and direct combat actions</p>
                        <div style="color: #9ca3af; font-size: 12px;">
                            <div style="margin-bottom: 4px;">• Platoon (30-50 personnel)</div>
                            <div style="margin-bottom: 4px;">• Company (100-200 personnel)</div>
                            <div style="margin-bottom: 4px;">• Squadron (Aviation/Cavalry)</div>
                            <div>• Battalion (400-800 personnel)</div>
                        </div>
                    </div>

                    <!-- Operational Level -->
                    <div style="
                        background-color: #111827;
                        border: 1px solid #3b82f6;
                        border-radius: 8px;
                        padding: 20px;
                        text-align: left;
                    ">
                        <h4 style="
                            color: #3b82f6;
                            font-size: 16px;
                            font-weight: 600;
                            margin: 0 0 12px 0;
                            display: flex;
                            align-items: center;
                        ">
                            <i class="fas fa-chess-rook" style="margin-right: 8px;"></i>
                            Operational Level
                        </h4>
                        <p style="
                            color: #d1d5db;
                            font-size: 13px;
                            line-height: 1.5;
                            margin: 0 0 12px 0;
                        ">Combined arms operations and campaign planning</p>
                        <div style="color: #9ca3af; font-size: 12px;">
                            <div style="margin-bottom: 4px;">• Brigade (3,000-5,000 personnel)</div>
                            <div style="margin-bottom: 4px;">• Regiment (Specialized units)</div>
                            <div>• Group (Aviation/Special Operations)</div>
                        </div>
                    </div>

                    <!-- Strategic Level -->
                    <div style="
                        background-color: #111827;
                        border: 1px solid #8b5cf6;
                        border-radius: 8px;
                        padding: 20px;
                        text-align: left;
                    ">
                        <h4 style="
                            color: #8b5cf6;
                            font-size: 16px;
                            font-weight: 600;
                            margin: 0 0 12px 0;
                            display: flex;
                            align-items: center;
                        ">
                            <i class="fas fa-globe" style="margin-right: 8px;"></i>
                            Strategic Level
                        </h4>
                        <p style="
                            color: #d1d5db;
                            font-size: 13px;
                            line-height: 1.5;
                            margin: 0 0 12px 0;
                        ">Large-scale operations and theater-wide planning</p>
                        <div style="color: #9ca3af; font-size: 12px;">
                            <div style="margin-bottom: 4px;">• Division (10,000-18,000 personnel)</div>
                            <div style="margin-bottom: 4px;">• Corps (45,000+ personnel)</div>
                            <div style="margin-bottom: 4px;">• Army (100,000+ personnel)</div>
                            <div>• Theater (Multi-national operations)</div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div style="
                    padding-top: 20px;
                    border-top: 1px solid #374151;
                    color: #6b7280;
                    font-size: 12px;
                ">
                    <p style="margin: 0;">
                        <i class="fas fa-shield-alt" style="margin-right: 6px;"></i>
                        UNCLASSIFIED - Training examples following FM 5-0 Operation Order format
                    </p>
                </div>
            </div>
        `;

        console.log('✅ Default placeholder content displayed');
    }

    async selectEchelon(group, tab) {
        this.currentEchelon = { group, tab };

        const contentArea = document.getElementById('examples-content-area');
        if (!contentArea) {
            console.error('❌ examples-content-area not found');
            return;
        }

        // Loading state
        contentArea.innerHTML = `
            <div style="padding: 40px; text-align: center; background-color: #1f2937; border-radius: 8px; border: 1px solid #374151;">
                <div style="color: #10b981; font-size: 16px; margin-bottom: 12px;">
                    <i class=\"fas fa-spinner fa-spin\" style=\"margin-right: 8px;\"></i>
                    Loading ${tab.charAt(0).toUpperCase() + tab.slice(1)} Level Content...
                </div>
                <p style="color: #6ee7b7; font-size: 12px;">UNCLASSIFIED</p>
            </div>
        `;

        try {
            const html = await this.importEchelonModule(tab);
            if (!html) throw new Error('Empty content returned');
            contentArea.innerHTML = html;
            console.log(`📋 Loaded content for ${group}/${tab}`);
        } catch (err) {
            console.error(`❌ Failed to load ${group}/${tab} example module:`, err);
            contentArea.innerHTML = `
                <div style="padding: 20px; background-color: #1f2937; border: 1px solid #374151; border-radius: 8px;">
                    <div style="color: #ef4444; font-size: 14px; margin-bottom: 8px;">
                        <i class=\"fas fa-exclamation-triangle\" style=\"margin-right: 8px;\"></i>
                        Failed to load ${tab} example module.
                    </div>
                    <div style="color: #9ca3af; font-size: 12px;">Check console for details.</div>
                </div>
            `;
        }
    }

    async importEchelonModule(tab) {
        try {
            // Map tab -> file path under sections/examples-[tab].js
            const modulePath = `./sections/examples-${tab}.js`;
            const mod = await import(modulePath);

            // Determine expected export name, e.g., platoonExampleModule
            const exportName = `${tab}ExampleModule`;
            const moduleObj = mod[exportName] || mod.default || Object.values(mod)[0];

            if (!moduleObj) throw new Error(`Module export not found in ${modulePath}`);
            if (typeof moduleObj.getContent !== 'function') {
                throw new Error(`Invalid module: getContent() missing for ${modulePath}`);
            }
            const html = moduleObj.getContent();
            return html;
        } catch (e) {
            console.warn('Dynamic import failed for examples module:', tab, e);
            return `
                <div style="padding: 20px; background-color: #1f2937; border: 1px solid #374151; border-radius: 8px;">
                    <div style="color: #f59e0b; font-size: 14px; margin-bottom: 8px;">
                        <i class=\"fas fa-info-circle\" style=\"margin-right: 8px;\"></i>
                        Placeholder content: ${tab} example module is under development.
                    </div>
                    <div style="color: #9ca3af; font-size: 12px;">File expected at src/js/content/opord/sections/examples-${tab}.js</div>
                </div>
            `;
        }
    }
}
