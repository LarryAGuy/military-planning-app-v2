/**
 * Base Annex Component
 * Reusable base class for all OPORD annex components (Annex A through T)
 * Provides common functionality for form rendering, validation, data management, and annex-specific features
 *
 * DESIGN PATTERN: Extends the proven BaseSectionComponent pattern with annex-specific enhancements
 * ECHELON-AGNOSTIC: Supports all 11 standardized echelons (Platoon through Theater)
 * FM 5-0 COMPLIANT: Implements all 20 annexes per FM 5-0 November 2024
 *
 * KEY DIFFERENCES FROM SECTIONS:
 * - Annexes are OPTIONAL (not all annexes are used in every OPORD)
 * - Annexes support activation/deactivation mechanism
 * - Annexes track completion status (NOT_STARTED, IN_PROGRESS, COMPLETED, VALIDATED)
 * - Annexes support appendices (sub-annexes like Annex A, Appendix 1)
 * - Annexes have annex-specific templates
 *
 * @module BaseAnnexComponent
 */

import { FormBuilder } from '../../ui/FormBuilder.js';

export class BaseAnnexComponent {
    constructor(annexLetter, annexTitle, eventBus) {
        this.annexLetter = annexLetter;
        this.annexTitle = annexTitle;
        this.eventBus = eventBus;
        this.container = null;
        this.data = {};
        this.validationRules = {};
        this.initialized = false;
        this.echelon = 'company'; // Default echelon
        
        // Annex-specific properties
        this.isActive = false; // Annexes start inactive
        this.status = 'NOT_STARTED'; // NOT_STARTED, IN_PROGRESS, COMPLETED, VALIDATED
        this.appendices = []; // Sub-annexes (e.g., Appendix 1, Appendix 2)
        this.lastModified = null;
        this.required = false; // Some annexes are required (A, B, C, D, F)
        
        // Initialize FormBuilder for dynamic form generation
        this.formBuilder = new FormBuilder(eventBus);
        this.formBuilder.initialize();
    }

    /**
     * Initialize annex component
     */
    async initialize(container) {
        if (this.initialized) {
            console.log(`⚠️ ${this.getFullTitle()} already initialized`);
            return;
        }

        this.container = typeof container === 'string' ? 
            document.querySelector(container) : container;

        if (!this.container) {
            throw new Error(`Container not found for ${this.getFullTitle()}`);
        }

        // Setup event listeners
        this.setupEventListeners();

        // Render initial UI
        this.render();

        this.initialized = true;
        console.log(`✅ ${this.getFullTitle()} initialized`);

        // Emit initialization event
        this.eventBus.emit(`annex:initialized`, {
            annexLetter: this.annexLetter,
            annexTitle: this.annexTitle,
            timestamp: new Date().toISOString()
        });
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Listen for data updates
        this.eventBus.on(`annex:${this.annexLetter}:update`, (data) => {
            this.updateData(data);
        });

        // Listen for validation requests
        this.eventBus.on(`annex:${this.annexLetter}:validate`, () => {
            this.validate();
        });

        // Listen for echelon changes
        this.eventBus.on('draft:echelon-changed', (data) => {
            this.setEchelon(data.echelon);
        });

        // Listen for activation/deactivation
        this.eventBus.on(`annex:${this.annexLetter}:activate`, () => {
            this.activate();
        });

        this.eventBus.on(`annex:${this.annexLetter}:deactivate`, () => {
            this.deactivate();
        });
    }

    /**
     * Render annex UI
     */
    render() {
        if (!this.container) return;

        const statusBadge = this.renderStatusBadge();
        const activeBadge = this.isActive ? 
            '<span style="background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">ACTIVE</span>' :
            '<span style="background: #6b7280; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">INACTIVE</span>';

        const html = `
            <div class="annex-component" data-annex="${this.annexLetter}">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0;">
                        ${this.getFullTitle()}
                    </h3>
                    <div style="display: flex; gap: 8px;">
                        ${activeBadge}
                        ${statusBadge}
                    </div>
                </div>
                
                ${this.isActive ? `
                    <div class="annex-fields">
                        ${this.renderFields()}
                    </div>
                ` : `
                    <div style="background: rgba(107, 114, 128, 0.1); border: 1px solid #374151; border-radius: 6px; padding: 24px; text-align: center;">
                        <p style="color: #9ca3af; margin: 0 0 16px 0;">This annex is currently inactive.</p>
                        <button id="activate-annex-${this.annexLetter}" 
                            style="background: #3b82f6; color: white; border: none; border-radius: 6px; padding: 10px 20px; cursor: pointer; font-size: 14px; font-weight: 600;">
                            Activate ${this.annexTitle}
                        </button>
                    </div>
                `}
            </div>
        `;

        this.container.innerHTML = html;

        // Attach event handlers after rendering
        this.attachEventHandlers();
    }

