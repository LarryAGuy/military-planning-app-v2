/**
 * Export Manager
 * Orchestrates export of drafts to multiple formats
 * Supports: PDF, RTF, DOCX, TXT
 * 
 * @module ExportManager
 */

import { PDFExporter } from './PDFExporter.js';
import { RTFExporter } from './RTFExporter.js';
import { DOCXExporter } from './DOCXExporter.js';
import { TXTExporter } from './TXTExporter.js';

export class ExportManager {
    constructor() {
        this.exporters = new Map();
        this.initialized = false;
    }

    /**
     * Initialize export manager and all exporters
     */
    async initialize() {
        if (this.initialized) {
            console.log('⚠️ ExportManager already initialized');
            return;
        }

        console.log('📤 Initializing ExportManager...');

        try {
            // Initialize all exporters
            this.exporters.set('pdf', new PDFExporter());
            this.exporters.set('rtf', new RTFExporter());
            this.exporters.set('docx', new DOCXExporter());
            this.exporters.set('txt', new TXTExporter());

            // Initialize each exporter
            for (const [format, exporter] of this.exporters) {
                try {
                    await exporter.initialize();
                    console.log(`✅ ${format.toUpperCase()} exporter initialized`);
                } catch (error) {
                    console.warn(`⚠️ ${format.toUpperCase()} exporter initialization failed:`, error);
                }
            }

            this.initialized = true;
            console.log('✅ ExportManager initialized');

        } catch (error) {
            console.error('❌ Failed to initialize ExportManager:', error);
            throw error;
        }
    }

    /**
     * Export draft to specified format
     */
    async exportDraft(draft, format, options = {}) {
        this.ensureInitialized();

        const formatLower = format.toLowerCase();
        const exporter = this.exporters.get(formatLower);

        if (!exporter) {
            throw new Error(`Unsupported export format: ${format}`);
        }

        try {
            console.log(`📤 Exporting draft ${draft.id} to ${format.toUpperCase()}...`);

            // Generate filename if not provided
            const filename = options.filename || this.generateFilename(draft, formatLower);

            // Export using appropriate exporter
            const result = await exporter.export(draft, { ...options, filename });

            console.log(`✅ Draft exported successfully: ${filename}`);

            return {
                success: true,
                format: formatLower,
                filename: filename,
                ...result
            };

        } catch (error) {
            console.error(`❌ Failed to export draft to ${format}:`, error);
            throw error;
        }
    }

    /**
     * Export draft to multiple formats
     */
    async exportDraftMultiple(draft, formats, options = {}) {
        this.ensureInitialized();

        const results = [];
        const errors = [];

        for (const format of formats) {
            try {
                const result = await this.exportDraft(draft, format, options);
                results.push(result);
            } catch (error) {
                errors.push({
                    format: format,
                    error: error.message
                });
            }
        }

        return {
            success: errors.length === 0,
            results: results,
            errors: errors
        };
    }

    /**
     * Get available export formats
     */
    getAvailableFormats() {
        return Array.from(this.exporters.keys());
    }

    /**
     * Check if format is supported
     */
    isFormatSupported(format) {
        return this.exporters.has(format.toLowerCase());
    }

    /**
     * Generate filename for export
     */
    generateFilename(draft, format) {
        const type = draft.type.toUpperCase();
        const title = draft.metadata?.title || 'Untitled';
        const dtg = draft.metadata?.dtg || '';
        const classification = draft.classification || 'UNCLASSIFIED';

        // Sanitize title for filename
        const sanitizedTitle = title
            .replace(/[^a-z0-9]/gi, '_')
            .replace(/_+/g, '_')
            .substring(0, 50);

        // Format: TYPE_TITLE_DTG_CLASSIFICATION.ext
        const parts = [type, sanitizedTitle];
        
        if (dtg) {
            const dtgFormatted = dtg.replace(/[^a-z0-9]/gi, '_');
            parts.push(dtgFormatted);
        }

        parts.push(classification);

        return `${parts.join('_')}.${format}`;
    }

    /**
     * Preview export (generate but don't download)
     */
    async previewExport(draft, format, options = {}) {
        this.ensureInitialized();

        const formatLower = format.toLowerCase();
        const exporter = this.exporters.get(formatLower);

        if (!exporter) {
            throw new Error(`Unsupported export format: ${format}`);
        }

        try {
            console.log(`👁️ Generating preview for ${format.toUpperCase()}...`);

            // Generate preview without downloading
            const preview = await exporter.preview(draft, options);

            console.log(`✅ Preview generated for ${format.toUpperCase()}`);

            return preview;

        } catch (error) {
            console.error(`❌ Failed to generate preview for ${format}:`, error);
            throw error;
        }
    }

    /**
     * Get export statistics
     */
    getExportStats() {
        return {
            availableFormats: this.getAvailableFormats(),
            exportersInitialized: this.exporters.size,
            initialized: this.initialized
        };
    }

    /**
     * Validate draft before export
     */
    validateDraft(draft) {
        const errors = [];

        // Check required fields
        if (!draft.id) errors.push('Draft ID is required');
        if (!draft.type) errors.push('Draft type is required');
        if (!draft.content) errors.push('Draft content is required');
        if (!draft.metadata) errors.push('Draft metadata is required');

        // Check metadata fields
        if (draft.metadata) {
            if (!draft.metadata.title) errors.push('Draft title is required');
            if (!draft.metadata.dtg) errors.push('DTG is required');
        }

        // Check classification
        const validClassifications = ['UNCLASSIFIED', 'CUI', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET'];
        if (draft.classification && !validClassifications.includes(draft.classification)) {
            errors.push(`Invalid classification: ${draft.classification}`);
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

    /**
     * Ensure manager is initialized
     */
    ensureInitialized() {
        if (!this.initialized) {
            throw new Error('ExportManager not initialized');
        }
    }
}

export default ExportManager;

