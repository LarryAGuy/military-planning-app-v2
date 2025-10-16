/**
 * Universal OPORD Situation Button System
 * Cross-browser compatible external button architecture
 * Replaces inline script-based system with robust external implementation
 */

export class UniversalSituationButtons {
    constructor() {
        this.initialized = false;
        this.currentSection = 'detailed-analysis';
        this.modules = {};
        this.browserInfo = this.detectBrowser();
        
        // Universal button configuration
        this.buttonConfig = [
            {
                id: 'universal-detailed-btn',
                moduleType: 'detailed-analysis',
                label: 'Detailed Analysis',
                icon: 'fas fa-search',
                colorClass: 'universal-situation-btn-blue',
                isDefault: true
            },
            {
                id: 'universal-practical-btn',
                moduleType: 'practical-examples',
                label: 'Practical Examples',
                icon: 'fas fa-file-alt',
                colorClass: 'universal-situation-btn-green',
                isDefault: false
            },
            {
                id: 'universal-echelon-btn',
                moduleType: 'echelon-analysis',
                label: 'Echelon Analysis',
                icon: 'fas fa-layer-group',
                colorClass: 'universal-situation-btn-purple',
                isDefault: false
            }
        ];
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
            console.log('🔄 UniversalSituationButtons already initialized');
            return;
        }

        console.log(`🚀 Initializing UniversalSituationButtons for ${this.browserInfo}...`);
        