    /**
     * Render status badge
     */
    renderStatusBadge() {
        const statusColors = {
            'NOT_STARTED': { bg: '#6b7280', text: 'Not Started' },
            'IN_PROGRESS': { bg: '#f59e0b', text: 'In Progress' },
            'COMPLETED': { bg: '#10b981', text: 'Completed' },
            'VALIDATED': { bg: '#3b82f6', text: 'Validated' }
        };

        const status = statusColors[this.status] || statusColors['NOT_STARTED'];
        return `<span style="background: ${status.bg}; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">${status.text}</span>`;
    }

    /**
     * Render form fields (to be overridden by subclasses)
     */
    renderFields() {
        return '<p style="color: #9ca3af;">No fields defined for this annex</p>';
    }

    /**
     * Attach event handlers
     */
    attachEventHandlers() {
        // Attach activation button handler
        const activateBtn = this.container.querySelector(`#activate-annex-${this.annexLetter}`);
        if (activateBtn) {
            activateBtn.addEventListener('click', () => this.activate());
        }

        // Attach blur handlers for auto-save (only if active)
        if (this.isActive) {
            this.container.querySelectorAll('input, textarea, select').forEach(field => {
                field.addEventListener('blur', () => this.handleFieldChange(field));
                field.addEventListener('input', () => this.handleFieldInput(field));
            });
        }
    }

    /**
     * Handle field change (blur event)
     */
    handleFieldChange(field) {
        const fieldName = field.name || field.id;
        const fieldValue = field.value;

        // Update data
        this.data[fieldName] = fieldValue;
        this.lastModified = new Date().toISOString();

        // Update status to IN_PROGRESS if not already completed
        if (this.status === 'NOT_STARTED') {
            this.setStatus('IN_PROGRESS');
        }

        // Emit change event
        this.eventBus.emit(`annex:${this.annexLetter}:changed`, {
            field: fieldName,
            value: fieldValue,
            data: this.getData()
        });

        // Trigger validation
        this.validateField(fieldName);
    }

    /**
     * Handle field input (real-time updates)
     */
    handleFieldInput(field) {
        const fieldName = field.name || field.id;
        const fieldValue = field.value;

        // Update data
        this.data[fieldName] = fieldValue;

        // Emit input event for live preview
        this.eventBus.emit(`annex:${this.annexLetter}:input`, {
            field: fieldName,
            value: fieldValue,
            data: this.getData()
        });
    }

    /**
     * Validate annex data
     */
    validate() {
        const errors = [];
        const warnings = [];

        // Validate each field according to rules
        for (const [fieldName, rules] of Object.entries(this.validationRules)) {
            const fieldValue = this.data[fieldName];
            const fieldErrors = this.validateField(fieldName, fieldValue, rules);
            
            if (fieldErrors.errors.length > 0) {
                errors.push(...fieldErrors.errors);
            }
            if (fieldErrors.warnings.length > 0) {
                warnings.push(...fieldErrors.warnings);
            }
        }

        const result = {
            valid: errors.length === 0,
            errors: errors,
            warnings: warnings,
            annexLetter: this.annexLetter,
            annexTitle: this.annexTitle
        };

        // Emit validation result
        this.eventBus.emit(`annex:${this.annexLetter}:validated`, result);

        return result;
    }

    /**
     * Validate individual field
     * Override this method in subclasses to use FormBuilder validation
     */
    validateField(fieldName, fieldValue = null, rules = null) {
        const errors = [];
        const warnings = [];

        const value = fieldValue !== null ? fieldValue : this.data[fieldName];
        const fieldRules = rules || this.validationRules[fieldName];

        if (!fieldRules) {
            return { errors, warnings };
        }

        // Required field validation
        if (fieldRules.required && (!value || value.trim() === '')) {
            errors.push(`${fieldRules.label || fieldName} is required`);
        }

        // Pattern validation
        if (fieldRules.pattern && value && !fieldRules.pattern.test(value)) {
            warnings.push(`${fieldRules.label || fieldName} format may be incorrect`);
        }

        // Custom validation function
        if (fieldRules.validate && typeof fieldRules.validate === 'function') {
            const customResult = fieldRules.validate(value, this.data);
            if (customResult.error) errors.push(customResult.error);
            if (customResult.warning) warnings.push(customResult.warning);
        }

        return { errors, warnings };
    }

    /**
     * Get annex data
     */
    getData() {
        return {
            ...this.data,
            annexLetter: this.annexLetter,
            annexTitle: this.annexTitle,
            isActive: this.isActive,
            status: this.status,
            lastModified: this.lastModified,
            echelon: this.echelon
        };
    }

