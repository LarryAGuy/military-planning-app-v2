/**
 * Preview Panel Component
 * Live preview of OPORD with AR 25-50 (Army Correspondence) formatting
 *
 * AR 25-50 COMPLIANCE:
 * - Proper military memorandum/order format
 * - Correct margins, spacing, and indentation
 * - Military date-time group (DTG) formatting
 * - Proper paragraph numbering (1., a., (1), (a))
 * - Classification markings (top/bottom banners, portion markings)
 * - Signature block formatting
 * - Distribution list formatting
 *
 * DESIGN PATTERN: Reusable for Draft MDMP and Draft JPP tools
 *
 * @module PreviewPanel
 */

import { ClassificationManager } from '../classification/ClassificationManager.js';

export class PreviewPanel {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.container = null;
        this.draft = null;
        this.updateDebounceTimer = null;
        this.updateDebounceDelay = 300; // 300ms debounce for performance
        this.initialized = false;
        this.visible = true;
        this.tocVisible = true; // Table of contents visibility (default: open)

        // Initialize classification manager for banner generation
        this.classificationManager = new ClassificationManager(eventBus);

        // Load TOC state from localStorage
        this.loadTOCState();
    }

    /**
     * Initialize preview panel
     */
    async initialize(container) {
        if (this.initialized) {
            console.log('⚠️ PreviewPanel already initialized');
            return;
        }

        this.container = typeof container === 'string' ? 
            document.querySelector(container) : container;

        if (!this.container) {
            throw new Error('Preview panel container not found');
        }

        // Setup event listeners
        this.setupEventListeners();

        // Render initial preview
        this.render();

        this.initialized = true;
        console.log('✅ PreviewPanel initialized');

        // Emit initialization event
        this.eventBus.emit('preview:initialized', {
            timestamp: new Date().toISOString()
        });
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Listen for draft updates
        this.eventBus.on('draft:loaded', (data) => {
            this.setDraft(data.draft);
        });

        this.eventBus.on('draft:created', (data) => {
            this.setDraft(data.draft);
        });

        // Listen for section input (real-time updates)
        this.eventBus.on('section:mission:input', () => {
            this.debouncedUpdate();
        });

        this.eventBus.on('section:situation:input', () => {
            this.debouncedUpdate();
        });

        this.eventBus.on('section:execution:input', () => {
            this.debouncedUpdate();
        });

        this.eventBus.on('section:sustainment:input', () => {
            this.debouncedUpdate();
        });

        this.eventBus.on('section:commandControl:input', () => {
            this.debouncedUpdate();
        });

        // Listen for toggle visibility
        this.eventBus.on('preview:toggle', () => {
            this.toggleVisibility();
        });

        console.log('📡 PreviewPanel event listeners registered');
    }

    /**
     * Debounced update for performance
     */
    debouncedUpdate() {
        if (this.updateDebounceTimer) {
            clearTimeout(this.updateDebounceTimer);
        }

        this.updateDebounceTimer = setTimeout(() => {
            this.update();
        }, this.updateDebounceDelay);
    }

    /**
     * Render preview panel
     */
    render() {
        if (!this.container) return;

        const html = `
            <div id="preview-panel" class="preview-panel" style="display: ${this.visible ? 'block' : 'none'}; height: 100%;">
                <!-- Preview Header -->
                <div class="preview-header" style="background: #1f2937; border-bottom: 1px solid #374151; padding: 16px; display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="color: #f8fafc; font-size: 16px; font-weight: 600; margin: 0;">
                        <i class="fas fa-eye" style="margin-right: 8px; color: #3b82f6;"></i>
                        Live Preview (AR 25-50)
                    </h3>
                    <div style="display: flex; gap: 8px;">
                        <button id="preview-zoom-out" class="preview-btn" style="background: #374151; color: #f8fafc; padding: 6px 12px; border: none; border-radius: 4px; font-size: 12px; cursor: pointer;">
                            <i class="fas fa-search-minus"></i>
                        </button>
                        <button id="preview-zoom-in" class="preview-btn" style="background: #374151; color: #f8fafc; padding: 6px 12px; border: none; border-radius: 4px; font-size: 12px; cursor: pointer;">
                            <i class="fas fa-search-plus"></i>
                        </button>
                        <button id="preview-print" class="preview-btn" style="background: #3b82f6; color: white; padding: 6px 12px; border: none; border-radius: 4px; font-size: 12px; cursor: pointer;">
                            <i class="fas fa-print"></i> Print
                        </button>
                    </div>
                </div>

                <!-- Preview Content (AR 25-50 Formatted) -->
                <div id="preview-content" class="preview-content" style="background: #ffffff; padding: 40px; overflow-y: auto; height: calc(100% - 60px); font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; color: #000000; position: relative;">
                    ${this.renderTableOfContents()}
                    ${this.renderPreviewContent()}
                </div>
            </div>
        `;

        this.container.innerHTML = html;

        // Attach event handlers
        this.attachEventHandlers();
    }

    /**
     * Render preview content in AR 25-50 format
     */
    renderPreviewContent() {
        if (!this.draft) {
            return this.renderEmptyState();
        }

        const classification = this.draft.classification || 'UNCLASSIFIED';
        const caveats = this.draft.classificationCaveats || [];
        const metadata = this.draft.metadata || {};
        const content = this.draft.content || {};

        // Set classification in manager for banner generation
        this.classificationManager.setClassification(classification, caveats);

        return `
            <!-- Classification Banner (Top) -->
            ${this.classificationManager.generateBannerHTML('top')}

            <!-- Header Block -->
            <div style="margin-bottom: 30px;">
                <div style="text-align: right; margin-bottom: 10px;">
                    ${metadata.unit || '[UNIT DESIGNATION]'}<br>
                    ${metadata.location || '[LOCATION]'}<br>
                    ${metadata.dtg || '[DTG]'}
                </div>
                <div style="margin-bottom: 10px;">
                    <strong>OPORD ${metadata.opordNumber || '[NUMBER]'}</strong>
                </div>
                <div style="margin-bottom: 10px;">
                    References: ${metadata.references?.join(', ') || 'See Annex A'}
                </div>
                <div style="margin-bottom: 10px;">
                    Time Zone: ${metadata.timeZone || 'ZULU'}
                </div>
                <div style="margin-bottom: 10px;">
                    Task Organization: See Annex A (Task Organization)
                </div>
            </div>

            <!-- Title -->
            <div style="text-align: center; font-weight: bold; font-size: 14pt; margin-bottom: 30px; text-decoration: underline;">
                ${metadata.title || '[OPERATION NAME]'}
            </div>

            <!-- 1. SITUATION -->
            <div id="preview-section-situation" style="margin-bottom: 20px; scroll-margin-top: 20px;">
                <div style="font-weight: bold; margin-bottom: 10px;">1. SITUATION</div>
                <div style="margin-left: 40px;">
                    ${this.renderSituationSection(content.situation)}
                </div>
            </div>

            <!-- 2. MISSION -->
            <div id="preview-section-mission" style="margin-bottom: 20px; scroll-margin-top: 20px;">
                <div style="font-weight: bold; margin-bottom: 10px;">2. MISSION</div>
                <div style="margin-left: 40px;">
                    ${this.renderMissionSection(content.mission)}
                </div>
            </div>

            <!-- 3. EXECUTION -->
            <div id="preview-section-execution" style="margin-bottom: 20px; scroll-margin-top: 20px;">
                <div style="font-weight: bold; margin-bottom: 10px;">3. EXECUTION</div>
                <div style="margin-left: 40px;">
                    ${this.renderExecutionSection(content.execution)}
                </div>
            </div>

            <!-- 4. SUSTAINMENT -->
            <div id="preview-section-sustainment" style="margin-bottom: 20px; scroll-margin-top: 20px;">
                <div style="font-weight: bold; margin-bottom: 10px;">4. SUSTAINMENT</div>
                <div style="margin-left: 40px;">
                    ${this.renderSustainmentSection(content.sustainment)}
                </div>
            </div>

            <!-- 5. COMMAND AND SIGNAL -->
            <div id="preview-section-commandControl" style="margin-bottom: 20px; scroll-margin-top: 20px;">
                <div style="font-weight: bold; margin-bottom: 10px;">5. COMMAND AND SIGNAL</div>
                <div style="margin-left: 40px;">
                    ${this.renderCommandControlSection(content.commandControl)}
                </div>
            </div>

            <!-- Signature Block -->
            <div style="margin-top: 40px; margin-bottom: 30px;">
                <div style="margin-left: 300px;">
                    <div style="margin-bottom: 60px;"></div>
                    <div style="border-top: 1px solid #000000; width: 200px; margin-bottom: 5px;"></div>
                    <div>${metadata.commanderRank || '[RANK]'} ${metadata.commander || '[COMMANDER NAME]'}</div>
                    <div>${metadata.commanderTitle || 'Commanding'}</div>
                </div>
            </div>

            <!-- Authenticator -->
            <div style="margin-bottom: 30px;">
                <div>OFFICIAL:</div>
                <div style="margin-top: 40px;">
                    <div style="border-top: 1px solid #000000; width: 200px; margin-bottom: 5px;"></div>
                    <div>${metadata.authenticator || '[AUTHENTICATOR]'}</div>
                    <div>${metadata.authenticatorTitle || 'Chief of Staff'}</div>
                </div>
            </div>

            <!-- Distribution List -->
            <div style="margin-bottom: 30px;">
                <div style="font-weight: bold; margin-bottom: 10px;">DISTRIBUTION:</div>
                <div style="margin-left: 20px;">
                    ${this.renderDistributionList(metadata.distribution)}
                </div>
            </div>

            <!-- Classification Banner (Bottom) -->
            ${this.classificationManager.generateBannerHTML('bottom')}
        `;
    }

    /**
     * Render empty state
     */
    renderEmptyState() {
        return `
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; color: #9ca3af;">
                <i class="fas fa-file-alt" style="font-size: 64px; margin-bottom: 20px; opacity: 0.3;"></i>
                <p style="font-size: 18px; font-weight: 600; margin-bottom: 10px;">No Draft Loaded</p>
                <p style="font-size: 14px;">Create or load a draft to see the live preview</p>
            </div>
        `;
    }

    /**
     * Render situation section
     */
    renderSituationSection(situation) {
        if (!situation || Object.keys(situation).length === 0) {
            return '<p style="color: #666; font-style: italic;">[Situation information not provided]</p>';
        }

        let html = '';

        // Enemy Forces
        if (situation.enemyForces) {
            html += `<p style="margin-bottom: 15px;"><strong>a. Enemy Forces.</strong> ${situation.enemyForces}</p>`;
        }

        // Friendly Forces
        if (situation.friendlyForces) {
            html += `<p style="margin-bottom: 15px;"><strong>b. Friendly Forces.</strong> ${situation.friendlyForces}</p>`;
        }

        // Attachments and Detachments
        if (situation.attachmentsDetachments) {
            html += `<p style="margin-bottom: 15px;"><strong>c. Attachments and Detachments.</strong> ${situation.attachmentsDetachments}</p>`;
        }

        // Civil Considerations
        if (situation.civilConsiderations) {
            html += `<p style="margin-bottom: 15px;"><strong>d. Civil Considerations.</strong> ${situation.civilConsiderations}</p>`;
        }

        // Terrain (OAKOC)
        if (situation.terrain) {
            html += '<div style="margin-bottom: 20px;">';
            html += '<p style="margin-bottom: 10px;"><strong>e. Terrain and Weather.</strong></p>';
            html += '<div style="margin-left: 20px;">';
            html += `<p style="margin-bottom: 10px;"><strong>(1) Terrain.</strong> ${situation.terrain}</p>`;

            // OAKOC Details (if provided)
            if (situation.oakocObservation || situation.oakocAvenues || situation.oakocKeyTerrain ||
                situation.oakocObstacles || situation.oakocCover) {
                html += '<div style="margin-left: 20px;">';

                if (situation.oakocObservation) {
                    html += `<p style="margin-bottom: 8px;"><strong>(a) Observation and Fields of Fire:</strong> ${situation.oakocObservation}</p>`;
                }

                if (situation.oakocAvenues) {
                    html += `<p style="margin-bottom: 8px;"><strong>(b) Avenues of Approach:</strong> ${situation.oakocAvenues}</p>`;
                }

                if (situation.oakocKeyTerrain) {
                    html += `<p style="margin-bottom: 8px;"><strong>(c) Key Terrain:</strong> ${situation.oakocKeyTerrain}</p>`;
                }

                if (situation.oakocObstacles) {
                    html += `<p style="margin-bottom: 8px;"><strong>(d) Obstacles:</strong> ${situation.oakocObstacles}</p>`;
                }

                if (situation.oakocCover) {
                    html += `<p style="margin-bottom: 8px;"><strong>(e) Cover and Concealment:</strong> ${situation.oakocCover}</p>`;
                }

                html += '</div>';
            }

            // Weather
            if (situation.weather) {
                html += `<p style="margin-bottom: 10px;"><strong>(2) Weather.</strong> ${situation.weather}</p>`;
            }

            html += '</div>';
            html += '</div>';
        } else if (situation.weather) {
            // Weather only (if terrain not provided)
            html += `<p style="margin-bottom: 15px;"><strong>e. Weather.</strong> ${situation.weather}</p>`;
        }

        return html || '<p style="color: #666; font-style: italic;">[Situation information not provided]</p>';
    }

    /**
     * Render mission section
     */
    renderMissionSection(mission) {
        if (!mission) {
            return '<p style="color: #666; font-style: italic;">[Mission statement not provided]</p>';
        }

        let html = '';

        // Mission statement (primary)
        if (mission.fullStatement) {
            html += `<p style="margin-bottom: 15px;"><strong>${mission.fullStatement}</strong></p>`;
        } else if (mission.who || mission.what || mission.when || mission.where || mission.why) {
            // Generate from components if fullStatement not available
            const who = mission.who || '[UNIT]';
            const what = mission.what || '[TASK]';
            const when = mission.when || '[TIME]';
            const where = mission.where || '[LOCATION]';
            const why = mission.why || '[PURPOSE]';
            html += `<p style="margin-bottom: 15px;"><strong>${who} ${what} NLT ${when} ${where} in order to ${why}.</strong></p>`;
        } else {
            return '<p style="color: #666; font-style: italic;">[Mission statement not provided]</p>';
        }

        // Additional mission details (if provided)
        if (mission.constraints || mission.restraints || mission.endState) {
            html += '<div style="margin-left: 20px; margin-top: 15px;">';

            if (mission.constraints) {
                html += `<p style="margin-bottom: 10px;"><strong>a. Constraints:</strong> ${mission.constraints}</p>`;
            }

            if (mission.restraints) {
                html += `<p style="margin-bottom: 10px;"><strong>b. Restraints:</strong> ${mission.restraints}</p>`;
            }

            if (mission.endState) {
                html += `<p style="margin-bottom: 10px;"><strong>c. Desired End State:</strong> ${mission.endState}</p>`;
            }

            html += '</div>';
        }

        return html;
    }

    /**
     * Render execution section
     */
    renderExecutionSection(execution) {
        if (!execution || Object.keys(execution).length === 0) {
            return '<p style="color: #666; font-style: italic;">[Execution information not provided]</p>';
        }

        let html = '';

        // Commander's Intent
        if (execution.commandersIntentPurpose || execution.commandersIntentMethod || execution.commandersIntentEndState) {
            html += '<div style="margin-bottom: 20px;">';
            html += '<p style="margin-bottom: 10px;"><strong>a. Commander\'s Intent.</strong></p>';
            html += '<div style="margin-left: 20px;">';

            if (execution.commandersIntentPurpose) {
                html += `<p style="margin-bottom: 10px;"><strong>(1) Purpose:</strong> ${execution.commandersIntentPurpose}</p>`;
            }

            if (execution.commandersIntentMethod) {
                html += `<p style="margin-bottom: 10px;"><strong>(2) Method:</strong> ${execution.commandersIntentMethod}</p>`;
            }

            if (execution.commandersIntentEndState) {
                html += `<p style="margin-bottom: 10px;"><strong>(3) End State:</strong> ${execution.commandersIntentEndState}</p>`;
            }

            html += '</div>';
            html += '</div>';
        }

        // Concept of Operations
        if (execution.conceptOfOperations) {
            html += `<p style="margin-bottom: 15px;"><strong>b. Concept of Operations.</strong> ${execution.conceptOfOperations}</p>`;
        }

        // Scheme of Maneuver
        if (execution.schemeOfManeuver) {
            html += `<p style="margin-bottom: 15px;"><strong>c. Scheme of Maneuver.</strong> ${execution.schemeOfManeuver}</p>`;
        }

        // Tasks to Subordinate Units
        if (execution.tasksToSubordinateUnits) {
            html += `<p style="margin-bottom: 15px;"><strong>d. Tasks to Subordinate Units.</strong> ${execution.tasksToSubordinateUnits}</p>`;
        }

        // Coordinating Instructions
        if (execution.coordinatingInstructions) {
            html += `<p style="margin-bottom: 15px;"><strong>e. Coordinating Instructions.</strong> ${execution.coordinatingInstructions}</p>`;
        }

        // Additional details (if provided)
        if (execution.timeline || execution.fireSupportCoordination || execution.movementTechniques) {
            html += '<div style="margin-left: 20px; margin-top: 15px;">';

            if (execution.timeline) {
                html += `<p style="margin-bottom: 10px;"><strong>(1) Timeline:</strong> ${execution.timeline}</p>`;
            }

            if (execution.fireSupportCoordination) {
                html += `<p style="margin-bottom: 10px;"><strong>(2) Fire Support Coordination:</strong> ${execution.fireSupportCoordination}</p>`;
            }

            if (execution.movementTechniques) {
                html += `<p style="margin-bottom: 10px;"><strong>(3) Movement Techniques:</strong> ${execution.movementTechniques}</p>`;
            }

            html += '</div>';
        }

        return html || '<p style="color: #666; font-style: italic;">[Execution information not provided]</p>';
    }

    /**
     * Render sustainment section
     */
    renderSustainmentSection(sustainment) {
        if (!sustainment || Object.keys(sustainment).length === 0) {
            return '<p style="color: #666; font-style: italic;">[Sustainment information not provided]</p>';
        }

        let html = '';

        // Logistics
        if (sustainment.logistics) {
            html += `<p style="margin-bottom: 15px;"><strong>a. Logistics.</strong> ${sustainment.logistics}</p>`;
        }

        // Personnel
        if (sustainment.personnel) {
            html += `<p style="margin-bottom: 15px;"><strong>b. Personnel.</strong> ${sustainment.personnel}</p>`;
        }

        // Health Service Support
        if (sustainment.healthServiceSupport) {
            html += `<p style="margin-bottom: 15px;"><strong>c. Health Service Support.</strong> ${sustainment.healthServiceSupport}</p>`;
        }

        // Additional details (maintenance, supply points, casualty collection, resupply)
        if (sustainment.maintenance || sustainment.supplyPoints || sustainment.casualtyCollection || sustainment.resupplyProcedures) {
            html += '<div style="margin-left: 20px; margin-top: 15px;">';

            if (sustainment.maintenance) {
                html += `<p style="margin-bottom: 10px;"><strong>(1) Maintenance:</strong> ${sustainment.maintenance}</p>`;
            }

            if (sustainment.supplyPoints) {
                html += `<p style="margin-bottom: 10px;"><strong>(2) Supply Points:</strong> ${sustainment.supplyPoints}</p>`;
            }

            if (sustainment.casualtyCollection) {
                html += `<p style="margin-bottom: 10px;"><strong>(3) Casualty Collection:</strong> ${sustainment.casualtyCollection}</p>`;
            }

            if (sustainment.resupplyProcedures) {
                html += `<p style="margin-bottom: 10px;"><strong>(4) Resupply Procedures:</strong> ${sustainment.resupplyProcedures}</p>`;
            }

            html += '</div>';
        }

        return html || '<p style="color: #666; font-style: italic;">[Sustainment information not provided]</p>';
    }

    /**
     * Render command and control section
     */
    renderCommandControlSection(commandControl) {
        if (!commandControl || Object.keys(commandControl).length === 0) {
            return '<p style="color: #666; font-style: italic;">[Command and Signal information not provided]</p>';
        }

        let html = '';

        // Command
        if (commandControl.command) {
            html += `<p style="margin-bottom: 15px;"><strong>a. Command.</strong> ${commandControl.command}</p>`;
        }

        // Signal
        if (commandControl.signal) {
            html += `<p style="margin-bottom: 15px;"><strong>b. Signal.</strong> ${commandControl.signal}</p>`;
        }

        // Reports
        if (commandControl.reports) {
            html += `<p style="margin-bottom: 15px;"><strong>c. Reports.</strong> ${commandControl.reports}</p>`;
        }

        // Additional details (SOI, challenge/password, running password, recognition signals)
        if (commandControl.soiIndex || commandControl.challengePassword || commandControl.runningPassword || commandControl.recognitionSignals) {
            html += '<div style="margin-left: 20px; margin-top: 15px;">';

            if (commandControl.soiIndex) {
                html += `<p style="margin-bottom: 10px;"><strong>(1) SOI Index:</strong> ${commandControl.soiIndex}</p>`;
            }

            if (commandControl.challengePassword) {
                html += `<p style="margin-bottom: 10px;"><strong>(2) Challenge and Password:</strong> ${commandControl.challengePassword}</p>`;
            }

            if (commandControl.runningPassword) {
                html += `<p style="margin-bottom: 10px;"><strong>(3) Running Password:</strong> ${commandControl.runningPassword}</p>`;
            }

            if (commandControl.recognitionSignals) {
                html += `<p style="margin-bottom: 10px;"><strong>(4) Recognition Signals:</strong> ${commandControl.recognitionSignals}</p>`;
            }

            html += '</div>';
        }

        return html || '<p style="color: #666; font-style: italic;">[Command and Signal information not provided]</p>';
    }

    /**
     * Render distribution list
     */
    renderDistributionList(distribution) {
        if (!distribution || distribution.length === 0) {
            return '<p style="color: #666; font-style: italic;">[Distribution list not provided]</p>';
        }
        return distribution.map(item => `<div>${item}</div>`).join('');
    }

    /**
     * Get classification color per AR 25-50 (uses ClassificationManager)
     */
    getClassificationColor(classification) {
        return this.classificationManager.getClassificationColor(classification);
    }

    /**
     * Attach event handlers
     */
    attachEventHandlers() {
        // Zoom controls
        document.getElementById('preview-zoom-in')?.addEventListener('click', () => this.zoomIn());
        document.getElementById('preview-zoom-out')?.addEventListener('click', () => this.zoomOut());

        // Print button
        document.getElementById('preview-print')?.addEventListener('click', () => this.print());

        // TOC toggle button
        document.getElementById('toc-toggle-btn')?.addEventListener('click', () => this.toggleTOC());

        // TOC section buttons
        document.querySelectorAll('.toc-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const sectionId = e.currentTarget.getAttribute('data-section');
                if (sectionId) {
                    this.jumpToSection(sectionId);
                }
            });
        });
    }

    /**
     * Set draft for preview
     */
    setDraft(draft) {
        this.draft = draft;
        this.update();
    }

    /**
     * Update preview
     */
    update() {
        const contentEl = document.getElementById('preview-content');
        if (contentEl) {
            contentEl.innerHTML = this.renderPreviewContent();
        }
    }

    /**
     * Toggle visibility
     */
    toggleVisibility() {
        this.visible = !this.visible;
        const panel = document.getElementById('preview-panel');
        if (panel) {
            panel.style.display = this.visible ? 'block' : 'none';
        }
        
        this.eventBus.emit('preview:visibility-changed', { visible: this.visible });
    }

    /**
     * Zoom in
     */
    zoomIn() {
        const contentEl = document.getElementById('preview-content');
        if (contentEl) {
            const currentSize = parseFloat(getComputedStyle(contentEl).fontSize);
            contentEl.style.fontSize = `${currentSize + 1}pt`;
        }
    }

    /**
     * Zoom out
     */
    zoomOut() {
        const contentEl = document.getElementById('preview-content');
        if (contentEl) {
            const currentSize = parseFloat(getComputedStyle(contentEl).fontSize);
            contentEl.style.fontSize = `${Math.max(8, currentSize - 1)}pt`;
        }
    }

    /**
     * Print preview
     */
    print() {
        const contentEl = document.getElementById('preview-content');
        if (contentEl) {
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>OPORD Print Preview</title>
                    <style>
                        @page { size: letter; margin: 1in; }
                        body { font-family: 'Times New Roman', serif; font-size: 12pt; line-height: 1.5; }
                    </style>
                </head>
                <body>${contentEl.innerHTML}</body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();
        }
    }

    /**
     * Render table of contents
     * @returns {string} HTML string for TOC
     */
    renderTableOfContents() {
        if (!this.draft) return '';

        const sections = [
            { id: 'situation', title: '1. Situation' },
            { id: 'mission', title: '2. Mission' },
            { id: 'execution', title: '3. Execution' },
            { id: 'sustainment', title: '4. Sustainment' },
            { id: 'commandControl', title: '5. Command and Signal' }
        ];

        const displayStyle = this.tocVisible ? 'block' : 'none';
        const chevronIcon = this.tocVisible ? 'fa-chevron-up' : 'fa-chevron-down';

        return `
            <div id="preview-toc" class="preview-toc" style="position: sticky; top: 0; background: #f8fafc; border: 2px solid #3b82f6; border-radius: 8px; padding: 16px; margin-bottom: 20px; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: ${this.tocVisible ? '12px' : '0'};">
                    <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #1f2937;">
                        <i class="fas fa-list" style="margin-right: 8px; color: #3b82f6;"></i>
                        Table of Contents
                    </h4>
                    <button id="toc-toggle-btn"
                        class="toc-toggle"
                        style="background: transparent; border: none; color: #3b82f6; cursor: pointer; padding: 4px 8px; font-size: 16px;"
                        aria-label="Toggle table of contents"
                        aria-expanded="${this.tocVisible}">
                        <i class="fas ${chevronIcon}"></i>
                    </button>
                </div>
                <div id="toc-content" style="display: ${displayStyle};">
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        ${sections.map(section => `
                            <button class="toc-btn"
                                data-section="${section.id}"
                                style="background: #3b82f6; color: white; padding: 6px 12px; border: none; border-radius: 4px; font-size: 12px; cursor: pointer; transition: background 0.2s;"
                                onmouseover="this.style.background='#2563eb'"
                                onmouseout="this.style.background='#3b82f6'"
                                aria-label="Jump to ${section.title}">
                                ${section.title}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Jump to section in preview
     * @param {string} sectionId - Section ID to jump to
     */
    jumpToSection(sectionId) {
        const sectionElement = document.getElementById(`preview-section-${sectionId}`);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            this.highlightSection(sectionId);

            // Emit event
            this.eventBus.emit('preview:section-focused', { sectionId });
        }
    }

    /**
     * Highlight section temporarily
     * @param {string} sectionId - Section ID to highlight
     */
    highlightSection(sectionId) {
        // Remove previous highlights
        document.querySelectorAll('.preview-section-highlighted').forEach(el => {
            el.classList.remove('preview-section-highlighted');
            el.style.backgroundColor = '';
        });

        // Add highlight to current section
        const sectionElement = document.getElementById(`preview-section-${sectionId}`);
        if (sectionElement) {
            sectionElement.classList.add('preview-section-highlighted');
            sectionElement.style.backgroundColor = '#fef3c7'; // Light yellow highlight

            // Remove highlight after 2 seconds
            setTimeout(() => {
                sectionElement.classList.remove('preview-section-highlighted');
                sectionElement.style.backgroundColor = '';
            }, 2000);
        }
    }

    /**
     * Toggle table of contents visibility
     */
    toggleTOC() {
        this.tocVisible = !this.tocVisible;
        this.saveTOCState();

        const tocContent = document.getElementById('toc-content');
        const toggleBtn = document.getElementById('toc-toggle-btn');

        if (tocContent && toggleBtn) {
            tocContent.style.display = this.tocVisible ? 'block' : 'none';
            toggleBtn.setAttribute('aria-expanded', this.tocVisible.toString());
            toggleBtn.innerHTML = `<i class="fas fa-chevron-${this.tocVisible ? 'up' : 'down'}"></i>`;
        }

        // Emit event
        this.eventBus.emit('preview:toc-toggled', { visible: this.tocVisible });
    }

    /**
     * Load TOC state from localStorage
     */
    loadTOCState() {
        try {
            const saved = localStorage.getItem('preview-toc-visible');
            if (saved !== null) {
                this.tocVisible = saved === 'true';
            }
        } catch (error) {
            console.warn('Failed to load TOC state:', error);
        }
    }

    /**
     * Save TOC state to localStorage
     */
    saveTOCState() {
        try {
            localStorage.setItem('preview-toc-visible', this.tocVisible.toString());
        } catch (error) {
            console.warn('Failed to save TOC state:', error);
        }
    }

    /**
     * Destroy component
     */
    destroy() {
        // Remove event listeners
        this.eventBus.off('draft:loaded');
        this.eventBus.off('draft:created');
        this.eventBus.off('section:mission:input');
        this.eventBus.off('section:situation:input');
        this.eventBus.off('section:execution:input');
        this.eventBus.off('section:sustainment:input');
        this.eventBus.off('section:commandControl:input');
        this.eventBus.off('preview:toggle');

        // Clear container
        if (this.container) {
            this.container.innerHTML = '';
        }

        this.initialized = false;
        console.log('🗑️ PreviewPanel destroyed');
    }
}

export default PreviewPanel;

