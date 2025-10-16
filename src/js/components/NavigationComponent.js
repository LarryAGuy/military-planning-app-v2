// Import required modules
import { navigationConfig } from '../config/navigationConfig.js';
import { contentLoader } from '../utils/ContentLoader.js';
import { renderNavigation } from './views/NavigationTemplates.js';
import { structureContentForDoctrine, createContentLoadedEvent, createContentErrorEvent } from './utils/ContentStructurer.js';

export class NavigationComponent {
    constructor(container, eventBus) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        this.eventBus = eventBus;
        this.currentView = 'dashboard';
        this.currentSubItem = null;
        this.navigationItems = new Map();
        this.expandedDropdowns = new Set();
    }

    async initialize() {
        console.log('🧭 Initializing NavigationComponent...');

        this.initializeDropdownNavigation();
        this.render();
        this.setupEventListeners();
        this.setupPluginListeners();

        console.log('✅ NavigationComponent initialized');
    }

    initializeDropdownNavigation() {
        // Add dropdown navigation items from config
        Object.values(navigationConfig).forEach(item => {
            if (item.type === 'dropdown') {
                this.navigationItems.set(item.id, item);
            }
        });
    }

    render() {
        // Preserve sidebar scroll position across renders to prevent jarring jumps
        const prevNav = this.container.querySelector('nav[role="menu"]');
        const prevScrollTop = prevNav ? prevNav.scrollTop : null;

        this.container.innerHTML = `
            <div class="h-full flex flex-col">
                <!-- App Info (relocated from footer) -->
                <div class="px-4 pt-3 pb-2 border-b border-gray-700 bg-gray-800">
                    <div class="flex items-center space-x-2 text-xs text-gray-400">
                        <i class="fas fa-shield-alt text-blue-400"></i>
                        <span class="text-white font-semibold">Military Planning App V2</span>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">
                        Version 2.0.0 | © 2025 Military Planning Systems
                    </div>
                </div>

                <!-- Navigation Header -->
                <div class="p-4 border-b border-gray-700">
                    <h2 class="text-lg font-bold text-white mb-2">
                        <i class="fas fa-bars mr-2"></i>
                        Navigation
                    </h2>
                    <div class="text-xs text-gray-400">
                        Select a module to begin
                    </div>
                </div>

                <!-- Navigation Items -->
                <nav class="flex-1 p-4 space-y-2 overflow-y-auto" role="menu" aria-label="Main navigation">
                    ${renderNavigation(Array.from(this.navigationItems.values()), this.currentView, this.expandedDropdowns, this.currentSubItem)}
                </nav>

                <!-- System Status -->
                <div class="p-4 border-t border-gray-700">
                    <div class="text-xs text-gray-400 mb-2">System Status</div>
                    <div class="flex items-center space-x-2">
                        <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span class="text-xs text-green-400">All Systems Operational</span>
                    </div>
                    <div class="flex items-center space-x-2 mt-1">
                        <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span class="text-xs text-yellow-400">Training Mode Active</span>
                    </div>
                </div>

                <!-- Plugin Status -->
                <div class="p-4 border-t border-gray-700">
                    <div class="text-xs text-gray-400 mb-2">Loaded Plugins</div>
                    <div id="plugin-status" class="space-y-1">
                        <div class="text-xs text-gray-500">Loading plugins...</div>
                    </div>
                </div>
            </div>
        `;

        // Restore prior scroll position
        if (prevScrollTop !== null) {
            const newNav = this.container.querySelector('nav[role="menu"]');
            if (newNav) newNav.scrollTop = prevScrollTop;
        }
    }

    // Rendering is delegated to templates via render()

    setupEventListeners() {
        // Handle navigation clicks
        this.container.addEventListener('click', (event) => {
            // Handle dropdown toggle clicks
            const dropdownToggle = event.target.closest('.dropdown-toggle');
            if (dropdownToggle) {
                event.preventDefault();
                const dropdownId = dropdownToggle.dataset.dropdown;
                console.log(`🖱️ Dropdown toggle clicked: ${dropdownId}`);
                this.toggleDropdown(dropdownId);
                return;
            }

            // Handle sub-item clicks
            const subItem = event.target.closest('.nav-sub-item');
            if (subItem) {
                event.preventDefault();
                const view = subItem.dataset.view;
                const category = subItem.dataset.category;
                const module = subItem.dataset.module;

                if (view && category && module) {
                    this.navigateToSubItem(view, category, module);
                }
                return;
            }

            // Handle regular navigation item clicks
            const navItem = event.target.closest('.nav-item');
            if (navItem) {
                const view = navItem.dataset.view;
                this.navigateToView(view);
            }
        });

        // Listen for external navigation changes
        this.eventBus.on('navigation:change', (data) => {
            this.setActiveView(data.view);
        });

        // Listen for plugin registration
        this.eventBus.on('plugin:registered', (data) => {
            this.updatePluginStatus(data);
        });

    }

    setupPluginListeners() {
        // Listen for plugin navigation registration
        this.eventBus.on('navigation:register', (data) => {
            this.registerNavigationItem(data);
        });

        // Listen for navigation activation requests
        this.eventBus.on('navigation:activate', (data) => {
            this.navigateToView(data.id);
        });
    }

    registerNavigationItem(itemData) {
        // Check if this item already exists as a dropdown from config
        const existingItem = this.navigationItems.get(itemData.id);

        if (existingItem && existingItem.type === 'dropdown') {
            // Don't overwrite dropdown items with simple plugin items
            console.log(`📍 Preserving dropdown configuration for: ${itemData.label}`);
            return;
        }

        // Add or update navigation item from plugin
        this.navigationItems.set(itemData.id, {
            id: itemData.id,
            label: itemData.label,
            icon: itemData.icon,
            description: itemData.description || `${itemData.label} plugin`,
            order: itemData.order || 999,
            plugin: itemData.plugin
        });

        // Re-render navigation to include new item
        this.render();
        console.log(`📍 Navigation item registered: ${itemData.label}`);
    }

    navigateToView(view) {
        if (view !== this.currentView) {
            // Check if this navigation item has a defaultContentModule
            const navItem = this.navigationItems.get(view);
            if (navItem && navItem.defaultContentModule) {
                // Navigate to the default sub-item instead
                const defaultSubItem = navItem.items?.find(item => item.contentModule === navItem.defaultContentModule);
                if (defaultSubItem) {
                    console.log(`🎯 Auto-navigating to default content: ${view} -> ${navItem.defaultContentModule}`);
                    this.navigateToSubItem(defaultSubItem.id, view, navItem.defaultContentModule);
                    return;
                }
            }

            this.setActiveView(view);
            this.eventBus.emit('navigation:change', { view, source: 'navigation' });
            // Also emit navigation:activated for plugins
            this.eventBus.emit('navigation:activated', { id: view, view, source: 'navigation' });
        }
    }

    async navigateToSubItem(view, category, module) {
        try {
            // Mark active sub-item immediately (persists through loading)
            this.currentSubItem = { category, module, view };
            // Ensure dropdown stays open and re-render immediately for visual feedback
            if (category) this.expandedDropdowns.add(category);
            this.render();

            // Load content for the sub-item
            const content = await contentLoader.loadContent(category, module);

            // Update current view
            this.setActiveView(view);

            // Structure content data for loadDoctrinalContent compatibility
            const structuredContent = structureContentForDoctrine(content);

            // Emit content loaded event
            this.eventBus.emit('content:loaded', createContentLoadedEvent(view, category, module, structuredContent));

            console.log(`📖 Loaded content: ${category}/${module}`);
        } catch (error) {
            console.error(`Failed to load content: ${category}/${module}`, error);

            // Emit error event
            this.eventBus.emit('content:error', createContentErrorEvent(view, category, module, error.message));
        }
    }

    toggleDropdown(dropdownId) {
        const wasExpanded = this.expandedDropdowns.has(dropdownId);

        if (wasExpanded) {
            this.expandedDropdowns.delete(dropdownId);
            console.log(`🔼 Collapsed dropdown: ${dropdownId}`);
        } else {
            this.expandedDropdowns.add(dropdownId);
            console.log(`🔽 Expanded dropdown: ${dropdownId}`);
        }

        // Re-render to update dropdown state
        this.render();
        console.log(`📊 Expanded dropdowns: [${Array.from(this.expandedDropdowns).join(', ')}]`);
    }

    setActiveView(view) {
        this.currentView = view;
        this.render();
    }

    updatePluginStatus(pluginData) {
        const statusContainer = document.getElementById('plugin-status');
        if (statusContainer) {
            const existingStatus = statusContainer.querySelector(`[data-plugin="${pluginData.name}"]`);
            if (!existingStatus) {
                const pluginElement = document.createElement('div');
                pluginElement.className = 'text-xs text-green-400 flex items-center space-x-2';
                pluginElement.dataset.plugin = pluginData.name;
                pluginElement.innerHTML = `
                    <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span>${pluginData.name} v${pluginData.version}</span>
                `;

                // Remove loading message if it exists
                const loadingMsg = statusContainer.querySelector('.text-gray-500');
                if (loadingMsg) {
                    loadingMsg.remove();
                }

                statusContainer.appendChild(pluginElement);
            }
        }
    }

    updateSystemStatus(statusData) {
        // Update system status indicators based on statusData
        console.log('System status updated:', statusData);
    }

    destroy() {
        // Clean up event listeners if needed
    }
}