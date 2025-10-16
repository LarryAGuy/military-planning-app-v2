/**
 * Modal Component
 * 
 * A reusable modal dialog component with overlay, animations,
 * focus management, and accessibility features.
 * 
 * @example
 * const modal = new Modal({
 *     title: 'My Modal',
 *     content: '<p>Modal content here</p>',
 *     onOpen: () => console.log('Modal opened'),
 *     onClose: () => console.log('Modal closed'),
 *     buttons: [
 *         { label: 'Apply', type: 'primary', onClick: () => {} },
 *         { label: 'Cancel', type: 'secondary', onClick: () => modal.close() }
 *     ]
 * });
 * modal.open();
 */

export class Modal {
    /**
     * Create a modal
     * @param {Object} options - Configuration options
     * @param {string} options.title - Modal title (can include HTML)
     * @param {string|HTMLElement} options.content - Modal content
     * @param {Function} options.onOpen - Callback when modal opens
     * @param {Function} options.onClose - Callback when modal closes
     * @param {boolean} options.showFooter - Whether to show footer (default: true)
     * @param {Array} options.buttons - Array of button configurations
     * @param {boolean} options.closeOnOverlayClick - Close modal when clicking overlay (default: true)
     * @param {boolean} options.closeOnEscape - Close modal when pressing Escape (default: true)
     */
    constructor(options) {
        this.title = options.title || 'Modal';
        this.content = options.content || '';
        this.onOpen = options.onOpen || (() => {});
        this.onClose = options.onClose || (() => {});
        this.showFooter = options.showFooter !== false;
        this.buttons = options.buttons || [
            { label: 'Close', type: 'secondary', onClick: () => this.close() }
        ];
        this.closeOnOverlayClick = options.closeOnOverlayClick !== false;
        this.closeOnEscape = options.closeOnEscape !== false;
        
        this.isOpen = false;
        this.modalElement = null;
        this.previousFocusedElement = null;
        this.focusableElements = [];
        
        // Bind methods
        this.handleOverlayClick = this.handleOverlayClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        
        this.createModal();
    }
    
