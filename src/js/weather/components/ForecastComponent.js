/**
 * Forecast Component
 * 
 * Purpose: Fetch and display weather forecast data (3-day, 3-hour intervals)
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { WeatherConfig } from '../config.js';
import { WeatherCache } from './WeatherCache.js';
import { UnitConverter } from '../utils/UnitConverter.js';
import { WeatherIconMapper } from '../utils/WeatherIconMapper.js';

export class ForecastComponent {
    constructor() {
        this.cache = new WeatherCache();
        this.forecastData = null;
        this.units = WeatherConfig.defaults.units;
    }

    /**
     * Fetch forecast data
     *
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {string} units - Unit system ('imperial', 'metric', 'standard')
     * @param {number} count - Number of forecast entries (default: 40 for 5 days)
     * @returns {Promise<object>} Forecast data
     */
    async fetchForecast(lat, lon, units = 'imperial', count = 40) {
        console.log(`🌦️ ForecastComponent.fetchForecast called with units: ${units}`);
        this.units = units;

        // Check cache first
        const cached = this.cache.get(lat, lon, 'forecast');
        if (cached) {
            console.log('✅ Using cached forecast data');
            this.forecastData = cached;
            return {
                success: true,
                data: cached,
                cached: true
            };
        }

        try {
            // Fetch from API proxy
            const apiUrl = `${WeatherConfig.api.forecast}?lat=${lat}&lon=${lon}&units=${units}&cnt=${count}`;
            console.log('🌦️ Forecast API URL constructed:', apiUrl);
            console.log('🌦️ Units parameter in forecast API call:', units);

            const response = await fetch(apiUrl);

            if (!response.ok) {
                console.error('🌦️ ❌ Forecast API request failed:', response.status, response.statusText);
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            console.log('🌦️ ✅ Forecast API response received');
            console.log('🌦️ Sample forecast temperature:', data.list?.[0]?.main?.temp, '(units:', units, ')');

            // Cache the data
            this.cache.set(lat, lon, 'forecast', data);
            console.log('🌦️ Forecast data cached');

            this.forecastData = data;

            return {
                success: true,
                data: data,
                cached: false
            };
        } catch (error) {
            console.error('Forecast fetch error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Get formatted forecast entries
     * 
     * @returns {array} Array of formatted forecast entries
     */
    getFormattedForecast() {
        if (!this.forecastData || !this.forecastData.list) {
            return [];
        }

        return this.forecastData.list.map(entry => ({
            timestamp: new Date(entry.dt * 1000),
            temperature: UnitConverter.formatTemperature(entry.main.temp, this.units),
            tempValue: entry.main.temp,
            feelsLike: UnitConverter.formatTemperature(entry.main.feels_like, this.units),
            tempMin: UnitConverter.formatTemperature(entry.main.temp_min, this.units),
            tempMax: UnitConverter.formatTemperature(entry.main.temp_max, this.units),
            pressure: UnitConverter.formatPressure(entry.main.pressure, this.units),
            humidity: `${entry.main.humidity}%`,
            windSpeed: UnitConverter.formatWindSpeed(entry.wind.speed, this.units),
            windDirection: UnitConverter.getWindDirection(entry.wind.deg),
            windDirectionDeg: entry.wind.deg,
            clouds: `${entry.clouds.all}%`,
            condition: entry.weather[0].main,
            description: entry.weather[0].description,
            icon: entry.weather[0].icon,
            iconClass: WeatherIconMapper.getIcon(entry.weather[0].icon),
            iconColor: WeatherIconMapper.getColor(entry.weather[0].icon),
            pop: entry.pop ? `${(entry.pop * 100).toFixed(0)}%` : '0%', // Probability of precipitation
            rain: entry.rain ? `${entry.rain['3h'] || 0} mm` : '0 mm',
            snow: entry.snow ? `${entry.snow['3h'] || 0} mm` : '0 mm'
        }));
    }

    /**
     * Get forecast grouped by day
     * 
     * @returns {object} Forecast grouped by day
     */
    getForecastByDay() {
        const formatted = this.getFormattedForecast();
        const grouped = {};

        formatted.forEach(entry => {
            const date = entry.timestamp.toLocaleDateString();
            if (!grouped[date]) {
                grouped[date] = [];
            }
            grouped[date].push(entry);
        });

        return grouped;
    }

    /**
     * Get daily summary (high/low temps, conditions)
     * 
     * @returns {array} Array of daily summaries
     */
    getDailySummary() {
        const byDay = this.getForecastByDay();
        const summaries = [];

        for (const [date, entries] of Object.entries(byDay)) {
            const temps = entries.map(e => e.tempValue);
            const high = Math.max(...temps);
            const low = Math.min(...temps);

            // Get most common condition
            const conditions = entries.map(e => e.condition);
            const mostCommon = conditions.sort((a, b) =>
                conditions.filter(c => c === a).length - conditions.filter(c => c === b).length
            ).pop();

            // Get icon for most common condition
            const conditionEntry = entries.find(e => e.condition === mostCommon);

            summaries.push({
                date: new Date(entries[0].timestamp),
                dateString: date,
                high: UnitConverter.formatTemperature(high, this.units),
                low: UnitConverter.formatTemperature(low, this.units),
                condition: mostCommon,
                icon: conditionEntry ? conditionEntry.iconClass : 'fa-cloud',
                iconColor: conditionEntry ? conditionEntry.iconColor : '#9ca3af',
                entries: entries
            });
        }

        return summaries;
    }

    /**
     * Create forecast card HTML (Ultra-Compact 5-Day Horizontal Layout)
     *
     * @returns {string} HTML string
     */
    createForecastCardHTML() {
        const dailySummary = this.getDailySummary();
        if (dailySummary.length === 0) {
            return '<div>No forecast data available</div>';
        }

        // Get first 5 days
        const forecastDays = dailySummary.slice(0, 5);

        let html = `
            <div class="forecast-card" style="
                background: ${WeatherConfig.ui.cardBackgroundColor};
                color: ${WeatherConfig.ui.cardTextColor};
                border-radius: ${WeatherConfig.ui.cardBorderRadius};
                padding: 0.5rem;
                margin-bottom: 0.5rem;
            ">
                <h3 style="
                    color: #10b981;
                    font-size: 0.8125rem;
                    font-weight: 600;
                    margin: 0 0 0.375rem 0;
                    display: flex;
                    align-items: center;
                    gap: 0.375rem;
                    line-height: 1.2;
                ">
                    <i class="fas fa-calendar-alt"></i>
                    5-Day Forecast
                </h3>
                <div class="forecast-data-row" style="
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.5rem;
                    color: #d1d5db;
                    font-size: 0.75rem;
                    line-height: 1.3;
                ">
        `;

        forecastDays.forEach((day, index) => {
            const dayLabel = index === 0 ? 'Tomorrow' : `Day ${index + 1}`;

            html += `
                    <span>
                        <i class="fas ${day.icon}" style="color: #fbbf24; font-size: 0.875rem; margin-right: 0.25rem;"></i>
                        ${dayLabel}: ${day.high} / ${day.low}
                    </span>
            `;

            // Add separator except after last item
            if (index < forecastDays.length - 1) {
                html += `<span style="color: #6b7280; margin: 0 0.25rem;">|</span>`;
            }
        });

        html += `
                </div>
            </div>
        `;

        return html;
    }

    /**
     * Create detailed forecast table HTML
     * 
     * @returns {string} HTML string
     */
    createDetailedForecastHTML() {
        const formatted = this.getFormattedForecast();
        if (formatted.length === 0) {
            return '<div>No forecast data available</div>';
        }

        let html = `
            <div class="forecast-table" style="
                background: ${WeatherConfig.ui.cardBackgroundColor};
                color: ${WeatherConfig.ui.cardTextColor};
                border-radius: ${WeatherConfig.ui.cardBorderRadius};
                padding: ${WeatherConfig.ui.cardPadding};
                overflow-x: auto;
            ">
                <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem;">Detailed Forecast</h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 0.875rem;">
                    <thead>
                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.2);">
                            <th style="padding: 0.5rem; text-align: left;">Time</th>
                            <th style="padding: 0.5rem; text-align: center;">Condition</th>
                            <th style="padding: 0.5rem; text-align: right;">Temp</th>
                            <th style="padding: 0.5rem; text-align: right;">Wind</th>
                            <th style="padding: 0.5rem; text-align: right;">Precip</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        formatted.forEach(entry => {
            html += `
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                    <td style="padding: 0.5rem;">${entry.timestamp.toLocaleString('en-US', { weekday: 'short', hour: 'numeric' })}</td>
                    <td style="padding: 0.5rem; text-align: center;">
                        <i class="fas ${entry.iconClass}" style="color: ${entry.iconColor};"></i>
                        ${entry.description}
                    </td>
                    <td style="padding: 0.5rem; text-align: right;">${entry.temperature}</td>
                    <td style="padding: 0.5rem; text-align: right;">${entry.windSpeed} ${entry.windDirection}</td>
                    <td style="padding: 0.5rem; text-align: right;">${entry.pop}</td>
                </tr>
            `;
        });

        html += `
                    </tbody>
                </table>
            </div>
        `;

        return html;
    }

    /**
     * EXTENSION HOOK: Get MDMP weather timeline
     * Used in Phase 8 for MDMP integration
     * 
     * @param {array} intervals - Time intervals in hours [0, 6, 12, 18, 24, 48, 72]
     * @returns {array} Weather data at specified intervals
     */
    getMDMPWeatherTimeline(intervals = [0, 6, 12, 18, 24, 48, 72]) {
        const formatted = this.getFormattedForecast();
        const timeline = [];

        intervals.forEach(hours => {
            // Find closest forecast entry to the interval
            const targetTime = Date.now() + (hours * 60 * 60 * 1000);
            const closest = formatted.reduce((prev, curr) => {
                const prevDiff = Math.abs(prev.timestamp.getTime() - targetTime);
                const currDiff = Math.abs(curr.timestamp.getTime() - targetTime);
                return currDiff < prevDiff ? curr : prev;
            });

            timeline.push({
                hours: hours,
                ...closest
            });
        });

        return timeline;
    }

    /**
     * Get forecast data
     * 
     * @returns {object|null} Forecast data
     */
    getForecastData() {
        return this.forecastData;
    }

    /**
     * Clear forecast data
     */
    clearData() {
        this.forecastData = null;
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

export default ForecastComponent;

