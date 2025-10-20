/**
 * Mapping & Weather Tool - Integration Module
 *
 * Purpose: Combined mapping and weather tool orchestrator
 * Integrates MapTool and WeatherTool into unified interface
 * Designed for extension by OPORD/MDMP/JPP integrations
 *
 * @author Augment Agent
 * @date October 16, 2025
 */

import { MapTool } from '../mapping/MapTool.js';
import { WeatherTool } from '../weather/WeatherTool.js';
import { CoordinateValidator } from '../mapping/utils/CoordinateValidator.js';
import { CoordinateConverterUI } from '../mapping/components/CoordinateConverterUI.js';
import EventBus from '../utils/EventBus.js';

export class MappingWeatherTool {
    constructor() {
        this.mapTool = new MapTool();
        this.weatherTool = new WeatherTool();
        this.coordinateConverterUI = new CoordinateConverterUI();
        this.initialized = false;
        this.integrationMode = 'standalone';
        this.currentLocation = null;
    }

    /**
     * Initialize the combined tool
     * 
     * @param {string} mapContainerId - Map container element ID
     * @param {object} options - Initialization options
     * @param {array} options.center - [lat, lon] center coordinates
     * @param {number} options.zoom - Initial zoom level
     * @param {string} options.units - Weather unit system ('imperial', 'metric', 'standard')
     * @param {string} options.mode - Integration mode ('standalone', 'opord', 'mdmp', 'jpp')
     * @returns {Promise<object>} Initialization result
     */
    async initialize(mapContainerId, options = {}) {
        try {
            // Initialize map tool
            const mapResult = await this.mapTool.initialize(mapContainerId, {
                center: options.center,
                zoom: options.zoom
            });

            if (!mapResult.success) {
                throw new Error(`Map initialization failed: ${mapResult.error}`);
            }

            // Initialize weather tool
            const weatherResult = await this.weatherTool.initialize({
                units: options.units
            });

            if (!weatherResult.success) {
                throw new Error(`Weather initialization failed: ${weatherResult.error}`);
            }

            // Initialize coordinate converter UI
            const libraries = this.mapTool.getLibraries();
            this.coordinateConverterUI.initialize(libraries.mgrs, libraries.proj4);

            // Setup event handlers for coordinate converter integration
            this.setupCoordinateConverterIntegration();

            // Set integration mode
            if (options.mode) {
                this.setIntegrationMode(options.mode, options.modeConfig || {});
            }

            this.initialized = true;

            return {
                success: true,
                message: 'Mapping & Weather tool initialized successfully'
            };
        } catch (error) {
            console.error('Mapping & Weather tool initialization error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Setup event handlers for coordinate converter integration
     * Wires up map clicks, coordinate conversions, and map centering
     */
    setupCoordinateConverterIntegration() {
        // When coordinates are converted, center map on location
        EventBus.on('coord-converter:converted', (data) => {
            if (this.mapTool && data.lat && data.lon) {
                this.mapTool.centerMap(data.lat, data.lon);
            }
        });

        // When map is clicked, emit event for coordinate converter
        const mapComponent = this.mapTool.getMapComponent();
        if (mapComponent) {
            const map = mapComponent.getMap();
            map.on('click', (e) => {
                EventBus.emit('map:clicked', {
                    lat: e.latlng.lat,
                    lon: e.latlng.lng
                });
            });
        }

        // When preset location is selected, center map
        EventBus.on('coord-converter:center-map', (data) => {
            if (this.mapTool && data.lat && data.lon) {
                this.mapTool.centerMap(data.lat, data.lon);
            }
        });
    }

    /**
     * Get coordinate converter UI HTML
     *
     * @returns {string} HTML string for coordinate converter
     */
    getCoordinateConverterHTML() {
        return this.coordinateConverterUI.createHTML();
    }

    /**
     * Get coordinate converter UI instance
     *
     * @returns {CoordinateConverterUI} Coordinate converter UI instance
     */
    getCoordinateConverterUI() {
        return this.coordinateConverterUI;
    }

    /**
     * Attach event listeners for weather display
     * Call this after weather HTML is inserted into DOM
     */
    attachWeatherEventListeners() {
        const clearWeatherBtn = document.getElementById('clear-weather-btn');
        if (clearWeatherBtn) {
            clearWeatherBtn.addEventListener('click', () => {
                this.clearWeatherDisplay();
            });
        }
    }

    /**
     * Clear weather display
     * Removes all weather data and updates UI
     */
    clearWeatherDisplay() {
        this.weatherTool.clearAllWeatherData();

        // Clear weather container
        const weatherContainer = document.getElementById('mapping-weather-weather-container');
        if (weatherContainer) {
            // Keep coordinate converter, remove weather data
            const coordConverterHTML = this.coordinateConverterUI.createHTML();
            weatherContainer.innerHTML = coordConverterHTML;
            this.coordinateConverterUI.attachDOMEventListeners();
        }
    }

    /**
     * Search location and fetch weather data
     *
     * @param {string} coordinates - Coordinate string
     * @param {string} system - Coordinate system ('mgrs', 'utm', 'latlon')
     * @returns {Promise<object>} Combined result
     */
    async searchLocationWithWeather(coordinates, system = 'mgrs') {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Tool not initialized'
            };
        }

        try {
            // Search location on map
            const mapResult = this.mapTool.searchLocation(coordinates, system);

            if (!mapResult.success) {
                return mapResult;
            }

            // Fetch weather data for location
            const weatherResult = await this.weatherTool.fetchAllWeatherData(
                mapResult.lat,
                mapResult.lon
            );

            // Store current location
            this.currentLocation = {
                lat: mapResult.lat,
                lon: mapResult.lon,
                coordinates: mapResult.coordinates
            };

            return {
                success: true,
                location: this.currentLocation,
                map: mapResult,
                weather: weatherResult
            };
        } catch (error) {
            console.error('Search location with weather error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Fetch weather for current map center
     *
     * @returns {Promise<object>} Weather result
     */
    async fetchWeatherForMapCenter() {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Tool not initialized'
            };
        }

        const center = this.mapTool.getMapComponent().getCenter();
        return this.weatherTool.fetchAllWeatherData(center.lat, center.lon);
    }

    /**
     * Fetch and display weather for current map center
     * Updates the weather container with weather data
     *
     * @returns {Promise<object>} Weather result
     */
    async fetchAndDisplayWeather() {
        const weatherResult = await this.fetchWeatherForMapCenter();

        if (weatherResult.success) {
            this.updateWeatherDisplay();
        }

        return weatherResult;
    }

    /**
     * Update weather display in the UI
     * Inserts weather HTML and attaches event listeners
     */
    updateWeatherDisplay() {
        const weatherContainer = document.getElementById('mapping-weather-weather-container');
        if (!weatherContainer) return;

        // Get coordinate converter and weather HTML
        const coordConverterHTML = this.coordinateConverterUI.createHTML();
        const weatherHTML = this.weatherTool.createWeatherDisplayHTML();

        // Combine both
        weatherContainer.innerHTML = coordConverterHTML + weatherHTML;

        // Attach event listeners
        this.coordinateConverterUI.attachDOMEventListeners();
        this.attachWeatherEventListeners();
    }

    /**
     * Create combined display HTML
     * 
     * @returns {string} HTML string
     */
    createCombinedDisplayHTML() {
        const weatherHTML = this.weatherTool.createWeatherDisplayHTML();

        return `
            <div class="mapping-weather-display" style="display: grid; gap: 1rem;">
                <div class="map-section">
                    <!-- Map is rendered in separate container -->
                </div>
                <div class="weather-section">
                    ${weatherHTML}
                </div>
            </div>
        `;
    }

    /**
     * Save current location with weather data
     * 
     * @param {string} name - Location name
     * @param {string} notes - Optional notes
     * @returns {object} Save result
     */
    saveLocationWithWeather(name, notes = '') {
        if (!this.initialized || !this.currentLocation) {
            return {
                success: false,
                error: 'No current location to save'
            };
        }

        // Get weather data
        const weatherData = this.weatherTool.getWeatherComponent().getCurrentData();
        const tacticalData = this.weatherTool.getTacticalDataComponent().getCurrentData();

        // Add weather info to notes
        const enhancedNotes = notes + (weatherData ? `\n\nWeather: ${weatherData.weather[0].description}, ${weatherData.main.temp}°` : '');

        // Save location
        return this.mapTool.saveCurrentLocation(name, enhancedNotes);
    }

    /**
     * Export map with weather overlay
     * 
     * @param {object} options - Export options
     * @returns {Promise<object>} Export result
     */
    async exportMapWithWeather(options = {}) {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Tool not initialized'
            };
        }

        // Get weather data
        const weatherData = this.weatherTool.getWeatherComponent().getFormattedData();
        const tacticalData = this.weatherTool.getTacticalDataComponent().getFormattedData();

        // Create metadata
        const metadata = {
            title: options.title || 'Tactical Map with Weather',
            coordinates: this.currentLocation ? this.currentLocation.coordinates.latlon.formatted : '',
            date: new Date().toLocaleString(),
            classification: options.classification || 'UNCLASSIFIED'
        };

        // Add weather info if available
        if (weatherData) {
            metadata.weather = `${weatherData.temperature}, ${weatherData.description}`;
        }

        if (tacticalData) {
            metadata.bmnt = `BMNT: ${tacticalData.bmnt}`;
            metadata.eent = `EENT: ${tacticalData.eent}`;
        }

        // Export map with metadata
        return this.mapTool.getMapExporter().exportWithMetadata(metadata, options);
    }

