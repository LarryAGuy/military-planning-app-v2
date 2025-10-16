import { detectBrowser, scheduleInitialize } from '../workspace/utils/BrowserTiming.js';
import { executeEmbeddedScripts } from '../workspace/utils/ScriptExecutor.js';
import { assertContainers } from '../workspace/utils/ContainerGuard.js';
import { setCurrentView, getCurrentView } from '../workspace/utils/ViewState.js';
import { Log } from '../workspace/utils/Logger.js';
import { WorkspaceRouter } from '../workspace/router/WorkspaceRouter.js';
import { MdmpInitializer } from '../workspace/initializers/mdmp/MdmpInitializer.js';
import { OpordInitializer } from '../workspace/initializers/opord/OpordInitializer.js';
import { JppInitializer } from '../workspace/initializers/jpp/JppInitializer.js';
import { DraftToolsInitializer } from '../workspace/initializers/draft/DraftToolsInitializer.js';
import { ExamplesInitializer } from '../workspace/initializers/examples/ExamplesInitializer.js';
import { TacticsInitializer } from '../workspace/initializers/tactics/TacticsInitializer.js';
import { getDashboardView, getLoadingState, getUnknownModuleView, renderDoctrinalContent, getErrorView, getContentErrorView } from './views/Templates.js';

export class WorkspaceComponent {
    constructor(container, eventBus) {
        // Router (feature-flagged) — safe to instantiate; only used when flag enabled
        this.router = new WorkspaceRouter([ new MdmpInitializer(), new OpordInitializer(), new JppInitializer(), new DraftToolsInitializer(), new ExamplesInitializer(), new TacticsInitializer() ]);
        this.useRouter = () => Boolean(window?.__config?.USE_WORKSPACE_ROUTER === true);
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        this.eventBus = eventBus;
        this.currentView = 'dashboard';
        this.loadedViews = new Map();
    }

    async initialize() {
        console.log('💼 Initializing WorkspaceComponent...');

        this.render();
        this.setupEventListeners();
        await this.loadView('dashboard');

        console.log('✅ WorkspaceComponent initialized');
    }

    render() {
        this.container.innerHTML = `
            <div class="h-full flex flex-col">
                <!-- Workspace header elements removed as requested -->

                <!-- Main Content Area -->
                <div id="workspace-content" class="flex-1 bg-gray-800 rounded-lg border border-gray-700 overflow-y-auto">
                    ${getLoadingState()}
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Refresh and fullscreen button event listeners removed as buttons were removed

        // Listen for view changes
        this.eventBus.on('workspace:load-view', (data) => {
            this.loadView(data.view, data.options);
        });

        // Listen for content updates
        this.eventBus.on('workspace:update-content', (data) => {
            this.updateContent(data);
        });

        // Handle plugin workspace changes
        this.eventBus.on('workspace:change', (data) => {
            this.loadPluginContent(data);
        });

        // Handle navigation activation
        this.eventBus.on('navigation:activated', (data) => {
            this.eventBus.emit('workspace:ready', { activePlugin: data.id });
        });

        // Listen for doctrinal content loading
        this.eventBus.on('content:loaded', (data) => {
            this.loadDoctrinalContent(data);
        });

        // Listen for content loading errors
        this.eventBus.on('content:error', (data) => {
            this.showContentError(data);
        });
    }

    async loadView(viewName, options = {}) {
        this.currentView = viewName;
        // updateWorkspaceHeader removed as workspace header was removed

        try {
            // Show loading state
            this.showLoadingState();

            // Load view content based on view name
            let content;
            switch (viewName) {
                case 'dashboard':
                    content = await this.loadDashboardView();
                    break;
                default:
                    content = await this.loadDefaultView(viewName);
            }

            this.displayContent(content);
            this.loadedViews.set(viewName, content);

        } catch (error) {
            console.error(`Failed to load view ${viewName}:`, error);
            this.showErrorState(error);
        }
    }

    async loadDashboardView() {
        return getDashboardView();
    }




    async loadDefaultView(viewName) {
        return getUnknownModuleView(viewName);
    }

    // updateWorkspaceHeader method removed as workspace header was removed

    getViewTitle(viewName) {
        const titles = {
            dashboard: 'Dashboard',
            logistics: 'Logistics Planning',
            communications: 'Communications'
        };
        return titles[viewName] || viewName.charAt(0).toUpperCase() + viewName.slice(1);
    }

    showLoadingState() {
        const content = document.getElementById('workspace-content');
        if (content) {
            content.innerHTML = `
                <div class="h-full flex items-center justify-center">
                    <div class="text-center">
                        <i class="fas fa-spinner fa-spin text-4xl text-gray-400 mb-4"></i>
                        <p class="text-gray-400">Loading content...</p>
                    </div>
                </div>
            `;
        }
    }

    showErrorState(error) {
        const content = document.getElementById('workspace-content');
        if (content) {
            content.innerHTML = getErrorView(error.message);

            // Add retry functionality
            const retryBtn = document.getElementById('retry-btn');
            if (retryBtn) {
                retryBtn.addEventListener('click', () => {
                    this.loadView(this.currentView);
                });
            }
        }
    }

    displayContent(content) {
        const contentContainer = document.getElementById('workspace-content');
        if (contentContainer) {
            contentContainer.innerHTML = content;
        }
    }

    refreshCurrentView() {
        this.loadedViews.delete(this.currentView);
        this.loadView(this.currentView);
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.container.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }

    updateContent(data) {
        if (data.view === this.currentView) {
            this.displayContent(data.content);
        }
    }

    loadPluginContent(data) {
        // Update workspace content
        const contentArea = document.getElementById('workspace-content');
        if (contentArea && data.content) {
            contentArea.innerHTML = data.content;
        }

        // Update current view
        this.currentView = data.plugin.toLowerCase();

        console.log(`💼 Loaded plugin content: ${data.plugin}`);
    }

    loadDoctrinalContent(data) {
        // Update workspace content with doctrinal content
        const contentArea = document.getElementById('workspace-content');
        if (contentArea && data.content && data.content.doctrine) {
            contentArea.innerHTML = renderDoctrinalContent(data.content);

            // Route through plugin router when enabled (no legacy category checks)
            console.log('🔍 WorkspaceComponent.loadDoctrinalContent:', {
                category: data.category,
                module: data.module,
                useRouter: this.useRouter(),
                routerFlag: window?.__config?.USE_WORKSPACE_ROUTER
            });

            if (this.useRouter()) {
                console.log('✅ Router enabled, routing to initializers...');
                const ctx = {
                    timing: { detectBrowser, scheduleInitialize },
                    container: { assertContainers },
                    scripts: { executeEmbeddedScripts },
                    state: { setCurrentView, getCurrentView },
                    log: Log
                };
                try {
                    this.router.route(data, ctx);
                    console.log('✅ Router.route() completed');
                } catch (e) {
                    console.error('❌ Router error:', e);
                }
                return;
            } else {
                console.warn('⚠️ Router disabled, skipping initialization');
            }
        }

    }

    showContentError(data) {
        // Show error message in workspace
        const contentArea = document.getElementById('workspace-content');
        if (contentArea) {
            contentArea.innerHTML = getContentErrorView(data);
        }

        console.error(`❌ Content loading error: ${data.category}/${data.module} - ${data.error}`);
    }

    destroy() {
        // Clean up any resources
        this.loadedViews.clear();
    }
}