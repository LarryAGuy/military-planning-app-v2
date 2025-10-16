/**
 * Universal JPP Step 7: Plan Development Button System
 * Matches JPP Steps 1-6 visual design and interaction patterns exactly
 */

export class UniversalPlanDevelopmentButtons {
    constructor() {
        this.navContainerId = 'universal-plan-development-nav';
        this.contentContainerId = 'plan-development-content-area';
        this.buttonConfig = [
            {
                id: 'plan-detailed-analysis-btn',
                moduleType: 'detailed-analysis',
                label: 'Detailed Analysis',
                icon: 'fas fa-drafting-compass',
                colorClass: 'universal-plan-btn-green',
                isDefault: true
            },
            {
                id: 'plan-practical-examples-btn',
                moduleType: 'practical-examples',
                label: 'Practical Examples',
                icon: 'fas fa-book-open',
                colorClass: 'universal-plan-btn-blue',
                isDefault: false
            },
            {
                id: 'plan-echelon-analysis-btn',
                moduleType: 'echelon-analysis',
                label: 'Echelon Analysis',
                icon: 'fas fa-layer-group',
                colorClass: 'universal-plan-btn-purple',
                isDefault: false
            }
        ];
        this.modules = {};
        this.currentModule = null;
        this.initialized = false;
    }

    // Micro-optimizations for initial content load
    getDefaultModule() { return this.modules?.detailedAnalysis; }

    prefetchSecondaryModules() {
        // Yield to paint, then prefetch practical/echelon to match OPORD speed
        const prefetch = () => {
            try {
                import('./sections/plan-development-practical-examples.js');
                import('./sections/plan-development-echelon-analysis.js');
            } catch {}
        };

        // Use requestIdleCallback if available, otherwise fallback to setTimeout
        if (window.requestIdleCallback) {
            window.requestIdleCallback(prefetch);
        } else {
            setTimeout(prefetch, 0);
        }
    }

    async loadPlanDevelopmentModules() {
        const [detailed, practical, echelon] = await Promise.all([
            import('./sections/plan-development-detailed-analysis.js'),
            import('./sections/plan-development-practical-examples.js'),
            import('./sections/plan-development-echelon-analysis.js')
        ]);
        this.modules = {
            detailedAnalysis: detailed.detailedAnalysisModule,
            practicalExamples: practical.practicalExamplesModule,
            echelonAnalysis: echelon.echelonAnalysisModule
        };
    }

    injectCSS() {
        if (document.getElementById('universal-plan-development-styles')) return;
        const style = document.createElement('style');
        style.id = 'universal-plan-development-styles';
        style.textContent = `
            .universal-plan-nav-btn {
                display: inline-flex !important; align-items: center !important; justify-content: center !important;
                padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
                border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
                transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
                text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
                background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
            }
            .universal-plan-btn-green { background-color: #16a34a !important; color: #fff !important; border-color: #15803d !important; }
            .universal-plan-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
            .universal-plan-btn-blue { background-color: #2563eb !important; color: #fff !important; border-color: #1d4ed8 !important; }
            .universal-plan-btn-blue:hover { background-color: #1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
            .universal-plan-btn-purple { background-color: #9333ea !important; color: #fff !important; border-color: #7c3aed !important; }
            .universal-plan-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
            .universal-plan-btn-inactive { background-color: #4b5563 !important; color: #9ca3af !important; border-color: #374151 !important; opacity: .7 !important; }
            .universal-plan-btn-inactive:hover { background-color: #6b7280 !important; transform:none !important; box-shadow:none !important; }
        `;
        document.head.appendChild(style);
    }

    async findContainer() {
        // Try multiple strategies similar to OPORD for robustness
        for (let i = 0; i < 15; i++) {
            // Method 1: direct
            let c = document.getElementById('universal-plan-development-nav');
            if (c) return c;

            // Method 2: querySelector
            c = document.querySelector('#universal-plan-development-nav');
            if (c) return c;

            // Method 3: search inside workspace
            const workspace = document.getElementById('workspace-content');
            if (workspace) {
                c = workspace.querySelector('#universal-plan-development-nav');
                if (c) return c;

                // Method 4: deep search with exact id
                const all = workspace.querySelectorAll('div[id="universal-plan-development-nav"]');
                if (all && all.length > 0) return all[0];
            }

            // Method 5: fallback creation if content area exists
            if (i === 10) {
                const area = workspace?.querySelector('#plan-development-content-area');
                if (area && area.parentElement) {
                    const fallback = document.createElement('div');
                    fallback.id = 'universal-plan-development-nav';
                    fallback.style.marginBottom = '16px';
                    area.parentElement.insertBefore(fallback, area);
                    return fallback;
                }
            }

            await new Promise(resolve => setTimeout(resolve, 50));
        }
        return null;
    }