        try {
            // Step 1: Load situation modules
            await this.loadSituationModules();
            
            // Step 2: Inject universal CSS
            this.injectUniversalCSS();
            
            // Step 3: Create button HTML
            await this.createButtonHTML();
            
            // Step 4: Setup event listeners with cross-browser compatibility
            await this.setupUniversalEventListeners();
            
            // Step 5: Load default content
            this.loadDefaultContent();
            
            this.initialized = true;
            console.log(`✅ UniversalSituationButtons initialized successfully for ${this.browserInfo}`);
            
        } catch (error) {
            console.error('❌ UniversalSituationButtons initialization failed:', error);
            throw error;
        }
    }

    async loadSituationModules() {
        console.log('📦 Loading situation modules...');
        
        try {
            // Dynamic imports with error handling
            const [detailedModule, practicalModule, echelonModule] = await Promise.all([
                import('./sections/situation-detailed-analysis.js'),
                import('./sections/situation-practical-examples.js'),
                import('./sections/situation-echelon-analysis.js')
            ]);

            this.modules = {
                detailedAnalysis: detailedModule.detailedAnalysisModule,
                practicalExamples: practicalModule.practicalExamplesModule,
                echelonAnalysis: echelonModule.echelonAnalysisModule
            };

            console.log('✅ All situation modules loaded successfully');
            return true;
            
        } catch (error) {
            console.error('❌ Failed to load situation modules:', error);
            throw error;
        }
    }

    injectUniversalCSS() {
        // Prevent duplicate CSS injection
        if (document.getElementById('universal-situation-styles')) {
            console.log('🎨 Universal CSS already injected');
            return;
        }

        console.log(`🎨 Injecting universal CSS for ${this.browserInfo}...`);

        const styleElement = document.createElement('style');
        styleElement.id = 'universal-situation-styles';
        styleElement.textContent = `
            /* Universal OPORD Situation Button Styles - Cross-Browser Compatible */
            .universal-situation-nav-btn {
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                padding: 7px 14px !important;
                font-size: 14px !important;
                font-weight: 600 !important;
                border-radius: 6px !important;
                border: 2px solid transparent !important;
                cursor: pointer !important;
                transition: all 0.3s ease !important;
                user-select: none !important;
                white-space: nowrap !important;
                text-decoration: none !important;
                outline: none !important;
                margin-right: 12px !important;
                margin-bottom: 8px !important;
                background: none !important;
                font-family: inherit !important;
                box-sizing: border-box !important;
                vertical-align: top !important;
            }

            .universal-situation-btn-blue {
                background-color: #2563eb !important;
                color: white !important;
                border-color: #1d4ed8 !important;
            }
            .universal-situation-btn-blue:hover {
                background-color: #1d4ed8 !important;
                transform: translateY(-2px) !important;
                box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4) !important;
            }

            .universal-situation-btn-green {
                background-color: #16a34a !important;
                color: white !important;
                border-color: #15803d !important;
            }
            .universal-situation-btn-green:hover {
                background-color: #15803d !important;
                transform: translateY(-2px) !important;
                box-shadow: 0 4px 12px rgba(22, 163, 74, 0.4) !important;
            }

            .universal-situation-btn-purple {
                background-color: #9333ea !important;
                color: white !important;
                border-color: #7c3aed !important;
            }
            .universal-situation-btn-purple:hover {
                background-color: #7c3aed !important;
                transform: translateY(-2px) !important;
                box-shadow: 0 4px 12px rgba(147, 51, 234, 0.4) !important;
            }

            .universal-situation-btn-inactive {
                background-color: #4b5563 !important;
                color: #9ca3af !important;
                border-color: #374151 !important;
                opacity: 0.7 !important;
            }
            .universal-situation-btn-inactive:hover {
                background-color: #6b7280 !important;
                transform: none !important;
                box-shadow: none !important;
            }

            /* Browser-specific fixes */
            @supports (-moz-appearance: none) {
                /* Firefox specific styles */
                .universal-nav-btn {
                    -moz-user-select: none !important;
                }
            }

            @supports (-webkit-appearance: none) {
                /* Chrome/Safari specific styles */
                .universal-nav-btn {
                    -webkit-user-select: none !important;
                }
            }
        `;

        document.head.appendChild(styleElement);
        console.log('✅ Universal CSS injected successfully');
    }

    async findNavigationContainer() {
        console.log(`🔍 Finding navigation container for ${this.browserInfo}...`);

        const maxAttempts = this.browserInfo === 'Firefox' ? 20 : 10;
        const baseDelay = this.browserInfo === 'Firefox' ? 50 : 25;

        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            console.log(`🔍 Container search attempt ${attempt}/${maxAttempts} for ${this.browserInfo}`);

            // Method 1: Standard document-level search
            let container = document.getElementById('universal-situation-nav');
            if (container) {
                console.log(`✅ Container found via getElementById on attempt ${attempt}`);
                return container;
            }

            // Method 2: querySelector fallback
            container = document.querySelector('#universal-situation-nav');
            if (container) {
                console.log(`✅ Container found via querySelector on attempt ${attempt}`);
                return container;
            }

            // Method 3: Firefox-specific workspace search
            const workspaceContent = document.getElementById('workspace-content');
            if (workspaceContent) {
                container = workspaceContent.querySelector('#universal-situation-nav');
                if (container) {
                    console.log(`✅ Container found in workspace on attempt ${attempt}`);
                    return container;
                }

                // Method 4: Deep search within workspace
                const allDivs = workspaceContent.querySelectorAll('div[id="universal-situation-nav"]');
                if (allDivs.length > 0) {
                    console.log(`✅ Container found via deep search on attempt ${attempt}`);
                    return allDivs[0];
                }
            }

            // Method 5: Firefox-specific DOM traversal
            if (this.browserInfo === 'Firefox') {
                const allElements = document.querySelectorAll('*[id="universal-situation-nav"]');
                if (allElements.length > 0) {
                    console.log(`✅ Container found via Firefox traversal on attempt ${attempt}`);
                    return allElements[0];
                }
            }

            // Debug information for failed attempts
            if (attempt % 5 === 0) {
                this.debugContainerSearch(attempt);
            }

            // Progressive delay for Firefox
            const delay = this.browserInfo === 'Firefox' ? baseDelay * attempt : baseDelay;
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        // Final attempt: Create container if not found (Firefox fallback)
        if (this.browserInfo === 'Firefox') {
            console.log('🔧 Attempting to create missing container for Firefox...');
            return this.createFallbackContainer();
        }

        console.error('❌ Navigation container not found after all attempts');
        return null;
    }

    debugContainerSearch(attempt) {
        console.log(`🔍 Debug info for ${this.browserInfo} at attempt ${attempt}:`);

        // Check workspace content
        const workspace = document.getElementById('workspace-content');
        console.log(`  📦 Workspace exists: ${!!workspace}`);

        if (workspace) {
            console.log(`  📦 Workspace innerHTML length: ${workspace.innerHTML.length}`);
            console.log(`  📦 Workspace children count: ${workspace.children.length}`);

            // Look for any elements with our target ID
            const targetElements = workspace.querySelectorAll('[id*="universal-situation"]');
            console.log(`  🎯 Elements with 'universal-situation' in ID: ${targetElements.length}`);

            // List all elements with IDs in workspace
            const elementsWithIds = workspace.querySelectorAll('[id]');
            const idList = Array.from(elementsWithIds).map(el => el.id).slice(0, 10);
            console.log(`  📋 First 10 IDs in workspace:`, idList);
        }

        // Check if content includes our target
        const bodyHTML = document.body.innerHTML;
        const containsTarget = bodyHTML.includes('universal-situation-nav');
        console.log(`  🔍 Body HTML contains target: ${containsTarget}`);
    }

    createFallbackContainer() {
        console.log('🔧 Creating fallback container for Firefox...');

        const workspace = document.getElementById('workspace-content');
        if (!workspace) {
            console.error('❌ Cannot create fallback: workspace not found');
            return null;
        }

        // Find a suitable parent element within workspace
        const contentDiv = workspace.querySelector('.p-6 .w-full');
        if (!contentDiv) {
            console.error('❌ Cannot create fallback: content div not found');
            return null;
        }

        // Create the missing container
        const fallbackContainer = document.createElement('div');
        fallbackContainer.id = 'universal-situation-nav';
        fallbackContainer.style.marginBottom = '16px';

        // Insert at the beginning of content
        contentDiv.insertBefore(fallbackContainer, contentDiv.firstChild);

        console.log('✅ Fallback container created successfully');
        return fallbackContainer;
    }

    async createButtonHTML() {
        console.log(`🎨 Creating universal button HTML for ${this.browserInfo}...`);

        // Enhanced container detection with Firefox-specific handling
        const navContainer = await this.findNavigationContainer();

        if (!navContainer) {
            console.error('❌ Universal navigation container not found after all attempts');
            throw new Error('Navigation container not found');
        }

        console.log('✅ Universal navigation container found');

        // Create button HTML
        const buttonHTML = `
            <div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
                ${this.buttonConfig.map(btn => `
                    <button 
                        id="${btn.id}" 
                        class="universal-situation-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-situation-btn-inactive'}"
                        data-module-type="${btn.moduleType}"
                        data-color-class="${btn.colorClass}"
                        type="button"
                        role="button"
                        aria-label="${btn.label}"
                        tabindex="0"
                    >
                        <i class="${btn.icon}" style="margin-right: 8px; font-size: 14px;" aria-hidden="true"></i>
                        <span>${btn.label}</span>
                    </button>
                `).join('')}
            </div>
        `;

        navContainer.innerHTML = buttonHTML;
        
        // Force DOM update for cross-browser compatibility
        navContainer.offsetHeight;
        
        console.log('✅ Universal button HTML created and injected');
    }

    async setupUniversalEventListeners() {
        console.log(`🎧 Setting up universal event listeners for ${this.browserInfo}...`);
        
        // Wait for DOM to be fully ready
        await this.waitForButtonsReady();
        
        let successCount = 0;
        let failureCount = 0;
        
        for (const btnConfig of this.buttonConfig) {
            try {
                const success = await this.attachButtonListener(btnConfig);
                if (success) {
                    successCount++;
                } else {
                    failureCount++;
                }
            } catch (error) {
                console.error(`❌ Failed to attach listener for ${btnConfig.id}:`, error);
                failureCount++;
            }
        }
        
        console.log(`📊 Event listener setup complete: ${successCount} success, ${failureCount} failures`);
        
        if (failureCount > 0) {
            throw new Error(`Failed to initialize ${failureCount} buttons`);
        }
    }

    async waitForButtonsReady() {
        console.log('⏳ Waiting for buttons to be ready...');
        
        const maxAttempts = 20;
        const delayMs = 25;
        
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            const allReady = this.buttonConfig.every(btnConfig => {
                const element = document.getElementById(btnConfig.id);
                return element && element.isConnected && element.offsetParent !== null;
            });
            
            if (allReady) {
                console.log(`✅ All buttons ready after ${attempt} attempts`);
                return true;
            }
            
            await new Promise(resolve => setTimeout(resolve, delayMs));
        }
        
        console.warn('⚠️ Button readiness timeout - proceeding anyway');
        return false;
    }

    async attachButtonListener(btnConfig) {
        // Multiple element selection methods for cross-browser compatibility
        let button = document.getElementById(btnConfig.id);
        if (!button) {
            button = document.querySelector(`#${btnConfig.id}`);
        }
        
        if (!button) {
            console.error(`❌ Button not found: ${btnConfig.id}`);
            return false;
        }

        console.log(`🔗 Attaching listener to: ${btnConfig.id}`);

        // Create universal click handler
        const clickHandler = (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            console.log(`🖱️ Button clicked: ${btnConfig.label} (${btnConfig.moduleType}) in ${this.browserInfo}`);
            
            this.switchToSection(btnConfig.moduleType);
        };

        // Remove existing listeners and attach new ones
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);

        // Multiple event binding methods for maximum compatibility
        newButton.addEventListener('click', clickHandler, { passive: false });
        newButton.onclick = clickHandler;

        // Keyboard accessibility
        newButton.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                clickHandler(e);
            }
        });

        console.log(`✅ Event listener attached to: ${btnConfig.id}`);
        return true;
    }

    switchToSection(moduleType) {
        console.log(`🔄 Switching to section: ${moduleType}`);
        
        this.updateButtonStates(moduleType);
        this.loadModuleContent(moduleType);
        this.currentSection = moduleType;
    }

    updateButtonStates(activeModuleType) {
        console.log(`🎨 Updating button states, active: ${activeModuleType}`);
        
        this.buttonConfig.forEach(btnConfig => {
            const button = document.getElementById(btnConfig.id);
            if (button) {
                // Remove all color classes
                button.classList.remove('universal-situation-btn-blue', 'universal-situation-btn-green', 'universal-situation-btn-purple', 'universal-situation-btn-inactive');

                // Add appropriate class
                if (btnConfig.moduleType === activeModuleType) {
                    button.classList.add(btnConfig.colorClass);
                } else {
                    button.classList.add('universal-situation-btn-inactive');
                }
            }
        });
    }

    loadModuleContent(moduleType) {
        console.log(`📄 Loading content for: ${moduleType}`);
        
        const contentArea = document.getElementById('situation-content-area');
        if (!contentArea) {
            console.error('❌ Content area not found');
            return;
        }

        let module;
        switch (moduleType) {
            case 'detailed-analysis':
                module = this.modules.detailedAnalysis;
                break;
            case 'practical-examples':
                module = this.modules.practicalExamples;
                break;
            case 'echelon-analysis':
                module = this.modules.echelonAnalysis;
                break;
            default:
                console.error(`❌ Unknown module type: ${moduleType}`);
                return;
        }

        if (module && module.getContent) {
            const content = module.getContent();
            contentArea.innerHTML = content;

            // Initialize module if it has an initialize method
            if (module.initialize) {
                setTimeout(() => module.initialize(), 100);
            }

            console.log(`✅ Content loaded successfully for: ${moduleType}`);
        } else {
            console.error(`❌ Module or getContent method not found for: ${moduleType}`);
        }
    }

    loadDefaultContent() {
        const defaultButton = this.buttonConfig.find(btn => btn.isDefault);
        if (defaultButton) {
            console.log(`🏠 Loading default content: ${defaultButton.moduleType}`);
            this.loadModuleContent(defaultButton.moduleType);
        }
    }

    // Public API for testing and debugging
    getModules() { return this.modules; }
    getCurrentSection() { return this.currentSection; }
    isInitialized() { return this.initialized; }
    getBrowserInfo() { return this.browserInfo; }
}

