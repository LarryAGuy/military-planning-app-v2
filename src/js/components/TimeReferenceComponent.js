/**
 * TimeReferenceComponent - Collapsible time reference display
 * Displays multiple time zones in a collapsible interface
 */

import { renderCollapsedView as tmplCollapsed, renderExpandedView as tmplExpanded } from './views/TimeTemplates.js';

export class TimeReferenceComponent {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.container = null;
        this.isExpanded = false;
        this.updateInterval = null;
        
        // Time zones configuration
        this.timeZones = [
            { id: 'zulu', name: 'Zulu (UTC)', offset: 0, abbreviation: 'Z' },
            { id: 'local', name: 'Local System', offset: null, abbreviation: 'LOC' },
            { id: 'est', name: 'Eastern', offset: -5, abbreviation: 'EST', dstOffset: -4 },
            { id: 'pst', name: 'Pacific', offset: -8, abbreviation: 'PST', dstOffset: -7 },
            { id: 'hawaii', name: 'Hawaii', offset: -10, abbreviation: 'HST' },
            { id: 'alaska', name: 'Alaska', offset: -9, abbreviation: 'AKST', dstOffset: -8 },
            { id: 'beijing', name: 'Beijing', offset: 8, abbreviation: 'CST' },
            { id: 'korea', name: 'Korea', offset: 9, abbreviation: 'KST' },
            { id: 'moscow', name: 'Moscow', offset: 3, abbreviation: 'MSK' }
        ];
    }

    async initialize() {
        try {
            this.createContainer();
            this.loadState();
            this.render();
            this.setupEventListeners();
            this.startTimeUpdates();
            
            console.log('🕐 TimeReferenceComponent initialized');
        } catch (error) {
            console.error('Failed to initialize TimeReferenceComponent:', error);
            throw error;
        }
    }

    createContainer() {
        // Create container as independent area between sidebars
        this.container = document.createElement('div');
        this.container.id = 'time-reference';
        this.container.className = 'time-reference-area';

        // Find the workspace and create a center wrapper if it doesn't exist
        const workspace = document.querySelector('#workspace');
        const mainContent = document.querySelector('#main-content');

        if (workspace && mainContent) {
            // Check if center wrapper already exists
            let centerWrapper = document.querySelector('#center-wrapper');

            if (!centerWrapper) {
                // Create center wrapper to contain both time reference and workspace
                centerWrapper = document.createElement('div');
                centerWrapper.id = 'center-wrapper';
                centerWrapper.className = 'center-wrapper flex-1 flex flex-col overflow-hidden';

                // Move workspace into the center wrapper
                workspace.parentNode.removeChild(workspace);
                centerWrapper.appendChild(this.container);
                centerWrapper.appendChild(workspace);

                // Insert center wrapper where workspace was
                const sidebar = document.querySelector('#sidebar');
                if (sidebar && sidebar.nextSibling) {
                    mainContent.insertBefore(centerWrapper, sidebar.nextSibling);
                } else {
                    mainContent.appendChild(centerWrapper);
                }
            } else {
                // Center wrapper exists, just add time reference at the top
                centerWrapper.insertBefore(this.container, centerWrapper.firstChild);
            }
        } else {
            // Fallback: insert after header banner
            const headerBanner = document.querySelector('.bg-yellow-600');
            if (headerBanner && headerBanner.parentNode) {
                headerBanner.parentNode.insertBefore(this.container, headerBanner.nextSibling);
            } else {
                document.body.insertBefore(this.container, document.body.firstChild);
            }
        }
    }

    loadState() {
        // Load expanded state from localStorage
        const savedState = localStorage.getItem('timeReference_expanded');
        this.isExpanded = savedState === 'true';
    }

    saveState() {
        // Save expanded state to localStorage
        localStorage.setItem('timeReference_expanded', this.isExpanded.toString());
    }

    render() {
        if (!this.container) return;

        const currentTime = new Date();
        const expandedClass = this.isExpanded ? 'expanded' : 'collapsed';

        this.container.innerHTML = `
            <div class="time-reference-content bg-gray-800 rounded-lg border border-gray-700 transition-all duration-300 ${expandedClass} cursor-pointer hover:bg-gray-750 mx-6"
                 id="time-reference-clickable">
                <div class="px-6 py-3">
                    ${this.isExpanded ? tmplExpanded(currentTime, this.timeZones) : tmplCollapsed(currentTime)}
                </div>
            </div>
        `;
    }





    setupEventListeners() {
        if (!this.container) return;

        // Make entire time reference bar clickable for expand/collapse
        this.container.addEventListener('click', (e) => {
            // Check if click was on Copy DTG button - if so, don't toggle
            if (e.target.closest('#copy-dtg-btn')) {
                this.copyDTG();
                return;
            }

            // Otherwise, toggle expand/collapse for any click on the bar
            this.toggleExpanded();
        });
    }

    toggleExpanded() {
        this.isExpanded = !this.isExpanded;
        this.saveState();
        this.render();
        
        console.log(`🕐 Time reference ${this.isExpanded ? 'expanded' : 'collapsed'}`);
    }

    async copyDTG() {
        const now = new Date();
        const dtg = this.generateDTG(now);

        let usedLegacy = false;
        let success = false;

        // Feature detection for modern Clipboard API
        const hasModernClipboard = !!(navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function');

        if (hasModernClipboard) {
            try {
                await navigator.clipboard.writeText(dtg);
                success = true;
            } catch (e) {
                // Fall back if modern API fails (permission, protocol restrictions, etc.)
                try {
                    const textArea = document.createElement('textarea');
                    textArea.value = dtg;
                    document.body.appendChild(textArea);
                    textArea.select();
                    document.execCommand('copy');
                    document.body.removeChild(textArea);
                    success = true;
                    usedLegacy = true;
                } catch (legacyErr) {
                    console.error('Legacy copy failed:', legacyErr);
                }
            }
        } else {
            // Fallback for older browsers and file:// contexts
            try {
                const textArea = document.createElement('textarea');
                textArea.value = dtg;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                success = true;
                usedLegacy = true;
            } catch (legacyErr) {
                console.error('Legacy copy failed:', legacyErr);
            }
        }

        // Visual feedback (CSP-safe; uses existing button element only)
        const btn = this.container.querySelector('#copy-dtg-btn');
        if (btn) {
            const originalText = btn.innerHTML;
            if (success) {
                const msg = usedLegacy ? 'Copied (legacy method)' : 'Copied!';
                btn.innerHTML = `<i class="fas fa-check mr-1"></i>${msg}`;
                btn.classList.add('bg-green-600');
                btn.classList.remove('bg-blue-600');
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('bg-green-600');
                    btn.classList.add('bg-blue-600');
                }, 2000);
            } else {
                btn.innerHTML = '<i class="fas fa-times mr-1"></i>Copy failed';
                btn.classList.add('bg-red-600');
                btn.classList.remove('bg-blue-600');
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.classList.remove('bg-red-600');
                    btn.classList.add('bg-blue-600');
                }, 2000);
            }
        }

        if (success) {
            console.log('📋 DTG copied to clipboard:', dtg, usedLegacy ? '(legacy)' : '(modern)');
        } else {
            console.error('Failed to copy DTG');
        }
    }

    generateDTG(date) {
        // Generate military Date-Time Group in format: DDHHMMZMMMYY
        const utc = new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
        
        const day = utc.getDate().toString().padStart(2, '0');
        const hours = utc.getHours().toString().padStart(2, '0');
        const minutes = utc.getMinutes().toString().padStart(2, '0');
        const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
                       'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        const month = months[utc.getMonth()];
        const year = utc.getFullYear().toString().slice(-2);
        
        return `${day}${hours}${minutes}Z${month}${year}`;
    }

    startTimeUpdates() {
        // Update time every second
        this.updateInterval = setInterval(() => {
            this.render();
        }, 1000);
    }

    stopTimeUpdates() {
        if (this.updateInterval) {
            clearInterval(this.updateInterval);
            this.updateInterval = null;
        }
    }

    destroy() {
        this.stopTimeUpdates();
        if (this.container && this.container.parentNode) {
            this.container.parentNode.removeChild(this.container);
        }
        console.log('🕐 TimeReferenceComponent destroyed');
    }
}

export default TimeReferenceComponent;
