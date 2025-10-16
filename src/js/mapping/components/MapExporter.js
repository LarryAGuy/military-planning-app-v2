/**
 * Map Exporter Component
 * 
 * Purpose: Export map as image (PNG/JPEG) using HTML2Canvas
 * 
 * Dependencies:
 * - html2canvas library
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

import { MappingConfig } from '../config.js';

export class MapExporter {
    constructor(map, mapContainer) {
        this.map = map;
        this.mapContainer = mapContainer;
        this.html2canvas = null;
    }

    /**
     * Initialize exporter with html2canvas library
     * 
     * @param {object} html2canvas - HTML2Canvas library instance
     */
    initialize(html2canvas) {
        this.html2canvas = html2canvas;
    }

    /**
     * Export map as image
     * 
     * @param {object} options - Export options
     * @param {string} options.format - Image format ('png' or 'jpeg')
     * @param {string} options.filename - Output filename (without extension)
     * @param {number} options.quality - JPEG quality (0-1)
     * @param {boolean} options.download - Whether to download automatically
     * @param {string} options.backgroundColor - Background color
     * @returns {Promise<object>} Result with { success: boolean, dataUrl?: string, error?: string }
     */
    async exportMap(options = {}) {
        if (!this.html2canvas) {
            return {
                success: false,
                error: 'HTML2Canvas library not initialized. Please load the library first.'
            };
        }

        const format = options.format || MappingConfig.export.defaultFormat;
        const filename = options.filename || MappingConfig.export.defaultFilename;
        const quality = options.quality || MappingConfig.export.quality;
        const download = options.download !== undefined ? options.download : true;
        const backgroundColor = options.backgroundColor || MappingConfig.export.backgroundColor;

        try {
            // Capture map container as canvas
            const canvas = await this.html2canvas(this.mapContainer, {
                backgroundColor: backgroundColor,
                useCORS: true,
                allowTaint: false,
                logging: false,
                scale: 2 // Higher resolution
            });

            // Convert to data URL
            const mimeType = format === 'jpeg' ? 'image/jpeg' : 'image/png';
            const dataUrl = canvas.toDataURL(mimeType, quality);

            // Download if requested
            if (download) {
                this.downloadImage(dataUrl, `${filename}.${format}`);
            }

            return {
                success: true,
                dataUrl: dataUrl,
                format: format,
                filename: `${filename}.${format}`
            };
        } catch (error) {
            console.error('Map export error:', error);
            return {
                success: false,
                error: `Export failed: ${error.message}`
            };
        }
    }

    /**
     * Export map as PNG
     * 
     * @param {string} filename - Output filename (without extension)
     * @param {boolean} download - Whether to download automatically
     * @returns {Promise<object>} Export result
     */
    async exportAsPNG(filename, download = true) {
        return this.exportMap({
            format: 'png',
            filename: filename,
            download: download
        });
    }

    /**
     * Export map as JPEG
     * 
     * @param {string} filename - Output filename (without extension)
     * @param {number} quality - JPEG quality (0-1)
     * @param {boolean} download - Whether to download automatically
     * @returns {Promise<object>} Export result
     */
    async exportAsJPEG(filename, quality = 0.95, download = true) {
        return this.exportMap({
            format: 'jpeg',
            filename: filename,
            quality: quality,
            download: download
        });
    }

    /**
     * Download image from data URL
     * 
     * @param {string} dataUrl - Image data URL
     * @param {string} filename - Output filename
     */
    downloadImage(dataUrl, filename) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    /**
     * Export map with metadata overlay
     * 
     * @param {object} metadata - Metadata to overlay
     * @param {string} metadata.title - Map title
     * @param {string} metadata.coordinates - Coordinates
     * @param {string} metadata.date - Date/time
     * @param {string} metadata.classification - Classification marking
     * @param {object} options - Export options
     * @returns {Promise<object>} Export result
     */
    async exportWithMetadata(metadata, options = {}) {
        // Create metadata overlay
        const overlay = this.createMetadataOverlay(metadata);
        this.mapContainer.appendChild(overlay);

        try {
            // Export with overlay
            const result = await this.exportMap(options);

            // Remove overlay
            this.mapContainer.removeChild(overlay);

            return result;
        } catch (error) {
            // Remove overlay on error
            if (this.mapContainer.contains(overlay)) {
                this.mapContainer.removeChild(overlay);
            }
            throw error;
        }
    }

    /**
     * Create metadata overlay element
     * 
     * @param {object} metadata - Metadata object
     * @returns {HTMLElement} Overlay element
     */
    createMetadataOverlay(metadata) {
        const overlay = document.createElement('div');
        overlay.className = 'map-metadata-overlay';
        overlay.style.cssText = `
            position: absolute;
            bottom: 10px;
            left: 10px;
            background: rgba(31, 41, 55, 0.9);
            color: white;
            padding: 10px;
            border-radius: 4px;
            font-family: monospace;
            font-size: 12px;
            z-index: 1000;
            pointer-events: none;
        `;

        let html = '';

        if (metadata.title) {
            html += `<div style="font-weight: bold; margin-bottom: 5px;">${metadata.title}</div>`;
        }

        if (metadata.coordinates) {
            html += `<div>Coordinates: ${metadata.coordinates}</div>`;
        }

        if (metadata.date) {
            html += `<div>Date: ${metadata.date}</div>`;
        }

        if (metadata.classification) {
            html += `<div style="color: #ef4444; font-weight: bold; margin-top: 5px;">${metadata.classification}</div>`;
        }

        overlay.innerHTML = html;

        return overlay;
    }

    /**
     * Export map with scale bar and north arrow visible
     * 
     * @param {object} options - Export options
     * @returns {Promise<object>} Export result
     */
    async exportWithControls(options = {}) {
        // Ensure controls are visible
        const scaleControl = this.map._controlContainer.querySelector('.leaflet-control-scale');
        const northArrow = this.map._controlContainer.querySelector('.north-arrow-control');

        if (scaleControl) {
            scaleControl.style.display = 'block';
        }

        if (northArrow) {
            northArrow.style.display = 'block';
        }

        // Export
        const result = await this.exportMap(options);

        return result;
    }

    /**
     * Get export preview (without downloading)
     * 
     * @param {string} format - Image format ('png' or 'jpeg')
     * @returns {Promise<object>} Result with data URL
     */
    async getPreview(format = 'png') {
        return this.exportMap({
            format: format,
            download: false
        });
    }

    /**
     * EXTENSION HOOK: Export with custom overlay
     * Used by MDMP/JPP for specialized metadata
     * 
     * @param {HTMLElement} customOverlay - Custom overlay element
     * @param {object} options - Export options
     * @returns {Promise<object>} Export result
     */
    async exportWithCustomOverlay(customOverlay, options = {}) {
        this.mapContainer.appendChild(customOverlay);

        try {
            const result = await this.exportMap(options);
            this.mapContainer.removeChild(customOverlay);
            return result;
        } catch (error) {
            if (this.mapContainer.contains(customOverlay)) {
                this.mapContainer.removeChild(customOverlay);
            }
            throw error;
        }
    }

    /**
     * EXTENSION HOOK: Batch export multiple views
     * Used by MDMP/JPP for COA comparison
     * 
     * @param {array} views - Array of view configurations
     * @param {object} options - Export options
     * @returns {Promise<array>} Array of export results
     */
    async batchExport(views, options = {}) {
        const results = [];

        for (const view of views) {
            // Set map view
            if (view.center && view.zoom) {
                this.map.setView(view.center, view.zoom);
                
                // Wait for tiles to load
                await this.waitForTiles();
            }

            // Export
            const result = await this.exportMap({
                ...options,
                filename: view.filename || options.filename,
                download: view.download !== undefined ? view.download : options.download
            });

            results.push({
                view: view,
                result: result
            });
        }

        return results;
    }

    /**
     * Wait for map tiles to load
     * 
     * @param {number} timeout - Timeout in milliseconds
     * @returns {Promise<void>}
     */
    waitForTiles(timeout = 2000) {
        return new Promise((resolve) => {
            let tilesLoading = 0;

            const checkTiles = () => {
                if (tilesLoading === 0) {
                    resolve();
                }
            };

            this.map.on('tileloadstart', () => {
                tilesLoading++;
            });

            this.map.on('tileload', () => {
                tilesLoading--;
                checkTiles();
            });

            this.map.on('tileerror', () => {
                tilesLoading--;
                checkTiles();
            });

            // Timeout fallback
            setTimeout(() => {
                resolve();
            }, timeout);

            // Check immediately in case tiles are already loaded
            checkTiles();
        });
    }

    /**
     * Get supported export formats
     * 
     * @returns {array} Array of supported formats
     */
    getSupportedFormats() {
        return ['png', 'jpeg'];
    }

    /**
     * Validate export options
     * 
     * @param {object} options - Export options
     * @returns {object} Validation result
     */
    validateOptions(options) {
        const errors = [];

        if (options.format && !this.getSupportedFormats().includes(options.format)) {
            errors.push(`Unsupported format: ${options.format}`);
        }

        if (options.quality !== undefined && (options.quality < 0 || options.quality > 1)) {
            errors.push('Quality must be between 0 and 1');
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }
}

export default MapExporter;

