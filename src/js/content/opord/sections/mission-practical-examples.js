/**
 * OPORD Mission - Practical Examples
 * Mirrors Situation practical-examples with echelon dropdown header
 */

export const practicalExamplesModule = {
  id: 'mission-practical-examples',
  title: 'Practical Examples',
  defaultExpanded: false,

  getContent() {
    return `
      <div id="mission-practical-examples-section" class="dashboard-widgets mb-12">
        <!-- Header Row with Echelon Dropdowns -->
        <div style="display:flex; align-items:center; margin-bottom:16px; gap:16px; position:relative;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-file-alt" style="margin-right:8px; color:#facc15; font-size:16px;"></i>
            Practical Examples
          </h3>
          <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
          ${['tactical','operational','strategic'].map(group => `
            <div class="echelon-dropdown" style="position:relative; display:inline-block;">
              <button id="${group}-dropdown-btn" class="echelon-dropdown-btn" data-group="${group}" style="background:none; border:none; color:${group==='tactical'?'#10b981':'#9ca3af'}; font-size:14px; font-weight:600; cursor:pointer; padding:7px 14px; display:flex; align-items:center; transition:color .3s ease;">
                ${group.charAt(0).toUpperCase()+group.slice(1)} Level
                <i class="fas fa-chevron-down" style="margin-left:6px; font-size:12px;"></i>
              </button>
              <div id="${group}-dropdown-content" class="dropdown-content" style="display:none; position:fixed; background-color:#1f2937; border:1px solid #374151; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,.3); z-index:10000; min-width:200px; padding:8px; max-height:300px; overflow-y:auto;">
                ${this.getGroupButtons(group)}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Content Area for Dynamic Loading -->
        <div class="example-tab-content" style="background-color:#1f2937; border-radius:8px; border:1px solid #374151; padding:24px; margin-top:16px;">
          <div style="text-align:center; padding:40px; color:#6b7280;">
            <i class="fas fa-file-alt" style="font-size:48px; margin-bottom:16px; color:#10b981;"></i>
            <h3 style="font-size:18px; font-weight:600; margin-bottom:8px; color:#d1d5db;">Practical Examples</h3>
            <p style="font-size:14px; line-height:1.5;">Select an echelon level from the dropdowns above to view placeholder examples.</p>
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
      <button class="example-tab-btn dropdown-item" data-tab="${b.tab}" style="display:block; width:100%; padding:8px 12px; background:none; border:none; color:#d1d5db; font-size:14px; text-align:left; cursor:pointer; border-radius:4px; transition:background-color .2s ease; margin-bottom:4px;">
        <i class="${b.icon}" style="margin-right:8px; font-size:12px;"></i>
        ${b.label}
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
      const content = dropdown.querySelector('.dropdown-content');
      const group = btn.getAttribute('data-group');
      let hideTimeout;

      dropdown.addEventListener('mouseenter', () => {
        // Clear any pending hide timeout
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          hideTimeout = null;
        }
        this.show(group);
      });

      dropdown.addEventListener('mouseleave', (e) => {
        if (content) {
          // Check if mouse is moving to the dropdown content
          const rect = content.getBoundingClientRect();
          const mouseX = e.clientX;
          const mouseY = e.clientY;

          // If mouse is within dropdown content bounds, don't hide
          if (mouseX >= rect.left && mouseX <= rect.right &&
              mouseY >= rect.top && mouseY <= rect.bottom) {
            return;
          }
        }

        hideTimeout = setTimeout(() => this.hide(group), 150);
      });

      // Add mouseenter/mouseleave to dropdown content itself
      if (content) {
        content.addEventListener('mouseenter', () => {
          // Clear any pending hide timeout
          if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
          }
        });

        content.addEventListener('mouseleave', () => {
          hideTimeout = setTimeout(() => this.hide(group), 150);
        });
      }
    });
  },

  initializeButtons() {
    document.querySelectorAll('.example-tab-btn').forEach(btn => {
      const clone = btn.cloneNode(true);
      const tab = btn.getAttribute('data-tab');
      btn.parentNode.replaceChild(clone, btn);
      clone.addEventListener('mouseenter', () => { clone.style.backgroundColor = '#374151'; });
      clone.addEventListener('mouseleave', () => { clone.style.backgroundColor = 'transparent'; });
      clone.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); this.switch(tab); });
    });
  },

  injectDropdownCSS() {
    const style = document.getElementById('mission-dropdown-hover-styles') || document.createElement('style');
    style.id = 'mission-dropdown-hover-styles';
    style.textContent = `
      .echelon-dropdown-btn:hover { color:#10b981 !important; }
      .dropdown-item:hover { background-color:#374151 !important; }
      .echelon-dropdown-btn { transition: color .3s ease !important; }
      .dropdown-content { transition: opacity .2s ease !important; }
    `;
    const existing = document.getElementById('mission-dropdown-hover-styles');
    if (existing) existing.remove();
    document.head.appendChild(style);
  },

  show(group) {
    const el = document.getElementById(`${group}-dropdown-content`);
    const btn = document.querySelector(`[data-group="${group}"]`);
    if (el && btn) {
      const rect = btn.getBoundingClientRect();
      el.style.top = `${rect.bottom + 2}px`;
      el.style.left = `${rect.left}px`;
      el.style.display = 'block';
    }
  },
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
      if (btn) btn.style.color = (g===activeGroup)? '#10b981' : '#9ca3af';
    });
  },

  async loadEchelon(tab) {
    const area = document.querySelector('.example-tab-content');
    if (!area) return;
    area.innerHTML = `<div style="padding:40px; text-align:center; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
        <div style="color:#10b981; font-size:16px; margin-bottom:12px;">
          <i class=\"fas fa-spinner fa-spin\" style=\"margin-right:8px;\"></i>
          Loading ${tab.charAt(0).toUpperCase()+tab.slice(1)} Level Content...
        </div>
        <p style="color:#6ee7b7; font-size:12px;">UNCLASSIFIED</p>
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
      case 'platoon': { const m = await import('./mission-practical-platoon.js'); return m.platoonPracticalModule.getContent(); }
      case 'company': { const m = await import('./mission-practical-company.js'); return m.companyPracticalModule.getContent(); }
      case 'squadron': { const m = await import('./mission-practical-squadron.js'); return m.squadronPracticalModule.getContent(); }
      case 'battalion': { const m = await import('./mission-practical-battalion.js'); return m.battalionPracticalModule.getContent(); }
      case 'regiment': { const m = await import('./mission-practical-regiment.js'); return m.regimentPracticalModule.getContent(); }
      case 'group': { const m = await import('./mission-practical-group.js'); return m.groupPracticalModule.getContent(); }
      case 'brigade': { const m = await import('./mission-practical-brigade.js'); return m.brigadePracticalModule.getContent(); }
      case 'division': { const m = await import('./mission-practical-division.js'); return m.divisionPracticalModule.getContent(); }
      case 'corps': { const m = await import('./mission-practical-corps.js'); return m.corpsPracticalModule.getContent(); }
      case 'army': { const m = await import('./mission-practical-army.js'); return m.armyPracticalModule.getContent(); }
      case 'theater': { const m = await import('./mission-practical-theater.js'); return m.theaterPracticalModule.getContent(); }
      default: return this.placeholder(tab);
    }
  },

  placeholder(tab) {
    return `<div style="padding:20px; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
      <h4 style="color:#10b981; font-size:16px; font-weight:600; margin-bottom:12px;"><i class=\"fas fa-layer-group\" style=\"margin-right:8px;\"></i>${tab} Level Example</h4>
      <p style="color:#d1d5db; font-size:14px; line-height:1.5; margin-bottom:16px;">UNCLASSIFIED - Placeholder mission practical example content.</p>
    </div>`;
  }
};

