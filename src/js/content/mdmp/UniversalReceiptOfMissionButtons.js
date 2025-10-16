/**
 * Universal MDMP Receipt of Mission Button System
 * Mirrors OPORD UniversalExecutionButtons.js architecture with exact visual matching
 * - Injects receipt-specific CSS classes matching OPORD execution styling
 * - Renders three-section nav (Detailed, Practical, Echelon)
 * - Loads receipt section modules dynamically
 * - Targets #universal-receipt-nav and #receipt-content-area
 */

export class UniversalReceiptOfMissionButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-receipt-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-search', colorClass: 'universal-receipt-btn-blue', isDefault: true },
      { id: 'universal-receipt-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-file-alt', colorClass: 'universal-receipt-btn-green', isDefault: false },
      { id: 'universal-receipt-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-receipt-btn-purple', isDefault: false }
    ];
  }

  async loadReceiptModules() {
    console.log('📦 Loading Receipt of Mission modules...');

    try {
      const [detailed, practical, echelon] = await Promise.all([
        import('./sections/receipt-detailed-analysis.js'),
        import('./sections/receipt-practical-examples.js'),
        import('./sections/receipt-echelon-analysis.js')
      ]);

      this.modules = {
        detailedAnalysis: detailed.detailedAnalysisModule,
        practicalExamples: practical.practicalExamplesModule,
        echelonAnalysis: echelon.echelonAnalysisModule
      };

      // Verify modules loaded correctly
      const moduleNames = Object.keys(this.modules);
      console.log(`✅ Loaded ${moduleNames.length} modules:`, moduleNames);

      // Check for missing modules and validate they have required methods
      const missingModules = [];
      const invalidModules = [];

      if (!this.modules.detailedAnalysis) {
        missingModules.push('detailedAnalysis');
      } else if (!this.modules.detailedAnalysis.getContent) {
        invalidModules.push('detailedAnalysis (missing getContent)');
      }

      if (!this.modules.practicalExamples) {
        missingModules.push('practicalExamples');
      } else if (!this.modules.practicalExamples.getContent) {
        invalidModules.push('practicalExamples (missing getContent)');
      }

      if (!this.modules.echelonAnalysis) {
        missingModules.push('echelonAnalysis');
      } else if (!this.modules.echelonAnalysis.getContent) {
        invalidModules.push('echelonAnalysis (missing getContent)');
      }

      if (missingModules.length > 0 || invalidModules.length > 0) {
        const errors = [...missingModules, ...invalidModules];
        console.error('❌ Module validation failed:', errors);
        throw new Error(`Module validation failed: ${errors.join(', ')}`);
      }

    } catch (error) {
      console.error('❌ Failed to load Receipt of Mission modules:', error);
      throw error;
    }
  }

  injectCSS() {
    if (document.getElementById('universal-receipt-styles')) return;
    const style = document.createElement('style');
    style.id = 'universal-receipt-styles';
    style.textContent = `
      .universal-receipt-nav-btn {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
        border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
        transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
        text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
        background: none !important; font-family: inherit !important; box-sizing: border-box !important; vertical-align: top !important;
      }
      .universal-receipt-btn-blue { background-color: #2563eb !important; color: #fff !important; border-color: #1d4ed8 !important; }
      .universal-receipt-btn-blue:hover { background-color: #1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
      .universal-receipt-btn-green { background-color: #16a34a !important; color: #fff !important; border-color: #15803d !important; }
      .universal-receipt-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-receipt-btn-purple { background-color: #9333ea !important; color: #fff !important; border-color: #7c3aed !important; }
      .universal-receipt-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
      .universal-receipt-btn-orange { background-color: #f97316 !important; color: #fff !important; border-color: #ea580c !important; }
      .universal-receipt-btn-orange:hover { background-color: #ea580c !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(249,115,22,.4) !important; }
      .universal-receipt-btn-inactive { background-color: #4b5563 !important; color: #9ca3af !important; border-color: #374151 !important; opacity: .7 !important; }
      .universal-receipt-btn-inactive:hover { background-color: #6b7280 !important; transform:none !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);
  }

  async findContainer() {
    // Try multiple strategies similar to OPORD execution for robustness
    for (let i = 0; i < 15; i++) {
      // Method 1: direct
      let c = document.getElementById('universal-receipt-nav');
      if (c) return c;

      // Method 2: querySelector
      c = document.querySelector('#universal-receipt-nav');
      if (c) return c;

      // Method 3: search inside workspace
      const workspace = document.getElementById('workspace-content');
      if (workspace) {
        c = workspace.querySelector('#universal-receipt-nav');
        if (c) return c;

        // Method 4: deep search with exact id
        const all = workspace.querySelectorAll('div[id="universal-receipt-nav"]');
        if (all && all.length > 0) return all[0];
      }

      // Wait and retry
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    // Fallback: create container if receipt content area exists
    const receiptArea = document.getElementById('receipt-content-area');
    if (receiptArea) {
      const fallback = document.createElement('div');
      fallback.id = 'universal-receipt-nav';
      fallback.style.marginBottom = '16px';
      receiptArea.parentElement.insertBefore(fallback, receiptArea);
      return fallback;
    }
    return null;
  }

  async createButtonHTML() {
    const nav = await this.findContainer();
    if (!nav) throw new Error('Receipt nav container not found');

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
      b.className = `universal-receipt-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-receipt-btn-inactive'}`;
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
        btn.className = `universal-receipt-nav-btn ${cfg.colorClass}`;
      } else {
        // Deactivate other buttons
        btn.className = 'universal-receipt-nav-btn universal-receipt-btn-inactive';
      }
    });
  }

  switchTo(moduleType) {
    if (this.currentSection === moduleType) return;

    this.updateButtonStates(moduleType);
    this.currentSection = moduleType;
    this.loadContent(moduleType);
  }

  async switchToWithRetry(moduleType, maxRetries = 5) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      console.log(`🔄 Attempt ${attempt}/${maxRetries} to load default section: ${moduleType}`);

      // Check if content area exists
      const contentArea = document.getElementById('receipt-content-area');
      if (!contentArea) {
        console.warn(`⚠️ Attempt ${attempt}: receipt-content-area not found, retrying...`);
        await new Promise(resolve => setTimeout(resolve, 100 * attempt)); // Progressive delay
        continue;
      }

      // Try to switch to the section
      this.switchTo(moduleType);

      // Verify content was loaded (check if placeholder is still there)
      await new Promise(resolve => setTimeout(resolve, 50)); // Allow DOM update
      const hasPlaceholder = contentArea.querySelector('.text-center h3')?.textContent?.includes('Select a Section');

      if (!hasPlaceholder) {
        console.log(`✅ Default section loaded successfully on attempt ${attempt}`);
        return;
      }

      console.warn(`⚠️ Attempt ${attempt}: Content still shows placeholder, retrying...`);
      await new Promise(resolve => setTimeout(resolve, 100 * attempt));
    }

    console.error(`❌ Failed to load default section after ${maxRetries} attempts`);
    // Force a final attempt without retry
    this.switchTo(moduleType);
  }

  loadContent(moduleType) {
    console.log(`🔄 Loading content for module: ${moduleType}`);

    const content = document.getElementById('receipt-content-area');
    if (!content) {
      console.error('❌ receipt-content-area container not found');
      return;
    }

    // Clean any pending timers or previous content to keep Firefox from stacking state
    if (this._initTimer) clearTimeout(this._initTimer);
    content.textContent = '';

    let mod;
    switch (moduleType) {
      case 'detailed-analysis': mod = this.modules.detailedAnalysis; break;
      case 'practical-examples': mod = this.modules.practicalExamples; break;
      case 'echelon-analysis': mod = this.modules.echelonAnalysis; break;
      default:
        console.warn(`⚠️ Unknown module type: ${moduleType}`);
        return;
    }

    if (mod && mod.getContent) {
      console.log(`✅ Loading content for ${moduleType} module`);
      content.innerHTML = mod.getContent();
      if (mod.initialize) this._initTimer = setTimeout(() => mod.initialize(), 50);
    } else {
      console.error(`❌ Module ${moduleType} not found or missing getContent method`);
      console.log('Available modules:', Object.keys(this.modules || {}));
    }
  }

  async initialize() {
    if (this.initialized) return;

    try {
      console.log('🔧 Initializing Universal Receipt of Mission Button System...');

      await this.loadReceiptModules();
      this.injectCSS();
      await this.createButtonHTML();
      await this.setupEventListeners();

      // Check if detailed analysis content is already pre-loaded
      const contentArea = document.getElementById('receipt-content-area');
      const hasPreloadedContent = contentArea && contentArea.querySelector('#receipt-detailed-analysis-section');

      const defaultBtn = this.buttonConfig.find(btn => btn.isDefault);
      if (defaultBtn) {
        if (hasPreloadedContent && defaultBtn.moduleType === 'detailed-analysis') {
          console.log('✅ Detailed analysis content already pre-loaded, updating button states only');
          // Just update button states without reloading content
          this.currentSection = defaultBtn.moduleType;
          this.updateButtonStates(defaultBtn.moduleType);
        } else {
          console.log(`🎯 Loading default section: ${defaultBtn.moduleType}`);
          await this.switchToWithRetry(defaultBtn.moduleType);
        }
      } else {
        console.warn('⚠️ No default button found in buttonConfig');
      }

      this.initialized = true;
      console.log('✅ Universal Receipt of Mission Button System initialized');
    } catch (error) {
      console.error('❌ Failed to initialize Universal Receipt of Mission Button System:', error);
      throw error;
    }
  }
}