// Global instance for testing
window.universalSituationButtons = null;

// Universal test functions for cross-browser debugging
window.testUniversalButtons = function() {
    console.log('=== UNIVERSAL BUTTON TEST START ===');

    const browserInfo = navigator.userAgent.includes('Firefox') ? 'Firefox' :
                       navigator.userAgent.includes('Edg') ? 'Edge' :
                       navigator.userAgent.includes('Chrome') ? 'Chrome' : 'Other';
    console.log(`🌐 Browser: ${browserInfo}`);

    if (!window.universalSituationButtons) {
        console.log('❌ UniversalSituationButtons not initialized');

        // Firefox-specific debugging
        if (browserInfo === 'Firefox') {
            console.log('🔍 Firefox debugging - checking container availability:');
            const container1 = document.getElementById('universal-situation-nav');
            const container2 = document.querySelector('#universal-situation-nav');
            const workspace = document.getElementById('workspace-content');
            const container3 = workspace ? workspace.querySelector('#universal-situation-nav') : null;

            console.log(`  📦 getElementById: ${!!container1}`);
            console.log(`  📦 querySelector: ${!!container2}`);
            console.log(`  📦 workspace exists: ${!!workspace}`);
            console.log(`  📦 container in workspace: ${!!container3}`);

            if (workspace) {
                const allIds = Array.from(workspace.querySelectorAll('[id]')).map(el => el.id);
                console.log(`  📋 All IDs in workspace:`, allIds);
            }
        }
        return;
    }

    const system = window.universalSituationButtons;
    console.log(`🌐 System Browser: ${system.getBrowserInfo()}`);
    console.log('✅ System initialized:', system.isInitialized());
    console.log('📍 Current section:', system.getCurrentSection());

    // Test navigation container
    const navContainer = document.getElementById('universal-situation-nav');
    console.log('📦 Nav container exists:', !!navContainer);
    if (navContainer) {
        console.log('📦 Nav container parent:', navContainer.parentElement?.tagName);
        console.log('📦 Nav container children:', navContainer.children.length);
    }

    // Test button elements
    const buttonIds = ['universal-detailed-btn', 'universal-practical-btn', 'universal-echelon-btn'];
    buttonIds.forEach(id => {
        const btn = document.getElementById(id);
        console.log(`🔘 ${id}:`, !!btn);
        if (btn) {
            console.log(`  📍 Connected: ${btn.isConnected}`);
            console.log(`  📍 Visible: ${btn.offsetParent !== null}`);
            console.log(`  📍 Classes: ${btn.className}`);
        }
    });

    // Test content area
    console.log('📄 Content area:', !!document.getElementById('situation-content-area'));

    console.log('=== UNIVERSAL BUTTON TEST END ===');
};