    /**
     * Set annex data
     */
    setData(data) {
        this.data = { ...data };
        if (data.isActive !== undefined) this.isActive = data.isActive;
        if (data.status) this.status = data.status;
        if (data.lastModified) this.lastModified = data.lastModified;
        if (data.echelon) this.echelon = data.echelon;
        this.render();
    }

    /**
     * Update annex data
     */
    updateData(updates) {
        this.data = { ...this.data, ...updates };
        this.lastModified = new Date().toISOString();
        this.render();
    }

    /**
     * Clear annex data
     */
    clearData() {
        this.data = {};
        this.status = 'NOT_STARTED';
        this.lastModified = null;
        this.render();
    }

    /**
     * Set echelon level
     */
    setEchelon(echelon) {
        this.echelon = echelon;
        console.log(`📊 ${this.getFullTitle()} echelon set to: ${echelon}`);

        // Re-render to show/hide echelon-specific fields
        if (this.isActive) {
            this.render();
        }
    }

    /**
     * Get echelon level
     */
    getEchelon() {
        return this.echelon;
    }

    /**
     * Activate annex
     */
    activate() {
        if (this.isActive) {
            console.log(`⚠️ ${this.getFullTitle()} is already active`);
            return;
        }

        this.isActive = true;
        this.status = 'IN_PROGRESS';
        console.log(`✅ ${this.getFullTitle()} activated`);

        // Emit activation event
        this.eventBus.emit(`annex:${this.annexLetter}:activated`, {
            annexLetter: this.annexLetter,
            annexTitle: this.annexTitle,
            timestamp: new Date().toISOString()
        });

        // Re-render to show fields
        this.render();
    }

    /**
     * Deactivate annex
     */
    deactivate() {
        if (!this.isActive) {
            console.log(`⚠️ ${this.getFullTitle()} is already inactive`);
            return;
        }

        this.isActive = false;
        console.log(`🔒 ${this.getFullTitle()} deactivated`);

        // Emit deactivation event
        this.eventBus.emit(`annex:${this.annexLetter}:deactivated`, {
            annexLetter: this.annexLetter,
            annexTitle: this.annexTitle,
            timestamp: new Date().toISOString()
        });

        // Re-render to hide fields
        this.render();
    }

    /**
     * Set annex status
     */
    setStatus(status) {
        const validStatuses = ['NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'VALIDATED'];
        if (!validStatuses.includes(status)) {
            console.error(`Invalid status: ${status}`);
            return;
        }

        this.status = status;
        this.lastModified = new Date().toISOString();

        // Emit status change event
        this.eventBus.emit(`annex:${this.annexLetter}:status-changed`, {
            annexLetter: this.annexLetter,
            status: this.status,
            timestamp: this.lastModified
        });

        // Re-render to update status badge
        this.render();
    }

    /**
     * Get annex status
     */
    getStatus() {
        return this.status;
    }

    /**
     * Check if annex is active
     */
    isAnnexActive() {
        return this.isActive;
    }

    /**
     * Set annex as required
     */
    setRequired(required) {
        this.required = required;
    }

    /**
     * Check if annex is required
     */
    isRequired() {
        return this.required;
    }

    /**
     * Get full annex title (e.g., "Annex A (Task Organization)")
     */
    getFullTitle() {
        return `Annex ${this.annexLetter} (${this.annexTitle})`;
    }

    /**
     * Add appendix to annex
     */
    addAppendix(appendixNumber, appendixTitle, appendixData = {}) {
        this.appendices.push({
            number: appendixNumber,
            title: appendixTitle,
            data: appendixData,
            lastModified: new Date().toISOString()
        });

        this.eventBus.emit(`annex:${this.annexLetter}:appendix-added`, {
            annexLetter: this.annexLetter,
            appendixNumber,
            appendixTitle
        });
    }

    /**
     * Get all appendices
     */
    getAppendices() {
        return [...this.appendices];
    }

    /**
     * Destroy component
     */
    destroy() {
        // Remove event listeners
        this.eventBus.off(`annex:${this.annexLetter}:update`);
        this.eventBus.off(`annex:${this.annexLetter}:validate`);
        this.eventBus.off(`annex:${this.annexLetter}:activate`);
        this.eventBus.off(`annex:${this.annexLetter}:deactivate`);
        this.eventBus.off('draft:echelon-changed');

        // Clear container
        if (this.container) {
            this.container.innerHTML = '';
        }

        this.initialized = false;
        console.log(`🗑️ ${this.getFullTitle()} destroyed`);
    }
}

export default BaseAnnexComponent;

