/**
 * Form Builder Component
 * Dynamic form generation with integrated validation
 * Provides inline and summary validation display
 * 
 * DESIGN PATTERN: Reusable for Draft OPORD, Draft MDMP, and Draft JPP tools
 * VALIDATION: Real-time validation with visual feedback
 * 
 * @module FormBuilder
 */

export class FormBuilder {
    constructor(eventBus, validator = null) {
        this.eventBus = eventBus;
        this.validator = validator;
        this.fieldErrors = new Map(); // Track field-level errors
        this.formErrors = []; // Track form-level errors
        this.initialized = false;
    }

    /**
     * Initialize form builder
     */
    initialize() {
        if (this.initialized) return;
        
        console.log('✅ FormBuilder initialized');
        this.initialized = true;
    }

    /**
     * Build complete form from configuration
     * @param {Object} config - Form configuration
     * @returns {string} HTML string for form
     */
    buildForm(config) {
        const {
            id = 'form',
            fields = [],
            showValidationSummary = true
        } = config;

        const fieldsHtml = fields.map(field => this.buildField(field)).join('');
        const summaryHtml = showValidationSummary ? this.buildValidationSummary(id) : '';

        return `
            <form id="${id}" class="form-builder-form" novalidate>
                ${summaryHtml}
                ${fieldsHtml}
            </form>
        `;
    }

    /**
     * Build field group (multiple fields together)
     * @param {Array} fields - Array of field configurations
     * @returns {string} HTML string for field group
     */
    buildFieldGroup(fields) {
        return fields.map(field => this.buildField(field)).join('');
    }

    /**
     * Build single field from configuration
     * @param {Object} fieldConfig - Field configuration
     * @returns {string} HTML string for field
     */
    buildField(fieldConfig) {
        const { type = 'text' } = fieldConfig;

        switch (type) {
            case 'textarea':
                return this.buildTextAreaField(fieldConfig);
            case 'select':
                return this.buildSelectField(fieldConfig);
            case 'date':
                return this.buildDateField(fieldConfig);
            case 'checkbox':
                return this.buildCheckboxField(fieldConfig);
            case 'radio':
                return this.buildRadioField(fieldConfig);
            default:
                return this.buildTextField(fieldConfig);
        }
    }

    /**
     * Build text input field
     * @param {Object} config - Field configuration
     * @returns {string} HTML string for text field
     */
    buildTextField(config) {
        const {
            id,
            name,
            label,
            value = '',
            placeholder = '',
            required = false,
            helpText = '',
            tooltip = '',
            validation = {}
        } = config;

        const requiredAttr = required ? 'required aria-required="true"' : '';
        const requiredMark = required ? '<span style="color: #ef4444;" aria-label="required">*</span>' : '';
        const tooltipHtml = tooltip ? `<span class="tooltip-icon" title="${tooltip}" style="color: #9ca3af; margin-left: 4px; cursor: help;">ⓘ</span>` : '';

        return `
            <div class="form-field" data-field-id="${id}" style="margin-bottom: 20px;">
                <label for="${id}" style="color: #f8fafc; font-size: 14px; font-weight: 500; display: block; margin-bottom: 8px;">
                    ${label} ${requiredMark} ${tooltipHtml}
                </label>
                <input 
                    type="text" 
                    id="${id}" 
                    name="${name}" 
                    value="${value}"
                    placeholder="${placeholder}"
                    ${requiredAttr}
                    data-validation='${JSON.stringify(validation)}'
                    style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 12px; color: #f8fafc; font-size: 14px;"
                    aria-label="${label}"
                    aria-describedby="${id}-help ${id}-error">
                ${helpText ? `<div id="${id}-help" style="color: #9ca3af; font-size: 12px; margin-top: 4px;">${helpText}</div>` : ''}
                <div id="${id}-error" class="field-error" style="display: none; color: #ef4444; font-size: 12px; margin-top: 4px;" role="alert"></div>
            </div>
        `;
    }

