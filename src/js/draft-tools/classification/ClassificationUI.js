/**
 * Classification UI Component - Comprehensive DoD/IC Implementation
 * Tabbed interface for separated control architecture
 * Supports: Classification Levels, Dissemination Controls, SCI Compartments, Release Controls, Handling Caveats
 *
 * @version 2.0.0
 * @date 2025-10-06
 */

export class ClassificationUI {
    constructor(eventBus, classificationManager) {
        this.eventBus = eventBus;
        this.classificationManager = classificationManager;
        this.container = null;
        this.initialized = false;
        this.currentTab = 'level'; // Default tab

        // Collapsible state management
        this.isCollapsed = this.loadCollapsedState();

        // Country list for RELTO
        this.countries = [
            'USA', 'AUS', 'CAN', 'GBR', 'NZL', // FVEY
            'FRA', 'DEU', 'ITA', 'ESP', 'POL', 'NLD', 'BEL', 'DNK', 'NOR', // NATO
            'JPN', 'KOR', 'ISR', 'SAU', 'ARE', 'QAT' // Other allies
        ];
    }

    async initialize(container) {
        if (this.initialized) {
            console.warn('⚠️ ClassificationUI already initialized');
            return;
        }

        console.log('🔐 Initializing Comprehensive ClassificationUI...');
        this.container = container;

        this.render(); // render() now calls attachEventListeners()
        this.initialized = true;

        // Listen for classification changes
        // Update compact display when collapsed
        this.eventBus.on('classification:changed', (data) => {
            console.log('🔄 Classification changed:', data.bannerText);

            // Update compact display if currently collapsed
            if (this.isCollapsed) {
                this.updateCompactDisplay();
            }
        });

        console.log('✅ ClassificationUI initialized successfully');
    }

    destroy() {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.initialized = false;
    }

    /**
     * Load collapsed state from localStorage
     * @returns {boolean} True if collapsed, false if expanded
     */
    loadCollapsedState() {
        try {
            const saved = localStorage.getItem('classificationUICollapsed');
            return saved === 'true';
        } catch (error) {
            console.warn('⚠️ Could not load classification UI collapsed state:', error);
            return false; // Default to expanded
        }
    }

    /**
     * Save collapsed state to localStorage
     * @param {boolean} collapsed - True if collapsed, false if expanded
     */
    saveCollapsedState(collapsed) {
        try {
            localStorage.setItem('classificationUICollapsed', collapsed.toString());
        } catch (error) {
            console.warn('⚠️ Could not save classification UI collapsed state:', error);
        }
    }

    /**
     * Toggle collapsed/expanded state
     */
    toggleCollapsed() {
        this.isCollapsed = !this.isCollapsed;
        this.saveCollapsedState(this.isCollapsed);
        this.updateCollapsedState();

        console.log(`🔐 Classification UI ${this.isCollapsed ? 'collapsed' : 'expanded'}`);
    }

    /**
     * Update the UI to reflect collapsed/expanded state
     */
    updateCollapsedState() {
        const content = this.container.querySelector('.classification-ui-content');
        const header = this.container.querySelector('.classification-ui-header');
        const chevron = this.container.querySelector('.classification-ui-chevron');
        const compactDisplay = this.container.querySelector('.classification-ui-compact');

        if (content && header && chevron) {
            if (this.isCollapsed) {
                content.style.display = 'none';
                chevron.className = 'fas fa-chevron-down classification-ui-chevron';
                header.setAttribute('aria-expanded', 'false');
                header.title = 'Expand Classification UI';

                // Show compact display
                if (compactDisplay) {
                    compactDisplay.style.display = 'block';
                    this.updateCompactDisplay();
                }
            } else {
                content.style.display = 'block';
                chevron.className = 'fas fa-chevron-up classification-ui-chevron';
                header.setAttribute('aria-expanded', 'true');
                header.title = 'Collapse Classification UI';

                // Hide compact display
                if (compactDisplay) {
                    compactDisplay.style.display = 'none';
                }
            }
        }
    }

