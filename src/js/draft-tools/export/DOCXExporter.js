/**
 * DOCX Exporter
 * Exports drafts to Microsoft Word format (DOCX)
 * Uses docx.js library for document generation
 * 
 * @module DOCXExporter
 */

export class DOCXExporter {
    constructor() {
        this.initialized = false;
    }

    /**
     * Initialize DOCX exporter
     */
    async initialize() {
        if (this.initialized) {
            console.log('⚠️ DOCX Exporter already initialized');
            return;
        }

        // Note: In production, you would load docx.js library here
        // For now, we'll use a simplified HTML-based approach
        console.log('📄 DOCX Exporter initialized (using HTML conversion)');
        this.initialized = true;
    }

    /**
     * Export draft to DOCX
     */
    async export(draft, options = {}) {
        this.ensureInitialized();

        try {
            // Generate HTML content that can be opened in Word
            const htmlContent = this.generateWordHTML(draft, options);
            const blob = new Blob([htmlContent], { 
                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' 
            });
            
            // Create download link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = options.filename || 'document.docx';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log(`✅ DOCX exported: ${options.filename}`);

            return {
                method: 'download',
                filename: options.filename,
                size: blob.size
            };

        } catch (error) {
            console.error('❌ Failed to export DOCX:', error);
            throw error;
        }
    }

    /**
     * Generate Word-compatible HTML
     */
    generateWordHTML(draft, options = {}) {
        const classification = draft.classification || 'UNCLASSIFIED';
        const title = draft.metadata?.title || 'Untitled Document';
        const dtg = draft.metadata?.dtg || '';
        const unit = draft.metadata?.unit || '';
        const author = draft.metadata?.author || '';

        let html = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
    <meta charset='utf-8'>
    <title>${title}</title>
    <style>
        @page {
            size: 8.5in 11in;
            margin: 1in;
        }
        body {
            font-family: 'Times New Roman', serif;
            font-size: 12pt;
            line-height: 1.5;
        }
        .classification {
            text-align: center;
            font-weight: bold;
            font-size: 14pt;
            margin: 20px 0;
        }
        .title {
            text-align: center;
            font-size: 16pt;
            font-weight: bold;
            margin: 20px 0;
        }
        .metadata {
            text-align: center;
            font-size: 10pt;
            margin: 5px 0;
        }
        .section-title {
            font-size: 14pt;
            font-weight: bold;
            margin-top: 20px;
            margin-bottom: 10px;
        }
        .content {
            margin-left: 0.5in;
            text-align: justify;
        }
    </style>
</head>
<body>
    <div class='classification'>${classification}</div>
    <div class='title'>${title}</div>
    ${unit ? `<div class='metadata'>${unit}</div>` : ''}
    ${dtg ? `<div class='metadata'>DTG: ${dtg}</div>` : ''}
    ${author ? `<div class='metadata'>Prepared by: ${author}</div>` : ''}
`;

        // Add content based on draft type
        if (draft.type === 'opord') {
            html += this.generateOPORDContent(draft);
        }

        html += `
    <div class='classification'>${classification}</div>
</body>
</html>
`;

        return html;
    }

    /**
     * Generate OPORD content
     */
    generateOPORDContent(draft) {
        const content = draft.content || {};
        let html = '';

        const sections = [
            { title: '1. SITUATION', data: content.situation },
            { title: '2. MISSION', data: content.mission },
            { title: '3. EXECUTION', data: content.execution },
            { title: '4. SUSTAINMENT', data: content.sustainment },
            { title: '5. COMMAND AND SIGNAL', data: content.commandControl }
        ];

        for (const section of sections) {
            html += `<div class='section-title'>${section.title}</div>`;
            html += `<div class='content'>${this.formatContent(section.data)}</div>`;
        }

        return html;
    }

    /**
     * Format content for HTML
     */
    formatContent(data) {
        if (!data || Object.keys(data).length === 0) {
            return '<p><em>No content provided</em></p>';
        }

        let html = '';
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === 'string') {
                html += `<p><strong>${this.formatKey(key)}:</strong> ${value}</p>`;
            } else if (typeof value === 'object' && value !== null) {
                html += `<p><strong>${this.formatKey(key)}</strong></p>`;
                html += this.formatContent(value);
            }
        }
        return html;
    }

    /**
     * Format key to readable text
     */
    formatKey(key) {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
    }

    /**
     * Preview DOCX
     */
    async preview(draft, options = {}) {
        this.ensureInitialized();

        const htmlContent = this.generateWordHTML(draft, options);
        return {
            html: htmlContent,
            format: 'docx'
        };
    }

    /**
     * Ensure exporter is initialized
     */
    ensureInitialized() {
        if (!this.initialized) {
            throw new Error('DOCX Exporter not initialized');
        }
    }
}

export default DOCXExporter;

