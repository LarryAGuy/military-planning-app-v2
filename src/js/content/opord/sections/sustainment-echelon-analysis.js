/**
 * OPORD Sustainment - Echelon Analysis (Framework with Dynamic Loading)
 * - Collapsed by default
 * - Header row with echelon dropdowns (hover behavior)
 * - Dynamic loading of echelon-specific sustainment analysis modules
 * - LocalStorage key: opord-sustainment-echelon-analysis
 */

export const echelonAnalysisModule = {
  id: 'sustainment-echelon-analysis',
  title: 'Echelon Analysis',
  defaultExpanded: false,

  getContent() {
    return `
      <div id="sustainment-echelon-analysis-section" class="dashboard-widgets mb-12">
        <!-- Header Row with Echelon Dropdowns -->
        <div style="display:flex; align-items:center; margin-bottom:16px; gap:16px; position:relative;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-layer-group" style="margin-right:8px; color:#9333ea; font-size:16px;"></i>
            Echelon Analysis
          </h3>
          <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
          ${['tactical','operational','strategic'].map(group => `
            <div class="echelon-dropdown" style="position:relative; display:inline-block;">
              <button id="sustainment-echelon-${group}-dropdown-btn" class="echelon-dropdown-btn" data-group="${group}" style="background:none; border:none; color:${group==='tactical'?'#9333ea':'#9ca3af'}; font-size:14px; font-weight:600; cursor:pointer; padding:7px 14px; display:flex; align-items:center; transition:color .3s ease;">
                ${group.charAt(0).toUpperCase()+group.slice(1)} Level
                <i class="fas fa-chevron-down" style="margin-left:6px; font-size:12px;"></i>
              </button>
              <div id="sustainment-echelon-${group}-dropdown-content" class="dropdown-content" style="display:none; position:absolute; top:100%; left:0; background-color:#1f2937; border:1px solid #374151; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,.3); z-index:1000; min-width:200px; padding:8px;">
                ${this.getGroupButtons(group)}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Content Area for Dynamic Loading -->
        <div class="echelon-tab-content" style="background-color:#1f2937; border-radius:8px; border:1px solid #374151; padding:24px; margin-top:16px;">
          <div style="text-align:center; padding:40px; color:#6b7280;">
            <i class="fas fa-layer-group" style="font-size:48px; margin-bottom:16px; color:#9333ea;"></i>
            <h3 style="font-size:18px; font-weight:600; margin-bottom:8px; color:#d1d5db;">Echelon Analysis</h3>
            <p style="font-size:14px; line-height:1.5;">Select an echelon level from the dropdowns above to view sustainment analysis.</p>
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
    return map[group].map(b => `
      <button class="echelon-tab-btn dropdown-item" data-tab="${b.tab}" style="display:block; width:100%; padding:8px 12px; background:none; border:none; color:#d1d5db; font-size:14px; text-align:left; cursor:pointer; border-radius:4px; transition:background-color .2s ease; margin-bottom:4px;">
        <i class="${b.icon}" style="margin-right:8px; font-size:12px;"></i>
        ${b.label}
      </button>
    `).join('');
  },

  initialize() {
    // Hover dropdown behavior
    document.querySelectorAll('.echelon-dropdown').forEach(dropdown => {
      const btn = dropdown.querySelector('.echelon-dropdown-btn');
      const group = btn.getAttribute('data-group');
      dropdown.addEventListener('mouseenter', () => this.show(group));
      dropdown.addEventListener('mouseleave', () => setTimeout(() => this.hide(group), 150));
    });

    // Buttons
    document.querySelectorAll('.echelon-tab-btn').forEach(btn => {
      const clone = btn.cloneNode(true);
      const tab = btn.getAttribute('data-tab');
      btn.parentNode.replaceChild(clone, btn);
      clone.addEventListener('mouseenter', () => { clone.style.backgroundColor = '#374151'; });
      clone.addEventListener('mouseleave', () => { clone.style.backgroundColor = 'transparent'; });
      clone.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); this.switch(tab); });
    });

    try { localStorage.setItem('opord-sustainment-echelon-analysis', 'false'); } catch {}
    return true;
  },

  show(group) { const el = document.getElementById(`sustainment-echelon-${group}-dropdown-content`); if (el) el.style.display = 'block'; },
  hide(group) { const el = document.getElementById(`sustainment-echelon-${group}-dropdown-content`); if (el) el.style.display = 'none'; },
  hideAll() { ['tactical','operational','strategic'].forEach(g => this.hide(g)); },

  switch(tab) {
    this.hideAll();
    this.updateDropdownState(tab);
    this.loadEchelon(tab);
  },

  updateDropdownState(active) {
    const groups = { platoon:'tactical', company:'tactical', squadron:'tactical', battalion:'tactical', regiment:'operational', group:'operational', brigade:'operational', division:'strategic', corps:'strategic', army:'strategic', theater:'strategic' };
    const activeGroup = groups[active];
    ['tactical','operational','strategic'].forEach(g => {
      const btn = document.getElementById(`sustainment-echelon-${g}-dropdown-btn`);
      if (btn) btn.style.color = (g===activeGroup)? '#9333ea' : '#9ca3af';
    });
  },

  async loadEchelon(tab) {
    const area = document.querySelector('.echelon-tab-content');
    if (!area) return;
    area.innerHTML = `<div style="padding:40px; text-align:center; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
        <div style="color:#9333ea; font-size:16px; margin-bottom:12px;">
          <i class=\"fas fa-spinner fa-spin\" style=\"margin-right:8px;\"></i>
          Loading ${tab.charAt(0).toUpperCase()+tab.slice(1)} Level Content...
        </div>
        <p style=\"color:#c4b5fd; font-size:12px;\">UNCLASSIFIED</p>
      </div>`;
    try {
      const html = await this.importEchelon(tab);
      area.innerHTML = html;
    } catch (e) {
      area.innerHTML = `<div style="padding:20px; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
        <h4 style="color:#f87171; font-size:16px; font-weight:600; margin-bottom:12px;"><i class=\"fas fa-exclamation-triangle\" style=\"margin-right:8px;\"></i>Content Loading Error</h4>
        <p style="color:#d1d5db; font-size:14px; line-height:1.5; margin-bottom:16px;">UNCLASSIFIED - Unable to load ${tab.toUpperCase()} level content. Placeholder only.</p>
      </div>`;
    }
  },

  async importEchelon(tab) {
    switch (tab) {
      case 'platoon': { const m = await import('./sustainment-analysis-platoon.js'); return m.platoonAnalysisModule.getContent(); }
      case 'company': { const m = await import('./sustainment-analysis-company.js'); return m.companyAnalysisModule.getContent(); }
      case 'squadron': { const m = await import('./sustainment-analysis-squadron.js'); return m.squadronAnalysisModule.getContent(); }
      case 'battalion': { const m = await import('./sustainment-analysis-battalion.js'); return m.battalionAnalysisModule.getContent(); }
      case 'regiment': { const m = await import('./sustainment-analysis-regiment.js'); return m.regimentAnalysisModule.getContent(); }
      case 'group': { const m = await import('./sustainment-analysis-group.js'); return m.groupAnalysisModule.getContent(); }
      case 'brigade': { const m = await import('./sustainment-analysis-brigade.js'); return m.brigadeAnalysisModule.getContent(); }
      case 'division': { const m = await import('./sustainment-analysis-division.js'); return m.divisionAnalysisModule.getContent(); }
      case 'corps': { const m = await import('./sustainment-analysis-corps.js'); return m.corpsAnalysisModule.getContent(); }
      case 'army': { const m = await import('./sustainment-analysis-army.js'); return m.armyAnalysisModule.getContent(); }
      case 'theater': { const m = await import('./sustainment-analysis-theater.js'); return m.theaterAnalysisModule.getContent(); }
      default: return this.placeholder(tab);
    }
  },

  placeholder(tab) {
    return `<div style="padding:20px; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
      <h4 style="color:#9333ea; font-size:16px; font-weight:600; margin-bottom:12px;"><i class=\"fas fa-layer-group\" style=\"margin-right:8px;\"></i>${tab} Level Analysis</h4>
      <p style="color:#d1d5db; font-size:14px; line-height:1.5; margin-bottom:16px;">UNCLASSIFIED - Placeholder sustainment echelon analysis content.</p>
    </div>`;
  }
};