    /**
     * Build textarea field
     * @param {Object} config - Field configuration
     * @returns {string} HTML string for textarea
     */
    buildTextAreaField(config) {
        const {
            id,
            name,
            label,
            value = '',
            placeholder = '',
            required = false,
            helpText = '',
            tooltip = '',
            rows = 3,
            validation = {}
        } = config;

        const requiredAttr = required ? 'required aria-required="true"' : '';
        const requiredMark = required ? '<span style="color: #ef4444;">*</span>' : '';
        const tooltipHtml = tooltip ? `<span class="tooltip-icon" title="${tooltip}" style="color: #9ca3af; margin-left: 4px; cursor: help;">ⓘ</span>` : '';

        return `
            <div class="form-field" data-field-id="${id}" style="margin-bottom: 20px;">
                <label for="${id}" style="color: #f8fafc; font-size: 14px; font-weight: 500; display: block; margin-bottom: 8px;">
                    ${label} ${requiredMark} ${tooltipHtml}
                </label>
                <textarea 
                    id="${id}" 
                    name="${name}" 
                    rows="${rows}"
                    placeholder="${placeholder}"
                    ${requiredAttr}
                    data-validation='${JSON.stringify(validation)}'
                    style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 12px; color: #f8fafc; font-size: 14px; font-family: monospace; line-height: 1.6; resize: vertical;"
                    aria-label="${label}"
                    aria-describedby="${id}-help ${id}-error">${value}</textarea>
                ${helpText ? `<div id="${id}-help" style="color: #9ca3af; font-size: 12px; margin-top: 4px;">${helpText}</div>` : ''}
                <div id="${id}-error" class="field-error" style="display: none; color: #ef4444; font-size: 12px; margin-top: 4px;" role="alert"></div>
            </div>
        `;
    }

    /**
     * Build select dropdown field
     * @param {Object} config - Field configuration
     * @returns {string} HTML string for select field
     */
    buildSelectField(config) {
        const {
            id,
            name,
            label,
            value = '',
            required = false,
            helpText = '',
            tooltip = '',
            options = [],
            validation = {}
        } = config;

        const requiredAttr = required ? 'required aria-required="true"' : '';
        const requiredMark = required ? '<span style="color: #ef4444;">*</span>' : '';
        const tooltipHtml = tooltip ? `<span class="tooltip-icon" title="${tooltip}" style="color: #9ca3af; margin-left: 4px; cursor: help;">ⓘ</span>` : '';

        const optionsHtml = options.map(opt => {
            const selected = value === opt.value ? 'selected' : '';
            return `<option value="${opt.value}" ${selected}>${opt.label}</option>`;
        }).join('');

        return `
            <div class="form-field" data-field-id="${id}" style="margin-bottom: 20px;">
                <label for="${id}" style="color: #f8fafc; font-size: 14px; font-weight: 500; display: block; margin-bottom: 8px;">
                    ${label} ${requiredMark} ${tooltipHtml}
                </label>
                <select 
                    id="${id}" 
                    name="${name}"
                    ${requiredAttr}
                    data-validation='${JSON.stringify(validation)}'
                    style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 12px; color: #f8fafc; font-size: 14px;"
                    aria-label="${label}"
                    aria-describedby="${id}-help ${id}-error">
                    ${optionsHtml}
                </select>
                ${helpText ? `<div id="${id}-help" style="color: #9ca3af; font-size: 12px; margin-top: 4px;">${helpText}</div>` : ''}
                <div id="${id}-error" class="field-error" style="display: none; color: #ef4444; font-size: 12px; margin-top: 4px;" role="alert"></div>
            </div>
        `;
    }

