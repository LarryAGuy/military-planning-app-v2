/**
 * Map Tool - Main Entry Point
 * 
 * Purpose: Standalone mapping tool orchestrator
 * Coordinates all mapping components and provides unified API
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { MappingConfig } from './config.js';
import { MapComponent } from './components/MapComponent.js';
import { LocationManager } from './components/LocationManager.js';
import { MapExporter } from './components/MapExporter.js';
import { CoordinateValidator } from './utils/CoordinateValidator.js';
import { CDNLoader } from '../utils/CDNLoader.js';

export class MapTool {
    constructor() {
        this.mapComponent = null;
        this.locationManager = new LocationManager();
        this.mapExporter = null;
        this.cdnLoader = new CDNLoader();
        this.initialized = false;
        this.libraries = {};
    }

    /**
     * Initialize the mapping tool
     * 
     * @param {string} containerId - Map container element ID
     * @param {object} options - Initialization options
     * @returns {Promise<object>} Initialization result
     */
    async initialize(containerId, options = {}) {
        try {
            // Load required libraries
            await this.loadLibraries();

            // Initialize map component
            this.mapComponent = new MapComponent(containerId);
            this.mapComponent.initialize({
                center: options.center,
                zoom: options.zoom,
                libraries: this.libraries
            });

            // Initialize map exporter
            const mapContainer = document.getElementById(containerId);
            this.mapExporter = new MapExporter(
                this.mapComponent.getMap(),
                mapContainer
            );
            this.mapExporter.initialize(this.libraries.html2canvas);

            this.initialized = true;

            return {
                success: true,
                message: 'Map tool initialized successfully'
            };
        } catch (error) {
            console.error('Map tool initialization error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Load required CDN libraries
     * 
     * @returns {Promise<void>}
     */
    async loadLibraries() {
        try {
            // Load libraries in correct order
            await this.cdnLoader.loadLibrary('leaflet-css');
            await this.cdnLoader.loadLibrary('leaflet-js');
            await this.cdnLoader.loadLibrary('leaflet-draw-css');
            await this.cdnLoader.loadLibrary('leaflet-draw-js');
            await this.cdnLoader.loadLibrary('html2canvas');
            await this.cdnLoader.loadLibrary('mgrs');
            await this.cdnLoader.loadLibrary('proj4');

            // Store library references
            this.libraries = {
                L: window.L,
                html2canvas: window.html2canvas,
                mgrs: window.mgrs,
                proj4: window.proj4
            };

            // Configure Leaflet icon path for local hosting
            if (window.L && window.L.Icon && window.L.Icon.Default) {
                window.L.Icon.Default.prototype.options.imagePath = './libs/leaflet/images/';
                // Explicitly set icon URLs
                window.L.Icon.Default.mergeOptions({
                    iconUrl: './libs/leaflet/images/marker-icon.png',
                    iconRetinaUrl: './libs/leaflet/images/marker-icon-2x.png',
                    shadowUrl: './libs/leaflet/images/marker-shadow.png'
                });
            }

            console.log('✅ All mapping libraries loaded successfully');
        } catch (error) {
            console.error('❌ Failed to load mapping libraries:', error);
            throw error;
        }
    }

    /**
     * Search and display location by coordinates
     * 
     * @param {string} coordinates - Coordinate string
     * @param {string} system - Coordinate system ('mgrs', 'utm', 'latlon')
     * @returns {object} Search result
     */
    searchLocation(coordinates, system = 'mgrs') {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Map tool not initialized'
            };
        }

        // Validate coordinates
        const validation = CoordinateValidator.validate(coordinates, system);
        if (!validation.valid) {
            return {
                success: false,
                error: validation.error
            };
        }

        // Convert to lat/lon
        const converter = this.mapComponent.getCoordinateConverter();
        const result = converter.toLatLon(coordinates, system);

        if (!result.success) {
            return result;
        }

        // Set map view
        this.mapComponent.setView([result.lat, result.lon], 13);

        // Add marker
        const allCoords = converter.getAllRepresentations(coordinates, system);
        const popupContent = this.createLocationPopup(allCoords);

        this.mapComponent.clearMarkers();
        this.mapComponent.addMarker([result.lat, result.lon], {
            popup: popupContent,
            openPopup: true
        });

        return {
            success: true,
            lat: result.lat,
            lon: result.lon,
            coordinates: allCoords
        };
    }

    /**
     * Create popup content for location
     * 
     * @param {object} coordinates - All coordinate representations
     * @returns {string} HTML popup content
     */
    createLocationPopup(coordinates) {
        return `
            <div style="font-family: monospace; font-size: 12px;">
                <strong>Location Coordinates</strong><br><br>
                <strong>Lat/Long:</strong> ${coordinates.latlon.formatted}<br>
                <strong>MGRS:</strong> ${coordinates.mgrs || 'N/A'}<br>
                <strong>UTM:</strong> ${coordinates.utm || 'N/A'}
            </div>
        `;
    }

    /**
     * Save current location
     * 
     * @param {string} name - Location name
     * @param {string} notes - Optional notes
     * @returns {object} Save result
     */
    saveCurrentLocation(name, notes = '') {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Map tool not initialized'
            };
        }

        const center = this.mapComponent.getCenter();
        const zoom = this.mapComponent.getZoom();

        return this.locationManager.saveLocation({
            name: name,
            lat: center.lat,
            lon: center.lon,
            coordinates: `${center.lat.toFixed(6)}, ${center.lon.toFixed(6)}`,
            system: 'latlon',
            notes: notes,
            zoom: zoom
        });
    }

    /**
     * Load saved location
     * 
     * @param {string} id - Location ID
     * @returns {object} Load result
     */
    loadLocation(id) {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Map tool not initialized'
            };
        }

        const location = this.locationManager.getLocationById(id);

        if (!location) {
            return {
                success: false,
                error: 'Location not found'
            };
        }

        // Set map view
        const zoom = location.zoom || 13;
        this.mapComponent.flyTo([location.lat, location.lon], zoom);

        // Add marker
        this.mapComponent.clearMarkers();
        this.mapComponent.addMarker([location.lat, location.lon], {
            popup: `<strong>${location.name}</strong><br>${location.coordinates}`,
            openPopup: true
        });

        return {
            success: true,
            location: location
        };
    }

    /**
     * Get all saved locations
     * 
     * @returns {array} Array of locations
     */
    getSavedLocations() {
        return this.locationManager.getAllLocations();
    }

    /**
     * Delete saved location
     * 
     * @param {string} id - Location ID
     * @returns {object} Delete result
     */
    deleteLocation(id) {
        return this.locationManager.deleteLocation(id);
    }

    /**
     * Export map as image
     * 
     * @param {object} options - Export options
     * @returns {Promise<object>} Export result
     */
    async exportMap(options = {}) {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Map tool not initialized'
            };
        }

        return this.mapExporter.exportMap(options);
    }

    /**
     * Get map component
     * 
     * @returns {object} MapComponent instance
     */
    getMapComponent() {
        return this.mapComponent;
    }

    /**
     * Get location manager
     * 
     * @returns {object} LocationManager instance
     */
    getLocationManager() {
        return this.locationManager;
    }

    /**
     * Get map exporter
     * 
     * @returns {object} MapExporter instance
     */
    getMapExporter() {
        return this.mapExporter;
    }

    /**
     * Check if tool is initialized
     * 
     * @returns {boolean} Initialization status
     */
    isInitialized() {
        return this.initialized;
    }

    /**
     * Get configuration
     * 
     * @returns {object} MappingConfig
     */
    getConfig() {
        return MappingConfig;
    }

    /**
     * EXTENSION HOOK: Set integration mode
     * Used by OPORD/MDMP/JPP integrations
     * 
     * @param {string} mode - Integration mode ('standalone', 'opord', 'mdmp', 'jpp')
     * @param {object} config - Mode-specific configuration
     */
    setIntegrationMode(mode, config = {}) {
        this.integrationMode = mode;
        this.integrationConfig = config;

        // Apply mode-specific configurations
        switch (mode) {
            case 'mdmp':
                // Enable multi-COA features
                if (this.mapComponent) {
                    this.mapComponent.setMultiCOAMode(true);
                }
                break;

            case 'jpp':
                // Enable theater-level features
                if (this.mapComponent && config.theaterConfig) {
                    this.mapComponent.setTheaterView(config.theaterConfig);
                }
                break;

            case 'opord':
            case 'standalone':
            default:
                // Standard mode
                break;
        }
    }

    /**
     * EXTENSION HOOK: Get data for integration
     * Used by OPORD/MDMP/JPP to extract map data
     * 
     * @returns {object} Map data for integration
     */
    getIntegrationData() {
        if (!this.initialized) {
            return null;
        }

        const center = this.mapComponent.getCenter();
        const zoom = this.mapComponent.getZoom();
        const bounds = this.mapComponent.getBounds();
        const tacticalGraphics = this.mapComponent.getTacticalGraphics();

        return {
            center: center,
            zoom: zoom,
            bounds: bounds,
            graphics: tacticalGraphics ? tacticalGraphics.exportToGeoJSON() : null,
            timestamp: new Date().toISOString(),
            mode: this.integrationMode || 'standalone'
        };
    }

    /**
     * EXTENSION HOOK: Load data from integration
     * Used by OPORD/MDMP/JPP to restore map state
     * 
     * @param {object} data - Map data from integration
     * @returns {object} Load result
     */
    loadIntegrationData(data) {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Map tool not initialized'
            };
        }

        try {
            // Restore map view
            if (data.center && data.zoom) {
                this.mapComponent.setView([data.center.lat, data.center.lon], data.zoom);
            }

            // Restore tactical graphics
            if (data.graphics) {
                const tacticalGraphics = this.mapComponent.getTacticalGraphics();
                if (tacticalGraphics) {
                    tacticalGraphics.clearAll();
                    tacticalGraphics.importFromGeoJSON(data.graphics);
                }
            }

            return {
                success: true,
                message: 'Map data loaded successfully'
            };
        } catch (error) {
            console.error('Error loading integration data:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Cleanup and destroy tool
     */
    cleanup() {
        if (this.mapComponent) {
            this.mapComponent.cleanup();
            this.mapComponent = null;
        }

        this.initialized = false;
    }
}

export default MapTool;

