/**
 * Universal MDMP Course of Action Approval Button System
 * Mirrors MDMP Step 5 architecture
 */

export class UniversalCourseOfActionApprovalButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.currentModule = null; // Track for cleanup
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-coa-approval-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-clipboard-check', colorClass: 'universal-coa-approval-btn-blue', isDefault: true },
      { id: 'universal-coa-approval-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-file-alt', colorClass: 'universal-coa-approval-btn-green', isDefault: false },
      { id: 'universal-coa-approval-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-coa-approval-btn-purple', isDefault: false }
    ];
  }

  async loadModules() {
    const [detailed, practical, echelon] = await Promise.all([
      import('./sections/coa-approval-detailed-analysis.js'),
      import('./sections/coa-approval-practical-examples.js'),
      import('./sections/coa-approval-echelon-analysis.js')
    ]);
    this.modules = {
      detailedAnalysis: detailed.coaApprovalDetailedAnalysisModule,
      practicalExamples: practical.coaApprovalPracticalExamplesModule,
      echelonAnalysis: echelon.coaApprovalEchelonAnalysisModule
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
      .universal-coa-approval-btn-blue { background-color: #1d4ed8 !important; color: #fff !important; border-color: #1d4ed8 !important; }
      .universal-coa-approval-btn-blue:hover { background-color: #1e40af !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(29,78,216,.4) !important; }
      .universal-coa-approval-btn-green { background-color: #16a34a !important; color: #fff !important; border-color: #16a34a !important; }
      .universal-coa-approval-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-coa-approval-btn-purple { background-color: #9333ea !important; color: #fff !important; border-color: #9333ea !important; }
      .universal-coa-approval-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(124,58,237,.4) !important; }
      .universal-coa-approval-btn-inactive { background-color: transparent !important; color: #d1d5db !important; border-color: #4b5563 !important; }
      .universal-coa-approval-btn-inactive:hover { background-color: #374151 !important; color: #fff !important; }
    `;
    document.head.appendChild(style);
  }

  async renderButtons() {
    const nav = document.getElementById('universal-coa-approval-nav');
    if (!nav) throw new Error('COA approval nav container not found');

    nav.textContent = '';
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

  async bindEvents() {
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
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(e); }
      });
    });
  }

  switchTo(moduleType) {
    if (this.currentSection === moduleType) return;
    this.buttonConfig.forEach(cfg => {
      const btn = document.getElementById(cfg.id);
      if (!btn) return;
      btn.className = (cfg.moduleType === moduleType)
        ? `universal-coa-approval-nav-btn ${cfg.colorClass}`
        : 'universal-coa-approval-nav-btn universal-coa-approval-btn-inactive';
    });
    this.currentSection = moduleType;
    this.loadContent(moduleType);
  }

  loadContent(moduleType) {
    const content = document.getElementById('coa-approval-content-area');
    if (!content) return;

    if (this.currentModule && this.currentModule.cleanup) this.currentModule.cleanup();

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
    await this.loadModules();
    this.injectCSS();
    await this.renderButtons();
    await this.bindEvents();

    const defaultBtn = this.buttonConfig.find(btn => btn.isDefault);
    if (defaultBtn) this.switchTo(defaultBtn.moduleType);
    this.initialized = true;
  }
}

