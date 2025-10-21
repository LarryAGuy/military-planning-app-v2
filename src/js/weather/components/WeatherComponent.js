/**
 * Weather Component
 * 
 * Purpose: Fetch and display current weather data
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { WeatherConfig } from '../config.js';
import { WeatherCache } from './WeatherCache.js';
import { UnitConverter } from '../utils/UnitConverter.js';
import { WeatherIconMapper } from '../utils/WeatherIconMapper.js';

export class WeatherComponent {
    constructor() {
        this.cache = new WeatherCache();
        this.currentData = null;
        this.units = WeatherConfig.defaults.units;
        this.currentLocation = null; // Store current location for display
    }

    /**
     * Fetch current weather data
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {string} units - Unit system ('imperial', 'metric', 'standard')
     * @returns {Promise<object>} Weather data
     */
    async fetchWeather(lat, lon, units = 'imperial') {
        console.log(`🌤️ WeatherComponent.fetchWeather called with units: ${units}`);
        this.units = units;

        // Check cache first
        const cached = this.cache.get(lat, lon, 'weather');
        if (cached) {
            console.log('✅ Using cached weather data');
            this.currentData = cached;
            return {
                success: true,
                data: cached,
                cached: true
            };
        }

        try {
            // Determine if running on localhost (development mode)
            const isLocalhost = window.location.hostname === 'localhost' ||
                               window.location.hostname === '127.0.0.1' ||
                               window.location.hostname === '';

            let apiUrl;

            if (isLocalhost) {
                // Development mode: Call OpenWeather API directly with API key
                // ⚠️ WARNING: API key exposed in client-side code - localhost only!
                const DEV_API_KEY = '0a9e5642cb35da74f9ab86d19f6d78c4';
                apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${DEV_API_KEY}&units=${units}`;
                console.log('[DEV MODE] Calling OpenWeather API directly:', apiUrl.replace(DEV_API_KEY, 'API_KEY_HIDDEN'));
            } else {
                // Production mode: Use Vercel serverless function proxy
                apiUrl = `${WeatherConfig.api.weather}?lat=${lat}&lon=${lon}&units=${units}`;
            }

            // Fetch from API
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            // Cache the data
            this.cache.set(lat, lon, 'weather', data);

            this.currentData = data;

            // Store location data for display
            this.currentLocation = {
                lat: lat,
                lon: lon,
                name: data.name || null,
                country: data.sys?.country || null
            };

            return {
                success: true,
                data: data,
                cached: false
            };
        } catch (error) {
            console.error('Weather fetch error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Get formatted weather data
     * 
     * @returns {object|null} Formatted weather data
     */
    getFormattedData() {
        if (!this.currentData) {
            return null;
        }

        const data = this.currentData;

        return {
            temperature: UnitConverter.formatTemperature(data.main.temp, this.units),
            feelsLike: UnitConverter.formatTemperature(data.main.feels_like, this.units),
            tempMin: UnitConverter.formatTemperature(data.main.temp_min, this.units),
            tempMax: UnitConverter.formatTemperature(data.main.temp_max, this.units),
            pressure: UnitConverter.formatPressure(data.main.pressure, this.units),
            humidity: `${data.main.humidity}%`,
            visibility: UnitConverter.formatVisibility(data.visibility, this.units),
            windSpeed: UnitConverter.formatWindSpeed(data.wind.speed, this.units),
            windDirection: UnitConverter.getWindDirection(data.wind.deg),
            windDirectionDeg: data.wind.deg,
            clouds: `${data.clouds.all}%`,
            condition: data.weather[0].main,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            iconClass: WeatherIconMapper.getIcon(data.weather[0].icon),
            iconColor: WeatherIconMapper.getColor(data.weather[0].icon),
            location: data.name,
            country: data.sys.country,
            sunrise: new Date(data.sys.sunrise * 1000),
            sunset: new Date(data.sys.sunset * 1000),
            timestamp: new Date(data.dt * 1000)
        };
    }

    /**
     * Get tactical impact assessment
     * 
     * @returns {object|null} Tactical impact data
     */
    getTacticalImpact() {
        if (!this.currentData) {
            return null;
        }

        const data = this.currentData;
        const visibilityKm = data.visibility / 1000;

        return WeatherIconMapper.getTacticalImpact(
            data.weather[0].icon,
            data.wind.speed,
            visibilityKm
        );
    }

    /**
     * Get visibility category
     * 
     * @returns {object|null} Visibility category
     */
    getVisibilityCategory() {
        if (!this.currentData) {
            return null;
        }

        const visibilityKm = this.currentData.visibility / 1000;
        return UnitConverter.getVisibilityCategory(visibilityKm);
    }

    /**
     * Get wind category
     * 
     * @returns {object|null} Wind category
     */
    getWindCategory() {
        if (!this.currentData) {
            return null;
        }

        // Convert wind speed to mph for categorization
        const windMph = this.units === 'imperial' 
            ? this.currentData.wind.speed 
            : UnitConverter.convertWindSpeed(this.currentData.wind.speed, 'm/s', 'mph');

        return UnitConverter.getWindCategory(windMph);
    }

    /**
     * Get location display string
     *
     * @returns {string} Location display string (name and/or MGRS)
     */
    getLocationDisplay() {
        if (!this.currentLocation) {
            return '';
        }

        const parts = [];

        // Add location name if available
        if (this.currentLocation.name) {
            let locationStr = this.currentLocation.name;
            if (this.currentLocation.country) {
                locationStr += `, ${this.currentLocation.country}`;
            }
            parts.push(locationStr);
        }

        // Add MGRS coordinates if mgrs library is available
        if (window.mgrs && this.currentLocation.lat && this.currentLocation.lon) {
            try {
                const mgrsCoord = window.mgrs.forward([this.currentLocation.lon, this.currentLocation.lat], 5);
                // Format MGRS: 18S UJ 23480 06470
                const formatted = this.formatMGRS(mgrsCoord);
                parts.push(formatted);
            } catch (error) {
                console.warn('MGRS conversion failed:', error);
            }
        }

        return parts.length > 0 ? ` - ${parts.join(' | ')}` : '';
    }

    /**
     * Format MGRS string with spaces for readability
     *
     * @param {string} mgrs - MGRS string without spaces
     * @returns {string} Formatted MGRS string
     */
    formatMGRS(mgrs) {
        const match = mgrs.match(/^(\d{1,2}[A-Z])([A-Z]{2})(\d+)$/);
        if (!match) {
            return mgrs;
        }

        const [, gridZone, gridSquare, digits] = match;
        const halfLen = Math.floor(digits.length / 2);
        const easting = digits.substring(0, halfLen);
        const northing = digits.substring(halfLen);

        return `${gridZone} ${gridSquare} ${easting} ${northing}`;
    }

    /**
     * Create weather card HTML (Ultra-Compact Horizontal Layout)
     *
     * @returns {string} HTML string
     */
    createWeatherCardHTML() {
        const formatted = this.getFormattedData();
        if (!formatted) {
            return '<div>No weather data available</div>';
        }

        const locationDisplay = this.getLocationDisplay();

        return `
            <div class="weather-card" style="
                background: ${WeatherConfig.ui.cardBackgroundColor};
                color: ${WeatherConfig.ui.cardTextColor};
                border-radius: ${WeatherConfig.ui.cardBorderRadius};
                padding: 0.5rem;
                margin-bottom: 0.5rem;
            ">
                <h3 style="
                    color: #3b82f6;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    margin: 0 0 0.375rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    line-height: 1.2;
                ">
                    <i class="fas fa-cloud-sun"></i>
                    <span>Current Weather${locationDisplay}</span>
                </h3>
                <div class="weather-data-row" style="
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.5rem;
                    color: #d1d5db;
                    font-size: 0.75rem;
                    line-height: 1.3;
                ">
                    <i class="fas ${formatted.iconClass}" style="color: #fbbf24; font-size: 1rem; margin-right: 0.375rem;"></i>
                    <span>${formatted.temperature}</span>
                    <span style="color: #6b7280; margin: 0 0.25rem;">|</span>
                    <span>Wind: ${formatted.windSpeed} ${formatted.windDirection}</span>
                    <span style="color: #6b7280; margin: 0 0.25rem;">|</span>
                    <span>Humidity: ${formatted.humidity}</span>
                    <span style="color: #6b7280; margin: 0 0.25rem;">|</span>
                    <span>Pressure: ${formatted.pressure}</span>
                    <span style="color: #6b7280; margin: 0 0.25rem;">|</span>
                    <span>Visibility: ${formatted.visibility}</span>
                    <span style="color: #6b7280; margin: 0 0.25rem;">|</span>
                    <span>${formatted.description}</span>
                </div>
            </div>
        `;
    }

    /**
     * Get current data
     * 
     * @returns {object|null} Current weather data
     */
    getCurrentData() {
        return this.currentData;
    }

    /**
     * Clear current data
     */
    clearData() {
        this.currentData = null;
    }

    /**
     * Get cache instance
     * 
     * @returns {object} WeatherCache instance
     */
    getCache() {
        return this.cache;
    }

    /**
     * Set units
     * 
     * @param {string} units - Unit system ('imperial', 'metric', 'standard')
     */
    setUnits(units) {
        this.units = units;
    }

    /**
     * Get units
     * 
     * @returns {string} Current unit system
     */
    getUnits() {
        return this.units;
    }
}

export default WeatherComponent;

