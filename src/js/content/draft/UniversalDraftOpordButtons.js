/**
 * Universal Draft OPORD Buttons
 * Initializes the OpordDraftTool component for interactive OPORD creation
 */

import { OpordDraftTool } from '../../draft-tools/opord/OpordDraftTool.js';
import { DraftToolsManager } from '../../draft-tools/DraftToolsManager.js';

export class UniversalDraftOpordButtons {
    constructor() {
        this.opordTool = null;
        this.eventBus = null;
        this.draftManager = null;
        this.initialized = false;
    }

    /**
     * Get the global EventBus from AppCore
     */
    async getGlobalEventBus() {
        // Try to get EventBus from global app instance
        if (window.MilitaryPlanningApp?.core?.eventBus) {
            console.log('✅ Using global EventBus from AppCore');
            return window.MilitaryPlanningApp.core.eventBus;
        }

        // Fallback: create a new EventBus (should not happen in production)
        console.warn('⚠️ Global EventBus not found, creating local instance');
        const { EventBus } = await import('../../utils/EventBus.js');
        return new EventBus();
    }

    /**
     * Get or create DraftToolsManager instance
     */
    async getDraftManager(eventBus) {
        // Check if DraftToolsManager already exists globally
        if (window.MilitaryPlanningApp?.draftManager) {
            console.log('✅ Using existing global DraftToolsManager');
            return window.MilitaryPlanningApp.draftManager;
        }

        // Create new DraftToolsManager
        console.log('🔧 Creating new DraftToolsManager...');
        const draftManager = new DraftToolsManager(eventBus);
        await draftManager.initialize();

        // Store globally for reuse
        if (window.MilitaryPlanningApp) {
            window.MilitaryPlanningApp.draftManager = draftManager;
        }

        return draftManager;
    }

    async initialize() {
        if (this.initialized) {
            console.log('⚠️ UniversalDraftOpordButtons already initialized');
            return true;
        }

        try {
            console.log('🔧 Initializing UniversalDraftOpordButtons...');

            // Get the content container
            const container = document.getElementById('draft-opord-content-area');
            if (!container) {
                console.error('❌ draft-opord-content-area container not found');
                return false;
            }

            // Get global EventBus
            this.eventBus = await this.getGlobalEventBus();

            // Get or create DraftToolsManager
            this.draftManager = await this.getDraftManager(this.eventBus);

            // Clear the placeholder content
            container.innerHTML = '';

            // Initialize OpordDraftTool with correct parameter order: (eventBus, draftManager)
            console.log('📝 Creating OpordDraftTool instance...');
            this.opordTool = new OpordDraftTool(this.eventBus, this.draftManager);
            await this.opordTool.initialize(container);

            this.initialized = true;
            console.log('✅ UniversalDraftOpordButtons initialized successfully');

            return true;
        } catch (error) {
            console.error('❌ Failed to initialize UniversalDraftOpordButtons:', error);
            console.error('Error details:', error.stack);
            return false;
        }
    }

    cleanup() {
        if (this.opordTool) {
            this.opordTool.cleanup?.();
            this.opordTool = null;
        }
        this.initialized = false;
    }
}