window.testUniversalModules = function() {
    console.log('=== UNIVERSAL MODULE TEST START ===');

    if (!window.universalSituationButtons) {
        console.log('❌ UniversalSituationButtons not initialized');
        return;
    }

    const modules = window.universalSituationButtons.getModules();
    console.log('📦 Modules:', modules);

    if (modules.detailedAnalysis?.getContent) {
        console.log('📄 Detailed Analysis content length:', modules.detailedAnalysis.getContent().length);
    }
    if (modules.practicalExamples?.getContent) {
        console.log('📄 Practical Examples content length:', modules.practicalExamples.getContent().length);
    }
    if (modules.echelonAnalysis?.getContent) {
        console.log('📄 Echelon Analysis content length:', modules.echelonAnalysis.getContent().length);
    }

    console.log('=== UNIVERSAL MODULE TEST END ===');
};

window.testUniversalLoadContent = function(moduleType) {
    console.log('=== UNIVERSAL MANUAL LOAD TEST ===');

    if (!window.universalSituationButtons) {
        console.log('❌ UniversalSituationButtons not initialized');
        return;
    }

    console.log(`🔄 Manually loading: ${moduleType}`);
    window.universalSituationButtons.switchToSection(moduleType);
};

window.testUniversalBrowserInfo = function() {
    console.log('=== UNIVERSAL BROWSER INFO TEST ===');
    console.log(`🌐 Detected Browser: ${navigator.userAgent.includes('Firefox') ? 'Firefox' : navigator.userAgent.includes('Edg') ? 'Edge' : navigator.userAgent.includes('Chrome') ? 'Chrome' : 'Other'}`);
    console.log(`📱 User Agent: ${navigator.userAgent}`);
    console.log(`🔧 Platform Info: ${navigator.userAgentData ? 'Modern API available' : 'Legacy platform detection'}`);
    console.log('=== UNIVERSAL BROWSER INFO TEST END ===');
};
