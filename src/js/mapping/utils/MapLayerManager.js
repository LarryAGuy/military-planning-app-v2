/**
 * Map Layer Manager Utility
 * 
 * Purpose: Manage map tile layers (base layers and overlays)
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { MappingConfig } from '../config.js';

export class MapLayerManager {
    constructor(map) {
        this.map = map;
        this.baseLayers = {};
        this.overlayLayers = {};
        this.currentBaseLayer = null;
        this.layerControl = null;
    }

    /**
     * Initialize all base layers from configuration
     * 
     * @returns {object} Object containing all base layer instances
     */
    initializeBaseLayers() {
        const config = MappingConfig.tileLayers;

        for (const [name, layerConfig] of Object.entries(config)) {
            try {
                // Create Leaflet tile layer
                const layer = L.tileLayer(layerConfig.url, {
                    attribution: layerConfig.attribution,
                    maxZoom: layerConfig.maxZoom,
                    crossOrigin: 'anonymous'
                });

                this.baseLayers[name] = layer;
            } catch (error) {
                console.error(`Failed to initialize layer: ${name}`, error);
            }
        }

        return this.baseLayers;
    }

    /**
     * Add default base layer to map
     * 
     * @returns {object} The default layer instance
     */
    addDefaultLayer() {
        const defaultLayerName = MappingConfig.defaultTileLayer;
        const defaultLayer = this.baseLayers[defaultLayerName];

        if (defaultLayer) {
            defaultLayer.addTo(this.map);
            this.currentBaseLayer = defaultLayerName;
            return defaultLayer;
        }

        // Fallback to first available layer
        const firstLayerName = Object.keys(this.baseLayers)[0];
        if (firstLayerName) {
            const firstLayer = this.baseLayers[firstLayerName];
            firstLayer.addTo(this.map);
            this.currentBaseLayer = firstLayerName;
            return firstLayer;
        }

        console.error('No base layers available');
        return null;
    }

    /**
     * Switch to a different base layer
     * 
     * @param {string} layerName - Name of the layer to switch to
     * @returns {boolean} Success status
     */
    switchBaseLayer(layerName) {
        const newLayer = this.baseLayers[layerName];

        if (!newLayer) {
            console.error(`Layer not found: ${layerName}`);
            return false;
        }

        // Remove current layer
        if (this.currentBaseLayer) {
            const currentLayer = this.baseLayers[this.currentBaseLayer];
            if (currentLayer) {
                this.map.removeLayer(currentLayer);
            }
        }

        // Add new layer
        newLayer.addTo(this.map);
        this.currentBaseLayer = layerName;

        return true;
    }

    /**
     * Add layer control to map
     * 
     * @param {object} options - Layer control options
     * @returns {object} Layer control instance
     */
    addLayerControl(options = {}) {
        const controlOptions = {
            position: options.position || MappingConfig.controls.layerControl.position,
            collapsed: options.collapsed !== undefined ? options.collapsed : MappingConfig.controls.layerControl.collapsed
        };

        this.layerControl = L.control.layers(
            this.baseLayers,
            this.overlayLayers,
            controlOptions
        );

        this.layerControl.addTo(this.map);

        return this.layerControl;
    }

    /**
     * Add an overlay layer
     * 
     * @param {string} name - Layer name
     * @param {object} layer - Leaflet layer instance
     * @param {boolean} addToMap - Whether to add to map immediately
     * @returns {boolean} Success status
     */
    addOverlayLayer(name, layer, addToMap = false) {
        this.overlayLayers[name] = layer;

        if (this.layerControl) {
            this.layerControl.addOverlay(layer, name);
        }

        if (addToMap) {
            layer.addTo(this.map);
        }

        return true;
    }

    /**
     * Remove an overlay layer
     * 
     * @param {string} name - Layer name
     * @returns {boolean} Success status
     */
    removeOverlayLayer(name) {
        const layer = this.overlayLayers[name];

        if (!layer) {
            return false;
        }

        // Remove from map
        this.map.removeLayer(layer);

        // Remove from control
        if (this.layerControl) {
            this.layerControl.removeLayer(layer);
        }

        // Remove from overlays object
        delete this.overlayLayers[name];

        return true;
    }

    /**
     * Get current base layer name
     * 
     * @returns {string|null} Current base layer name
     */
    getCurrentBaseLayer() {
        return this.currentBaseLayer;
    }

    /**
     * Get all base layer names
     * 
     * @returns {array} Array of base layer names
     */
    getBaseLayerNames() {
        return Object.keys(this.baseLayers);
    }

    /**
     * Get all overlay layer names
     * 
     * @returns {array} Array of overlay layer names
     */
    getOverlayLayerNames() {
        return Object.keys(this.overlayLayers);
    }

    /**
     * Check if a layer is currently visible
     * 
     * @param {string} name - Layer name
     * @returns {boolean} Visibility status
     */
    isLayerVisible(name) {
        const layer = this.baseLayers[name] || this.overlayLayers[name];

        if (!layer) {
            return false;
        }

        return this.map.hasLayer(layer);
    }

    /**
     * Toggle overlay layer visibility
     * 
     * @param {string} name - Overlay layer name
     * @returns {boolean} New visibility status
     */
    toggleOverlayLayer(name) {
        const layer = this.overlayLayers[name];

        if (!layer) {
            return false;
        }

        if (this.map.hasLayer(layer)) {
            this.map.removeLayer(layer);
            return false;
        } else {
            layer.addTo(this.map);
            return true;
        }
    }

    /**
     * Get layer configuration
     * 
     * @param {string} name - Layer name
     * @returns {object|null} Layer configuration
     */
    getLayerConfig(name) {
        return MappingConfig.tileLayers[name] || null;
    }

    /**
     * Check if layer requires API proxy
     * 
     * @param {string} name - Layer name
     * @returns {boolean} Whether layer requires proxy
     */
    requiresProxy(name) {
        const config = this.getLayerConfig(name);
        return config ? config.requiresProxy : false;
    }

    /**
     * Get offline fallback layer
     * 
     * @returns {string} Fallback layer name
     */
    getOfflineFallbackLayer() {
        return MappingConfig.offline.fallbackTileLayer;
    }

    /**
     * Switch to offline mode (use fallback layer)
     * 
     * @returns {boolean} Success status
     */
    switchToOfflineMode() {
        const fallbackLayer = this.getOfflineFallbackLayer();
        return this.switchBaseLayer(fallbackLayer);
    }

    /**
     * Clean up all layers
     */
    cleanup() {
        // Remove all base layers
        for (const layer of Object.values(this.baseLayers)) {
            if (this.map.hasLayer(layer)) {
                this.map.removeLayer(layer);
            }
        }

        // Remove all overlay layers
        for (const layer of Object.values(this.overlayLayers)) {
            if (this.map.hasLayer(layer)) {
                this.map.removeLayer(layer);
            }
        }

        // Remove layer control
        if (this.layerControl) {
            this.map.removeControl(this.layerControl);
            this.layerControl = null;
        }

        this.currentBaseLayer = null;
    }

    /**
     * EXTENSION HOOK: Add custom layer type
     * Used by MDMP/JPP integrations for specialized layers
     * 
     * @param {string} name - Layer name
     * @param {object} layer - Leaflet layer instance
     * @param {string} type - Layer type ('base' or 'overlay')
     * @returns {boolean} Success status
     */
    addCustomLayer(name, layer, type = 'overlay') {
        if (type === 'base') {
            this.baseLayers[name] = layer;
            if (this.layerControl) {
                this.layerControl.addBaseLayer(layer, name);
            }
        } else {
            this.addOverlayLayer(name, layer, false);
        }

        return true;
    }

    /**
     * EXTENSION HOOK: Get layer statistics
     * Used by MDMP/JPP for performance monitoring
     * 
     * @returns {object} Layer statistics
     */
    getLayerStats() {
        return {
            baseLayerCount: Object.keys(this.baseLayers).length,
            overlayLayerCount: Object.keys(this.overlayLayers).length,
            currentBaseLayer: this.currentBaseLayer,
            visibleOverlays: Object.keys(this.overlayLayers).filter(name => 
                this.isLayerVisible(name)
            )
        };
    }
}

export default MapLayerManager;

