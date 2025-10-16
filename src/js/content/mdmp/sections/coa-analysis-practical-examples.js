/**
 * MDMP Step 4: Course of Action Analysis - Practical Examples Module
 * Mirrors MDMP Steps 1-2 practical examples architecture with dropdown navigation
 * Green theme (#16a34a) for practical examples consistency
 * Framework scaffolding only - no content population
 */

export const coaAnalysisPracticalExamplesModule = {
  id: 'coa-analysis-practical-examples',
  title: 'Practical Examples',
  defaultExpanded: false,

  getContent() {
    return `
      <div id="coa-analysis-practical-examples-section" style="margin-bottom:24px;">
        <!-- Header Row with Inline Three-Tier Dropdown Navigation -->
        <div style="display:flex; align-items:center; margin-bottom:16px; gap:16px; position:relative; padding-bottom:12px; border-bottom:2px solid #374151;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-file-alt" style="margin-right:8px; color:#16a34a; font-size:16px;"></i>
            Practical Examples
          </h3>
          <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
          ${['tactical','operational','strategic'].map(group => `
            <div class="echelon-dropdown" style="position:relative; display:inline-block;">
              <button id="${group}-dropdown-btn" class="echelon-dropdown-btn" data-group="${group}" style="background:none; border:none; color:${group==='tactical'?'#10b981':'#9ca3af'}; font-size:14px; font-weight:600; cursor:pointer; padding:7px 14px; display:flex; align-items:center; transition:color .3s ease;">
                ${group.charAt(0).toUpperCase()+group.slice(1)} Level
                <i class="fas fa-chevron-down" style="margin-left:6px; font-size:12px;"></i>
              </button>
              <div id="${group}-dropdown-content" class="dropdown-content" style="display:none; position:absolute; top:100%; left:0; background-color:#1f2937; border:1px solid #374151; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,.3); z-index:1000; min-width:200px; padding:8px;">
                ${this.getGroupButtons(group)}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Content Display Area -->
        <div id="coa-analysis-practical-content" style="min-height:300px;">
          <!-- Default Content -->
          <div style="text-align:center; padding:60px 20px;">
            <i class="fas fa-file-alt" style="font-size:48px; margin-bottom:16px; color:#16a34a;"></i>
            <h4 style="color:white; font-size:18px; font-weight:600; margin:0 0 8px 0;">Select an Echelon Level</h4>
            <p style="color:#9ca3af; font-size:14px; margin:0;">Choose a tactical, operational, or strategic level from the dropdowns above</p>
            
            <div style="background-color:#374151; padding:16px; border-radius:8px; border-left:4px solid #16a34a; margin-top:20px; text-align:left;">
              <h4 style="color:#86efac; font-size:14px; font-weight:600; margin:0 0 8px 0;">
                <i class="fas fa-info-circle" style="margin-right:8px;"></i>
                Framework Status
              </h4>
              <p style="color:#d1d5db; font-size:13px; line-height:1.4; margin:0;">
                This is a framework scaffolding module. Practical examples will be populated in future content development phases.
              </p>
            </div>
          </div>
        </div>
      </div>


    `;
  },

  getGroupButtons(group) {
    const map = {
      tactical: [
        { tab: 'platoon', icon: 'fas fa-users', label: 'Platoon' },
        { tab: 'company', icon: 'fas fa-user-friends', label: 'Company' },
        { tab: 'squadron', icon: 'fas fa-horse-head', label: 'Squadron' },
        { tab: 'battalion', icon: 'fas fa-flag', label: 'Battalion' },
      ],
      operational: [
        { tab: 'regiment', icon: 'fas fa-medal', label: 'Regiment' },
        { tab: 'group', icon: 'fas fa-layer-group', label: 'Group' },
        { tab: 'brigade', icon: 'fas fa-chess-rook', label: 'Brigade' },
      ],
      strategic: [
        { tab: 'division', icon: 'fas fa-chess-king', label: 'Division' },
        { tab: 'corps', icon: 'fas fa-crown', label: 'Corps' },
        { tab: 'army', icon: 'fas fa-star', label: 'Army' },
        { tab: 'theater', icon: 'fas fa-globe', label: 'Theater' },
      ]
    };
    return (map[group] || []).map(item => `
      <button class="example-tab-btn dropdown-item" data-tab="${item.tab}" style="display:block; width:100%; padding:8px 12px; background:none; border:none; color:#d1d5db; font-size:14px; text-align:left; cursor:pointer; border-radius:4px; transition:background-color .2s ease; margin-bottom:4px;">
        <i class="${item.icon}" style="margin-right:8px; font-size:12px;"></i>
        ${item.label}
      </button>
    `).join('');
  },

  // OPORD-style module methods for consistency
  initializeDropdowns() {
    document.querySelectorAll('.echelon-dropdown').forEach(dropdown => {
      const btn = dropdown.querySelector('.echelon-dropdown-btn');
      const group = btn.getAttribute('data-group');
      let hoverTimeout;

      dropdown.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout);
        this.hideAll();
        this.show(group);
      });

      dropdown.addEventListener('mouseleave', () => {
        hoverTimeout = setTimeout(() => this.hide(group), 150);
      });

      // Keep click functionality as fallback
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.hideAll();
        this.show(group);
      });
    });
  },

  initializeButtons() {
    document.querySelectorAll('.example-tab-btn').forEach(btn => {
      const clone = btn.cloneNode(true);
      const tab = btn.getAttribute('data-tab');
      btn.parentNode.replaceChild(clone, btn);
      clone.addEventListener('mouseenter', () => { clone.style.backgroundColor = '#374151'; });
      clone.addEventListener('mouseleave', () => { clone.style.backgroundColor = 'transparent'; });
      clone.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.switch(tab);
      });
    });
  },

  injectDropdownCSS() {
    const style = document.getElementById('coa-analysis-practical-dropdown-styles') || document.createElement('style');
    style.id = 'coa-analysis-practical-dropdown-styles';
    style.textContent = `
      /* Scoped to COA Analysis Practical Examples section to avoid sidebar collisions */
      #coa-analysis-practical-examples-section .echelon-dropdown-btn:hover { color:#10b981 !important; transition: color .3s ease !important; }
      #coa-analysis-practical-examples-section .dropdown-item:hover { background-color:#374151 !important; transition: all .2s ease !important; }
      #coa-analysis-practical-examples-section .dropdown-content {
        transition: opacity .2s ease !important; z-index: 1000 !important; position: absolute !important;
        top: 100% !important; left: 0 !important; background-color: #1f2937 !important;
        border: 1px solid #374151 !important; border-radius: 6px !important;
        box-shadow: 0 4px 12px rgba(0,0,0,.3) !important; min-width: 200px !important; padding: 8px !important;
      }
      #coa-analysis-practical-examples-section .echelon-dropdown { position: relative !important; display: inline-block !important; }
      #coa-analysis-practical-examples-section .echelon-dropdown:hover .dropdown-content { display: block !important; }
    `;
    const existing = document.getElementById('coa-analysis-practical-dropdown-styles');
    if (existing) existing.remove();
    document.head.appendChild(style);
  },

  show(group) {
    const el = document.getElementById(`${group}-dropdown-content`);
    if (el) el.style.display = 'block';
  },

  hide(group) {
    const el = document.getElementById(`${group}-dropdown-content`);
    if (el) el.style.display = 'none';
  },

  hideAll() {
    ['tactical','operational','strategic'].forEach(g => this.hide(g));
  },

  switch(tab) {
    this.hideAll();
    this.loadEchelonExample(tab);
  },

  async loadEchelonExample(echelon) {
    const contentArea = document.getElementById('coa-analysis-practical-content');
    if (!contentArea) return;

    contentArea.innerHTML = '<div style="text-align:center; padding:40px;"><i class="fas fa-spinner fa-spin" style="font-size:24px; color:#16a34a;"></i><p style="color:#9ca3af; margin-top:12px;">Loading...</p></div>';

    try {
      const content = await this.importEchelon(echelon);
      contentArea.innerHTML = content;
    } catch (error) {
      console.error('Failed to load COA analysis echelon example:', error);
      contentArea.innerHTML = '<div style="text-align:center; padding:40px; color:#ef4444;"><i class="fas fa-exclamation-triangle" style="font-size:24px; margin-bottom:12px;"></i><p>Failed to load content</p></div>';
    }
  },

  async importEchelon(tab) {
    switch (tab) {
      case 'platoon': { const m = await import('./coa-analysis-practical-platoon.js'); return m.getPlatoonCOAAnalysisExample(); }
      case 'company': { const m = await import('./coa-analysis-practical-company.js'); return m.getCompanyCOAAnalysisExample(); }
      case 'squadron': { const m = await import('./coa-analysis-practical-squadron.js'); return m.getSquadronCOAAnalysisExample(); }
      case 'battalion': { const m = await import('./coa-analysis-practical-battalion.js'); return m.getBattalionCOAAnalysisExample(); }
      case 'regiment': { const m = await import('./coa-analysis-practical-regiment.js'); return m.getRegimentCOAAnalysisExample(); }
      case 'group': { const m = await import('./coa-analysis-practical-group.js'); return m.getGroupCOAAnalysisExample(); }
      case 'brigade': { const m = await import('./coa-analysis-practical-brigade.js'); return m.getBrigadeCOAAnalysisExample(); }
      case 'division': { const m = await import('./coa-analysis-practical-division.js'); return m.getDivisionCOAAnalysisExample(); }
      case 'corps': { const m = await import('./coa-analysis-practical-corps.js'); return m.getCorpsCOAAnalysisExample(); }
      case 'army': { const m = await import('./coa-analysis-practical-army.js'); return m.getArmyCOAAnalysisExample(); }
      case 'theater': { const m = await import('./coa-analysis-practical-theater.js'); return m.getTheaterCOAAnalysisExample(); }
      default: return '<div style="text-align:center; padding:40px; color:#ef4444;">Unknown echelon level</div>';
    }
  },

  initialize() {
    this.initializeDropdowns();
    this.initializeButtons();
    this.injectDropdownCSS();

    // Remove any existing document click listeners for this module
    if (this.documentClickHandler) {
      document.removeEventListener('click', this.documentClickHandler);
    }

    // Create and store the click handler for proper cleanup
    this.documentClickHandler = (e) => {
      // Only handle clicks if this module is currently active
      if (document.getElementById('coa-analysis-practical-content') &&
          !e.target.closest('.echelon-dropdown') &&
          !e.target.closest('#sidebar') &&
          !e.target.closest('#right-sidebar')) {
        this.hideAll();
      }
    };

    // Add the document click listener
    document.addEventListener('click', this.documentClickHandler);

    console.log('COA Analysis Practical Examples module initialized with OPORD-style architecture');
    return true;
  },

  cleanup() {
    // Remove document click listener to prevent conflicts
    if (this.documentClickHandler) {
      document.removeEventListener('click', this.documentClickHandler);
      this.documentClickHandler = null;
    }

    // Hide all dropdowns
    this.hideAll();

    console.log('COA Analysis Practical Examples module cleaned up');
  }
};

export default coaAnalysisPracticalExamplesModule;
