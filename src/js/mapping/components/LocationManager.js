/**
 * Location Manager Component
 * 
 * Purpose: Manage saved locations (save, load, delete, list)
 * Storage: localStorage
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { MappingConfig } from '../config.js';
import { CoordinateValidator } from '../utils/CoordinateValidator.js';

export class LocationManager {
    constructor() {
        this.storageKey = MappingConfig.storage.key;
        this.maxLocations = MappingConfig.storage.maxLocations;
    }

    /**
     * Save a location to localStorage
     * 
     * @param {object} location - Location object
     * @param {string} location.name - Location name
     * @param {number} location.lat - Latitude
     * @param {number} location.lon - Longitude
     * @param {string} location.coordinates - Original coordinates
     * @param {string} location.system - Coordinate system
     * @param {string} location.notes - Optional notes
     * @returns {object} Result with { success: boolean, error?: string }
     */
    saveLocation(location) {
        // Validate required fields
        if (!location.name || !location.name.trim()) {
            return {
                success: false,
                error: 'Location name is required'
            };
        }

        if (typeof location.lat !== 'number' || typeof location.lon !== 'number') {
            return {
                success: false,
                error: 'Valid latitude and longitude are required'
            };
        }

        try {
            const locations = this.getAllLocations();

            // Check if max locations reached
            if (locations.length >= this.maxLocations) {
                return {
                    success: false,
                    error: `Maximum ${this.maxLocations} locations allowed. Please delete some locations first.`
                };
            }

            // Create location object
            const newLocation = {
                id: this.generateId(),
                name: location.name.trim(),
                lat: location.lat,
                lon: location.lon,
                coordinates: location.coordinates || `${location.lat}, ${location.lon}`,
                system: location.system || 'latlon',
                notes: location.notes || '',
                created: new Date().toISOString(),
                modified: new Date().toISOString()
            };

            // Add to locations array
            locations.push(newLocation);

            // Save to localStorage
            localStorage.setItem(this.storageKey, JSON.stringify(locations));

            return {
                success: true,
                location: newLocation
            };
        } catch (error) {
            console.error('Error saving location:', error);
            return {
                success: false,
                error: error.message || 'Failed to save location'
            };
        }
    }

    /**
     * Get all saved locations
     * 
     * @returns {array} Array of location objects
     */
    getAllLocations() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (!stored) {
                return [];
            }

            const locations = JSON.parse(stored);
            return Array.isArray(locations) ? locations : [];
        } catch (error) {
            console.error('Error loading locations:', error);
            return [];
        }
    }

    /**
     * Get a location by ID
     * 
     * @param {string} id - Location ID
     * @returns {object|null} Location object or null if not found
     */
    getLocationById(id) {
        const locations = this.getAllLocations();
        return locations.find(loc => loc.id === id) || null;
    }

    /**
     * Update a location
     * 
     * @param {string} id - Location ID
     * @param {object} updates - Fields to update
     * @returns {object} Result with { success: boolean, error?: string }
     */
    updateLocation(id, updates) {
        try {
            const locations = this.getAllLocations();
            const index = locations.findIndex(loc => loc.id === id);

            if (index === -1) {
                return {
                    success: false,
                    error: 'Location not found'
                };
            }

            // Update location
            locations[index] = {
                ...locations[index],
                ...updates,
                id, // Preserve ID
                modified: new Date().toISOString()
            };

            // Save to localStorage
            localStorage.setItem(this.storageKey, JSON.stringify(locations));

            return {
                success: true,
                location: locations[index]
            };
        } catch (error) {
            console.error('Error updating location:', error);
            return {
                success: false,
                error: error.message || 'Failed to update location'
            };
        }
    }

    /**
     * Delete a location
     * 
     * @param {string} id - Location ID
     * @returns {object} Result with { success: boolean, error?: string }
     */
    deleteLocation(id) {
        try {
            const locations = this.getAllLocations();
            const filtered = locations.filter(loc => loc.id !== id);

            if (filtered.length === locations.length) {
                return {
                    success: false,
                    error: 'Location not found'
                };
            }

            // Save to localStorage
            localStorage.setItem(this.storageKey, JSON.stringify(filtered));

            return {
                success: true
            };
        } catch (error) {
            console.error('Error deleting location:', error);
            return {
                success: false,
                error: error.message || 'Failed to delete location'
            };
        }
    }

    /**
     * Delete all locations
     * 
     * @returns {object} Result with { success: boolean, error?: string }
     */
    deleteAllLocations() {
        try {
            localStorage.removeItem(this.storageKey);
            return {
                success: true
            };
        } catch (error) {
            console.error('Error deleting all locations:', error);
            return {
                success: false,
                error: error.message || 'Failed to delete all locations'
            };
        }
    }

    /**
     * Search locations by name
     * 
     * @param {string} query - Search query
     * @returns {array} Array of matching locations
     */
    searchLocations(query) {
        if (!query || !query.trim()) {
            return this.getAllLocations();
        }

        const locations = this.getAllLocations();
        const lowerQuery = query.toLowerCase().trim();

        return locations.filter(loc => 
            loc.name.toLowerCase().includes(lowerQuery) ||
            (loc.notes && loc.notes.toLowerCase().includes(lowerQuery)) ||
            loc.coordinates.toLowerCase().includes(lowerQuery)
        );
    }

    /**
     * Get locations sorted by various criteria
     * 
     * @param {string} sortBy - Sort criteria ('name', 'created', 'modified')
     * @param {string} order - Sort order ('asc', 'desc')
     * @returns {array} Sorted array of locations
     */
    getSortedLocations(sortBy = 'created', order = 'desc') {
        const locations = this.getAllLocations();

        return locations.sort((a, b) => {
            let aVal, bVal;

            switch (sortBy) {
                case 'name':
                    aVal = a.name.toLowerCase();
                    bVal = b.name.toLowerCase();
                    break;
                case 'created':
                    aVal = new Date(a.created).getTime();
                    bVal = new Date(b.created).getTime();
                    break;
                case 'modified':
                    aVal = new Date(a.modified).getTime();
                    bVal = new Date(b.modified).getTime();
                    break;
                default:
                    return 0;
            }

            if (order === 'asc') {
                return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
            } else {
                return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
            }
        });
    }

    /**
     * Export locations to JSON
     * 
     * @returns {string} JSON string of all locations
     */
    exportToJSON() {
        const locations = this.getAllLocations();
        return JSON.stringify(locations, null, 2);
    }

    /**
     * Import locations from JSON
     * 
     * @param {string} json - JSON string of locations
     * @param {boolean} merge - If true, merge with existing locations; if false, replace
     * @returns {object} Result with { success: boolean, imported: number, error?: string }
     */
    importFromJSON(json, merge = true) {
        try {
            const imported = JSON.parse(json);

            if (!Array.isArray(imported)) {
                return {
                    success: false,
                    error: 'Invalid JSON format. Expected an array of locations.'
                };
            }

            let locations = merge ? this.getAllLocations() : [];

            // Add imported locations
            for (const loc of imported) {
                // Validate required fields
                if (!loc.name || typeof loc.lat !== 'number' || typeof loc.lon !== 'number') {
                    continue; // Skip invalid locations
                }

                // Generate new ID to avoid conflicts
                locations.push({
                    ...loc,
                    id: this.generateId(),
                    created: loc.created || new Date().toISOString(),
                    modified: new Date().toISOString()
                });
            }

            // Check max locations limit
            if (locations.length > this.maxLocations) {
                locations = locations.slice(0, this.maxLocations);
            }

            // Save to localStorage
            localStorage.setItem(this.storageKey, JSON.stringify(locations));

            return {
                success: true,
                imported: imported.length
            };
        } catch (error) {
            console.error('Error importing locations:', error);
            return {
                success: false,
                error: error.message || 'Failed to import locations'
            };
        }
    }

    /**
     * Generate a unique ID for a location
     * 
     * @returns {string} Unique ID
     */
    generateId() {
        return `loc_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    }

    /**
     * Get storage statistics
     * 
     * @returns {object} Storage statistics
     */
    getStorageStats() {
        const locations = this.getAllLocations();
        const json = JSON.stringify(locations);

        return {
            count: locations.length,
            maxCount: this.maxLocations,
            sizeBytes: json.length,
            sizeKB: (json.length / 1024).toFixed(2),
            percentUsed: ((locations.length / this.maxLocations) * 100).toFixed(1)
        };
    }
}

export default LocationManager;