    async initialize() {
        try {
            console.log('🚀 Initializing Universal Plan Development Button System...');

            // Inject CSS first
            this.injectCSS();

            // Load modules
            await this.loadPlanDevelopmentModules();

            // Create button HTML
            await this.createButtonHTML();

            // Set up event listeners
            await this.setupEventListeners();

            // Load default module
            await this.loadModule('detailed-analysis');

            // Prefetch secondary modules for performance
            this.prefetchSecondaryModules();

            this.initialized = true;
            console.log('✅ Universal Plan Development Button System initialized successfully');

        } catch (error) {
            console.error('❌ Failed to initialize Universal Plan Development Button System:', error);
            throw error;
        }
    }

    async createButtonHTML() {
        const nav = await this.findContainer();
        if (!nav) throw new Error('Plan development nav container not found');

        // Clear existing to prevent duplication (Firefox re-renders)
        while (nav.firstChild) nav.removeChild(nav.firstChild);

        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexWrap = 'wrap';
        wrapper.style.gap = '8px';
        wrapper.style.alignItems = 'center';

        this.buttonConfig.forEach(btn => {
            const b = document.createElement('button');
            b.id = btn.id;
            b.className = `universal-plan-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-plan-btn-inactive'}`;
            b.setAttribute('data-module-type', btn.moduleType);
            b.setAttribute('data-color-class', btn.colorClass);
            b.type = 'button';
            b.setAttribute('role', 'button');
            b.setAttribute('aria-label', btn.label);
            b.tabIndex = 0;

            const icon = document.createElement('i');
            icon.className = btn.icon;
            icon.style.marginRight = '8px';
            icon.style.fontSize = '14px';
            icon.setAttribute('aria-hidden', 'true');

            const span = document.createElement('span');
            span.textContent = btn.label;

            b.appendChild(icon);
            b.appendChild(span);
            wrapper.appendChild(b);
        });

        nav.appendChild(wrapper);
    }

    async setupEventListeners() {
        this.buttonConfig.forEach(btn => {
            const button = document.getElementById(btn.id);
            if (button) {
                // Remove any existing listeners to prevent duplicates
                const newButton = button.cloneNode(true);
                button.parentNode.replaceChild(newButton, button);

                newButton.addEventListener('click', async (e) => {
                    e.preventDefault();
                    await this.handleButtonClick(btn.moduleType, btn.colorClass);
                });

                // Keyboard accessibility
                newButton.addEventListener('keydown', async (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        await this.handleButtonClick(btn.moduleType, btn.colorClass);
                    }
                });
            }
        });
    }

    async handleButtonClick(moduleType, colorClass) {
        try {
            // Update button states
            this.updateButtonStates(moduleType, colorClass);

            // Load the module
            await this.loadModule(moduleType);

        } catch (error) {
            console.error(`Error loading module ${moduleType}:`, error);
            this.showError(`Failed to load ${moduleType}`);
        }
    }

    updateButtonStates(activeModuleType, activeColorClass) {
        this.buttonConfig.forEach(btn => {
            const button = document.getElementById(btn.id);
            if (button) {
                if (btn.moduleType === activeModuleType) {
                    button.className = `universal-plan-nav-btn ${activeColorClass}`;
                } else {
                    button.className = `universal-plan-nav-btn universal-plan-btn-inactive`;
                }
            }
        });
    }

    async loadModule(moduleType) {
        const contentContainer = document.getElementById(this.contentContainerId);
        if (!contentContainer) return;

        // Show loading state
        contentContainer.innerHTML = `
            <div class="bg-gray-800 border border-gray-600 rounded-lg p-8 text-center">
                <i class="fas fa-spinner fa-spin text-yellow-400 text-3xl mb-4"></i>
                <h3 class="text-white text-xl font-semibold mb-2">Loading Content</h3>
                <p class="text-gray-300">Please wait...</p>
            </div>
        `;

        try {
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
                    throw new Error(`Unknown module type: ${moduleType}`);
            }

            if (module && typeof module.getContent === 'function') {
                const content = module.getContent();
                contentContainer.innerHTML = content;

                // Initialize module if it has an initialize method
                if (typeof module.initialize === 'function') {
                    module.initialize();
                }

                this.currentModule = moduleType;
                console.log(`✅ Loaded Plan Development module: ${moduleType}`);
            } else {
                throw new Error('Invalid module structure');
            }
        } catch (error) {
            console.error(`Error loading module ${moduleType}:`, error);
            this.showError(`Failed to load ${moduleType}`);
        }
    }

    showError(message) {
        const contentContainer = document.getElementById(this.contentContainerId);
        if (contentContainer) {
            contentContainer.innerHTML = `
                <div class="bg-gray-800 border border-red-600 rounded-lg p-8 text-center">
                    <i class="fas fa-exclamation-triangle text-red-400 text-3xl mb-4"></i>
                    <h3 class="text-white text-xl font-semibold mb-2">Error</h3>
                    <p class="text-gray-300">${message}</p>
                    <p class="text-gray-500 text-sm mt-2">Please try again later</p>
                </div>
            `;
        }
    }

    // Public method to get current state
    getCurrentModule() {
        return this.currentModule;
    }

    // Public method to check if initialized
    isInitialized() {
        return this.initialized;
    }
}

export default UniversalPlanDevelopmentButtons;
