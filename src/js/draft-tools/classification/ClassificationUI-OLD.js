/**
 * Classification UI Component
 * UI components for classification selection, caveat management, and portion marking
 * Provides reusable UI elements for classification controls
 * 
 * @module ClassificationUI
 */

export class ClassificationUI {
    /**
     * Create a new ClassificationUI
     * @param {Object} eventBus - Event bus for inter-component communication
     * @param {ClassificationManager} classificationManager - Classification manager instance
     */
    constructor(eventBus, classificationManager) {
        this.eventBus = eventBus;
        this.classificationManager = classificationManager;
        this.container = null;
        this.initialized = false;
    }
    
    /**
     * Initialize the classification UI
     * @param {HTMLElement} container - Container element
     */
    async initialize(container) {
        if (this.initialized) {
            console.warn('⚠️ ClassificationUI already initialized');
            return;
        }

        console.log('🔐 Initializing ClassificationUI...');

        this.container = container;

        // Get current classification state
        const currentClassification = this.classificationManager.getClassification();
        console.log('📋 Current classification:', currentClassification);

        // Get authorized levels
        const authorizedLevels = this.classificationManager.getAuthorizedClassificationLevels();
        console.log('✅ Authorized classification levels:', authorizedLevels.length);

        this.render();
        this.attachEventListeners();
        this.initialized = true;

        // Listen for classification changes
        this.eventBus.on('classification:changed', (data) => {
            console.log('🔄 Classification changed:', data.bannerText);
            this.updateClassificationDisplay();
        });

        console.log('✅ ClassificationUI initialized successfully');
    }
    
    /**
     * Destroy the classification UI
     */
    destroy() {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.initialized = false;
    }
    
    /**
     * Render the classification UI
     */
    render() {
        if (!this.container) {
            console.warn('⚠️ ClassificationUI: No container found for rendering');
            return;
        }

        console.log('🎨 Rendering ClassificationUI...');

        const html = `
            <div class="classification-ui">
                ${this.renderClassificationSelector()}
                ${this.renderCaveatSelector()}
                ${this.renderReleaseAuthoritySelector()}
            </div>
        `;

        this.container.innerHTML = html;
        console.log('✅ ClassificationUI rendered');
    }
    
    /**
     * Render classification level selector (compact style)
     * @returns {string} HTML for classification selector
     */
    renderClassificationSelector() {
        const currentClassification = this.classificationManager.getClassification();
        const authorizedLevels = this.classificationManager.getAuthorizedClassificationLevels();

        console.log(`📊 Rendering classification selector with ${authorizedLevels.length} levels`);
        console.log('   Current level:', currentClassification.level);
        console.log('   Available levels:', authorizedLevels.map(l => l.level).join(', '));

        const options = authorizedLevels.map(level => {
            const selected = level.level === currentClassification.level ? 'selected' : '';
            return `<option value="${level.level}" ${selected}>${level.level}</option>`;
        }).join('');

        return `
            <div class="classification-selector-container" style="margin-bottom: 8px;">
                <label for="classification-level-select" style="color: #9ca3af; font-size: 11px; display: block; margin-bottom: 3px;">
                    Classification
                </label>
                <select id="classification-level-select"
                    class="classification-selector"
                    style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 4px; padding: 6px 10px; color: #f8fafc; font-size: 13px;">
                    ${options}
                </select>
            </div>
        `;
    }
    
    /**
     * Render caveat selector (compact style)
     * @returns {string} HTML for caveat selector
     */
    renderCaveatSelector() {
        const currentClassification = this.classificationManager.getClassification();
        const applicableCaveats = this.classificationManager.getApplicableCaveats(currentClassification.level);

        console.log(`🏷️  Rendering caveat selector: ${applicableCaveats.length} caveats for ${currentClassification.level}`);

        if (applicableCaveats.length === 0) {
            console.log('   No applicable caveats for this level');
            return '';
        }

        console.log('   Available caveats:', applicableCaveats.map(c => c.abbreviation).join(', '));
        console.log('   Selected caveats:', currentClassification.caveats.join(', '));

        const checkboxes = applicableCaveats.map(caveat => {
            const checked = currentClassification.caveats.includes(caveat.abbreviation) ? 'checked' : '';
            return `
                <label style="display: flex; align-items: center; margin-bottom: 6px; cursor: pointer;">
                    <input type="checkbox"
                        class="caveat-checkbox"
                        data-caveat="${caveat.abbreviation}"
                        ${checked}
                        style="margin-right: 6px; cursor: pointer;">
                    <span style="color: #f8fafc; font-size: 11px;">
                        ${caveat.abbreviation} - ${caveat.name}
                    </span>
                </label>
            `;
        }).join('');

        return `
            <div class="caveat-selector-container" style="margin-bottom: 8px;">
                <label style="color: #9ca3af; font-size: 11px; display: block; margin-bottom: 4px;">
                    Caveats (Optional)
                </label>
                <div class="caveat-checkboxes" style="padding: 6px; background: #0f172a; border: 1px solid #374151; border-radius: 4px; max-height: 120px; overflow-y: auto;">
                    ${checkboxes}
                </div>
            </div>
        `;
    }
    
