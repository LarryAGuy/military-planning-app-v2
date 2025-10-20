/**
 * Tactical Data Component
 * 
 * Purpose: Calculate tactical data (BMNT, EENT, moon phase, sunrise/sunset)
 * Uses SunCalc library for astronomical calculations
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { WeatherConfig } from '../config.js';

export class TacticalDataComponent {
    constructor() {
        this.sunCalc = null;
        this.currentData = null;
    }

    /**
     * Initialize with SunCalc library
     * 
     * @param {object} sunCalc - SunCalc library instance
     */
    initialize(sunCalc) {
        this.sunCalc = sunCalc;
    }

    /**
     * Calculate tactical data for location and date
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {Date} date - Date for calculations (default: today)
     * @returns {object} Tactical data
     */
    calculateTacticalData(lat, lon, date = new Date()) {
        if (!this.sunCalc) {
            throw new Error('SunCalc library not initialized');
        }

        // Get sun times
        const times = this.sunCalc.getTimes(date, lat, lon);

        // Get moon data
        const moonIllumination = this.sunCalc.getMoonIllumination(date);
        const moonTimes = this.sunCalc.getMoonTimes(date, lat, lon);

        // Calculate BMNT and EENT
        const bmnt = times.nauticalDawn;
        const eent = times.nauticalDusk;

        this.currentData = {
            // Sun data
            sunrise: times.sunrise,
            sunset: times.sunset,
            solarNoon: times.solarNoon,
            
            // Twilight times
            bmnt: bmnt, // Begin Morning Nautical Twilight
            eent: eent, // End Evening Nautical Twilight
            civilDawn: times.dawn,
            civilDusk: times.dusk,
            nauticalDawn: times.nauticalDawn,
            nauticalDusk: times.nauticalDusk,
            astronomicalDawn: times.nightEnd,
            astronomicalDusk: times.night,

            // Daylight duration
            daylightHours: this.calculateDaylightHours(times.sunrise, times.sunset),
            
            // Moon data
            moonPhase: moonIllumination.phase,
            moonPhaseName: this.getMoonPhaseName(moonIllumination.phase),
            moonIllumination: (moonIllumination.fraction * 100).toFixed(1) + '%',
            moonrise: moonTimes.rise,
            moonset: moonTimes.set,

            // Calculated fields
            date: date,
            latitude: lat,
            longitude: lon
        };

        return this.currentData;
    }

    /**
     * Calculate daylight hours
     * 
     * @param {Date} sunrise - Sunrise time
     * @param {Date} sunset - Sunset time
     * @returns {string} Daylight hours formatted as "HH:MM"
     */
    calculateDaylightHours(sunrise, sunset) {
        const diff = sunset - sunrise;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}h ${minutes}m`;
    }

    /**
     * Get moon phase name from phase value
     * 
     * @param {number} phase - Moon phase (0-1)
     * @returns {string} Moon phase name
     */
    getMoonPhaseName(phase) {
        const phases = WeatherConfig.tactical.moonPhases;
        const index = Math.round(phase * 8) % 8;
        return phases[index];
    }

    /**
     * Format time for display
     * 
     * @param {Date} time - Time to format
     * @returns {string} Formatted time
     */
    formatTime(time) {
        if (!time || isNaN(time.getTime())) {
            return 'N/A';
        }
        return time.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false 
        });
    }

    /**
     * Get formatted tactical data
     * 
     * @returns {object|null} Formatted tactical data
     */
    getFormattedData() {
        if (!this.currentData) {
            return null;
        }

        const data = this.currentData;

        return {
            bmnt: this.formatTime(data.bmnt),
            eent: this.formatTime(data.eent),
            sunrise: this.formatTime(data.sunrise),
            sunset: this.formatTime(data.sunset),
            civilDawn: this.formatTime(data.civilDawn),
            civilDusk: this.formatTime(data.civilDusk),
            nauticalDawn: this.formatTime(data.nauticalDawn),
            nauticalDusk: this.formatTime(data.nauticalDusk),
            astronomicalDawn: this.formatTime(data.astronomicalDawn),
            astronomicalDusk: this.formatTime(data.astronomicalDusk),
            solarNoon: this.formatTime(data.solarNoon),
            daylightHours: data.daylightHours,
            moonPhase: data.moonPhaseName,
            moonIllumination: data.moonIllumination,
            moonrise: this.formatTime(data.moonrise),
            moonset: this.formatTime(data.moonset),
            date: data.date.toLocaleDateString()
        };
    }

    /**
     * Create tactical data card HTML (Ultra-Compact with Integrated Controls)
     *
     * @param {object} options - Options for rendering
     * @param {boolean} options.includeControls - Include unit toggle and clear button (default: true)
     * @returns {string} HTML string
     */
    createTacticalDataCardHTML(options = {}) {
        const { includeControls = true } = options;
        const formatted = this.getFormattedData();
        if (!formatted) {
            return '<div>No tactical data available</div>';
        }

        return `
            <div class="tactical-card" style="
                background: ${WeatherConfig.ui.cardBackgroundColor};
                color: ${WeatherConfig.ui.cardTextColor};
                border-radius: ${WeatherConfig.ui.cardBorderRadius};
                padding: 0.5rem;
                margin-bottom: 0.5rem;
            ">
                <div class="tactical-header" style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 0.375rem;
                    gap: 0.5rem;
                    flex-wrap: wrap;
                ">
                    <h3 style="
                        color: #a855f7;
                        font-size: 0.8125rem;
                        font-weight: 600;
                        margin: 0;
                        display: flex;
                        align-items: center;
                        gap: 0.375rem;
                        line-height: 1.2;
                    ">
                        <i class="fas fa-crosshairs"></i>
                        Tactical Data
                    </h3>
                    ${includeControls ? `
                    <div class="tactical-controls" style="
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    ">
                        <div class="unit-toggle" id="unit-toggle" style="
                            display: flex;
                            background: #374151;
                            border-radius: 0.375rem;
                            padding: 0.25rem;
                            gap: 0.25rem;
                            height: 32px;
                            align-items: center;
                        ">
                            <button class="unit-toggle-btn" id="metric-btn" style="
                                padding: 0.375rem 0.75rem;
                                background: #3b82f6;
                                color: #ffffff;
                                border: none;
                                border-radius: 0.25rem;
                                font-size: 0.75rem;
                                font-weight: 600;
                                cursor: pointer;
                                transition: all 0.2s;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                white-space: nowrap;
                            " onmouseover="if(this.style.background !== 'rgb(59, 130, 246)') this.style.background='#4b5563'" onmouseout="if(this.style.background !== 'rgb(59, 130, 246)') this.style.background='transparent'">
                                Metric
                            </button>
                            <button class="unit-toggle-btn" id="imperial-btn" style="
                                padding: 0.375rem 0.75rem;
                                background: transparent;
                                color: #9ca3af;
                                border: none;
                                border-radius: 0.25rem;
                                font-size: 0.75rem;
                                font-weight: 600;
                                cursor: pointer;
                                transition: all 0.2s;
                                height: 100%;
                                display: flex;
                                align-items: center;
                                white-space: nowrap;
                            " onmouseover="if(this.style.background !== 'rgb(59, 130, 246)') this.style.background='#4b5563'" onmouseout="if(this.style.background !== 'rgb(59, 130, 246)') this.style.background='transparent'">
                                Imperial
                            </button>
                        </div>
                        <button class="clear-weather-btn" id="clear-weather-btn" style="
                            padding: 0.375rem 0.75rem;
                            background: #dc2626;
                            color: white;
                            border: none;
                            border-radius: 0.375rem;
                            font-size: 0.75rem;
                            cursor: pointer;
                            font-weight: 600;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 0.375rem;
                            transition: background 0.2s;
                            height: 32px;
                            white-space: nowrap;
                        ">
                            <i class="fas fa-times-circle" style="font-size: 0.75rem;"></i>
                            Clear Weather
                        </button>
                    </div>
                    ` : ''}
                </div>

                <div class="tactical-line" style="
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.5rem;
                    color: #d1d5db;
                    font-size: 0.75rem;
                    line-height: 1.3;
                    margin-bottom: 0.25rem;
                ">
                    <span style="color: #c084fc; font-weight: 600;">Illumination -</span>
                    <span>Sunrise: ${formatted.sunrise}</span>
                    <span style="color: #6b7280; margin: 0 0.25rem;">|</span>
                    <span>Sunset: ${formatted.sunset}</span>
                    <span style="color: #6b7280; margin: 0 0.25rem;">|</span>
                    <span>BMNT: ${formatted.bmnt}</span>
                    <span style="color: #6b7280; margin: 0 0.25rem;">|</span>
                    <span>EENT: ${formatted.eent}</span>
                </div>

                <div class="tactical-line" style="
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.5rem;
                    color: #d1d5db;
                    font-size: 0.75rem;
                    line-height: 1.3;
                    margin-bottom: 0.25rem;
                ">
                    <span style="color: #c084fc; font-weight: 600;">Moon Phase -</span>
                    <span>${formatted.moonPhase}</span>
                    <span style="color: #6b7280; margin: 0 0.25rem;">|</span>
                    <span>Illumination: ${formatted.moonIllumination}</span>
                </div>

                <div class="tactical-line" style="
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 0.5rem;
                    color: #d1d5db;
                    font-size: 0.75rem;
                    line-height: 1.3;
                ">
                    <span style="color: #c084fc; font-weight: 600;">Operational Conditions -</span>
                    <span>Daylight: ${formatted.daylightHours}</span>
                    <span style="color: #6b7280; margin: 0 0.25rem;">|</span>
                    <span>Civil Twilight: ${formatted.civilDawn} / ${formatted.civilDusk}</span>
                </div>
            </div>
        `;
    }

    /**
     * Get current data
     * 
     * @returns {object|null} Current tactical data
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
     * Check if currently in daylight
     * 
     * @param {Date} time - Time to check (default: now)
     * @returns {boolean} Whether it's daylight
     */
    isDaylight(time = new Date()) {
        if (!this.currentData) {
            return false;
        }

        return time >= this.currentData.sunrise && time <= this.currentData.sunset;
    }

    /**
     * Check if currently in nautical twilight
     * 
     * @param {Date} time - Time to check (default: now)
     * @returns {boolean} Whether it's nautical twilight
     */
    isNauticalTwilight(time = new Date()) {
        if (!this.currentData) {
            return false;
        }

        const isMorning = time >= this.currentData.bmnt && time < this.currentData.sunrise;
        const isEvening = time > this.currentData.sunset && time <= this.currentData.eent;

        return isMorning || isEvening;
    }

    /**
     * Get current light condition
     * 
     * @param {Date} time - Time to check (default: now)
     * @returns {string} Light condition ('day', 'twilight', 'night')
     */
    getLightCondition(time = new Date()) {
        if (!this.currentData) {
            return 'unknown';
        }

        if (this.isDaylight(time)) {
            return 'day';
        } else if (this.isNauticalTwilight(time)) {
            return 'twilight';
        } else {
            return 'night';
        }
    }

    /**
     * EXTENSION HOOK: Get MDMP tactical timeline
     * Used in Phase 8 for MDMP integration
     * 
     * @param {Date} startDate - Start date
     * @param {number} days - Number of days
     * @returns {array} Tactical data for each day
     */
    getMDMPTacticalTimeline(startDate = new Date(), days = 3) {
        const timeline = [];

        for (let i = 0; i < days; i++) {
            const date = new Date(startDate);
            date.setDate(date.getDate() + i);

            const data = this.calculateTacticalData(
                this.currentData.latitude,
                this.currentData.longitude,
                date
            );

            timeline.push({
                day: i,
                date: date,
                ...data
            });
        }

        return timeline;
    }
}

export default TacticalDataComponent;

