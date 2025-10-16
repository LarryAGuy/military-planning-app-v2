/**
 * JPP (Joint Planning Process) Plugin
 * Integrates all 7 JPP steps into the Military Planning App V2
 * Works with existing navigation configuration
 */

import { planningInitiationContent } from '../content/jpp/planning-initiation.js';

export class JPPPlugin {
    constructor() {
        this.id = 'jpp';
        this.name = 'Joint Planning Process (JPP)';
        this.version = '1.0.0';
        this.description = 'Complete Joint Planning Process framework with all 7 steps';
        this.initialized = false;
        this.currentStep = null;
    }

    async initialize() {
        if (this.initialized) return;

        console.log('🚀 Initializing JPP Plugin...');

        try {
            // Set up event listeners for content loading
            this.setupEventListeners();

            this.initialized = true;
            console.log('✅ JPP Plugin initialized successfully');

        } catch (error) {
            console.error('❌ JPP Plugin initialization failed:', error);
            throw error;
        }
    }

    setupEventListeners() {
        // Get EventBus from global API
        this.eventBus = window.MilitaryPlanningPluginAPI;

        if (this.eventBus) {
            // Listen for navigation events
            this.eventBus.on('navigation:activated', (data) => {
                if (data.category === 'jpp') {
                    console.log(`📋 JPP navigation activated: ${data.module}`);
                    this.handleJPPNavigation(data);
                }
            });

            // Listen for workspace ready events
            this.eventBus.on('workspace:ready', (data) => {
                if (data.category === 'jpp') {
                    console.log('📋 JPP workspace ready');
                }
            });
        }
    }

    handleJPPNavigation(data) {
        console.log(`📋 Handling JPP navigation: ${data.module}`);

        switch (data.module) {
            case 'planning-initiation':
                this.loadPlanningInitiation();
                break;
            case 'mission-analysis':
                this.showComingSoon('Step 2: Mission Analysis');
                break;
            case 'coa-development':
                this.showComingSoon('Step 3: COA Development');
                break;
            case 'coa-analysis':
                this.showComingSoon('Step 4: COA Analysis & Wargaming');
                break;
            case 'coa-comparison':
                this.showComingSoon('Step 5: COA Comparison');
                break;
            case 'coa-approval':
                this.showComingSoon('Step 6: COA Approval');
                break;
            case 'plan-development':
                this.showComingSoon('Step 7: Plan Development');
                break;
            case 'example':
                this.showComingSoon('JPP Examples');
                break;
            default:
                console.warn(`Unknown JPP module: ${data.module}`);
        }
    }

    async loadPlanningInitiation() {
        console.log('📋 Loading JPP Step 1: Planning Initiation...');

        try {
            const workspace = document.getElementById('workspace');
            if (!workspace) {
                throw new Error('Workspace element not found');
            }

            // Clear workspace
            workspace.innerHTML = '';

            // Create JPP Step 1 container
            const container = document.createElement('div');
            container.id = 'jpp-step-1-container';
            container.className = 'jpp-step-container';

            // Add the doctrinal content
            container.innerHTML = planningInitiationContent.doctrine;

            // Add Universal Button System navigation
            const navContainer = document.createElement('div');
            navContainer.id = 'universal-planning-initiation-nav';
            navContainer.className = 'universal-nav-container';
            container.appendChild(navContainer);

            // Add content area for dynamic loading
            const contentArea = document.createElement('div');
            contentArea.id = 'planning-initiation-content-area';
            contentArea.className = 'universal-content-area';
            container.appendChild(contentArea);

            // Add to workspace
            workspace.appendChild(container);

            // Initialize the Universal Button System
            await planningInitiationContent.initializeButtonSystem();

            console.log('✅ JPP Step 1 loaded successfully');

        } catch (error) {
            console.error('❌ Error loading JPP Step 1:', error);
            this.showError('Failed to load JPP Step 1: Planning Initiation', error.message);
        }
    }



    showComingSoon(stepName) {
        const workspace = document.getElementById('workspace');
        if (workspace) {
            workspace.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; color: #6b7280;">
                    <i class="fas fa-construction" style="font-size: 64px; margin-bottom: 24px; color: #3b82f6;"></i>
                    <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 12px; color: #d1d5db;">${stepName}</h2>
                    <p style="font-size: 16px; line-height: 1.5; margin-bottom: 24px;">This JPP step is under development.</p>
                    <div style="background-color: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; max-width: 500px; margin: 0 auto;">
                        <p style="color: #93c5fd; font-size: 14px; margin: 0;">
                            <i class="fas fa-info-circle" style="margin-right: 8px;"></i>
                            Currently available: Step 1 - Planning Initiation with complete echelon-specific modules
                        </p>
                    </div>
                </div>
            `;
        }
    }

    showError(title, message) {
        const workspace = document.getElementById('workspace');
        if (workspace) {
            workspace.innerHTML = `
                <div style="text-align: center; padding: 60px 20px; color: #6b7280;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 64px; margin-bottom: 24px; color: #ef4444;"></i>
                    <h2 style="font-size: 24px; font-weight: 600; margin-bottom: 12px; color: #d1d5db;">${title}</h2>
                    <div style="background-color: #1f2937; border: 1px solid #ef4444; border-radius: 8px; padding: 20px; max-width: 500px; margin: 0 auto;">
                        <p style="color: #fca5a5; font-size: 14px; margin: 0;">${message}</p>
                    </div>
                </div>
            `;
        }
    }

    // Plugin lifecycle methods
    async activate() {
        if (!this.initialized) {
            await this.initialize();
        }
        console.log('✅ JPP Plugin activated');
    }

    async deactivate() {
        console.log('⏸️ JPP Plugin deactivated');
    }

    async destroy() {
        this.initialized = false;
        console.log('🗑️ JPP Plugin destroyed');
    }
}

export default JPPPlugin;
