/**
 * Unit Converter Utility
 * 
 * Purpose: Convert weather units between imperial, metric, and standard systems
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { WeatherConfig } from '../config.js';

export class UnitConverter {
    /**
     * Convert temperature between units
     * 
     * @param {number} value - Temperature value
     * @param {string} from - Source unit ('K', 'C', 'F')
     * @param {string} to - Target unit ('K', 'C', 'F')
     * @returns {number} Converted temperature
     */
    static convertTemperature(value, from, to) {
        if (from === to) return value;

        // Convert to Kelvin first
        let kelvin;
        switch (from.toUpperCase()) {
            case 'K':
                kelvin = value;
                break;
            case 'C':
                kelvin = value + 273.15;
                break;
            case 'F':
                kelvin = (value - 32) * 5/9 + 273.15;
                break;
            default:
                throw new Error(`Unknown temperature unit: ${from}`);
        }

        // Convert from Kelvin to target unit
        switch (to.toUpperCase()) {
            case 'K':
                return kelvin;
            case 'C':
                return kelvin - 273.15;
            case 'F':
                return (kelvin - 273.15) * 9/5 + 32;
            default:
                throw new Error(`Unknown temperature unit: ${to}`);
        }
    }

    /**
     * Convert wind speed between units
     * 
     * @param {number} value - Wind speed value
     * @param {string} from - Source unit ('m/s', 'mph', 'km/h', 'knots')
     * @param {string} to - Target unit ('m/s', 'mph', 'km/h', 'knots')
     * @returns {number} Converted wind speed
     */
    static convertWindSpeed(value, from, to) {
        if (from === to) return value;

        // Convert to m/s first
        let ms;
        switch (from.toLowerCase()) {
            case 'm/s':
                ms = value;
                break;
            case 'mph':
                ms = value * 0.44704;
                break;
            case 'km/h':
                ms = value * 0.277778;
                break;
            case 'knots':
                ms = value * 0.514444;
                break;
            default:
                throw new Error(`Unknown wind speed unit: ${from}`);
        }

        // Convert from m/s to target unit
        switch (to.toLowerCase()) {
            case 'm/s':
                return ms;
            case 'mph':
                return ms * 2.23694;
            case 'km/h':
                return ms * 3.6;
            case 'knots':
                return ms * 1.94384;
            default:
                throw new Error(`Unknown wind speed unit: ${to}`);
        }
    }

    /**
     * Convert pressure between units
     * 
     * @param {number} value - Pressure value
     * @param {string} from - Source unit ('hPa', 'inHg', 'mmHg', 'mb')
     * @param {string} to - Target unit ('hPa', 'inHg', 'mmHg', 'mb')
     * @returns {number} Converted pressure
     */
    static convertPressure(value, from, to) {
        if (from === to) return value;

        // Convert to hPa first
        let hPa;
        switch (from.toLowerCase()) {
            case 'hpa':
            case 'mb':
                hPa = value;
                break;
            case 'inhg':
                hPa = value * 33.8639;
                break;
            case 'mmhg':
                hPa = value * 1.33322;
                break;
            default:
                throw new Error(`Unknown pressure unit: ${from}`);
        }

        // Convert from hPa to target unit
        switch (to.toLowerCase()) {
            case 'hpa':
            case 'mb':
                return hPa;
            case 'inhg':
                return hPa * 0.02953;
            case 'mmhg':
                return hPa * 0.750062;
            default:
                throw new Error(`Unknown pressure unit: ${to}`);
        }
    }

    /**
     * Convert visibility between units
     * 
     * @param {number} value - Visibility value
     * @param {string} from - Source unit ('m', 'km', 'mi', 'ft')
     * @param {string} to - Target unit ('m', 'km', 'mi', 'ft')
     * @returns {number} Converted visibility
     */
    static convertVisibility(value, from, to) {
        if (from === to) return value;

        // Convert to meters first
        let meters;
        switch (from.toLowerCase()) {
            case 'm':
                meters = value;
                break;
            case 'km':
                meters = value * 1000;
                break;
            case 'mi':
                meters = value * 1609.34;
                break;
            case 'ft':
                meters = value * 0.3048;
                break;
            default:
                throw new Error(`Unknown visibility unit: ${from}`);
        }

        // Convert from meters to target unit
        switch (to.toLowerCase()) {
            case 'm':
                return meters;
            case 'km':
                return meters / 1000;
            case 'mi':
                return meters / 1609.34;
            case 'ft':
                return meters / 0.3048;
            default:
                throw new Error(`Unknown visibility unit: ${to}`);
        }
    }

    /**
     * Format temperature with unit symbol
     * 
     * @param {number} value - Temperature value
     * @param {string} system - Unit system ('imperial', 'metric', 'standard')
     * @param {number} decimals - Number of decimal places
     * @returns {string} Formatted temperature
     */
    static formatTemperature(value, system = 'imperial', decimals = 0) {
        const unit = WeatherConfig.units[system].temperature;
        return `${value.toFixed(decimals)}${unit}`;
    }

    /**
     * Format wind speed with unit symbol
     * 
     * @param {number} value - Wind speed value
     * @param {string} system - Unit system ('imperial', 'metric', 'standard')
     * @param {number} decimals - Number of decimal places
     * @returns {string} Formatted wind speed
     */
    static formatWindSpeed(value, system = 'imperial', decimals = 0) {
        const unit = WeatherConfig.units[system].speed;
        return `${value.toFixed(decimals)} ${unit}`;
    }

    /**
     * Format pressure with unit symbol
     * 
     * @param {number} value - Pressure value
     * @param {string} system - Unit system ('imperial', 'metric', 'standard')
     * @param {number} decimals - Number of decimal places
     * @returns {string} Formatted pressure
     */
    static formatPressure(value, system = 'imperial', decimals = 2) {
        const unit = WeatherConfig.units[system].pressure;
        
        // Convert to appropriate unit
        let convertedValue = value;
        if (system === 'imperial') {
            convertedValue = this.convertPressure(value, 'hPa', 'inHg');
        }
        
        return `${convertedValue.toFixed(decimals)} ${unit}`;
    }

    /**
     * Format visibility with unit symbol
     * 
     * @param {number} value - Visibility value in meters
     * @param {string} system - Unit system ('imperial', 'metric', 'standard')
     * @param {number} decimals - Number of decimal places
     * @returns {string} Formatted visibility
     */
    static formatVisibility(value, system = 'imperial', decimals = 1) {
        const unit = WeatherConfig.units[system].visibility;
        
        // Convert to appropriate unit
        let convertedValue = value;
        if (system === 'imperial') {
            convertedValue = this.convertVisibility(value, 'm', 'mi');
        } else {
            convertedValue = this.convertVisibility(value, 'm', 'km');
        }
        
        return `${convertedValue.toFixed(decimals)} ${unit}`;
    }

    /**
     * Get wind direction from degrees
     * 
     * @param {number} degrees - Wind direction in degrees
     * @returns {string} Cardinal direction (N, NE, E, SE, S, SW, W, NW)
     */
    static getWindDirection(degrees) {
        const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
        const index = Math.round(degrees / 45) % 8;
        return directions[index];
    }

    /**
     * Get wind direction description
     * 
     * @param {number} degrees - Wind direction in degrees
     * @returns {string} Full direction description
     */
    static getWindDirectionDescription(degrees) {
        const directions = [
            'North', 'Northeast', 'East', 'Southeast',
            'South', 'Southwest', 'West', 'Northwest'
        ];
        const index = Math.round(degrees / 45) % 8;
        return directions[index];
    }

    /**
     * Get visibility category
     * 
     * @param {number} visibility - Visibility in kilometers
     * @returns {object} Category object with label and color
     */
    static getVisibilityCategory(visibility) {
        const categories = WeatherConfig.tactical.visibilityCategories;

        for (const [key, category] of Object.entries(categories)) {
            if (category.min !== undefined && category.max !== undefined) {
                if (visibility >= category.min && visibility < category.max) {
                    return category;
                }
            } else if (category.min !== undefined && visibility >= category.min) {
                return category;
            } else if (category.max !== undefined && visibility < category.max) {
                return category;
            }
        }

        return categories.moderate; // Default
    }

    /**
     * Get wind category
     * 
     * @param {number} windSpeed - Wind speed in mph
     * @returns {object} Category object with label and color
     */
    static getWindCategory(windSpeed) {
        const categories = WeatherConfig.tactical.windCategories;

        for (const [key, category] of Object.entries(categories)) {
            if (category.min !== undefined && category.max !== undefined) {
                if (windSpeed >= category.min && windSpeed < category.max) {
                    return category;
                }
            } else if (category.min !== undefined && windSpeed >= category.min) {
                return category;
            } else if (category.max !== undefined && windSpeed < category.max) {
                return category;
            }
        }

        return categories.moderate; // Default
    }
}

export default UnitConverter;

