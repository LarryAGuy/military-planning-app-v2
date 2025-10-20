/**
 * Mapping Module Configuration
 * 
 * Purpose: Centralized configuration for mapping functionality
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

export const MappingConfig = {
    /**
     * Default map settings
     */
    defaults: {
        zoom: 13,
        minZoom: 3,
        maxZoom: 19,
        centerLat: 38.8977, // Washington, D.C.
        centerLon: -77.0365,
        coordinateSystem: 'mgrs' // 'mgrs', 'utm', 'latlon'
    },

    /**
     * Map tile layers configuration
     *
     * Includes both free tile layers and Geoapify premium styles:
     * - OSM Bright Grey: Bright map with grey water (DEFAULT - clean, professional look)
     * - OSM Bright: Bright colorful street map
     * - OSM Carto: OpenStreetMap Carto style
     * - OSM Liberty: Liberty map style
     * - OpenStreetMap: Free, no API key required
     * - ESRI Satellite: Free satellite imagery
     * - ESRI Topographic: Free topographic map
     *
     * Geoapify tiles are proxied through /api/map-tiles to hide API key
     */
    tileLayers: {
        'OSM Bright Grey': {
            url: '/api/map-tiles?style=osm-bright-grey&z={z}&x={x}&y={y}',
            attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © <a href="http://openmaptiles.org/" target="_blank">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
            maxZoom: 20,
            requiresProxy: true
        },
        'OSM Bright': {
            url: '/api/map-tiles?style=osm-bright&z={z}&x={x}&y={y}',
            attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © <a href="http://openmaptiles.org/" target="_blank">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
            maxZoom: 20,
            requiresProxy: true
        },
        'OSM Carto': {
            url: '/api/map-tiles?style=osm-carto&z={z}&x={x}&y={y}',
            attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © <a href="http://openmaptiles.org/" target="_blank">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
            maxZoom: 20,
            requiresProxy: true
        },
        'OSM Liberty': {
            url: '/api/map-tiles?style=osm-liberty&z={z}&x={x}&y={y}',
            attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © <a href="http://openmaptiles.org/" target="_blank">OpenMapTiles</a> © <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',
            maxZoom: 20,
            requiresProxy: true
        },
        'OpenStreetMap': {
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19,
            requiresProxy: false
        },
        'ESRI Satellite': {
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attribution: 'Tiles © <a href="https://www.esri.com/">Esri</a> — Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
            maxZoom: 19,
            requiresProxy: false
        },
        'ESRI Topographic': {
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
            attribution: 'Tiles © <a href="https://www.esri.com/">Esri</a> — Source: Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
            maxZoom: 19,
            requiresProxy: false
        }
    },

    /**
     * Default tile layer to use
     * Set to 'OSM Bright Grey' for clean, professional appearance
     */
    defaultTileLayer: 'OSM Bright Grey',

    /**
     * Coordinate system formats and validation
     */
    coordinateSystems: {
        mgrs: {
            name: 'MGRS (Military Grid Reference System)',
            regex: /^(\d{1,2}[A-Z])\s*([A-Z]{2})\s*(\d{1,5})\s*(\d{1,5})$/i,
            example: '32S AB 12345 67890',
            description: 'Military Grid Reference System (NATO standard)'
        },
        utm: {
            name: 'UTM (Universal Transverse Mercator)',
            regex: /^(\d{1,2})\s*([A-Z])\s*(\d+\.?\d*)\s*(\d+\.?\d*)$/i,
            example: '32 N 500000 4500000',
            description: 'Universal Transverse Mercator coordinate system'
        },
        latlon: {
            name: 'Latitude/Longitude',
            regex: /^(-?\d+\.?\d*)[°º˚]?\s*([NSEW])?\s*[,;\s]\s*(-?\d+\.?\d*)[°º˚]?\s*([NSEW])?$/i,
            example: '38.8977, -77.0365 or 35.360639°N, 138.727363°E',
            description: 'Decimal degrees (WGS84) with optional degree symbols and cardinal directions'
        }
    },

    /**
     * Tactical graphics configuration
     */
    tacticalGraphics: {
        markerColors: {
            friendly: '#2563eb', // Blue
            enemy: '#dc2626',    // Red
            neutral: '#16a34a',  // Green
            unknown: '#eab308'   // Yellow
        },
        lineColors: {
            boundary: '#8b5cf6',     // Purple
            phaseLine: '#f59e0b',    // Orange
            route: '#06b6d4',        // Cyan
            obstacle: '#dc2626'      // Red
        },
        defaultMarkerColor: '#2563eb',
        defaultLineColor: '#8b5cf6',
        defaultLineWeight: 3,
        defaultOpacity: 0.7
    },

    /**
     * Drawing tools configuration
     */
    drawingTools: {
        enabled: true,
        position: 'topleft',
        draw: {
            polyline: {
                shapeOptions: {
                    color: '#8b5cf6',
                    weight: 3
                }
            },
            polygon: {
                allowIntersection: false,
                shapeOptions: {
                    color: '#8b5cf6',
                    fillOpacity: 0.3
                }
            },
            circle: {
                shapeOptions: {
                    color: '#8b5cf6',
                    fillOpacity: 0.3
                }
            },
            rectangle: {
                shapeOptions: {
                    color: '#8b5cf6',
                    fillOpacity: 0.3
                }
            },
            marker: {
                icon: null // Use default Leaflet marker
            },
            circlemarker: false // Disable circle markers
        },
        edit: {
            featureGroup: null, // Will be set dynamically
            remove: true
        }
    },

    /**
     * Map controls configuration
     */
    controls: {
        scale: {
            enabled: true,
            position: 'bottomleft',
            metric: true,
            imperial: true,
            maxWidth: 200
        },
        northArrow: {
            enabled: true,
            position: 'topright'
        },
        layerControl: {
            enabled: true,
            position: 'topright',
            collapsed: true
        },
        coordinateOverlay: {
            enabled: false,  // Disabled to reduce map clutter - coordinates available in Coordinate Converter UI
            position: 'topright'
        }
    },

    /**
     * Location storage configuration
     */
    storage: {
        key: 'mapping_saved_locations',
        maxLocations: 50
    },

    /**
     * Map export configuration
     */
    export: {
        defaultFormat: 'png',
        defaultFilename: 'tactical_map',
        quality: 0.95,
        backgroundColor: '#1f2937' // Gray-800
    },

    /**
     * Offline mode configuration
     */
    offline: {
        enabled: true,
        fallbackTileLayer: 'OpenStreetMap',
        cacheEnabled: true,
        cacheDuration: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
    },

    /**
     * API endpoints (for serverless proxies)
     */
    api: {
        mapTiles: '/api/map-tiles',
        geocoding: '/api/geocoding',
        elevation: '/api/elevation'
    },

    /**
     * Feature flags
     */
    features: {
        enableDrawing: true,
        enableMeasurement: true,
        enableLocationSaving: true,
        enableImageExport: true,
        enableCoordinateConversion: true,
        enableTacticalGraphics: true,
        enableOfflineMode: true
    },

    /**
     * UI configuration
     */
    ui: {
        modalMaxWidth: '6xl',
        modalMaxHeight: '90vh',
        mapHeight: '24rem', // 96 in Tailwind (h-96)
        coordinateInputPlaceholder: {
            mgrs: 'e.g., 32S AB 12345 67890',
            utm: 'e.g., 32 N 500000 4500000',
            latlon: 'e.g., 38.8977, -77.0365'
        }
    },

    /**
     * Validation rules
     */
    validation: {
        latitude: {
            min: -90,
            max: 90
        },
        longitude: {
            min: -180,
            max: 180
        },
        mgrsGridZone: {
            min: 1,
            max: 60
        }
    },

    /**
     * Error messages
     */
    errors: {
        invalidCoordinates: 'Invalid coordinate format. Please check your input.',
        coordinateOutOfRange: 'Coordinates are out of valid range.',
        mapInitializationFailed: 'Failed to initialize map. Please try again.',
        locationNotFound: 'Location not found.',
        exportFailed: 'Failed to export map image.',
        storageQuotaExceeded: 'Storage quota exceeded. Please delete some saved locations.'
    },

    /**
     * Success messages
     */
    messages: {
        locationLoaded: 'Location loaded successfully',
        locationSaved: 'Location saved successfully',
        locationDeleted: 'Location deleted successfully',
        mapExported: 'Map exported successfully',
        coordinatesConverted: 'Coordinates converted successfully'
    }
};

export default MappingConfig;

