/**
 * OPORD Annexes - Echelon Analysis Module (Framework)
 */

export const echelonAnalysisModule = {
  id: 'annexes-echelon-analysis',
  title: 'Echelon Analysis',
  defaultExpanded: false,
  getContent() {
    return `
      <div id="annexes-echelon-analysis-section" class="dashboard-widgets mb-12">
        <div style="display:flex; align-items:center; margin-bottom:16px; gap:16px; position:relative;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-layer-group" style="margin-right:8px; color:#a855f7; font-size:16px;"></i>
            Echelon Analysis
          </h3>
          <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
          ${['tactical','operational','strategic'].map(group => `
            <div class="echelon-dropdown" style="position:relative; display:inline-block;">
              <button class="echelon-dropdown-btn" type="button" data-group="${group}" style="background:none; border:none; color:${group==='tactical'?'#a855f7':'#9ca3af'}; font-size:14px; font-weight:600; cursor:pointer; padding:7px 14px; display:flex; align-items:center; transition:color .3s ease;">
                ${group.charAt(0).toUpperCase()+group.slice(1)} Level
                <i class="fas fa-chevron-down" style="margin-left:6px; font-size:12px;"></i>
              </button>
              <div class="dropdown-content" style="display:none; position:absolute; top:100%; left:0; background-color:#1f2937; border:1px solid #374151; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,.3); z-index:1000; min-width:200px; padding:8px;">
                ${this.getButtons(group)}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="annexes-analysis-tab-content" style="background-color:#1f2937; border-radius:8px; border:1px solid #374151; padding:24px; margin-top:16px;">
          <div style="text-align:center; padding:40px; color:#6b7280;">
            <i class="fas fa-layer-group" style="font-size:36px; margin-bottom:12px; color:#a855f7;"></i>
            <div style="color:#d1d5db; font-size:14px;">Select an echelon level to load a placeholder echelon analysis.</div>
          </div>
        </div>
      </div>
    `;
  },
  getButtons(group) {
    const map = {
      tactical: [
        {tab:'platoon', icon:'fas fa-users', label:'Platoon'},
        {tab:'company', icon:'fas fa-user-friends', label:'Company'},
        {tab:'squadron', icon:'fas fa-horse-head', label:'Squadron'},
        {tab:'battalion', icon:'fas fa-flag', label:'Battalion'}
      ],
      operational: [
        {tab:'group', icon:'fas fa-layer-group', label:'Group'},
        {tab:'regiment', icon:'fas fa-medal', label:'Regiment'},
        {tab:'brigade', icon:'fas fa-chess-rook', label:'Brigade'}
      ],
      strategic: [
        {tab:'division', icon:'fas fa-chess-king', label:'Division'},
        {tab:'corps', icon:'fas fa-crown', label:'Corps'},
        {tab:'army', icon:'fas fa-star', label:'Army'},
        {tab:'theater', icon:'fas fa-globe', label:'Theater'}
      ]
    };
    return map[group].map(b => `
      <button class="annexes-analysis-tab-btn dropdown-item" data-tab="${b.tab}" style="display:block; width:100%; padding:8px 12px; background:none; border:none; color:#d1d5db; font-size:14px; text-align:left; cursor:pointer; border-radius:4px; transition:background-color .2s ease; margin-bottom:4px;">
        <i class="${b.icon}" style="margin-right:8px; font-size:12px;"></i>
        ${b.label}
      </button>
    `).join('');
  },
  initialize() {
    document.querySelectorAll('.echelon-dropdown').forEach(dropdown => {
      dropdown.addEventListener('mouseenter', () => { const dc = dropdown.querySelector('.dropdown-content'); if (dc) dc.style.display='block'; });
      dropdown.addEventListener('mouseleave', () => { const dc = dropdown.querySelector('.dropdown-content'); if (dc) dc.style.display='none'; });
    });
    document.querySelectorAll('.annexes-analysis-tab-btn').forEach(btn => {
      const clone = btn.cloneNode(true);
      const tab = btn.getAttribute('data-tab');
      btn.parentNode.replaceChild(clone, btn);
      clone.addEventListener('mouseenter', () => { clone.style.backgroundColor = '#374151'; });
      clone.addEventListener('mouseleave', () => { clone.style.backgroundColor = 'transparent'; });
      clone.addEventListener('click', async (e) => {
        e.preventDefault(); e.stopPropagation();
        const area = document.querySelector('.annexes-analysis-tab-content');
        if (!area) return;
        area.innerHTML = '<div style="padding:24px; text-align:center;"><i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i>Loading ' + tab + ' analysis placeholder...</div>';
        try {
          const mod = await import('./annexes-analysis-' + tab + '.js');
          const html = mod?.default?.getContent ? mod.default.getContent() : '<div class="annexes-card">No module for ' + tab + '</div>';
          area.innerHTML = html;
        } catch (e) {
          area.innerHTML = '<div class="annexes-card">Failed to load ' + tab + ' analysis placeholder.</div>';
        }
      });
    });
    return true;
  }
};

export default echelonAnalysisModule;

