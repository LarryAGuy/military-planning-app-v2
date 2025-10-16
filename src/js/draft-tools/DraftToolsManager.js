/**
 * Draft Tools Manager
 * Central orchestrator for all draft planning tools (OPORD, MDMP, JPP)
 * Manages tool lifecycle, storage, and coordination
 * 
 * @module DraftToolsManager
 */

import { StorageManager } from './storage/StorageManager.js';
import { ExportManager } from './export/ExportManager.js';

export class DraftToolsManager {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.storageManager = null;
        this.exportManager = null;
        this.currentTool = null;
        this.currentDraft = null;
        this.autoSaveInterval = null;
        this.autoSaveDelay = 30000; // 30 seconds
        this.initialized = false;
    }

    /**
     * Initialize the Draft Tools Manager
     */
    async initialize() {
        if (this.initialized) {
            console.log('⚠️ DraftToolsManager already initialized');
            return;
        }

        console.log('📝 Initializing DraftToolsManager...');

        try {
            // Initialize storage manager
            this.storageManager = new StorageManager();
            await this.storageManager.initialize();

            // Initialize export manager
            this.exportManager = new ExportManager();
            await this.exportManager.initialize();

            // Setup event listeners
            this.setupEventListeners();

            // Setup auto-save
            this.setupAutoSave();

            this.initialized = true;
            console.log('✅ DraftToolsManager initialized successfully');

            // Emit initialization event
            this.eventBus.emit('draft-tools:initialized', {
                timestamp: new Date().toISOString()
            });

        } catch (error) {
            console.error('❌ Failed to initialize DraftToolsManager:', error);
            this.eventBus.emit('draft-tools:error', {
                error: error.message,
                context: 'initialization'
            });
            throw error;
        }
    }

    /**
     * Setup event listeners for draft tool operations
     */
    setupEventListeners() {
        // Draft creation
        this.eventBus.on('draft:create', (data) => this.handleCreateDraft(data));

        // Draft loading
        this.eventBus.on('draft:load', (data) => this.handleLoadDraft(data));

        // Draft saving
        this.eventBus.on('draft:save', (data) => this.handleSaveDraft(data));

        // Draft deletion
        this.eventBus.on('draft:delete', (data) => this.handleDeleteDraft(data));

        // Draft export
        this.eventBus.on('draft:export', (data) => this.handleExportDraft(data));

        // Draft update
        this.eventBus.on('draft:update', (data) => this.handleUpdateDraft(data));

        // List drafts
        this.eventBus.on('draft:list', (data) => this.handleListDrafts(data));

        console.log('📡 Draft Tools event listeners registered');
    }

    /**
     * Setup auto-save functionality
     */
    setupAutoSave() {
        // Clear existing interval if any
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
        }

        // Setup new auto-save interval
        this.autoSaveInterval = setInterval(() => {
            if (this.currentDraft && this.currentDraft.modified) {
                this.autoSaveDraft();
            }
        }, this.autoSaveDelay);

        console.log(`⏰ Auto-save enabled (${this.autoSaveDelay / 1000}s interval)`);
    }

    /**
     * Handle draft creation
     */
    async handleCreateDraft(data) {
        try {
            const { type, classification, metadata } = data;

            console.log(`📝 Creating new ${type} draft...`);

            // Create draft object
            const draft = {
                id: this.generateDraftId(),
                type: type,
                classification: classification || 'UNCLASSIFIED',
                metadata: {
                    title: metadata?.title || `New ${type.toUpperCase()}`,
                    author: metadata?.author || 'Unknown',
                    unit: metadata?.unit || '',
                    dtg: metadata?.dtg || this.generateDTG(),
                    ...metadata
                },
                content: this.getDefaultContent(type),
                created: new Date().toISOString(),
                modified: new Date().toISOString(),
                version: 1,
                status: 'draft'
            };

            // Set as current draft
            this.currentDraft = draft;
            this.currentTool = type;

            // Emit draft created event
            this.eventBus.emit('draft:created', {
                draft: draft,
                type: type
            });

            console.log(`✅ Draft created: ${draft.id}`);

            return draft;

        } catch (error) {
            console.error('❌ Failed to create draft:', error);
            this.eventBus.emit('draft:error', {
                error: error.message,
                context: 'create'
            });
            throw error;
        }
    }

    /**
     * Handle draft loading
     */
    async handleLoadDraft(data) {
        try {
            const { draftId } = data;

            console.log(`📂 Loading draft: ${draftId}...`);

            // Load draft from storage
            const draft = await this.storageManager.loadDraft(draftId);

            if (!draft) {
                throw new Error(`Draft not found: ${draftId}`);
            }

            // Set as current draft
            this.currentDraft = draft;
            this.currentTool = draft.type;

            // Emit draft loaded event
            this.eventBus.emit('draft:loaded', {
                draft: draft
            });

            console.log(`✅ Draft loaded: ${draft.id}`);

            return draft;

        } catch (error) {
            console.error('❌ Failed to load draft:', error);
            this.eventBus.emit('draft:error', {
                error: error.message,
                context: 'load'
            });
            throw error;
        }
    }

    /**
     * Handle draft saving
     */
    async handleSaveDraft(data) {
        try {
            const draft = data.draft || this.currentDraft;

            if (!draft) {
                throw new Error('No draft to save');
            }

            console.log(`💾 Saving draft: ${draft.id}...`);

            // Update modified timestamp
            draft.modified = new Date().toISOString();
            draft.version += 1;

            // Save to storage
            await this.storageManager.saveDraft(draft);

            // Update current draft
            if (this.currentDraft && this.currentDraft.id === draft.id) {
                this.currentDraft = draft;
                this.currentDraft.modified = false;
            }

            // Emit draft saved event
            this.eventBus.emit('draft:saved', {
                draft: draft
            });

            console.log(`✅ Draft saved: ${draft.id} (v${draft.version})`);

            return draft;

        } catch (error) {
            console.error('❌ Failed to save draft:', error);
            this.eventBus.emit('draft:error', {
                error: error.message,
                context: 'save'
            });
            throw error;
        }
    }

    /**
     * Auto-save current draft
     */
    async autoSaveDraft() {
        if (!this.currentDraft) return;

        try {
            console.log(`⏰ Auto-saving draft: ${this.currentDraft.id}...`);
            await this.handleSaveDraft({ draft: this.currentDraft });
        } catch (error) {
            console.error('❌ Auto-save failed:', error);
        }
    }

    /**
     * Handle draft deletion
     */
    async handleDeleteDraft(data) {
        try {
            const { draftId } = data;

            console.log(`🗑️ Deleting draft: ${draftId}...`);

            // Delete from storage
            await this.storageManager.deleteDraft(draftId);

            // Clear current draft if it's the one being deleted
            if (this.currentDraft && this.currentDraft.id === draftId) {
                this.currentDraft = null;
                this.currentTool = null;
            }

            // Emit draft deleted event
            this.eventBus.emit('draft:deleted', {
                draftId: draftId
            });

            console.log(`✅ Draft deleted: ${draftId}`);

        } catch (error) {
            console.error('❌ Failed to delete draft:', error);
            throw error;
        }
    }

    /**
     * Generate unique draft ID
     */
    generateDraftId() {
        return `draft-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Generate Date-Time Group (DTG)
     */
    generateDTG() {
        const now = new Date();
        const day = String(now.getUTCDate()).padStart(2, '0');
        const hours = String(now.getUTCHours()).padStart(2, '0');
        const minutes = String(now.getUTCMinutes()).padStart(2, '0');
        const month = now.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' }).toUpperCase();
        const year = now.getUTCFullYear();
        
        return `${day}${hours}${minutes}Z ${month} ${year}`;
    }

    /**
     * Get default content structure for draft type
     */
    getDefaultContent(type) {
        switch (type) {
            case 'opord':
                return {
                    situation: {},
                    mission: {},
                    execution: {},
                    sustainment: {},
                    commandControl: {}
                };
            case 'mdmp':
                return {
                    step1: {},
                    step2: {},
                    step3: {},
                    step4: {},
                    step5: {},
                    step6: {},
                    step7: {}
                };
            case 'jpp':
                return {
                    planningInitiation: {},
                    missionAnalysis: {},
                    coaDevelopment: {},
                    coaAnalysis: {},
                    coaComparison: {},
                    coaApproval: {},
                    planDevelopment: {}
                };
            default:
                return {};
        }
    }

    /**
     * Cleanup and destroy manager
     */
    destroy() {
        console.log('🧹 Destroying DraftToolsManager...');

        // Clear auto-save interval
        if (this.autoSaveInterval) {
            clearInterval(this.autoSaveInterval);
            this.autoSaveInterval = null;
        }

        // Clear current draft
        this.currentDraft = null;
        this.currentTool = null;

        this.initialized = false;
        console.log('✅ DraftToolsManager destroyed');
    }
}

export default DraftToolsManager;

