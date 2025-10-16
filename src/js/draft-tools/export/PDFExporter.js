/**
 * PDF Exporter
 * Exports drafts to PDF format using jsPDF library
 * Primary export format for military documents
 * 
 * @module PDFExporter
 */

export class PDFExporter {
    constructor() {
        this.jsPDF = null;
        this.initialized = false;
        this.pageWidth = 8.5; // inches
        this.pageHeight = 11; // inches
        this.margin = 0.75; // inches
        this.fontSize = {
            title: 16,
            heading1: 14,
            heading2: 12,
            body: 10,
            classification: 12
        };
    }

    /**
     * Initialize PDF exporter (load jsPDF library)
     */
    async initialize() {
        if (this.initialized) {
            console.log('⚠️ PDF Exporter already initialized');
            return;
        }

        try {
            // For now, we'll use a lightweight approach without external libraries
            // In production, you would load jsPDF here
            console.log('📄 PDF Exporter initialized (using browser print API)');
            this.initialized = true;
        } catch (error) {
            console.error('❌ Failed to initialize PDF Exporter:', error);
            throw error;
        }
    }

    /**
     * Export draft to PDF
     */
    async export(draft, options = {}) {
        this.ensureInitialized();

        try {
            // Generate HTML content for PDF
            const htmlContent = this.generateHTMLContent(draft, options);

            // Create a temporary container
            const container = document.createElement('div');
            container.innerHTML = htmlContent;
            container.style.cssText = `
                position: absolute;
                left: -9999px;
                top: 0;
                width: 8.5in;
                background: white;
                color: black;
                font-family: 'Times New Roman', serif;
                font-size: 12pt;
                line-height: 1.5;
                padding: 0.75in;
            `;
            document.body.appendChild(container);

            // Use browser print API
            const printWindow = window.open('', '_blank');
            printWindow.document.write(htmlContent);
            printWindow.document.close();

            // Trigger print dialog
            printWindow.focus();
            printWindow.print();

            // Cleanup
            setTimeout(() => {
                document.body.removeChild(container);
                printWindow.close();
            }, 1000);

            return {
                method: 'browser-print',
                filename: options.filename
            };

        } catch (error) {
            console.error('❌ Failed to export PDF:', error);
            throw error;
        }
    }

