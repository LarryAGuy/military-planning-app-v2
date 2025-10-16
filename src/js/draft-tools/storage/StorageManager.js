/**
 * Storage Manager
 * Abstraction layer for draft storage with multiple backend support
 * Primary: IndexedDB, Fallback: File System API, Future: Microsoft Cloud
 *
 * @module StorageManager
 */

import { IndexedDBStorage } from './IndexedDBStorage.js';
import { FileSystemStorage } from './FileSystemStorage.js';
import { FileSystemAPIManager } from './FileSystemAPIManager.js';

export class StorageManager {
    constructor() {
        this.primaryStorage = null;
        this.fallbackStorage = null;
        this.activeStorage = null;
        this.storageType = null;
        this.initialized = false;
        this.fileSystemAPIManager = null;
    }

    /**
     * Initialize storage backends
     * Initializes IndexedDB (primary storage) and FileSystemAPIManager
     */
    async initialize() {
        if (this.initialized) {
            console.log('⚠️ StorageManager already initialized');
            return;
        }

        console.log('💾 Initializing StorageManager...');

        try {
            // Initialize IndexedDB (primary storage)
            try {
                this.primaryStorage = new IndexedDBStorage();
                await this.primaryStorage.initialize();
                this.activeStorage = this.primaryStorage;
                this.storageType = 'indexeddb';
                console.log('✅ IndexedDB storage initialized (primary)');
            } catch (error) {
                console.error('❌ IndexedDB initialization failed:', error);
                throw new Error('IndexedDB is required but failed to initialize');
            }

            // Initialize File System API Manager (for user-initiated file operations)
            try {
                this.fileSystemAPIManager = new FileSystemAPIManager();
                await this.fileSystemAPIManager.initialize();
                console.log('✅ FileSystemAPIManager initialized');
            } catch (error) {
                console.warn('⚠️ FileSystemAPIManager initialization failed:', error);
                // Non-fatal - continue without File System API support
            }

            this.initialized = true;
            console.log(`✅ StorageManager initialized (using ${this.storageType})`);

        } catch (error) {
            console.error('❌ Failed to initialize StorageManager:', error);
            throw error;
        }
    }

    /**
     * Save draft to storage
     * Only uses primary storage (IndexedDB) by default
     * File System API is opt-in only via explicit export
     */
    async saveDraft(draft) {
        this.ensureInitialized();

        try {
            await this.activeStorage.saveDraft(draft);
            return true;
        } catch (error) {
            console.error('❌ Failed to save draft:', error);
            throw error;
        }
    }

    /**
     * Load draft from storage
     */
    async loadDraft(draftId) {
        this.ensureInitialized();

        try {
            const draft = await this.activeStorage.loadDraft(draftId);
            return draft;
        } catch (error) {
            console.error('❌ Failed to load draft from primary storage:', error);
            
            // Try fallback storage
            if (this.fallbackStorage && this.fallbackStorage !== this.activeStorage) {
                console.log('🔄 Attempting fallback storage...');
                try {
                    const draft = await this.fallbackStorage.loadDraft(draftId);
                    return draft;
                } catch (fallbackError) {
                    console.error('❌ Fallback storage also failed:', fallbackError);
                }
            }
            
            throw error;
        }
    }

    /**
     * Delete draft from storage
     * Only deletes from primary storage (IndexedDB)
     */
    async deleteDraft(draftId) {
        this.ensureInitialized();

        try {
            await this.activeStorage.deleteDraft(draftId);
            return true;
        } catch (error) {
            console.error('❌ Failed to delete draft:', error);
            throw error;
        }
    }

    /**
     * List all drafts
     */
    async listDrafts(filter = {}) {
        this.ensureInitialized();

        try {
            const drafts = await this.activeStorage.listDrafts(filter);
            return drafts;
        } catch (error) {
            console.error('❌ Failed to list drafts:', error);
            
            // Try fallback storage
            if (this.fallbackStorage && this.fallbackStorage !== this.activeStorage) {
                console.log('🔄 Attempting fallback storage...');
                try {
                    const drafts = await this.fallbackStorage.listDrafts(filter);
                    return drafts;
                } catch (fallbackError) {
                    console.error('❌ Fallback storage also failed:', fallbackError);
                }
            }
            
            throw error;
        }
    }

    /**
     * Get storage statistics
     */
    async getStorageStats() {
        this.ensureInitialized();

        try {
            const stats = await this.activeStorage.getStorageStats();
            return {
                ...stats,
                storageType: this.storageType,
                hasFallback: !!this.fallbackStorage
            };
        } catch (error) {
            console.error('❌ Failed to get storage stats:', error);
            return {
                storageType: this.storageType,
                hasFallback: !!this.fallbackStorage,
                error: error.message
            };
        }
    }

    /**
     * Export draft to file
     */
    async exportDraftToFile(draft, filename) {
        this.ensureInitialized();

        try {
            const jsonData = JSON.stringify(draft, null, 2);
            const blob = new Blob([jsonData], { type: 'application/json' });
            
            // Create download link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename || `${draft.id}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log(`✅ Draft exported to file: ${filename}`);
            return true;
        } catch (error) {
            console.error('❌ Failed to export draft to file:', error);
            throw error;
        }
    }

