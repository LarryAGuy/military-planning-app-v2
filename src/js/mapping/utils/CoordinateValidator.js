/**
 * Coordinate Validator Utility
 * 
 * Purpose: Validate coordinates in various formats (MGRS, UTM, Lat/Long)
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { MappingConfig } from '../config.js';

export class CoordinateValidator {
    /**
     * Validate coordinates based on coordinate system
     * 
     * @param {string} coordinates - Coordinate string to validate
     * @param {string} system - Coordinate system ('mgrs', 'utm', 'latlon')
     * @returns {object} Validation result with { valid: boolean, error?: string }
     */
    static validate(coordinates, system = 'mgrs') {
        if (!coordinates || typeof coordinates !== 'string') {
            return {
                valid: false,
                error: 'Coordinates must be a non-empty string'
            };
        }

        const trimmed = coordinates.trim();
        if (!trimmed) {
            return {
                valid: false,
                error: 'Coordinates cannot be empty'
            };
        }

        switch (system.toLowerCase()) {
            case 'mgrs':
                return this.validateMGRS(trimmed);
            case 'utm':
                return this.validateUTM(trimmed);
            case 'latlon':
                return this.validateLatLon(trimmed);
            default:
                return {
                    valid: false,
                    error: `Unknown coordinate system: ${system}`
                };
        }
    }

    /**
     * Validate MGRS coordinates
     * 
     * Format: 32S AB 12345 67890
     * 
     * @param {string} coordinates - MGRS coordinate string
     * @returns {object} Validation result
     */
    static validateMGRS(coordinates) {
        const regex = MappingConfig.coordinateSystems.mgrs.regex;
        const match = coordinates.match(regex);

        if (!match) {
            return {
                valid: false,
                error: `Invalid MGRS format. Expected format: ${MappingConfig.coordinateSystems.mgrs.example}`
            };
        }

        const [, gridZone, gridSquare, easting, northing] = match;

        // Validate grid zone (1-60)
        const zone = parseInt(gridZone.match(/\d+/)[0]);
        if (zone < MappingConfig.validation.mgrsGridZone.min || 
            zone > MappingConfig.validation.mgrsGridZone.max) {
            return {
                valid: false,
                error: `Grid zone must be between ${MappingConfig.validation.mgrsGridZone.min} and ${MappingConfig.validation.mgrsGridZone.max}`
            };
        }

        // Validate grid square (2 letters)
        if (!/^[A-Z]{2}$/i.test(gridSquare)) {
            return {
                valid: false,
                error: 'Grid square must be exactly 2 letters'
            };
        }

        // Validate easting and northing (must be same length, 1-5 digits)
        if (easting.length !== northing.length) {
            return {
                valid: false,
                error: 'Easting and northing must have the same number of digits'
            };
        }

        if (easting.length < 1 || easting.length > 5) {
            return {
                valid: false,
                error: 'Easting and northing must be 1-5 digits each'
            };
        }

        return {
            valid: true,
            parsed: {
                gridZone,
                gridSquare,
                easting,
                northing,
                precision: easting.length
            }
        };
    }

    /**
     * Validate UTM coordinates
     * 
     * Format: 32 N 500000 4500000
     * 
     * @param {string} coordinates - UTM coordinate string
     * @returns {object} Validation result
     */
    static validateUTM(coordinates) {
        const regex = MappingConfig.coordinateSystems.utm.regex;
        const match = coordinates.match(regex);

        if (!match) {
            return {
                valid: false,
                error: `Invalid UTM format. Expected format: ${MappingConfig.coordinateSystems.utm.example}`
            };
        }

        const [, zone, hemisphere, easting, northing] = match;

        // Validate zone (1-60)
        const zoneNum = parseInt(zone);
        if (zoneNum < 1 || zoneNum > 60) {
            return {
                valid: false,
                error: 'UTM zone must be between 1 and 60'
            };
        }

        // Validate hemisphere (N or S)
        if (!/^[NS]$/i.test(hemisphere)) {
            return {
                valid: false,
                error: 'Hemisphere must be N (North) or S (South)'
            };
        }

        // Validate easting (0-834000 for most zones)
        const eastingNum = parseFloat(easting);
        if (eastingNum < 0 || eastingNum > 1000000) {
            return {
                valid: false,
                error: 'Easting must be between 0 and 1,000,000'
            };
        }

        // Validate northing (0-10000000)
        const northingNum = parseFloat(northing);
        if (northingNum < 0 || northingNum > 10000000) {
            return {
                valid: false,
                error: 'Northing must be between 0 and 10,000,000'
            };
        }

        return {
            valid: true,
            parsed: {
                zone: zoneNum,
                hemisphere: hemisphere.toUpperCase(),
                easting: eastingNum,
                northing: northingNum
            }
        };
    }

    /**
     * Validate Latitude/Longitude coordinates
     *
     * Supported formats:
     * - Simple decimal: 38.8977, -77.0365
     * - With degree symbols: 35.360639°, 138.727363°
     * - With cardinal directions: 35.360639°N, 138.727363°E
     * - Mixed: 35.360639N, 138.727363E
     *
     * @param {string} coordinates - Lat/Long coordinate string
     * @returns {object} Validation result
     */
    static validateLatLon(coordinates) {
        const regex = MappingConfig.coordinateSystems.latlon.regex;
        const match = coordinates.match(regex);

        if (!match) {
            return {
                valid: false,
                error: `Invalid Lat/Long format. Expected format: ${MappingConfig.coordinateSystems.latlon.example}`
            };
        }

        // Extract matched groups: [full, latValue, latDir, lonValue, lonDir]
        const [, latValue, latDir, lonValue, lonDir] = match;

        // Parse numeric values
        let latitude = parseFloat(latValue);
        let longitude = parseFloat(lonValue);

        // Apply cardinal direction signs
        // For latitude: S = negative, N = positive (or no direction)
        if (latDir && latDir.toUpperCase() === 'S') {
            latitude = -Math.abs(latitude);
        } else if (latDir && latDir.toUpperCase() === 'N') {
            latitude = Math.abs(latitude);
        }

        // For longitude: W = negative, E = positive (or no direction)
        if (lonDir && lonDir.toUpperCase() === 'W') {
            longitude = -Math.abs(longitude);
        } else if (lonDir && lonDir.toUpperCase() === 'E') {
            longitude = Math.abs(longitude);
        }

        // Validate latitude range
        if (isNaN(latitude)) {
            return {
                valid: false,
                error: 'Latitude must be a valid number'
            };
        }

        if (latitude < MappingConfig.validation.latitude.min ||
            latitude > MappingConfig.validation.latitude.max) {
            return {
                valid: false,
                error: `Latitude must be between ${MappingConfig.validation.latitude.min} and ${MappingConfig.validation.latitude.max}`
            };
        }

        // Validate longitude range
        if (isNaN(longitude)) {
            return {
                valid: false,
                error: 'Longitude must be a valid number'
            };
        }

        if (longitude < MappingConfig.validation.longitude.min ||
            longitude > MappingConfig.validation.longitude.max) {
            return {
                valid: false,
                error: `Longitude must be between ${MappingConfig.validation.longitude.min} and ${MappingConfig.validation.longitude.max}`
            };
        }

        return {
            valid: true,
            parsed: {
                latitude,
                longitude
            }
        };
    }

    /**
     * Auto-detect coordinate system from input string
     * 
     * @param {string} coordinates - Coordinate string
     * @returns {string|null} Detected system ('mgrs', 'utm', 'latlon') or null
     */
    static detectSystem(coordinates) {
        if (!coordinates || typeof coordinates !== 'string') {
            return null;
        }

        const trimmed = coordinates.trim();

        // Try MGRS
        if (MappingConfig.coordinateSystems.mgrs.regex.test(trimmed)) {
            return 'mgrs';
        }

        // Try UTM
        if (MappingConfig.coordinateSystems.utm.regex.test(trimmed)) {
            return 'utm';
        }

        // Try Lat/Long
        if (MappingConfig.coordinateSystems.latlon.regex.test(trimmed)) {
            return 'latlon';
        }

        return null;
    }

    /**
     * Get coordinate system information
     * 
     * @param {string} system - Coordinate system name
     * @returns {object|null} System information or null
     */
    static getSystemInfo(system) {
        const sys = system.toLowerCase();
        return MappingConfig.coordinateSystems[sys] || null;
    }

    /**
     * Get all supported coordinate systems
     * 
     * @returns {array} Array of system names
     */
    static getSupportedSystems() {
        return Object.keys(MappingConfig.coordinateSystems);
    }

    /**
     * Format coordinate string for display
     * 
     * @param {string} coordinates - Raw coordinate string
     * @param {string} system - Coordinate system
     * @returns {string} Formatted coordinate string
     */
    static format(coordinates, system = 'mgrs') {
        const validation = this.validate(coordinates, system);
        
        if (!validation.valid) {
            return coordinates; // Return original if invalid
        }

        switch (system.toLowerCase()) {
            case 'mgrs':
                const { gridZone, gridSquare, easting, northing } = validation.parsed;
                return `${gridZone} ${gridSquare} ${easting} ${northing}`;
            
            case 'utm':
                const { zone, hemisphere, easting: e, northing: n } = validation.parsed;
                return `${zone}${hemisphere} ${e.toFixed(0)} ${n.toFixed(0)}`;
            
            case 'latlon':
                const { latitude, longitude } = validation.parsed;
                return `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;
            
            default:
                return coordinates;
        }
    }
}

export default CoordinateValidator;

