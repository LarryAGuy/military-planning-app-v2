/**
 * Map Component
 * 
 * Purpose: Core Leaflet map management component
 * 
 * Dependencies:
 * - Leaflet library
 * - MapLayerManager
 * - TacticalGraphics
 * - CoordinateConverter
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { MappingConfig } from '../config.js';
import { MapLayerManager } from '../utils/MapLayerManager.js';
import { TacticalGraphics } from './TacticalGraphics.js';
import { CoordinateConverter } from './CoordinateConverter.js';

export class MapComponent {
    constructor(containerId) {
        this.containerId = containerId;
        this.map = null;
        this.layerManager = null;
        this.tacticalGraphics = null;
        this.coordinateConverter = new CoordinateConverter();
        this.markers = [];
        this.controls = {};
    }

    /**
     * Initialize the map
     * 
     * @param {object} options - Map initialization options
     * @param {array} options.center - [lat, lon] center coordinates
     * @param {number} options.zoom - Initial zoom level
     * @param {object} options.libraries - Required libraries (L, mgrs, proj4)
     * @returns {object} Map instance
     */
    initialize(options = {}) {
        const center = options.center || [MappingConfig.defaults.centerLat, MappingConfig.defaults.centerLon];
        const zoom = options.zoom || MappingConfig.defaults.zoom;

        // Initialize coordinate converter with libraries
        if (options.libraries) {
            this.coordinateConverter.initialize(options.libraries.mgrs, options.libraries.proj4);
        }

        // Create map
        this.map = L.map(this.containerId, {
            center: center,
            zoom: zoom,
            minZoom: MappingConfig.defaults.minZoom,
            maxZoom: MappingConfig.defaults.maxZoom,
            zoomControl: true
        });

        // Initialize layer manager
        this.layerManager = new MapLayerManager(this.map);
        this.layerManager.initializeBaseLayers();
        this.layerManager.addDefaultLayer();

        // Add controls
        this.addControls();

        // Initialize tactical graphics if enabled
        if (MappingConfig.features.enableDrawing) {
            this.tacticalGraphics = new TacticalGraphics(this.map);
            this.tacticalGraphics.initialize();
        }

        return this.map;
    }

    /**
     * Add map controls (scale, north arrow, layer control, coordinate overlay)
     */
    addControls() {
        // Add scale control
        if (MappingConfig.controls.scale.enabled) {
            this.controls.scale = L.control.scale({
                position: MappingConfig.controls.scale.position,
                metric: MappingConfig.controls.scale.metric,
                imperial: MappingConfig.controls.scale.imperial,
                maxWidth: MappingConfig.controls.scale.maxWidth
            });
            this.controls.scale.addTo(this.map);
        }

        // Add north arrow control
        if (MappingConfig.controls.northArrow.enabled) {
            this.controls.northArrow = L.control({ 
                position: MappingConfig.controls.northArrow.position 
            });
            
            this.controls.northArrow.onAdd = function(map) {
                const div = L.DomUtil.create('div', 'north-arrow-control');
                div.innerHTML = `
                    <div style="
                        background: rgba(31, 41, 55, 0.9);
                        color: white;
                        padding: 8px;
                        border-radius: 4px;
                        font-weight: bold;
                        text-align: center;
                        font-size: 16px;
                        line-height: 1.2;
                    ">
                        ↑<br>N
                    </div>
                `;
                return div;
            };
            
            this.controls.northArrow.addTo(this.map);
        }

        // Add layer control
        if (MappingConfig.controls.layerControl.enabled) {
            this.layerManager.addLayerControl();
        }

        // Add coordinate overlay
        if (MappingConfig.controls.coordinateOverlay.enabled) {
            this.addCoordinateOverlay();
        }
    }

    /**
     * Add coordinate overlay that shows cursor position
     */
    addCoordinateOverlay() {
        this.controls.coordinateOverlay = L.control({ 
            position: MappingConfig.controls.coordinateOverlay.position 
        });

        this.controls.coordinateOverlay.onAdd = function(map) {
            const div = L.DomUtil.create('div', 'coordinate-overlay-control');
            div.innerHTML = `
                <div style="
                    background: rgba(31, 41, 55, 0.9);
                    color: white;
                    padding: 6px 10px;
                    border-radius: 4px;
                    font-family: monospace;
                    font-size: 12px;
                    min-width: 200px;
                " id="coordinate-display">
                    Move cursor over map
                </div>
            `;
            return div;
        };

        this.controls.coordinateOverlay.addTo(this.map);

        // Update coordinates on mouse move
        this.map.on('mousemove', (e) => {
            const display = document.getElementById('coordinate-display');
            if (display) {
                const lat = e.latlng.lat.toFixed(6);
                const lon = e.latlng.lng.toFixed(6);
                display.innerHTML = `Lat: ${lat}, Lon: ${lon}`;
            }
        });
    }

    /**
     * Set map view to specific coordinates
     * 
     * @param {array} latLng - [lat, lon] coordinates
     * @param {number} zoom - Zoom level
     * @param {object} options - Pan options
     */
    setView(latLng, zoom, options = {}) {
        this.map.setView(latLng, zoom, options);
    }

    /**
     * Add a marker to the map
     * 
     * @param {array} latLng - [lat, lon] coordinates
     * @param {object} options - Marker options
     * @param {string} options.popup - Popup content
     * @param {boolean} options.openPopup - Whether to open popup immediately
     * @returns {object} Marker instance
     */
    addMarker(latLng, options = {}) {
        const marker = L.marker(latLng, options);
        marker.addTo(this.map);

        if (options.popup) {
            marker.bindPopup(options.popup);
            if (options.openPopup) {
                marker.openPopup();
            }
        }

        this.markers.push(marker);

        return marker;
    }

    /**
     * Remove a marker from the map
     * 
     * @param {object} marker - Marker instance
     * @returns {boolean} Success status
     */
    removeMarker(marker) {
        const index = this.markers.indexOf(marker);
        if (index > -1) {
            this.map.removeLayer(marker);
            this.markers.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * Clear all markers
     */
    clearMarkers() {
        this.markers.forEach(marker => {
            this.map.removeLayer(marker);
        });
        this.markers = [];
    }

    /**
     * Fly to coordinates with animation
     * 
     * @param {array} latLng - [lat, lon] coordinates
     * @param {number} zoom - Zoom level
     * @param {object} options - Fly options
     */
    flyTo(latLng, zoom, options = {}) {
        this.map.flyTo(latLng, zoom, {
            duration: 1.5,
            ...options
        });
    }

    /**
     * Fit map to bounds
     * 
     * @param {array} bounds - [[south, west], [north, east]]
     * @param {object} options - Fit bounds options
     */
    fitBounds(bounds, options = {}) {
        this.map.fitBounds(bounds, options);
    }

    /**
     * Get current map center
     * 
     * @returns {object} { lat, lon }
     */
    getCenter() {
        const center = this.map.getCenter();
        return {
            lat: center.lat,
            lon: center.lng
        };
    }

    /**
     * Get current zoom level
     * 
     * @returns {number} Zoom level
     */
    getZoom() {
        return this.map.getZoom();
    }

    /**
     * Get current map bounds
     * 
     * @returns {object} { north, south, east, west }
     */
    getBounds() {
        const bounds = this.map.getBounds();
        return {
            north: bounds.getNorth(),
            south: bounds.getSouth(),
            east: bounds.getEast(),
            west: bounds.getWest()
        };
    }

    /**
     * Invalidate map size (call after container resize)
     */
    invalidateSize() {
        this.map.invalidateSize();
    }

    /**
     * Get map instance
     * 
     * @returns {object} Leaflet map instance
     */
    getMap() {
        return this.map;
    }

    /**
     * Get layer manager
     * 
     * @returns {object} MapLayerManager instance
     */
    getLayerManager() {
        return this.layerManager;
    }

    /**
     * Get tactical graphics manager
     * 
     * @returns {object} TacticalGraphics instance
     */
    getTacticalGraphics() {
        return this.tacticalGraphics;
    }

    /**
     * Get coordinate converter
     * 
     * @returns {object} CoordinateConverter instance
     */
    getCoordinateConverter() {
        return this.coordinateConverter;
    }

    /**
     * EXTENSION HOOK: Enable multi-COA mode
     * Used by MDMP for Course of Action comparison
     * 
     * @param {boolean} enabled - Whether to enable multi-COA mode
     */
    setMultiCOAMode(enabled) {
        this.multiCOAMode = enabled;
        // Placeholder for MDMP Phase 8 implementation
    }

    /**
     * EXTENSION HOOK: Set theater-level view
     * Used by JPP for strategic planning
     * 
     * @param {object} theaterConfig - Theater configuration
     */
    setTheaterView(theaterConfig) {
        // Placeholder for JPP Phase 9 implementation
        if (theaterConfig.bounds) {
            this.fitBounds(theaterConfig.bounds);
        }
    }

    /**
     * Cleanup and destroy map
     */
    cleanup() {
        // Clear markers
        this.clearMarkers();

        // Cleanup tactical graphics
        if (this.tacticalGraphics) {
            this.tacticalGraphics.cleanup();
        }

        // Cleanup layer manager
        if (this.layerManager) {
            this.layerManager.cleanup();
        }

        // Remove map
        if (this.map) {
            this.map.remove();
            this.map = null;
        }
    }
}

export default MapComponent;