    /**
     * Update the compact display with current classification
     */
    updateCompactDisplay() {
        const compactDisplay = this.container.querySelector('.classification-ui-compact');
        if (compactDisplay) {
            const current = this.classificationManager.getCurrentClassification();
            const bannerText = current.bannerText || current.level;
            const color = this.classificationManager.getClassificationColor();
            const textColor = this.classificationManager.getTextColor();

            compactDisplay.innerHTML = `
                <div class="classification-compact-banner"
                     style="background: ${color}; color: ${textColor}; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">
                    ${bannerText}
                </div>
            `;
        }
    }

    render() {
        if (!this.container) {
            console.warn('⚠️ ClassificationUI: No container found');
            return;
        }

        const html = `
            <div class="classification-ui-comprehensive">
                <div class="classification-ui-header"
                     role="button"
                     tabindex="0"
                     aria-expanded="${!this.isCollapsed}"
                     aria-controls="classification-ui-content"
                     title="${this.isCollapsed ? 'Expand' : 'Collapse'} Classification UI">
                    <h3 class="classification-ui-title">
                        <i class="fas fa-shield-alt"></i> Classification
                    </h3>
                    <i class="fas fa-chevron-${this.isCollapsed ? 'down' : 'up'} classification-ui-chevron"></i>
                </div>

                <div class="classification-ui-compact" style="display: ${this.isCollapsed ? 'block' : 'none'};">
                    <!-- Compact display will be populated by updateCompactDisplay() -->
                </div>

                <div class="classification-ui-content"
                     id="classification-ui-content"
                     style="display: ${this.isCollapsed ? 'none' : 'block'};">
                    ${this.renderTabs()}
                    ${this.renderTabContent()}
                </div>
            </div>
        `;

        this.container.innerHTML = html;

        // Update compact display if collapsed
        if (this.isCollapsed) {
            this.updateCompactDisplay();
        }

        // Re-attach event listeners after render
        this.attachEventListeners();
    }

    renderTabs() {
        return `
            <div class="classification-tabs">
                <button class="classification-tab ${this.currentTab === 'level' ? 'active' : ''}" data-tab="level">
                    <i class="fas fa-layer-group"></i> Level
                </button>
                <button class="classification-tab ${this.currentTab === 'dissemination' ? 'active' : ''}" data-tab="dissemination">
                    <i class="fas fa-shield-alt"></i> Dissemination
                </button>
                <button class="classification-tab ${this.currentTab === 'sci' ? 'active' : ''}" data-tab="sci">
                    <i class="fas fa-user-secret"></i> SCI
                </button>
                <button class="classification-tab ${this.currentTab === 'release' ? 'active' : ''}" data-tab="release">
                    <i class="fas fa-globe"></i> Release
                </button>
                <button class="classification-tab ${this.currentTab === 'handling' ? 'active' : ''}" data-tab="handling">
                    <i class="fas fa-hand-paper"></i> Handling
                </button>
            </div>
        `;
    }

    renderTabContent() {
        return `
            <div class="classification-tab-content">
                ${this.renderLevelTab()}
                ${this.renderDisseminationTab()}
                ${this.renderSCITab()}
                ${this.renderReleaseTab()}
                ${this.renderHandlingTab()}
            </div>
        `;
    }

