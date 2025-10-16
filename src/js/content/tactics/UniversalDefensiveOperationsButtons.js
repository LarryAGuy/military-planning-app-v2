/**
 * Universal Defensive Operations Button System
 * Standardized version matching OPORD/MDMP/JPP/Battle Drills visual design patterns
 * - Injects defensive-operations-specific CSS classes
 * - Renders three-section nav (Detailed, Practical, Echelon)
 * - Loads defensive operations section modules dynamically
 * - Targets #universal-defensive-operations-nav and #defensive-operations-content-area
 */

export class UniversalDefensiveOperationsButtons {
  constructor() {
    this.initialized = false;
    this.currentSection = 'detailed-analysis';
    this.modules = {};
    this.buttonConfig = [
      { id: 'universal-defensive-operations-detailed-btn', moduleType: 'detailed-analysis', label: 'Detailed Analysis', icon: 'fas fa-shield-alt', colorClass: 'universal-defensive-operations-btn-blue', isDefault: true },
      { id: 'universal-defensive-operations-practical-btn', moduleType: 'practical-examples', label: 'Practical Examples', icon: 'fas fa-clipboard-list', colorClass: 'universal-defensive-operations-btn-green', isDefault: false },
      { id: 'universal-defensive-operations-echelon-btn', moduleType: 'echelon-analysis', label: 'Echelon Analysis', icon: 'fas fa-layer-group', colorClass: 'universal-defensive-operations-btn-purple', isDefault: false }
    ];
  }

  async initialize() {
    if (this.initialized) {
      console.log('🔄 UniversalDefensiveOperationsButtons already initialized');
      return;
    }

    console.log('🚀 Initializing UniversalDefensiveOperationsButtons...');

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
      console.log('✅ UniversalDefensiveOperationsButtons initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize UniversalDefensiveOperationsButtons:', error);
      throw error;
    }
  }

  injectCSS() {
    if (document.getElementById('universal-defensive-operations-styles')) return;
    const style = document.createElement('style');
    style.id = 'universal-defensive-operations-styles';
    style.textContent = `
      .universal-defensive-operations-nav-btn {
        display: inline-flex !important; align-items: center !important; justify-content: center !important;
        padding: 7px 14px !important; font-size: 14px !important; font-weight: 600 !important;
        border-radius: 6px !important; border: 2px solid transparent !important; cursor: pointer !important;
        transition: all 0.3s ease !important; user-select: none !important; white-space: nowrap !important;
        text-decoration: none !important; outline: none !important; margin-right: 12px !important; margin-bottom: 8px !important;
      }
      .universal-defensive-operations-btn-blue { background-color: #2563eb !important; color: white !important; border-color: #1d4ed8 !important; }
      .universal-defensive-operations-btn-green { background-color: #16a34a !important; color: white !important; border-color: #15803d !important; }
      .universal-defensive-operations-btn-purple { background-color: #9333ea !important; color: white !important; border-color: #7c3aed !important; }
      .universal-defensive-operations-btn-blue:hover { background-color: #1d4ed8 !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(37,99,235,.4) !important; }
      .universal-defensive-operations-btn-green:hover { background-color: #15803d !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(22,163,74,.4) !important; }
      .universal-defensive-operations-btn-purple:hover { background-color: #7c3aed !important; transform: translateY(-2px) !important; box-shadow: 0 4px 12px rgba(147,51,234,.4) !important; }
      .universal-defensive-operations-btn-inactive { background-color: #4b5563 !important; color: #9ca3af !important; border-color: #374151 !important; opacity: .7 !important; }
      .universal-defensive-operations-btn-inactive:hover { background-color: #6b7280 !important; transform:none !important; box-shadow:none !important; }
    `;
    document.head.appendChild(style);
  }

  async createButtonHTML() {
    const navContainer = document.getElementById('universal-defensive-operations-nav');
    if (!navContainer) {
      throw new Error('Navigation container #universal-defensive-operations-nav not found');
    }

    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.gap = '8px';
    wrapper.style.flexWrap = 'wrap';

    this.buttonConfig.forEach(btn => {
      const b = document.createElement('button');
      b.id = btn.id;
      b.className = `universal-defensive-operations-nav-btn ${btn.isDefault ? btn.colorClass : 'universal-defensive-operations-btn-inactive'}`;
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
      const contentArea = document.getElementById('defensive-operations-content-area');
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
        button.className = `universal-defensive-operations-nav-btn ${activeColorClass}`;
      } else {
        button.className = `universal-defensive-operations-nav-btn universal-defensive-operations-btn-inactive`;
      }
    });
  }

  async loadModule(moduleType) {
    const contentArea = document.getElementById('defensive-operations-content-area');
    if (!contentArea) {
      throw new Error('Content area #defensive-operations-content-area not found');
    }

    // Show loading state
    contentArea.innerHTML = '<div style="text-align: center; padding: 40px; color: #9ca3af;"><i class="fas fa-spinner fa-spin" style="font-size: 24px; margin-bottom: 16px;"></i><p>Loading...</p></div>';

    // Clean up previous module
    if (this.modules[this.currentSection] && this.modules[this.currentSection].cleanup) {
      this.modules[this.currentSection].cleanup();
    }

    // Load new module
    let module;
    switch (moduleType) {
      case 'detailed-analysis':
        module = (await import('./sections/defensive-operations/detailed-analysis.js')).defensiveOperationsDetailedAnalysisTacticsModule;
        break;
      case 'practical-examples':
        module = (await import('./sections/defensive-operations/practical-examples.js')).defensiveOperationsPracticalExamplesTacticsModule;
        break;
      case 'echelon-analysis':
        module = (await import('./sections/defensive-operations/echelon-analysis.js')).defensiveOperationsEchelonAnalysisTacticsModule;
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
    this.handleButtonClick('detailed-analysis', 'universal-defensive-operations-btn-blue');
  }
}

export default UniversalDefensiveOperationsButtons;

