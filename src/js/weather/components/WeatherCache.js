/**
 * Weather Cache Component
 * 
 * Purpose: Cache weather data in localStorage for offline support
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { WeatherConfig } from '../config.js';

export class WeatherCache {
    constructor() {
        this.storageKey = WeatherConfig.cache.storageKey;
        this.cacheDuration = WeatherConfig.cache.duration;
        this.enabled = WeatherConfig.cache.enabled;
    }

    /**
     * Generate cache key for location
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {string} type - Data type ('weather' or 'forecast')
     * @returns {string} Cache key
     */
    generateKey(lat, lon, type = 'weather') {
        return `${type}_${lat.toFixed(4)}_${lon.toFixed(4)}`;
    }

    /**
     * Get cached data
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {string} type - Data type ('weather' or 'forecast')
     * @returns {object|null} Cached data or null if not found/expired
     */
    get(lat, lon, type = 'weather') {
        if (!this.enabled) {
            return null;
        }

        try {
            const cache = this.getAllCache();
            const key = this.generateKey(lat, lon, type);
            const entry = cache[key];

            if (!entry) {
                return null;
            }

            // Check if expired
            const now = Date.now();
            if (now - entry.timestamp > this.cacheDuration) {
                // Remove expired entry
                delete cache[key];
                this.saveCache(cache);
                return null;
            }

            return entry.data;
        } catch (error) {
            console.error('Error reading weather cache:', error);
            return null;
        }
    }

    /**
     * Set cached data
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {string} type - Data type ('weather' or 'forecast')
     * @param {object} data - Data to cache
     * @returns {boolean} Success status
     */
    set(lat, lon, type, data) {
        if (!this.enabled) {
            return false;
        }

        try {
            const cache = this.getAllCache();
            const key = this.generateKey(lat, lon, type);

            cache[key] = {
                data: data,
                timestamp: Date.now(),
                lat: lat,
                lon: lon,
                type: type
            };

            this.saveCache(cache);
            return true;
        } catch (error) {
            console.error('Error writing weather cache:', error);
            return false;
        }
    }

    /**
     * Get all cached data
     * 
     * @returns {object} All cached data
     */
    getAllCache() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : {};
        } catch (error) {
            console.error('Error reading cache:', error);
            return {};
        }
    }

    /**
     * Save cache to localStorage
     * 
     * @param {object} cache - Cache object
     */
    saveCache(cache) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(cache));
        } catch (error) {
            console.error('Error saving cache:', error);
        }
    }

    /**
     * Clear expired cache entries
     * 
     * @returns {number} Number of entries removed
     */
    clearExpired() {
        try {
            const cache = this.getAllCache();
            const now = Date.now();
            let removed = 0;

            for (const [key, entry] of Object.entries(cache)) {
                if (now - entry.timestamp > this.cacheDuration) {
                    delete cache[key];
                    removed++;
                }
            }

            if (removed > 0) {
                this.saveCache(cache);
            }

            return removed;
        } catch (error) {
            console.error('Error clearing expired cache:', error);
            return 0;
        }
    }

    /**
     * Clear all cache
     * 
     * @returns {boolean} Success status
     */
    clearAll() {
        try {
            localStorage.removeItem(this.storageKey);
            return true;
        } catch (error) {
            console.error('Error clearing cache:', error);
            return false;
        }
    }

    /**
     * Get cache statistics
     * 
     * @returns {object} Cache statistics
     */
    getStats() {
        try {
            const cache = this.getAllCache();
            const entries = Object.values(cache);
            const now = Date.now();

            const valid = entries.filter(e => now - e.timestamp <= this.cacheDuration);
            const expired = entries.filter(e => now - e.timestamp > this.cacheDuration);

            const weatherEntries = entries.filter(e => e.type === 'weather');
            const forecastEntries = entries.filter(e => e.type === 'forecast');

            const json = JSON.stringify(cache);

            return {
                totalEntries: entries.length,
                validEntries: valid.length,
                expiredEntries: expired.length,
                weatherEntries: weatherEntries.length,
                forecastEntries: forecastEntries.length,
                sizeBytes: json.length,
                sizeKB: (json.length / 1024).toFixed(2),
                cacheDurationHours: this.cacheDuration / (1000 * 60 * 60)
            };
        } catch (error) {
            console.error('Error getting cache stats:', error);
            return {
                totalEntries: 0,
                validEntries: 0,
                expiredEntries: 0,
                weatherEntries: 0,
                forecastEntries: 0,
                sizeBytes: 0,
                sizeKB: '0',
                cacheDurationHours: 0
            };
        }
    }

    /**
     * Check if data is cached and valid
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {string} type - Data type ('weather' or 'forecast')
     * @returns {boolean} Whether valid cached data exists
     */
    has(lat, lon, type = 'weather') {
        return this.get(lat, lon, type) !== null;
    }

    /**
     * Get cache age in milliseconds
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {string} type - Data type ('weather' or 'forecast')
     * @returns {number|null} Age in milliseconds or null if not cached
     */
    getAge(lat, lon, type = 'weather') {
        try {
            const cache = this.getAllCache();
            const key = this.generateKey(lat, lon, type);
            const entry = cache[key];

            if (!entry) {
                return null;
            }

            return Date.now() - entry.timestamp;
        } catch (error) {
            return null;
        }
    }

    /**
     * Get time until cache expires
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {string} type - Data type ('weather' or 'forecast')
     * @returns {number|null} Time until expiration in milliseconds or null
     */
    getTimeUntilExpiration(lat, lon, type = 'weather') {
        const age = this.getAge(lat, lon, type);

        if (age === null) {
            return null;
        }

        const remaining = this.cacheDuration - age;
        return remaining > 0 ? remaining : 0;
    }

    /**
     * Enable cache
     */
    enable() {
        this.enabled = true;
    }

    /**
     * Disable cache
     */
    disable() {
        this.enabled = false;
    }

    /**
     * Check if cache is enabled
     * 
     * @returns {boolean} Enabled status
     */
    isEnabled() {
        return this.enabled;
    }

    /**
     * Set cache duration
     * 
     * @param {number} duration - Duration in milliseconds
     */
    setCacheDuration(duration) {
        this.cacheDuration = duration;
    }

    /**
     * Get cache duration
     * 
     * @returns {number} Duration in milliseconds
     */
    getCacheDuration() {
        return this.cacheDuration;
    }

    /**
     * Export cache to JSON
     * 
     * @returns {string} JSON string of cache
     */
    exportToJSON() {
        const cache = this.getAllCache();
        return JSON.stringify(cache, null, 2);
    }

    /**
     * Import cache from JSON
     * 
     * @param {string} json - JSON string of cache
     * @param {boolean} merge - Whether to merge with existing cache
     * @returns {boolean} Success status
     */
    importFromJSON(json, merge = true) {
        try {
            const imported = JSON.parse(json);
            
            if (merge) {
                const existing = this.getAllCache();
                const merged = { ...existing, ...imported };
                this.saveCache(merged);
            } else {
                this.saveCache(imported);
            }

            return true;
        } catch (error) {
            console.error('Error importing cache:', error);
            return false;
        }
    }
}

export default WeatherCache;

