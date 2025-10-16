import { NavigationComponent } from '../components/NavigationComponent.js';
import { WorkspaceComponent } from '../components/WorkspaceComponent.js';
import { FooterComponent } from '../components/FooterComponent.js';
import { RightSidebarComponent } from '../components/RightSidebarComponent.js';
import { TimeReferenceComponent } from '../components/TimeReferenceComponent.js';
import { PluginManager } from './PluginManager.js';
import { EventBus } from '../utils/EventBus.js';

export class AppCore {
    constructor() {
        this.components = new Map();
        this.eventBus = new EventBus();
        this.pluginManager = new PluginManager(this.eventBus);
        this.state = {
            currentView: 'dashboard',
            user: null,
            classification: 'UNCLASSIFIED'
        };
    }

    async initialize() {
        console.log('🔧 Initializing AppCore...');

        // Initialize event bus
        this.setupEventListeners();

        // Initialize components
        await this.initializeComponents();

        // Initialize plugin manager
        await this.pluginManager.initialize();

        // Set initial state
        this.setState({ initialized: true });

        console.log('✅ AppCore initialized');
    }

    async initializeComponents() {
        const componentConfigs = [
            { name: 'navigation', class: NavigationComponent, container: '#sidebar' },
            { name: 'timeReference', class: TimeReferenceComponent, container: null }, // Creates its own container
            { name: 'workspace', class: WorkspaceComponent, container: '#workspace' },
            { name: 'rightSidebar', class: RightSidebarComponent, container: '#right-sidebar' },
            { name: 'footer', class: FooterComponent, container: '#main-footer' }
        ];

        for (const config of componentConfigs) {
            try {
                // TimeReferenceComponent only needs eventBus, others need container + eventBus
                const component = config.container
                    ? new config.class(config.container, this.eventBus)
                    : new config.class(this.eventBus);
                await component.initialize();
                this.components.set(config.name, component);
            } catch (error) {
                console.error(`Failed to initialize ${config.name}:`, error);
            }
        }
    }

    setupEventListeners() {
        this.eventBus.on('navigation:change', this.handleNavigationChange.bind(this));
        this.eventBus.on('state:update', this.handleStateUpdate.bind(this));
        this.eventBus.on('error:critical', this.handleCriticalError.bind(this));
    }

    handleNavigationChange(data) {
        this.setState({ currentView: data.view });
        this.components.get('workspace')?.loadView(data.view);
    }

    handleStateUpdate(newState) {
        this.setState(newState);
    }

    handleCriticalError(error) {
        console.error('Critical error:', error);
        this.eventBus.emit('ui:show-error', { error, critical: true });
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.eventBus.emit('state:changed', this.state);
    }



    getState() {
        return { ...this.state };
    }
}