/**
 * Universal OPORD Sustainment Button System
 * Lightweight version mirroring Mission/Execution behavior (<=300 lines)
 * - Injects sustainment-specific CSS classes
 * - Renders three-section nav (Detailed, Practical, Echelon)
 * - Loads sustainment section modules dynamically
 * - Targets #universal-sustainment-nav and #sustainment-content-area
 * - Persists state via localStorage keys: opord-sustainment-*
 */

export class UniversalSustainmentButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-sustainment-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-search', colorClass: 'universal-sustainment-btn-blue', isDefault: true },
      { id: 'universal-sustainment-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-file-alt', colorClass: 'universal-sustainment-btn-green', isDefault: false },
      { id: 'universal-sustainment-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-sustainment-btn-purple', isDefault: false }
    ];

    this.storageKeys = {
      active: 'opord-sustainment-active-section',
      detailed: 'opord-sustainment-detailed-analysis',
      practical: 'opord-sustainment-practical-examples',
      echelon: 'opord-sustainment-echelon-analysis'
    };
  }

  async initialize() {
    if (this.initialized) return;
    if (window.__sustainmentButtonsInitializing) return; // prevent parallel inits
    window.__sustainmentButtonsInitializing = true;
    try {
      await this.loadSustainmentModules();
      this.injectCSS();
      await this.createButtonHTML();
      this.restoreState();
      await this.setupEventListeners();
      this.initialized = true;
    } finally {
      window.__sustainmentButtonsInitializing = false;
    }
  }

  restoreState() {
    try {
      // Always default to "detailed-analysis" for consistent user experience across all OPORD sections
      // This ensures the "Detailed Analysis" tab is always the default opening view
      const defaultSection = 'detailed-analysis';
      this.currentSection = defaultSection;
      // Set individual collapsible-like keys for consistency
      localStorage.setItem(this.storageKeys.detailed, String(defaultSection === 'detailed-analysis'));
      localStorage.setItem(this.storageKeys.practical, String(defaultSection === 'practical-examples'));
      localStorage.setItem(this.storageKeys.echelon, String(defaultSection === 'echelon-analysis'));
      // Load immediately for perceived speed
      this.updateButtonStates(defaultSection);
      this.loadModule(defaultSection);
    } catch {
      this.loadDefault();
    }
  }

  async loadSustainmentModules() {
    const [detailed, practical, echelon] = await Promise.all([
      import('./sections/sustainment-detailed-analysis.js'),
      import('./sections/sustainment-practical-examples.js'),
      import('./sections/sustainment-echelon-analysis.js')
    ]);
    this.modules = {
      detailedAnalysis: detailed.detailedAnalysisModule,
      practicalExamples: practical.practicalExamplesModule,
      echelonAnalysis: echelon.echelonAnalysisModule
    };
  }

  injectCSS() {
    if (document.getElementById('universal-sustainment-styles')) return;
    const style = document.createElement('style');
    style.id = 'universal-sustainment-styles';
    style.textContent = `
      .universal-sustainment-nav-btn {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
        border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
        transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
        text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
        background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
      }
      .universal-sustainment-btn-blue { background-color:#2563eb !important; color:#fff !important; border-color:#1d4ed8 !important; }
      .universal-sustainment-btn-blue:hover { background-color:#1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
      .universal-sustainment-btn-green { background-color:#16a34a !important; color:#fff !important; border-color:#15803d !important; }
      .universal-sustainment-btn-green:hover { background-color:#15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-sustainment-btn-purple { background-color:#9333ea !important; color:#fff !important; border-color:#7c3aed !important; }
      .universal-sustainment-btn-purple:hover { background-color:#7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
      .universal-sustainment-btn-inactive { background-color:#4b5563 !important; color:#9ca3af !important; border-color:#374151 !important; opacity:.7 !important; }
      .universal-sustainment-btn-inactive:hover { background-color:#6b7280 !important; transform:none !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);
  }

  async findContainer() {
    for (let i = 0; i < 15; i++) {
      let c = document.getElementById('universal-sustainment-nav');
      if (c) return c;
      c = document.querySelector('#universal-sustainment-nav');
      if (c) return c;
      const workspace = document.getElementById('workspace-content');
      if (workspace) {
        c = workspace.querySelector('#universal-sustainment-nav');
        if (c) return c;
        const all = workspace.querySelectorAll('div[id="universal-sustainment-nav"]');
        if (all && all.length > 0) return all[0];
      }
      await new Promise(r => setTimeout(r, 25 + i * 15));
    }
    // Fallback: insert before sustainment-content-area
    const workspace = document.getElementById('workspace-content');
    if (!workspace) return null;
    const area = workspace.querySelector('#sustainment-content-area');
    if (area && area.parentElement) {
      const fallback = document.createElement('div');
      fallback.id = 'universal-sustainment-nav';
      fallback.style.marginBottom = '16px';
      area.parentElement.insertBefore(fallback, area);
      return fallback;
    }
    return null;
  }

  async createButtonHTML() {
    const nav = await this.findContainer();
    if (!nav) throw new Error('Sustainment nav container not found');

    while (nav.firstChild) nav.removeChild(nav.firstChild);

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.gap = '8px';
    wrapper.style.alignItems = 'center';

    this.buttonConfig.forEach(btn => {
      const b = document.createElement('button');
      b.id = btn.id;
      b.className = `universal-sustainment-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-sustainment-btn-inactive'}`;
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
    const content = document.getElementById('sustainment-content-area');
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
    try {
      localStorage.setItem(this.storageKeys.active, moduleType);
      localStorage.setItem(this.storageKeys.detailed, String(moduleType === 'detailed-analysis'));
      localStorage.setItem(this.storageKeys.practical, String(moduleType === 'practical-examples'));
      localStorage.setItem(this.storageKeys.echelon, String(moduleType === 'echelon-analysis'));
    } catch {}
  }

  updateButtonStates(active) {
    this.buttonConfig.forEach(cfg => {
      const el = document.getElementById(cfg.id);
      if (!el) return;
      el.classList.remove('universal-sustainment-btn-blue', 'universal-sustainment-btn-green', 'universal-sustainment-btn-purple', 'universal-sustainment-btn-inactive');
      el.classList.add(cfg.moduleType === active ? cfg.colorClass : 'universal-sustainment-btn-inactive');
    });
  }

  loadModule(moduleType) {
    const content = document.getElementById('sustainment-content-area');
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
window.universalSustainmentButtons = null;

