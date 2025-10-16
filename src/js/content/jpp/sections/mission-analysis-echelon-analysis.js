/**
 * JPP Step 2: Mission Analysis - Echelon Analysis Module
 * Complete 11-echelon hierarchy with practical mission analysis examples
 * Follows established patterns from OPORD sections and JPP Step 1
 */

export const echelonAnalysisModule = {
  id: 'mission-analysis-echelon-analysis',
  title: 'Echelon Analysis',
  defaultExpanded: false,

  getContent() {
    return `
      <div id="jpp-mission-analysis-echelon-analysis" class="dashboard-widgets mb-12">
        <div style="display:flex; align-items:center; margin-bottom:16px; gap:16px; position:relative; z-index:1500;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-layer-group" style="margin-right:8px; color:#9333ea; font-size:16px;"></i>
            Echelon Analysis
          </h3>
          <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
          ${['tactical','operational','strategic'].map(group => `
            <div class="jpp-ech2-dropdown" data-group="${group}" style="position:relative; display:inline-block;">
              <button id="${group}-dropdown-btn" class="jpp-ech2-btn" type="button"
                style="background:none; border:none; color:${group==='tactical'?'#9333ea':'#9ca3af'}; font-size:14px; font-weight:600; cursor:pointer; padding:7px 14px; display:flex; align-items:center; transition:color .3s ease;">
                ${group.charAt(0).toUpperCase()+group.slice(1)} Level
                <i class="fas fa-chevron-down" style="margin-left:6px; font-size:12px;"></i>
              </button>
              <div class="jpp-ech2-menu"
                style="display:none; position:absolute; top:100%; left:0; background-color:#1f2937; border:1px solid #374151; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,.35); z-index:1600; min-width:200px; padding:8px;">
                ${this.getGroupButtons(group)}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="jpp-mission-echelon-area" style="background-color:#1f2937; border-radius:8px; border:1px solid #374151; padding:24px;">
          <div style="text-align:center; padding:40px; color:#6b7280;">
            <i class="fas fa-layer-group" style="font-size:44px; margin-bottom:12px; color:#9333ea;"></i>
            <div style="color:#d1d5db; font-size:16px; font-weight:600; margin-bottom:6px;">Echelon Analysis</div>
            <div style="color:#9ca3af; font-size:14px;">Select an echelon from the menus above to view mission analysis examples.</div>
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
      <button class="jpp-ech2-item" data-tab="${b.tab}"
        style="display:block; width:100%; padding:8px 12px; background:none; border:none; color:#d1d5db; font-size:14px; text-align:left; cursor:pointer; border-radius:4px; transition:background-color .2s ease; margin-bottom:4px;">
        <i class="${b.icon}" style="margin-right:8px; font-size:12px;"></i>
        ${b.label}
      </button>
    `).join('');
  },

  initialize() {
    const styleId = 'jpp-mission-analysis-echelon-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .jpp-ech2-item:hover { background-color:#374151 !important; }
        .jpp-ech2-btn:hover { color:#9333ea !important; }
      `;
      document.head.appendChild(style);
    }

    document.querySelectorAll('.jpp-ech2-dropdown').forEach(drop => {
      const menu = drop.querySelector('.jpp-ech2-menu');
      if (!menu) return;
      drop.addEventListener('mouseenter', () => { menu.style.display = 'block'; });
      drop.addEventListener('mouseleave', () => { setTimeout(() => { menu.style.display = 'none'; }, 120); });
    });

    document.querySelectorAll('.jpp-ech2-item').forEach(item => {
      const tab = item.getAttribute('data-tab');
      const clone = item.cloneNode(true);
      item.parentNode.replaceChild(clone, item);
      clone.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); this.loadEchelon(tab); });
    });

    return true;
  },

  updateDropdownState(active) {
    const groups = {
      platoon:'tactical', company:'tactical', squadron:'tactical', battalion:'tactical',
      regiment:'operational', group:'operational', brigade:'operational',
      division:'strategic', corps:'strategic', army:'strategic', theater:'strategic'
    };
    const activeGroup = groups[active];
    ['tactical','operational','strategic'].forEach(g => {
      const btn = document.getElementById(`${g}-dropdown-btn`);
      if (btn) btn.style.color = (g===activeGroup) ? '#9333ea' : '#9ca3af';
    });
  },

  async loadEchelon(tab) {
    const area = document.querySelector('.jpp-mission-echelon-area');
    if (!area) return;

    this.updateDropdownState(tab);

    area.innerHTML = `
      <div style="padding:36px; text-align:center; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
        <div style="color:#9333ea; font-size:16px; margin-bottom:10px;">
          <i class=\"fas fa-spinner fa-spin\" style=\"margin-right:8px;\"></i>
          Loading ${tab.charAt(0).toUpperCase()+tab.slice(1)} Level Content...
        </div>
        <div style="color:#9ca3af; font-size:12px;">UNCLASSIFIED</div>
      </div>`;

    try {
      const html = await this.getEchelonContent(tab);
      setTimeout(() => { area.innerHTML = html; }, 250);
    } catch (e) {
      setTimeout(() => {
        area.innerHTML = `<div style="padding:20px; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
          <h4 style="color:#f87171; font-size:16px; font-weight:600; margin-bottom:12px;"><i class=\"fas fa-exclamation-triangle\" style=\"margin-right:8px;\"></i>Content Loading Error</h4>
          <p style="color:#d1d5db; font-size:14px; line-height:1.5; margin-bottom:16px;">UNCLASSIFIED - Unable to load ${tab.toUpperCase()} level content.</p>
        </div>`;
      }, 250);
    }
  },

  async getEchelonContent(tab) {
    switch (tab) {
      case 'platoon': { const m = await import('./mission-analysis-echelon-platoon.js'); return m.platoonEchelonModule.getContent(); }
      case 'company': { const m = await import('./mission-analysis-echelon-company.js'); return m.companyEchelonModule.getContent(); }
      case 'squadron': { const m = await import('./mission-analysis-echelon-squadron.js'); return m.squadronEchelonModule.getContent(); }
      case 'battalion': { const m = await import('./mission-analysis-echelon-battalion.js'); return m.battalionEchelonModule.getContent(); }
      case 'regiment': { const m = await import('./mission-analysis-echelon-regiment.js'); return m.regimentEchelonModule.getContent(); }
      case 'group': { const m = await import('./mission-analysis-echelon-group.js'); return m.groupEchelonModule.getContent(); }
      case 'brigade': { const m = await import('./mission-analysis-echelon-brigade.js'); return m.brigadeEchelonModule.getContent(); }
      case 'division': { const m = await import('./mission-analysis-echelon-division.js'); return m.divisionEchelonModule.getContent(); }
      case 'corps': { const m = await import('./mission-analysis-echelon-corps.js'); return m.corpsEchelonModule.getContent(); }
      case 'army': { const m = await import('./mission-analysis-echelon-army.js'); return m.armyEchelonModule.getContent(); }
      case 'theater': { const m = await import('./mission-analysis-analysis-theater.js'); return m.theaterMissionAnalysisModule.getContent(); }
      default:
        return this.getGenericContent(tab);
    }
  },

  getGenericContent(tab) {
    const label = tab.charAt(0).toUpperCase() + tab.slice(1);
    return `
      <div style="padding:20px; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
        <h4 style="color:#9333ea; font-size:16px; font-weight:600; margin-bottom:12px;">
          <i class="fas fa-layer-group" style="margin-right:8px;"></i>${label} Level Mission Analysis
        </h4>
        <p style="color:#d1d5db; font-size:14px; line-height:1.5; margin-bottom:8px;">UNCLASSIFIED - Mission analysis framework for ${label.toLowerCase()} level operations.</p>
        <p style="color:#9ca3af; font-size:12px;">Content follows JP 5-0 mission analysis procedures scaled to command level.</p>
      </div>`;
  }
};

export default echelonAnalysisModule;