    renderLevelTab() {
        const current = this.classificationManager.getCurrentClassification();
        const levels = this.classificationManager.getAuthorizedClassificationLevels();

        return `
            <div class="tab-panel ${this.currentTab === 'level' ? 'active' : ''}" data-tab-panel="level">
                <h3>Classification Level</h3>
                <p class="tab-description">Select the base classification level for this document.</p>
                <div class="classification-level-grid">
                    ${levels.map(level => `
                        <button class="classification-level-btn ${current.level === level ? 'selected' : ''}"
                                data-level="${level}"
                                style="background: ${this.classificationManager.getClassificationColor(level)};
                                       color: ${this.classificationManager.getTextColor(level)};">
                            <i class="fas fa-check-circle"></i>
                            <span>${level}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderDisseminationTab() {
        const current = this.classificationManager.getCurrentClassification();
        const controls = this.classificationManager.getAllDisseminationControls();

        return `
            <div class="tab-panel ${this.currentTab === 'dissemination' ? 'active' : ''}" data-tab-panel="dissemination">
                <h3>Dissemination Controls</h3>
                <p class="tab-description">Control how information is disseminated and handled.</p>
                <div class="control-grid">
                    ${Object.entries(controls).map(([key, control]) => `
                        <label class="control-checkbox">
                            <input type="checkbox"
                                   data-dissemination="${key}"
                                   ${current.disseminationControls.includes(key) ? 'checked' : ''}>
                            <span class="control-label">
                                <strong>${key}</strong>
                                <small>${control.name}</small>
                            </span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderSCITab() {
        const current = this.classificationManager.getCurrentClassification();
        const compartments = this.classificationManager.getAllSCICompartments();

        return `
            <div class="tab-panel ${this.currentTab === 'sci' ? 'active' : ''}" data-tab-panel="sci">
                <h3>SCI Compartments</h3>
                <p class="tab-description">Select SCI compartments independently. SI, G, TK, and HCS can be selected without SCI dissemination control. Note: G (Gamma) is always used with SI.</p>
                <div class="control-grid">
                    ${Object.entries(compartments).map(([key, compartment]) => `
                        <label class="control-checkbox ${key === 'G' ? 'sci-gamma-compartment' : ''}">
                            <input type="checkbox"
                                   data-sci-compartment="${key}"
                                   ${current.sciCompartments.includes(key) ? 'checked' : ''}
                                   ${key === 'G' ? 'title="Gamma is always used with SI (Special Intelligence)"' : ''}>
                            <span class="control-label">
                                <strong>${key}</strong>
                                <small>${compartment.name}${key === 'G' ? ' (requires SI)' : ''}</small>
                            </span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderReleaseTab() {
        const current = this.classificationManager.getCurrentClassification();
        const controls = this.classificationManager.getAllReleaseControls();

        return `
            <div class="tab-panel ${this.currentTab === 'release' ? 'active' : ''}" data-tab-panel="release">
                <h3>Release Controls</h3>
                <p class="tab-description">Control who can access this information.</p>
                <div class="control-grid">
                    ${Object.entries(controls).map(([key, control]) => `
                        <label class="control-checkbox">
                            <input type="checkbox"
                                   data-release="${key}"
                                   ${current.releaseControls.includes(key) ? 'checked' : ''}>
                            <span class="control-label">
                                <strong>${key}</strong>
                                <small>${control.name}</small>
                            </span>
                        </label>
                    `).join('')}
                </div>

                <div class="release-authority-section">
                    <h4>Release Authority</h4>
                    <div class="release-authority-controls">
                        <div class="country-selector">
                            <label>Quick Select:</label>
                            <div class="country-checkboxes">
                                ${this.countries.map(country => `
                                    <label class="country-checkbox">
                                        <input type="checkbox" data-country="${country}">
                                        <span>${country}</span>
                                    </label>
                                `).join('')}
                            </div>
                        </div>
                        <div class="custom-release">
                            <label>Custom Release Authority:</label>
                            <input type="text"
                                   id="custom-release-authority"
                                   placeholder="e.g., REL TO USA, AUS, CAN"
                                   value="${current.releaseAuthority || ''}">
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderHandlingTab() {
        const current = this.classificationManager.getCurrentClassification();
        const caveats = this.classificationManager.getAllHandlingCaveats();

        return `
            <div class="tab-panel ${this.currentTab === 'handling' ? 'active' : ''}" data-tab-panel="handling">
                <h3>Handling Caveats</h3>
                <p class="tab-description">Special handling instructions for this information.</p>
                <div class="control-grid">
                    ${Object.entries(caveats).map(([key, caveat]) => `
                        <label class="control-checkbox">
                            <input type="checkbox"
                                   data-handling="${key}"
                                   ${current.handlingCaveats.includes(key) ? 'checked' : ''}>
                            <span class="control-label">
                                <strong>${key}</strong>
                                <small>${caveat.name}</small>
                            </span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    // REMOVED: Classification display preview (redundant with top-right badge)
    // The classification is now displayed in the OPORD Draft Tool header badge
    // which updates dynamically via the 'classification:changed' event

    /*
    renderClassificationDisplay() {
        const current = this.classificationManager.getCurrentClassification();

        return `
            <div class="classification-display">
                <div class="classification-banner"
                     style="background: ${this.classificationManager.getClassificationColor(current.level)};
                            color: ${this.classificationManager.getTextColor(current.level)};">
                    ${current.bannerText}
                </div>
                <div class="classification-portion">
                    Portion Marking: <code>${current.portionMarking}</code>
                </div>
            </div>
        `;
    }

    updateClassificationDisplay() {
        const displayEl = this.container?.querySelector('.classification-display');
        if (displayEl) {
            const current = this.classificationManager.getCurrentClassification();
            const bannerEl = displayEl.querySelector('.classification-banner');
            const portionEl = displayEl.querySelector('.classification-portion code');

            if (bannerEl) {
                bannerEl.textContent = current.bannerText;
                bannerEl.style.background = this.classificationManager.getClassificationColor(current.level);
                bannerEl.style.color = this.classificationManager.getTextColor(current.level);
            }

            if (portionEl) {
                portionEl.textContent = current.portionMarking;
            }
        }
    }
    */

    attachEventListeners() {
        if (!this.container) return;

        // Collapse/expand toggle - entire header is clickable
        const header = this.container.querySelector('.classification-ui-header');
        if (header) {
            header.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleCollapsed();
            });

            // Keyboard accessibility
            header.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleCollapsed();
                }
            });
        }

        // Tab switching
        this.container.querySelectorAll('.classification-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.currentTarget.dataset.tab;
                this.switchTab(tabName);
            });
        });

        // Classification level selection
        this.container.querySelectorAll('.classification-level-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const level = e.currentTarget.dataset.level;
                this.classificationManager.setClassificationLevel(level);

                // Update button states without full re-render
                this.container.querySelectorAll('.classification-level-btn').forEach(b => {
                    b.classList.remove('selected');
                });
                e.currentTarget.classList.add('selected');
            });
        });

        // Dissemination controls
        // Phase 3: Added validation error handling
        this.container.querySelectorAll('[data-dissemination]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const control = e.target.dataset.dissemination;
                if (e.target.checked) {
                    // Phase 3: Check validation result
                    const result = this.classificationManager.addDisseminationControl(control);

                    if (!result.success) {
                        // Validation failed - uncheck the checkbox and show error
                        e.target.checked = false;
                        this.showValidationError(result.error);
                        return;
                    }

                    // Phase 3: Check if auto-resolved
                    if (result.resolved) {
                        // Control was added but incompatible controls were removed
                        this.showWarningMessage(result.warning);
                        // Update checkboxes to reflect resolution
                        this.updateDisseminationCheckboxStates();
                    }
                } else {
                    this.classificationManager.removeDisseminationControl(control);

                    // SCI dissemination control and SCI compartments are independent
                    // Removing SCI does NOT clear SCI compartments
                    // Compartments persist and checkboxes remain checked
                }
            });
        });

        // SCI compartments
        // Special handling for G (Gamma) which requires SI
        // Phase 3: Added validation error handling
        this.container.querySelectorAll('[data-sci-compartment]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const compartment = e.target.dataset.sciCompartment;
                if (e.target.checked) {
                    // Phase 3: Check validation result
                    const result = this.classificationManager.addSCICompartment(compartment);

                    if (!result.success) {
                        // Validation failed - uncheck the checkbox and show error
                        e.target.checked = false;
                        this.showValidationError(result.error);
                        return;
                    }

                    // Success - proceed normally
                } else {
                    this.classificationManager.removeSCICompartment(compartment);
                }

                // Update UI to reflect automatic SI-G coupling
                // When G is added, SI is automatically added
                // When SI is removed, G is automatically removed
                this.updateSCICheckboxStates();
            });
        });

        // Release controls
        // Phase 3: Added validation error handling
        this.container.querySelectorAll('[data-release]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const control = e.target.dataset.release;
                if (e.target.checked) {
                    // Phase 3: Check validation result
                    const result = this.classificationManager.addReleaseControl(control);

                    if (!result.success) {
                        // Validation failed - uncheck the checkbox and show error
                        e.target.checked = false;
                        this.showValidationError(result.error);
                        return;
                    }

                    // Phase 3: Check if auto-resolved
                    if (result.resolved) {
                        // Control was added but incompatible controls were removed
                        this.showWarningMessage(result.warning);
                        // Update checkboxes to reflect resolution
                        this.updateReleaseCheckboxStates();
                    }
                } else {
                    this.classificationManager.removeReleaseControl(control);
                }
            });
        });

        // Handling caveats
        // Phase 3: Added validation error handling
        this.container.querySelectorAll('[data-handling]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const caveat = e.target.dataset.handling;
                if (e.target.checked) {
                    // Phase 3: Check validation result
                    const result = this.classificationManager.addHandlingCaveat(caveat);

                    if (!result.success) {
                        // Validation failed - uncheck the checkbox and show error
                        e.target.checked = false;
                        this.showValidationError(result.error);
                        return;
                    }

                    // Success - proceed normally
                } else {
                    this.classificationManager.removeHandlingCaveat(caveat);
                }
            });
        });

        // Country checkboxes
        this.container.querySelectorAll('[data-country]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updateReleaseAuthority();
            });
        });

        // Custom release authority
        const customInput = this.container.querySelector('#custom-release-authority');
        if (customInput) {
            customInput.addEventListener('input', (e) => {
                this.classificationManager.setReleaseAuthority(e.target.value);
            });
        }
    }

    switchTab(tabName) {
        this.currentTab = tabName;

        // Update tab buttons
        this.container.querySelectorAll('.classification-tab').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tab === tabName);
        });

        // Update tab panels
        this.container.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.toggle('active', panel.dataset.tabPanel === tabName);
        });
    }

    updateReleaseAuthority() {
        const selectedCountries = [];
        this.container.querySelectorAll('[data-country]:checked').forEach(checkbox => {
            selectedCountries.push(checkbox.dataset.country);
        });

        if (selectedCountries.length > 0) {
            const authority = 'REL TO ' + selectedCountries.join(', ');
            this.classificationManager.setReleaseAuthority(authority);

            // Update custom input
            const customInput = this.container.querySelector('#custom-release-authority');
            if (customInput) {
                customInput.value = authority;
            }
        }
    }

    /**
     * Update SCI compartment checkbox states to reflect automatic SI-G coupling
     * Called after SCI compartment changes to sync UI with actual state
     */
    updateSCICheckboxStates() {
        const current = this.classificationManager.getCurrentClassification();
        console.log('🔍 updateSCICheckboxStates called');
        console.log('   Current SCI compartments:', current.sciCompartments);

        // Update all SCI compartment checkboxes to match current state
        this.container.querySelectorAll('[data-sci-compartment]').forEach(checkbox => {
            const compartment = checkbox.dataset.sciCompartment;
            const shouldBeChecked = current.sciCompartments.includes(compartment);
            console.log(`   ${compartment}: ${checkbox.checked} → ${shouldBeChecked}`);
            checkbox.checked = shouldBeChecked;
        });
    }

    /**
     * Update dissemination control checkbox states
     * Called after auto-resolution to sync UI with actual state
     *
     * Phase 3: Surgical Fix - Validation Error Handling
     */
    updateDisseminationCheckboxStates() {
        const current = this.classificationManager.getCurrentClassification();
        console.log('🔍 updateDisseminationCheckboxStates called');
        console.log('   Current dissemination controls:', current.disseminationControls);

        // Update all dissemination control checkboxes to match current state
        this.container.querySelectorAll('[data-dissemination]').forEach(checkbox => {
            const control = checkbox.dataset.dissemination;
            const shouldBeChecked = current.disseminationControls.includes(control);
            console.log(`   ${control}: ${checkbox.checked} → ${shouldBeChecked}`);
            checkbox.checked = shouldBeChecked;
        });
    }

    /**
     * Update release control checkbox states
     * Called after auto-resolution to sync UI with actual state
     *
     * Phase 3: Surgical Fix - Validation Error Handling
     */
    updateReleaseCheckboxStates() {
        const current = this.classificationManager.getCurrentClassification();
        console.log('🔍 updateReleaseCheckboxStates called');
        console.log('   Current release controls:', current.releaseControls);

        // Update all release control checkboxes to match current state
        this.container.querySelectorAll('[data-release]').forEach(checkbox => {
            const control = checkbox.dataset.release;
            const shouldBeChecked = current.releaseControls.includes(control);
            console.log(`   ${control}: ${checkbox.checked} → ${shouldBeChecked}`);
            checkbox.checked = shouldBeChecked;
        });
    }

    /**
     * ========================================================================
     * MODAL SUPPORT METHODS
     * ========================================================================
     * These methods support rendering the ClassificationUI in a modal dialog
     */

    /**
     * Render content for modal (without header)
     * @returns {string} HTML content for modal body
     */
    renderForModal() {
        return `
            <div class="classification-ui-modal-content">
                ${this.renderTabs()}
                ${this.renderTabContent()}
            </div>
        `;
    }

    /**
     * Get current classification state
     * @returns {Object} Current classification state
     */
    get state() {
        const current = this.classificationManager.getCurrentClassification();
        return {
            level: current.level,
            dissemination: current.disseminationControls || [],
            sci: current.sciCompartments || [],
            release: current.releaseAuthority ? [current.releaseAuthority] : [],
            handling: current.handlingCaveats || []
        };
    }

    /**
     * Get classification summary for badge display
     * @returns {Object} Classification summary with level and text
     */
    getClassificationSummary() {
        const current = this.classificationManager.getCurrentClassification();
        const parts = [];

        // Add level
        const level = current.level || 'UNCLASSIFIED';
        parts.push(level);

        // Add dissemination controls (if any)
        if (current.disseminationControls && current.disseminationControls.length > 0) {
            const dissem = current.disseminationControls.join('/');
            parts.push('//' + dissem);
        }

        // Add SCI compartments (if any)
        if (current.sciCompartments && current.sciCompartments.length > 0) {
            const sci = current.sciCompartments.join('-');
            parts.push('//' + sci);
        }

        // Add release authority (if any)
        if (current.releaseAuthority) {
            parts.push('//' + current.releaseAuthority);
        }

        // Add handling caveats (if any)
        if (current.handlingCaveats && current.handlingCaveats.length > 0) {
            const handling = current.handlingCaveats.join('/');
            parts.push('//' + handling);
        }

        const text = parts.join('');

        return {
            level: level,
            text: text,
            fullText: text
        };
    }

    /**
     * Focus the first tab (for modal focus management)
     */
    focusFirstTab() {
        const firstTab = this.container.querySelector('.classification-tab');
        if (firstTab) {
            firstTab.focus();
        }
    }

    /**
     * Save current state (for modal Apply button)
     */
    saveState() {
        // State is automatically saved through classificationManager
        console.log('🔐 Classification state saved');
    }

    /**
     * Revert changes (for modal Cancel button)
     * Note: This would require storing a snapshot before opening modal
     */
    revertChanges() {
        // For now, just log - full implementation would require state snapshot
        console.log('🔐 Classification changes reverted');
    }

    /**
     * Show validation error to user
     * Displays error in a modal dialog with appropriate formatting based on severity
     *
     * @param {Object} error - Error object from ClassificationManager
     * @param {string} error.type - Error type
     * @param {string} error.severity - Error severity (CRITICAL, WARNING, ERROR)
     * @param {string} error.message - Error message
     *
     * Phase 3: Surgical Fix - Validation Error Handling
     */
    showValidationError(error) {
        if (!error) {
            console.warn('⚠️ showValidationError called with no error object');
            return;
        }

        let formattedMessage;

        if (error.severity === 'CRITICAL') {
            formattedMessage = this.formatCriticalError(error);
        } else if (error.severity === 'WARNING') {
            formattedMessage = this.formatWarningError(error);
        } else {
            formattedMessage = error.message || 'An error occurred';
        }

        // Display using browser alert for now
        // TODO: Replace with custom modal component for better UX
        alert(formattedMessage);

        console.error(`[ClassificationUI] Validation Error (${error.severity}):`, error);
    }

    /**
     * Format CRITICAL severity error for display
     * Used for SCI network authorization violations
     *
     * @param {Object} error - Error object
     * @returns {string} Formatted error message
     *
     * Phase 3: Surgical Fix - Validation Error Handling
     */
    formatCriticalError(error) {
        let message = `${error.message}\n\n`;

        if (error.details) {
            message += `${error.details}\n\n`;
        }

        if (error.current && error.required) {
            message += `Current selection: ${error.current}\n`;
            message += `Required: ${error.required}\n\n`;
        }

        if (error.networkImpact) {
            message += `Network Authorization:\n`;
            message += `• ${error.networkImpact.current}\n`;
            message += `• ${error.networkImpact.required}\n\n`;
        }

        if (error.remediation && Array.isArray(error.remediation)) {
            message += `Please either:\n`;
            error.remediation.forEach((step, index) => {
                message += `${index + 1}. ${step}\n`;
            });
            message += '\n';
        }

        if (error.reference) {
            message += `Reference: ${error.reference}`;
        }

        return message;
    }

    /**
     * Format WARNING severity error for display
     * Used for control incompatibilities and caveat applicability issues
     *
     * @param {Object} error - Error object
     * @returns {string} Formatted error message
     *
     * Phase 3: Surgical Fix - Validation Error Handling
     */
    formatWarningError(error) {
        let message = `${error.message}\n\n`;

        if (error.details) {
            message += `${error.details}\n\n`;
        }

        if (error.current && error.required) {
            message += `Current selection: ${error.current}\n`;
            message += `Required: ${error.required}\n\n`;
        }

        if (error.remediation && Array.isArray(error.remediation)) {
            message += `Please either:\n`;
            error.remediation.forEach((step, index) => {
                message += `${index + 1}. ${step}\n`;
            });
            message += '\n';
        }

        if (error.reference) {
            message += `Reference: ${error.reference}`;
        }

        return message;
    }

    /**
     * Show warning message for auto-resolved control incompatibilities
     *
     * @param {string} warning - Warning message
     *
     * Phase 3: Surgical Fix - Validation Error Handling
     */
    showWarningMessage(warning) {
        if (!warning) {
            return;
        }

        // Display using console for now - less intrusive than alert
        // User will see the controls update automatically
        console.warn(`[ClassificationUI] Auto-resolved: ${warning}`);

        // Optionally show a brief toast notification
        // TODO: Implement toast notification component
    }
}

