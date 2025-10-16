/**
 * Portion Marking Popover Component
 * 
 * Hybrid UI combining:
 * - Manual text entry with autocomplete (Option 1)
 * - Quick preset chips (Option 3)
 * - Custom builder with dropdowns/multi-selects (Option 3)
 * 
 * Provides compact, accessible interface for selecting portion markings
 * in OPORD sections. Integrates with ClassificationManager for validation.
 * 
 * @example
 * const popover = new PortionMarkingPopover({
 *     button: document.getElementById('portion-marking-button'),
 *     classificationManager: classificationManager,
 *     currentValue: '(TS//SI/TK//NF)',
 *     onApply: (portionMarking) => console.log('Applied:', portionMarking)
 * });
 */

export class PortionMarkingPopover {
    /**
     * Create a portion marking popover
     * @param {Object} options - Configuration options
     * @param {HTMLElement} options.button - Button element to attach popover to
     * @param {Object} options.classificationManager - ClassificationManager instance
     * @param {string} options.currentValue - Current portion marking value (e.g., "(TS//SI/TK//NF)")
     * @param {HTMLElement} options.targetField - Target text field to insert portion marking into (optional)
     * @param {Function} options.onApply - Callback when Apply is clicked
     * @param {Function} options.onCancel - Callback when Cancel is clicked (optional)
     */
    constructor(options) {
        this.button = options.button;
        this.classificationManager = options.classificationManager;
        this.currentValue = options.currentValue || '(U)';
        this.targetField = options.targetField || null; // Target field for insertion
        this.onApply = options.onApply || (() => {});
        this.onCancel = options.onCancel || (() => {});

        // Generate unique ID for this popover instance based on field name
        // Support both button-based (legacy) and FAB-based (new) workflows
        this.fieldName = this.button?.dataset?.fieldName ||
                        this.targetField?.id ||
                        this.targetField?.name ||
                        `popover-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
        this.uniqueId = `manual-input-${this.fieldName}`;
        this.validationId = `validation-message-${this.fieldName}`;

        this.popoverElement = null;
        this.isOpen = false;
        this.manualInputValue = '';
        this.customBuilderExpanded = false;
        this.autocompleteResults = [];
        this.selectedAutocompleteIndex = -1;
        this.selectedCountries = []; // Countries selected for REL TO
        this.selectedSAPPrograms = []; // SAP program identifiers (e.g., ['BP', 'ABC', 'DEF'])

        // Quick presets (9 common markings)
        this.presets = [
            { value: '(U)', label: 'UNCLASSIFIED' },
            { value: '(U//FOUO)', label: 'UNCLASSIFIED//FOUO' },
            { value: '(CUI)', label: 'CUI' },
            { value: '(C)', label: 'CONFIDENTIAL' },
            { value: '(S)', label: 'SECRET' },
            { value: '(S//NF)', label: 'SECRET//NOFORN' },
            { value: '(TS)', label: 'TOP SECRET' },
            { value: '(TS//SI)', label: 'TOP SECRET//SI' },
            { value: '(TS//SI/TK//NF)', label: 'TOP SECRET//SI/TK//NOFORN' }
        ];

        // Country list for REL TO
        this.countries = [
            'USA', 'AUS', 'CAN', 'GBR', 'NZL', // FVEY
            'FRA', 'DEU', 'ITA', 'ESP', 'POL', 'NLD', 'BEL', 'DNK', 'NOR', // NATO
            'JPN', 'KOR', 'ISR', 'SAU', 'ARE', 'QAT' // Other allies
        ];

        // Autocomplete suggestions database
        this.autocompleteSuggestions = {
            levels: ['U', 'CUI', 'C', 'S', 'TS'],
            sci: ['SI', 'G', 'TK', 'HCS'],
            dissemination: ['NOFORN', 'ORCON', 'IMCON', 'NOCONTRACTOR'],
            release: ['FVEY', 'RELTO', 'REL TO'],
            handling: ['FOUO', 'SBU', 'LES', 'EYES ONLY']
        };

        // Bind methods
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleManualInput = this.handleManualInput.bind(this);
        this.handlePresetClick = this.handlePresetClick.bind(this);
        this.handleCustomBuilderToggle = this.handleCustomBuilderToggle.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleApply = this.handleApply.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

        this.init();
    }

    /**
     * Initialize the popover
     */
    init() {
        // Create popover element
        this.createPopover();

        // Attach button click handler
        if (this.button) {
            this.button.addEventListener('click', this.handleButtonClick);
        }
    }

    /**
     * Create popover element
     */
    createPopover() {
        this.popoverElement = document.createElement('div');
        this.popoverElement.className = 'portion-marking-popover';
        this.popoverElement.style.display = 'none';
        this.popoverElement.setAttribute('role', 'dialog');
        this.popoverElement.setAttribute('aria-label', 'Portion Marking Selector');

        // Always append to document.body to avoid clipping issues
        // Position will be calculated using fixed positioning
        document.body.appendChild(this.popoverElement);

        // Render initial content
        this.render();
    }

    /**
     * Render popover content
     */
    render() {
        if (!this.popoverElement) return;

        const validationResult = this.validateCurrentInput();
        const isValid = validationResult.valid;
        const errorMessage = validationResult.error || '';

        this.popoverElement.innerHTML = `
            <div class="popover-content">
                <!-- Manual Entry Section -->
                <div class="manual-entry-section">
                    <label for="${this.uniqueId}" class="section-label">
                        Manual Entry:
                    </label>
                    <input
                        type="text"
                        id="${this.uniqueId}"
                        class="manual-input ${!isValid ? 'invalid' : ''}"
                        placeholder="Type portion marking (e.g., TS//SI/TK//REL TO NATO)"
                        value="${this.manualInputValue}"
                        autocomplete="off"
                        aria-describedby="${this.validationId}"
                    />
                    ${this.renderAutocomplete()}
                    ${!isValid ? `
                        <div id="${this.validationId}" class="validation-error" role="alert">
                            ⚠️ ${errorMessage}
                        </div>
                    ` : ''}
                </div>

                <!-- Quick Presets Section -->
                <div class="presets-section">
                    <div class="section-label">Quick Presets:</div>
                    <div class="presets-grid">
                        ${this.presets.map(preset => `
                            <button
                                class="preset-chip ${this.manualInputValue === preset.value ? 'selected' : ''}"
                                data-value="${preset.value}"
                                title="${preset.label}"
                                aria-label="${preset.label}"
                            >
                                ${preset.value}
                            </button>
                        `).join('')}
                    </div>
                </div>

                <!-- Custom Builder Section -->
                <div class="custom-builder-section">
                    <button class="custom-builder-toggle" aria-expanded="${this.customBuilderExpanded}">
                        ${this.customBuilderExpanded ? '▼' : '▶'} Customize...
                    </button>
                    ${this.customBuilderExpanded ? this.renderCustomBuilder() : ''}
                </div>

                <!-- Footer Buttons -->
                <div class="popover-footer">
                    <button class="btn-apply" ${!isValid ? 'disabled' : ''} aria-label="Apply portion marking">
                        Apply
                    </button>
                    <button class="btn-cancel" aria-label="Cancel and close">
                        Cancel
                    </button>
                </div>
            </div>
        `;

        // Attach event listeners
        this.attachEventListeners();
    }

    /**
     * Render autocomplete dropdown
     */
    renderAutocomplete() {
        if (this.autocompleteResults.length === 0) {
            return '';
        }

        return `
            <div class="autocomplete-dropdown" role="listbox">
                ${this.autocompleteResults.map((result, index) => `
                    <div
                        class="autocomplete-item ${index === this.selectedAutocompleteIndex ? 'selected' : ''}"
                        data-index="${index}"
                        data-value="${result.value}"
                        role="option"
                        aria-selected="${index === this.selectedAutocompleteIndex}"
                    >
                        <span class="autocomplete-value">${result.value}</span>
                        <span class="autocomplete-description">${result.description}</span>
                    </div>
                `).join('')}
            </div>
        `;
    }

    /**
     * Render custom builder (when expanded)
     */
    renderCustomBuilder() {
        // Parse current input to pre-select controls
        const parsed = this.classificationManager.parsePortionMarking(this.manualInputValue);
        const level = parsed?.level || 'UNCLASSIFIED';
        const sci = parsed?.sciCompartments || [];
        const sap = parsed?.sapPrograms || []; // SAP program identifiers
        const dissem = parsed?.disseminationControls || [];
        const release = parsed?.releaseControls || [];
        const handling = parsed?.handlingCaveats || [];

        // Update selectedSAPPrograms from parsed marking
        this.selectedSAPPrograms = [...sap];

        return `
            <div class="custom-builder-content">
                <!-- Classification Level -->
                <div class="builder-field">
                    <label>Level:</label>
                    <select class="builder-select" data-field="level">
                        <option value="UNCLASSIFIED" ${level === 'UNCLASSIFIED' ? 'selected' : ''}>UNCLASSIFIED</option>
                        <option value="CUI" ${level === 'CUI' ? 'selected' : ''}>CUI</option>
                        <option value="CONFIDENTIAL" ${level === 'CONFIDENTIAL' ? 'selected' : ''}>CONFIDENTIAL</option>
                        <option value="SECRET" ${level === 'SECRET' ? 'selected' : ''}>SECRET</option>
                        <option value="TOP SECRET" ${level === 'TOP SECRET' ? 'selected' : ''}>TOP SECRET</option>
                    </select>
                </div>

                <!-- SCI Compartments (only for TOP SECRET) -->
                <!-- ORDERING: SCI compartments displayed in ALPHABETICAL ORDER (HCS, SI, G, TK) per CAPCO Register -->
                <!-- SPECIAL: G (Gamma) is a sub-compartment of SI, displayed as "Gamma (SI-G)" to clarify coupling -->
                ${level === 'TOP SECRET' ? `
                    <div class="builder-field">
                        <label>SCI:</label>
                        <div class="builder-checkboxes">
                            ${[
                                { value: 'HCS', label: 'HCS' },
                                { value: 'SI', label: 'SI' },
                                { value: 'G', label: 'Gamma (SI-G)' },
                                { value: 'TK', label: 'TK' }
                            ].map(comp => `
                                <label class="builder-checkbox">
                                    <input type="checkbox" value="${comp.value}" ${sci.includes(comp.value) ? 'checked' : ''} data-field="sci">
                                    ${comp.label}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- SAP Programs (only for CONFIDENTIAL, SECRET, or TOP SECRET) -->
                <!-- SAP appears AFTER SCI compartments, BEFORE dissemination controls per DoDM 5200.01 Volume 2 -->
                <!-- Format: SAR-[program-id] where [program-id] is the program identifier -->
                <!-- NOTE: Real SAP program names are CLASSIFIED. Use fictional placeholders only. -->
                ${['CONFIDENTIAL', 'SECRET', 'TOP SECRET'].includes(level) ? `
                    <div class="builder-field">
                        <label>SAP Programs:</label>
                        <div class="sap-input-group">
                            <input type="text"
                                   id="sap-program-input-${this.uniqueId}"
                                   class="sap-program-input"
                                   placeholder="Enter program ID (e.g., XXX, EXAMPLE1)"
                                   maxlength="10"
                                   autocomplete="off"
                                   style="text-transform: uppercase;">
                            <button class="sap-add-btn" data-action="add-sap" type="button">
                                <i class="fas fa-plus"></i> Add
                            </button>
                        </div>
                        <div id="sap-programs-list-${this.uniqueId}" class="sap-programs-list">
                            ${this.selectedSAPPrograms.length === 0 ?
                                '<p class="sap-empty-message">No SAP programs added. Enter program ID above.</p>' :
                                this.selectedSAPPrograms.sort().map(programId => `
                                    <div class="sap-program-chip">
                                        <span class="sap-program-label">SAR-${programId}</span>
                                        <button class="sap-remove-btn" data-program-id="${programId}" type="button" title="Remove ${programId}">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                `).join('')
                            }
                        </div>
                    </div>
                ` : ''}

                <!-- Dissemination Controls -->
                <div class="builder-field">
                    <label>Dissemination:</label>
                    <div class="builder-checkboxes">
                        ${['NOFORN', 'ORCON', 'IMCON'].map(ctrl => {
                            // NOFORN Mutual Exclusion: Disable NOFORN if FVEY or RELTO is selected
                            const isNOFORN = ctrl === 'NOFORN';
                            const hasForeignRelease = release.includes('FVEY') || release.includes('RELTO');
                            const disabled = isNOFORN && hasForeignRelease ? 'disabled' : '';
                            const title = isNOFORN && hasForeignRelease ? 'NOFORN is mutually exclusive with FVEY/RELTO' : '';
                            const style = disabled ? 'opacity: 0.5; cursor: not-allowed;' : '';

                            return `
                                <label class="builder-checkbox" style="${style}" title="${title}">
                                    <input type="checkbox" value="${ctrl}" ${dissem.includes(ctrl) ? 'checked' : ''} ${disabled} data-field="dissem">
                                    ${ctrl}
                                </label>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- Release Controls -->
                <div class="builder-field">
                    <label>Release:</label>
                    <div class="builder-checkboxes">
                        ${['FVEY', 'RELTO'].map(ctrl => {
                            // NOFORN Mutual Exclusion: Disable FVEY/RELTO if NOFORN is selected
                            const hasNOFORN = dissem.includes('NOFORN');
                            const disabled = hasNOFORN ? 'disabled' : '';
                            const title = hasNOFORN ? 'FVEY/RELTO are mutually exclusive with NOFORN' : '';
                            const style = disabled ? 'opacity: 0.5; cursor: not-allowed;' : '';

                            return `
                                <label class="builder-checkbox" style="${style}" title="${title}">
                                    <input type="checkbox" value="${ctrl}" ${release.includes(ctrl) ? 'checked' : ''} ${disabled} data-field="release">
                                    ${ctrl}
                                </label>
                            `;
                        }).join('')}
                    </div>
                </div>

                <!-- Country Selection (only when RELTO is checked) -->
                ${release.includes('RELTO') ? `
                    <div class="builder-field country-selection">
                        <label>Countries (REL TO):</label>
                        <div class="country-grid">
                            ${this.countries.map(country => `
                                <label class="country-checkbox">
                                    <input type="checkbox" value="${country}" ${this.selectedCountries.includes(country) ? 'checked' : ''} data-field="country">
                                    ${country}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}

                <!-- Handling Caveats (filtered by level) -->
                ${level === 'UNCLASSIFIED' || level === 'CUI' ? `
                    <div class="builder-field">
                        <label>Handling:</label>
                        <div class="builder-checkboxes">
                            ${['FOUO', 'SBU', 'LES'].map(cav => `
                                <label class="builder-checkbox">
                                    <input type="checkbox" value="${cav}" ${handling.includes(cav) ? 'checked' : ''} data-field="handling">
                                    ${cav}
                                </label>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }

    /**
     * Attach event listeners to popover elements
     */
    attachEventListeners() {
        if (!this.popoverElement) return;

        // Manual input field
        const manualInput = this.popoverElement.querySelector(`#${this.uniqueId}`);
        if (manualInput) {
            manualInput.addEventListener('input', this.handleManualInput);
            manualInput.addEventListener('keydown', this.handleKeyDown);
        }

        // Preset chips
        const presetChips = this.popoverElement.querySelectorAll('.preset-chip');
        presetChips.forEach(chip => {
            chip.addEventListener('click', this.handlePresetClick);
        });

        // Custom builder toggle
        const customBuilderToggle = this.popoverElement.querySelector('.custom-builder-toggle');
        if (customBuilderToggle) {
            customBuilderToggle.addEventListener('click', this.handleCustomBuilderToggle);
        }

        // Custom builder controls (if expanded)
        if (this.customBuilderExpanded) {
            const builderSelects = this.popoverElement.querySelectorAll('.builder-select');
            builderSelects.forEach(select => {
                select.addEventListener('change', this.handleCustomBuilderChange.bind(this));
            });

            const builderCheckboxes = this.popoverElement.querySelectorAll('.builder-checkbox input');
            builderCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', this.handleCustomBuilderChange.bind(this));
            });

            // Country checkboxes
            const countryCheckboxes = this.popoverElement.querySelectorAll('.country-checkbox input');
            countryCheckboxes.forEach(checkbox => {
                checkbox.addEventListener('change', this.handleCountryChange.bind(this));
            });

            // SAP program add button
            const sapAddBtn = this.popoverElement.querySelector('[data-action="add-sap"]');
            if (sapAddBtn) {
                sapAddBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.handleAddSAP();
                });
            }

            // SAP program input (Enter key)
            const sapInput = this.popoverElement.querySelector(`#sap-program-input-${this.uniqueId}`);
            if (sapInput) {
                sapInput.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        this.handleAddSAP();
                    }
                });
            }

            // SAP program remove buttons
            const sapRemoveBtns = this.popoverElement.querySelectorAll('.sap-remove-btn');
            sapRemoveBtns.forEach(button => {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const programId = button.dataset.programId;
                    this.handleRemoveSAP(programId);
                });
            });
        }

