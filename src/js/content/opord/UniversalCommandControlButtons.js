/**
 * Universal Command Control Button System
 * Framework-only implementation following established patterns from Sections 1-4
 * Provides navigation between Command Control section modules:
 * - Detailed Analysis
 * - Practical Examples  
 * - Echelon Analysis
 * 
 * Maintains CSP compliance with no inline scripts
 * Integrates with existing OPORD navigation architecture
 */

export class UniversalCommandControlButtons {
    constructor() {
        this.initialized = false;
        this.currentSection = 'detailed-analysis';
        this.modules = {};
        this.buttonConfig = [
            { id: 'universal-c2-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-search', colorClass: 'universal-c2-btn-blue', isDefault: true },
            { id: 'universal-c2-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-file-alt', colorClass: 'universal-c2-btn-green', isDefault: false },
            { id: 'universal-c2-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-c2-btn-purple', isDefault: false }
        ];
    }

    async initialize() {
        if (this.initialized) return;
        if (window.__c2ButtonsInitializing) return; // prevent parallel inits
        window.__c2ButtonsInitializing = true;
        try {
            await this.loadC2Modules();
            this.injectCSS();
            await this.createButtonHTML();
            // Load default content ASAP for perceived speed, then attach listeners
            this.loadDefault();
            await this.setupEventListeners();
            this.initialized = true;
        } finally {
            window.__c2ButtonsInitializing = false;
        }
    }

    async loadC2Modules() {
        const [detailed, practical, echelon] = await Promise.all([
            import('./sections/command-control-detailed-analysis.js'),
            import('./sections/command-control-practical-examples.js'),
            import('./sections/command-control-echelon-analysis.js')
        ]);
        this.modules = {
            detailedAnalysis: detailed.detailedAnalysisModule,
            practicalExamples: practical.practicalExamplesModule,
            echelonAnalysis: echelon.echelonAnalysisModule
        };
    }

    injectCSS() {
        if (document.getElementById('universal-c2-styles')) return;
        const style = document.createElement('style');
        style.id = 'universal-c2-styles';
        style.textContent = `
          .universal-c2-nav-btn {
            display: inline-flex !important; align-items: center !important; justify-content: center !important;
            padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
            border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
            transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
            text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
            background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
          }
          .universal-c2-btn-blue { background-color:#2563eb !important; color:#fff !important; border-color:#1d4ed8 !important; }
          .universal-c2-btn-blue:hover { background-color:#1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
          .universal-c2-btn-green { background-color:#16a34a !important; color:#fff !important; border-color:#15803d !important; }
          .universal-c2-btn-green:hover { background-color:#15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
          .universal-c2-btn-purple { background-color:#9333ea !important; color:#fff !important; border-color:#7c3aed !important; }
          .universal-c2-btn-purple:hover { background-color:#7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
          .universal-c2-btn-inactive { background-color:#4b5563 !important; color:#9ca3af !important; border-color:#374151 !important; opacity:.7 !important; }
          .universal-c2-btn-inactive:hover { background-color:#6b7280 !important; transform:none !important; box-shadow:none !important; }
        `;
        document.head.appendChild(style);
    }

    async findContainer() {
        for (let i = 0; i < 15; i++) {
            let c = document.getElementById('universal-command-control-nav');
            if (c) return c;
            c = document.querySelector('#universal-command-control-nav');
            if (c) return c;
            const workspace = document.getElementById('workspace-content');
            if (workspace) {
                c = workspace.querySelector('#universal-command-control-nav');
                if (c) return c;
                const all = workspace.querySelectorAll('div[id="universal-command-control-nav"]');
                if (all && all.length > 0) return all[0];
            }
            await new Promise(r => setTimeout(r, 25 + i * 15));
        }
        // Fallback: insert before command-control-content-area
        const workspace = document.getElementById('workspace-content');
        if (!workspace) return null;
        const area = workspace.querySelector('#command-control-content-area');
        if (area && area.parentElement) {
            const fallback = document.createElement('div');
            fallback.id = 'universal-command-control-nav';
            fallback.style.marginBottom = '16px';
            area.parentElement.insertBefore(fallback, area);
            return fallback;
        }
        return null;
    }

    async createButtonHTML() {
        const nav = await this.findContainer();
        if (!nav) throw new Error('Navigation container not found');

        while (nav.firstChild) nav.removeChild(nav.firstChild);

        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexWrap = 'wrap';
        wrapper.style.gap = '8px';
        wrapper.style.alignItems = 'center';

        this.buttonConfig.forEach(btn => {
            const b = document.createElement('button');
            b.id = btn.id;
            b.className = `universal-c2-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-c2-btn-inactive'}`;
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
        for (let i = 0; i < 10; i++) {
            const ready = this.buttonConfig.every(b => document.getElementById(b.id));
            if (ready) break; else await new Promise(r => setTimeout(r, 25));
        }

        this.buttonConfig.forEach(cfg => {
            const el = document.getElementById(cfg.id);
            if (!el) return;
            const handler = (e) => { e.preventDefault(); e.stopPropagation(); this.switchTo(cfg.moduleType); };
            const clone = el.cloneNode(true);
            el.replaceWith(clone);
            clone.addEventListener('click', handler, { passive: false });
            clone.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(e); } });
        });
    }

    loadDefault() {
        const content = document.getElementById('command-control-content-area');
        if (content) {
            content.innerHTML = '<div style="height:8px; background:#374151; border-radius:4px; margin-bottom:8px;"></div>' +
              '<div style="height:8px; background:#374151; border-radius:4px; width:80%; margin-bottom:16px;"></div>' +
              '<div style="height:140px; background:#1f2937; border:1px solid #374151; border-radius:8px;"></div>';
        }
        const def = this.buttonConfig.find(b => b.isDefault);
        if (def) this.loadModule(def.moduleType);
    }

    switchTo(moduleType) {
        this.updateButtonStates(moduleType);
        this.loadModule(moduleType);
        this.currentSection = moduleType;
    }

    updateButtonStates(active) {
        this.buttonConfig.forEach(cfg => {
            const el = document.getElementById(cfg.id);
            if (!el) return;
            el.classList.remove('universal-c2-btn-blue', 'universal-c2-btn-green', 'universal-c2-btn-purple', 'universal-c2-btn-inactive');
            el.classList.add(cfg.moduleType === active ? cfg.colorClass : 'universal-c2-btn-inactive');
        });
    }

    loadModule(moduleType) {
        const content = document.getElementById('command-control-content-area');
        if (!content) return;
        if (this._initTimer) clearTimeout(this._initTimer);
        content.textContent = '';

        let mod;
        switch (moduleType) {
            case 'detailed-analysis': mod = this.modules.detailedAnalysis; break;
            case 'practical-examples': mod = this.modules.practicalExamples; break;
            case 'echelon-analysis': mod = this.modules.echelonAnalysis; break;
            default: return;
        }
        if (mod && mod.getContent) {
            content.innerHTML = mod.getContent();
            if (mod.initialize) this._initTimer = setTimeout(() => mod.initialize(), 50);
        }
    }
}

// Optional global for quick manual testing
window.universalCommandControlButtons = null;

export default UniversalCommandControlButtons;
