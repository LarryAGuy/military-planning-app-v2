/**
 * Coordinate Converter UI Component
 *
 * Purpose: User interface for coordinate conversion with preset test locations
 * Provides input/output for MGRS, UTM, Lat/Lon, and DMS formats
 *
 * Dependencies:
 * - CoordinateConverter (for conversion logic)
 * - EventBus (for map integration)
 * - MappingConfig (for coordinate system regex patterns)
 *
 * @author Augment Agent
 * @date October 17, 2025
 */

import { CoordinateConverter } from './CoordinateConverter.js';
import EventBus from '../../utils/EventBus.js';
import { MappingConfig } from '../config.js';

export class CoordinateConverterUI {
    constructor() {
        this.converter = new CoordinateConverter();
        this.currentCoordinates = null;
        this.presetLocations = this.getPresetLocations();
    }

    /**
     * Initialize the converter UI
     * 
     * @param {object} mgrs - MGRS library instance
     * @param {object} proj4 - Proj4 library instance
     * @returns {object} Initialization result
     */
    initialize(mgrs, proj4) {
        this.converter.initialize(mgrs, proj4);
        this.setupEventListeners();
        
        return {
            success: true,
            message: 'Coordinate Converter UI initialized'
        };
    }

    /**
     * Get preset test locations
     * 
     * @returns {array} Array of preset location objects
     * @example
     * [
     *   {
     *     name: 'Paris, France - Eiffel Tower',
     *     lat: 48.8584,
     *     lon: 2.2945,
     *     mgrs: '31U DQ 48251 11932'
     *   }
     * ]
     */
    getPresetLocations() {
        return [
            {
                name: 'Paris, France - Eiffel Tower',
                lat: 48.8584,
                lon: 2.2945,
                mgrs: '31U DQ 48251 11932'
            },
            {
                name: 'Taj Mahal, India - Agra',
                lat: 27.1751,
                lon: 78.0421,
                mgrs: '43R GR 82615 00000'
            },
            {
                name: 'Statue of Liberty, New York, USA',
                lat: 40.6892,
                lon: -74.0445,
                mgrs: '18T WL 65326 51307'
            },
            {
                name: 'Sydney Opera House, Australia',
                lat: -33.8568,
                lon: 151.2153,
                mgrs: '56H LH 34361 51673'
            },
            {
                name: 'Christ the Redeemer, Brazil - Rio de Janeiro',
                lat: -22.9519,
                lon: -43.2105,
                mgrs: '23K PQ 68289 46138'
            },
            {
                name: 'Great Pyramid of Giza, Egypt',
                lat: 29.9792,
                lon: 31.1342,
                mgrs: '36R TV 66023 17307'
            }
        ];
    }

