/**
 * IndexedDB Storage Implementation
 * Primary storage backend using browser IndexedDB
 * Provides persistent local storage for draft documents
 * 
 * @module IndexedDBStorage
 */

export class IndexedDBStorage {
    constructor() {
        this.dbName = 'MilitaryPlanningDrafts';
        this.dbVersion = 1;
        this.db = null;
        this.storeName = 'drafts';
        this.initialized = false;
    }

    /**
     * Initialize IndexedDB database
     */
    async initialize() {
        if (this.initialized) {
            console.log('⚠️ IndexedDB already initialized');
            return;
        }

        return new Promise((resolve, reject) => {
            // Check if IndexedDB is available
            if (!window.indexedDB) {
                reject(new Error('IndexedDB not supported'));
                return;
            }

            console.log('💾 Initializing IndexedDB...');

            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => {
                reject(new Error(`IndexedDB error: ${request.error}`));
            };

            request.onsuccess = () => {
                this.db = request.result;
                this.initialized = true;
                console.log('✅ IndexedDB initialized');
                resolve();
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Create object store if it doesn't exist
                if (!db.objectStoreNames.contains(this.storeName)) {
                    const objectStore = db.createObjectStore(this.storeName, { keyPath: 'id' });
                    
                    // Create indexes
                    objectStore.createIndex('type', 'type', { unique: false });
                    objectStore.createIndex('classification', 'classification', { unique: false });
                    objectStore.createIndex('created', 'created', { unique: false });
                    objectStore.createIndex('modified', 'modified', { unique: false });
                    objectStore.createIndex('status', 'status', { unique: false });

                    console.log('📦 IndexedDB object store created');
                }
            };
        });
    }

    /**
     * Save draft to IndexedDB
     */
    async saveDraft(draft) {
        this.ensureInitialized();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.put(draft);

            request.onsuccess = () => {
                console.log(`💾 Draft saved to IndexedDB: ${draft.id}`);
                resolve();
            };

            request.onerror = () => {
                reject(new Error(`Failed to save draft: ${request.error}`));
            };
        });
    }

    /**
     * Load draft from IndexedDB
     */
    async loadDraft(draftId) {
        this.ensureInitialized();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.get(draftId);

            request.onsuccess = () => {
                if (request.result) {
                    console.log(`📂 Draft loaded from IndexedDB: ${draftId}`);
                    resolve(request.result);
                } else {
                    reject(new Error(`Draft not found: ${draftId}`));
                }
            };

            request.onerror = () => {
                reject(new Error(`Failed to load draft: ${request.error}`));
            };
        });
    }

    /**
     * Delete draft from IndexedDB
     */
    async deleteDraft(draftId) {
        this.ensureInitialized();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.delete(draftId);

            request.onsuccess = () => {
                console.log(`🗑️ Draft deleted from IndexedDB: ${draftId}`);
                resolve();
            };

            request.onerror = () => {
                reject(new Error(`Failed to delete draft: ${request.error}`));
            };
        });
    }

    /**
     * List all drafts with optional filtering
     */
    async listDrafts(filter = {}) {
        this.ensureInitialized();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            
            let request;
            
            // Use index if filtering by specific field
            if (filter.type) {
                const index = objectStore.index('type');
                request = index.getAll(filter.type);
            } else if (filter.classification) {
                const index = objectStore.index('classification');
                request = index.getAll(filter.classification);
            } else if (filter.status) {
                const index = objectStore.index('status');
                request = index.getAll(filter.status);
            } else {
                request = objectStore.getAll();
            }

            request.onsuccess = () => {
                let drafts = request.result;

                // Apply additional filters
                if (filter.startDate) {
                    const startDate = new Date(filter.startDate);
                    drafts = drafts.filter(d => new Date(d.created) >= startDate);
                }

                if (filter.endDate) {
                    const endDate = new Date(filter.endDate);
                    drafts = drafts.filter(d => new Date(d.created) <= endDate);
                }

                // Sort by modified date (newest first)
                drafts.sort((a, b) => new Date(b.modified) - new Date(a.modified));

                console.log(`📋 Listed ${drafts.length} drafts from IndexedDB`);
                resolve(drafts);
            };

            request.onerror = () => {
                reject(new Error(`Failed to list drafts: ${request.error}`));
            };
        });
    }

    /**
     * Get storage statistics
     */
    async getStorageStats() {
        this.ensureInitialized();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const countRequest = objectStore.count();

            countRequest.onsuccess = async () => {
                const count = countRequest.result;
                
                // Get storage estimate if available
                let storageEstimate = null;
                if (navigator.storage && navigator.storage.estimate) {
                    try {
                        storageEstimate = await navigator.storage.estimate();
                    } catch (error) {
                        console.warn('⚠️ Failed to get storage estimate:', error);
                    }
                }

                resolve({
                    draftCount: count,
                    storageUsed: storageEstimate?.usage || null,
                    storageQuota: storageEstimate?.quota || null,
                    storagePercent: storageEstimate ? 
                        ((storageEstimate.usage / storageEstimate.quota) * 100).toFixed(2) : null
                });
            };

            countRequest.onerror = () => {
                reject(new Error(`Failed to get storage stats: ${countRequest.error}`));
            };
        });
    }

    /**
     * Clear all drafts
     */
    async clearAllDrafts() {
        this.ensureInitialized();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.clear();

            request.onsuccess = () => {
                console.log('🗑️ All drafts cleared from IndexedDB');
                resolve();
            };

            request.onerror = () => {
                reject(new Error(`Failed to clear drafts: ${request.error}`));
            };
        });
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

            // Search in content (basic string search)
            const contentStr = JSON.stringify(draft.content).toLowerCase();
            const contentMatch = contentStr.includes(searchLower);

            return titleMatch || authorMatch || unitMatch || contentMatch;
        });
    }

    /**
     * Ensure database is initialized
     */
    ensureInitialized() {
        if (!this.initialized) {
            throw new Error('IndexedDB not initialized');
        }
    }

    /**
     * Close database connection
     */
    close() {
        if (this.db) {
            this.db.close();
            this.db = null;
            this.initialized = false;
            console.log('✅ IndexedDB connection closed');
        }
    }
}

export default IndexedDBStorage;

