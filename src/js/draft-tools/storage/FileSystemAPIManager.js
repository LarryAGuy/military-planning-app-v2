/**
 * File System API Manager
 * Manages File System Access API operations with persistent directory handling
 * Stores directory handles in IndexedDB for cross-session persistence
 * 
 * @module FileSystemAPIManager
 */

export class FileSystemAPIManager {
    constructor() {
        this.dbName = 'MilitaryPlanningFileSystem';
        this.dbVersion = 1;
        this.db = null;
        this.storeName = 'fileSystemSettings';
        this.initialized = false;
        this.directoryHandle = null;
        this.isSupported = this.checkSupport();
    }

    /**
     * Check if File System Access API is supported
     */
    checkSupport() {
        return 'showDirectoryPicker' in window 
            && 'showSaveFilePicker' in window 
            && 'showOpenFilePicker' in window;
    }

    /**
     * Initialize IndexedDB for storing directory handles
     */
    async initialize() {
        if (this.initialized) {
            console.log('⚠️ FileSystemAPIManager already initialized');
            return;
        }

        if (!this.isSupported) {
            console.warn('⚠️ File System Access API not supported in this browser');
            return;
        }

        return new Promise((resolve, reject) => {
            console.log('📁 Initializing FileSystemAPIManager...');

            const request = indexedDB.open(this.dbName, this.dbVersion);

            request.onerror = () => {
                reject(new Error(`IndexedDB error: ${request.error}`));
            };

            request.onsuccess = () => {
                this.db = request.result;
                this.initialized = true;
                console.log('✅ FileSystemAPIManager initialized');
                
                // Try to restore saved directory handle
                this.restoreDirectoryHandle().then(() => {
                    resolve();
                }).catch((error) => {
                    console.warn('⚠️ Could not restore directory handle:', error);
                    resolve(); // Still resolve, just without restored handle
                });
            };

            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                // Create object store for file system settings
                if (!db.objectStoreNames.contains(this.storeName)) {
                    const objectStore = db.createObjectStore(this.storeName, { keyPath: 'id' });
                    
                    // Create indexes
                    objectStore.createIndex('lastUsed', 'lastUsed', { unique: false });
                    objectStore.createIndex('permissions', 'permissions', { unique: false });

                    console.log('📦 FileSystem settings object store created');
                }
            };
        });
    }

    /**
     * Ensure manager is initialized
     */
    ensureInitialized() {
        if (!this.initialized) {
            throw new Error('FileSystemAPIManager not initialized');
        }
    }

    /**
     * Request directory access from user
     * @param {boolean} forceNew - Force new directory selection even if one exists
     * @returns {Promise<FileSystemDirectoryHandle|null>}
     */
    async requestDirectoryAccess(forceNew = false) {
        if (!this.isSupported) {
            throw new Error('File System Access API not supported');
        }

        // Use existing handle if available and not forcing new
        if (this.directoryHandle && !forceNew) {
            const hasPermission = await this.verifyPermissions(this.directoryHandle);
            if (hasPermission) {
                return this.directoryHandle;
            }
        }

        try {
            this.directoryHandle = await window.showDirectoryPicker({
                mode: 'readwrite',
                startIn: 'documents'
            });

            // Save directory handle to IndexedDB
            await this.saveDirectoryHandle(this.directoryHandle);

            console.log('✅ Directory access granted');
            return this.directoryHandle;
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('ℹ️ User cancelled directory selection');
                return null;
            } else {
                console.error('❌ Failed to get directory access:', error);
                throw error;
            }
        }
    }

    /**
     * Verify permissions for directory handle
     * @param {FileSystemDirectoryHandle} handle
     * @returns {Promise<boolean>}
     */
    async verifyPermissions(handle) {
        if (!handle) return false;

        const options = { mode: 'readwrite' };

        try {
            // Check current permission
            if ((await handle.queryPermission(options)) === 'granted') {
                return true;
            }

            // Request permission
            if ((await handle.requestPermission(options)) === 'granted') {
                return true;
            }

            return false;
        } catch (error) {
            console.error('❌ Permission verification failed:', error);
            return false;
        }
    }

    /**
     * Save directory handle to IndexedDB
     * @param {FileSystemDirectoryHandle} handle
     */
    async saveDirectoryHandle(handle) {
        this.ensureInitialized();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);

            const data = {
                id: 'opord-directory-handle',
                directoryHandle: handle,
                directoryName: handle.name,
                lastUsed: Date.now(),
                permissions: 'granted'
            };

            const request = objectStore.put(data);

            request.onsuccess = () => {
                console.log('💾 Directory handle saved to IndexedDB');
                resolve();
            };

            request.onerror = () => {
                reject(new Error(`Failed to save directory handle: ${request.error}`));
            };
        });
    }

    /**
     * Restore directory handle from IndexedDB
     * @returns {Promise<FileSystemDirectoryHandle|null>}
     */
    async restoreDirectoryHandle() {
        this.ensureInitialized();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readonly');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.get('opord-directory-handle');

            request.onsuccess = async () => {
                if (request.result && request.result.directoryHandle) {
                    const handle = request.result.directoryHandle;
                    
                    // Verify permissions are still valid
                    const hasPermission = await this.verifyPermissions(handle);
                    if (hasPermission) {
                        this.directoryHandle = handle;
                        console.log(`📂 Directory handle restored: ${handle.name}`);
                        resolve(handle);
                    } else {
                        console.warn('⚠️ Stored directory handle has no permissions');
                        resolve(null);
                    }
                } else {
                    console.log('ℹ️ No stored directory handle found');
                    resolve(null);
                }
            };

            request.onerror = () => {
                reject(new Error(`Failed to restore directory handle: ${request.error}`));
            };
        });
    }

    /**
     * Get current directory handle (request if not available)
     * @returns {Promise<FileSystemDirectoryHandle|null>}
     */
    async getDirectoryHandle() {
        if (this.directoryHandle) {
            const hasPermission = await this.verifyPermissions(this.directoryHandle);
            if (hasPermission) {
                return this.directoryHandle;
            }
        }

        // No valid handle, request new one
        return await this.requestDirectoryAccess();
    }

    /**
     * Get current directory name for display
     * @returns {string}
     */
    getDirectoryName() {
        return this.directoryHandle ? this.directoryHandle.name : 'Not selected';
    }

    /**
     * Save draft to file system
     * @param {Object} draft - Draft data
     * @param {string} filename - Optional custom filename
     * @returns {Promise<string>} - Saved filename
     */
    async saveDraftToFileSystem(draft, filename = null) {
        if (!this.isSupported) {
            throw new Error('File System Access API not supported');
        }

        try {
            // Generate filename if not provided
            if (!filename) {
                const title = draft.title || 'Untitled';
                const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
                filename = `OPORD_Draft_${title}_${timestamp}.json`;
            }

            // Ensure .json extension
            if (!filename.endsWith('.json')) {
                filename += '.json';
            }

            // Use showSaveFilePicker for better UX
            const options = {
                suggestedName: filename,
                types: [{
                    description: 'OPORD Draft JSON',
                    accept: { 'application/json': ['.json'] }
                }]
            };

            // If we have a directory handle, use it as startIn
            if (this.directoryHandle) {
                options.startIn = this.directoryHandle;
            } else {
                options.startIn = 'documents';
            }

            const fileHandle = await window.showSaveFilePicker(options);
            
            // Save the parent directory for future use
            // Note: We can't directly get parent from fileHandle, so we'll use the directory picker next time
            
            const writable = await fileHandle.createWritable();
            const jsonData = JSON.stringify(draft, null, 2);
            await writable.write(jsonData);
            await writable.close();

            console.log(`💾 Draft saved to file system: ${fileHandle.name}`);
            return fileHandle.name;
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('ℹ️ User cancelled file save');
                return null;
            }
            console.error('❌ Failed to save draft to file system:', error);
            throw error;
        }
    }

    /**
     * Load draft from file system
     * @returns {Promise<Object|null>} - Draft data or null if cancelled
     */
    async loadDraftFromFileSystem() {
        if (!this.isSupported) {
            throw new Error('File System Access API not supported');
        }

        try {
            const options = {
                types: [{
                    description: 'OPORD Draft JSON',
                    accept: { 'application/json': ['.json'] }
                }],
                multiple: false
            };

            // If we have a directory handle, use it as startIn
            if (this.directoryHandle) {
                options.startIn = this.directoryHandle;
            } else {
                options.startIn = 'documents';
            }

            const [fileHandle] = await window.showOpenFilePicker(options);
            const file = await fileHandle.getFile();
            const contents = await file.text();
            const draft = JSON.parse(contents);

            console.log(`📂 Draft loaded from file system: ${file.name}`);
            return draft;
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('ℹ️ User cancelled file selection');
                return null;
            }
            console.error('❌ Failed to load draft from file system:', error);
            throw error;
        }
    }

    /**
     * Clear stored directory handle
     */
    async clearDirectoryHandle() {
        this.ensureInitialized();

        return new Promise((resolve, reject) => {
            const transaction = this.db.transaction([this.storeName], 'readwrite');
            const objectStore = transaction.objectStore(this.storeName);
            const request = objectStore.delete('opord-directory-handle');

            request.onsuccess = () => {
                this.directoryHandle = null;
                console.log('🗑️ Directory handle cleared');
                resolve();
            };

            request.onerror = () => {
                reject(new Error(`Failed to clear directory handle: ${request.error}`));
            };
        });
    }
}