    /**
     * Create the modal element
     */
    createModal() {
        this.modalElement = document.createElement('div');
        this.modalElement.className = 'modal';
        this.modalElement.setAttribute('role', 'dialog');
        this.modalElement.setAttribute('aria-modal', 'true');
        this.modalElement.setAttribute('aria-labelledby', 'modal-title');
        this.modalElement.style.display = 'none';
        
        this.modalElement.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-header">
                    <h2 id="modal-title" class="modal-title">${this.title}</h2>
                    <button class="modal-close" aria-label="Close modal">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    ${typeof this.content === 'string' ? this.content : ''}
                </div>
                ${this.showFooter ? this.renderFooter() : ''}
            </div>
        `;
        
        // If content is an HTMLElement, append it
        if (this.content instanceof HTMLElement) {
            const modalBody = this.modalElement.querySelector('.modal-body');
            modalBody.innerHTML = '';
            modalBody.appendChild(this.content);
        }
        
        // Attach event listeners
        const closeButton = this.modalElement.querySelector('.modal-close');
        closeButton.addEventListener('click', this.handleCloseClick);
        
        const overlay = this.modalElement.querySelector('.modal-overlay');
        overlay.addEventListener('click', this.handleOverlayClick);
        
        // Attach button event listeners
        this.attachButtonListeners();
        
        // Append to body
        document.body.appendChild(this.modalElement);
    }
    
    /**
     * Render footer with buttons
     * @returns {string} Footer HTML
     */
    renderFooter() {
        const buttonsHTML = this.buttons.map((button, index) => {
            const typeClass = button.type === 'primary' ? 'btn-primary' : 'btn-secondary';
            return `
                <button class="modal-btn ${typeClass}" data-button-index="${index}">
                    ${button.icon ? `<i class="${button.icon}"></i>` : ''}
                    ${button.label}
                </button>
            `;
        }).join('');
        
        return `
            <div class="modal-footer">
                ${buttonsHTML}
            </div>
        `;
    }
    
    /**
     * Attach event listeners to footer buttons
     */
    attachButtonListeners() {
        if (!this.showFooter) return;
        
        const buttons = this.modalElement.querySelectorAll('.modal-btn');
        buttons.forEach((button) => {
            const index = parseInt(button.getAttribute('data-button-index'));
            button.addEventListener('click', () => {
                if (this.buttons[index] && this.buttons[index].onClick) {
                    this.buttons[index].onClick();
                }
            });
        });
    }
    
    /**
     * Handle overlay click
     * @param {Event} event - Click event
     */
    handleOverlayClick(event) {
        if (this.closeOnOverlayClick && event.target.classList.contains('modal-overlay')) {
            this.close();
        }
    }
    
    /**
     * Handle close button click
     */
    handleCloseClick() {
        this.close();
    }
    
    /**
     * Handle keyboard events
     * @param {KeyboardEvent} event - Keyboard event
     */
    handleKeyDown(event) {
        if (event.key === 'Escape' && this.closeOnEscape) {
            event.preventDefault();
            this.close();
        } else if (event.key === 'Tab') {
            this.handleTabKey(event);
        }
    }
    
    /**
     * Handle Tab key for focus trapping
     * @param {KeyboardEvent} event - Keyboard event
     */
    handleTabKey(event) {
        const focusableElements = this.getFocusableElements();
        
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            }
        } else {
            // Tab
            if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    }
    
    /**
     * Get all focusable elements within the modal
     * @returns {Array<HTMLElement>} Array of focusable elements
     */
    getFocusableElements() {
        const selectors = [
            'button:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            'a[href]',
            '[tabindex]:not([tabindex="-1"])'
        ];
        
        const modalContent = this.modalElement.querySelector('.modal-content');
        return Array.from(modalContent.querySelectorAll(selectors.join(', ')));
    }
    
    /**
     * Open the modal
     */
    open() {
        if (this.isOpen) return;
        
        this.isOpen = true;
        
        // Store currently focused element
        this.previousFocusedElement = document.activeElement;
        
        // Show modal
        this.modalElement.style.display = 'flex';
        
        // Add body class to prevent scrolling
        document.body.classList.add('modal-open');
        
        // Attach keyboard listener
        document.addEventListener('keydown', this.handleKeyDown);
        
        // Focus first focusable element
        setTimeout(() => {
            const focusableElements = this.getFocusableElements();
            if (focusableElements.length > 0) {
                focusableElements[0].focus();
            }
        }, 100);
        
        // Call onOpen callback
        this.onOpen();
    }
    
    /**
     * Close the modal
     */
    close() {
        if (!this.isOpen) return;
        
        this.isOpen = false;
        
        // Hide modal
        this.modalElement.style.display = 'none';
        
        // Remove body class
        document.body.classList.remove('modal-open');
        
        // Remove keyboard listener
        document.removeEventListener('keydown', this.handleKeyDown);
        
        // Restore focus to previously focused element
        if (this.previousFocusedElement) {
            this.previousFocusedElement.focus();
        }
        
        // Call onClose callback
        this.onClose();
    }
    
    /**
     * Update modal content
     * @param {string|HTMLElement} content - New content
     */
    updateContent(content) {
        this.content = content;
        const modalBody = this.modalElement.querySelector('.modal-body');
        
        if (typeof content === 'string') {
            modalBody.innerHTML = content;
        } else if (content instanceof HTMLElement) {
            modalBody.innerHTML = '';
            modalBody.appendChild(content);
        }
    }
    
    /**
     * Update modal title
     * @param {string} title - New title
     */
    updateTitle(title) {
        this.title = title;
        const modalTitle = this.modalElement.querySelector('.modal-title');
        modalTitle.innerHTML = title;
    }
    
    /**
     * Destroy the modal and clean up
     */
    destroy() {
        // Close if open
        if (this.isOpen) {
            this.close();
        }
        
        // Remove event listeners
        const closeButton = this.modalElement.querySelector('.modal-close');
        if (closeButton) {
            closeButton.removeEventListener('click', this.handleCloseClick);
        }
        
        const overlay = this.modalElement.querySelector('.modal-overlay');
        if (overlay) {
            overlay.removeEventListener('click', this.handleOverlayClick);
        }
        
        // Remove modal element
        if (this.modalElement && this.modalElement.parentNode) {
            this.modalElement.parentNode.removeChild(this.modalElement);
        }
    }
}

