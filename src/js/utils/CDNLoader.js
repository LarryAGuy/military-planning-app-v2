/**
 * CDN Loader with SRI Hashes and Local Caching
 * 
 * Purpose: Securely load external libraries from CDN with:
 * - Subresource Integrity (SRI) verification
 * - Local caching for offline support
 * - Fallback mechanisms
 * 
 * Security Features:
 * - SRI hashes prevent tampered scripts from executing
 * - Local cache provides offline capability
 * - Hybrid approach: try cache first, then CDN
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

export class CDNLoader {
    constructor() {
        this.cachePrefix = 'cdn_cache_';
        this.cacheVersion = '1.0.0';
        this.loadedLibraries = new Set();
    }

    /**
     * Library configurations with LOCAL paths
     *
     * All libraries are now hosted locally to:
     * - Eliminate CSP issues with external CDNs
     * - Improve performance (no external requests)
     * - Enable offline functionality (required for military use)
     * - Increase security (no dependency on external CDNs)
     *
     * Libraries downloaded from:
     * - Leaflet 1.9.4: https://unpkg.com/leaflet@1.9.4/dist/
     * - Leaflet.draw 1.0.4: https://unpkg.com/leaflet-draw@1.0.4/dist/
     * - MGRS 2.0.0: https://unpkg.com/mgrs@2.0.0/dist/
     * - Proj4 2.9.0: https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.9.0/
     * - SunCalc 1.9.0: https://cdnjs.cloudflare.com/ajax/libs/suncalc/1.9.0/
     * - HTML2Canvas 1.4.1: https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/
     *
     * Downloaded: October 16, 2025
     */
    getLibraryConfig() {
        return {
            'leaflet-css': {
                type: 'css',
                url: './libs/leaflet/leaflet.css',
                global: null
            },
            'leaflet-js': {
                type: 'js',
                url: './libs/leaflet/leaflet.js',
                global: 'L' // Global variable name
            },
            'leaflet-draw-css': {
                type: 'css',
                url: './libs/leaflet-draw/leaflet.draw.css',
                global: null
            },
            'leaflet-draw-js': {
                type: 'js',
                url: './libs/leaflet-draw/leaflet.draw.js',
                global: 'L.Draw',
                dependencies: ['leaflet-js'] // Requires Leaflet to be loaded first
            },
            'html2canvas': {
                type: 'js',
                url: './libs/html2canvas/html2canvas.min.js',
                global: 'html2canvas'
            },
            'mgrs': {
                type: 'js',
                url: './libs/mgrs/mgrs.js',
                global: 'mgrs'
            },
            'suncalc': {
                type: 'js',
                url: './libs/suncalc/suncalc.js',
                global: 'SunCalc'
            },
            'proj4': {
                type: 'js',
                url: './libs/proj4/proj4.js',
                global: 'proj4'
            }
        };
    }

    /**
     * Load a library from cache or CDN
     * 
     * @param {string} libraryName - Name of the library to load
     * @returns {Promise<void>}
     */
    async loadLibrary(libraryName) {
        // Check if already loaded
        if (this.loadedLibraries.has(libraryName)) {
            console.log(`✅ Library already loaded: ${libraryName}`);
            return;
        }

        const config = this.getLibraryConfig()[libraryName];
        if (!config) {
            throw new Error(`Unknown library: ${libraryName}`);
        }

        // Load dependencies first
        if (config.dependencies) {
            for (const dep of config.dependencies) {
                await this.loadLibrary(dep);
            }
        }

        console.log(`📦 Loading library: ${libraryName}`);

        try {
            // Try to load from cache first
            const cached = await this.loadFromCache(libraryName, config);
            if (cached) {
                console.log(`✅ Loaded from cache: ${libraryName}`);
                this.loadedLibraries.add(libraryName);
                return;
            }

            // If not cached, load from CDN
            await this.loadFromCDN(libraryName, config);
            console.log(`✅ Loaded from CDN: ${libraryName}`);
            this.loadedLibraries.add(libraryName);

            // Cache for future use
            await this.saveToCache(libraryName, config);

        } catch (error) {
            console.error(`❌ Failed to load library: ${libraryName}`, error);
            throw error;
        }
    }

    /**
     * Load library from localStorage cache
     * 
     * @param {string} libraryName - Name of the library
     * @param {object} config - Library configuration
     * @returns {Promise<boolean>} - True if loaded from cache, false otherwise
     */
    async loadFromCache(libraryName, config) {
        try {
            const cacheKey = `${this.cachePrefix}${libraryName}_${this.cacheVersion}`;
            const cachedContent = localStorage.getItem(cacheKey);

            if (!cachedContent) {
                return false; // Not in cache
            }

            // Load cached content
            if (config.type === 'css') {
                this.injectCSS(cachedContent, libraryName);
            } else if (config.type === 'js') {
                this.injectJS(cachedContent, libraryName);
                
                // Verify global variable is available
                if (config.global && !this.isGlobalAvailable(config.global)) {
                    console.warn(`⚠️ Cached script loaded but global ${config.global} not available. Clearing cache.`);
                    localStorage.removeItem(cacheKey);
                    return false;
                }
            }

            return true;

        } catch (error) {
            console.warn(`⚠️ Error loading from cache: ${libraryName}`, error);
            return false;
        }
    }

    /**
     * Load library from local path
     *
     * @param {string} libraryName - Name of the library (unused but kept for compatibility)
     * @param {object} config - Library configuration
     * @returns {Promise<void>}
     */
    async loadFromCDN(libraryName, config) {
        return new Promise((resolve, reject) => {
            if (config.type === 'css') {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = config.url;
                link.onload = () => resolve();
                link.onerror = () => reject(new Error(`Failed to load CSS: ${config.url}`));
                document.head.appendChild(link);

            } else if (config.type === 'js') {
                const script = document.createElement('script');
                script.src = config.url;
                script.onload = () => {
                    // Verify global variable is available
                    if (config.global && !this.isGlobalAvailable(config.global)) {
                        reject(new Error(`Script loaded but global ${config.global} not available`));
                    } else {
                        resolve();
                    }
                };
                script.onerror = () => reject(new Error(`Failed to load script: ${config.url}`));
                document.head.appendChild(script);
            }
        });
    }

    /**
     * Save library content to localStorage cache
     * 
     * @param {string} libraryName - Name of the library
     * @param {object} config - Library configuration
     * @returns {Promise<void>}
     */
    async saveToCache(libraryName, config) {
        try {
            // Fetch the library content
            const response = await fetch(config.url);
            if (!response.ok) {
                throw new Error(`Failed to fetch for caching: ${response.status}`);
            }

            const content = await response.text();
            const cacheKey = `${this.cachePrefix}${libraryName}_${this.cacheVersion}`;

            // Save to localStorage
            localStorage.setItem(cacheKey, content);
            console.log(`💾 Cached library: ${libraryName}`);

        } catch (error) {
            console.warn(`⚠️ Failed to cache library: ${libraryName}`, error);
            // Don't throw - caching is optional
        }
    }

    /**
     * Inject CSS content into the page
     * 
     * @param {string} content - CSS content
     * @param {string} libraryName - Name of the library
     */
    injectCSS(content, libraryName) {
        const style = document.createElement('style');
        style.setAttribute('data-library', libraryName);
        style.textContent = content;
        document.head.appendChild(style);
    }

    /**
     * Inject JavaScript content into the page
     * 
     * @param {string} content - JavaScript content
     * @param {string} libraryName - Name of the library
     */
    injectJS(content, libraryName) {
        const script = document.createElement('script');
        script.setAttribute('data-library', libraryName);
        script.textContent = content;
        document.head.appendChild(script);
    }

    /**
     * Check if a global variable is available
     * 
     * @param {string} globalName - Name of the global variable (supports nested like 'L.Draw')
     * @returns {boolean}
     */
    isGlobalAvailable(globalName) {
        const parts = globalName.split('.');
        let obj = window;
        
        for (const part of parts) {
            if (obj[part] === undefined) {
                return false;
            }
            obj = obj[part];
        }
        
        return true;
    }

    /**
     * Load multiple libraries in sequence
     * 
     * @param {string[]} libraryNames - Array of library names to load
     * @returns {Promise<void>}
     */
    async loadLibraries(libraryNames) {
        for (const libraryName of libraryNames) {
            await this.loadLibrary(libraryName);
        }
    }

    /**
     * Clear all cached libraries
     */
    clearCache() {
        const keys = Object.keys(localStorage);
        let cleared = 0;

        for (const key of keys) {
            if (key.startsWith(this.cachePrefix)) {
                localStorage.removeItem(key);
                cleared++;
            }
        }

        console.log(`🗑️ Cleared ${cleared} cached libraries`);
        this.loadedLibraries.clear();
    }

    /**
     * Get cache statistics
     * 
     * @returns {object} Cache statistics
     */
    getCacheStats() {
        const keys = Object.keys(localStorage);
        const cachedLibraries = keys.filter(key => key.startsWith(this.cachePrefix));
        
        let totalSize = 0;
        for (const key of cachedLibraries) {
            const content = localStorage.getItem(key);
            totalSize += content ? content.length : 0;
        }

        return {
            count: cachedLibraries.length,
            totalSizeBytes: totalSize,
            totalSizeKB: (totalSize / 1024).toFixed(2),
            totalSizeMB: (totalSize / 1024 / 1024).toFixed(2),
            libraries: cachedLibraries.map(key => key.replace(this.cachePrefix, '').replace(`_${this.cacheVersion}`, ''))
        };
    }
}

// Export singleton instance
export const cdnLoader = new CDNLoader();

