/**
 * Coordinate Converter Component
 * 
 * Purpose: Convert coordinates between MGRS, UTM, and Lat/Long formats
 * 
 * Dependencies:
 * - mgrs library (for MGRS conversions)
 * - proj4 library (for UTM conversions)
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { CoordinateValidator } from '../utils/CoordinateValidator.js';
import { MappingConfig } from '../config.js';

export class CoordinateConverter {
    constructor() {
        this.mgrsLib = null;
        this.proj4Lib = null;
    }

    /**
     * Initialize converter with required libraries
     * 
     * @param {object} mgrs - MGRS library instance
     * @param {object} proj4 - Proj4 library instance
     */
    initialize(mgrs, proj4) {
        this.mgrsLib = mgrs;
        this.proj4Lib = proj4;
    }

    /**
     * Convert coordinates from any system to Lat/Long
     * 
     * @param {string} coordinates - Coordinate string
     * @param {string} system - Source coordinate system ('mgrs', 'utm', 'latlon')
     * @returns {object} Result with { success: boolean, lat?: number, lon?: number, error?: string }
     */
    toLatLon(coordinates, system = 'mgrs') {
        // Validate input
        const validation = CoordinateValidator.validate(coordinates, system);
        if (!validation.valid) {
            return {
                success: false,
                error: validation.error
            };
        }

        try {
            switch (system.toLowerCase()) {
                case 'mgrs':
                    return this.mgrsToLatLon(coordinates);
                case 'utm':
                    return this.utmToLatLon(coordinates, validation.parsed);
                case 'latlon':
                    return {
                        success: true,
                        lat: validation.parsed.latitude,
                        lon: validation.parsed.longitude,
                        original: coordinates,
                        system: 'latlon'
                    };
                default:
                    return {
                        success: false,
                        error: `Unsupported coordinate system: ${system}`
                    };
            }
        } catch (error) {
            console.error('Coordinate conversion error:', error);
            return {
                success: false,
                error: `Conversion failed: ${error.message}`
            };
        }
    }

    /**
     * Convert MGRS to Lat/Long
     * 
     * @param {string} mgrs - MGRS coordinate string
     * @returns {object} Conversion result
     */
    mgrsToLatLon(mgrs) {
        if (!this.mgrsLib) {
            return {
                success: false,
                error: 'MGRS library not initialized. Please load the mgrs library first.'
            };
        }

        try {
            // Remove spaces for mgrs library
            const mgrsClean = mgrs.replace(/\s+/g, '');
            
            // Convert MGRS to Lat/Long using mgrs library
            const latLon = this.mgrsLib.toPoint(mgrsClean);
            
            return {
                success: true,
                lat: latLon[1], // mgrs library returns [lon, lat]
                lon: latLon[0],
                original: mgrs,
                system: 'mgrs'
            };
        } catch (error) {
            return {
                success: false,
                error: `MGRS conversion failed: ${error.message}`
            };
        }
    }

    /**
     * Convert UTM to Lat/Long
     * 
     * @param {string} utm - UTM coordinate string
     * @param {object} parsed - Parsed UTM components
     * @returns {object} Conversion result
     */
    utmToLatLon(utm, parsed) {
        if (!this.proj4Lib) {
            return {
                success: false,
                error: 'Proj4 library not initialized. Please load the proj4 library first.'
            };
        }

        try {
            const { zone, hemisphere, easting, northing } = parsed;

            // Define UTM projection
            const utmProj = `+proj=utm +zone=${zone} +${hemisphere === 'N' ? 'north' : 'south'} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
            const wgs84Proj = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';

            // Convert UTM to Lat/Long
            const result = this.proj4Lib(utmProj, wgs84Proj, [easting, northing]);

            return {
                success: true,
                lat: result[1],
                lon: result[0],
                original: utm,
                system: 'utm'
            };
        } catch (error) {
            return {
                success: false,
                error: `UTM conversion failed: ${error.message}`
            };
        }
    }

    /**
     * Convert Lat/Long to MGRS
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @param {number} precision - MGRS precision (1-5 digits)
     * @returns {object} Conversion result
     */
    latLonToMGRS(lat, lon, precision = 5) {
        if (!this.mgrsLib) {
            return {
                success: false,
                error: 'MGRS library not initialized'
            };
        }

        try {
            // Validate lat/lon
            if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
                return {
                    success: false,
                    error: 'Latitude/Longitude out of valid range'
                };
            }

            // Convert to MGRS
            const mgrs = this.mgrsLib.forward([lon, lat], precision);

            return {
                success: true,
                mgrs: this.formatMGRS(mgrs),
                original: `${lat}, ${lon}`,
                system: 'mgrs'
            };
        } catch (error) {
            return {
                success: false,
                error: `MGRS conversion failed: ${error.message}`
            };
        }
    }

    /**
     * Convert Lat/Long to UTM
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @returns {object} Conversion result
     */
    latLonToUTM(lat, lon) {
        if (!this.proj4Lib) {
            return {
                success: false,
                error: 'Proj4 library not initialized'
            };
        }

        try {
            // Validate lat/lon
            if (lat < -90 || lat > 90 || lon < -180 || lon > 180) {
                return {
                    success: false,
                    error: 'Latitude/Longitude out of valid range'
            };
            }

            // Calculate UTM zone
            const zone = Math.floor((lon + 180) / 6) + 1;
            const hemisphere = lat >= 0 ? 'N' : 'S';

            // Define projections
            const utmProj = `+proj=utm +zone=${zone} +${hemisphere === 'N' ? 'north' : 'south'} +ellps=WGS84 +datum=WGS84 +units=m +no_defs`;
            const wgs84Proj = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';

            // Convert to UTM
            const result = this.proj4Lib(wgs84Proj, utmProj, [lon, lat]);

            return {
                success: true,
                utm: `${zone}${hemisphere} ${Math.round(result[0])} ${Math.round(result[1])}`,
                zone,
                hemisphere,
                easting: Math.round(result[0]),
                northing: Math.round(result[1]),
                original: `${lat}, ${lon}`,
                system: 'utm'
            };
        } catch (error) {
            return {
                success: false,
                error: `UTM conversion failed: ${error.message}`
            };
        }
    }

    /**
     * Convert between any two coordinate systems
     * 
     * @param {string} coordinates - Source coordinates
     * @param {string} fromSystem - Source system ('mgrs', 'utm', 'latlon')
     * @param {string} toSystem - Target system ('mgrs', 'utm', 'latlon')
     * @returns {object} Conversion result
     */
    convert(coordinates, fromSystem, toSystem) {
        // If same system, just validate and return
        if (fromSystem === toSystem) {
            const validation = CoordinateValidator.validate(coordinates, fromSystem);
            if (!validation.valid) {
                return {
                    success: false,
                    error: validation.error
                };
            }
            return {
                success: true,
                result: coordinates,
                system: fromSystem
            };
        }

        // First convert to Lat/Long
        const latLon = this.toLatLon(coordinates, fromSystem);
        if (!latLon.success) {
            return latLon;
        }

        // Then convert from Lat/Long to target system
        switch (toSystem.toLowerCase()) {
            case 'mgrs':
                return this.latLonToMGRS(latLon.lat, latLon.lon);
            case 'utm':
                return this.latLonToUTM(latLon.lat, latLon.lon);
            case 'latlon':
                return {
                    success: true,
                    result: `${latLon.lat.toFixed(6)}, ${latLon.lon.toFixed(6)}`,
                    lat: latLon.lat,
                    lon: latLon.lon,
                    system: 'latlon'
                };
            default:
                return {
                    success: false,
                    error: `Unsupported target system: ${toSystem}`
                };
        }
    }

    /**
     * Format MGRS string with spaces for readability
     * 
     * @param {string} mgrs - MGRS string without spaces
     * @returns {string} Formatted MGRS string
     */
    formatMGRS(mgrs) {
        // MGRS format: 32S AB 12345 67890
        // Extract components
        const match = mgrs.match(/^(\d{1,2}[A-Z])([A-Z]{2})(\d+)$/);
        if (!match) {
            return mgrs; // Return as-is if format doesn't match
        }

        const [, gridZone, gridSquare, digits] = match;
        const halfLen = Math.floor(digits.length / 2);
        const easting = digits.substring(0, halfLen);
        const northing = digits.substring(halfLen);

        return `${gridZone} ${gridSquare} ${easting} ${northing}`;
    }

    /**
     * Get all coordinate representations for a location
     * 
     * @param {string} coordinates - Input coordinates
     * @param {string} system - Input coordinate system
     * @returns {object} All coordinate representations
     */
    getAllRepresentations(coordinates, system) {
        const latLon = this.toLatLon(coordinates, system);
        if (!latLon.success) {
            return {
                success: false,
                error: latLon.error
            };
        }

        const mgrs = this.latLonToMGRS(latLon.lat, latLon.lon);
        const utm = this.latLonToUTM(latLon.lat, latLon.lon);

        return {
            success: true,
            latlon: {
                lat: latLon.lat,
                lon: latLon.lon,
                formatted: `${latLon.lat.toFixed(6)}, ${latLon.lon.toFixed(6)}`
            },
            mgrs: mgrs.success ? mgrs.mgrs : null,
            utm: utm.success ? utm.utm : null,
            original: {
                coordinates,
                system
            }
        };
    }
}

export default CoordinateConverter;

