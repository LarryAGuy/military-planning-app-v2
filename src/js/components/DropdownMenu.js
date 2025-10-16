/**
 * DropdownMenu Component
 * 
 * A reusable dropdown menu component with keyboard navigation,
 * click-outside-to-close, and accessibility features.
 * 
 * @example
 * const dropdown = new DropdownMenu({
 *     trigger: document.getElementById('my-button'),
 *     items: [
 *         { id: 'action1', icon: 'fas fa-plus', label: 'Action 1' },
 *         { type: 'divider' },
 *         { id: 'action2', icon: 'fas fa-edit', label: 'Action 2' }
 *     ],
 *     onSelect: (itemId) => console.log('Selected:', itemId),
 *     position: 'bottom-right'
 * });
 */

export class DropdownMenu {
    /**
     * Create a dropdown menu
     * @param {Object} options - Configuration options
     * @param {HTMLElement} options.trigger - Button element that triggers the dropdown
     * @param {Array} options.items - Array of menu items
     * @param {Function} options.onSelect - Callback when item is selected
     * @param {string} options.position - Position relative to trigger ('bottom-right', 'bottom-left', 'top-right', 'top-left')
     */
    constructor(options) {
        this.trigger = options.trigger;
        this.items = options.items || [];
        this.onSelect = options.onSelect || (() => {});
        this.position = options.position || 'bottom-right';
        
        this.isOpen = false;
        this.menuElement = null;
        this.focusedIndex = -1;
        
        // Bind methods
        this.handleTriggerClick = this.handleTriggerClick.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
        
        this.init();
    }
    
    /**
     * Initialize the dropdown menu
     */
    init() {
        if (!this.trigger) {
            console.error('DropdownMenu: trigger element is required');
            return;
        }
        
        // Add ARIA attributes to trigger
        this.trigger.setAttribute('aria-haspopup', 'true');
        this.trigger.setAttribute('aria-expanded', 'false');
        
        // Attach event listener to trigger
        this.trigger.addEventListener('click', this.handleTriggerClick);
        
        // Create menu element
        this.createMenu();
    }
    
    /**
     * Create the menu element
     */
    createMenu() {
        this.menuElement = document.createElement('div');
        this.menuElement.className = 'dropdown-menu';
        this.menuElement.setAttribute('role', 'menu');
        this.menuElement.style.display = 'none';

        // Add position class
        this.menuElement.classList.add(`dropdown-menu-${this.position}`);

        // Render menu items
        this.renderItems();

        // Insert menu into the trigger's parent (positioned wrapper)
        // This ensures the dropdown positions relative to the trigger button
        this.trigger.parentNode.appendChild(this.menuElement);
    }
    
    /**
     * Render menu items
     */
    renderItems() {
        this.menuElement.innerHTML = '';
        
        this.items.forEach((item, index) => {
            if (item.type === 'divider') {
                const divider = document.createElement('div');
                divider.className = 'dropdown-divider';
                divider.setAttribute('role', 'separator');
                this.menuElement.appendChild(divider);
            } else {
                const menuItem = document.createElement('button');
                menuItem.className = 'dropdown-item';
                menuItem.setAttribute('role', 'menuitem');
                menuItem.setAttribute('data-item-id', item.id);
                menuItem.setAttribute('data-item-index', index);
                
                // Add icon if provided
                if (item.icon) {
                    const icon = document.createElement('i');
                    icon.className = item.icon;
                    menuItem.appendChild(icon);
                }
                
                // Add label
                const label = document.createElement('span');
                label.textContent = item.label;
                menuItem.appendChild(label);
                
                // Add disabled state if specified
                if (item.disabled) {
                    menuItem.disabled = true;
                    menuItem.classList.add('dropdown-item-disabled');
                }
                
                // Attach click handler
                menuItem.addEventListener('click', this.handleItemClick);
                
                this.menuElement.appendChild(menuItem);
            }
        });
    }
    
    /**
     * Handle trigger button click
     * @param {Event} event - Click event
     */
    handleTriggerClick(event) {
        event.stopPropagation();
        this.toggle();
    }
    
    /**
     * Handle document click (for click-outside-to-close)
     * @param {Event} event - Click event
     */
    handleDocumentClick(event) {
        if (!this.menuElement.contains(event.target) && event.target !== this.trigger) {
            this.close();
        }
    }
    
