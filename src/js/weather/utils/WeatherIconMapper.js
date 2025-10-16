/**
 * Weather Icon Mapper Utility
 * 
 * Purpose: Map OpenWeatherMap icon codes to Font Awesome icons and colors
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { WeatherConfig } from '../config.js';

export class WeatherIconMapper {
    /**
     * Get Font Awesome icon class for weather condition
     * 
     * @param {string} iconCode - OpenWeatherMap icon code (e.g., '01d', '10n')
     * @returns {string} Font Awesome icon class
     */
    static getIcon(iconCode) {
        return WeatherConfig.icons[iconCode] || 'fa-cloud';
    }

    /**
     * Get color for weather condition
     * 
     * @param {string} iconCode - OpenWeatherMap icon code
     * @returns {string} Hex color code
     */
    static getColor(iconCode) {
        // Determine condition type from icon code
        const code = iconCode.substring(0, 2);

        switch (code) {
            case '01': // clear sky
                return WeatherConfig.colors.clear;
            case '02': // few clouds
            case '03': // scattered clouds
            case '04': // broken clouds
                return WeatherConfig.colors.clouds;
            case '09': // shower rain
            case '10': // rain
                return WeatherConfig.colors.rain;
            case '11': // thunderstorm
                return WeatherConfig.colors.thunderstorm;
            case '13': // snow
                return WeatherConfig.colors.snow;
            case '50': // mist
                return WeatherConfig.colors.mist;
            default:
                return WeatherConfig.colors.clouds;
        }
    }

    /**
     * Get weather condition description
     * 
     * @param {string} iconCode - OpenWeatherMap icon code
     * @returns {string} Human-readable description
     */
    static getDescription(iconCode) {
        const code = iconCode.substring(0, 2);
        const isDay = iconCode.endsWith('d');

        const descriptions = {
            '01': isDay ? 'Clear Sky (Day)' : 'Clear Sky (Night)',
            '02': isDay ? 'Few Clouds (Day)' : 'Few Clouds (Night)',
            '03': 'Scattered Clouds',
            '04': 'Broken Clouds',
            '09': 'Shower Rain',
            '10': isDay ? 'Rain (Day)' : 'Rain (Night)',
            '11': 'Thunderstorm',
            '13': 'Snow',
            '50': 'Mist'
        };

        return descriptions[code] || 'Unknown';
    }

    /**
     * Get tactical impact assessment for weather condition
     * 
     * @param {string} iconCode - OpenWeatherMap icon code
     * @param {number} windSpeed - Wind speed in mph
     * @param {number} visibility - Visibility in km
     * @returns {object} Tactical impact assessment
     */
    static getTacticalImpact(iconCode, windSpeed = 0, visibility = 10) {
        const code = iconCode.substring(0, 2);
        
        let mobilityImpact = 'None';
        let visibilityImpact = 'None';
        let communicationsImpact = 'None';
        let aviationImpact = 'None';
        let overallImpact = 'Low';

        // Assess based on weather condition
        switch (code) {
            case '01': // clear sky
            case '02': // few clouds
                mobilityImpact = 'None';
                visibilityImpact = 'None';
                communicationsImpact = 'None';
                aviationImpact = 'None';
                overallImpact = 'Low';
                break;

            case '03': // scattered clouds
            case '04': // broken clouds
                mobilityImpact = 'None';
                visibilityImpact = 'Low';
                communicationsImpact = 'None';
                aviationImpact = 'Low';
                overallImpact = 'Low';
                break;

            case '09': // shower rain
            case '10': // rain
                mobilityImpact = 'Moderate';
                visibilityImpact = 'Moderate';
                communicationsImpact = 'Low';
                aviationImpact = 'Moderate';
                overallImpact = 'Moderate';
                break;

            case '11': // thunderstorm
                mobilityImpact = 'High';
                visibilityImpact = 'High';
                communicationsImpact = 'High';
                aviationImpact = 'High';
                overallImpact = 'High';
                break;

            case '13': // snow
                mobilityImpact = 'High';
                visibilityImpact = 'High';
                communicationsImpact = 'Moderate';
                aviationImpact = 'High';
                overallImpact = 'High';
                break;

            case '50': // mist
                mobilityImpact = 'Low';
                visibilityImpact = 'Moderate';
                communicationsImpact = 'None';
                aviationImpact = 'Moderate';
                overallImpact = 'Moderate';
                break;
        }

        // Adjust for wind speed
        if (windSpeed > 25) {
            mobilityImpact = this.increaseImpact(mobilityImpact);
            aviationImpact = this.increaseImpact(aviationImpact);
            overallImpact = this.increaseImpact(overallImpact);
        }

        // Adjust for visibility
        if (visibility < 2) {
            visibilityImpact = 'High';
            mobilityImpact = this.increaseImpact(mobilityImpact);
            overallImpact = this.increaseImpact(overallImpact);
        }

        return {
            mobility: mobilityImpact,
            visibility: visibilityImpact,
            communications: communicationsImpact,
            aviation: aviationImpact,
            overall: overallImpact
        };
    }

    /**
     * Increase impact level
     * 
     * @param {string} currentImpact - Current impact level
     * @returns {string} Increased impact level
     */
    static increaseImpact(currentImpact) {
        const levels = ['None', 'Low', 'Moderate', 'High'];
        const currentIndex = levels.indexOf(currentImpact);
        const newIndex = Math.min(currentIndex + 1, levels.length - 1);
        return levels[newIndex];
    }

    /**
     * Get impact color
     * 
     * @param {string} impact - Impact level ('None', 'Low', 'Moderate', 'High')
     * @returns {string} Hex color code
     */
    static getImpactColor(impact) {
        const colors = {
            'None': '#10b981',    // Green
            'Low': '#84cc16',     // Lime
            'Moderate': '#eab308', // Yellow
            'High': '#dc2626'     // Red
        };

        return colors[impact] || colors['Low'];
    }

    /**
     * Create weather icon HTML
     * 
     * @param {string} iconCode - OpenWeatherMap icon code
     * @param {string} size - Icon size ('sm', 'md', 'lg', 'xl')
     * @returns {string} HTML string for icon
     */
    static createIconHTML(iconCode, size = 'md') {
        const icon = this.getIcon(iconCode);
        const color = this.getColor(iconCode);

        const sizes = {
            'sm': '1.5rem',
            'md': '2rem',
            'lg': '3rem',
            'xl': '4rem'
        };

        const fontSize = sizes[size] || sizes['md'];

        return `<i class="fas ${icon}" style="color: ${color}; font-size: ${fontSize};"></i>`;
    }

    /**
     * Get all icon mappings
     * 
     * @returns {object} All icon mappings
     */
    static getAllMappings() {
        return WeatherConfig.icons;
    }

    /**
     * Check if icon code is valid
     * 
     * @param {string} iconCode - OpenWeatherMap icon code
     * @returns {boolean} Validity status
     */
    static isValidIconCode(iconCode) {
        return iconCode in WeatherConfig.icons;
    }

    /**
     * EXTENSION HOOK: Get MDMP-specific weather impact
     * Used in Phase 8 for MDMP integration
     * 
     * @param {object} weatherData - Weather data object
     * @returns {object} MDMP-specific impact assessment
     */
    static getMDMPImpact(weatherData) {
        // Placeholder for MDMP Phase 8 implementation
        const basicImpact = this.getTacticalImpact(
            weatherData.weather[0].icon,
            weatherData.wind.speed,
            weatherData.visibility / 1000
        );

        return {
            ...basicImpact,
            coaImpact: 'TBD', // To be determined in Phase 8
            decisionPointImpact: 'TBD'
        };
    }

    /**
     * EXTENSION HOOK: Get JPP-specific weather impact
     * Used in Phase 9 for JPP integration
     * 
     * @param {object} weatherData - Weather data object
     * @returns {object} JPP-specific impact assessment
     */
    static getJPPImpact(weatherData) {
        // Placeholder for JPP Phase 9 implementation
        const basicImpact = this.getTacticalImpact(
            weatherData.weather[0].icon,
            weatherData.wind.speed,
            weatherData.visibility / 1000
        );

        return {
            ...basicImpact,
            theaterImpact: 'TBD', // To be determined in Phase 9
            multiDomainImpact: 'TBD'
        };
    }
}

export default WeatherIconMapper;

