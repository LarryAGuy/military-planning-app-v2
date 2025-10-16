/**
 * Tactical Graphics Component
 * 
 * Purpose: Manage tactical graphics (markers, lines, polygons) using Leaflet.draw
 * 
 * Dependencies:
 * - Leaflet.draw library
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { MappingConfig } from '../config.js';

export class TacticalGraphics {
    constructor(map) {
        this.map = map;
        this.drawnItems = null;
        this.drawControl = null;
        this.graphics = [];
    }

    /**
     * Initialize tactical graphics with Leaflet.draw
     * 
     * @param {object} options - Drawing options
     * @returns {object} Draw control instance
     */
    initialize(options = {}) {
        // Create feature group for drawn items
        this.drawnItems = new L.FeatureGroup();
        this.map.addLayer(this.drawnItems);

        // Configure drawing tools
        const drawConfig = {
            ...MappingConfig.drawingTools,
            ...options
        };

        // Set feature group for editing
        drawConfig.edit.featureGroup = this.drawnItems;

        // Create draw control
        this.drawControl = new L.Control.Draw(drawConfig);
        this.map.addControl(this.drawControl);

        // Set up event listeners
        this.setupEventListeners();

        return this.drawControl;
    }

    /**
     * Set up event listeners for drawing events
     */
    setupEventListeners() {
        // Handle created graphics
        this.map.on(L.Draw.Event.CREATED, (event) => {
            const layer = event.layer;
            const type = event.layerType;

            // Add to drawn items
            this.drawnItems.addLayer(layer);

            // Store graphic metadata
            const graphic = {
                id: this.generateId(),
                type: type,
                layer: layer,
                created: new Date().toISOString(),
                properties: {}
            };

            this.graphics.push(graphic);

            // Emit custom event
            this.map.fire('tactical:created', { graphic: graphic });
        });

        // Handle edited graphics
        this.map.on(L.Draw.Event.EDITED, (event) => {
            const layers = event.layers;

            layers.eachLayer((layer) => {
                const graphic = this.getGraphicByLayer(layer);
                if (graphic) {
                    graphic.modified = new Date().toISOString();
                    this.map.fire('tactical:edited', { graphic: graphic });
                }
            });
        });

        // Handle deleted graphics
        this.map.on(L.Draw.Event.DELETED, (event) => {
            const layers = event.layers;

            layers.eachLayer((layer) => {
                const graphic = this.getGraphicByLayer(layer);
                if (graphic) {
                    this.removeGraphic(graphic.id);
                    this.map.fire('tactical:deleted', { graphic: graphic });
                }
            });
        });
    }

    /**
     * Add a marker to the map
     * 
     * @param {array} latLng - [lat, lon] coordinates
     * @param {object} options - Marker options
     * @returns {object} Graphic object
     */
    addMarker(latLng, options = {}) {
        const markerOptions = {
            ...options,
            icon: options.icon || this.getDefaultIcon(options.type || 'friendly')
        };

        const marker = L.marker(latLng, markerOptions);
        this.drawnItems.addLayer(marker);

        const graphic = {
            id: this.generateId(),
            type: 'marker',
            layer: marker,
            created: new Date().toISOString(),
            properties: {
                type: options.type || 'friendly',
                label: options.label || '',
                ...options.properties
            }
        };

        this.graphics.push(graphic);

        return graphic;
    }

    /**
     * Add a polyline to the map
     * 
     * @param {array} latLngs - Array of [lat, lon] coordinates
     * @param {object} options - Polyline options
     * @returns {object} Graphic object
     */
    addPolyline(latLngs, options = {}) {
        const lineOptions = {
            color: options.color || MappingConfig.tacticalGraphics.defaultLineColor,
            weight: options.weight || MappingConfig.tacticalGraphics.defaultLineWeight,
            opacity: options.opacity || MappingConfig.tacticalGraphics.defaultOpacity,
            ...options
        };

        const polyline = L.polyline(latLngs, lineOptions);
        this.drawnItems.addLayer(polyline);

        const graphic = {
            id: this.generateId(),
            type: 'polyline',
            layer: polyline,
            created: new Date().toISOString(),
            properties: {
                lineType: options.lineType || 'route',
                label: options.label || '',
                ...options.properties
            }
        };

        this.graphics.push(graphic);

        return graphic;
    }

    /**
     * Add a polygon to the map
     * 
     * @param {array} latLngs - Array of [lat, lon] coordinates
     * @param {object} options - Polygon options
     * @returns {object} Graphic object
     */
    addPolygon(latLngs, options = {}) {
        const polygonOptions = {
            color: options.color || MappingConfig.tacticalGraphics.defaultLineColor,
            weight: options.weight || MappingConfig.tacticalGraphics.defaultLineWeight,
            fillOpacity: options.fillOpacity || 0.3,
            ...options
        };

        const polygon = L.polygon(latLngs, polygonOptions);
        this.drawnItems.addLayer(polygon);

        const graphic = {
            id: this.generateId(),
            type: 'polygon',
            layer: polygon,
            created: new Date().toISOString(),
            properties: {
                areaType: options.areaType || 'zone',
                label: options.label || '',
                ...options.properties
            }
        };

        this.graphics.push(graphic);

        return graphic;
    }

    /**
     * Add a circle to the map
     * 
     * @param {array} latLng - [lat, lon] center coordinates
     * @param {number} radius - Radius in meters
     * @param {object} options - Circle options
     * @returns {object} Graphic object
     */
    addCircle(latLng, radius, options = {}) {
        const circleOptions = {
            color: options.color || MappingConfig.tacticalGraphics.defaultLineColor,
            weight: options.weight || MappingConfig.tacticalGraphics.defaultLineWeight,
            fillOpacity: options.fillOpacity || 0.3,
            radius: radius,
            ...options
        };

        const circle = L.circle(latLng, circleOptions);
        this.drawnItems.addLayer(circle);

        const graphic = {
            id: this.generateId(),
            type: 'circle',
            layer: circle,
            created: new Date().toISOString(),
            properties: {
                radius: radius,
                label: options.label || '',
                ...options.properties
            }
        };

        this.graphics.push(graphic);

        return graphic;
    }

    /**
     * Remove a graphic by ID
     * 
     * @param {string} id - Graphic ID
     * @returns {boolean} Success status
     */
    removeGraphic(id) {
        const index = this.graphics.findIndex(g => g.id === id);

        if (index === -1) {
            return false;
        }

        const graphic = this.graphics[index];
        this.drawnItems.removeLayer(graphic.layer);
        this.graphics.splice(index, 1);

        return true;
    }

    /**
     * Clear all graphics
     */
    clearAll() {
        this.drawnItems.clearLayers();
        this.graphics = [];
    }

    /**
     * Get graphic by ID
     * 
     * @param {string} id - Graphic ID
     * @returns {object|null} Graphic object or null
     */
    getGraphicById(id) {
        return this.graphics.find(g => g.id === id) || null;
    }

    /**
     * Get graphic by layer
     * 
     * @param {object} layer - Leaflet layer
     * @returns {object|null} Graphic object or null
     */
    getGraphicByLayer(layer) {
        return this.graphics.find(g => g.layer === layer) || null;
    }

    /**
     * Get all graphics
     * 
     * @returns {array} Array of graphic objects
     */
    getAllGraphics() {
        return this.graphics;
    }

    /**
     * Get graphics by type
     * 
     * @param {string} type - Graphic type ('marker', 'polyline', 'polygon', 'circle')
     * @returns {array} Array of graphic objects
     */
    getGraphicsByType(type) {
        return this.graphics.filter(g => g.type === type);
    }

    /**
     * Get default icon for marker type
     * 
     * @param {string} type - Marker type ('friendly', 'enemy', 'neutral', 'unknown')
     * @returns {object} Leaflet icon
     */
    getDefaultIcon(type) {
        const colors = MappingConfig.tacticalGraphics.markerColors;
        const color = colors[type] || colors.friendly;

        return L.divIcon({
            className: 'tactical-marker',
            html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white;"></div>`,
            iconSize: [20, 20],
            iconAnchor: [10, 10]
        });
    }

    /**
     * Generate unique ID
     * 
     * @returns {string} Unique ID
     */
    generateId() {
        return `graphic_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    }

    /**
     * Export graphics to GeoJSON
     * 
     * @returns {object} GeoJSON FeatureCollection
     */
    exportToGeoJSON() {
        return this.drawnItems.toGeoJSON();
    }

    /**
     * Import graphics from GeoJSON
     * 
     * @param {object} geojson - GeoJSON FeatureCollection
     * @returns {number} Number of graphics imported
     */
    importFromGeoJSON(geojson) {
        let count = 0;

        L.geoJSON(geojson, {
            onEachFeature: (feature, layer) => {
                this.drawnItems.addLayer(layer);

                const graphic = {
                    id: this.generateId(),
                    type: layer instanceof L.Marker ? 'marker' : 
                          layer instanceof L.Polyline ? 'polyline' :
                          layer instanceof L.Polygon ? 'polygon' : 'unknown',
                    layer: layer,
                    created: new Date().toISOString(),
                    properties: feature.properties || {}
                };

                this.graphics.push(graphic);
                count++;
            }
        });

        return count;
    }

    /**
     * EXTENSION HOOK: Add MIL-STD-2525 symbol
     * Used by JPP for joint force symbology
     * 
     * @param {array} latLng - [lat, lon] coordinates
     * @param {string} sidc - Symbol Identification Code
     * @param {object} options - Symbol options
     * @returns {object} Graphic object
     */
    addMilStdSymbol(latLng, sidc, options = {}) {
        // Placeholder for MIL-STD-2525 implementation
        // Will be implemented in Phase 9 (JPP Integration)
        return this.addMarker(latLng, {
            ...options,
            properties: {
                ...options.properties,
                sidc: sidc,
                symbolType: 'milstd2525'
            }
        });
    }

    /**
     * Cleanup
     */
    cleanup() {
        if (this.drawControl) {
            this.map.removeControl(this.drawControl);
        }

        if (this.drawnItems) {
            this.map.removeLayer(this.drawnItems);
        }

        this.graphics = [];
    }
}

export default TacticalGraphics;

