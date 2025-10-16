// Ensure global config (e.g., USE_WORKSPACE_ROUTER) is set before app initializes
import './config/appConfig.js';

import { AppCore } from './modules/AppCore.js';
import { PluginManager } from './modules/PluginManager.js';
import { WebhookManager } from './modules/WebhookManager.js';
import { SecurityManager } from './modules/SecurityManager.js';

class MilitaryPlanningApp {
    constructor() {
        this.core = null;
        this.pluginManager = null;
        this.webhookManager = null;
        this.securityManager = null;
        this.initialized = false;
    }

    async initialize() {
        try {
            console.log('🚀 Initializing Military Planning App V2...');

            // Initialize security first
            this.securityManager = new SecurityManager();
            await this.securityManager.initialize();

            // Initialize core application (includes plugin system)
            this.core = new AppCore();
            await this.core.initialize();

            // Reference the plugin manager from core
            this.pluginManager = this.core.pluginManager;

            // Initialize webhook system
            this.webhookManager = new WebhookManager();
            await this.webhookManager.initialize();

            this.initialized = true;
            console.log('✅ Application initialized successfully');

        } catch (error) {
            console.error('❌ Application initialization failed:', error);
            this.handleInitializationError(error);
        }
    }

    handleInitializationError(error) {
        const errorContainer = document.createElement('div');
        errorContainer.className = 'fixed inset-0 bg-red-900 text-white p-8 z-50';
        errorContainer.innerHTML = `
            <h1 class="text-2xl font-bold mb-4">Initialization Error</h1>
            <p class="mb-4">Failed to initialize Military Planning App V2</p>
            <pre class="bg-red-800 p-4 rounded">${error.message}</pre>
        `;
        document.body.appendChild(errorContainer);
    }
}

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    const app = new MilitaryPlanningApp();
    await app.initialize();

    // Make app globally available for debugging
    window.MilitaryPlanningApp = app;
});