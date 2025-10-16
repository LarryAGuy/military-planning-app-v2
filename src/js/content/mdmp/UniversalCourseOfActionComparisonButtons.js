/**
 * Universal MDMP Course of Action Comparison Button System
 * Mirrors MDMP Step 4 architecture with exact visual matching
 * - Injects COA-comparison-specific CSS classes matching OPORD execution styling
 * - Renders three-section nav (Detailed, Practical, Echelon)
 * - Loads COA comparison section modules dynamically
 * - Targets #universal-coa-comparison-nav and #coa-comparison-content-area
 * - Event isolation, cleanup, and sidebar protections included
 */

export class UniversalCourseOfActionComparisonButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.currentModule = null; // Track for cleanup
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-coa-comparison-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-clipboard-list', colorClass: 'universal-coa-comparison-btn-blue', isDefault: true },
      { id: 'universal-coa-comparison-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-file-alt', colorClass: 'universal-coa-comparison-btn-green', isDefault: false },
      { id: 'universal-coa-comparison-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-coa-comparison-btn-purple', isDefault: false }
    ];
  }

  async loadCOAComparisonModules() {
    const [detailed, practical, echelon] = await Promise.all([
      import('./sections/coa-comparison-detailed-analysis.js'),
      import('./sections/coa-comparison-practical-examples.js'),
      import('./sections/coa-comparison-echelon-analysis.js')
    ]);
    this.modules = {
      detailedAnalysis: detailed.coaComparisonDetailedAnalysisModule,
      practicalExamples: practical.coaComparisonPracticalExamplesModule,
      echelonAnalysis: echelon.coaComparisonEchelonAnalysisModule
    };
  }

  injectCSS() {
    if (document.getElementById('universal-coa-comparison-styles')) return;
    const style = document.createElement('style');
    style.id = 'universal-coa-comparison-styles';
    style.textContent = `
      .universal-coa-comparison-nav-btn {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
        border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
        transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
        text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
        background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
      }
      .universal-coa-comparison-btn-blue { background-color: #1d4ed8 !important; color: #fff !important; border-color: #1d4ed8 !important; }
      .universal-coa-comparison-btn-blue:hover { background-color: #1e40af !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(29,78,216,.4) !important; }
      .universal-coa-comparison-btn-green { background-color: #16a34a !important; color: #fff !important; border-color: #16a34a !important; }
      .universal-coa-comparison-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-coa-comparison-btn-purple { background-color: #9333ea !important; color: #fff !important; border-color: #9333ea !important; }
      .universal-coa-comparison-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(124,58,237,.4) !important; }
      .universal-coa-comparison-btn-inactive { background-color: transparent !important; color: #d1d5db !important; border-color: #4b5563 !important; }
      .universal-coa-comparison-btn-inactive:hover { background-color: #374151 !important; color: #fff !important; }
    `;
    document.head.appendChild(style);
  }

  async createButtonHTML() {
    const nav = document.getElementById('universal-coa-comparison-nav');
    if (!nav) throw new Error('COA comparison nav container not found');

    while (nav.firstChild) nav.removeChild(nav.firstChild);

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.gap = '8px';
    wrapper.style.alignItems = 'center';

    this.buttonConfig.forEach(btn => {
      const b = document.createElement('button');
      b.id = btn.id;
      b.className = `universal-coa-comparison-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-coa-comparison-btn-inactive'}`;
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

      const handler = (e) => { e.preventDefault(); e.stopPropagation(); e.stopImmediatePropagation(); this.switchTo(cfg.moduleType); };

      const clone = el.cloneNode(true);
      el.replaceWith(clone);

      clone.addEventListener('click', handler, { passive: false });
      clone.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler(e);
        }
      });
    });
  }

  updateButtonStates(moduleType) {
    this.buttonConfig.forEach(cfg => {
      const btn = document.getElementById(cfg.id);
      if (!btn) return;
      btn.className = (cfg.moduleType === moduleType)
        ? `universal-coa-comparison-nav-btn ${cfg.colorClass}`
        : 'universal-coa-comparison-nav-btn universal-coa-comparison-btn-inactive';
    });
  }

  switchTo(moduleType) {
    if (this.currentSection === moduleType) return;

    this.updateButtonStates(moduleType);
    this.currentSection = moduleType;
    this.loadContent(moduleType);
  }

  loadContent(moduleType) {
    const content = document.getElementById('coa-comparison-content-area');
    if (!content) return;

    if (this.currentModule && this.currentModule.cleanup) {
      this.currentModule.cleanup();
    }

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
      this.currentModule = mod;
      content.innerHTML = mod.getContent();
      if (mod.initialize) this._initTimer = setTimeout(() => mod.initialize(), 50);
    }
  }

  async initialize() {
    if (this.initialized) return;

    try {
      await this.loadCOAComparisonModules();
      this.injectCSS();
      await this.createButtonHTML();
      await this.setupEventListeners();

      // Check if detailed analysis content is already pre-loaded
      const contentArea = document.getElementById('coa-comparison-content-area');
      const hasPreloadedContent = contentArea && contentArea.querySelector('#coa-comparison-detailed-analysis-section');

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
    } catch (error) {
      console.error('❌ Failed to initialize Universal COA Comparison Button System:', error);
      throw error;
    }
  }
}