    /**
     * Import draft from file
     */
    async importDraftFromFile(file) {
        this.ensureInitialized();

        try {
            const text = await file.text();
            const draft = JSON.parse(text);
            
            // Validate draft structure
            if (!draft.id || !draft.type || !draft.content) {
                throw new Error('Invalid draft file format');
            }

            // Save imported draft
            await this.saveDraft(draft);

            console.log(`✅ Draft imported from file: ${file.name}`);
            return draft;
        } catch (error) {
            console.error('❌ Failed to import draft from file:', error);
            throw error;
        }
    }

    /**
     * Clear all drafts (with confirmation)
     * Only clears from primary storage (IndexedDB)
     */
    async clearAllDrafts() {
        this.ensureInitialized();

        try {
            await this.activeStorage.clearAllDrafts();
            console.log('✅ All drafts cleared');
            return true;
        } catch (error) {
            console.error('❌ Failed to clear all drafts:', error);
            throw error;
        }
    }

    /**
     * Enable File System API storage (opt-in)
     * This will prompt the user for directory access
     */
    async enableFileSystemStorage() {
        if (this.fallbackStorage) {
            console.log('ℹ️ File System API storage already enabled');
            return true;
        }

        try {
            this.fallbackStorage = new FileSystemStorage();
            await this.fallbackStorage.initialize();
            console.log('✅ File System API storage enabled');
            return true;
        } catch (error) {
            console.error('❌ Failed to enable File System API storage:', error);
            return false;
        }
    }

    /**
     * Switch to fallback storage
     */
    async switchToFallback() {
        if (!this.fallbackStorage) {
            throw new Error('No fallback storage available. Call enableFileSystemStorage() first.');
        }

        console.log('🔄 Switching to fallback storage...');
        this.activeStorage = this.fallbackStorage;
        this.storageType = 'filesystem';
        console.log('✅ Switched to fallback storage');
    }

    /**
     * Ensure storage is initialized
     */
    ensureInitialized() {
        if (!this.initialized) {
            throw new Error('StorageManager not initialized');
        }
    }

    /**
     * Get storage type
     */
    getStorageType() {
        return this.storageType;
    }

    /**
     * Check if fallback is available
     */
    hasFallback() {
        return !!this.fallbackStorage;
    }

    /**
     * Check if File System API is supported
     */
    isFileSystemAPISupported() {
        return this.fileSystemAPIManager && this.fileSystemAPIManager.isSupported;
    }

    /**
     * Get File System API Manager
     */
    getFileSystemAPIManager() {
        return this.fileSystemAPIManager;
    }

    /**
     * Save draft to file system (user-initiated)
     * @param {Object} draft - Draft data
     * @param {string} filename - Optional custom filename
     * @returns {Promise<string|null>} - Saved filename or null if cancelled
     */
    async saveDraftToFileSystem(draft, filename = null) {
        this.ensureInitialized();

        if (!this.fileSystemAPIManager || !this.fileSystemAPIManager.isSupported) {
            throw new Error('File System API not supported');
        }

        try {
            const savedFilename = await this.fileSystemAPIManager.saveDraftToFileSystem(draft, filename);

            // Also save to IndexedDB as backup
            if (savedFilename) {
                await this.saveDraft(draft);
            }

            return savedFilename;
        } catch (error) {
            console.error('❌ Failed to save draft to file system:', error);
            throw error;
        }
    }

    /**
     * Load draft from file system (user-initiated)
     * @returns {Promise<Object|null>} - Draft data or null if cancelled
     */
    async loadDraftFromFileSystem() {
        this.ensureInitialized();

        if (!this.fileSystemAPIManager || !this.fileSystemAPIManager.isSupported) {
            throw new Error('File System API not supported');
        }

        try {
            const draft = await this.fileSystemAPIManager.loadDraftFromFileSystem();

            // Also save to IndexedDB as backup
            if (draft) {
                await this.saveDraft(draft);
            }

            return draft;
        } catch (error) {
            console.error('❌ Failed to load draft from file system:', error);
            throw error;
        }
    }

    /**
     * Request directory access for File System API
     * @param {boolean} forceNew - Force new directory selection
     * @returns {Promise<FileSystemDirectoryHandle|null>}
     */
    async requestDirectoryAccess(forceNew = false) {
        this.ensureInitialized();

        if (!this.fileSystemAPIManager || !this.fileSystemAPIManager.isSupported) {
            throw new Error('File System API not supported');
        }

        return await this.fileSystemAPIManager.requestDirectoryAccess(forceNew);
    }

    /**
     * Get current directory name for display
     * @returns {string}
     */
    getDirectoryName() {
        if (!this.fileSystemAPIManager) {
            return 'Not available';
        }
        return this.fileSystemAPIManager.getDirectoryName();
    }

    /**
     * Clear stored directory handle
     */
    async clearDirectoryHandle() {
        if (this.fileSystemAPIManager) {
            await this.fileSystemAPIManager.clearDirectoryHandle();
        }
    }
}

export default StorageManager;