    /**
     * Create HTML for coordinate converter UI
     * 
     * @returns {string} HTML string
     */
    createHTML() {
        return `
            <div class="coordinate-converter-ui" style="
                background: #1f2937;
                border-radius: 0.5rem;
                padding: 1rem;
                margin-bottom: 1rem;
            ">
                <h3 style="margin: 0 0 1rem 0; font-size: 1.125rem; color: #f3f4f6;">
                    <i class="fas fa-map-marked-alt" style="margin-right: 0.5rem; color: #3b82f6;"></i>
                    Coordinate Converter
                </h3>

                <!-- Preset Locations - Collapsible Section -->
                <div style="margin-bottom: 1rem;">
                    <button
                        id="coord-preset-toggle"
                        type="button"
                        style="
                            background: transparent;
                            border: none;
                            color: #9ca3af;
                            font-size: 0.875rem;
                            cursor: pointer;
                            padding: 0.25rem 0;
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            transition: color 0.2s;
                        "
                        aria-expanded="false"
                        aria-controls="coord-preset-list"
                    >
                        <i class="fas fa-chevron-right" id="coord-preset-icon" style="font-size: 0.75rem; transition: transform 0.2s;"></i>
                        <span id="coord-preset-toggle-text">Show Test Locations</span>
                    </button>
                    <div id="coord-preset-list" style="display: none; margin-top: 0.5rem;">
                        <div style="
                            background: #111827;
                            border: 1px solid #374151;
                            border-radius: 0.375rem;
                            padding: 0.5rem;
                            max-height: 200px;
                            overflow-y: auto;
                        ">
                            ${this.presetLocations.map((loc, idx) => `
                                <button
                                    type="button"
                                    class="coord-preset-item"
                                    data-index="${idx}"
                                    style="
                                        display: block;
                                        width: 100%;
                                        text-align: left;
                                        background: transparent;
                                        border: none;
                                        color: #d1d5db;
                                        padding: 0.5rem;
                                        font-size: 0.875rem;
                                        cursor: pointer;
                                        border-radius: 0.25rem;
                                        transition: background 0.2s;
                                    "
                                >
                                    <i class="fas fa-map-marker-alt" style="margin-right: 0.5rem; color: #3b82f6;"></i>
                                    ${loc.name}
                                </button>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Input Section -->
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-size: 0.875rem; color: #d1d5db;">
                        Input Coordinates (Auto-Detect Format):
                    </label>
                    <input
                        type="text"
                        id="coord-input"
                        placeholder="Enter coordinates in any format (MGRS, UTM, Lat/Lon, DMS)"
                        style="
                            width: 100%;
                            padding: 0.5rem;
                            background: #374151;
                            color: #f3f4f6;
                            border: 1px solid #4b5563;
                            border-radius: 0.375rem;
                            font-size: 0.875rem;
                        "
                    />
                    <!-- Format Detection Feedback Badge -->
                    <div id="coord-format-badge" style="display: none; margin-top: 0.5rem;">
                        <span id="coord-format-badge-text" style="
                            display: inline-block;
                            padding: 0.25rem 0.75rem;
                            border-radius: 0.25rem;
                            font-size: 0.75rem;
                            font-weight: 600;
                        "></span>
                    </div>
                </div>

                <!-- Convert Button -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 1rem;">
                    <button id="coord-convert-btn" style="
                        padding: 6px 12px;
                        background: #3b82f6;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        font-size: 0.8125rem;
                        cursor: pointer;
                        font-weight: 600;
                        line-height: 1.4;
                        transition: all 0.2s;
                    ">
                        <i class="fas fa-sync-alt" style="margin-right: 4px;"></i>
                        Convert
                    </button>
                    <button id="coord-clear-btn" style="
                        padding: 6px 12px;
                        background: #6b7280;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        font-size: 0.8125rem;
                        cursor: pointer;
                        font-weight: 600;
                        line-height: 1.4;
                        transition: all 0.2s;
                    ">
                        <i class="fas fa-times" style="margin-right: 4px;"></i>
                        Clear
                    </button>
                </div>

                <!-- Output Section -->
                <div id="coord-output" style="display: none;">
                    <div style="
                        background: #111827;
                        border-radius: 0.375rem;
                        padding: 1rem;
                        border: 1px solid #374151;
                    ">
                        <h4 style="margin: 0 0 0.75rem 0; font-size: 0.875rem; color: #9ca3af; text-transform: uppercase;">
                            Converted Coordinates:
                        </h4>
                        <div style="display: grid; gap: 0.5rem; font-size: 0.875rem;">
                            <div style="display: grid; grid-template-columns: 100px 1fr; gap: 0.5rem;">
                                <span style="color: #9ca3af;">MGRS:</span>
                                <span id="coord-output-mgrs" style="color: #f3f4f6; font-family: monospace;"></span>
                            </div>
                            <div style="display: grid; grid-template-columns: 100px 1fr; gap: 0.5rem;">
                                <span style="color: #9ca3af;">UTM:</span>
                                <span id="coord-output-utm" style="color: #f3f4f6; font-family: monospace;"></span>
                            </div>
                            <div style="display: grid; grid-template-columns: 100px 1fr; gap: 0.5rem;">
                                <span style="color: #9ca3af;">Lat/Lon:</span>
                                <span id="coord-output-latlon" style="color: #f3f4f6; font-family: monospace;"></span>
                            </div>
                            <div style="display: grid; grid-template-columns: 100px 1fr; gap: 0.5rem;">
                                <span style="color: #9ca3af;">DMS:</span>
                                <span id="coord-output-dms" style="color: #f3f4f6; font-family: monospace;"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Error Display -->
                <div id="coord-error" style="display: none; margin-top: 1rem;">
                    <div style="
                        background: #7f1d1d;
                        border: 1px solid #991b1b;
                        border-radius: 0.375rem;
                        padding: 0.75rem;
                        color: #fca5a5;
                        font-size: 0.875rem;
                    ">
                        <i class="fas fa-exclamation-triangle" style="margin-right: 0.5rem;"></i>
                        <span id="coord-error-message"></span>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Setup event listeners for UI interactions
     */
    setupEventListeners() {
        // Map click integration
        EventBus.on('map:clicked', (data) => {
            this.populateFromMapClick(data.lat, data.lon);
        });
    }

    /**
     * Attach DOM event listeners after HTML is rendered
     * Call this after inserting the HTML into the DOM
     */
    attachDOMEventListeners() {
        // Preset locations toggle
        const presetToggle = document.getElementById('coord-preset-toggle');
        const presetList = document.getElementById('coord-preset-list');
        const presetIcon = document.getElementById('coord-preset-icon');

        if (presetToggle && presetList && presetIcon) {
            // Load saved state from localStorage
            const isExpanded = localStorage.getItem('coord-preset-expanded') === 'true';
            if (isExpanded) {
                this.togglePresetLocations(true, presetToggle, presetList, presetIcon);
            }

            presetToggle.addEventListener('click', () => {
                const expanded = presetToggle.getAttribute('aria-expanded') === 'true';
                this.togglePresetLocations(!expanded, presetToggle, presetList, presetIcon);
            });
        }

        // Preset location item clicks and hover effects
        const presetItems = document.querySelectorAll('.coord-preset-item');
        presetItems.forEach(item => {
            // Click handler
            item.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.getAttribute('data-index'));
                if (!isNaN(index)) {
                    this.loadPresetLocation(index);
                }
            });

            // Hover effects (CSP-compliant - no inline handlers)
            item.addEventListener('mouseenter', (e) => {
                e.currentTarget.style.background = '#1f2937';
            });

            item.addEventListener('mouseleave', (e) => {
                e.currentTarget.style.background = 'transparent';
            });
        });

        // Convert button click
        const convertBtn = document.getElementById('coord-convert-btn');
        if (convertBtn) {
            convertBtn.addEventListener('click', () => {
                this.performConversion();
            });
        }

        // Clear button click
        const clearBtn = document.getElementById('coord-clear-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.clearCoordinates();
            });
        }

        // Input field - convert on Enter key
        const inputEl = document.getElementById('coord-input');
        if (inputEl) {
            inputEl.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.performConversion();
                }
            });
        }
    }

    /**
     * Toggle preset locations visibility
     *
     * @param {boolean} expand - Whether to expand or collapse
     * @param {HTMLElement} toggle - Toggle button element
     * @param {HTMLElement} list - List container element
     * @param {HTMLElement} icon - Icon element
     */
    togglePresetLocations(expand, toggle, list, icon) {
        const toggleText = document.getElementById('coord-preset-toggle-text');

        if (expand) {
            list.style.display = 'block';
            toggle.setAttribute('aria-expanded', 'true');
            icon.style.transform = 'rotate(90deg)';
            if (toggleText) toggleText.textContent = 'Hide Test Locations';
            localStorage.setItem('coord-preset-expanded', 'true');
        } else {
            list.style.display = 'none';
            toggle.setAttribute('aria-expanded', 'false');
            icon.style.transform = 'rotate(0deg)';
            if (toggleText) toggleText.textContent = 'Show Test Locations';
            localStorage.setItem('coord-preset-expanded', 'false');
        }
    }

    /**
     * Load a preset location
     *
     * @param {number} index - Index of preset location
     */
    loadPresetLocation(index) {
        const location = this.presetLocations[index];
        if (!location) return;

        // Populate input with MGRS (auto-detection will handle it)
        const inputEl = document.getElementById('coord-input');

        if (inputEl) {
            inputEl.value = location.mgrs;
        }

        // Auto-convert
        this.performConversion();

        // Center map on location
        EventBus.emit('coord-converter:center-map', {
            lat: location.lat,
            lon: location.lon
        });
    }

    /**
     * Perform coordinate conversion with auto-detection
     */
    performConversion() {
        const inputEl = document.getElementById('coord-input');
        const outputEl = document.getElementById('coord-output');
        const errorEl = document.getElementById('coord-error');

        if (!inputEl) return;

        const coordinates = inputEl.value.trim();

        if (!coordinates) {
            this.showError('Please enter coordinates');
            this.hideFormatBadge();
            return;
        }

        // Auto-detect coordinate format
        const detectedFormat = this.detectCoordinateFormat(coordinates);

        if (!detectedFormat) {
            this.showError('Format not recognized. Please enter coordinates in MGRS, UTM, Lat/Lon, or DMS format.');
            this.showFormatBadge('error', '⚠ Format not recognized');
            return;
        }

        // Show detected format badge
        this.showFormatBadge('success', `✓ ${detectedFormat.toUpperCase()} detected`);

        // Get all representations
        const result = this.converter.getAllRepresentations(coordinates, detectedFormat);

        if (!result.success) {
            this.showError(result.error);
            this.showFormatBadge('error', '⚠ Conversion failed');
            return;
        }

        // Store current coordinates
        this.currentCoordinates = result;

        // Display results
        this.displayResults(result);

        // Hide error, show output
        if (errorEl) errorEl.style.display = 'none';
        if (outputEl) outputEl.style.display = 'block';

        // Emit event for map integration
        EventBus.emit('coord-converter:converted', {
            lat: result.latlon.lat,
            lon: result.latlon.lon,
            mgrs: result.mgrs,
            utm: result.utm
        });
    }

    /**
     * Detect coordinate format from input string
     *
     * @param {string} input - Input coordinate string
     * @returns {string|null} Detected format ('mgrs', 'utm', 'latlon', 'dms') or null
     */
    detectCoordinateFormat(input) {
        const trimmed = input.trim();

        // Import regex patterns from MappingConfig
        const patterns = MappingConfig.coordinateSystems;

        // Check MGRS pattern (e.g., "31U DQ 48251 11932")
        if (patterns.mgrs.regex.test(trimmed)) {
            return 'mgrs';
        }

        // Check UTM pattern (e.g., "32 N 500000 4500000")
        if (patterns.utm.regex.test(trimmed)) {
            return 'utm';
        }

        // Check DMS pattern (e.g., "48° 51' 30.24" N, 2° 17' 40.20" E")
        const dmsPattern = /^\s*(-?\d{1,3})[°\s]+(\d{1,2})['′\s]+(\d{1,2}(?:\.\d+)?)[\"″\s]*([NSEW]?)\s*,?\s*(-?\d{1,3})[°\s]+(\d{1,2})['′\s]+(\d{1,2}(?:\.\d+)?)[\"″\s]*([NSEW]?)\s*$/i;
        if (dmsPattern.test(trimmed)) {
            return 'dms';
        }

        // Check Lat/Lon pattern (e.g., "48.8584, 2.2945" or "48.8584 2.2945")
        if (patterns.latlon.regex.test(trimmed)) {
            return 'latlon';
        }

        return null;
    }

    /**
     * Show format detection badge
     *
     * @param {string} type - 'success' or 'error'
     * @param {string} text - Badge text
     */
    showFormatBadge(type, text) {
        const badge = document.getElementById('coord-format-badge');
        const badgeText = document.getElementById('coord-format-badge-text');

        if (!badge || !badgeText) return;

        badgeText.textContent = text;

        if (type === 'success') {
            badgeText.style.background = '#065f46';
            badgeText.style.color = '#6ee7b7';
            badgeText.style.border = '1px solid #10b981';
        } else {
            badgeText.style.background = '#78350f';
            badgeText.style.color = '#fcd34d';
            badgeText.style.border = '1px solid #f59e0b';
        }

        badge.style.display = 'block';
    }

    /**
     * Hide format detection badge
     */
    hideFormatBadge() {
        const badge = document.getElementById('coord-format-badge');
        if (badge) {
            badge.style.display = 'none';
        }
    }

    /**
     * Display conversion results
     * 
     * @param {object} result - Conversion result object
     */
    displayResults(result) {
        const mgrsEl = document.getElementById('coord-output-mgrs');
        const utmEl = document.getElementById('coord-output-utm');
        const latlonEl = document.getElementById('coord-output-latlon');
        const dmsEl = document.getElementById('coord-output-dms');

        if (mgrsEl) mgrsEl.textContent = result.mgrs || 'N/A';
        if (utmEl) utmEl.textContent = result.utm || 'N/A';
        if (latlonEl) latlonEl.textContent = result.latlon.formatted;
        if (dmsEl) dmsEl.textContent = this.formatDMS(result.latlon.lat, result.latlon.lon);
    }

    /**
     * Format coordinates as DMS (Degrees Minutes Seconds)
     * 
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude
     * @returns {string} DMS formatted string
     */
    formatDMS(lat, lon) {
        const latDMS = this.decimalToDMS(lat, 'lat');
        const lonDMS = this.decimalToDMS(lon, 'lon');
        return `${latDMS}, ${lonDMS}`;
    }

    /**
     * Convert decimal degrees to DMS
     * 
     * @param {number} decimal - Decimal degrees
     * @param {string} type - 'lat' or 'lon'
     * @returns {string} DMS string
     */
    decimalToDMS(decimal, type) {
        const absolute = Math.abs(decimal);
        const degrees = Math.floor(absolute);
        const minutesDecimal = (absolute - degrees) * 60;
        const minutes = Math.floor(minutesDecimal);
        const seconds = ((minutesDecimal - minutes) * 60).toFixed(2);

        const direction = type === 'lat' 
            ? (decimal >= 0 ? 'N' : 'S')
            : (decimal >= 0 ? 'E' : 'W');

        return `${degrees}° ${minutes}' ${seconds}" ${direction}`;
    }

    /**
     * Show error message
     * 
     * @param {string} message - Error message
     */
    showError(message) {
        const errorEl = document.getElementById('coord-error');
        const errorMessageEl = document.getElementById('coord-error-message');
        const outputEl = document.getElementById('coord-output');

        if (errorMessageEl) errorMessageEl.textContent = message;
        if (errorEl) errorEl.style.display = 'block';
        if (outputEl) outputEl.style.display = 'none';
    }

    /**
     * Clear all coordinate inputs and outputs
     */
    clearCoordinates() {
        const inputEl = document.getElementById('coord-input');
        const outputEl = document.getElementById('coord-output');
        const errorEl = document.getElementById('coord-error');

        if (inputEl) inputEl.value = '';
        if (outputEl) outputEl.style.display = 'none';
        if (errorEl) errorEl.style.display = 'none';

        // Hide format badge
        this.hideFormatBadge();

        this.currentCoordinates = null;

        EventBus.emit('coord-converter:cleared');
    }

    /**
     * Normalize longitude to -180 to 180 range
     *
     * @param {number} lon - Longitude value (can be outside -180 to 180)
     * @returns {number} Normalized longitude (-180 to 180)
     */
    normalizeLongitude(lon) {
        // Normalize longitude to -180 to 180 range
        // This handles map wrapping where Leaflet can return values like 529° or -200°
        let normalized = lon;

        // Reduce to -360 to 360 range first
        while (normalized > 180) {
            normalized -= 360;
        }
        while (normalized < -180) {
            normalized += 360;
        }

        return normalized;
    }

    /**
     * Populate converter from map click
     *
     * @param {number} lat - Latitude
     * @param {number} lon - Longitude (will be normalized to -180 to 180)
     */
    populateFromMapClick(lat, lon) {
        const inputEl = document.getElementById('coord-input');

        // CRITICAL FIX: Removed check for 'coord-input-system' element which no longer exists
        // The UI was refactored to use auto-detection instead of manual format selection
        if (!inputEl) {
            console.warn('⚠️ Coordinate input element not found in DOM');
            return;
        }

        // Normalize longitude to -180 to 180 range (handles map wrapping)
        const normalizedLon = this.normalizeLongitude(lon);

        // Set to lat/lon format (auto-detection will handle it)
        inputEl.value = `${lat.toFixed(6)}, ${normalizedLon.toFixed(6)}`;

        // Auto-convert (format will be auto-detected)
        this.performConversion();

        console.log(`✅ Map click coordinates populated: ${lat.toFixed(6)}, ${normalizedLon.toFixed(6)}`);
    }

    /**
     * Get current coordinates
     * 
     * @returns {object|null} Current coordinate data
     */
    getCurrentCoordinates() {
        return this.currentCoordinates;
    }
}

export default CoordinateConverterUI;

