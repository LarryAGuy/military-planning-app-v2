/**
 * Classification Picker Inline Component
 *
 * Compact inline picker for classification selection following DTGPicker pattern.
 * Provides access to all classification options in a dropdown interface.
 *
 * @example
 * const picker = new ClassificationPickerInline({
 *     button: document.getElementById('classification-button'),
 *     classificationManager: classificationManager,
 *     portionMarkingManager: portionMarkingManager,
 *     onApply: () => console.log('Classification applied')
 * });
 */

export class ClassificationPickerInline {
    /**
     * Create a classification picker
     * @param {Object} options - Configuration options
     * @param {HTMLElement} options.button - Button element to attach picker to
     * @param {Object} options.classificationManager - ClassificationManager instance
     * @param {Object} options.portionMarkingManager - PortionMarkingManager instance (optional)
     * @param {Function} options.onApply - Callback when Apply is clicked
     */
    constructor(options) {
        this.button = options.button;
        this.classificationManager = options.classificationManager;
        this.portionMarkingManager = options.portionMarkingManager || null;
        this.onApply = options.onApply || (() => {});

        this.pickerElement = null;
        this.isOpen = false;

        // Two-tier tab system
        this.currentTier1Tab = 'basic'; // Top-level category (basic, compartments, controls, release)
        this.currentTier2Tab = 'level'; // Sub-tab within category

        this.snapshot = null; // State snapshot for cancel functionality

        // Country list for RELTO
        this.countries = [
            'USA', 'AUS', 'CAN', 'GBR', 'NZL', // FVEY
            'FRA', 'DEU', 'ITA', 'ESP', 'POL', 'NLD', 'BEL', 'DNK', 'NOR', // NATO
            'JPN', 'KOR', 'ISR', 'SAU', 'ARE', 'QAT' // Other allies
        ];

        // Bind methods
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.init();
    }

    /**
     * Initialize the picker
     */
    init() {
        // Create picker element
        this.createPicker();

        // Attach button click handler
        if (this.button) {
            this.button.addEventListener('click', this.handleButtonClick);
        }
    }

    /**
     * Create picker element
     */
    createPicker() {
        this.pickerElement = document.createElement('div');
        this.pickerElement.className = 'classification-picker-inline';
        this.pickerElement.style.display = 'none';

        this.pickerElement.innerHTML = `
            <div class="classification-picker-header">
                ${this.renderTabs()}
            </div>
            <div class="classification-picker-content">
                ${this.renderTabContent()}
            </div>
            <div class="classification-picker-footer">
                <button class="classification-picker-btn btn-apply" data-action="apply">
                    <i class="fas fa-check"></i> Apply
                </button>
                <button class="classification-picker-btn btn-clear-all" data-action="clear-all">
                    <i class="fas fa-eraser"></i> Clear All
                </button>
                <button class="classification-picker-btn btn-cancel" data-action="cancel">
                    <i class="fas fa-times"></i> Cancel
                </button>
            </div>
        `;

        // Position picker relative to button
        if (this.button && this.button.parentElement) {
            this.button.parentElement.style.position = 'relative';
            this.button.parentElement.appendChild(this.pickerElement);
        } else {
            document.body.appendChild(this.pickerElement);
        }

        // Attach event listeners
        this.attachPickerListeners();
    }

    /**
     * Render two-tier tabs (DoD-standard order per DoDM 5200.01 Volume 2)
     * Tier 1: Basic, Compartments, Controls, Release
     * Tier 2: Specific controls within each category
     */
    renderTabs() {
        return `
            <!-- Tier 1: Top-level categories -->
            <div class="classification-tabs-tier1">
                <button class="classification-tab-tier1 ${this.currentTier1Tab === 'basic' ? 'active' : ''}" data-tier1-tab="basic">
                    <i class="fas fa-layer-group"></i> Basic
                </button>
                <button class="classification-tab-tier1 ${this.currentTier1Tab === 'compartments' ? 'active' : ''}" data-tier1-tab="compartments">
                    <i class="fas fa-lock"></i> Compartments
                </button>
                <button class="classification-tab-tier1 ${this.currentTier1Tab === 'controls' ? 'active' : ''}" data-tier1-tab="controls">
                    <i class="fas fa-shield-alt"></i> Controls
                </button>
                <button class="classification-tab-tier1 ${this.currentTier1Tab === 'release' ? 'active' : ''}" data-tier1-tab="release">
                    <i class="fas fa-globe"></i> Release
                </button>
            </div>

            <!-- Tier 2: Sub-tabs within each category -->
            <div class="classification-tabs-tier2">
                ${this.renderTier2Tabs()}
            </div>
        `;
    }