    /**
     * Get map tool
     * 
     * @returns {object} MapTool instance
     */
    getMapTool() {
        return this.mapTool;
    }

    /**
     * Get weather tool
     * 
     * @returns {object} WeatherTool instance
     */
    getWeatherTool() {
        return this.weatherTool;
    }

    /**
     * Get current location
     * 
     * @returns {object|null} Current location
     */
    getCurrentLocation() {
        return this.currentLocation;
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
     * Set integration mode
     * 
     * @param {string} mode - Integration mode ('standalone', 'opord', 'mdmp', 'jpp')
     * @param {object} config - Mode-specific configuration
     */
    setIntegrationMode(mode, config = {}) {
        this.integrationMode = mode;
        this.integrationConfig = config;

        // Set mode for both tools
        this.mapTool.setIntegrationMode(mode, config);
        this.weatherTool.setIntegrationMode(mode, config);
    }

    /**
     * Get integration mode
     * 
     * @returns {string} Current integration mode
     */
    getIntegrationMode() {
        return this.integrationMode;
    }

    /**
     * EXTENSION HOOK: Get data for integration
     * Used by OPORD/MDMP/JPP to extract all data
     * 
     * @returns {object} Combined data for integration
     */
    getIntegrationData() {
        if (!this.initialized) {
            return null;
        }

        return {
            mode: this.integrationMode,
            location: this.currentLocation,
            map: this.mapTool.getIntegrationData(),
            weather: this.weatherTool.getIntegrationData(),
            timestamp: new Date().toISOString()
        };
    }

    /**
     * EXTENSION HOOK: Load data from integration
     * Used by OPORD/MDMP/JPP to restore state
     * 
     * @param {object} data - Combined data from integration
     * @returns {object} Load result
     */
    async loadIntegrationData(data) {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Tool not initialized'
            };
        }