    /**
     * Render release authority selector
     * @returns {string} HTML for release authority selector
     */
    renderReleaseAuthoritySelector() {
        const currentClassification = this.classificationManager.getClassification();
        const releaseAuthorities = this.classificationManager.getReleaseAuthorities();

        console.log(`🌐 Rendering release authority selector for ${currentClassification.level}`);

        // Only show for classified documents (not UNCLASSIFIED)
        if (currentClassification.level === 'UNCLASSIFIED') {
            console.log('   Skipping release authority (UNCLASSIFIED)');
            return '';
        }

        console.log(`   Available release authorities: ${releaseAuthorities.length}`);
        console.log('   Current release authority:', currentClassification.releaseAuthority || 'None');

        const options = releaseAuthorities.map(auth => {
            const selected = auth === currentClassification.releaseAuthority ? 'selected' : '';
            return `<option value="${auth}" ${selected}>${auth}</option>`;
        }).join('');

        return `
            <div class="release-authority-selector-container" style="margin-bottom: 8px;">
                <label for="release-authority-select" style="color: #9ca3af; font-size: 11px; display: block; margin-bottom: 3px;">
                    Release Authority (Optional)
                </label>
                <select id="release-authority-select"
                    class="release-authority-selector"
                    style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 4px; padding: 6px 10px; color: #f8fafc; font-size: 13px;">
                    <option value="">-- None --</option>
                    ${options}
                </select>
            </div>
        `;
    }

    /**
     * Render portion marking buttons
     * @param {string} targetFieldId - ID of the field to insert portion marking into
     * @returns {string} HTML for portion marking buttons
     */
    renderPortionMarkingButtons(targetFieldId) {
        const authorizedMarkings = this.classificationManager.getAuthorizedPortionMarkings();

        const buttons = authorizedMarkings.map(marking => {
            return `
                <button type="button"
                    class="portion-marking-btn"
                    data-marking="${marking.marking}"
                    data-target="${targetFieldId}"
                    style="background: ${marking.backgroundColor}; color: ${marking.textColor};
                           border: none; border-radius: 4px; padding: 6px 12px; margin-right: 8px;
                           font-size: 12px; font-weight: 600; cursor: pointer; transition: opacity 0.2s;"
                    onmouseover="this.style.opacity='0.8'"
                    onmouseout="this.style.opacity='1'">
                    ${marking.marking}
                </button>
            `;
        }).join('');

        return `
            <div class="portion-marking-buttons" style="margin-top: 8px; margin-bottom: 8px;">
                <label style="color: #9ca3af; font-size: 11px; display: block; margin-bottom: 4px;">
                    Insert Portion Marking:
                </label>
                <div style="display: flex; flex-wrap: wrap; gap: 4px;">
                    ${buttons}
                </div>
            </div>
        `;
    }
    
    /**
     * Render network authorization indicator
     * @returns {string} HTML for network authorization indicator
     */
    renderNetworkAuthorizationIndicator() {
        const networkAuth = this.classificationManager.networkAuthorization;
        
        return `
            <div class="network-auth-indicator" style="margin-top: 12px; padding: 8px; background: #1f2937; border: 1px solid #374151; border-radius: 6px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="color: #9ca3af; font-size: 12px;">
                        <i class="fas fa-network-wired" style="margin-right: 6px;"></i>
                        Network Authorization:
                    </span>
                    <span style="color: #10b981; font-size: 12px; font-weight: 600;">
                        ${networkAuth}
                    </span>
                </div>
                <div style="color: #6b7280; font-size: 11px; margin-top: 4px;">
                    Maximum authorized classification level for current network
                </div>
            </div>
        `;
    }
    