    /**
     * Render tier 2 tabs based on current tier 1 selection
     */
    renderTier2Tabs() {
        switch (this.currentTier1Tab) {
            case 'basic':
                return `
                    <button class="classification-tab-tier2 ${this.currentTier2Tab === 'level' ? 'active' : ''}" data-tier2-tab="level">
                        <i class="fas fa-layer-group"></i> Classification Level
                    </button>
                `;

            case 'compartments':
                return `
                    <button class="classification-tab-tier2 ${this.currentTier2Tab === 'sci' ? 'active' : ''}" data-tier2-tab="sci">
                        <i class="fas fa-user-secret"></i> SCI
                    </button>
                    <button class="classification-tab-tier2 ${this.currentTier2Tab === 'sap' ? 'active' : ''}" data-tier2-tab="sap">
                        <i class="fas fa-lock"></i> SAP
                    </button>
                `;

            case 'controls':
                return `
                    <button class="classification-tab-tier2 ${this.currentTier2Tab === 'dissemination' ? 'active' : ''}" data-tier2-tab="dissemination">
                        <i class="fas fa-shield-alt"></i> Dissemination
                    </button>
                    <button class="classification-tab-tier2 ${this.currentTier2Tab === 'handling' ? 'active' : ''}" data-tier2-tab="handling">
                        <i class="fas fa-hand-paper"></i> Handling
                    </button>
                `;

            case 'release':
                return `
                    <button class="classification-tab-tier2 ${this.currentTier2Tab === 'release' ? 'active' : ''}" data-tier2-tab="release">
                        <i class="fas fa-globe"></i> Release Controls
                    </button>
                `;

            default:
                return '';
        }
    }

    /**
     * Render tab content (all panels, visibility controlled by active class)
     */
    renderTabContent() {
        return `
            <div class="classification-tab-content">
                ${this.renderLevelTab()}
                ${this.renderSCITab()}
                ${this.renderSAPTab()}
                ${this.renderDisseminationTab()}
                ${this.renderReleaseTab()}
                ${this.renderHandlingTab()}
            </div>
        `;
    }

