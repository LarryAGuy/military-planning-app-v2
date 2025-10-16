/**
 * ClassificationBadge Component
 * 
 * A compact badge that displays the current classification level
 * and opens a modal when clicked for full classification editing.
 * 
 * @example
 * const badge = new ClassificationBadge({
 *     container: document.getElementById('badge-container'),
 *     classificationUI: classificationUIInstance,
 *     onClick: () => openClassificationModal()
 * });
 */

export class ClassificationBadge {
    /**
     * Create a classification badge
     * @param {Object} options - Configuration options
     * @param {HTMLElement} options.container - Container element for the badge
     * @param {Object} options.classificationUI - ClassificationUI instance
     * @param {Function} options.onClick - Callback when badge is clicked
     */
    constructor(options) {
        this.container = options.container;
        this.classificationUI = options.classificationUI;
        this.onClick = options.onClick || (() => {});
        
        this.badgeElement = null;
        
        // Bind methods
        this.handleClick = this.handleClick.bind(this);
        
        this.render();
    }
    
    /**
     * Render the badge
     */
    render() {
        const classification = this.getClassificationSummary();
        const color = this.getColor(classification.level);
        
        this.badgeElement = document.createElement('button');
        this.badgeElement.className = 'classification-badge';
        this.badgeElement.style.background = color;
        this.badgeElement.setAttribute('aria-label', `Classification: ${classification.text}. Click to edit.`);
        this.badgeElement.setAttribute('title', 'Click to edit classification');
        
        this.badgeElement.innerHTML = `
            <i class="fas fa-shield-alt"></i>
            <span class="classification-badge-text">${classification.text}</span>
        `;
        
        // Attach click handler
        this.badgeElement.addEventListener('click', this.handleClick);
        
        // Clear container and append badge
        this.container.innerHTML = '';
        this.container.appendChild(this.badgeElement);
    }
    
    /**
     * Handle badge click
     */
    handleClick() {
        this.onClick();
    }
    
    /**
     * Get classification summary from ClassificationUI
     * @returns {Object} Classification summary with level and text
     */
    getClassificationSummary() {
        if (!this.classificationUI || !this.classificationUI.state) {
            return { level: 'UNCLASSIFIED', text: 'UNCLASSIFIED' };
        }
        
        const state = this.classificationUI.state;
        const parts = [];
        
        // Add level
        const level = state.level || 'UNCLASSIFIED';
        parts.push(level);
        
        // Add dissemination controls (if any)
        if (state.dissemination && state.dissemination.length > 0) {
            const dissem = state.dissemination.join('/');
            parts.push('//' + dissem);
        }
        
        // Add SCI compartments (if any)
        if (state.sci && state.sci.length > 0) {
            const sci = state.sci.join('-');
            parts.push('//' + sci);
        }
        
        // Add release markings (if any)
        if (state.release && state.release.length > 0) {
            const release = state.release.join(', ');
            parts.push('//REL TO ' + release);
        }
        
        // Add handling caveats (if any)
        if (state.handling && state.handling.length > 0) {
            const handling = state.handling.join('/');
            parts.push('//' + handling);
        }
        
        const text = parts.join('');
        
        // Truncate if too long
        const maxLength = 30;
        const displayText = text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
        
        return {
            level: level,
            text: displayText,
            fullText: text
        };
    }
    
    /**
     * Get color for classification level
     * @param {string} level - Classification level
     * @returns {string} Color hex code
     */
    getColor(level) {
        const colors = {
            'UNCLASSIFIED': '#5cb85c',      // Green
            'CUI': '#8b5cf6',                // Purple
            'CONFIDENTIAL': '#0066cc',       // Blue
            'SECRET': '#dc2626',             // Red
            'TOP SECRET': '#ff6600'          // Orange
        };
        
        return colors[level] || colors['UNCLASSIFIED'];
    }
    
    /**
     * Update the badge with current classification
     */
    update() {
        const classification = this.getClassificationSummary();
        const color = this.getColor(classification.level);
        
        // Update background color
        this.badgeElement.style.background = color;
        
        // Update text
        const textElement = this.badgeElement.querySelector('.classification-badge-text');
        if (textElement) {
            textElement.textContent = classification.text;
        }
        
        // Update ARIA label
        this.badgeElement.setAttribute('aria-label', `Classification: ${classification.text}. Click to edit.`);
    }
    
    /**
     * Destroy the badge and clean up
     */
    destroy() {
        if (this.badgeElement) {
            this.badgeElement.removeEventListener('click', this.handleClick);
            this.badgeElement.remove();
        }
    }
}

