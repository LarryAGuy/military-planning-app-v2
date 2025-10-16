/** Tactics: Reconnaissance & Security - Echelon Analysis (Purple theme) */
export const reconnaissanceAndSecurityEchelonAnalysisTacticsModule = {
  id: 'reconnaissance-and-security-echelon-analysis',
  title: 'Echelon Analysis',
  defaultExpanded: false,
  _handlers: [],
  _activeTab: null,
  getContent(){
    return `
      <div id="rs-echelon-analysis-section" style="margin-bottom:24px;">
        <!-- Header with Integrated Dropdown Navigation -->
        <div style="display:flex; align-items:center; margin-bottom:16px; gap:16px; position:relative;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-layer-group" style="margin-right:8px; color:#a855f7; font-size:16px;"></i>
            Echelon Analysis
          </h3>
          <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
          ${['tactical','operational','strategic'].map(group => `
            <div class="echelon-dropdown" style="position:relative; display:inline-block;">
              <button id="${group}-dropdown-btn" class="echelon-dropdown-btn" data-group="${group}" style="background:none; border:none; color:${group==='tactical'?'#a855f7':'#9ca3af'}; font-size:14px; font-weight:600; cursor:pointer; padding:7px 14px; display:flex; align-items:center; transition:color .3s ease;">
                ${group.charAt(0).toUpperCase()+group.slice(1)} Level
                <i class="fas fa-chevron-down" style="margin-left:6px; font-size:12px;"></i>
              </button>
              <div id="${group}-dropdown-content" class="dropdown-content" style="display:none; position:absolute; top:100%; left:0; background-color:#1f2937; border:1px solid #374151; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,.3); z-index:1000; min-width:200px; padding:8px;">
                ${this.getGroupButtons(group)}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Content Area -->
        <div id="rs-echelon-content" style="min-height:300px; background:#1f2937; border:1px solid #374151; border-radius:8px; padding:40px; display:flex; flex-direction:column; justify-content:center; align-items:center; text-align:center;">
          <i class="fas fa-layer-group" style="font-size:48px; color:#a855f7; margin-bottom:16px; opacity:0.5;"></i>
          <h4 style="color:#d1d5db; font-size:18px; font-weight:600; margin:0 0 8px 0;">Reconnaissance & Security - Echelon Analysis</h4>
          <p style="color:#9ca3af; font-size:14px; margin:0; max-width:400px; line-height:1.5;">
            Select an echelon above to view analysis content. Doctrinal content will be implemented in future development phases.
          </p>
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
        { tab: 'battalion', icon: 'fas fa-flag', label: 'Battalion' }
      ],
      operational: [
        { tab: 'brigade', icon: 'fas fa-chess-rook', label: 'Brigade' },
        { tab: 'regiment', icon: 'fas fa-medal', label: 'Regiment' },
        { tab: 'group', icon: 'fas fa-layer-group', label: 'Group' }
      ],
      strategic: [
        { tab: 'division', icon: 'fas fa-chess-king', label: 'Division' },
        { tab: 'corps', icon: 'fas fa-crown', label: 'Corps' },
        { tab: 'army', icon: 'fas fa-star', label: 'Army' },
        { tab: 'theater', icon: 'fas fa-globe', label: 'Theater' }
      ]
    };
    return (map[group] || []).map(item => `
      <button class="echelon-tab-btn dropdown-item" data-tab="${item.tab}" style="display:block; width:100%; padding:8px 12px; background:none; border:none; color:#d1d5db; font-size:14px; text-align:left; cursor:pointer; border-radius:4px; transition:background-color .2s ease; margin-bottom:4px;">
        <i class="${item.icon}" style="margin-right:8px; font-size:12px;"></i>
        ${item.label}
      </button>
    `).join('');
  },
  initialize() {
    this.initializeDropdowns();
    this.initializeButtons();
    this.injectDropdownCSS();
    return true;
  },

  initializeDropdowns() {
    document.querySelectorAll('.echelon-dropdown').forEach(dropdown => {
      const btn = dropdown.querySelector('.echelon-dropdown-btn');
      const group = btn.getAttribute('data-group');
      dropdown.addEventListener('mouseenter', () => this.show(group));
      dropdown.addEventListener('mouseleave', () => setTimeout(() => this.hide(group), 150));
    });
  },

  initializeButtons() {
    document.querySelectorAll('.echelon-tab-btn').forEach(btn => {
      const tab = btn.getAttribute('data-tab');
      const clone = btn.cloneNode(true);
      btn.parentNode.replaceChild(clone, btn);
      const handler = (e) => { e.preventDefault(); e.stopPropagation(); this.switch(tab); };
      clone.addEventListener('click', handler);
      this._handlers.push({ el: clone, type: 'click', fn: handler });
    });
  },

  injectDropdownCSS() {
    if (document.getElementById('rs-echelon-dropdown-styles')) return;
    const style = document.createElement('style');
    style.id = 'rs-echelon-dropdown-styles';
    style.textContent = `
      .dropdown-item:hover { background-color: #374151 !important; }
      .dropdown-item:last-child { margin-bottom: 0 !important; }
    `;
    document.head.appendChild(style);
  },

  show(group) { const el = document.getElementById(`${group}-dropdown-content`); if (el) el.style.display = 'block'; },
  hide(group) { const el = document.getElementById(`${group}-dropdown-content`); if (el) el.style.display = 'none'; },
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
      const btn = document.getElementById(`${g}-dropdown-btn`);
      if (btn) btn.style.color = (g===activeGroup)? '#a855f7' : '#9ca3af';
    });
  },

  loadEchelon(tab) {
    if (this._activeTab === tab) return;
    this._activeTab = tab;
    const area = document.getElementById('rs-echelon-content');
    if (!area) return;
    area.innerHTML = '<div style="text-align:center; padding:40px;"><i class="fas fa-spinner fa-spin" style="font-size:18px; color:#7c3aed;"></i><p class="text-gray-400">Loading...</p></div>';
    try {
      this.importEchelon(tab).then(html => area.innerHTML = html);
    } catch(err) {
      console.error('Failed to load RS echelon analysis:', err);
      area.innerHTML = '<div class="text-red-400">Failed to load content</div>';
    }
  },
  async importEchelon(tab){
    switch(tab){
      case 'platoon': { const m = await import('./echelon-analysis-platoon.js'); return m.platoonTacticsModule.getContent(); }
      case 'company': { const m = await import('./echelon-analysis-company.js'); return m.companyTacticsModule.getContent(); }
      case 'squadron': { const m = await import('./echelon-analysis-squadron.js'); return m.squadronTacticsModule.getContent(); }
      case 'battalion': { const m = await import('./echelon-analysis-battalion.js'); return m.battalionTacticsModule.getContent(); }
      case 'regiment': { const m = await import('./echelon-analysis-regiment.js'); return m.regimentTacticsModule.getContent(); }
      case 'group': { const m = await import('./echelon-analysis-group.js'); return m.groupTacticsModule.getContent(); }
      case 'brigade': { const m = await import('./echelon-analysis-brigade.js'); return m.brigadeTacticsModule.getContent(); }
      case 'division': { const m = await import('./echelon-analysis-division.js'); return m.divisionTacticsModule.getContent(); }
      case 'corps': { const m = await import('./echelon-analysis-corps.js'); return m.corpsTacticsModule.getContent(); }
      case 'army': { const m = await import('./echelon-analysis-army.js'); return m.armyTacticsModule.getContent(); }
      case 'theater': { const m = await import('./echelon-analysis-theater.js'); return m.theaterTacticsModule.getContent(); }
      default: return '<div class="text-gray-400">Unknown echelon</div>';
    }
  },
  cleanup(){ this._handlers.forEach(({el,type,fn})=>el.removeEventListener(type,fn)); this._handlers=[]; }
};
export default reconnaissanceAndSecurityEchelonAnalysisTacticsModule;
