/**
 * Universal MDMP Mission Analysis Button System
 * Mirrors MDMP UniversalReceiptOfMissionButtons.js architecture with exact visual matching
 * - Injects mission-analysis-specific CSS classes matching OPORD execution styling
 * - Renders three-section nav (Detailed, Practical, Echelon)
 * - Loads mission analysis section modules dynamically
 * - Targets #universal-mission-analysis-nav and #mission-analysis-content-area
 */

export class UniversalMissionAnalysisButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-mission-analysis-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-search', colorClass: 'universal-mission-analysis-btn-blue', isDefault: true },
      { id: 'universal-mission-analysis-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-file-alt', colorClass: 'universal-mission-analysis-btn-green', isDefault: false },
      { id: 'universal-mission-analysis-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-mission-analysis-btn-purple', isDefault: false }
    ];
  }

  async loadMissionAnalysisModules() {
    const [detailed, practical, echelon] = await Promise.all([
      import('./sections/mission-detailed-analysis.js'),
      import('./sections/mission-practical-examples.js'),
      import('./sections/mission-echelon-analysis.js')
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
      .universal-mission-analysis-nav-btn {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
        border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
        transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
        text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
        background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
      }
      .universal-mission-analysis-btn-blue { background-color: #2563eb !important; color: #fff !important; border-color: #1d4ed8 !important; }
      .universal-mission-analysis-btn-blue:hover { background-color: #1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
      .universal-mission-analysis-btn-green { background-color: #16a34a !important; color: #fff !important; border-color: #15803d !important; }
      .universal-mission-analysis-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-mission-analysis-btn-purple { background-color: #9333ea !important; color: #fff !important; border-color: #7c3aed !important; }
      .universal-mission-analysis-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
      .universal-mission-analysis-btn-orange { background-color: #f97316 !important; color: #fff !important; border-color: #ea580c !important; }
      .universal-mission-analysis-btn-orange:hover { background-color: #ea580c !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(249,115,22,.4) !important; }
      .universal-mission-analysis-btn-inactive { background-color: #4b5563 !important; color: #9ca3af !important; border-color: #374151 !important; opacity: .7 !important; }
      .universal-mission-analysis-btn-inactive:hover { background-color: #6b7280 !important; transform:none !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);
  }

  async findContainer() {
    // Try multiple strategies similar to OPORD execution for robustness
    for (let i = 0; i < 15; i++) {
      // Method 1: direct
      let c = document.getElementById('universal-mission-analysis-nav');
      if (c) return c;

      // Method 2: querySelector
      c = document.querySelector('#universal-mission-analysis-nav');
      if (c) return c;

      // Method 3: search inside workspace
      const workspace = document.getElementById('workspace-content');
      if (workspace) {
        c = workspace.querySelector('#universal-mission-analysis-nav');
        if (c) return c;

        // Method 4: deep search with exact id
        const all = workspace.querySelectorAll('div[id="universal-mission-analysis-nav"]');
        if (all && all.length > 0) return all[0];
      }

      // Wait and retry
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    // Fallback: create container if mission analysis content area exists
    const missionAnalysisArea = document.getElementById('mission-analysis-content-area');
    if (missionAnalysisArea) {
      const fallback = document.createElement('div');
      fallback.id = 'universal-mission-analysis-nav';
      fallback.style.marginBottom = '16px';
      missionAnalysisArea.parentElement.insertBefore(fallback, missionAnalysisArea);
      return fallback;
    }
    return null;
  }

  async createButtonHTML() {
    const nav = await this.findContainer();
    if (!nav) throw new Error('Mission analysis nav container not found');

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
      b.className = `universal-mission-analysis-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-mission-analysis-btn-inactive'}`;
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
        btn.className = `universal-mission-analysis-nav-btn ${cfg.colorClass}`;
      } else {
        // Deactivate other buttons
        btn.className = 'universal-mission-analysis-nav-btn universal-mission-analysis-btn-inactive';
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
    const content = document.getElementById('mission-analysis-content-area');
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
      console.log('🔧 Initializing Universal Mission Analysis Button System...');
      
      await this.loadMissionAnalysisModules();
      this.injectCSS();
      await this.createButtonHTML();
      await this.setupEventListeners();
      
      // Check if detailed analysis content is already pre-loaded
      const contentArea = document.getElementById('mission-analysis-content-area');
      const hasPreloadedContent = contentArea && contentArea.querySelector('#mission-detailed-analysis-section');

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
      console.log('✅ Universal Mission Analysis Button System initialized');
    } catch (error) {
      console.error('❌ Failed to initialize Universal Mission Analysis Button System:', error);
      throw error;
    }
  }
}
