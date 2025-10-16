/**
 * OPORD Execution - Practical Examples
 * Mirrors Mission practical-examples with echelon dropdown header and modular content
 */

// Import modular execution examples
import { getDivisionExecutionExample } from './execution-practical-division.js';
import { getCorpsExecutionExample } from './execution-practical-corps.js';
import { getArmyExecutionExample } from './execution-practical-army.js';
import { getTheaterExecutionExample } from './execution-practical-theater.js';
import { getRegimentExecutionExample } from './execution-practical-regiment.js';
import { getGroupExecutionExample } from './execution-practical-group.js';
import { getBrigadeExecutionExample } from './execution-practical-brigade.js';
import { getPlatoonExecutionExample } from './execution-practical-platoon.js';
import { getCompanyExecutionExample } from './execution-practical-company.js';
import { getSquadronExecutionExample } from './execution-practical-squadron.js';
import { getBattalionExecutionExample } from './execution-practical-battalion.js';

export const practicalExamplesModule = {
  id: 'execution-practical-examples',
  title: 'Practical Examples',
  defaultExpanded: false,

  getContent() {
    return `
      <div id="execution-practical-examples-section" class="dashboard-widgets mb-12">
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
            <i class="fas fa-play" style="font-size:48px; margin-bottom:16px; color:#f97316;"></i>
            <h3 style="font-size:18px; font-weight:600; margin-bottom:8px; color:#d1d5db;">Execution Practical Examples</h3>
            <p style="font-size:14px; line-height:1.5; margin-bottom:16px;">Select an echelon level from the dropdowns above to view execution examples.</p>
            
            <!-- Framework Status -->
            <div style="background-color:#374151; padding:16px; border-radius:8px; border-left:4px solid #f97316; margin-top:20px; text-align:left;">
              <h4 style="color:#fdba74; font-size:14px; font-weight:600; margin:0 0 8px 0;">
                <i class="fas fa-trophy" style="margin-right:8px;"></i>
                Complete 11-Echelon Hierarchical Scaffolding
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.5; margin:0 0 12px 0;">
                All Strategic, Operational, and Tactical execution examples implemented with complete hierarchical scaffolding
                from Platoon through Theater levels. Full doctrinal integration achieved.
              </p>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(120px, 1fr)); gap:8px; margin-top:12px;">
                <div style="background-color:#1f2937; padding:8px; border-radius:4px; text-align:center;">
                  <div style="color:#10b981; font-size:11px; font-weight:600;">TACTICAL</div>
                  <div style="color:#16a34a; font-size:10px;">✅ COMPLETE</div>
                </div>
                <div style="background-color:#1f2937; padding:8px; border-radius:4px; text-align:center;">
                  <div style="color:#3b82f6; font-size:11px; font-weight:600;">OPERATIONAL</div>
                  <div style="color:#16a34a; font-size:10px;">✅ COMPLETE</div>
                </div>
                <div style="background-color:#1f2937; padding:8px; border-radius:4px; text-align:center;">
                  <div style="color:#a855f7; font-size:11px; font-weight:600;">STRATEGIC</div>
                  <div style="color:#16a34a; font-size:10px;">✅ COMPLETE</div>
                </div>
              </div>
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
        { tab: 'battalion', icon: 'fas fa-shield-alt', label: 'Battalion' }
      ],
      operational: [
        { tab: 'regiment', icon: 'fas fa-flag', label: 'Regiment' },
        { tab: 'group', icon: 'fas fa-layer-group', label: 'Group' },
        { tab: 'brigade', icon: 'fas fa-star', label: 'Brigade' }
      ],
      strategic: [
        { tab: 'division', icon: 'fas fa-chess-rook', label: 'Division' },
        { tab: 'corps', icon: 'fas fa-crown', label: 'Corps' },
        { tab: 'army', icon: 'fas fa-globe-americas', label: 'Army' },
        { tab: 'theater', icon: 'fas fa-satellite', label: 'Theater' }
      ]
    };

    return map[group].map(item => `
      <button class="echelon-tab-btn" data-tab="${item.tab}" style="display:flex; align-items:center; width:100%; padding:8px 12px; background:none; border:none; color:#d1d5db; font-size:13px; cursor:pointer; border-radius:4px; transition:all .2s ease; text-align:left;">
        <i class="${item.icon}" style="margin-right:8px; color:#9ca3af; font-size:12px;"></i>
        ${item.label}
      </button>
    `).join('');
  },

  async loadEchelonExample(echelon) {
    const content = document.querySelector('.example-tab-content');
    if (!content) return;

    // Load modular execution examples for Strategic, Operational, and Tactical echelons
    switch (echelon) {
      case 'division':
        content.innerHTML = getDivisionExecutionExample();
        return;
      case 'corps':
        content.innerHTML = getCorpsExecutionExample();
        return;
      case 'army':
        content.innerHTML = getArmyExecutionExample();
        return;
      case 'theater':
        content.innerHTML = getTheaterExecutionExample();
        return;
      case 'regiment':
        content.innerHTML = getRegimentExecutionExample();
        return;
      case 'group':
        content.innerHTML = getGroupExecutionExample();
        return;
      case 'brigade':
        content.innerHTML = getBrigadeExecutionExample();
        return;
      case 'platoon':
        content.innerHTML = getPlatoonExecutionExample();
        return;
      case 'company':
        content.innerHTML = getCompanyExecutionExample();
        return;
      case 'squadron':
        content.innerHTML = getSquadronExecutionExample();
        return;
      case 'battalion':
        content.innerHTML = getBattalionExecutionExample();
        return;
      default:
        // This should not occur - all 11 echelons are now implemented
        content.innerHTML = `
          <div style="padding:24px;">
            <div style="display:flex; align-items:center; margin-bottom:16px;">
              <i class="fas fa-exclamation-triangle" style="margin-right:12px; color:#f59e0b; font-size:20px;"></i>
              <h3 style="font-size:18px; font-weight:600; color:white; margin:0;">
                Unknown Echelon: ${echelon.charAt(0).toUpperCase() + echelon.slice(1)}
              </h3>
            </div>

            <div style="background-color:#374151; padding:20px; border-radius:8px; border-left:4px solid #f59e0b;">
              <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
                <i class="fas fa-question-circle" style="margin-right:8px;"></i>
                Echelon Not Recognized
              </h4>
              <p style="color:#d1d5db; font-size:12px; line-height:1.5; margin:0 0 12px 0;">
                The requested echelon "${echelon}" is not recognized. All 11 standard military echelons have been implemented:
              </p>
              <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:8px; margin-top:12px;">
                <div style="background-color:#1f2937; padding:8px; border-radius:4px;">
                  <div style="color:#10b981; font-size:11px; font-weight:600;">TACTICAL</div>
                  <div style="color:#d1d5db; font-size:10px;">Platoon, Company, Squadron, Battalion</div>
                </div>
                <div style="background-color:#1f2937; padding:8px; border-radius:4px;">
                  <div style="color:#3b82f6; font-size:11px; font-weight:600;">OPERATIONAL</div>
                  <div style="color:#d1d5db; font-size:10px;">Regiment, Group, Brigade</div>
                </div>
                <div style="background-color:#1f2937; padding:8px; border-radius:4px;">
                  <div style="color:#a855f7; font-size:11px; font-weight:600;">STRATEGIC</div>
                  <div style="color:#d1d5db; font-size:10px;">Division, Corps, Army, Theater</div>
                </div>
              </div>
            </div>
          </div>
        `;
    }
  },

  initialize() {
    // Inject hover CSS styles
    this.injectDropdownCSS();

    // Setup dropdown functionality
    const dropdowns = document.querySelectorAll('.echelon-dropdown');
    dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.echelon-dropdown-btn');
      const content = dropdown.querySelector('.dropdown-content');

      if (btn && content) {
        let hideTimeout;

        dropdown.addEventListener('mouseenter', () => {
          // Clear any pending hide timeout
          if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
          }

          // Calculate position relative to viewport for fixed positioning
          const rect = btn.getBoundingClientRect();
          content.style.top = `${rect.bottom + 2}px`;
          content.style.left = `${rect.left}px`;
          content.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', (e) => {
          // Check if mouse is moving to the dropdown content
          const rect = content.getBoundingClientRect();
          const mouseX = e.clientX;
          const mouseY = e.clientY;

          // If mouse is within dropdown content bounds, don't hide
          if (mouseX >= rect.left && mouseX <= rect.right &&
              mouseY >= rect.top && mouseY <= rect.bottom) {
            return;
          }

          hideTimeout = setTimeout(() => {
            content.style.display = 'none';
          }, 150);
        });

        // Add mouseenter/mouseleave to dropdown content itself
        content.addEventListener('mouseenter', () => {
          // Clear any pending hide timeout
          if (hideTimeout) {
            clearTimeout(hideTimeout);
            hideTimeout = null;
          }
        });

        content.addEventListener('mouseleave', () => {
          hideTimeout = setTimeout(() => {
            content.style.display = 'none';
          }, 150);
        });
      }
    });

    // Setup echelon button clicks
    const echelonBtns = document.querySelectorAll('.echelon-tab-btn');
    echelonBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const echelon = btn.getAttribute('data-tab');
        if (echelon) {
          this.loadEchelonExample(echelon);
        }
      });
    });
  },

  injectDropdownCSS() {
    const style = document.getElementById('execution-practical-dropdown-hover-styles') || document.createElement('style');
    style.id = 'execution-practical-dropdown-hover-styles';
    style.textContent = `
      /* Execution practical examples dropdown hover effects */
      .echelon-dropdown-btn:hover { color:#10b981 !important; }
      .echelon-tab-btn:hover { background-color:#374151 !important; }
      .echelon-dropdown-btn { transition: color .3s ease !important; }
      .dropdown-content { transition: opacity .2s ease !important; }
    `;
    const existing = document.getElementById('execution-practical-dropdown-hover-styles');
    if (existing) existing.remove();
    document.head.appendChild(style);
  }
};
