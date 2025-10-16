/**
 * Universal JPP Step 1: Planning Initiation Button System
 * Lightweight version mirroring OPORD Mission behavior (<=300 lines)
 * - Injects planning-specific CSS classes
 * - Renders three-section nav (Detailed, Practical, Echelon)
 * - Loads planning section modules dynamically
 * - Targets #universal-planning-initiation-nav and #planning-initiation-content-area
 */

export class UniversalPlanningInitiationButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-planning-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-flag', colorClass: 'universal-planning-btn-green', isDefault: true },
      { id: 'universal-planning-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-book-open', colorClass: 'universal-planning-btn-blue', isDefault: false },
      { id: 'universal-planning-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-planning-btn-purple', isDefault: false }
    ];
  }

  async initialize() {
    if (this.initialized) return;
    if (window.__planningInitiationButtonsInitializing) return; // prevent parallel inits (Firefox)
    window.__planningInitiationButtonsInitializing = true;
    try {
      await this.loadPlanningInitiationModules();
      this.injectCSS();
      await this.createButtonHTML();
      // Load default content ASAP for perceived speed, then attach listeners
      this.loadDefault();
      await this.setupEventListeners();
      this.initialized = true;
      // Prefetch remaining modules after first paint to avoid blocking
      this.prefetchSecondaryModules();
    } finally {
      window.__planningInitiationButtonsInitializing = false;
    }
  }

  // Micro-optimizations for initial content load
  getDefaultModule() { return this.modules?.detailedAnalysis; }

  prefetchSecondaryModules() {
    // Yield to paint, then prefetch practical/echelon to match OPORD speed
    const prefetch = () => {
      try {
        import('./sections/planning-initiation-practical-examples.js');
        import('./sections/planning-initiation-echelon-analysis.js');
      } catch {}
    };

    // Use requestIdleCallback if available, otherwise fallback to setTimeout
    if (window.requestIdleCallback) {
      window.requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 0);
    }
  }

  async loadPlanningInitiationModules() {
    const [detailed, practical, echelon] = await Promise.all([
      import('./sections/planning-initiation-detailed-analysis.js'),
      import('./sections/planning-initiation-practical-examples.js'),
      import('./sections/planning-initiation-echelon-analysis.js')
    ]);
    this.modules = {
      detailedAnalysis: detailed.detailedAnalysisModule,
      practicalExamples: practical.practicalExamplesModule,
      echelonAnalysis: echelon.echelonAnalysisModule
    };
  }

  injectCSS() {
    if (document.getElementById('universal-planning-initiation-styles')) return;
    const style = document.createElement('style');
    style.id = 'universal-planning-initiation-styles';
    style.textContent = `
      .universal-planning-nav-btn {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
        border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
        transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
        text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
        background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
      }
      .universal-planning-btn-green { background-color: #16a34a !important; color: #fff !important; border-color: #15803d !important; }
      .universal-planning-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-planning-btn-blue { background-color: #2563eb !important; color: #fff !important; border-color: #1d4ed8 !important; }
      .universal-planning-btn-blue:hover { background-color: #1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
      .universal-planning-btn-purple { background-color: #9333ea !important; color: #fff !important; border-color: #7c3aed !important; }
      .universal-planning-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
      .universal-planning-btn-inactive { background-color: #4b5563 !important; color: #9ca3af !important; border-color: #374151 !important; opacity: .7 !important; }
      .universal-planning-btn-inactive:hover { background-color: #6b7280 !important; transform:none !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);
  }

  async findContainer() {
    // Try multiple strategies similar to OPORD for robustness
    for (let i = 0; i < 15; i++) {
      // Method 1: direct
      let c = document.getElementById('universal-jpp-planning-initiation-nav');
      if (c) return c;

      // Method 2: querySelector
      c = document.querySelector('#universal-jpp-planning-initiation-nav');
      if (c) return c;

      // Method 3: search inside workspace
      const workspace = document.getElementById('workspace-content');
      if (workspace) {
        c = workspace.querySelector('#universal-jpp-planning-initiation-nav');
        if (c) return c;

        // Method 4: deep search with exact id
        const all = workspace.querySelectorAll('div[id="universal-jpp-planning-initiation-nav"]');
        if (all && all.length > 0) return all[0];
      }

      await new Promise(r => setTimeout(r, 25 + i * 15));
    }

    // Final fallback: try to create within the planning module wrapper if present
    return this.createFallbackContainer();
  }

  createFallbackContainer() {
    const workspace = document.getElementById('workspace-content');
    if (!workspace) return null;

    // Prefer to insert right before planning-initiation-content-area within the planning module
    const planningArea = workspace.querySelector('#planning-initiation-content-area');
    if (planningArea && planningArea.parentElement) {
      const fallback = document.createElement('div');
      fallback.id = 'universal-jpp-planning-initiation-nav';
      fallback.style.marginBottom = '16px';
      planningArea.parentElement.insertBefore(fallback, planningArea);
      return fallback;
    }
    return null;
  }

  async createButtonHTML() {
    const nav = await this.findContainer();
    if (!nav) throw new Error('Planning initiation nav container not found');

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
      b.className = `universal-planning-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-planning-btn-inactive'}`;
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
      const b = document.getElementById(btn.id);
      if (!b) return;

      const handler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.switchToSection(btn.moduleType);
      };

      // Attach click and keyboard handlers
      b.addEventListener('click', handler);
      b.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler(e);
        }
      });
    });
  }

  switchToSection(moduleType) {
    if (this.currentSection === moduleType) return;
    this.updateButtonStates(moduleType);
    this.loadSectionContent(moduleType);
    this.currentSection = moduleType;
  }

  updateButtonStates(activeModuleType) {
    this.buttonConfig.forEach(btn => {
      const b = document.getElementById(btn.id);
      if (!b) return;
      b.className = `universal-planning-nav-btn ${btn.moduleType === activeModuleType ? btn.colorClass : 'universal-planning-btn-inactive'}`;
    });
  }

  loadSectionContent(moduleType) {
    const content = document.getElementById('planning-initiation-content-area');
    if (!content) return;

    const moduleKey = { 'detailed-analysis': 'detailedAnalysis', 'practical-examples': 'practicalExamples', 'echelon-analysis': 'echelonAnalysis' }[moduleType];
    const module = this.modules[moduleKey];

    if (module?.getContent) {
      try {
        content.innerHTML = module.getContent();
        module.initialize?.();
      } catch (e) {
        content.innerHTML = `<div style="text-align:center;padding:40px;color:#ef4444;"><i class="fas fa-exclamation-triangle" style="font-size:24px;margin-bottom:12px;"></i><div>Error loading ${moduleType}</div></div>`;
      }
    } else {
      content.innerHTML = `<div style="text-align:center;padding:40px;color:#6b7280;"><i class="fas fa-spinner fa-spin" style="font-size:24px;margin-bottom:12px;"></i><div>Loading ${moduleType}...</div></div>`;
    }
  }

  loadDefault() {
    this.loadSectionContent('detailed-analysis');
  }
  // Static factory method for external access
  static async createInstance() {
    const instance = new UniversalPlanningInitiationButtons();
    await instance.initialize();
    return instance;
  }

  // Utility methods
  isInitialized() { return this.initialized; }
  getCurrentSection() { return this.currentSection; }

  // Cleanup method
  destroy() {
    this.buttonConfig.forEach(btn => {
      const b = document.getElementById(btn.id);
      if (b) {
        b.removeEventListener('click', null);
        b.onclick = null;
      }
    });

    const style = document.getElementById('universal-planning-initiation-styles');
    if (style) style.remove();

    this.initialized = false;
  }
}
