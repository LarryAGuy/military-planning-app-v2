/**
 * Draft Tool UI Component
 * Reusable UI component for consistent draft tool layout and styling
 * Provides header, toolbar, and section accordion rendering
 * 
 * DESIGN PATTERN: Reusable for Draft OPORD, Draft MDMP, and Draft JPP tools
 * WCAG 2.1 AA COMPLIANT: Accessibility features included
 * 
 * @module DraftToolUI
 */

export class DraftToolUI {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.initialized = false;
    }

    /**
     * Initialize UI component
     */
    initialize() {
        if (this.initialized) return;
        
        console.log('✅ DraftToolUI initialized');
        this.initialized = true;
    }

    /**
     * Render header section with metadata fields
     * @param {Object} config - Header configuration
     * @returns {string} HTML string for header
     */
    renderHeader(config) {
        const {
            title = 'New Draft',
            classification = 'UNCLASSIFIED',
            classificationColor = '#00ff00',
            fields = [],
            icon = 'fa-file-alt',
            iconColor = '#3b82f6'
        } = config;

        const fieldsHtml = fields.map(field => this.renderHeaderField(field)).join('');

        return `
            <div class="draft-tool-header" 
                style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); 
                       border: 1px solid #374151; 
                       border-radius: 12px; 
                       padding: 24px;"
                role="banner"
                aria-label="Draft header">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <h1 style="color: #f8fafc; font-size: 24px; font-weight: 700; margin: 0;"
                        id="draft-title-heading">
                        <i class="fas ${icon}" 
                           style="margin-right: 12px; color: ${iconColor};" 
                           aria-hidden="true"></i>
                        ${title}
                    </h1>
                    <div class="classification-badge" 
                        style="background: ${classificationColor}; 
                               color: #000; 
                               padding: 8px 16px; 
                               border-radius: 6px; 
                               font-weight: 700; 
                               font-size: 14px;"
                        role="status"
                        aria-label="Classification level: ${classification}">
                        ${classification}
                    </div>
                </div>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
                    ${fieldsHtml}
                </div>
            </div>
        `;
    }

    /**
     * Render individual header field
     * @param {Object} field - Field configuration
     * @returns {string} HTML string for field
     */
    renderHeaderField(field) {
        const {
            id,
            label,
            value = '',
            placeholder = '',
            type = 'text',
            required = false
        } = field;

        const requiredAttr = required ? 'required aria-required="true"' : '';
        const requiredMark = required ? '<span style="color: #ef4444;" aria-label="required">*</span>' : '';

        return `
            <div>
                <label for="${id}" 
                    style="color: #9ca3af; font-size: 12px; display: block; margin-bottom: 4px;">
                    ${label} ${requiredMark}
                </label>
                <input type="${type}" 
                    id="${id}" 
                    value="${value}" 
                    placeholder="${placeholder}"
                    ${requiredAttr}
                    style="width: 100%; 
                           background: #0f172a; 
                           border: 1px solid #374151; 
                           border-radius: 6px; 
                           padding: 8px 12px; 
                           color: #f8fafc; 
                           font-size: 14px;"
                    aria-label="${label}">
            </div>
        `;
    }

    /**
     * Render toolbar with action buttons
     * @param {Array} buttons - Array of button configurations
     * @returns {string} HTML string for toolbar
     */
    renderToolbar(buttons) {
        const buttonsHtml = buttons.map(button => this.renderToolbarButton(button)).join('');

        return `
            <div class="draft-tool-toolbar" 
                style="display: flex; gap: 12px; flex-wrap: wrap;"
                role="toolbar"
                aria-label="Draft actions">
                ${buttonsHtml}
            </div>
        `;
    }

    /**
     * Render individual toolbar button
     * @param {Object} button - Button configuration
     * @returns {string} HTML string for button
     */
    renderToolbarButton(button) {
        const {
            id,
            label,
            icon,
            color = '#3b82f6',
            disabled = false
        } = button;

        const disabledAttr = disabled ? 'disabled' : '';
        const disabledStyle = disabled ? 'opacity: 0.5; cursor: not-allowed;' : 'cursor: pointer;';

        return `
            <button id="${id}" 
                class="toolbar-btn" 
                ${disabledAttr}
                style="background: ${color}; 
                       color: white; 
                       padding: 10px 20px; 
                       border: none; 
                       border-radius: 6px; 
                       font-size: 14px; 
                       font-weight: 600; 
                       ${disabledStyle}
                       display: flex; 
                       align-items: center; 
                       gap: 8px;
                       transition: opacity 0.2s;"
                aria-label="${label}">
                <i class="fas ${icon}" aria-hidden="true"></i>
                ${label}
            </button>
        `;
    }

    /**
     * Render section accordion layout
     * @param {Array} sections - Array of section configurations
     * @param {Set} expandedSections - Set of expanded section IDs
     * @returns {string} HTML string for section accordion
     */
    renderSectionAccordion(sections, expandedSections = new Set()) {
        const sectionsHtml = sections.map(section => 
            this.renderSection(section, expandedSections.has(section.id))
        ).join('');

        return `
            <div class="opord-sections" role="region" aria-label="Draft sections">
                ${sectionsHtml}
            </div>
        `;
    }

    /**
     * Render individual section
     * @param {Object} section - Section configuration
     * @param {boolean} isExpanded - Whether section is expanded
     * @returns {string} HTML string for section
     */
    renderSection(section, isExpanded = false) {
        const {
            id,
            title,
            icon,
            color
        } = section;

        return `
            <div class="opord-section" 
                data-section="${id}" 
                style="background: #1f2937; 
                       border: 1px solid #374151; 
                       border-radius: 12px; 
                       margin-bottom: 16px; 
                       overflow: hidden;">
                ${this.renderSectionHeader(section, isExpanded)}
                ${this.renderSectionContent(section, isExpanded)}
            </div>
        `;
    }

    /**
     * Render section header (clickable)
     * @param {Object} section - Section configuration
     * @param {boolean} isExpanded - Whether section is expanded
     * @returns {string} HTML string for section header
     */
    renderSectionHeader(section, isExpanded = false) {
        const {
            id,
            title,
            icon,
            color
        } = section;

        const chevronIcon = isExpanded ? 'fa-chevron-up' : 'fa-chevron-down';

        return `
            <div class="section-header" 
                data-section="${id}" 
                style="padding: 20px; 
                       cursor: pointer; 
                       display: flex; 
                       justify-content: space-between; 
                       align-items: center; 
                       background: linear-gradient(135deg, #1f2937 0%, #111827 100%);"
                role="button"
                tabindex="0"
                aria-expanded="${isExpanded}"
                aria-controls="section-${id}-content"
                aria-label="Toggle ${title} section">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <i class="fas ${icon}" 
                       style="color: ${color}; font-size: 20px;" 
                       aria-hidden="true"></i>
                    <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0;">
                        ${title}
                    </h3>
                </div>
                <i class="fas ${chevronIcon}" 
                   style="color: #9ca3af; font-size: 16px;" 
                   aria-hidden="true"></i>
            </div>
        `;
    }

    /**
     * Render section content (collapsible)
     * @param {Object} section - Section configuration
     * @param {boolean} isExpanded - Whether section is expanded
     * @returns {string} HTML string for section content
     */
    renderSectionContent(section, isExpanded = false) {
        const { id } = section;
        const displayStyle = isExpanded ? 'block' : 'none';

        return `
            <div class="section-content" 
                id="section-${id}-content"
                data-section="${id}" 
                style="display: ${displayStyle}; 
                       padding: 20px; 
                       border-top: 1px solid #374151;"
                role="region"
                aria-labelledby="section-${id}-header">
                <div id="section-${id}-container">
                    <!-- Section component will be rendered here -->
                </div>
            </div>
        `;
    }

    /**
     * Get header styles (for external use)
     * @returns {Object} CSS styles object
     */
    getHeaderStyles() {
        return {
            background: 'linear-gradient(135deg, #1f2937 0%, #111827 100%)',
            border: '1px solid #374151',
            borderRadius: '12px',
            padding: '24px'
        };
    }

    /**
     * Get toolbar styles (for external use)
     * @returns {Object} CSS styles object
     */
    getToolbarStyles() {
        return {
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap'
        };
    }

    /**
     * Get section styles (for external use)
     * @returns {Object} CSS styles object
     */
    getSectionStyles() {
        return {
            background: '#1f2937',
            border: '1px solid #374151',
            borderRadius: '12px',
            marginBottom: '16px',
            overflow: 'hidden'
        };
    }

    /**
     * Get responsive layout configuration
     * @param {string} screenSize - Screen size (small, medium, large)
     * @returns {Object} Layout configuration
     */
    getResponsiveLayout(screenSize) {
        const layouts = {
            small: {
                headerColumns: '1fr',
                toolbarDirection: 'column',
                sectionPadding: '12px'
            },
            medium: {
                headerColumns: 'repeat(2, 1fr)',
                toolbarDirection: 'row',
                sectionPadding: '16px'
            },
            large: {
                headerColumns: 'repeat(3, 1fr)',
                toolbarDirection: 'row',
                sectionPadding: '20px'
            }
        };

        return layouts[screenSize] || layouts.medium;
    }
}

