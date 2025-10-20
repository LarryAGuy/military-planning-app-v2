/**
 * Weather Tool - Main Entry Point
 * 
 * Purpose: Standalone weather tool orchestrator
 * Coordinates all weather components and provides unified API
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { WeatherConfig } from './config.js';
import { WeatherComponent } from './components/WeatherComponent.js';
import { ForecastComponent } from './components/ForecastComponent.js';
import { TacticalDataComponent } from './components/TacticalDataComponent.js';
import { CDNLoader } from '../utils/CDNLoader.js';

export class WeatherTool {
    constructor() {
        this.weatherComponent = new WeatherComponent();
        this.forecastComponent = new ForecastComponent();
        this.tacticalDataComponent = new TacticalDataComponent();
        this.cdnLoader = new CDNLoader();
        this.initialized = false;
        this.libraries = {};
        this.currentLocation = null;
        this.units = WeatherConfig.defaults.units;
    }

    /**
     * Initialize the weather tool
     * 
     * @param {object} options - Initialization options
     * @param {string} options.units - Unit system ('imperial', 'metric', 'standard')
     * @returns {Promise<object>} Initialization result
     */
    async initialize(options = {}) {
        try {
            // Set units
            this.units = options.units || WeatherConfig.defaults.units;
            this.weatherComponent.setUnits(this.units);
            this.forecastComponent.setUnits(this.units);

            // Load required libraries
            await this.loadLibraries();

            // Initialize tactical data component
            this.tacticalDataComponent.initialize(this.libraries.SunCalc);

            this.initialized = true;

            return {
                success: true,
                message: 'Weather tool initialized successfully'
            };
        } catch (error) {
            console.error('Weather tool initialization error:', error);
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
            // Load SunCalc library
            await this.cdnLoader.loadLibrary('suncalc');

            // Store library references
            this.libraries = {
                SunCalc: window.SunCalc
            };

            console.log('✅ All weather libraries loaded successfully');
        } catch (error) {
            console.error('❌ Failed to load weather libraries:', error);
            throw error;
        }
    }

    /**
     * Fetch all weather data for location
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {object} options - Fetch options
     * @param {boolean} options.includeWeather - Fetch current weather (default: true)
     * @param {boolean} options.includeForecast - Fetch forecast (default: true)
     * @param {boolean} options.includeTactical - Calculate tactical data (default: true)
     * @returns {Promise<object>} Combined weather data
     */
    async fetchAllWeatherData(lat, lon, options = {}) {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Weather tool not initialized'
            };
        }

        const includeWeather = options.includeWeather !== false;
        const includeForecast = options.includeForecast !== false;
        const includeTactical = options.includeTactical !== false;

        const results = {
            success: true,
            weather: null,
            forecast: null,
            tactical: null
        };

        try {
            // Fetch current weather
            if (includeWeather) {
                const weatherResult = await this.weatherComponent.fetchWeather(lat, lon, this.units);
                if (weatherResult.success) {
                    results.weather = weatherResult.data;
                } else {
                    results.success = false;
                    results.weatherError = weatherResult.error;
                }
            }

            // Fetch forecast
            if (includeForecast) {
                const forecastResult = await this.forecastComponent.fetchForecast(lat, lon, this.units);
                if (forecastResult.success) {
                    results.forecast = forecastResult.data;
                } else {
                    results.success = false;
                    results.forecastError = forecastResult.error;
                }
            }

            // Calculate tactical data
            if (includeTactical) {
                try {
                    results.tactical = this.tacticalDataComponent.calculateTacticalData(lat, lon);
                } catch (error) {
                    results.success = false;
                    results.tacticalError = error.message;
                }
            }

            // Store current location
            this.currentLocation = { lat, lon };

            return results;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Get all formatted data
     * 
     * @returns {object} All formatted weather data
     */
    getAllFormattedData() {
        return {
            weather: this.weatherComponent.getFormattedData(),
            forecast: this.forecastComponent.getFormattedForecast(),
            dailySummary: this.forecastComponent.getDailySummary(),
            tactical: this.tacticalDataComponent.getFormattedData()
        };
    }

    /**
     * Create complete weather display HTML (Ultra-Compact Layout)
     *
     * @returns {string} HTML string
     */
    createWeatherDisplayHTML() {
        const weatherHTML = this.weatherComponent.createWeatherCardHTML();
        const forecastHTML = this.forecastComponent.createForecastCardHTML();
        const tacticalHTML = this.tacticalDataComponent.createTacticalDataCardHTML({ includeControls: true });

        return `
            <div class="weather-display" style="display: grid; gap: 0;">
                ${weatherHTML}
                ${tacticalHTML}
                ${forecastHTML}
            </div>
        `;
    }

    /**
     * Clear all weather data
     * Removes all displayed weather information
     */
    clearAllWeatherData() {
        this.weatherComponent.clearData();
        this.forecastComponent.clearData();
        this.tacticalDataComponent.clearData();
        this.currentLocation = null;
    }

    /**
     * Get weather component
     * 
     * @returns {object} WeatherComponent instance
     */
    getWeatherComponent() {
        return this.weatherComponent;
    }

    /**
     * Get forecast component
     * 
     * @returns {object} ForecastComponent instance
     */
    getForecastComponent() {
        return this.forecastComponent;
    }

    /**
     * Get tactical data component
     * 
     * @returns {object} TacticalDataComponent instance
     */
    getTacticalDataComponent() {
        return this.tacticalDataComponent;
    }

    /**
     * Set units
     * 
     * @param {string} units - Unit system ('imperial', 'metric', 'standard')
     */
    setUnits(units) {
        this.units = units;
        this.weatherComponent.setUnits(units);
        this.forecastComponent.setUnits(units);
    }

    /**
     * Get units
     * 
     * @returns {string} Current unit system
     */
    getUnits() {
        return this.units;
    }

    /**
     * Get current location
     * 
     * @returns {object|null} Current location {lat, lon}
     */
    getCurrentLocation() {
        return this.currentLocation;
    }

    /**
     * Clear all data
     */
    clearAllData() {
        this.weatherComponent.clearData();
        this.forecastComponent.clearData();
        this.tacticalDataComponent.clearData();
        this.currentLocation = null;
    }

    /**
     * Get cache statistics
     * 
     * @returns {object} Cache statistics
     */
    getCacheStats() {
        return this.weatherComponent.getCache().getStats();
    }

    /**
     * Clear cache
     * 
     * @returns {boolean} Success status
     */
    clearCache() {
        return this.weatherComponent.getCache().clearAll();
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
     * @returns {object} WeatherConfig
     */
    getConfig() {
        return WeatherConfig;
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
                // Enable MDMP-specific features
                WeatherConfig.mdmp.enableWeatherTimeline = true;
                WeatherConfig.mdmp.enableWeatherImpactAnalysis = true;
                break;

            case 'jpp':
                // Enable JPP-specific features
                WeatherConfig.jpp.enableTheaterWeather = true;
                WeatherConfig.jpp.enableMultiLocationWeather = true;
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
     * Used by OPORD/MDMP/JPP to extract weather data
     * 
     * @returns {object} Weather data for integration
     */
    getIntegrationData() {
        if (!this.initialized) {
            return null;
        }

        return {
            location: this.currentLocation,
            units: this.units,
            weather: this.weatherComponent.getCurrentData(),
            forecast: this.forecastComponent.getForecastData(),
            tactical: this.tacticalDataComponent.getCurrentData(),
            timestamp: new Date().toISOString(),
            mode: this.integrationMode || 'standalone'
        };
    }

    /**
     * EXTENSION HOOK: Load data from integration
     * Used by OPORD/MDMP/JPP to restore weather state
     * 
     * @param {object} data - Weather data from integration
     * @returns {object} Load result
     */
    loadIntegrationData(data) {
        if (!this.initialized) {
            return {
                success: false,
                error: 'Weather tool not initialized'
            };
        }

        try {
            // Note: This would restore cached data
            // In practice, we'd re-fetch fresh data for the location
            if (data.location) {
                this.currentLocation = data.location;
            }

            if (data.units) {
                this.setUnits(data.units);
            }

            return {
                success: true,
                message: 'Weather data loaded successfully'
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
        this.clearAllData();
        this.initialized = false;
    }
}

export default WeatherTool;

