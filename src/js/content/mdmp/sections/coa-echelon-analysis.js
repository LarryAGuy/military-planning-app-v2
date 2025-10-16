/**
 * MDMP Course of Action Development - Echelon Analysis
 * Three-tier dropdown navigation system for COA development echelon analysis
 * Mirrors MDMP Mission Analysis echelon analysis architecture
 * Teal/cyan theme (#0891b2) for COA Development
 */

export const coaEchelonAnalysisModule = {
    id: 'coa-echelon-analysis',
    title: 'Echelon Analysis',
    defaultExpanded: false,

    getContent() {
        return `
            <div id="coa-echelon-analysis-section" class="dashboard-widgets mb-12">
                <!-- Header Row with Echelon Dropdowns -->
                <div style="display:flex; align-items:center; margin-bottom:16px; gap:16px; position:relative;">
                    <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
                        <i class="fas fa-layer-group" style="margin-right:8px; color:#a855f7; font-size:16px;"></i>
                        Echelon Analysis
                    </h3>
                    <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
                    ${this.dropdownButton('tactical', 'Tactical Level', '#16a34a')}
                    <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
                    ${this.dropdownButton('operational', 'Operational Level', '#3b82f6')}
                    <span style="color:#6b7280; font-size:18px; font-weight:300;">|</span>
                    ${this.dropdownButton('strategic', 'Strategic Level', '#a855f7')}
                </div>

                <!-- Content Area for Dynamic Loading -->
                <div class="analysis-tab-content" style="background-color:#1f2937; border-radius:8px; border:1px solid #374151; padding:24px; margin-top:16px;">
                    <div style="text-align:center; padding:40px; color:#6b7280;">
                        <i class="fas fa-layer-group" style="font-size:48px; margin-bottom:16px; color:#a855f7;"></i>
                        <h3 style="font-size:18px; font-weight:600; margin-bottom:8px; color:#d1d5db;">COA Development Echelon Analysis</h3>
                        <p style="font-size:14px; line-height:1.5; margin-bottom:16px;">Select an echelon level from the dropdowns above to view comprehensive COA development analysis content.</p>
                        
                        <!-- Framework Information -->
                        <div style="background-color:#374151; padding:16px; border-radius:6px; border-left:3px solid #a855f7; margin-top:16px; text-align:left;">
                            <h4 style="color:#c4b5fd; font-size:14px; font-weight:600; margin:0 0 8px 0;">
                                <i class="fas fa-trophy" style="margin-right:8px;"></i>
                                Complete 11-Echelon Analysis Framework
                            </h4>
                            <p style="color:#d1d5db; font-size:12px; margin:0 0 12px 0;">
                                Complete 11-echelon COA development analysis framework covering all Army command levels:
                            </p>
                            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(140px, 1fr)); gap:8px;">
                                <div style="background-color:#1f2937; padding:8px; border-radius:4px;">
                                    <div style="color:#16a34a; font-size:11px; font-weight:600; margin-bottom:4px;">TACTICAL</div>
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
                { tab: 'army', icon: 'fas fa-flag-usa', label: 'Army' },
                { tab: 'theater', icon: 'fas fa-globe-americas', label: 'Theater' }
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

        // Setup echelon button clicks
        const echelonBtns = document.querySelectorAll('.echelon-analysis-btn');
        echelonBtns.forEach(btn => {
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
        const style = document.getElementById('coa-analysis-dropdown-hover-styles') || document.createElement('style');
        style.id = 'coa-analysis-dropdown-hover-styles';
        style.textContent = `
            /* COA echelon analysis dropdown hover effects */
            .echelon-dropdown-btn:hover { color:#a855f7 !important; }
            .echelon-analysis-btn:hover { background-color:#374151 !important; }
            .echelon-dropdown-btn { transition: color .3s ease !important; }
            .dropdown-content { transition: opacity .2s ease !important; }
        `;
        const existing = document.getElementById('coa-analysis-dropdown-hover-styles');
        if (existing) existing.remove();
        document.head.appendChild(style);
    },

    async loadEchelonAnalysis(echelon) {
        const content = document.querySelector('.analysis-tab-content');
        if (!content) return;

        try {
            // Load modular COA development analysis for Strategic, Operational, and Tactical echelons
            switch (echelon) {
                case 'division':
                    const { divisionCOAAnalysisModule } = await import('./coa-analysis-division.js');
                    content.innerHTML = divisionCOAAnalysisModule.getContent();
                    return;
                case 'corps':
                    const { corpsCOAAnalysisModule } = await import('./coa-analysis-corps.js');
                    content.innerHTML = corpsCOAAnalysisModule.getContent();
                    return;
                case 'army':
                    const { armyCOAAnalysisModule } = await import('./coa-analysis-army.js');
                    content.innerHTML = armyCOAAnalysisModule.getContent();
                    return;
                case 'theater':
                    const { theaterCOAAnalysisModule } = await import('./coa-analysis-theater.js');
                    content.innerHTML = theaterCOAAnalysisModule.getContent();
                    return;
                case 'regiment':
                    const { regimentCOAAnalysisModule } = await import('./coa-analysis-regiment.js');
                    content.innerHTML = regimentCOAAnalysisModule.getContent();
                    return;
                case 'group':
                    const { groupCOAAnalysisModule } = await import('./coa-analysis-group.js');
                    content.innerHTML = groupCOAAnalysisModule.getContent();
                    return;
                case 'brigade':
                    const { brigadeCOAAnalysisModule } = await import('./coa-analysis-brigade.js');
                    content.innerHTML = brigadeCOAAnalysisModule.getContent();
                    return;
                case 'platoon':
                    const { platoonCOAAnalysisModule } = await import('./coa-analysis-platoon.js');
                    content.innerHTML = platoonCOAAnalysisModule.getContent();
                    return;
                case 'company':
                    const { companyCOAAnalysisModule } = await import('./coa-analysis-company.js');
                    content.innerHTML = companyCOAAnalysisModule.getContent();
                    return;
                case 'squadron':
                    const { squadronCOAAnalysisModule } = await import('./coa-analysis-squadron.js');
                    content.innerHTML = squadronCOAAnalysisModule.getContent();
                    return;
                case 'battalion':
                    const { battalionCOAAnalysisModule } = await import('./coa-analysis-battalion.js');
                    content.innerHTML = battalionCOAAnalysisModule.getContent();
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
                            <div style="background-color:#374151; padding:16px; border-radius:8px; border-left:4px solid #f59e0b;">
                                <p style="color:#d1d5db; font-size:12px; line-height:1.5; margin:0 0 12px 0;">
                                    The requested echelon "${echelon}" is not recognized. All 11 standard military echelons have been implemented:
                                </p>
                                <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(150px, 1fr)); gap:8px; margin-top:12px;">
                                    <div style="background-color:#1f2937; padding:8px; border-radius:4px;">
                                        <div style="color:#16a34a; font-size:11px; font-weight:600;">TACTICAL</div>
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
        } catch (error) {
            console.error(`Failed to load ${echelon} COA analysis:`, error);
            content.innerHTML = `
                <div style="padding:24px;">
                    <div style="display:flex; align-items:center; margin-bottom:16px;">
                        <i class="fas fa-exclamation-triangle" style="margin-right:12px; color:#f59e0b; font-size:20px;"></i>
                        <h3 style="font-size:18px; font-weight:600; color:white; margin:0;">
                            Loading Error: ${echelon.charAt(0).toUpperCase() + echelon.slice(1)}
                        </h3>
                    </div>
                    <div style="background-color:#374151; padding:16px; border-radius:8px; border-left:4px solid #f59e0b;">
                        <p style="color:#d1d5db; font-size:12px; line-height:1.5; margin:0 0 12px 0;">
                            Failed to load ${echelon} level COA development analysis module. Please check console for details.
                        </p>
                        <div style="background-color:#1f2937; padding:8px; border-radius:4px; margin-top:8px;">
                            <div style="color:#f59e0b; font-size:11px; font-weight:600;">Error Details:</div>
                            <div style="color:#d1d5db; font-size:10px; font-family:monospace;">${error.message}</div>
                        </div>
                    </div>
                </div>
            `;
        }
    }
};

export default coaEchelonAnalysisModule;
