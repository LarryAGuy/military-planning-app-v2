/**
 * OPORD Execution - Echelon Analysis Integration Module
 * Imports and manages all 11 execution analysis echelon modules
 * Provides unified integration system for execution analysis content
 *
 * CHROME CACHE FIX: Version 2.4.0 - Timestamp: 2025-01-13-16:30:00
 * Enhanced Chrome compatibility with robust DOM detection and debugging
 * Cache-busting enabled for dynamic imports
 */

// Import all 11 execution analysis echelon modules
import { theaterExecutionAnalysisModule } from './execution-analysis-theater.js';
import { armyExecutionAnalysisModule } from './execution-analysis-army.js';
import { corpsExecutionAnalysisModule } from './execution-analysis-corps.js';
import { divisionExecutionAnalysisModule } from './execution-analysis-division.js';
import { regimentExecutionAnalysisModule } from './execution-analysis-regiment.js';
import { groupExecutionAnalysisModule } from './execution-analysis-group.js';
import { brigadeExecutionAnalysisModule } from './execution-analysis-brigade.js';
import { battalionExecutionAnalysisModule } from './execution-analysis-battalion.js';
import { companyExecutionAnalysisModule } from './execution-analysis-company.js';
import { squadronExecutionAnalysisModule } from './execution-analysis-squadron.js';
import { platoonExecutionAnalysisModule } from './execution-analysis-platoon.js';