    /**
     * Build date input field
     * @param {Object} config - Field configuration
     * @returns {string} HTML string for date field
     */
    buildDateField(config) {
        const {
            id,
            name,
            label,
            value = '',
            placeholder = '',
            required = false,
            helpText = '',
            tooltip = '',
            validation = {}
        } = config;

        const requiredAttr = required ? 'required aria-required="true"' : '';
        const requiredMark = required ? '<span style="color: #ef4444;" aria-label="required">*</span>' : '';
        const tooltipHtml = tooltip ? `<span class="tooltip-icon" title="${tooltip}" style="color: #9ca3af; margin-left: 4px; cursor: help;">ⓘ</span>` : '';

        return `
            <div class="form-field" data-field-id="${id}" style="margin-bottom: 20px;">
                <label for="${id}" style="color: #f8fafc; font-size: 14px; font-weight: 500; display: block; margin-bottom: 8px;">
                    ${label} ${requiredMark} ${tooltipHtml}
                </label>
                <input
                    type="date"
                    id="${id}"
                    name="${name}"
                    value="${value}"
                    placeholder="${placeholder}"
                    ${requiredAttr}
                    data-validation='${JSON.stringify(validation)}'
                    style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 12px; color: #f8fafc; font-size: 14px;"
                    aria-label="${label}"
                    aria-describedby="${id}-help ${id}-error">
                ${helpText ? `<div id="${id}-help" style="color: #9ca3af; font-size: 12px; margin-top: 4px;">${helpText}</div>` : ''}
                <div id="${id}-error" class="field-error" style="display: none; color: #ef4444; font-size: 12px; margin-top: 4px;" role="alert"></div>
            </div>
        `;
    }

    /**
     * Build checkbox field
     * @param {Object} config - Field configuration
     * @returns {string} HTML string for checkbox
     */
    buildCheckboxField(config) {
        const {
            id,
            name,
            label,
            checked = false,
            helpText = ''
        } = config;

        const checkedAttr = checked ? 'checked' : '';

        return `
            <div class="form-field" data-field-id="${id}" style="margin-bottom: 16px;">
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                    <input 
                        type="checkbox" 
                        id="${id}" 
                        name="${name}"
                        ${checkedAttr}
                        style="width: 18px; height: 18px; cursor: pointer;"
                        aria-label="${label}">
                    <span style="color: #f8fafc; font-size: 14px;">${label}</span>
                </label>
                ${helpText ? `<div style="color: #9ca3af; font-size: 12px; margin-top: 4px; margin-left: 26px;">${helpText}</div>` : ''}
            </div>
        `;
    }

    /**
     * Build radio button field
     * @param {Object} config - Field configuration
     * @returns {string} HTML string for radio buttons
     */
    buildRadioField(config) {
        const {
            id,
            name,
            label,
            value = '',
            options = [],
            helpText = ''
        } = config;

        const optionsHtml = options.map((opt, index) => {
            const checked = value === opt.value ? 'checked' : '';
            const optionId = `${id}-${index}`;
            return `
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; margin-bottom: 8px;">
                    <input 
                        type="radio" 
                        id="${optionId}" 
                        name="${name}"
                        value="${opt.value}"
                        ${checked}
                        style="width: 18px; height: 18px; cursor: pointer;">
                    <span style="color: #f8fafc; font-size: 14px;">${opt.label}</span>
                </label>
            `;
        }).join('');

        return `
            <div class="form-field" data-field-id="${id}" style="margin-bottom: 20px;">
                <div style="color: #f8fafc; font-size: 14px; font-weight: 500; margin-bottom: 8px;">${label}</div>
                <div role="radiogroup" aria-label="${label}">
                    ${optionsHtml}
                </div>
                ${helpText ? `<div style="color: #9ca3af; font-size: 12px; margin-top: 4px;">${helpText}</div>` : ''}
            </div>
        `;
    }