    /**
     * Render Level tab
     */
    renderLevelTab() {
        const current = this.classificationManager.getCurrentClassification();
        const levels = this.classificationManager.getAuthorizedClassificationLevels();

        return `
            <div class="tab-panel ${this.currentTier2Tab === 'level' ? 'active' : ''}" data-tab-panel="level">
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

    /**
     * Render SCI tab
     */
    renderSCITab() {
        const current = this.classificationManager.getCurrentClassification();
        const compartments = this.classificationManager.getAllSCICompartments();

        return `
            <div class="tab-panel ${this.currentTier2Tab === 'sci' ? 'active' : ''}" data-tab-panel="sci">
                <h3>SCI Compartments</h3>
                <p class="tab-description">Sensitive Compartmented Information access controls.</p>
                <div class="control-grid">
                    ${Object.entries(compartments).map(([key, compartment]) => `
                        <label class="control-checkbox">
                            <input type="checkbox"
                                   data-sci="${key}"
                                   ${current.sciCompartments.includes(key) ? 'checked' : ''}>
                            <span class="control-label">
                                <strong>${key}</strong>
                                <small>${compartment.name}</small>
                            </span>
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    /**
     * Render SAP tab
     * Special Access Programs require program-specific identifiers (e.g., BP, ABC, DEF)
     * Per DoDM 5200.01 Volume 2, SAP appears AFTER SCI, BEFORE dissemination controls
     */
    renderSAPTab() {
        const current = this.classificationManager.getCurrentClassification();
        const sapPrograms = current.sapPrograms || [];

        return `
            <div class="tab-panel ${this.currentTier2Tab === 'sap' ? 'active' : ''}" data-tab-panel="sap">
                <h3>Special Access Programs (SAP)</h3>
                <p class="tab-description">Add program-specific identifiers (e.g., BP, ABC, DEF). Displayed as SAR-[program-id].</p>

                <div class="sap-input-group">
                    <input type="text"
                           id="sap-program-input"
                           placeholder="Enter program ID (e.g., BP, ABC)"
                           maxlength="10"
                           style="text-transform: uppercase;">
                    <button class="sap-add-btn" data-action="add-sap">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>

                <div class="sap-programs-list">
                    ${sapPrograms.length === 0 ?
                        '<p class="sap-empty-message">No SAP programs added. SAP requires CONFIDENTIAL, SECRET, or TOP SECRET classification.</p>' :
                        sapPrograms.sort().map(programId => `
                            <div class="sap-program-chip">
                                <span class="sap-program-label">SAR-${programId}</span>
                                <button class="sap-remove-btn" data-program-id="${programId}" title="Remove ${programId}">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        `).join('')
                    }
                </div>
            </div>
        `;
    }

    /**
     * Render Dissemination tab
     */
    renderDisseminationTab() {
        const current = this.classificationManager.getCurrentClassification();
        const controls = this.classificationManager.getAllDisseminationControls();

        return `
            <div class="tab-panel ${this.currentTier2Tab === 'dissemination' ? 'active' : ''}" data-tab-panel="dissemination">
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

    /**
     * Render Release tab
     */
    renderReleaseTab() {
        const current = this.classificationManager.getCurrentClassification();
        const controls = this.classificationManager.getAllReleaseControls();

        return `
            <div class="tab-panel ${this.currentTier2Tab === 'release' ? 'active' : ''}" data-tab-panel="release">
                <h3>Release Controls</h3>
                <p class="tab-description">Specify authorized recipients and release restrictions.</p>
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

                ${(current.releaseControls.includes('RELTO') || (current.releaseAuthority && current.releaseAuthority.trim() !== '')) ? `
                    <div class="relto-countries">
                        <label class="relto-label">Releasable To countries or groups:</label>
                        <div class="country-grid">
                            ${this.countries.map(country => `
                                <label class="country-checkbox">
                                    <input type="checkbox"
                                           data-country="${country}"
                                           ${(current.releaseAuthority || '').includes(country) ? 'checked' : ''}>
                                    <span>${country}</span>
                                </label>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    /**
     * Render Handling tab
     */
    renderHandlingTab() {
        const current = this.classificationManager.getCurrentClassification();
        const caveats = this.classificationManager.getAllHandlingCaveats();

        return `
            <div class="tab-panel ${this.currentTier2Tab === 'handling' ? 'active' : ''}" data-tab-panel="handling">
                <h3>Handling Caveats</h3>
                <p class="tab-description">Additional handling and distribution restrictions.</p>
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



    /**
     * Attach event listeners to picker elements
     */
    attachPickerListeners() {
        // Tier 1 tab buttons
        this.pickerElement.querySelectorAll('[data-tier1-tab]').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.stopPropagation();
                this.switchTier1Tab(tab.dataset.tier1Tab);
            });
        });

        // Tier 2 tab buttons
        this.pickerElement.querySelectorAll('[data-tier2-tab]').forEach(tab => {
            tab.addEventListener('click', (e) => {
                e.stopPropagation();
                this.switchTier2Tab(tab.dataset.tier2Tab);
            });
        });

        // Action buttons
        this.pickerElement.querySelectorAll('[data-action]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = button.dataset.action;
                this.handleAction(action);
            });
        });