    /**
     * Generate HTML content for PDF
     */
    generateHTMLContent(draft, options = {}) {
        const classification = draft.classification || 'UNCLASSIFIED';
        const title = draft.metadata?.title || 'Untitled Document';
        const dtg = draft.metadata?.dtg || '';
        const unit = draft.metadata?.unit || '';
        const author = draft.metadata?.author || '';

        let html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <style>
        @page {
            size: letter;
            margin: 0.75in;
        }
        body {
            font-family: 'Times New Roman', serif;
            font-size: 12pt;
            line-height: 1.5;
            color: black;
            background: white;
            margin: 0;
            padding: 0;
        }
        .classification-banner {
            text-align: center;
            font-weight: bold;
            font-size: 14pt;
            padding: 10px;
            margin-bottom: 20px;
            border-top: 3px solid black;
            border-bottom: 3px solid black;
            background: ${this.getClassificationColor(classification)};
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .title {
            font-size: 16pt;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .metadata {
            font-size: 10pt;
            margin-bottom: 5px;
        }
        .section {
            margin-bottom: 20px;
            page-break-inside: avoid;
        }
        .section-title {
            font-size: 14pt;
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: 2px solid black;
        }
        .subsection-title {
            font-size: 12pt;
            font-weight: bold;
            margin-top: 15px;
            margin-bottom: 8px;
        }
        .content {
            margin-left: 20px;
            text-align: justify;
        }
        .page-break {
            page-break-after: always;
        }
        @media print {
            .no-print {
                display: none;
            }
        }
    </style>
</head>
<body>
    <div class="classification-banner">${classification}</div>
    
    <div class="header">
        <div class="title">${title}</div>
        ${unit ? `<div class="metadata">${unit}</div>` : ''}
        ${dtg ? `<div class="metadata">DTG: ${dtg}</div>` : ''}
        ${author ? `<div class="metadata">Prepared by: ${author}</div>` : ''}
    </div>
`;

        // Add content based on draft type
        if (draft.type === 'opord') {
            html += this.generateOPORDContent(draft);
        } else if (draft.type === 'mdmp') {
            html += this.generateMDMPContent(draft);
        } else if (draft.type === 'jpp') {
            html += this.generateJPPContent(draft);
        }

        html += `
    <div class="classification-banner" style="margin-top: 30px;">${classification}</div>
</body>
</html>
`;

        return html;
    }

    /**
     * Generate OPORD content for PDF
     */
    generateOPORDContent(draft) {
        const content = draft.content || {};
        let html = '';

        // 1. Situation
        html += `
    <div class="section">
        <div class="section-title">1. SITUATION</div>
        <div class="content">
            ${this.formatSectionContent(content.situation)}
        </div>
    </div>
`;

        // 2. Mission
        html += `
    <div class="section">
        <div class="section-title">2. MISSION</div>
        <div class="content">
            ${this.formatSectionContent(content.mission)}
        </div>
    </div>
`;

        // 3. Execution
        html += `
    <div class="section">
        <div class="section-title">3. EXECUTION</div>
        <div class="content">
            ${this.formatSectionContent(content.execution)}
        </div>
    </div>
`;

        // 4. Sustainment
        html += `
    <div class="section">
        <div class="section-title">4. SUSTAINMENT</div>
        <div class="content">
            ${this.formatSectionContent(content.sustainment)}
        </div>
    </div>
`;

        // 5. Command and Signal
        html += `
    <div class="section">
        <div class="section-title">5. COMMAND AND SIGNAL</div>
        <div class="content">
            ${this.formatSectionContent(content.commandControl)}
        </div>
    </div>
`;

        return html;
    }

    /**
     * Generate MDMP content for PDF
     */
    generateMDMPContent(draft) {
        // Placeholder for MDMP content generation
        return '<div class="section"><div class="section-title">MDMP Content</div></div>';
    }

    /**
     * Generate JPP content for PDF
     */
    generateJPPContent(draft) {
        // Placeholder for JPP content generation
        return '<div class="section"><div class="section-title">JPP Content</div></div>';
    }

    /**
     * Format section content
     */
    formatSectionContent(sectionData) {
        if (!sectionData || Object.keys(sectionData).length === 0) {
            return '<p><em>No content provided</em></p>';
        }

        let html = '';
        for (const [key, value] of Object.entries(sectionData)) {
            if (typeof value === 'string') {
                html += `<p><strong>${this.formatKey(key)}:</strong> ${value}</p>`;
            } else if (typeof value === 'object' && value !== null) {
                html += `<div class="subsection-title">${this.formatKey(key)}</div>`;
                html += this.formatSectionContent(value);
            }
        }
        return html;
    }

    /**
     * Format object key to readable text
     */
    formatKey(key) {
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
    }

    /**
     * Get classification color
     */
    getClassificationColor(classification) {
        const colors = {
            'UNCLASSIFIED': '#00ff00',
            'CUI': '#800080',
            'CONFIDENTIAL': '#0000ff',
            'SECRET': '#ff0000',
            'TOP SECRET': '#ff8c00'
        };
        return colors[classification] || '#cccccc';
    }

    /**
     * Preview PDF (generate HTML preview)
     */
    async preview(draft, options = {}) {
        this.ensureInitialized();

        const htmlContent = this.generateHTMLContent(draft, options);
        return {
            html: htmlContent,
            format: 'pdf'
        };
    }

    /**
     * Ensure exporter is initialized
     */
    ensureInitialized() {
        if (!this.initialized) {
            throw new Error('PDF Exporter not initialized');
        }
    }
}

export default PDFExporter;