        // Apply button
        const applyBtn = this.popoverElement.querySelector('.btn-apply');
        if (applyBtn) {
            applyBtn.addEventListener('click', this.handleApply);
        }

        // Cancel button
        const cancelBtn = this.popoverElement.querySelector('.btn-cancel');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', this.handleCancel);
        }

        // Autocomplete items
        const autocompleteItems = this.popoverElement.querySelectorAll('.autocomplete-item');
        autocompleteItems.forEach(item => {
            item.addEventListener('click', this.handleAutocompleteClick.bind(this));
        });
    }

    /**
     * Handle button click to open/close popover
     */
    handleButtonClick(event) {
        console.log('🔘 PortionMarkingPopover.handleButtonClick() called');
        console.log('   button:', this.button);
        console.log('   fieldName:', this.fieldName);
        console.log('   isOpen:', this.isOpen);

        event.stopPropagation();
        if (this.isOpen) {
            console.log('   Action: Closing popover');
            this.close();
        } else {
            console.log('   Action: Opening popover');
            this.open();
        }
    }

    /**
     * Handle document click to close popover when clicking outside
     */
    handleDocumentClick(event) {
        if (this.isOpen && this.popoverElement && !this.popoverElement.contains(event.target) && event.target !== this.button) {
            this.close();
        }
    }

    /**
     * Handle keyboard navigation
     */
    handleKeyDown(event) {
        if (!this.isOpen) return;

        switch (event.key) {
            case 'Escape':
                event.preventDefault();
                this.handleCancel();
                break;
            case 'Enter':
                if (this.selectedAutocompleteIndex >= 0 && this.autocompleteResults.length > 0) {
                    event.preventDefault();
                    this.selectAutocompleteItem(this.selectedAutocompleteIndex);
                } else if (this.validateCurrentInput().valid) {
                    event.preventDefault();
                    this.handleApply();
                }
                break;
            case 'ArrowDown':
                if (this.autocompleteResults.length > 0) {
                    event.preventDefault();
                    this.selectedAutocompleteIndex = Math.min(
                        this.selectedAutocompleteIndex + 1,
                        this.autocompleteResults.length - 1
                    );
                    this.render();
                }
                break;
            case 'ArrowUp':
                if (this.autocompleteResults.length > 0) {
                    event.preventDefault();
                    this.selectedAutocompleteIndex = Math.max(this.selectedAutocompleteIndex - 1, -1);
                    this.render();
                }
                break;
            case 'Tab':
                // Allow tab to move focus within popover
                break;
        }
    }

    /**
     * Handle manual input changes
     */
    handleManualInput(event) {
        this.manualInputValue = event.target.value;
        this.updateAutocomplete();

        // Update only autocomplete dropdown and validation (don't re-render entire popover)
        this.updateAutocompleteDisplay();
        this.updateValidationDisplay();
    }

    /**
     * Handle preset chip click
     */
    handlePresetClick(event) {
        event.preventDefault();
        event.stopPropagation(); // Prevent document click handler from closing popover

        const value = event.currentTarget.dataset.value;
        this.manualInputValue = value;
        this.autocompleteResults = [];
        this.selectedAutocompleteIndex = -1;
        this.render();

        // Focus back on manual input
        setTimeout(() => {
            const manualInput = this.popoverElement.querySelector(`#${this.uniqueId}`);
            if (manualInput) manualInput.focus();
        }, 0);
    }

    /**
     * Handle custom builder toggle
     */
    handleCustomBuilderToggle(event) {
        event.preventDefault();
        event.stopPropagation(); // Prevent click from bubbling to document handler
        this.customBuilderExpanded = !this.customBuilderExpanded;
        this.render();
    }

    /**
     * Handle custom builder control changes
     *
     * NOFORN Mutual Exclusion Logic (Added 2025-10-14):
     * - If NOFORN checkbox is checked: Uncheck FVEY and RELTO, clear country selection
     * - If FVEY or RELTO checkbox is checked: Uncheck NOFORN
     *
     * Gamma (G) Coupling Logic (Added 2025-10-14):
     * - If G (Gamma) checkbox is checked: Automatically check SI (G requires SI)
     * - If SI checkbox is unchecked: Automatically uncheck G (G cannot exist without SI)
     */
    handleCustomBuilderChange(event) {
        // NOFORN Mutual Exclusion Logic (Added 2025-10-14)
        if (event.target.type === 'checkbox') {
            const value = event.target.value;
            const isChecked = event.target.checked;
            const field = event.target.getAttribute('data-field');

            if (field === 'dissem' && value === 'NOFORN' && isChecked) {
                // NOFORN checked - uncheck FVEY and RELTO
                const releaseCheckboxes = this.popoverElement.querySelectorAll('.builder-checkbox input[data-field="release"]');
                releaseCheckboxes.forEach(checkbox => {
                    if (checkbox.value === 'FVEY' || checkbox.value === 'RELTO') {
                        checkbox.checked = false;
                    }
                });

                // Clear country selection
                this.selectedCountries = [];

                console.log('🔒 NOFORN checked - unchecked FVEY and RELTO, cleared countries');
            } else if (field === 'release' && (value === 'FVEY' || value === 'RELTO') && isChecked) {
                // FVEY or RELTO checked - uncheck NOFORN
                const dissemCheckboxes = this.popoverElement.querySelectorAll('.builder-checkbox input[data-field="dissem"]');
                dissemCheckboxes.forEach(checkbox => {
                    if (checkbox.value === 'NOFORN') {
                        checkbox.checked = false;
                    }
                });

                console.log(`🔒 ${value} checked - unchecked NOFORN`);
            }

            // Gamma (G) Coupling Logic (Added 2025-10-14)
            // G (Gamma) is a sub-compartment of SI and must always be coupled with SI
            else if (field === 'sci' && value === 'G' && isChecked) {
                // G checked - automatically check SI (G requires SI)
                const sciCheckboxes = this.popoverElement.querySelectorAll('.builder-checkbox input[data-field="sci"]');
                sciCheckboxes.forEach(checkbox => {
                    if (checkbox.value === 'SI') {
                        checkbox.checked = true;
                    }
                });

                console.log('🔗 Gamma (G) checked - automatically checked SI (G requires SI, displayed as SI-G)');
            } else if (field === 'sci' && value === 'SI' && !isChecked) {
                // SI unchecked - automatically uncheck G (G cannot exist without SI)
                const sciCheckboxes = this.popoverElement.querySelectorAll('.builder-checkbox input[data-field="sci"]');
                sciCheckboxes.forEach(checkbox => {
                    if (checkbox.value === 'G') {
                        checkbox.checked = false;
                    }
                });

                console.log('🔗 SI unchecked - automatically unchecked Gamma (G requires SI)');
            }
        }

        // Rebuild portion marking from custom builder selections
        this.rebuildFromCustomBuilder();
        this.render();
    }

    /**
     * Handle country checkbox changes
     */
    handleCountryChange(event) {
        // Update selected countries array
        const country = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked && !this.selectedCountries.includes(country)) {
            this.selectedCountries.push(country);
        } else if (!isChecked) {
            this.selectedCountries = this.selectedCountries.filter(c => c !== country);
        }

        // Rebuild portion marking with updated countries
        this.rebuildFromCustomBuilder();
    }

    /**
     * Handle adding SAP program
     *
     * Validates program ID and adds to selectedSAPPrograms array.
     * Validation rules (per DoDM 5200.01 Volume 2):
     * - 1-10 characters
     * - Alphanumeric only (A-Z, 0-9)
     * - Automatically converted to uppercase
     * - Duplicates rejected (idempotent)
     * - Classification level must be CONFIDENTIAL, SECRET, or TOP SECRET
     */
    handleAddSAP() {
        const input = this.popoverElement.querySelector(`#sap-program-input-${this.uniqueId}`);
        if (!input) return;

        const programId = input.value.trim().toUpperCase();

        if (!programId) {
            return; // Empty input, do nothing
        }

        // Validate format (alphanumeric only, 1-10 characters)
        if (!/^[A-Z0-9]{1,10}$/.test(programId)) {
            alert('⚠️ SAP program ID must contain only letters and numbers (1-10 characters)');
            return;
        }

        // Check if already present (idempotent)
        if (this.selectedSAPPrograms.includes(programId)) {
            console.log(`⚠️ SAP program ${programId} already added`);
            input.value = '';
            return;
        }

        // Add program and sort alphabetically
        this.selectedSAPPrograms.push(programId);
        this.selectedSAPPrograms.sort();

        console.log(`✅ Added SAP program: SAR-${programId}`);

        // Clear input and rebuild marking
        input.value = '';
        this.rebuildFromCustomBuilder();
        this.render();

        // Refocus input for adding more programs
        setTimeout(() => {
            input.focus();
        }, 0);
    }

    /**
     * Handle removing SAP program
     *
     * @param {string} programId - Program ID to remove (e.g., 'BP', 'ABC')
     */
    handleRemoveSAP(programId) {
        const index = this.selectedSAPPrograms.indexOf(programId);

        if (index > -1) {
            this.selectedSAPPrograms.splice(index, 1);
            console.log(`✅ Removed SAP program: SAR-${programId}`);

            // Rebuild marking and re-render
            this.rebuildFromCustomBuilder();
            this.render();
        }
    }

    /**
     * Handle autocomplete item click
     */
    handleAutocompleteClick(event) {
        const index = parseInt(event.currentTarget.dataset.index, 10);
        this.selectAutocompleteItem(index);
    }

    /**
     * Select an autocomplete item
     */
    selectAutocompleteItem(index) {
        if (index >= 0 && index < this.autocompleteResults.length) {
            const selected = this.autocompleteResults[index];
            this.manualInputValue = selected.value;
            this.autocompleteResults = [];
            this.selectedAutocompleteIndex = -1;
            this.render();

            // Focus back on manual input
            setTimeout(() => {
                const manualInput = this.popoverElement.querySelector(`#${this.uniqueId}`);
                if (manualInput) manualInput.focus();
            }, 0);
        }
    }

    /**
     * Handle Apply button click
     */
    handleApply(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        const validationResult = this.validateCurrentInput();
        if (!validationResult.valid) {
            console.warn('Cannot apply invalid portion marking:', validationResult.error);
            return;
        }

        // Parse and normalize the portion marking
        const parsed = this.classificationManager.parsePortionMarking(this.manualInputValue);
        if (parsed) {
            // Use the manualInputValue directly since it's already validated
            this.currentValue = this.manualInputValue;
            this.onApply(this.currentValue);
            this.close(true); // Reset FAB after applying
        } else {
            console.error('Failed to parse portion marking:', this.manualInputValue);
        }
    }

    /**
     * Handle Cancel button click
     */
    handleCancel(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.onCancel();
        this.close(true); // Reset FAB after cancelling
    }

    /**
     * Extract countries from portion marking (e.g., "REL TO USA, KOR, NATO")
     */
    extractCountriesFromPortionMarking() {
        this.selectedCountries = [];

        if (!this.manualInputValue) return;

        // Look for "REL TO" or "RELTO" followed by countries
        const relToMatch = this.manualInputValue.match(/REL\s*TO\s+([A-Z,\s]+)/i);
        if (relToMatch) {
            // Extract and clean country codes
            const countriesStr = relToMatch[1];
            this.selectedCountries = countriesStr
                .split(',')
                .map(c => c.trim())
                .filter(c => c.length > 0);
        }
    }

    /**
     * Open the popover
     */
    open() {
        console.log('🔓 PortionMarkingPopover.open() called');
        console.log('   isOpen:', this.isOpen);
        console.log('   button:', this.button);
        console.log('   popoverElement:', this.popoverElement);

        if (this.isOpen) {
            console.log('⚠️ Popover already open, skipping');
            return;
        }

        // Pre-populate with current value
        this.manualInputValue = this.currentValue;
        this.autocompleteResults = [];
        this.selectedAutocompleteIndex = -1;
        this.customBuilderExpanded = false;
        console.log('   currentValue:', this.currentValue);

        // Extract countries from current portion marking (if any)
        this.extractCountriesFromPortionMarking();

        // Show popover
        this.popoverElement.style.display = 'block';
        this.isOpen = true;
        console.log('✅ Popover display set to block');

        // Position popover below button
        this.positionPopover();

        // Render content
        this.render();
        console.log('✅ Popover content rendered');

        // Focus on manual input
        setTimeout(() => {
            const manualInput = this.popoverElement.querySelector(`#${this.uniqueId}`);
            if (manualInput) {
                manualInput.focus();
                manualInput.select(); // Select all text for easy editing
                console.log('✅ Manual input focused and selected');
            } else {
                console.log('❌ Manual input not found:', this.uniqueId);
            }
        }, 0);

        // Add document click listener to close on outside click
        // Use setTimeout to avoid closing immediately from the same click event that opened the popover
        setTimeout(() => {
            document.addEventListener('click', this.handleDocumentClick);
            console.log('✅ Document click listener added (delayed to avoid immediate close)');
        }, 0);

        console.log('✅ Popover opened successfully');
    }

    /**
     * Close the popover
     * @param {boolean} resetFAB - Whether to reset FAB to default position after closing
     */
    close(resetFAB = false) {
        console.log('🔒 PortionMarkingPopover.close() called');
        console.log('   isOpen:', this.isOpen);
        console.log('   resetFAB:', resetFAB);

        if (!this.isOpen) {
            console.log('⚠️ Popover already closed, skipping');
            return;
        }

        this.popoverElement.style.display = 'none';
        this.isOpen = false;
        console.log('✅ Popover display set to none');

        // Remove document click listener
        document.removeEventListener('click', this.handleDocumentClick);

        if (resetFAB) {
            // Workflow complete - trigger FAB reset by dispatching custom event
            console.log('📍 Dispatching FAB reset event');
            const fabResetEvent = new CustomEvent('portion-marking:workflow-complete', {
                bubbles: true,
                detail: { fieldId: this.targetField?.id || this.targetField?.name }
            });
            document.dispatchEvent(fabResetEvent);

            // Don't return focus to field (allows FAB to reset)
            console.log('✅ Popover closed - FAB will reset to default position');
        } else {
            // Popover closed but workflow not complete (e.g., clicked outside)
            // Return focus to target field to maintain FAB position
            if (this.targetField) {
                setTimeout(() => {
                    this.targetField.focus();
                    console.log('✅ Focus returned to target field');
                }, 50);
            } else if (this.button) {
                this.button.focus();
            }
            console.log('✅ Popover closed - FAB position maintained');
        }
    }

    /**
     * Position popover intelligently relative to button or FAB
     * Uses fixed positioning to avoid clipping issues
     * Ensures popover stays within viewport with proper scrolling
     */
    positionPopover() {
        console.log('📍 positionPopover() called');

        if (!this.popoverElement) {
            console.log('❌ Missing popoverElement');
            console.log('   popoverElement:', this.popoverElement);
            return;
        }

        // Check if FAB exists and is visible (dynamic positioning mode)
        const fab = document.getElementById('opord-portion-marking-fab');
        const fabRect = fab ? fab.getBoundingClientRect() : null;

        // Use FAB position if it's visible and not in default position
        // (FAB is in default position when right/bottom are set, not top/left)
        const useFAB = fabRect && fab.style.top && fab.style.top !== 'auto';

        // Determine reference element for positioning:
        // 1. FAB (if visible and in dynamic position)
        // 2. Button (if exists - legacy button-based workflow)
        // 3. Target field (FAB-only workflow)
        let referenceRect;
        let referenceType;

        if (useFAB) {
            referenceRect = fabRect;
            referenceType = 'FAB';
        } else if (this.button) {
            referenceRect = this.button.getBoundingClientRect();
            referenceType = 'Button';
        } else if (this.targetField) {
            referenceRect = this.targetField.getBoundingClientRect();
            referenceType = 'Target Field';
        } else {
            console.log('❌ No reference element found (no FAB, button, or target field)');
            // Fallback: center of viewport
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;
            const popoverRect = this.popoverElement.getBoundingClientRect();

            const top = (viewportHeight / 2) - (popoverRect.height / 2);
            const left = (viewportWidth / 2) - (popoverRect.width / 2);

            this.popoverElement.style.position = 'fixed';
            this.popoverElement.style.top = `${top}px`;
            this.popoverElement.style.left = `${left}px`;
            this.popoverElement.style.zIndex = '10000';

            console.log('✅ Popover positioned at viewport center:', { top, left });
            return;
        }

        const popoverRect = this.popoverElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const viewportWidth = window.innerWidth;
        const margin = 16; // Minimum margin from viewport edges

        console.log('   Reference element:', referenceType);
        console.log('   Reference rect:', referenceRect);
        console.log('   Popover rect:', popoverRect);
        console.log('   Viewport:', { width: viewportWidth, height: viewportHeight });

        // Calculate available space
        const spaceBelow = viewportHeight - referenceRect.bottom - margin;
        const spaceAbove = referenceRect.top - margin;
        const maxPopoverHeight = viewportHeight - (2 * margin); // Maximum height with margins

        console.log('   Space below:', spaceBelow);
        console.log('   Space above:', spaceAbove);
        console.log('   Max popover height:', maxPopoverHeight);

        // Set max-height to ensure popover fits in viewport
        this.popoverElement.style.maxHeight = `${maxPopoverHeight}px`;

        // Determine vertical position (prefer below, but use above if more space)
        let top;
        if (spaceBelow >= spaceAbove) {
            // Position below reference element
            top = referenceRect.bottom + 4;
            console.log('   Positioning BELOW reference element');

            // Ensure popover doesn't extend beyond bottom of viewport
            const maxTop = viewportHeight - maxPopoverHeight - margin;
            if (top > maxTop) {
                top = maxTop;
                console.log('   Adjusted top to prevent bottom overflow:', top);
            }
        } else {
            // Position above reference element
            top = referenceRect.top - Math.min(popoverRect.height, maxPopoverHeight) - 4;
            console.log('   Positioning ABOVE reference element');

            // Ensure popover doesn't extend beyond top of viewport
            if (top < margin) {
                top = margin;
                console.log('   Adjusted top to prevent top overflow:', top);
            }
        }

        // Calculate horizontal position
        // If using FAB, center popover on FAB; otherwise align with button
        let left;
        if (useFAB) {
            // Center popover on FAB
            left = referenceRect.left + (referenceRect.width / 2) - (popoverRect.width / 2);
            console.log('   Centering popover on FAB');
        } else {
            // Align left edge with button
            left = referenceRect.left;
        }

        // Ensure popover doesn't overflow right edge of viewport
        if (left + popoverRect.width > viewportWidth - margin) {
            left = viewportWidth - popoverRect.width - margin;
            console.log('   Adjusted left to prevent right overflow');
        }

        // Ensure popover doesn't overflow left edge of viewport
        if (left < margin) {
            left = margin;
            console.log('   Adjusted left to prevent left overflow');
        }

        // Apply fixed positioning
        this.popoverElement.style.position = 'fixed';
        this.popoverElement.style.top = `${top}px`;
        this.popoverElement.style.left = `${left}px`;
        this.popoverElement.style.zIndex = '10000';

        console.log('✅ Popover positioned at:', { top, left, maxHeight: maxPopoverHeight, zIndex: 10000 });
    }

    /**
     * Update autocomplete suggestions based on current input
     */
    updateAutocomplete() {
        const input = this.manualInputValue.toLowerCase().trim();
        if (input.length < 1) {
            this.autocompleteResults = [];
            return;
        }

        const results = [];

        // Match classification levels
        this.autocompleteSuggestions.levels.forEach(level => {
            if (level.toLowerCase().includes(input)) {
                results.push({
                    value: `(${level})`,
                    description: `${level} classification`
                });
            }
        });

        // Match SCI compartments (only suggest if input contains TS)
        if (input.includes('ts')) {
            this.autocompleteSuggestions.sci.forEach(comp => {
                if (comp.toLowerCase().includes(input.replace('ts', '').trim())) {
                    results.push({
                        value: `(TS//${comp})`,
                        description: `TOP SECRET with ${comp} compartment`
                    });
                }
            });
        }

        // Match dissemination controls
        this.autocompleteSuggestions.dissemination.forEach(ctrl => {
            if (ctrl.toLowerCase().includes(input)) {
                results.push({
                    value: `(S//${ctrl})`,
                    description: `SECRET with ${ctrl} control`
                });
            }
        });

        // Limit to top 5 results
        this.autocompleteResults = results.slice(0, 5);
        this.selectedAutocompleteIndex = -1;
    }

    /**
     * Validate current input
     */
    validateCurrentInput() {
        if (!this.manualInputValue || this.manualInputValue.trim() === '') {
            return { valid: false, error: 'Portion marking cannot be empty' };
        }

        const parsed = this.classificationManager.parsePortionMarking(this.manualInputValue);
        if (!parsed) {
            return { valid: false, error: 'Invalid portion marking format' };
        }

        // Check for validation errors from ClassificationManager
        if (parsed.validationErrors && parsed.validationErrors.length > 0) {
            return { valid: false, error: parsed.validationErrors[0].details || parsed.validationErrors[0].message };
        }

        return { valid: true };
    }

    /**
     * Update autocomplete display without re-rendering entire popover
     */
    updateAutocompleteDisplay() {
        if (!this.popoverElement) return;

        const autocompleteContainer = this.popoverElement.querySelector('.manual-entry-section');
        if (!autocompleteContainer) return;

        // Find or create autocomplete dropdown
        let autocompleteDropdown = autocompleteContainer.querySelector('.autocomplete-dropdown');

        if (this.autocompleteResults.length > 0) {
            const autocompleteHTML = this.renderAutocomplete();

            if (autocompleteDropdown) {
                // Update existing dropdown
                autocompleteDropdown.outerHTML = autocompleteHTML;
            } else {
                // Insert new dropdown after manual input
                const manualInput = autocompleteContainer.querySelector(`#${this.uniqueId}`);
                if (manualInput) {
                    manualInput.insertAdjacentHTML('afterend', autocompleteHTML);
                }
            }

            // Re-attach autocomplete event listeners
            autocompleteDropdown = autocompleteContainer.querySelector('.autocomplete-dropdown');
            if (autocompleteDropdown) {
                const autocompleteItems = autocompleteDropdown.querySelectorAll('.autocomplete-item');
                autocompleteItems.forEach(item => {
                    item.addEventListener('click', this.handleAutocompleteClick.bind(this));
                });
            }
        } else if (autocompleteDropdown) {
            // Remove dropdown if no results
            autocompleteDropdown.remove();
        }
    }

    /**
     * Update validation display without re-rendering entire popover
     */
    updateValidationDisplay() {
        if (!this.popoverElement) return;

        const manualInput = this.popoverElement.querySelector(`#${this.uniqueId}`);
        const manualEntrySection = this.popoverElement.querySelector('.manual-entry-section');
        const applyBtn = this.popoverElement.querySelector('.btn-apply');

        if (!manualInput || !manualEntrySection) return;

        const validationResult = this.validateCurrentInput();

        // Update input field styling
        if (validationResult.valid) {
            manualInput.classList.remove('invalid');
        } else {
            manualInput.classList.add('invalid');
        }

        // Update or create validation error message
        let validationError = manualEntrySection.querySelector('.validation-error');

        if (!validationResult.valid) {
            const errorHTML = `
                <div id="${this.validationId}" class="validation-error" role="alert">
                    ⚠️ ${validationResult.error}
                </div>
            `;

            if (validationError) {
                validationError.outerHTML = errorHTML;
            } else {
                // Insert after autocomplete or manual input
                const autocompleteDropdown = manualEntrySection.querySelector('.autocomplete-dropdown');
                if (autocompleteDropdown) {
                    autocompleteDropdown.insertAdjacentHTML('afterend', errorHTML);
                } else {
                    manualInput.insertAdjacentHTML('afterend', errorHTML);
                }
            }
        } else if (validationError) {
            validationError.remove();
        }

        // Update Apply button state
        if (applyBtn) {
            applyBtn.disabled = !validationResult.valid;
        }
    }

    /**
     * Rebuild portion marking from custom builder selections
     */
    rebuildFromCustomBuilder() {
        if (!this.popoverElement) return;

        const levelSelect = this.popoverElement.querySelector('.builder-select[data-field="level"]');
        const sciCheckboxes = this.popoverElement.querySelectorAll('.builder-checkbox input[data-field="sci"]:checked');
        const dissemCheckboxes = this.popoverElement.querySelectorAll('.builder-checkbox input[data-field="dissem"]:checked');
        const releaseCheckboxes = this.popoverElement.querySelectorAll('.builder-checkbox input[data-field="release"]:checked');
        const handlingCheckboxes = this.popoverElement.querySelectorAll('.builder-checkbox input[data-field="handling"]:checked');

        if (!levelSelect) return;

        const level = levelSelect.value;
        const levelAbbrev = this.getLevelAbbreviation(level);

        let marking = `(${levelAbbrev}`;

        // Add SCI compartments
        // Note: SCI compartments are joined with '/' here for initial marking construction
        // The ClassificationManager will handle SI-G coupling when parsing and regenerating
        // the marking (displaying "SI-G" instead of "SI/G" when both are present)
        const sciComps = Array.from(sciCheckboxes).map(cb => cb.value);
        if (sciComps.length > 0) {
            marking += `//${sciComps.join('/')}`;
        }

        // Add SAP programs (AFTER SCI, BEFORE dissemination controls)
        // Per DoDM 5200.01 Volume 2: CLASSIFICATION//SCI//SAP//DISSEM//RELEASE
        // Format: SAR-[program-id] where [program-id] is the program identifier
        // Multiple SAPs are alphabetically ordered and separated by /
        // NOTE: Real SAP program names are CLASSIFIED. Use fictional placeholders only.
        if (this.selectedSAPPrograms.length > 0) {
            const sapTokens = this.selectedSAPPrograms.map(id => `SAR-${id}`);
            marking += `//${sapTokens.join('/')}`;
        }

        // Add dissemination controls
        const dissemCtrls = Array.from(dissemCheckboxes).map(cb => cb.value);
        if (dissemCtrls.length > 0) {
            marking += `//${dissemCtrls.join('/')}`;
        }

        // Add release controls
        const releaseCtrls = Array.from(releaseCheckboxes).map(cb => cb.value);

        // Handle RELTO with countries
        if (releaseCtrls.includes('RELTO') && this.selectedCountries.length > 0) {
            // Remove RELTO from the array and add it with countries
            const otherReleaseCtrls = releaseCtrls.filter(ctrl => ctrl !== 'RELTO');

            // Add other release controls first
            if (otherReleaseCtrls.length > 0) {
                marking += `//${otherReleaseCtrls.join('/')}`;
            }

            // Add REL TO with countries
            marking += `//REL TO ${this.selectedCountries.join(', ')}`;
        } else if (releaseCtrls.length > 0) {
            // No countries selected, just add release controls
            marking += `//${releaseCtrls.join('/')}`;
        }

        // Add handling caveats
        const handlingCavs = Array.from(handlingCheckboxes).map(cb => cb.value);
        if (handlingCavs.length > 0) {
            marking += `//${handlingCavs.join('/')}`;
        }

        marking += ')';

        // CRITICAL FIX (2025-10-14): Parse and regenerate the marking through ClassificationManager
        // to apply SI-G coupling logic. This ensures that when both SI and G are selected,
        // the marking displays as "(TS//SI-G)" instead of "(TS//SI/G)".
        //
        // The ClassificationManager.parsePortionMarking() method parses the marking into components,
        // and then we use those components to set the classification state and regenerate the marking
        // with proper SI-G coupling applied.
        const parsed = this.classificationManager.parsePortionMarking(marking);

        if (parsed) {
            // Temporarily save current classification state
            const savedState = {
                level: this.classificationManager.currentClassification.level,
                sciCompartments: [...this.classificationManager.currentClassification.sciCompartments],
                sapPrograms: [...this.classificationManager.currentClassification.sapPrograms],
                disseminationControls: [...this.classificationManager.currentClassification.disseminationControls],
                releaseControls: [...this.classificationManager.currentClassification.releaseControls],
                handlingCaveats: [...this.classificationManager.currentClassification.handlingCaveats],
                releaseAuthority: this.classificationManager.currentClassification.releaseAuthority
            };

            // Set classification state from parsed marking
            this.classificationManager.setClassificationLevel(parsed.level);
            this.classificationManager.currentClassification.sciCompartments = parsed.sciCompartments || [];
            this.classificationManager.currentClassification.sapPrograms = parsed.sapPrograms || [];
            this.classificationManager.currentClassification.disseminationControls = parsed.disseminationControls || [];
            this.classificationManager.currentClassification.releaseControls = parsed.releaseControls || [];
            this.classificationManager.currentClassification.handlingCaveats = parsed.handlingCaveats || [];
            this.classificationManager.currentClassification.releaseAuthority = parsed.releaseAuthority || '';

            // Generate the properly formatted portion marking with SI-G coupling and SAP programs
            const regeneratedMarking = this.classificationManager.generatePortionMarking();

            // Restore original classification state (don't modify the overall classification)
            this.classificationManager.currentClassification.level = savedState.level;
            this.classificationManager.currentClassification.sciCompartments = savedState.sciCompartments;
            this.classificationManager.currentClassification.sapPrograms = savedState.sapPrograms;
            this.classificationManager.currentClassification.disseminationControls = savedState.disseminationControls;
            this.classificationManager.currentClassification.releaseControls = savedState.releaseControls;
            this.classificationManager.currentClassification.handlingCaveats = savedState.handlingCaveats;
            this.classificationManager.currentClassification.releaseAuthority = savedState.releaseAuthority;

            // Use the regenerated marking with SI-G coupling and SAP programs applied
            this.manualInputValue = regeneratedMarking;

            console.log(`🔧 Regenerated portion marking with SI-G coupling and SAP: ${marking} → ${regeneratedMarking}`);
        } else {
            // Parsing failed - use the original marking
            this.manualInputValue = marking;
        }
    }

    /**
     * Get level abbreviation
     */
    getLevelAbbreviation(level) {
        const abbrevMap = {
            'UNCLASSIFIED': 'U',
            'CUI': 'CUI',
            'CONFIDENTIAL': 'C',
            'SECRET': 'S',
            'TOP SECRET': 'TS'
        };
        return abbrevMap[level] || 'U';
    }

    /**
     * Destroy the popover and clean up
     */
    destroy() {
        this.close();

        if (this.button) {
            this.button.removeEventListener('click', this.handleButtonClick);
        }

        if (this.popoverElement && this.popoverElement.parentElement) {
            this.popoverElement.parentElement.removeChild(this.popoverElement);
        }

        this.popoverElement = null;
    }
}

