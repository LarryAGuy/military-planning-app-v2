/**
 * Content Loader Utility
 * Handles dynamic loading of military doctrine content modules
 */

export class ContentLoader {
    constructor() {
        this.contentCache = new Map();
        this.loadingPromises = new Map();
    }

    /**
     * Load content module dynamically
     * @param {string} category - Content category (opord, mdmp, jpp)
     * @param {string} module - Module name (situation, mission, etc.)
     * @returns {Promise<Object>} Content object
     */
    async loadContent(category, module) {
        const contentKey = `${category}/${module}`;
        
        // Return cached content if available
        if (this.contentCache.has(contentKey)) {
            return this.contentCache.get(contentKey);
        }

        // Return existing loading promise if in progress
        if (this.loadingPromises.has(contentKey)) {
            return this.loadingPromises.get(contentKey);
        }

        // Create new loading promise
        const loadingPromise = this.loadContentModule(category, module);
        this.loadingPromises.set(contentKey, loadingPromise);

        try {
            const content = await loadingPromise;
            this.contentCache.set(contentKey, content);
            this.loadingPromises.delete(contentKey);
            return content;
        } catch (error) {
            this.loadingPromises.delete(contentKey);
            throw error;
        }
    }

    /**
     * Load content module from file system
     * @param {string} category - Content category
     * @param {string} module - Module name
     * @returns {Promise<Object>} Content object
     */
    async loadContentModule(category, module) {
        try {
            const modulePath = `../content/${category}/${module}.js`;
            const contentModule = await import(modulePath);
            
            // Return default export or named export
            // Convert hyphenated module names to camelCase for export lookup
            const camelCaseModule = module.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
            return contentModule.default || contentModule[`${camelCaseModule}Content`];
        } catch (error) {
            console.warn(`Failed to load content module: ${category}/${module}`, error);
            return this.getPlaceholderContent(category, module);
        }
    }

    /**
     * Get placeholder content when module fails to load
     * @param {string} category - Content category
     * @param {string} module - Module name
     * @returns {Object} Placeholder content object
     */
    getPlaceholderContent(category, module) {
        return {
            title: `${category.toUpperCase()}: ${module.replace('-', ' ').toUpperCase()}`,
            description: `Doctrinal content for ${module.replace('-', ' ')} planning`,
            doctrine: `
                <div class="military-content">
                    <h2 class="text-xl font-bold text-white mb-4">${category.toUpperCase()}: ${module.replace('-', ' ').toUpperCase()}</h2>
                    <div class="bg-yellow-900 border border-yellow-700 rounded-lg p-4 mb-6">
                        <h3 class="text-lg font-semibold text-yellow-400 mb-2">
                            <i class="fas fa-construction mr-2"></i>
                            Content Under Development
                        </h3>
                        <p class="text-yellow-100">
                            This doctrinal content module is currently under development. 
                            Military planning doctrine and examples will be added in future updates.
                        </p>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-gray-400 mb-2">Planned Content</h4>
                        <ul class="text-gray-300 text-sm">
                            <li>• Doctrinal guidance and procedures</li>
                            <li>• Step-by-step implementation instructions</li>
                            <li>• Military examples and case studies</li>
                            <li>• Relevant annexes and supporting documents</li>
                            <li>• Templates and planning aids</li>
                        </ul>
                    </div>
                </div>
            `,
            examples: [
                {
                    title: "Example Implementation",
                    content: "Detailed examples will be provided in future updates."
                }
            ]
        };
    }

    /**
     * Preload content modules for better performance
     * @param {Array} contentList - List of {category, module} objects to preload
     */
    async preloadContent(contentList) {
        const preloadPromises = contentList.map(({category, module}) => 
            this.loadContent(category, module).catch(error => 
                console.warn(`Failed to preload ${category}/${module}:`, error)
            )
        );

        await Promise.allSettled(preloadPromises);
        console.log(`Preloaded ${contentList.length} content modules`);
    }

    /**
     * Clear content cache
     */
    clearCache() {
        this.contentCache.clear();
        this.loadingPromises.clear();
    }

    /**
     * Get cache statistics
     * @returns {Object} Cache statistics
     */
    getCacheStats() {
        return {
            cachedItems: this.contentCache.size,
            loadingItems: this.loadingPromises.size,
            cacheKeys: Array.from(this.contentCache.keys())
        };
    }
}

// Export singleton instance
export const contentLoader = new ContentLoader();
export default contentLoader;
