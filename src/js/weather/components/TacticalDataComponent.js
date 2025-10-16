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
     * Create tactical data card HTML
     * 
     * @returns {string} HTML string
     */
    createTacticalDataCardHTML() {
        const formatted = this.getFormattedData();
        if (!formatted) {
            return '<div>No tactical data available</div>';
        }

        return `
            <div class="tactical-data-card" style="
                background: ${WeatherConfig.ui.cardBackgroundColor};
                color: ${WeatherConfig.ui.cardTextColor};
                border-radius: ${WeatherConfig.ui.cardBorderRadius};
                padding: ${WeatherConfig.ui.cardPadding};
            ">
                <h3 style="margin: 0 0 1rem 0; font-size: 1.25rem;">Tactical Data</h3>
                
                <div class="tactical-section" style="margin-bottom: 1rem;">
                    <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem; color: #f59e0b;">Critical Times</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; font-size: 0.875rem;">
                        <div><strong>BMNT:</strong> ${formatted.bmnt}</div>
                        <div><strong>EENT:</strong> ${formatted.eent}</div>
                        <div><strong>Sunrise:</strong> ${formatted.sunrise}</div>
                        <div><strong>Sunset:</strong> ${formatted.sunset}</div>
                    </div>
                </div>

                <div class="tactical-section" style="margin-bottom: 1rem;">
                    <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem; color: #3b82f6;">Twilight Times</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; font-size: 0.875rem;">
                        <div><strong>Civil Dawn:</strong> ${formatted.civilDawn}</div>
                        <div><strong>Civil Dusk:</strong> ${formatted.civilDusk}</div>
                        <div><strong>Nautical Dawn:</strong> ${formatted.nauticalDawn}</div>
                        <div><strong>Nautical Dusk:</strong> ${formatted.nauticalDusk}</div>
                        <div><strong>Astro Dawn:</strong> ${formatted.astronomicalDawn}</div>
                        <div><strong>Astro Dusk:</strong> ${formatted.astronomicalDusk}</div>
                    </div>
                </div>

                <div class="tactical-section" style="margin-bottom: 1rem;">
                    <h4 style="margin: 0 0 0.5rem 0; font-size: 1rem; color: #8b5cf6;">Moon Data</h4>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; font-size: 0.875rem;">
                        <div><strong>Phase:</strong> ${formatted.moonPhase}</div>
                        <div><strong>Illumination:</strong> ${formatted.moonIllumination}</div>
                        <div><strong>Moonrise:</strong> ${formatted.moonrise}</div>
                        <div><strong>Moonset:</strong> ${formatted.moonset}</div>
                    </div>
                </div>

                <div class="tactical-section">
                    <div style="font-size: 0.875rem;">
                        <strong>Daylight Hours:</strong> ${formatted.daylightHours}
                    </div>
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

