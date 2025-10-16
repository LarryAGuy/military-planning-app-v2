/**
 * Universal OPORD Annexes Button System
 * Mirrors Mission/Situation universal button systems
 * - Injects annexes-specific CSS classes
 * - Renders three-section nav (Detailed, Practical, Echelon)
 * - Loads annexes section modules dynamically
 * - Targets #universal-annexes-nav and #annexes-content-area
 */

export class UniversalAnnexesButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.modules = {};
    this.storageKeys = {
      detailed: 'annexes-detailed-analysis',
      practical: 'annexes-practical-examples',
      echelon: 'annexes-echelon-analysis'
    };
    this.buttonConfig = [
      { id: 'universal-annexes-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-search', colorClass: 'universal-annexes-btn-blue', isDefault: true },
      { id: 'universal-annexes-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-file-alt', colorClass: 'universal-annexes-btn-green', isDefault: false },
      { id: 'universal-annexes-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-annexes-btn-purple', isDefault: false }
    ];
  }

  async initialize() {
    if (this.initialized) return;
    if (window.__annexesButtonsInitializing) return;
    window.__annexesButtonsInitializing = true;
    try {
      await this.loadAnnexesModules();
      this.injectCSS();
      await this.createButtonHTML();
      this.loadDefault();
      await this.setupEventListeners();
      this.initialized = true;
      this.prefetchSecondaryModules();
    } finally {
      window.__annexesButtonsInitializing = false;
    }
  }

  getDefaultModule() { return this.modules?.detailedAnalysis; }

  prefetchSecondaryModules() {
    const prefetch = () => {
      try {
        import('./sections/annexes-practical-examples.js');
        import('./sections/annexes-echelon-analysis.js');
      } catch {}
    };

    // Use requestIdleCallback if available, otherwise fallback to setTimeout
    if (window.requestIdleCallback) {
      window.requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 0);
    }
  }

  async loadAnnexesModules() {
    const [detailed, practical, echelon] = await Promise.all([
      import('./sections/annexes-detailed-analysis.js'),
      import('./sections/annexes-practical-examples.js'),
      import('./sections/annexes-echelon-analysis.js')
    ]);
    this.modules = {
      detailedAnalysis: detailed.detailedAnalysisModule,
      practicalExamples: practical.practicalExamplesModule,
      echelonAnalysis: echelon.echelonAnalysisModule
    };
  }

  injectCSS() {
    if (document.getElementById('universal-annexes-styles')) return;
    const style = document.createElement('style');
    style.id = 'universal-annexes-styles';
    style.textContent = `
      .universal-annexes-nav-btn {
        display:inline-flex !important; align-items:center !important; justify-content:center !important;
        padding:7px 14px !important; font-size:14px !important; font-weight:600 !important;
        border-radius:6px !important; border:2px solid transparent !important; cursor:pointer !important;
        transition:all .3s ease !important; user-select:none !important; white-space:nowrap !important;
        text-decoration:none !important; outline:none !important; margin-right:12px !important; margin-bottom:8px !important;
        background:none !important; font-family:inherit !important; box-sizing:border-box !important; vertical-align:top !important;
      }
      .universal-annexes-btn-blue { background-color:#2563eb !important; color:#fff !important; border-color:#1d4ed8 !important; }
      .universal-annexes-btn-blue:hover { background-color:#1d4ed8 !important; transform:translateY(-2px) !important; box-shadow:0 4px 12px rgba(37,99,235,.4) !important; }
      .universal-annexes-btn-green { background-color:#16a34a !important; color:#fff !important; border-color:#15803d !important; }
      .universal-annexes-btn-green:hover { background-color:#15803d !important; transform:translateY(-2px) !important; box-shadow:0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-annexes-btn-purple { background-color:#9333ea !important; color:#fff !important; border-color:#7c3aed !important; }
      .universal-annexes-btn-purple:hover { background-color:#7c3aed !important; transform:translateY(-2px) !important; box-shadow:0 4px 12px rgba(147,51,234,.4) !important; }
      .universal-annexes-btn-inactive { background-color:#4b5563 !important; color:#9ca3af !important; border-color:#374151 !important; opacity:.7 !important; }
      .universal-annexes-btn-inactive:hover { background-color:#6b7280 !important; transform:none !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);
  }

  async findContainer() {
    for (let i = 0; i < 15; i++) {
      let c = document.getElementById('universal-annexes-nav');
      if (c) return c;
      c = document.querySelector('#universal-annexes-nav');
      if (c) return c;
      const workspace = document.getElementById('workspace-content');
      if (workspace) {
        c = workspace.querySelector('#universal-annexes-nav');
        if (c) return c;
        const all = workspace.querySelectorAll('div[id="universal-annexes-nav"]');
        if (all && all.length > 0) return all[0];
      }
      await new Promise(r => setTimeout(r, 25 + i * 15));
    }
    return this.createFallbackContainer();
  }

  createFallbackContainer() {
    const workspace = document.getElementById('workspace-content');
    if (!workspace) return null;
    const area = workspace.querySelector('#annexes-content-area');
    if (area && area.parentElement) {
      const fallback = document.createElement('div');
      fallback.id = 'universal-annexes-nav';
      fallback.style.marginBottom = '16px';
      area.parentElement.insertBefore(fallback, area);
      return fallback;
    }
    return null;
  }

  async createButtonHTML() {
    const nav = await this.findContainer();
    if (!nav) throw new Error('Annexes nav container not found');
    while (nav.firstChild) nav.removeChild(nav.firstChild);

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.gap = '8px';
    wrapper.style.alignItems = 'center';

    this.buttonConfig.forEach(btn => {
      const b = document.createElement('button');
      b.id = btn.id;
      b.className = `universal-annexes-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-annexes-btn-inactive'}`;
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

  readPersistedSection() {
    try {
      if (localStorage.getItem(this.storageKeys.practical) === 'true') return 'practical-examples';
      if (localStorage.getItem(this.storageKeys.echelon) === 'true') return 'echelon-analysis';
      if (localStorage.getItem(this.storageKeys.detailed) === 'false') return 'detailed-analysis';
    } catch {}
    return null;
  }

  persistSection(moduleType) {
    try {
      localStorage.setItem(this.storageKeys.detailed, String(moduleType === 'detailed-analysis'));
      localStorage.setItem(this.storageKeys.practical, String(moduleType === 'practical-examples'));
      localStorage.setItem(this.storageKeys.echelon, String(moduleType === 'echelon-analysis'));
    } catch {}
  }

  loadDefault() {
    const content = document.getElementById('annexes-content-area');
    if (content) {
      content.innerHTML = '<div style="height:8px; background:#374151; border-radius:4px; margin-bottom:8px;"></div>' +
        '<div style="height:8px; background:#374151; border-radius:4px; width:80%; margin-bottom:16px;"></div>' +
        '<div style="height:140px; background:#1f2937; border:1px solid #374151; border-radius:8px;"></div>';
    }
    // Always default to "detailed-analysis" for consistent user experience across all OPORD sections
    // This ensures the "Detailed Analysis" tab is always the default opening view
    const target = this.buttonConfig.find(b => b.isDefault)?.moduleType || 'detailed-analysis';
    if (target) this.loadModule(target);
  }

  switchTo(moduleType) {
    this.updateButtonStates(moduleType);
    this.loadModule(moduleType);
    this.persistSection(moduleType);
    this.currentSection = moduleType;
  }

  updateButtonStates(active) {
    this.buttonConfig.forEach(cfg => {
      const el = document.getElementById(cfg.id);
      if (!el) return;
      el.classList.remove('universal-annexes-btn-blue', 'universal-annexes-btn-green', 'universal-annexes-btn-purple', 'universal-annexes-btn-inactive');
      el.classList.add(cfg.moduleType === active ? cfg.colorClass : 'universal-annexes-btn-inactive');
    });
  }

  loadModule(moduleType) {
    const content = document.getElementById('annexes-content-area');
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
window.universalAnnexesButtons = null;