    /**
     * Build validation summary panel
     * @param {string} formId - Form ID
     * @returns {string} HTML string for validation summary
     */
    buildValidationSummary(formId) {
        return `
            <div id="${formId}-validation-summary" 
                class="validation-summary" 
                style="display: none; background: #7f1d1d; border: 1px solid #991b1b; border-radius: 8px; padding: 16px; margin-bottom: 20px;"
                role="alert"
                aria-live="polite">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                    <i class="fas fa-exclamation-triangle" style="color: #fca5a5; font-size: 18px;"></i>
                    <h4 style="color: #fca5a5; font-size: 16px; font-weight: 600; margin: 0;">Validation Errors</h4>
                </div>
                <ul id="${formId}-validation-list" style="color: #fca5a5; font-size: 14px; margin: 0; padding-left: 20px; list-style: disc;">
                    <!-- Errors will be inserted here -->
                </ul>
            </div>
        `;
    }

    /**
     * Validate single field
     * @param {string} fieldId - Field ID
     * @param {*} value - Field value
     * @param {Object} validation - Validation rules
     * @returns {Object} Validation result
     */
    validateField(fieldId, value, validation = {}) {
        const errors = [];

        // Required validation
        if (validation.required && (!value || value.trim() === '')) {
            errors.push('This field is required');
        }

        // Min length validation
        if (validation.minLength && value && value.length < validation.minLength) {
            errors.push(`Minimum length is ${validation.minLength} characters`);
        }

        // Max length validation
        if (validation.maxLength && value && value.length > validation.maxLength) {
            errors.push(`Maximum length is ${validation.maxLength} characters`);
        }

        // Pattern validation
        if (validation.pattern && value && !new RegExp(validation.pattern).test(value)) {
            errors.push(validation.patternMessage || 'Invalid format');
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

    /**
     * Display field error inline
     * @param {string} fieldId - Field ID
     * @param {string} errorMessage - Error message
     */
    displayFieldError(fieldId, errorMessage) {
        const errorEl = document.getElementById(`${fieldId}-error`);
        const fieldEl = document.getElementById(fieldId);
        
        if (errorEl && fieldEl) {
            errorEl.textContent = errorMessage;
            errorEl.style.display = 'block';
            fieldEl.style.borderColor = '#ef4444';
            fieldEl.setAttribute('aria-invalid', 'true');
            
            this.fieldErrors.set(fieldId, errorMessage);
        }
    }

    /**
     * Clear field error
     * @param {string} fieldId - Field ID
     */
    clearFieldError(fieldId) {
        const errorEl = document.getElementById(`${fieldId}-error`);
        const fieldEl = document.getElementById(fieldId);
        
        if (errorEl && fieldEl) {
            errorEl.textContent = '';
            errorEl.style.display = 'none';
            fieldEl.style.borderColor = '#374151';
            fieldEl.setAttribute('aria-invalid', 'false');
            
            this.fieldErrors.delete(fieldId);
        }
    }

    /**
     * Display validation summary
     * @param {string} formId - Form ID
     * @param {Array} errors - Array of error objects {fieldId, message}
     */
    displayValidationSummary(formId, errors) {
        const summaryEl = document.getElementById(`${formId}-validation-summary`);
        const listEl = document.getElementById(`${formId}-validation-list`);
        
        if (summaryEl && listEl && errors.length > 0) {
            const errorsHtml = errors.map(error => `
                <li>
                    <a href="#${error.fieldId}" 
                       style="color: #fca5a5; text-decoration: underline; cursor: pointer;"
                       onclick="document.getElementById('${error.fieldId}').focus(); return false;">
                        ${error.message}
                    </a>
                </li>
            `).join('');
            
            listEl.innerHTML = errorsHtml;
            summaryEl.style.display = 'block';
            this.formErrors = errors;
        } else if (summaryEl) {
            summaryEl.style.display = 'none';
            this.formErrors = [];
        }
    }

    /**
     * Clear validation summary
     * @param {string} formId - Form ID
     */
    clearValidationSummary(formId) {
        this.displayValidationSummary(formId, []);
    }
}