        try {
            // Restore location
            if (data.location) {
                this.currentLocation = data.location;
            }

            // Restore map state
            if (data.map) {
                this.mapTool.loadIntegrationData(data.map);
            }

            // Restore weather state (re-fetch for fresh data)
            if (data.weather && data.weather.location) {
                await this.weatherTool.fetchAllWeatherData(
                    data.weather.location.lat,
                    data.weather.location.lon
                );
            }

            return {
                success: true,
                message: 'Data loaded successfully'
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
     * EXTENSION HOOK: Create MDMP-specific wrapper
     * Returns configuration for MDMP integration
     * 
     * @returns {object} MDMP configuration
     */
    getMDMPConfig() {
        return {
            enableMultiCOA: true,
            enableDecisionPoints: true,
            enableWeatherTimeline: true,
            enableWeatherImpactAnalysis: true,
            timelineIntervals: [0, 6, 12, 18, 24, 48, 72]
        };
    }

    /**
     * EXTENSION HOOK: Create JPP-specific wrapper
     * Returns configuration for JPP integration
     * 
     * @returns {object} JPP configuration
     */
    getJPPConfig() {
        return {
            enableTheaterView: true,
            enableMultiDomainOverlays: true,
            enableMilStdSymbology: true,
            enableCoalitionSymbology: true,
            enableMultiLocationWeather: true,
            maxLocations: 10
        };
    }

    /**
     * Cleanup and destroy tool
     */
    cleanup() {
        if (this.mapTool) {
            this.mapTool.cleanup();
        }

        if (this.weatherTool) {
            this.weatherTool.cleanup();
        }

        this.currentLocation = null;
        this.initialized = false;
    }
}

export default MappingWeatherTool;

