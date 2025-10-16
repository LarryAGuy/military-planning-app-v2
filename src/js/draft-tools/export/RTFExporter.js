/**
 * RTF Exporter
 * Exports drafts to Rich Text Format (RTF)
 * Compatible with Microsoft Word and other word processors
 * 
 * @module RTFExporter
 */

export class RTFExporter {
    constructor() {
        this.initialized = false;
    }

    /**
     * Initialize RTF exporter
     */
    async initialize() {
        if (this.initialized) {
            console.log('⚠️ RTF Exporter already initialized');
            return;
        }

        console.log('📄 RTF Exporter initialized');
        this.initialized = true;
    }

    /**
     * Export draft to RTF
     */
    async export(draft, options = {}) {
        this.ensureInitialized();

        try {
            const rtfContent = this.generateRTFContent(draft, options);
            const blob = new Blob([rtfContent], { type: 'application/rtf' });
            
            // Create download link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = options.filename || 'document.rtf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log(`✅ RTF exported: ${options.filename}`);

            return {
                method: 'download',
                filename: options.filename,
                size: blob.size
            };

        } catch (error) {
            console.error('❌ Failed to export RTF:', error);
            throw error;
        }
    }

    /**
     * Generate RTF content
     */
    generateRTFContent(draft, options = {}) {
        const classification = draft.classification || 'UNCLASSIFIED';
        const title = draft.metadata?.title || 'Untitled Document';
        const dtg = draft.metadata?.dtg || '';
        const unit = draft.metadata?.unit || '';
        const author = draft.metadata?.author || '';

        // RTF header
        let rtf = '{\\rtf1\\ansi\\deff0\n';
        
        // Font table
        rtf += '{\\fonttbl{\\f0\\froman Times New Roman;}}\n';
        
        // Color table
        rtf += '{\\colortbl;\\red0\\green0\\blue0;\\red255\\green0\\blue0;}\n';
        
        // Document formatting
        rtf += '\\paperw12240\\paperh15840\\margl1080\\margr1080\\margt1080\\margb1080\n';
        
        // Classification banner
        rtf += '\\pard\\qc\\b\\fs28 ' + this.escapeRTF(classification) + '\\b0\\fs24\\par\n';
        rtf += '\\par\n';
        
        // Title
        rtf += '\\pard\\qc\\b\\fs32 ' + this.escapeRTF(title) + '\\b0\\fs24\\par\n';
        
        // Metadata
        if (unit) {
            rtf += '\\pard\\qc\\fs20 ' + this.escapeRTF(unit) + '\\fs24\\par\n';
        }
        if (dtg) {
            rtf += '\\pard\\qc\\fs20 DTG: ' + this.escapeRTF(dtg) + '\\fs24\\par\n';
        }
        if (author) {
            rtf += '\\pard\\qc\\fs20 Prepared by: ' + this.escapeRTF(author) + '\\fs24\\par\n';
        }
        
        rtf += '\\par\\par\n';
        
        // Content based on draft type
        if (draft.type === 'opord') {
            rtf += this.generateOPORDContent(draft);
        } else if (draft.type === 'mdmp') {
            rtf += this.generateMDMPContent(draft);
        } else if (draft.type === 'jpp') {
            rtf += this.generateJPPContent(draft);
        }
        
        // Classification footer
        rtf += '\\par\\par\n';
        rtf += '\\pard\\qc\\b\\fs28 ' + this.escapeRTF(classification) + '\\b0\\fs24\\par\n';
        
        // Close RTF document
        rtf += '}';
        
        return rtf;
    }

    /**
     * Generate OPORD content for RTF
     */
    generateOPORDContent(draft) {
        const content = draft.content || {};
        let rtf = '';

        // 1. Situation
        rtf += '\\pard\\b\\fs28 1. SITUATION\\b0\\fs24\\par\n';
        rtf += this.formatSectionContent(content.situation);
        rtf += '\\par\n';

        // 2. Mission
        rtf += '\\pard\\b\\fs28 2. MISSION\\b0\\fs24\\par\n';
        rtf += this.formatSectionContent(content.mission);
        rtf += '\\par\n';

        // 3. Execution
        rtf += '\\pard\\b\\fs28 3. EXECUTION\\b0\\fs24\\par\n';
        rtf += this.formatSectionContent(content.execution);
        rtf += '\\par\n';

        // 4. Sustainment
        rtf += '\\pard\\b\\fs28 4. SUSTAINMENT\\b0\\fs24\\par\n';
        rtf += this.formatSectionContent(content.sustainment);
        rtf += '\\par\n';

        // 5. Command and Signal
        rtf += '\\pard\\b\\fs28 5. COMMAND AND SIGNAL\\b0\\fs24\\par\n';
        rtf += this.formatSectionContent(content.commandControl);
        rtf += '\\par\n';

        return rtf;
    }

    /**
     * Generate MDMP content for RTF
     */
    generateMDMPContent(draft) {
        return '\\pard\\b\\fs28 MDMP Content\\b0\\fs24\\par\n';
    }

    /**
     * Generate JPP content for RTF
     */
    generateJPPContent(draft) {
        return '\\pard\\b\\fs28 JPP Content\\b0\\fs24\\par\n';
    }

    /**
     * Format section content for RTF
     */
    formatSectionContent(sectionData) {
        if (!sectionData || Object.keys(sectionData).length === 0) {
            return '\\pard\\li720\\i No content provided\\i0\\par\n';
        }

        let rtf = '';
        for (const [key, value] of Object.entries(sectionData)) {
            if (typeof value === 'string') {
                rtf += '\\pard\\li720\\b ' + this.escapeRTF(this.formatKey(key)) + ':\\b0 ';
                rtf += this.escapeRTF(value) + '\\par\n';
            } else if (typeof value === 'object' && value !== null) {
                rtf += '\\pard\\li720\\b\\fs26 ' + this.escapeRTF(this.formatKey(key)) + '\\b0\\fs24\\par\n';
                rtf += this.formatSectionContent(value);
            }
        }
        return rtf;
    }

    /**
     * Escape special RTF characters
     */
    escapeRTF(text) {
        if (!text) return '';
        return text
            .replace(/\\/g, '\\\\')
            .replace(/{/g, '\\{')
            .replace(/}/g, '\\}')
            .replace(/\n/g, '\\par\n');
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
     * Preview RTF (generate text preview)
     */
    async preview(draft, options = {}) {
        this.ensureInitialized();

        const rtfContent = this.generateRTFContent(draft, options);
        return {
            rtf: rtfContent,
            format: 'rtf'
        };
    }

    /**
     * Ensure exporter is initialized
     */
    ensureInitialized() {
        if (!this.initialized) {
            throw new Error('RTF Exporter not initialized');
        }
    }
}

export default RTFExporter;