    /**
     * Handle keyboard navigation
     * @param {KeyboardEvent} event - Keyboard event
     */
    handleKeyDown(event) {
        const menuItems = this.getMenuItems();
        
        switch (event.key) {
            case 'Escape':
                event.preventDefault();
                this.close();
                this.trigger.focus();
                break;
                
            case 'ArrowDown':
                event.preventDefault();
                this.focusedIndex = Math.min(this.focusedIndex + 1, menuItems.length - 1);
                this.focusItem(this.focusedIndex);
                break;
                
            case 'ArrowUp':
                event.preventDefault();
                this.focusedIndex = Math.max(this.focusedIndex - 1, 0);
                this.focusItem(this.focusedIndex);
                break;
                
            case 'Home':
                event.preventDefault();
                this.focusedIndex = 0;
                this.focusItem(this.focusedIndex);
                break;
                
            case 'End':
                event.preventDefault();
                this.focusedIndex = menuItems.length - 1;
                this.focusItem(this.focusedIndex);
                break;
                
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (this.focusedIndex >= 0 && this.focusedIndex < menuItems.length) {
                    menuItems[this.focusedIndex].click();
                }
                break;
                
            case 'Tab':
                // Allow tab to close menu and move focus
                this.close();
                break;
        }
    }
    
    /**
     * Handle menu item click
     * @param {Event} event - Click event
     */
    handleItemClick(event) {
        const itemId = event.currentTarget.getAttribute('data-item-id');
        
        if (itemId) {
            this.onSelect(itemId);
            this.close();
        }
    }
    
    /**
     * Get all menu items (excluding dividers)
     * @returns {Array<HTMLElement>} Array of menu item elements
     */
    getMenuItems() {
        return Array.from(this.menuElement.querySelectorAll('.dropdown-item:not(.dropdown-item-disabled)'));
    }
    
    /**
     * Focus a specific menu item
     * @param {number} index - Index of item to focus
     */
    focusItem(index) {
        const menuItems = this.getMenuItems();
        
        if (index >= 0 && index < menuItems.length) {
            menuItems[index].focus();
        }
    }
    
    /**
     * Open the dropdown menu
     */
    open() {
        if (this.isOpen) return;
        
        this.isOpen = true;
        this.menuElement.style.display = 'block';
        this.trigger.setAttribute('aria-expanded', 'true');
        
        // Add chevron rotation class to trigger if it has a chevron
        const chevron = this.trigger.querySelector('.dropdown-chevron');
        if (chevron) {
            chevron.style.transform = 'rotate(180deg)';
        }
        
        // Reset focus index
        this.focusedIndex = -1;
        
        // Attach event listeners
        document.addEventListener('click', this.handleDocumentClick);
        this.menuElement.addEventListener('keydown', this.handleKeyDown);
        
        // Focus first item after a short delay
        setTimeout(() => {
            this.focusedIndex = 0;
            this.focusItem(0);
        }, 100);
    }
    
    /**
     * Close the dropdown menu
     */
    close() {
        if (!this.isOpen) return;
        
        this.isOpen = false;
        this.menuElement.style.display = 'none';
        this.trigger.setAttribute('aria-expanded', 'false');
        
        // Remove chevron rotation
        const chevron = this.trigger.querySelector('.dropdown-chevron');
        if (chevron) {
            chevron.style.transform = 'rotate(0deg)';
        }
        
        // Remove event listeners
        document.removeEventListener('click', this.handleDocumentClick);
        this.menuElement.removeEventListener('keydown', this.handleKeyDown);
        
        // Reset focus index
        this.focusedIndex = -1;
    }
    
    /**
     * Toggle the dropdown menu
     */
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
    
    /**
     * Update menu items
     * @param {Array} items - New array of menu items
     */
    updateItems(items) {
        this.items = items;
        this.renderItems();
    }
    
    /**
     * Destroy the dropdown menu and clean up
     */
    destroy() {
        // Remove event listeners
        this.trigger.removeEventListener('click', this.handleTriggerClick);
        document.removeEventListener('click', this.handleDocumentClick);
        
        if (this.menuElement) {
            this.menuElement.removeEventListener('keydown', this.handleKeyDown);
            this.menuElement.remove();
        }
        
        // Remove ARIA attributes
        this.trigger.removeAttribute('aria-haspopup');
        this.trigger.removeAttribute('aria-expanded');
    }
}

