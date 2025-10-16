/**
 * Universal OPORD Execution Button System
 * Lightweight version mirroring Mission behavior (<=300 lines)
 * - Injects execution-specific CSS classes
 * - Renders three-section nav (Detailed, Practical, Echelon)
 * - Loads execution section modules dynamically
 * - Targets #universal-execution-nav and #execution-content-area
 */

export class UniversalExecutionButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-execution-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-search', colorClass: 'universal-execution-btn-blue', isDefault: true },
      { id: 'universal-execution-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-file-alt', colorClass: 'universal-execution-btn-green', isDefault: false },
      { id: 'universal-execution-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-execution-btn-purple', isDefault: false }
    ];
  }

  async initialize() {
    if (this.initialized) return;
    if (window.__executionButtonsInitializing) return; // prevent parallel inits (Firefox)
    window.__executionButtonsInitializing = true;
    try {
      await this.loadExecutionModules();
      this.injectCSS();
      await this.createButtonHTML();
      // Load default content ASAP for perceived speed, then attach listeners
      this.loadDefault();
      await this.setupEventListeners();
      this.initialized = true;
      // Prefetch remaining modules after first paint to avoid blocking
      this.prefetchSecondaryModules();
    } finally {
      window.__executionButtonsInitializing = false;
    }
  }

  // Micro-optimizations for initial content load
  getDefaultModule() { return this.modules?.detailedAnalysis; }

  prefetchSecondaryModules() {
    // Yield to paint, then prefetch practical/echelon to match Mission speed
    const prefetch = () => {
      try {
        import('./sections/execution-practical-examples.js');
        import('./sections/execution-echelon-analysis.js');
      } catch {}
    };

    // Use requestIdleCallback if available, otherwise fallback to setTimeout
    if (window.requestIdleCallback) {
      window.requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 0);
    }
  }

  async loadExecutionModules() {
    const [detailed, practical, echelon] = await Promise.all([
      import('./sections/execution-detailed-analysis.js'),
      import('./sections/execution-practical-examples.js'),
      import('./sections/execution-echelon-analysis.js')
    ]);
    this.modules = {
      detailedAnalysis: detailed.detailedAnalysisModule,
      practicalExamples: practical.practicalExamplesModule,
      echelonAnalysis: echelon.echelonAnalysisModule
    };
  }

  injectCSS() {
    if (document.getElementById('universal-execution-styles')) return;
    const style = document.createElement('style');
    style.id = 'universal-execution-styles';
    style.textContent = `
      .universal-execution-nav-btn {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
        border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
        transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
        text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
        background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
      }
      .universal-execution-btn-blue { background-color: #2563eb !important; color: #fff !important; border-color: #1d4ed8 !important; }
      .universal-execution-btn-blue:hover { background-color: #1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
      .universal-execution-btn-green { background-color: #16a34a !important; color: #fff !important; border-color: #15803d !important; }
      .universal-execution-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-execution-btn-purple { background-color: #9333ea !important; color: #fff !important; border-color: #7c3aed !important; }
      .universal-execution-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
      .universal-execution-btn-orange { background-color: #f97316 !important; color: #fff !important; border-color: #ea580c !important; }
      .universal-execution-btn-orange:hover { background-color: #ea580c !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(249,115,22,.4) !important; }
      .universal-execution-btn-inactive { background-color: #4b5563 !important; color: #9ca3af !important; border-color: #374151 !important; opacity: .7 !important; }
      .universal-execution-btn-inactive:hover { background-color: #6b7280 !important; transform:none !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);
  }

  async findContainer() {
    // Try multiple strategies similar to Mission for robustness
    for (let i = 0; i < 15; i++) {
      // Method 1: direct
      let c = document.getElementById('universal-execution-nav');
      if (c) return c;

      // Method 2: querySelector
      c = document.querySelector('#universal-execution-nav');
      if (c) return c;

      // Method 3: search inside workspace
      const workspace = document.getElementById('workspace-content');
      if (workspace) {
        c = workspace.querySelector('#universal-execution-nav');
        if (c) return c;

        // Method 4: deep search with exact id
        const all = workspace.querySelectorAll('div[id="universal-execution-nav"]');
        if (all && all.length > 0) return all[0];
      }

      await new Promise(r => setTimeout(r, 25 + i * 15));
    }

    // Final fallback: try to create within the execution module wrapper if present
    return this.createFallbackContainer();
  }

  createFallbackContainer() {
    const workspace = document.getElementById('workspace-content');
    if (!workspace) return null;

    // Prefer to insert right before execution-content-area within the execution module
    const executionArea = workspace.querySelector('#execution-content-area');
    if (executionArea && executionArea.parentElement) {
      const fallback = document.createElement('div');
      fallback.id = 'universal-execution-nav';
      fallback.style.marginBottom = '16px';
      executionArea.parentElement.insertBefore(fallback, executionArea);
      return fallback;
    }
    return null;
  }

  async createButtonHTML() {
    const nav = await this.findContainer();
    if (!nav) throw new Error('Execution nav container not found');

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
      b.className = `universal-execution-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-execution-btn-inactive'}`;
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

      const clone = el.cloneNode(true);
      el.replaceWith(clone);
      clone.addEventListener('click', handler, { passive: false });
      clone.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(e); } });
    });
  }

  loadDefault() {
    // Render a minimal skeleton immediately for perceived performance
    const content = document.getElementById('execution-content-area');
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
      el.classList.remove('universal-execution-btn-blue', 'universal-execution-btn-green', 'universal-execution-btn-purple', 'universal-execution-btn-orange', 'universal-execution-btn-inactive');
      el.classList.add(cfg.moduleType === active ? cfg.colorClass : 'universal-execution-btn-inactive');
    });
  }

  loadModule(moduleType) {
    const content = document.getElementById('execution-content-area');
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
}

// Optional global for quick manual testing
window.universalExecutionButtons = null;
