/**
 * Universal JPP Step 2: Mission Analysis Button System
 * Mirrors UniversalPlanningInitiationButtons and OPORD universal classes
 * - CSP compliant (no inline handlers)
 * - Three sections: Detailed Analysis, Practical Examples, Echelon Analysis
 * - Targets #universal-mission-analysis-nav and #mission-analysis-content-area
 */

export class UniversalMissionAnalysisButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-mission-analysis-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-search', colorClass: 'universal-mission-btn-green', isDefault: true },
      { id: 'universal-mission-analysis-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-book-open', colorClass: 'universal-mission-btn-blue', isDefault: false },
      { id: 'universal-mission-analysis-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-mission-btn-purple', isDefault: false }
    ];
    this.storageKey = 'jpp-mission-analysis-active-section';
  }

  async initialize() {
    if (this.initialized) return;
    if (window.__missionAnalysisButtonsInitializing) return; // prevent parallel inits
    window.__missionAnalysisButtonsInitializing = true;
    try {
      await this.loadMissionAnalysisModules();
      this.injectCSS();
      await this.createButtonHTML();
      this.restoreState();
      // Update button states to reflect the current section (especially important after restoreState)
      this.updateButtonStates(this.currentSection);
      // Load default or restored content first, then listeners
      this.loadSectionContent(this.currentSection);
      await this.setupEventListeners();
      this.initialized = true;
      this.prefetchSecondaryModules();
    } finally {
      window.__missionAnalysisButtonsInitializing = false;
    }
  }

  getDefaultModule() { return this.modules?.detailedAnalysis; }

  prefetchSecondaryModules() {
    const prefetch = () => {
      try {
        import('./sections/mission-analysis-practical-examples.js');
        import('./sections/mission-analysis-echelon-analysis.js');
      } catch {}
    };

    // Use requestIdleCallback if available, otherwise fallback to setTimeout
    if (window.requestIdleCallback) {
      window.requestIdleCallback(prefetch);
    } else {
      setTimeout(prefetch, 0);
    }
  }

  restoreState() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved && ['detailed-analysis','practical-examples','echelon-analysis'].includes(saved)) {
        this.currentSection = saved;
      }
    } catch {}
  }

  persistState() {
    try { localStorage.setItem(this.storageKey, this.currentSection); } catch {}
  }

  async loadMissionAnalysisModules() {
    const [detailed, practical, echelon] = await Promise.all([
      import('./sections/mission-analysis-detailed-analysis.js'),
      import('./sections/mission-analysis-practical-examples.js'),
      import('./sections/mission-analysis-echelon-analysis.js')
    ]);
    this.modules = {
      detailedAnalysis: detailed.detailedAnalysisModule,
      practicalExamples: practical.practicalExamplesModule,
      echelonAnalysis: echelon.echelonAnalysisModule
    };
  }

  injectCSS() {
    if (document.getElementById('universal-mission-analysis-styles')) return;
    const style = document.createElement('style');
    style.id = 'universal-mission-analysis-styles';
    style.textContent = `
      .universal-mission-nav-btn {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
        border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
        transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
        text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
        background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
      }
      .universal-mission-btn-green { background-color: #16a34a !important; color: #fff !important; border-color: #15803d !important; }
      .universal-mission-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-mission-btn-blue { background-color: #2563eb !important; color: #fff !important; border-color: #1d4ed8 !important; }
      .universal-mission-btn-blue:hover { background-color: #1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
      .universal-mission-btn-purple { background-color: #9333ea !important; color: #fff !important; border-color: #7c3aed !important; }
      .universal-mission-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
      .universal-mission-btn-inactive { background-color: #4b5563 !important; color: #9ca3af !important; border-color: #374151 !important; opacity: .7 !important; }
      .universal-mission-btn-inactive:hover { background-color: #6b7280 !important; transform:none !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);
  }

  async findContainer() {
    for (let i = 0; i < 15; i++) {
      let c = document.getElementById('universal-jpp-mission-analysis-nav');
      if (c) return c;
      c = document.querySelector('#universal-jpp-mission-analysis-nav');
      if (c) return c;
      const workspace = document.getElementById('workspace-content');
      if (workspace) {
        c = workspace.querySelector('#universal-jpp-mission-analysis-nav');
        if (c) return c;
        const all = workspace.querySelectorAll('div[id="universal-jpp-mission-analysis-nav"]');
        if (all && all.length > 0) return all[0];
      }
      await new Promise(r => setTimeout(r, 25 + i * 15));
    }
    return this.createFallbackContainer();
  }

  createFallbackContainer() {
    const workspace = document.getElementById('workspace-content');
    if (!workspace) return null;
    const area = workspace.querySelector('#mission-analysis-content-area');
    if (area && area.parentElement) {
      const fallback = document.createElement('div');
      fallback.id = 'universal-jpp-mission-analysis-nav';
      fallback.style.marginBottom = '16px';
      area.parentElement.insertBefore(fallback, area);
      return fallback;
    }
    return null;
  }

  async createButtonHTML() {
    const nav = await this.findContainer();
    if (!nav) throw new Error('Mission analysis nav container not found');
    while (nav.firstChild) nav.removeChild(nav.firstChild);
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.gap = '8px';
    wrapper.style.alignItems = 'center';

    this.buttonConfig.forEach(btn => {
      const b = document.createElement('button');
      b.id = btn.id;
      b.className = `universal-mission-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-mission-btn-inactive'}`;
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
      if (!b) {
        console.warn(`Button element not found during event listener setup: ${btn.id}`);
        return;
      }

      const handler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.switchToSection(btn.moduleType);
        // Force update button states after a short delay to ensure consistency
        setTimeout(() => this.updateButtonStates(btn.moduleType), 10);
      };

      b.addEventListener('click', handler);
      b.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handler(e);
        }
      });
    });
  }

  // Method to force refresh button states - useful for debugging or recovery
  refreshButtonStates() {
    this.updateButtonStates(this.currentSection);
  }

  switchToSection(moduleType) {
    // Always update button states to ensure visual consistency, even if section hasn't changed
    this.updateButtonStates(moduleType);

    // Only load content and update state if section actually changed
    if (this.currentSection !== moduleType) {
      this.loadSectionContent(moduleType);
      this.currentSection = moduleType;
      this.persistState();
    }
  }

  updateButtonStates(activeModuleType) {
    if (!activeModuleType) {
      console.warn('updateButtonStates called with no activeModuleType, using currentSection');
      activeModuleType = this.currentSection;
    }

    this.buttonConfig.forEach(btn => {
      const b = document.getElementById(btn.id);
      if (!b) {
        console.warn(`Button element not found: ${btn.id}`);
        return;
      }

      const isActive = btn.moduleType === activeModuleType;
      const newClassName = `universal-mission-nav-btn ${isActive ? btn.colorClass : 'universal-mission-btn-inactive'}`;

      // Only update if className actually changed to avoid unnecessary DOM updates
      if (b.className !== newClassName) {
        b.className = newClassName;
      }
    });
  }

  loadSectionContent(moduleType) {
    const content = document.getElementById('mission-analysis-content-area');
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

  loadDefault() { this.loadSectionContent('detailed-analysis'); }

  static async createInstance() { const instance = new UniversalMissionAnalysisButtons(); await instance.initialize(); return instance; }

  isInitialized() { return this.initialized; }
  getCurrentSection() { return this.currentSection; }

  // Validate and fix button states if they're inconsistent
  validateAndFixButtonStates() {
    let hasInconsistency = false;

    this.buttonConfig.forEach(btn => {
      const b = document.getElementById(btn.id);
      if (!b) return;

      const shouldBeActive = btn.moduleType === this.currentSection;
      const expectedClassName = `universal-mission-nav-btn ${shouldBeActive ? btn.colorClass : 'universal-mission-btn-inactive'}`;

      if (b.className !== expectedClassName) {
        hasInconsistency = true;
        console.warn(`Button state inconsistency detected for ${btn.id}. Expected: ${expectedClassName}, Actual: ${b.className}`);
      }
    });

    if (hasInconsistency) {
      console.log('Fixing button state inconsistencies...');
      this.updateButtonStates(this.currentSection);
    }

    return !hasInconsistency;
  }

  destroy() {
    this.buttonConfig.forEach(btn => {
      const b = document.getElementById(btn.id);
      if (b) {
        b.replaceWith(b.cloneNode(true));
      }
    });
    const style = document.getElementById('universal-mission-analysis-styles');
    if (style) style.remove();
    this.initialized = false;
  }
}

export default UniversalMissionAnalysisButtons;

