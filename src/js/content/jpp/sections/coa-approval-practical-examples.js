/**
 * JPP Step 6: COA Approval - Practical Examples Module
 * Implements three-tier hover dropdowns (tactical/operational/strategic) and dynamic imports
 */

export const practicalExamplesModule = {
  id: 'coa-approval-practical-examples',
  title: 'Practical Examples',
  defaultExpanded: false,

  getContent() {
    return `
      <div id="jpp-coa-approval-practical-examples" class="dashboard-widgets mb-12">
        <!-- Header Row with Echelon Hover Dropdowns -->
        <div style="display:flex; align-items:center; margin-bottom:16px; gap:16px; position:relative; z-index:1500;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-book-open" style="margin-right:8px; color:#3b82f6; font-size:16px;"></i>
            Practical Examples
          </h3>
          <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
          ${['tactical','operational','strategic'].map(group => `
            <div class="jpp-coa-approval-ech-dropdown" data-group="${group}" style="position:relative; display:inline-block;">
              <button class="jpp-coa-approval-ech-btn" type="button"
                style="background:none; border:none; color:${group==='tactical'?'#3b82f6':'#9ca3af'}; font-size:14px; font-weight:600; cursor:pointer; padding:7px 14px; display:flex; align-items:center; transition:color .3s ease;">
                ${group.charAt(0).toUpperCase()+group.slice(1)} Level
                <i class="fas fa-chevron-down" style="margin-left:6px; font-size:12px;"></i>
              </button>
              <div class="jpp-coa-approval-ech-menu"
                style="display:none; position:absolute; top:100%; left:0; background-color:#1f2937; border:1px solid #374151; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,.35); z-index:1600; min-width:200px; padding:8px;">
                ${this.getGroupButtons(group)}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Dynamic Content Area -->
        <div class="jpp-coa-approval-examples-area" style="background-color:#1f2937; border-radius:8px; border:1px solid #374151; padding:24px;">
          <div style="text-align:center; padding:40px; color:#6b7280;">
            <i class="fas fa-book-open" style="font-size:44px; margin-bottom:12px; color:#3b82f6;"></i>
            <div style="color:#d1d5db; font-size:16px; font-weight:600; margin-bottom:6px;">Practical Examples</div>
            <div style="color:#9ca3af; font-size:14px;">Select an echelon from the menus above to view content.</div>
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
      <button class="jpp-coa-approval-ech-item" data-tab="${b.tab}"
        style="display:block; width:100%; padding:8px 12px; background:none; border:none; color:#d1d5db; font-size:14px; text-align:left; cursor:pointer; border-radius:4px; transition:background-color .2s ease; margin-bottom:4px;">
        <i class="${b.icon}" style="margin-right:8px; font-size:12px;"></i>
        ${b.label}
      </button>
    `).join('');
  },

  initialize() {
    // Inject hover CSS
    const styleId = 'jpp-coa-approval-practical-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = `
        .jpp-coa-approval-ech-item:hover { background-color:#374151 !important; }
        .jpp-coa-approval-ech-btn:hover { color:#3b82f6 !important; }
      `;
      document.head.appendChild(style);
    }

    // Hover open/close behavior
    document.querySelectorAll('.jpp-coa-approval-ech-dropdown').forEach(drop => {
      const menu = drop.querySelector('.jpp-coa-approval-ech-menu');
      if (!menu) return;
      drop.addEventListener('mouseenter', () => { menu.style.display = 'block'; });
      drop.addEventListener('mouseleave', () => { setTimeout(() => { menu.style.display = 'none'; }, 120); });
    });

    // Item click handling
    document.querySelectorAll('.jpp-coa-approval-ech-item').forEach(item => {
      const tab = item.getAttribute('data-tab');
      const clone = item.cloneNode(true);
      item.parentNode.replaceChild(clone, item);
      clone.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); this.loadEchelon(tab); });
    });

    return true;
  },

  async loadEchelon(tab) {
    const area = document.querySelector('.jpp-coa-approval-examples-area');
    if (!area) return;
    area.innerHTML = `
      <div style="padding:36px; text-align:center; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
        <div style="color:#3b82f6; font-size:16px; margin-bottom:10px;">
          <i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i>
          Loading ${tab.charAt(0).toUpperCase()+tab.slice(1)} Level Content...
        </div>
        <div style="color:#9ca3af; font-size:12px;">UNCLASSIFIED</div>
      </div>`;

    try {
      const html = await this.importEchelon(tab);
      setTimeout(() => { area.innerHTML = html; }, 200);
    } catch (e) {
      console.error('Failed to load COA approval practical examples module for', tab, e);
      setTimeout(() => {
        area.innerHTML = `<div style="padding:20px; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
          <h4 style="color:#ef4444; font-size:16px; font-weight:600; margin-bottom:12px;"><i class="fas fa-exclamation-triangle" style="margin-right:8px;"></i>Content Loading Error</h4>
          <p style="color:#d1d5db; font-size:14px; line-height:1.5; margin-bottom:8px;">UNCLASSIFIED - Unable to load ${tab.toUpperCase()} level practical example content.</p>
        </div>`;
      }, 200);
    }
  },

  async importEchelon(tab) {
    switch (tab) {
      case 'platoon': { const m = await import('./coa-approval-practical-platoon.js'); return m.platoonPracticalModule.getContent(); }
      case 'company': { const m = await import('./coa-approval-practical-company.js'); return m.companyPracticalModule.getContent(); }
      case 'squadron': { const m = await import('./coa-approval-practical-squadron.js'); return m.squadronPracticalModule.getContent(); }
      case 'battalion': { const m = await import('./coa-approval-practical-battalion.js'); return m.battalionPracticalModule.getContent(); }
      case 'regiment': { const m = await import('./coa-approval-practical-regiment.js'); return m.regimentPracticalModule.getContent(); }
      case 'group': { const m = await import('./coa-approval-practical-group.js'); return m.groupPracticalModule.getContent(); }
      case 'brigade': { const m = await import('./coa-approval-practical-brigade.js'); return m.brigadePracticalModule.getContent(); }
      case 'division': { const m = await import('./coa-approval-practical-division.js'); return m.divisionPracticalModule.getContent(); }
      case 'corps': { const m = await import('./coa-approval-practical-corps.js'); return m.corpsPracticalModule.getContent(); }
      case 'army': { const m = await import('./coa-approval-practical-army.js'); return m.armyPracticalModule.getContent(); }
      case 'theater': { const m = await import('./coa-approval-practical-theater.js'); return m.theaterPracticalModule.getContent(); }
      default:
        return `<div style="padding:20px; background-color:#1f2937; border-radius:8px; border:1px solid #374151; color:#d1d5db;">Unknown echelon: ${tab}</div>`;
    }
  }
};

export default practicalExamplesModule;
