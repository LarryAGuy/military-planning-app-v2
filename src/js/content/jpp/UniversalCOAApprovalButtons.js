/**
 * Universal JPP Step 6: COA Approval Button System
 * Matches JPP Steps 1-5 visual design and interaction patterns exactly
 */

export class UniversalCOAApprovalButtons {
    constructor() {
        this.navContainerId = 'universal-coa-approval-nav';
        this.contentContainerId = 'coa-approval-content-area';
        this.buttonConfig = [
            {
                id: 'coa-approval-detailed-analysis-btn',
                moduleType: 'detailed-analysis',
                label: 'Detailed Analysis',
                icon: 'fas fa-check-circle',
                colorClass: 'universal-coa-approval-btn-green',
                isDefault: true
            },
            {
                id: 'coa-approval-practical-examples-btn',
                moduleType: 'practical-examples',
                label: 'Practical Examples',
                icon: 'fas fa-book-open',
                colorClass: 'universal-coa-approval-btn-blue',
                isDefault: false
            },
            {
                id: 'coa-approval-echelon-analysis-btn',
                moduleType: 'echelon-analysis',
                label: 'Echelon Analysis',
                icon: 'fas fa-layer-group',
                colorClass: 'universal-coa-approval-btn-purple',
                isDefault: false
            }
        ];
        this.modules = {};
        this.currentModule = null;
        this.initialized = false;
    }

    async loadCOAApprovalModules() {
        const [detailed, practical, echelon] = await Promise.all([
            import('./sections/coa-approval-detailed-analysis.js'),
            import('./sections/coa-approval-practical-examples.js'),
            import('./sections/coa-approval-echelon-analysis.js')
        ]);
        this.modules = {
            detailedAnalysis: detailed.detailedAnalysisModule,
            practicalExamples: practical.practicalExamplesModule,
            echelonAnalysis: echelon.echelonAnalysisModule
        };
    }

    injectCSS() {
        if (document.getElementById('universal-coa-approval-styles')) return;
        const style = document.createElement('style');
        style.id = 'universal-coa-approval-styles';
        style.textContent = `
            .universal-coa-approval-nav-btn {
                display: inline-flex !important; align-items: center !important; justify-content: center !important;
                padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
                border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
                transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
                text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
                background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
            }
            .universal-coa-approval-btn-green { background-color: #16a34a !important; color: #fff !important; border-color: #15803d !important; }
            .universal-coa-approval-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
            .universal-coa-approval-btn-blue { background-color: #2563eb !important; color: #fff !important; border-color: #1d4ed8 !important; }
            .universal-coa-approval-btn-blue:hover { background-color: #1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
            .universal-coa-approval-btn-purple { background-color: #9333ea !important; color: #fff !important; border-color: #7c3aed !important; }
            .universal-coa-approval-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
            .universal-coa-approval-btn-inactive { background-color: #4b5563 !important; color: #9ca3af !important; border-color: #374151 !important; opacity: .7 !important; }
            .universal-coa-approval-btn-inactive:hover { background-color: #6b7280 !important; transform:none !important; box-shadow:none !important; }
        `;
        document.head.appendChild(style);
    }

    async initialize() {
        try {
            console.log('🚀 Initializing Universal COA Approval Button System...');
            this.injectCSS();
            await this.loadCOAApprovalModules();
            await this.createButtonHTML();
            await this.setupEventListeners();
            await this.loadModule('detailed-analysis');
            this.initialized = true;
            console.log('✅ Universal COA Approval Button System initialized successfully');
        } catch (error) {
            console.error('❌ Failed to initialize Universal COA Approval Button System:', error);
            throw error;
        }
    }

    async findContainer() {
        for (let i = 0; i < 15; i++) {
            let c = document.getElementById('universal-coa-approval-nav');
            if (c) return c;
            c = document.querySelector('#universal-coa-approval-nav');
            if (c) return c;
            const workspace = document.getElementById('workspace-content');
            if (workspace) {
                c = workspace.querySelector('#universal-coa-approval-nav');
                if (c) return c;
                const all = workspace.querySelectorAll('div[id="universal-coa-approval-nav"]');
                if (all && all.length > 0) return all[0];
            }
            if (i === 10) {
                const area = workspace?.querySelector('#coa-approval-content-area');
                if (area && area.parentElement) {
                    const fallback = document.createElement('div');
                    fallback.id = 'universal-coa-approval-nav';
                    fallback.style.marginBottom = '16px';
                    area.parentElement.insertBefore(fallback, area);
                    return fallback;
                }
            }
            await new Promise(resolve => setTimeout(resolve, 50));
        }
        return null;
    }

    async createButtonHTML() {
        const nav = await this.findContainer();
        if (!nav) throw new Error('COA approval nav container not found');
        while (nav.firstChild) nav.removeChild(nav.firstChild);
        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexWrap = 'wrap';
        wrapper.style.gap = '8px';
        wrapper.style.alignItems = 'center';
        this.buttonConfig.forEach(btn => {
            const b = document.createElement('button');
            b.id = btn.id;
            b.className = `universal-coa-approval-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-coa-approval-btn-inactive'}`;
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
                const newButton = button.cloneNode(true);
                button.parentNode.replaceChild(newButton, button);
                newButton.addEventListener('click', async (e) => {
                    e.preventDefault();
                    await this.handleButtonClick(btn.moduleType, btn.colorClass);
                });
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
            this.updateButtonStates(moduleType, colorClass);
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
                    button.className = `universal-coa-approval-nav-btn ${activeColorClass}`;
                } else {
                    button.className = `universal-coa-approval-nav-btn universal-coa-approval-btn-inactive`;
                }
            }
        });
    }

    async loadModule(moduleType) {
        const contentContainer = document.getElementById(this.contentContainerId);
        if (!contentContainer) return;
        contentContainer.innerHTML = `
            <div class="bg-gray-800 border border-gray-600 rounded-lg p-8 text-center">
                <i class="fas fa-spinner fa-spin text-green-400 text-3xl mb-4"></i>
                <h3 class="text-white text-xl font-semibold mb-2">Loading Content</h3>
                <p class="text-gray-300">Please wait...</p>
            </div>
        `;
        try {
            let module;
            switch (moduleType) {
                case 'detailed-analysis': module = this.modules.detailedAnalysis; break;
                case 'practical-examples': module = this.modules.practicalExamples; break;
                case 'echelon-analysis': module = this.modules.echelonAnalysis; break;
                default: throw new Error(`Unknown module type: ${moduleType}`);
            }
            if (module && typeof module.getContent === 'function') {
                const content = module.getContent();
                contentContainer.innerHTML = content;
                if (typeof module.initialize === 'function') {
                    module.initialize();
                }
                this.currentModule = moduleType;
                console.log(`✅ Loaded COA Approval module: ${moduleType}`);
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

    getCurrentModule() { return this.currentModule; }
    isInitialized() { return this.initialized; }
}

export default UniversalCOAApprovalButtons;
