/**
 * Universal MDMP Course of Action Development Button System
 * Mirrors MDMP UniversalMissionAnalysisButtons.js architecture with exact visual matching
 * - Injects COA-development-specific CSS classes matching OPORD execution styling
 * - Renders three-section nav (Detailed, Practical, Echelon)
 * - Loads COA development section modules dynamically
 * - Targets #universal-coa-nav and #coa-content-area
 * - Teal/cyan theme (#0891b2) for Course of Action Development
 */

export class UniversalCourseOfActionDevelopmentButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-coa-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-route', colorClass: 'universal-coa-btn-blue', isDefault: true },
      { id: 'universal-coa-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-file-alt', colorClass: 'universal-coa-btn-green', isDefault: false },
      { id: 'universal-coa-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-coa-btn-purple', isDefault: false }
    ];
  }

  async loadCOADevelopmentModules() {
    const [detailed, practical, echelon] = await Promise.all([
      import('./sections/coa-detailed-analysis.js'),
      import('./sections/coa-practical-examples.js'),
      import('./sections/coa-echelon-analysis.js')
    ]);
    this.modules = {
      detailedAnalysis: detailed.coaDetailedAnalysisModule,
      practicalExamples: practical.coaPracticalExamplesModule,
      echelonAnalysis: echelon.coaEchelonAnalysisModule
    };
  }

  injectCSS() {
    if (document.getElementById('universal-coa-styles')) return;
    const style = document.createElement('style');
    style.id = 'universal-coa-styles';
    style.textContent = `
      .universal-coa-nav-btn {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
        border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
        transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
        text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
        background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
      }
      .universal-coa-btn-teal { background-color: #0891b2 !important; color: #fff !important; border-color: #0e7490 !important; }
      .universal-coa-btn-teal:hover { background-color: #0e7490 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(8,145,178,.4) !important; }
      .universal-coa-btn-green { background-color: #16a34a !important; color: #fff !important; border-color: #15803d !important; }
      .universal-coa-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-coa-btn-purple { background-color: #9333ea !important; color: #fff !important; border-color: #7c3aed !important; }
      .universal-coa-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
      .universal-coa-btn-blue { background-color: #1d4ed8 !important; color: #fff !important; border-color: #1d4ed8 !important; }
      .universal-coa-btn-blue:hover { background-color: #1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(59,130,246,.4) !important; }
      .universal-coa-btn-inactive { background-color: #4b5563 !important; color: #9ca3af !important; border-color: #374151 !important; opacity: .7 !important; }
      .universal-coa-btn-inactive:hover { background-color: #6b7280 !important; transform:none !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);
  }

  async findContainer() {
    // Try multiple strategies similar to OPORD execution for robustness
    for (let i = 0; i < 15; i++) {
      // Method 1: direct
      let c = document.getElementById('universal-coa-nav');
      if (c) return c;

      // Method 2: querySelector
      c = document.querySelector('#universal-coa-nav');
      if (c) return c;

      // Method 3: search inside workspace
      const workspace = document.getElementById('workspace-content');
      if (workspace) {
        c = workspace.querySelector('#universal-coa-nav');
        if (c) return c;

        // Method 4: deep search with exact id
        const all = workspace.querySelectorAll('div[id="universal-coa-nav"]');
        if (all && all.length > 0) return all[0];
      }

      // Wait and retry
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    // Fallback: create container if COA content area exists
    const coaArea = document.getElementById('coa-content-area');
    if (coaArea) {
      const fallback = document.createElement('div');
      fallback.id = 'universal-coa-nav';
      fallback.style.marginBottom = '16px';
      coaArea.parentElement.insertBefore(fallback, coaArea);
      return fallback;
    }
    return null;
  }

  async createButtonHTML() {
    const nav = await this.findContainer();
    if (!nav) throw new Error('COA development nav container not found');

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
      b.className = `universal-coa-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-coa-btn-inactive'}`;
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
    // wait till rendered
    for (let i = 0; i < 10; i++) {
      const ready = this.buttonConfig.every(b => document.getElementById(b.id));
      if (ready) break; else await new Promise(r => setTimeout(r, 25));
    }

    // Remove any existing listeners by replacing nodes once per id
    this.buttonConfig.forEach(cfg => {
      const el = document.getElementById(cfg.id);
      if (!el) return;

      // Ensure single handler per button
      const handler = (e) => { e.preventDefault(); e.stopPropagation(); this.switchTo(cfg.moduleType); };
      
      // Replace element to remove all existing listeners
      const newEl = el.cloneNode(true);
      el.parentNode.replaceChild(newEl, el);
      
      // Add single clean listener
      newEl.addEventListener('click', handler);
      newEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler(e);
        }
      });
    });
  }

  updateButtonStates(moduleType) {
    // Update button visual states
    this.buttonConfig.forEach(cfg => {
      const btn = document.getElementById(cfg.id);
      if (!btn) return;

      if (cfg.moduleType === moduleType) {
        // Activate this button
        btn.className = `universal-coa-nav-btn ${cfg.colorClass}`;
      } else {
        // Deactivate other buttons
        btn.className = 'universal-coa-nav-btn universal-coa-btn-inactive';
      }
    });
  }

  switchTo(moduleType) {
    if (this.currentSection === moduleType) return;

    this.updateButtonStates(moduleType);
    this.currentSection = moduleType;
    this.loadContent(moduleType);
  }

  loadContent(moduleType) {
    const content = document.getElementById('coa-content-area');
    if (!content) return;

    // Clean any pending timers or previous content to keep Firefox from stacking state
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

  async initialize() {
    if (this.initialized) return;

    try {
      console.log('🔧 Initializing Universal COA Development Button System...');
      
      await this.loadCOADevelopmentModules();
      this.injectCSS();
      await this.createButtonHTML();
      await this.setupEventListeners();
      
      // Check if detailed analysis content is already pre-loaded
      const contentArea = document.getElementById('coa-content-area');
      const hasPreloadedContent = contentArea && contentArea.querySelector('#coa-detailed-analysis-section');

      const defaultBtn = this.buttonConfig.find(btn => btn.isDefault);
      if (defaultBtn) {
        if (hasPreloadedContent && defaultBtn.moduleType === 'detailed-analysis') {
          console.log('✅ Detailed analysis content already pre-loaded, updating button states only');
          // Just update button states without reloading content
          this.currentSection = defaultBtn.moduleType;
          this.updateButtonStates(defaultBtn.moduleType);
        } else {
          console.log(`🎯 Loading default section: ${defaultBtn.moduleType}`);
          this.switchTo(defaultBtn.moduleType);
        }
      } else {
        console.warn('⚠️ No default button found in buttonConfig');
      }
      
      this.initialized = true;
      console.log('✅ Universal COA Development Button System initialized');
    } catch (error) {
      console.error('❌ Failed to initialize Universal COA Development Button System:', error);
      throw error;
    }
  }
}
