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
            // Fetch from API proxy
            const response = await fetch(`${WeatherConfig.api.weather}?lat=${lat}&lon=${lon}&units=${units}`);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            // Cache the data
            this.cache.set(lat, lon, 'weather', data);

            this.currentData = data;

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
     * Create weather card HTML
     * 
     * @returns {string} HTML string
     */
    createWeatherCardHTML() {
        const formatted = this.getFormattedData();
        if (!formatted) {
            return '<div>No weather data available</div>';
        }

        const impact = this.getTacticalImpact();
        const visCategory = this.getVisibilityCategory();
        const windCategory = this.getWindCategory();

        return `
            <div class="weather-card" style="
                background: ${WeatherConfig.ui.cardBackgroundColor};
                color: ${WeatherConfig.ui.cardTextColor};
                border-radius: ${WeatherConfig.ui.cardBorderRadius};
                padding: 0.75rem;
            ">
                <div class="weather-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <div>
                        <h3 style="margin: 0; font-size: 1rem;">${formatted.location}, ${formatted.country}</h3>
                        <p style="margin: 0.125rem 0 0 0; font-size: 0.75rem; opacity: 0.8;">${formatted.description}</p>
                    </div>
                    <div style="text-align: center;">
                        <i class="fas ${formatted.iconClass}" style="color: ${formatted.iconColor}; font-size: 2rem;"></i>
                    </div>
                </div>

                <div class="weather-main" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; margin-bottom: 0.5rem; font-size: 0.75rem;">
                    <div>
                        <div style="font-size: 1.5rem; font-weight: bold;">${formatted.temperature}</div>
                        <div style="opacity: 0.8;">Feels ${formatted.feelsLike}</div>
                    </div>
                    <div>
                        <div>High: ${formatted.tempMax}</div>
                        <div>Low: ${formatted.tempMin}</div>
                    </div>
                    <div>
                        <div><strong>Wind:</strong> ${formatted.windSpeed}</div>
                        <div><strong>Humid:</strong> ${formatted.humidity}</div>
                    </div>
                </div>

                <div class="weather-details" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.375rem; font-size: 0.75rem; margin-bottom: 0.5rem;">
                    <div><strong>Vis:</strong> ${formatted.visibility}</div>
                    <div><strong>Press:</strong> ${formatted.pressure}</div>
                    <div><strong>Clouds:</strong> ${formatted.clouds}</div>
                </div>

                <div class="tactical-impact" style="padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.2);">
                    <div style="font-weight: bold; margin-bottom: 0.375rem; font-size: 0.75rem;">Tactical Impact:</div>
                    <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.375rem; font-size: 0.75rem;">
                        <div>
                            <span style="color: ${WeatherIconMapper.getImpactColor(impact.mobility)};">●</span>
                            ${impact.mobility}
                        </div>
                        <div>
                            <span style="color: ${WeatherIconMapper.getImpactColor(impact.visibility)};">●</span>
                            ${impact.visibility}
                        </div>
                        <div>
                            <span style="color: ${WeatherIconMapper.getImpactColor(impact.communications)};">●</span>
                            ${impact.communications}
                        </div>
                        <div>
                            <span style="color: ${WeatherIconMapper.getImpactColor(impact.aviation)};">●</span>
                            ${impact.aviation}
                        </div>
                    </div>
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

