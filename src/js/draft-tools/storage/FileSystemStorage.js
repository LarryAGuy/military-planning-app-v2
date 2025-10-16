/**
 * File System API Storage Implementation
 * Fallback storage backend using File System Access API
 * Provides direct file system access for draft documents
 * 
 * @module FileSystemStorage
 */

export class FileSystemStorage {
    constructor() {
        this.directoryHandle = null;
        this.initialized = false;
        this.draftsCache = new Map();
    }

    /**
     * Initialize File System API storage
     */
    async initialize() {
        if (this.initialized) {
            console.log('⚠️ File System API already initialized');
            return;
        }

        // Check if File System Access API is available
        if (!('showDirectoryPicker' in window)) {
            throw new Error('File System Access API not supported');
        }

        console.log('📁 File System API storage available (requires user permission)');
        this.initialized = true;
    }

    /**
     * Request directory access from user
     */
    async requestDirectoryAccess() {
        try {
            this.directoryHandle = await window.showDirectoryPicker({
                mode: 'readwrite',
                startIn: 'documents'
            });
            console.log('✅ Directory access granted');
            return true;
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('ℹ️ User cancelled directory selection');
            } else {
                console.error('❌ Failed to get directory access:', error);
            }
            return false;
        }
    }

    /**
     * Ensure directory access
     */
    async ensureDirectoryAccess() {
        if (!this.directoryHandle) {
            const granted = await this.requestDirectoryAccess();
            if (!granted) {
                throw new Error('Directory access required');
            }
        }
    }

    /**
     * Save draft to file system
     */
    async saveDraft(draft) {
        this.ensureInitialized();
        await this.ensureDirectoryAccess();

        try {
            const filename = `${draft.id}.json`;
            const fileHandle = await this.directoryHandle.getFileHandle(filename, { create: true });
            const writable = await fileHandle.createWritable();
            
            const jsonData = JSON.stringify(draft, null, 2);
            await writable.write(jsonData);
            await writable.close();

            // Update cache
            this.draftsCache.set(draft.id, draft);

            console.log(`💾 Draft saved to file system: ${filename}`);
        } catch (error) {
            console.error('❌ Failed to save draft to file system:', error);
            throw error;
        }
    }

    /**
     * Load draft from file system
     */
    async loadDraft(draftId) {
        this.ensureInitialized();
        await this.ensureDirectoryAccess();

        try {
            const filename = `${draftId}.json`;
            const fileHandle = await this.directoryHandle.getFileHandle(filename);
            const file = await fileHandle.getFile();
            const text = await file.text();
            const draft = JSON.parse(text);

            // Update cache
            this.draftsCache.set(draftId, draft);

            console.log(`📂 Draft loaded from file system: ${filename}`);
            return draft;
        } catch (error) {
            if (error.name === 'NotFoundError') {
                throw new Error(`Draft not found: ${draftId}`);
            }
            console.error('❌ Failed to load draft from file system:', error);
            throw error;
        }
    }

    /**
     * Delete draft from file system
     */
    async deleteDraft(draftId) {
        this.ensureInitialized();
        await this.ensureDirectoryAccess();

        try {
            const filename = `${draftId}.json`;
            await this.directoryHandle.removeEntry(filename);

            // Remove from cache
            this.draftsCache.delete(draftId);

            console.log(`🗑️ Draft deleted from file system: ${filename}`);
        } catch (error) {
            if (error.name === 'NotFoundError') {
                console.warn(`⚠️ Draft file not found: ${draftId}`);
                return;
            }
            console.error('❌ Failed to delete draft from file system:', error);
            throw error;
        }
    }

    /**
     * List all drafts from file system
     */
    async listDrafts(filter = {}) {
        this.ensureInitialized();
        await this.ensureDirectoryAccess();

        try {
            const drafts = [];

            // Iterate through directory entries
            for await (const entry of this.directoryHandle.values()) {
                if (entry.kind === 'file' && entry.name.endsWith('.json')) {
                    try {
                        const fileHandle = await this.directoryHandle.getFileHandle(entry.name);
                        const file = await fileHandle.getFile();
                        const text = await file.text();
                        const draft = JSON.parse(text);

                        // Apply filters
                        if (filter.type && draft.type !== filter.type) continue;
                        if (filter.classification && draft.classification !== filter.classification) continue;
                        if (filter.status && draft.status !== filter.status) continue;

                        if (filter.startDate) {
                            const startDate = new Date(filter.startDate);
                            if (new Date(draft.created) < startDate) continue;
                        }

                        if (filter.endDate) {
                            const endDate = new Date(filter.endDate);
                            if (new Date(draft.created) > endDate) continue;
                        }

                        drafts.push(draft);
                        this.draftsCache.set(draft.id, draft);
                    } catch (error) {
                        console.warn(`⚠️ Failed to read draft file: ${entry.name}`, error);
                    }
                }
            }

            // Sort by modified date (newest first)
            drafts.sort((a, b) => new Date(b.modified) - new Date(a.modified));

            console.log(`📋 Listed ${drafts.length} drafts from file system`);
            return drafts;
        } catch (error) {
            console.error('❌ Failed to list drafts from file system:', error);
            throw error;
        }
    }

    /**
     * Get storage statistics
     */
    async getStorageStats() {
        this.ensureInitialized();

        try {
            if (!this.directoryHandle) {
                return {
                    draftCount: 0,
                    directoryAccess: false
                };
            }

            const drafts = await this.listDrafts();
            
            return {
                draftCount: drafts.length,
                directoryAccess: true,
                directoryName: this.directoryHandle.name
            };
        } catch (error) {
            console.error('❌ Failed to get storage stats:', error);
            return {
                draftCount: 0,
                directoryAccess: false,
                error: error.message
            };
        }
    }

    /**
     * Clear all drafts from file system
     */
    async clearAllDrafts() {
        this.ensureInitialized();
        await this.ensureDirectoryAccess();

        try {
            const entries = [];
            
            // Collect all JSON files
            for await (const entry of this.directoryHandle.values()) {
                if (entry.kind === 'file' && entry.name.endsWith('.json')) {
                    entries.push(entry.name);
                }
            }

            // Delete all files
            for (const filename of entries) {
                try {
                    await this.directoryHandle.removeEntry(filename);
                } catch (error) {
                    console.warn(`⚠️ Failed to delete file: ${filename}`, error);
                }
            }

            // Clear cache
            this.draftsCache.clear();

            console.log(`🗑️ Cleared ${entries.length} drafts from file system`);
        } catch (error) {
            console.error('❌ Failed to clear all drafts:', error);
            throw error;
        }
    }

    /**
     * Search drafts by text
     */
    async searchDrafts(searchText) {
        this.ensureInitialized();

        const allDrafts = await this.listDrafts();
        const searchLower = searchText.toLowerCase();

        return allDrafts.filter(draft => {
            // Search in metadata
            const titleMatch = draft.metadata?.title?.toLowerCase().includes(searchLower);
            const authorMatch = draft.metadata?.author?.toLowerCase().includes(searchLower);
            const unitMatch = draft.metadata?.unit?.toLowerCase().includes(searchLower);

            // Search in content
            const contentStr = JSON.stringify(draft.content).toLowerCase();
            const contentMatch = contentStr.includes(searchLower);

            return titleMatch || authorMatch || unitMatch || contentMatch;
        });
    }

    /**
     * Export directory handle for persistence
     */
    getDirectoryHandle() {
        return this.directoryHandle;
    }

    /**
     * Set directory handle (for restoring from persistence)
     */
    setDirectoryHandle(handle) {
        this.directoryHandle = handle;
    }

    /**
     * Ensure storage is initialized
     */
    ensureInitialized() {
        if (!this.initialized) {
            throw new Error('File System API storage not initialized');
        }
    }

    /**
     * Clear cache
     */
    clearCache() {
        this.draftsCache.clear();
        console.log('✅ File system cache cleared');
    }
}

export default FileSystemStorage;

