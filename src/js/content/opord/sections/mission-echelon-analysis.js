/**
 * OPORD Mission - Echelon Analysis (Development Placeholder)
 * Replicates Situation Echelon Analysis: three-tier dropdowns (T/O/S) with 11 echelons
 * Loads mission-focused placeholder content per echelon
 */

export const echelonAnalysisModule = {
  id: 'mission-echelon-analysis',
  title: 'Echelon Analysis',
  defaultExpanded: false,

  getContent() {
    return `
      <!-- Mission Echelon Analysis Section -->
      <div id="mission-echelon-analysis-section" class="dashboard-widgets mb-12">
        <!-- Header Row with Echelon Dropdowns -->
        <div style="display:flex; align-items:center; margin-bottom:16px; gap:16px; position:relative;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-layer-group" style="margin-right:8px; color:#a855f7; font-size:16px;"></i>
            Echelon Analysis
          </h3>
          <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>

          ${this.dropdownButton('tactical', 'Tactical Level', '#10b981')}
          <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
          ${this.dropdownButton('operational', 'Operational Level', '#9ca3af')}
          <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
          ${this.dropdownButton('strategic', 'Strategic Level', '#9ca3af')}
        </div>

        <!-- Content Area for Dynamic Loading -->
        <div class="mission-analysis-tab-content" style="background-color:#1f2937; border-radius:8px; border:1px solid #374151; padding:24px; margin-top:16px;">
          <div style="text-align:center; padding:40px; color:#6b7280;">
            <i class="fas fa-layer-group" style="font-size:48px; margin-bottom:16px; color:#a855f7;"></i>
            <h3 style="font-size:18px; font-weight:600; margin-bottom:8px; color:#d1d5db;">Echelon Analysis</h3>
            <p style="font-size:14px; line-height:1.5;">Select an echelon level from the dropdowns above to view comprehensive mission analysis content.</p>
            <div style="background-color:#374151; padding:12px; border-radius:6px; border-left:3px solid #a855f7; margin-top:16px;">
              <p style="color:#c084fc; font-size:12px; margin:0;"><i class="fas fa-info-circle" style="margin-right:6px;"></i>Available: Platoon, Company, Squadron, Battalion, Regiment, Group, Brigade, Division, Corps, Army, Theater</p>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  dropdownButton(group, label, color) {
    const map = {
      tactical: [
        { tab: 'platoon', icon: 'fas fa-users', label: 'Platoon' },
        { tab: 'company', icon: 'fas fa-user-friends', label: 'Company' },
        { tab: 'squadron', icon: 'fas fa-horse-head', label: 'Squadron' },
        { tab: 'battalion', icon: 'fas fa-flag', label: 'Battalion' },
      ],
      operational: [
        { tab: 'regiment', icon: 'fas fa-medal', label: 'Regiment' },
        { tab: 'group', icon: 'fas fa-star', label: 'Group' },
        { tab: 'brigade', icon: 'fas fa-chess-rook', label: 'Brigade' },
      ],
      strategic: [
        { tab: 'division', icon: 'fas fa-chess-king', label: 'Division' },
        { tab: 'corps', icon: 'fas fa-crown', label: 'Corps' },
        { tab: 'army', icon: 'fas fa-globe-americas', label: 'Army' },
        { tab: 'theater', icon: 'fas fa-satellite', label: 'Theater' },
      ]
    };

    return `
      <div class="echelon-dropdown" style="position:relative; display:inline-block;">
        <button id="mission-analysis-${group}-dropdown-btn" class="echelon-dropdown-btn" data-group="${group}" style="background:none; border:none; color:${color}; font-size:14px; font-weight:600; cursor:pointer; padding:7px 14px; display:flex; align-items:center; transition:color .3s ease;">
          ${label}
          <i class="fas fa-chevron-down" style="margin-left:6px; font-size:12px;"></i>
        </button>
        <div id="mission-analysis-${group}-dropdown-content" class="dropdown-content" style="display:none; position:absolute; top:100%; left:0; background-color:#1f2937; border:1px solid #374151; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,.3); z-index:1000; min-width:200px; padding:8px;">
          ${map[group].map(b => `
            <button class="mission-analysis-tab-btn dropdown-item" data-tab="${b.tab}" style="display:block; width:100%; padding:8px 12px; background:none; border:none; color:#d1d5db; font-size:14px; text-align:left; cursor:pointer; border-radius:4px; transition:background-color .2s ease; margin-bottom:4px;">
              <i class="${b.icon}" style="margin-right:8px; font-size:12px;"></i>${b.label}
            </button>
          `).join('')}
        </div>
      </div>`;
  },

  initialize() {
    this.injectDropdownCSS();
    this.initializeDropdowns();
    this.initializeClicks();
    return true;
  },

  injectDropdownCSS() {
    const id = 'mission-analysis-dropdown-hover-styles';
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
      .echelon-dropdown-btn:hover { color:#a855f7 !important; }
      .dropdown-item:hover { background-color:#374151 !important; }
      .echelon-dropdown-btn { transition: color .3s ease !important; }
      .dropdown-content { transition: opacity .2s ease !important; }
    `;
    document.head.appendChild(style);
  },

  initializeDropdowns() {
    const section = document.getElementById('mission-echelon-analysis-section');
    if (!section) return;
    section.querySelectorAll('.echelon-dropdown').forEach(dropdown => {
      const btn = dropdown.querySelector('.echelon-dropdown-btn');
      const group = btn?.getAttribute('data-group');
      dropdown.addEventListener('mouseenter', () => this.show(group));
      dropdown.addEventListener('mouseleave', () => setTimeout(() => this.hide(group), 150));
    });
  },

  initializeClicks() {
    // Delegate within section for robustness
    const section = document.getElementById('mission-echelon-analysis-section');
    if (!section) return;
    section.addEventListener('click', (e) => {
      const btn = e.target.closest('.mission-analysis-tab-btn');
      if (!btn) return;
      const tab = btn.getAttribute('data-tab');
      this.switch(tab);
      this.hideAll();
      this.updateDropdownStates(tab);
    });
  },

  show(group) { const el = document.getElementById(`mission-analysis-${group}-dropdown-content`); if (el) { el.style.display='block'; el.style.opacity='1'; } },
  hide(group) { const el = document.getElementById(`mission-analysis-${group}-dropdown-content`); if (el) { el.style.display='none'; el.style.opacity='0'; } },
  hideAll() { ['tactical','operational','strategic'].forEach(g => this.hide(g)); },

  updateDropdownStates(active) {
    const groups = { platoon:'tactical', company:'tactical', squadron:'tactical', battalion:'tactical', regiment:'operational', group:'operational', brigade:'operational', division:'strategic', corps:'strategic', army:'strategic', theater:'strategic' };
    const activeGroup = groups[active];
    ['tactical','operational','strategic'].forEach(g => {
      const btn = document.getElementById(`mission-analysis-${g}-dropdown-btn`);
      if (btn) btn.style.color = (g===activeGroup)? '#10b981' : '#9ca3af';
    });
  },

  async switch(echelon) {
    const area = document.querySelector('#mission-echelon-analysis-section .mission-analysis-tab-content');
    if (!area) return;
    area.innerHTML = `<div style="padding:40px; text-align:center; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
        <div style="color:#a855f7; font-size:16px; margin-bottom:12px;">
          <i class=\"fas fa-spinner fa-spin\" style=\"margin-right:8px;\"></i>
          Loading ${echelon.charAt(0).toUpperCase()+echelon.slice(1)} Level Mission Analysis...
        </div>
        <p style="color:#c084fc; font-size:12px;">UNCLASSIFIED</p>
      </div>`;
    try {
      const html = await this.importEchelon(echelon);
      area.innerHTML = html;
    } catch (e) {
      area.innerHTML = `<div style="padding:20px; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
        <h4 style="color:#f87171; font-size:16px; font-weight:600; margin-bottom:12px;"><i class=\"fas fa-exclamation-triangle\" style=\"margin-right:8px;\"></i>Mission Analysis Content Loading Error</h4>
        <p style="color:#d1d5db; font-size:14px; line-height:1.5; margin-bottom:16px;">UNCLASSIFIED - Unable to load ${echelon.toUpperCase()} level mission analysis content. Placeholder only.</p>
      </div>`;
    }
  },

  async importEchelon(echelon) {
    const cb = '?v=' + Date.now();
    switch (echelon) {
      case 'platoon': { const m = await import('./mission-analysis-platoon.js' + cb); return m.missionPlatoonAnalysisModule.getContent(); }
      case 'company': { const m = await import('./mission-analysis-company.js' + cb); return m.missionCompanyAnalysisModule.getContent(); }
      case 'squadron': { const m = await import('./mission-analysis-squadron.js' + cb); return m.missionSquadronAnalysisModule.getContent(); }
      case 'battalion': { const m = await import('./mission-analysis-battalion.js' + cb); return m.missionBattalionAnalysisModule.getContent(); }
      case 'regiment': { const m = await import('./mission-analysis-regiment.js' + cb); return m.missionRegimentAnalysisModule.getContent(); }
      case 'group': { const m = await import('./mission-analysis-group.js' + cb); return m.missionGroupAnalysisModule.getContent(); }
      case 'brigade': { const m = await import('./mission-analysis-brigade.js' + cb); return m.missionBrigadeAnalysisModule.getContent(); }
      case 'division': { const m = await import('./mission-analysis-division.js' + cb); return m.missionDivisionAnalysisModule.getContent(); }
      case 'corps': { const m = await import('./mission-analysis-corps.js' + cb); return m.missionCorpsAnalysisModule.getContent(); }
      case 'army': { const m = await import('./mission-analysis-army.js' + cb); return m.missionArmyAnalysisModule.getContent(); }
      case 'theater': { const m = await import('./mission-analysis-theater.js' + cb); return m.missionTheaterAnalysisModule.getContent(); }
      default: return this.placeholder(echelon);
    }
  },

  placeholder(echelon) {
    return `<div style="padding:20px; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
      <h4 style="color:#a855f7; font-size:16px; font-weight:600; margin-bottom:12px;"><i class=\"fas fa-layer-group\" style=\"margin-right:8px;\"></i>${echelon} Level Mission Analysis</h4>
      <p style="color:#d1d5db; font-size:14px; line-height:1.5;">UNCLASSIFIED - Placeholder mission analysis content.</p>
    </div>`;
  }
};
