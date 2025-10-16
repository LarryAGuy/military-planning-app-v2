/**
 * TXT Exporter
 * Exports drafts to plain text format
 * Fallback export format for maximum compatibility
 * 
 * @module TXTExporter
 */

export class TXTExporter {
    constructor() {
        this.initialized = false;
        this.lineWidth = 80;
    }

    /**
     * Initialize TXT exporter
     */
    async initialize() {
        if (this.initialized) {
            console.log('⚠️ TXT Exporter already initialized');
            return;
        }

        console.log('📄 TXT Exporter initialized');
        this.initialized = true;
    }

    /**
     * Export draft to TXT
     */
    async export(draft, options = {}) {
        this.ensureInitialized();

        try {
            const txtContent = this.generateTXTContent(draft, options);
            const blob = new Blob([txtContent], { type: 'text/plain' });
            
            // Create download link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = options.filename || 'document.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            console.log(`✅ TXT exported: ${options.filename}`);

            return {
                method: 'download',
                filename: options.filename,
                size: blob.size
            };

        } catch (error) {
            console.error('❌ Failed to export TXT:', error);
            throw error;
        }
    }

    /**
     * Generate plain text content
     */
    generateTXTContent(draft, options = {}) {
        const classification = draft.classification || 'UNCLASSIFIED';
        const title = draft.metadata?.title || 'Untitled Document';
        const dtg = draft.metadata?.dtg || '';
        const unit = draft.metadata?.unit || '';
        const author = draft.metadata?.author || '';

        let txt = '';

        // Classification banner
        txt += this.centerText(classification);
        txt += this.separator('=');
        txt += '\n';

        // Title and metadata
        txt += this.centerText(title);
        txt += '\n';
        if (unit) txt += this.centerText(unit) + '\n';
        if (dtg) txt += this.centerText(`DTG: ${dtg}`) + '\n';
        if (author) txt += this.centerText(`Prepared by: ${author}`) + '\n';
        txt += '\n';
        txt += this.separator('=');
        txt += '\n\n';

        // Content based on draft type
        if (draft.type === 'opord') {
            txt += this.generateOPORDContent(draft);
        } else if (draft.type === 'mdmp') {
            txt += this.generateMDMPContent(draft);
        } else if (draft.type === 'jpp') {
            txt += this.generateJPPContent(draft);
        }

        // Classification footer
        txt += '\n';
        txt += this.separator('=');
        txt += this.centerText(classification);
        txt += this.separator('=');

        return txt;
    }

    /**
     * Generate OPORD content for TXT
     */
    generateOPORDContent(draft) {
        const content = draft.content || {};
        let txt = '';

        // 1. Situation
        txt += '1. SITUATION\n';
        txt += this.separator('-');
        txt += this.formatSectionContent(content.situation);
        txt += '\n\n';

        // 2. Mission
        txt += '2. MISSION\n';
        txt += this.separator('-');
        txt += this.formatSectionContent(content.mission);
        txt += '\n\n';

        // 3. Execution
        txt += '3. EXECUTION\n';
        txt += this.separator('-');
        txt += this.formatSectionContent(content.execution);
        txt += '\n\n';

        // 4. Sustainment
        txt += '4. SUSTAINMENT\n';
        txt += this.separator('-');
        txt += this.formatSectionContent(content.sustainment);
        txt += '\n\n';

        // 5. Command and Signal
        txt += '5. COMMAND AND SIGNAL\n';
        txt += this.separator('-');
        txt += this.formatSectionContent(content.commandControl);
        txt += '\n\n';

        return txt;
    }

    /**
     * Generate MDMP content for TXT
     */
    generateMDMPContent(draft) {
        return 'MDMP Content\n' + this.separator('-') + '\n';
    }

    /**
     * Generate JPP content for TXT
     */
    generateJPPContent(draft) {
        return 'JPP Content\n' + this.separator('-') + '\n';
    }

    /**
     * Format section content for TXT
     */
    formatSectionContent(sectionData, indent = 0) {
        if (!sectionData || Object.keys(sectionData).length === 0) {
            return this.indent('No content provided', indent) + '\n';
        }

        let txt = '';
        for (const [key, value] of Object.entries(sectionData)) {
            if (typeof value === 'string') {
                txt += this.indent(`${this.formatKey(key)}: ${value}`, indent) + '\n';
            } else if (typeof value === 'object' && value !== null) {
                txt += this.indent(this.formatKey(key), indent) + '\n';
                txt += this.formatSectionContent(value, indent + 2);
            }
        }
        return txt;
    }

    /**
     * Center text within line width
     */
    centerText(text) {
        const padding = Math.max(0, Math.floor((this.lineWidth - text.length) / 2));
        return ' '.repeat(padding) + text + '\n';
    }

    /**
     * Create separator line
     */
    separator(char = '-') {
        return char.repeat(this.lineWidth) + '\n';
    }

    /**
     * Indent text
     */
    indent(text, spaces = 0) {
        return ' '.repeat(spaces) + text;
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
     * Wrap text to line width
     */
    wrapText(text, width = this.lineWidth) {
        const words = text.split(' ');
        const lines = [];
        let currentLine = '';

        for (const word of words) {
            if ((currentLine + word).length > width) {
                if (currentLine) lines.push(currentLine.trim());
                currentLine = word + ' ';
            } else {
                currentLine += word + ' ';
            }
        }

        if (currentLine) lines.push(currentLine.trim());

        return lines.join('\n');
    }

    /**
     * Preview TXT
     */
    async preview(draft, options = {}) {
        this.ensureInitialized();

        const txtContent = this.generateTXTContent(draft, options);
        return {
            text: txtContent,
            format: 'txt'
        };
    }

    /**
     * Ensure exporter is initialized
     */
    ensureInitialized() {
        if (!this.initialized) {
            throw new Error('TXT Exporter not initialized');
        }
    }
}

export default TXTExporter;