export const echelonAnalysisModule = {
    id: 'execution-echelon-analysis',
    title: 'Echelon Analysis',
    defaultExpanded: false,

    // Echelon module mapping
    echelonModules: {
        // Strategic Level
        'theater': theaterExecutionAnalysisModule,
        'army': armyExecutionAnalysisModule,
        'corps': corpsExecutionAnalysisModule,
        'division': divisionExecutionAnalysisModule,
        // Operational Level
        'regiment': regimentExecutionAnalysisModule,
        'group': groupExecutionAnalysisModule,
        'brigade': brigadeExecutionAnalysisModule,
        // Tactical Level
        'battalion': battalionExecutionAnalysisModule,
        'company': companyExecutionAnalysisModule,
        'squadron': squadronExecutionAnalysisModule,
        'platoon': platoonExecutionAnalysisModule
    },

    getContent() {
        return `
            <!-- Execution Echelon Analysis Section -->
            <div id="execution-echelon-analysis-section" class="dashboard-widgets mb-12">
                <!-- Header Row with Echelon Dropdowns -->
                <div style="display:flex; align-items:center; margin-bottom:16px; gap:16px; position:relative;">
                    <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
                        <i class="fas fa-layer-group" style="margin-right:8px; color:#a855f7; font-size:16px;"></i>
                        Echelon Analysis
                    </h3>
                    <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>

                    ${this.dropdownButton('tactical', 'Tactical Level', '#10b981')}
                    <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
                    ${this.dropdownButton('operational', 'Operational Level', '#3b82f6')}
                    <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
                    ${this.dropdownButton('strategic', 'Strategic Level', '#a855f7')}
                </div>

                <!-- Content Area for Dynamic Loading -->
                <div class="execution-analysis-tab-content" style="background-color:#1f2937; border-radius:8px; border:1px solid #374151; padding:24px; margin-top:16px;">
                    <div style="text-align:center; padding:40px; color:#6b7280;">
                        <i class="fas fa-layer-group" style="font-size:48px; margin-bottom:16px; color:#a855f7;"></i>
                        <h3 style="font-size:18px; font-weight:600; margin-bottom:8px; color:#d1d5db;">Execution Echelon Analysis</h3>
                        <p style="font-size:14px; line-height:1.5; margin-bottom:16px;">Select an echelon level from the dropdowns above to view comprehensive execution analysis content.</p>

                        <!-- Framework Information -->
                        <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:3px solid #a855f7; margin-top:16px; text-align:left;">
                            <h4 style="color:#c084fc; font-size:14px; font-weight:600; margin:0 0 8px 0;">
                                <i class="fas fa-info-circle" style="margin-right:8px;"></i>
                                Available Echelons
                            </h4>
                            <p style="color:#d1d5db; font-size:12px; margin:0 0 12px 0;">
                                Complete 11-echelon execution analysis framework covering all Army command levels:
                            </p>
                            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:8px;">
                                <div style="background-color:#1f2937; padding:8px; border-radius:4px;">
                                    <div style="color:#10b981; font-size:11px; font-weight:600; margin-bottom:4px;">TACTICAL</div>
                                    <div style="color:#9ca3af; font-size:10px; line-height:1.3;">Platoon, Company, Squadron, Battalion</div>
                </div>
                <div style="background-color:#1f2937; padding:8px; border-radius:4px;">
                  <div style="color:#3b82f6; font-size:11px; font-weight:600; margin-bottom:4px;">OPERATIONAL</div>
                  <div style="color:#9ca3af; font-size:10px; line-height:1.3;">Regiment, Group, Brigade</div>
                </div>
                <div style="background-color:#1f2937; padding:8px; border-radius:4px;">
                  <div style="color:#a855f7; font-size:11px; font-weight:600; margin-bottom:4px;">STRATEGIC</div>
                  <div style="color:#9ca3af; font-size:10px; line-height:1.3;">Division, Corps, Army, Theater</div>
                </div>
              </div>
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

    const items = map[group];
    return `
      <div class="echelon-dropdown" style="position:relative; display:inline-block;">
        <button class="echelon-dropdown-btn" data-group="${group}" style="background:none; border:none; color:${color}; font-size:14px; font-weight:600; cursor:pointer; padding:7px 14px; display:flex; align-items:center; transition:color .3s ease;">
          ${label}
          <i class="fas fa-chevron-down" style="margin-left:6px; font-size:12px;"></i>
        </button>
        <div class="dropdown-content" style="display:none; position:absolute; top:100%; left:0; background-color:#1f2937; border:1px solid #374151; border-radius:6px; box-shadow:0 4px 12px rgba(0,0,0,.3); z-index:1000; min-width:200px; padding:8px;">
          ${items.map(item => `
            <button class="echelon-analysis-btn" data-echelon="${item.tab}" style="display:flex; align-items:center; width:100%; padding:8px 12px; background:none; border:none; color:#d1d5db; font-size:13px; cursor:pointer; border-radius:4px; transition:all .2s ease; text-align:left;">
              <i class="${item.icon}" style="margin-right:8px; color:#9ca3af; font-size:12px;"></i>
              ${item.label}
            </button>
          `).join('')}
        </div>
      </div>
    `;
  },

    async loadEchelonAnalysis(echelon) {
        const content = document.querySelector('.execution-analysis-tab-content');
        if (!content) return;

        // Get the appropriate echelon module
        const echelonModule = this.echelonModules[echelon];

        if (!echelonModule) {
            content.innerHTML = `
                <div style="padding:24px;">
                    <div style="display:flex; align-items:center; margin-bottom:20px;">
                        <i class="fas fa-exclamation-triangle" style="margin-right:12px; color:#f59e0b; font-size:20px;"></i>
                        <h3 style="font-size:18px; font-weight:600; color:white; margin:0;">
                            Unknown Echelon: ${echelon.charAt(0).toUpperCase() + echelon.slice(1)}
                        </h3>
                    </div>

                    <div style="background-color:#374151; padding:20px; border-radius:8px; border-left:4px solid #f59e0b;">
                        <h4 style="color:#fbbf24; font-size:14px; font-weight:600; margin:0 0 12px 0;">
                            <i class="fas fa-question-circle" style="margin-right:8px;"></i>
                            Echelon Not Found
                        </h4>
                        <p style="color:#d1d5db; font-size:12px; line-height:1.5; margin:0;">
                            The requested echelon "${echelon}" was not found in the execution analysis modules.
                        </p>
                    </div>
                </div>
            `;
            return;
        }

        try {
            // Load the echelon-specific content using the module's getContent() method
            const echelonContent = echelonModule.getContent();
            content.innerHTML = echelonContent;

            console.log(`✅ Loaded ${echelon} execution analysis content`);
        } catch (error) {
            console.error(`❌ Error loading ${echelon} execution analysis:`, error);
            content.innerHTML = `
                <div style="padding:24px;">
                    <div style="display:flex; align-items:center; margin-bottom:20px;">
                        <i class="fas fa-exclamation-triangle" style="margin-right:12px; color:#dc2626; font-size:20px;"></i>
                        <h3 style="font-size:18px; font-weight:600; color:white; margin:0;">
                            Error Loading ${echelon.charAt(0).toUpperCase() + echelon.slice(1)} Analysis
                        </h3>
                    </div>

                    <div style="background-color:#374151; padding:20px; border-radius:8px; border-left:4px solid #dc2626;">
                        <h4 style="color:#fca5a5; font-size:14px; font-weight:600; margin:0 0 12px 0;">
                            <i class="fas fa-times-circle" style="margin-right:8px;"></i>
                            Loading Error
                        </h4>
                        <p style="color:#d1d5db; font-size:12px; line-height:1.5; margin:0;">
                            An error occurred while loading the ${echelon} execution analysis content. Please try again.
                        </p>
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
        btn.addEventListener('mouseenter', () => {
          content.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
          setTimeout(() => {
            content.style.display = 'none';
          }, 150);
        });
      }
    });

    // Setup echelon analysis button clicks
    const analysisBtns = document.querySelectorAll('.echelon-analysis-btn');
    analysisBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const echelon = btn.getAttribute('data-echelon');
        if (echelon) {
          this.loadEchelonAnalysis(echelon);
        }
      });
    });

    return true;
  },

  injectDropdownCSS() {
    const style = document.getElementById('execution-analysis-dropdown-hover-styles') || document.createElement('style');
    style.id = 'execution-analysis-dropdown-hover-styles';
    style.textContent = `
      /* Execution echelon analysis dropdown hover effects */
      .echelon-dropdown-btn:hover { color:#a855f7 !important; }
      .echelon-analysis-btn:hover { background-color:#374151 !important; }
      .echelon-dropdown-btn { transition: color .3s ease !important; }
      .dropdown-content { transition: opacity .2s ease !important; }
    `;
    const existing = document.getElementById('execution-analysis-dropdown-hover-styles');
    if (existing) existing.remove();
    document.head.appendChild(style);
  }
};
