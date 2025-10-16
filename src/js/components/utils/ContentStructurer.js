/**
 * Content Structurer Utility
 * Handles structuring content data for doctrinal content compatibility
 * Extracted from NavigationComponent to reduce component size
 */

/**
 * Structure content data for loadDoctrinalContent compatibility
 * @param {Object} content - Raw content from ContentLoader
 * @returns {Object} Structured content with doctrine property
 */
export function structureContentForDoctrine(content) {
    if (content && typeof content.getContent === 'function') {
        // New framework pattern - call getContent() and wrap in doctrine property
        return {
            doctrine: content.getContent()
        };
    } else if (content && content.doctrine) {
        // Legacy pattern - content already has doctrine property
        return content;
    } else if (content && typeof content.render === 'function') {
        // Render method pattern
        return {
            doctrine: content.render()
        };
    } else {
        // Fallback - assume content is the doctrine itself
        return {
            doctrine: content
        };
    }
}

/**
 * Create content loaded event data
 * @param {string} view - View identifier
 * @param {string} category - Content category
 * @param {string} module - Content module
 * @param {Object} structuredContent - Structured content object
 * @param {string} source - Event source identifier
 * @returns {Object} Event data object
 */
export function createContentLoadedEvent(view, category, module, structuredContent, source = 'navigation') {
    return {
        view,
        category,
        module,
        content: structuredContent,
        source
    };
}

/**
 * Create content error event data
 * @param {string} view - View identifier
 * @param {string} category - Content category
 * @param {string} module - Content module
 * @param {string} errorMessage - Error message
 * @param {string} source - Event source identifier
 * @returns {Object} Error event data object
 */
export function createContentErrorEvent(view, category, module, errorMessage, source = 'navigation') {
    return {
        view,
        category,
        module,
        error: errorMessage,
        source
    };
}
