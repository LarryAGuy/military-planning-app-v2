/**
 * Universal Battle Drills Button System
 * Standardized version matching OPORD/MDMP/JPP visual design patterns
 * - Injects battle-drills-specific CSS classes
 * - Renders three-section nav (Detailed, Practical, Echelon)
 * - Loads battle drills section modules dynamically
 * - Targets #universal-battle-drills-nav and #battle-drills-content-area
 */

export class UniversalBattleDrillsButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-battle-drills-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-search', colorClass: 'universal-battle-drills-btn-blue', isDefault: true },
      { id: 'universal-battle-drills-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-file-alt', colorClass: 'universal-battle-drills-btn-green', isDefault: false },
      { id: 'universal-battle-drills-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-battle-drills-btn-purple', isDefault: false }
    ];
  }

  async initialize() {
    if (this.initialized) {
      console.log('🔄 UniversalBattleDrillsButtons already initialized');
      return;
    }

    console.log('🚀 Initializing UniversalBattleDrillsButtons...');

    try {
      // Step 1: Inject universal CSS
      this.injectCSS();

      // Step 2: Create button HTML
      await this.createButtonHTML();

      // Step 3: Setup event listeners
      await this.setupEventListeners();

      // Step 4: Load default content
      this.loadDefaultContent();

      this.initialized = true;
      console.log('✅ UniversalBattleDrillsButtons initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize UniversalBattleDrillsButtons:', error);
      throw error;
    }
  }

  injectCSS() {
    if (document.getElementById('universal-battle-drills-styles')) return;
    const style = document.createElement('style');
    style.id = 'universal-battle-drills-styles';
    style.textContent = `
      .universal-battle-drills-nav-btn {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
        border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
        transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
        text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
      }
      .universal-battle-drills-btn-blue { background-color: #2563eb !important; color: #ffffff !important; border-color: #1d4ed8 !important; }
      .universal-battle-drills-btn-green { background-color: #16a34a !important; color: #ffffff !important; border-color: #15803d !important; }
      .universal-battle-drills-btn-purple { background-color: #7c3aed !important; color: #ffffff !important; border-color: #6d28d9 !important; }
      .universal-battle-drills-btn-blue:hover { background-color: #1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
      .universal-battle-drills-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-battle-drills-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
      .universal-battle-drills-btn-inactive { background-color: #4b5563 !important; color: #9ca3af !important; border-color: #374151 !important; opacity: .7 !important; }
      .universal-battle-drills-btn-inactive:hover { background-color: #6b7280 !important; transform:none !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);
  }

  async createButtonHTML() {
    const navContainer = document.getElementById('universal-battle-drills-nav');
    if (!navContainer) {
      throw new Error('Navigation container #universal-battle-drills-nav not found');
    }

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.gap = '0px';
    wrapper.style.alignItems = 'center';

    this.buttonConfig.forEach(btn => {
      const b = document.createElement('button');
      b.id = btn.id;
      b.className = `universal-battle-drills-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-battle-drills-btn-inactive'}`;
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

    navContainer.innerHTML = '';
    navContainer.appendChild(wrapper);
  }

  async setupEventListeners() {
    for (const btnConfig of this.buttonConfig) {
      const button = document.getElementById(btnConfig.id);
      if (!button) {
        console.warn(`Button ${btnConfig.id} not found`);
        continue;
      }

      button.addEventListener('click', async (e) => {
        e.preventDefault();
        await this.handleButtonClick(btnConfig.moduleType, btnConfig.colorClass);
      });
    }
  }

  async handleButtonClick(moduleType, colorClass) {
    try {
      // Update button states
      this.updateButtonStates(moduleType, colorClass);

      // Load the appropriate module
      await this.loadModule(moduleType);

      this.currentSection = moduleType;
    } catch (error) {
      console.error(`Failed to load ${moduleType}:`, error);
      const contentArea = document.getElementById('battle-drills-content-area');
      if (contentArea) {
        contentArea.innerHTML = '<div style="color: #ef4444; padding: 20px;">Failed to load section</div>';
      }
    }
  }

  updateButtonStates(activeModuleType, activeColorClass) {
    this.buttonConfig.forEach(btn => {
      const button = document.getElementById(btn.id);
      if (!button) return;

      if (btn.moduleType === activeModuleType) {
        button.className = `universal-battle-drills-nav-btn ${activeColorClass}`;
      } else {
        button.className = `universal-battle-drills-nav-btn universal-battle-drills-btn-inactive`;
      }
    });
  }

  async loadModule(moduleType) {
    const contentArea = document.getElementById('battle-drills-content-area');
    if (!contentArea) {
      throw new Error('Content area #battle-drills-content-area not found');
    }

    // Cleanup previous module
    if (this.modules[this.currentSection]?.cleanup) {
      try {
        this.modules[this.currentSection].cleanup();
      } catch (error) {
        console.warn('Error during module cleanup:', error);
      }
    }

    // Load new module
    let module;
    switch (moduleType) {
      case 'detailed-analysis':
        module = (await import('./sections/battle-drills/detailed-analysis.js')).battleDrillsDetailedAnalysisTacticsModule;
        break;
      case 'practical-examples':
        module = (await import('./sections/battle-drills/practical-examples.js')).battleDrillsPracticalExamplesTacticsModule;
        break;
      case 'echelon-analysis':
        module = (await import('./sections/battle-drills/echelon-analysis.js')).battleDrillsEchelonAnalysisTacticsModule;
        break;
      default:
        throw new Error(`Unknown module type: ${moduleType}`);
    }

    // Store and render module
    this.modules[moduleType] = module;
    contentArea.innerHTML = module.getContent();

    if (module.initialize) {
      await module.initialize();
    }
  }

  loadDefaultContent() {
    // Load Detailed Analysis by default
    this.handleButtonClick('detailed-analysis', 'universal-battle-drills-btn-blue');
  }
}

export default UniversalBattleDrillsButtons;