        // Classification level buttons
        this.pickerElement.querySelectorAll('[data-level]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                this.classificationManager.setClassificationLevel(button.dataset.level);
                this.refreshContent();
            });
        });

        // Dissemination controls
        // Phase 4: Added validation error handling
        this.pickerElement.querySelectorAll('[data-dissemination]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const control = checkbox.dataset.dissemination;
                if (checkbox.checked) {
                    // Phase 4: Check validation result
                    const result = this.classificationManager.addDisseminationControl(control);

                    if (!result.success) {
                        // Validation failed - uncheck the checkbox and show error
                        checkbox.checked = false;
                        this.showValidationError(result.error);
                        return;
                    }

                    // Phase 4: Check if auto-resolved
                    if (result.resolved) {
                        // Control was added but incompatible controls were removed
                        this.showWarningMessage(result.warning);
                        // Update checkboxes to reflect resolution
                        this.updateDisseminationCheckboxStates();
                    }
                } else {
                    this.classificationManager.removeDisseminationControl(control);
                }
            });
        });

        // SCI compartments
        // Phase 4: Added validation error handling
        this.pickerElement.querySelectorAll('[data-sci]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const compartment = checkbox.dataset.sci;
                if (checkbox.checked) {
                    // Phase 4: Check validation result
                    const result = this.classificationManager.addSCICompartment(compartment);

                    if (!result.success) {
                        // Validation failed - uncheck the checkbox and show error
                        checkbox.checked = false;
                        this.showValidationError(result.error);
                        return;
                    }

                    // Success - proceed normally
                } else {
                    this.classificationManager.removeSCICompartment(compartment);
                }
            });
        });

        // SAP program add button
        const sapAddBtn = this.pickerElement.querySelector('[data-action="add-sap"]');
        if (sapAddBtn) {
            sapAddBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleAddSAP();
            });
        }

        // SAP program input (Enter key)
        const sapInput = this.pickerElement.querySelector('#sap-program-input');
        if (sapInput) {
            sapInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this.handleAddSAP();
                }
            });
        }

        // SAP program remove buttons
        this.pickerElement.querySelectorAll('.sap-remove-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const programId = button.dataset.programId;
                this.handleRemoveSAP(programId);
            });
        });

        // Release controls
        // Phase 4: Added validation error handling
        this.pickerElement.querySelectorAll('[data-release]').forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const control = checkbox.dataset.release;
                if (checkbox.checked) {
                    // Phase 4: Check validation result
                    const result = this.classificationManager.addReleaseControl(control);

                    if (!result.success) {
                        // Validation failed - uncheck the checkbox and show error
                        checkbox.checked = false;
                        this.showValidationError(result.error);
                        return;
                    }

                    // Phase 4: Check if auto-resolved
                    if (result.resolved) {
                        // Control was added but incompatible controls were removed
                        this.showWarningMessage(result.warning);
                        // Update checkboxes to reflect resolution
                        this.updateReleaseCheckboxStates();
                    }

                    // Auto-select FVEY countries when RELTO is checked
                    if (control === 'RELTO') {
                        // Refresh to show country grid
                        this.refreshContent();

                        // Auto-select FVEY countries (USA, AUS, CAN, GBR, NZL)
                        const fveyCountries = ['USA', 'AUS', 'CAN', 'GBR', 'NZL'];
                        fveyCountries.forEach(country => {
                            const countryCheckbox = this.pickerElement.querySelector(`[data-country="${country}"]`);
                            if (countryCheckbox) {
                                countryCheckbox.checked = true;
                            }
                        });

                        // Update release authority with FVEY countries
                        this.updateReleaseAuthority();
                    }
                } else {
                    this.classificationManager.removeReleaseControl(control);

                    // Clear all country selections when RELTO is unchecked
                    if (control === 'RELTO') {
                        this.classificationManager.setReleaseAuthority('');
                    }
                }
                // Refresh to show/hide RELTO countries
                this.refreshContent();
            });
        });

        // Handling caveats
        // Phase 4: Added validation error handling
        this.pickerElement.querySelectorAll('[data-handling]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const caveat = checkbox.dataset.handling;
                if (checkbox.checked) {
                    // Phase 4: Check validation result
                    const result = this.classificationManager.addHandlingCaveat(caveat);

                    if (!result.success) {
                        // Validation failed - uncheck the checkbox and show error
                        checkbox.checked = false;
                        this.showValidationError(result.error);
                        return;
                    }

                    // Success - proceed normally
                } else {
                    this.classificationManager.removeHandlingCaveat(caveat);
                }
            });
        });

        // Country checkboxes (for RELTO)
        this.pickerElement.querySelectorAll('[data-country]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.updateReleaseAuthority();
            });
        });

        // Prevent picker from closing when clicking inside
        this.pickerElement.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    /**
     * Update release authority based on selected countries
     */
    updateReleaseAuthority() {
        const selectedCountries = Array.from(
            this.pickerElement.querySelectorAll('[data-country]:checked')
        ).map(cb => cb.dataset.country);

        if (selectedCountries.length > 0) {
            const authority = 'REL TO ' + selectedCountries.join(', ');
            this.classificationManager.setReleaseAuthority(authority);
        } else {
            this.classificationManager.setReleaseAuthority('');
        }
    }

    /**
     * Switch to a different tier 1 tab (top-level category)
     */
    switchTier1Tab(tier1TabName) {
        this.currentTier1Tab = tier1TabName;

        // Set default tier 2 tab for each tier 1 category
        const defaultTier2Tabs = {
            'basic': 'level',
            'compartments': 'sci',
            'controls': 'dissemination',
            'release': 'release'
        };

        this.currentTier2Tab = defaultTier2Tabs[tier1TabName] || 'level';

        // Refresh the entire picker to update both tier 1 and tier 2 tabs
        this.refreshPicker();
    }

    /**
     * Switch to a different tier 2 tab (sub-tab within category)
     */
    switchTier2Tab(tier2TabName) {
        this.currentTier2Tab = tier2TabName;

        // Update tier 2 tab buttons
        this.pickerElement.querySelectorAll('.classification-tab-tier2').forEach(tab => {
            tab.classList.toggle('active', tab.dataset.tier2Tab === tier2TabName);
        });

        // Update tab panels
        this.pickerElement.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.toggle('active', panel.dataset.tabPanel === tier2TabName);
        });
    }

    /**
     * Refresh the entire picker (used when tier 1 tab changes)
     */
    refreshPicker() {
        const header = this.pickerElement.querySelector('.classification-picker-header');
        if (header) {
            header.innerHTML = this.renderTabs();

            // Reattach tier 1 and tier 2 tab listeners
            this.pickerElement.querySelectorAll('[data-tier1-tab]').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.switchTier1Tab(tab.dataset.tier1Tab);
                });
            });

            this.pickerElement.querySelectorAll('[data-tier2-tab]').forEach(tab => {
                tab.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.switchTier2Tab(tab.dataset.tier2Tab);
                });
            });
        }

        // Update tab panels
        this.pickerElement.querySelectorAll('.tab-panel').forEach(panel => {
            panel.classList.toggle('active', panel.dataset.tabPanel === this.currentTier2Tab);
        });
    }

    /**
     * Handle action button clicks
     */
    handleAction(action) {
        switch (action) {
            case 'apply':
                this.apply();
                break;
            case 'clear-all':
                this.clearAll();
                break;
            case 'cancel':
                this.cancel();
                break;
        }
    }

    /**
     * Handle adding SAP program
     */
    handleAddSAP() {
        const input = this.pickerElement.querySelector('#sap-program-input');
        if (!input) return;

        const programId = input.value.trim().toUpperCase();

        if (!programId) {
            return; // Empty input, do nothing
        }

        // Add SAP program via ClassificationManager
        const result = this.classificationManager.addSAPProgram(programId);

        if (result.success) {
            // Clear input and refresh UI
            input.value = '';
            this.refreshContent();
        } else {
            // Show error message
            this.showValidationError(result.error);
        }
    }

    /**
     * Handle removing SAP program
     */
    handleRemoveSAP(programId) {
        this.classificationManager.removeSAPProgram(programId);
        this.refreshContent();
    }

    /**
     * Apply classification changes and close picker
     */
    apply() {
        this.snapshot = null; // Clear snapshot
        this.close();
        if (this.onApply) {
            this.onApply();
        }
        console.log('✅ Classification applied');
    }

    /**
     * Clear all classification controls (reset to UNCLASSIFIED)
     * Does NOT close the picker - allows user to make new selections
     *
     * SECURITY FIX: Also clears all portion markings from OPORD fields to prevent
     * classification security violations (DoDM 5200.01 Volume 2 requires overall
     * classification to be equal to or higher than highest portion marking)
     */
    clearAll() {
        // Reset classification level to UNCLASSIFIED
        this.classificationManager.setClassificationLevel('UNCLASSIFIED');

        // Clear all dissemination controls
        const current = this.classificationManager.getCurrentClassification();
        [...current.disseminationControls].forEach(c =>
            this.classificationManager.removeDisseminationControl(c)
        );

        // Clear all SCI compartments
        [...current.sciCompartments].forEach(c =>
            this.classificationManager.removeSCICompartment(c)
        );

        // Clear all SAP programs
        [...(current.sapPrograms || [])].forEach(p =>
            this.classificationManager.removeSAPProgram(p)
        );

        // Clear all release controls
        [...current.releaseControls].forEach(c =>
            this.classificationManager.removeReleaseControl(c)
        );

        // Clear all handling caveats
        [...current.handlingCaveats].forEach(c =>
            this.classificationManager.removeHandlingCaveat(c)
        );

        // Clear release authority
        this.classificationManager.setReleaseAuthority('');

        // SECURITY FIX: Clear all portion markings from OPORD fields
        // This prevents classification security violations where portion markings
        // (e.g., "(TS//SI/TK//REL FVEY)") remain in fields while overall banner
        // is UNCLASSIFIED, which violates DoDM 5200.01 Volume 2
        if (this.portionMarkingManager) {
            this.portionMarkingManager.clearAll();
            console.log('🧹 All portion markings cleared from OPORD fields');
        }

        // Refresh picker content to show cleared state
        this.refreshContent();

        console.log('🧹 All classification controls cleared');
    }

    /**
     * Cancel changes and close picker
     */
    cancel() {
        if (this.snapshot) {
            // Restore snapshot
            this.classificationManager.setClassificationLevel(this.snapshot.level);

            // Clear all current controls
            const current = this.classificationManager.getCurrentClassification();
            current.disseminationControls.forEach(c =>
                this.classificationManager.removeDisseminationControl(c)
            );
            current.sciCompartments.forEach(c =>
                this.classificationManager.removeSCICompartment(c)
            );
            (current.sapPrograms || []).forEach(p =>
                this.classificationManager.removeSAPProgram(p)
            );
            current.releaseControls.forEach(c =>
                this.classificationManager.removeReleaseControl(c)
            );
            current.handlingCaveats.forEach(c =>
                this.classificationManager.removeHandlingCaveat(c)
            );

            // Restore controls from snapshot
            this.snapshot.disseminationControls.forEach(c =>
                this.classificationManager.addDisseminationControl(c)
            );
            this.snapshot.sciCompartments.forEach(c =>
                this.classificationManager.addSCICompartment(c)
            );
            (this.snapshot.sapPrograms || []).forEach(p =>
                this.classificationManager.addSAPProgram(p)
            );
            this.snapshot.releaseControls.forEach(c =>
                this.classificationManager.addReleaseControl(c)
            );
            this.snapshot.handlingCaveats.forEach(c =>
                this.classificationManager.addHandlingCaveat(c)
            );

            this.classificationManager.setReleaseAuthority(this.snapshot.releaseAuthority);

            this.snapshot = null;
        }
        this.close();
        console.log('❌ Classification changes cancelled');
    }

    /**
     * Refresh picker content
     */
    refreshContent() {
        const contentArea = this.pickerElement.querySelector('.classification-picker-content');
        if (contentArea) {
            contentArea.innerHTML = this.renderTabContent();
            this.attachPickerListeners();
        }
    }

    /**
     * Handle button click
     */
    handleButtonClick(e) {
        e.stopPropagation();
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    /**
     * Handle document click (close picker when clicking outside)
     */
    handleDocumentClick(e) {
        if (this.isOpen && !this.pickerElement.contains(e.target) && e.target !== this.button) {
            this.close();
        }
    }

    /**
     * Handle keyboard events
     */
    handleKeyDown(e) {
        if (e.key === 'Escape' && this.isOpen) {
            this.cancel();
        }
    }

    /**
     * Open the picker
     */
    open() {
        // Save snapshot of current state
        const current = this.classificationManager.getCurrentClassification();
        this.snapshot = {
            level: current.level,
            disseminationControls: [...current.disseminationControls],
            sciCompartments: [...current.sciCompartments],
            sapPrograms: [...(current.sapPrograms || [])],
            releaseControls: [...current.releaseControls],
            handlingCaveats: [...current.handlingCaveats],
            releaseAuthority: current.releaseAuthority || ''
        };

        this.isOpen = true;
        this.pickerElement.style.display = 'block';
        this.button.setAttribute('aria-expanded', 'true');

        // Refresh content to show current state
        this.refreshContent();

        // Attach global listeners
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('keydown', this.handleKeyDown);

        console.log('📂 Classification picker opened');
    }

    /**
     * Close the picker
     */
    close() {
        this.isOpen = false;
        this.pickerElement.style.display = 'none';
        this.button.setAttribute('aria-expanded', 'false');

        // Remove global listeners
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('keydown', this.handleKeyDown);

        console.log('📁 Classification picker closed');
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
     * Phase 4: Surgical Fix - Validation Error Handling
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

        console.error(`[ClassificationPickerInline] Validation Error (${error.severity}):`, error);
    }

    /**
     * Format CRITICAL severity error for display
     * Used for SCI network authorization violations
     *
     * @param {Object} error - Error object
     * @returns {string} Formatted error message
     *
     * Phase 4: Surgical Fix - Validation Error Handling
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
     * Phase 4: Surgical Fix - Validation Error Handling
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
     * Phase 4: Surgical Fix - Validation Error Handling
     */
    showWarningMessage(warning) {
        if (!warning) {
            return;
        }

        // Display using console for now - less intrusive than alert
        // User will see the controls update automatically
        console.warn(`[ClassificationPickerInline] Auto-resolved: ${warning}`);

        // Optionally show a brief toast notification
        // TODO: Implement toast notification component
    }

    /**
     * Update dissemination control checkbox states
     * Called after auto-resolution to sync UI with actual state
     *
     * Phase 4: Surgical Fix - Validation Error Handling
     */
    updateDisseminationCheckboxStates() {
        const current = this.classificationManager.getCurrentClassification();
        console.log('🔍 updateDisseminationCheckboxStates called');
        console.log('   Current dissemination controls:', current.disseminationControls);

        // Update all dissemination control checkboxes to match current state
        this.pickerElement.querySelectorAll('[data-dissemination]').forEach(checkbox => {
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
     * Phase 4: Surgical Fix - Validation Error Handling
     */
    updateReleaseCheckboxStates() {
        const current = this.classificationManager.getCurrentClassification();
        console.log('🔍 updateReleaseCheckboxStates called');
        console.log('   Current release controls:', current.releaseControls);

        // Update all release control checkboxes to match current state
        this.pickerElement.querySelectorAll('[data-release]').forEach(checkbox => {
            const control = checkbox.dataset.release;
            const shouldBeChecked = current.releaseControls.includes(control);
            console.log(`   ${control}: ${checkbox.checked} → ${shouldBeChecked}`);
            checkbox.checked = shouldBeChecked;
        });
    }

    /**
     * Destroy the picker
     */
    destroy() {
        if (this.button) {
            this.button.removeEventListener('click', this.handleButtonClick);
        }

        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('keydown', this.handleKeyDown);

        if (this.pickerElement && this.pickerElement.parentElement) {
            this.pickerElement.parentElement.removeChild(this.pickerElement);
        }

        this.pickerElement = null;
        this.isOpen = false;

        console.log('🗑️ Classification picker destroyed');
    }
}