    /**
     * Render classification banner (for preview/display)
     * @param {string} position - Banner position ('top' or 'bottom')
     * @returns {string} HTML for classification banner
     */
    renderClassificationBanner(position = 'top') {
        return this.classificationManager.generateBannerHTML(position);
    }
    
    /**
     * Attach event listeners
     */
    attachEventListeners() {
        // Classification level change
        const levelSelect = document.getElementById('classification-level-select');
        if (levelSelect) {
            levelSelect.addEventListener('change', (e) => this.handleClassificationChange(e));
        }

        // Caveat checkboxes
        const caveatCheckboxes = document.querySelectorAll('.caveat-checkbox');
        caveatCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => this.handleCaveatChange(e));
        });

        // Release authority selector
        const releaseAuthoritySelect = document.getElementById('release-authority-select');
        if (releaseAuthoritySelect) {
            releaseAuthoritySelect.addEventListener('change', (e) => this.handleReleaseAuthorityChange(e));
        }

        // Portion marking buttons (delegated event handling)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('portion-marking-btn')) {
                this.handlePortionMarkingClick(e);
            }
        });
    }
    
    /**
     * Handle classification level change
     * @param {Event} event - Change event
     */
    handleClassificationChange(event) {
        const level = event.target.value;
        const currentClassification = this.classificationManager.getClassification();

        // Set classification with existing caveats and release authority (will be validated)
        const success = this.classificationManager.setClassification(
            level,
            currentClassification.caveats,
            currentClassification.releaseAuthority
        );

        if (success) {
            // Re-render to update caveat options and release authority
            this.render();
            this.attachEventListeners();
        }
    }

    /**
     * Handle caveat checkbox change
     * @param {Event} event - Change event
     */
    handleCaveatChange(event) {
        const caveat = event.target.dataset.caveat;
        const currentClassification = this.classificationManager.getClassification();

        let caveats = [...currentClassification.caveats];

        if (event.target.checked) {
            if (!caveats.includes(caveat)) {
                caveats.push(caveat);
            }
        } else {
            caveats = caveats.filter(c => c !== caveat);
        }

        this.classificationManager.setClassification(
            currentClassification.level,
            caveats,
            currentClassification.releaseAuthority
        );
    }

    /**
     * Handle release authority change
     * @param {Event} event - Change event
     */
    handleReleaseAuthorityChange(event) {
        const releaseAuthority = event.target.value;
        const currentClassification = this.classificationManager.getClassification();

        this.classificationManager.setClassification(
            currentClassification.level,
            currentClassification.caveats,
            releaseAuthority
        );
    }
    
    /**
     * Handle portion marking button click
     * @param {Event} event - Click event
     */
    handlePortionMarkingClick(event) {
        const marking = event.target.dataset.marking;
        const targetId = event.target.dataset.target;
        
        if (!targetId) {
            console.warn('No target field specified for portion marking');
            return;
        }
        
        const targetField = document.getElementById(targetId);
        if (!targetField) {
            console.warn(`Target field not found: ${targetId}`);
            return;
        }
        
        // Insert portion marking at cursor position
        this.insertPortionMarking(targetField, marking);
        
        // Emit event for tracking
        this.eventBus.emit('portion-marking:inserted', {
            marking: marking,
            targetId: targetId
        });
    }
    
    /**
     * Insert portion marking into text field
     * @param {HTMLElement} field - Target field
     * @param {string} marking - Portion marking to insert
     */
    insertPortionMarking(field, marking) {
        const start = field.selectionStart;
        const end = field.selectionEnd;
        const text = field.value;
        
        // Insert marking at cursor position
        const before = text.substring(0, start);
        const after = text.substring(end);
        field.value = before + marking + ' ' + after;
        
        // Set cursor position after inserted marking
        const newPosition = start + marking.length + 1;
        field.setSelectionRange(newPosition, newPosition);
        field.focus();
        
        // Trigger input event for form validation
        field.dispatchEvent(new Event('input', { bubbles: true }));
    }
    
    /**
     * Update classification display
     */
    updateClassificationDisplay() {
        if (!this.initialized) return;
        
        // Re-render to reflect changes
        this.render();
        this.attachEventListeners();
    }
    
    /**
     * Get current classification
     * @returns {Object} Current classification state
     */
    getClassification() {
        return this.classificationManager.getClassification();
    }
}

export default ClassificationUI;

