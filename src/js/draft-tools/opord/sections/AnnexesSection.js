/**
 * Annexes Section Component
 * OPORD Annexes: Supporting annexes and appendices per FM 5-0 November 2024
 * Implements activation/deactivation mechanism for 25 annexes (A-Z excluding O)
 *
 * DESIGN PATTERN: Extends BaseSectionComponent for reusability
 * ECHELON-AGNOSTIC: Supports all 11 echelons (Platoon through Theater)
 * FM 5-0 COMPLIANT: Implements all 25 annexes per FM 5-0 November 2024
 *
 * @module AnnexesSection
 */

import { BaseSectionComponent } from './BaseSectionComponent.js';

export class AnnexesSection extends BaseSectionComponent {
    constructor(eventBus, portionMarkingManager = null) {
        super('annexes', 'ANNEXES', eventBus, portionMarkingManager);

        // Define all 25 annexes per FM 5-0 November 2024
        this.annexDefinitions = this.initializeAnnexDefinitions();

        // Track which annexes are active
        this.activeAnnexes = new Set();

        // Track currently editing annex (for right column display)
        this.currentlyEditingAnnex = null;

        // Define validation rules
        this.validationRules = {
            // Annexes A, B, C, D, F are typically required
            requiredAnnexes: ['A', 'B', 'C', 'D', 'F']
        };
    }

    /**
     * Initialize annex definitions per FM 5-0 November 2024
     */
    initializeAnnexDefinitions() {
        return {
            'A': { letter: 'A', title: 'Task Organization', required: true, color: '#3b82f6' },
            'B': { letter: 'B', title: 'Intelligence', required: true, color: '#06b6d4' },
            'C': { letter: 'C', title: 'Operations', required: true, color: '#10b981' },
            'D': { letter: 'D', title: 'Fires', required: true, color: '#f59e0b' },
            'E': { letter: 'E', title: 'Protection', required: false, color: '#ef4444' },
            'F': { letter: 'F', title: 'Sustainment', required: true, color: '#8b5cf6' },
            'G': { letter: 'G', title: 'Engineer', required: false, color: '#f97316' },
            'H': { letter: 'H', title: 'Air Defense', required: false, color: '#ec4899' },
            'I': { letter: 'I', title: 'Information Operations', required: false, color: '#6366f1' },
            'J': { letter: 'J', title: 'Public Affairs', required: false, color: '#14b8a6' },
            'K': { letter: 'K', title: 'Civil Affairs Operations', required: false, color: '#84cc16' },
            'L': { letter: 'L', title: 'Reconnaissance and Surveillance', required: false, color: '#22d3ee' },
            'M': { letter: 'M', title: 'Assessment', required: false, color: '#a855f7' },
            'N': { letter: 'N', title: 'Space Operations', required: false, color: '#0ea5e9' },
            'P': { letter: 'P', title: 'Host Nation Support', required: false, color: '#f43f5e' },
            'Q': { letter: 'Q', title: 'Knowledge Management', required: false, color: '#64748b' },
            'R': { letter: 'R', title: 'Reports', required: false, color: '#78716c' },
            'S': { letter: 'S', title: 'Special Technical Operations', required: false, color: '#dc2626' },
            'T': { letter: 'T', title: 'Cyber Electromagnetic Activities', required: false, color: '#7c3aed' },
            'U': { letter: 'U', title: 'Inspector General', required: false, color: '#059669' },
            'V': { letter: 'V', title: 'Interagency Coordination', required: false, color: '#0284c7' },
            'W': { letter: 'W', title: 'Operational Contract Support', required: false, color: '#ca8a04' },
            'X': { letter: 'X', title: 'Execution Checklist', required: false, color: '#16a34a' },
            'Y': { letter: 'Y', title: 'Additional Annexes', required: false, color: '#9333ea' },
            'Z': { letter: 'Z', title: 'Distribution', required: false, color: '#475569' }
        };
    }

    /**
     * Render form fields
     */
    renderFields() {
        return `
            <div class="annexes-section-container">
                <!-- Instructions -->
                <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid #3b82f6; border-radius: 6px; padding: 16px; margin-bottom: 20px;">
                    <div style="display: flex; align-items: start; gap: 12px;">
                        <i class="fas fa-info-circle" style="color: #3b82f6; font-size: 20px; margin-top: 2px;"></i>
                        <div>
                            <h4 style="color: #60a5fa; font-size: 14px; font-weight: 600; margin: 0 0 8px 0;">Annexes Selection & Editor</h4>
                            <p style="color: #93c5fd; font-size: 13px; line-height: 1.5; margin: 0;">
                                Select annexes from the left panel to activate them. Required annexes (A, B, C, D, F) are marked with an asterisk (*).
                                Click on an active annex to edit its content in the right panel.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Two-Column Layout -->
                <div style="display: grid; grid-template-columns: 350px 1fr; gap: 20px; min-height: 500px;">
                    <!-- Left Column: Annex Selector -->
                    <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; overflow-y: auto; max-height: 700px;">
                        <h4 style="color: #f8fafc; font-size: 14px; font-weight: 600; margin: 0 0 12px 0; padding-bottom: 12px; border-bottom: 1px solid #374151;">
                            <i class="fas fa-folder-tree" style="margin-right: 8px; color: #f59e0b;"></i>
                            Available Annexes (${this.activeAnnexes.size}/25)
                        </h4>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            ${this.renderAnnexCards()}
                        </div>
                    </div>

                    <!-- Right Column: Annex Editor -->
                    <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 20px; overflow-y: auto; max-height: 700px;">
                        <div id="annex-editor-content">
                            ${this.renderAnnexEditor()}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render annex cards (compact list for left column)
     */
    renderAnnexCards() {
        return Object.values(this.annexDefinitions).map(annex => {
            const isActive = this.activeAnnexes.has(annex.letter);
            const isEditing = this.currentlyEditingAnnex === annex.letter;
            const requiredBadge = annex.required ? '<span style="color: #ef4444; font-weight: 700; margin-left: 4px;">*</span>' : '';

            return `
                <div class="annex-card" data-annex="${annex.letter}"
                    style="background: ${isEditing ? 'rgba(59, 130, 246, 0.15)' : (isActive ? 'rgba(59, 130, 246, 0.05)' : 'transparent')};
                           border: 1px solid ${isEditing ? annex.color : (isActive ? annex.color : '#374151')};
                           border-left: 3px solid ${annex.color};
                           border-radius: 6px;
                           padding: 10px 12px;
                           cursor: pointer;
                           transition: all 0.2s ease;
                           position: relative;">
                    <div style="display: flex; justify-content: space-between; align-items: start; gap: 10px;">
                        <div style="display: flex; align-items: start; gap: 10px; flex: 1; min-width: 0;">
                            <div style="background: ${annex.color}; color: white; width: 28px; height: 28px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 13px; flex-shrink: 0;">
                                ${annex.letter}
                            </div>
                            <div style="flex: 1; min-width: 0;">
                                <div style="color: #f8fafc; font-size: 12px; font-weight: 600; margin-bottom: 2px;">
                                    Annex ${annex.letter}${requiredBadge}
                                </div>
                                <div style="color: #9ca3af; font-size: 11px; line-height: 1.3; word-wrap: break-word;">
                                    ${annex.title}
                                </div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 4px; flex-shrink: 0;">
                            ${isActive ?
                                `<i class="fas fa-check-circle" style="color: ${annex.color}; font-size: 16px;"></i>` :
                                `<i class="far fa-circle" style="color: #6b7280; font-size: 16px;"></i>`
                            }
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    /**
     * Render annex editor (right column)
     */
    renderAnnexEditor() {
        // No annexes activated
        if (this.activeAnnexes.size === 0) {
            return `
                <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; min-height: 400px; text-align: center;">
                    <i class="fas fa-folder-open" style="color: #6b7280; font-size: 64px; margin-bottom: 20px;"></i>
                    <h4 style="color: #9ca3af; font-size: 18px; font-weight: 600; margin: 0 0 12px 0;">No Annexes Activated</h4>
                    <p style="color: #6b7280; font-size: 14px; margin: 0; max-width: 400px; line-height: 1.6;">
                        Click on an annex card in the left panel to activate it. Once activated, click on it again to edit its content here.
                    </p>
                </div>
            `;
        }

        // Annexes activated but none selected for editing
        if (!this.currentlyEditingAnnex) {
            const activeAnnexList = Array.from(this.activeAnnexes).map(letter => {
                const annex = this.annexDefinitions[letter];
                const content = this.data[letter] || {};
                const hasContent = content.content && content.content.trim().length > 0;

                return `
                    <div class="quick-select-annex" data-annex="${letter}"
                        style="background: rgba(59, 130, 246, 0.05); border: 1px solid ${annex.color}; border-left: 3px solid ${annex.color}; border-radius: 6px; padding: 12px; cursor: pointer; transition: all 0.2s ease;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="background: ${annex.color}; color: white; width: 32px; height: 32px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px;">
                                ${letter}
                            </div>
                            <div style="flex: 1;">
                                <div style="color: #f8fafc; font-size: 14px; font-weight: 600; margin-bottom: 4px;">
                                    Annex ${letter} - ${annex.title}
                                </div>
                                <div style="color: #9ca3af; font-size: 12px;">
                                    ${hasContent ? `${content.content.substring(0, 60)}...` : 'No content yet'}
                                </div>
                            </div>
                            <i class="fas fa-chevron-right" style="color: #6b7280; font-size: 14px;"></i>
                        </div>
                    </div>
                `;
            }).join('');

            return `
                <div>
                    <div style="margin-bottom: 20px;">
                        <h4 style="color: #f8fafc; font-size: 16px; font-weight: 600; margin: 0 0 8px 0;">
                            <i class="fas fa-edit" style="margin-right: 8px; color: #f59e0b;"></i>
                            Select an Annex to Edit
                        </h4>
                        <p style="color: #9ca3af; font-size: 13px; margin: 0;">
                            You have ${this.activeAnnexes.size} active annex${this.activeAnnexes.size > 1 ? 'es' : ''}. Click on one below to edit its content.
                        </p>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        ${activeAnnexList}
                    </div>
                </div>
            `;
        }

        // Render editor for currently selected annex
        const letter = this.currentlyEditingAnnex;
        const annex = this.annexDefinitions[letter];
        const content = this.data[letter] || { title: '', content: '', status: 'NOT_STARTED' };

        return `
            <div class="annex-editor-form">
                <!-- Header -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid ${annex.color};">
                    <h4 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0; display: flex; align-items: center; gap: 10px;">
                        <div style="background: ${annex.color}; color: white; width: 36px; height: 36px; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 16px;">
                            ${letter}
                        </div>
                        <div>
                            <div>Annex ${letter} - ${annex.title}</div>
                            <div style="color: #9ca3af; font-size: 12px; font-weight: 400; margin-top: 4px;">
                                ${annex.required ? '<i class="fas fa-exclamation-circle" style="color: #ef4444; margin-right: 4px;"></i>Required Annex' : 'Optional Annex'}
                            </div>
                        </div>
                    </h4>
                    <button class="remove-annex-btn" data-annex="${letter}"
                        style="background: #ef4444; color: white; border: none; border-radius: 6px; padding: 8px 16px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all 0.2s ease;">
                        <i class="fas fa-trash-alt" style="margin-right: 6px;"></i>
                        Remove Annex
                    </button>
                </div>

                <!-- Annex Title -->
                <div style="margin-bottom: 20px;">
                    <label style="color: #9ca3af; font-size: 13px; font-weight: 600; display: block; margin-bottom: 8px;">
                        <i class="fas fa-heading" style="margin-right: 6px;"></i>
                        Annex Title (Optional)
                    </label>
                    <input type="text"
                        id="annex-${letter}-title"
                        name="annex-${letter}-title"
                        value="${content.title || ''}"
                        placeholder="e.g., Task Organization for Operation ALLIED RESOLVE"
                        style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 12px 14px; color: #f8fafc; font-size: 14px; transition: border-color 0.2s ease;">
                </div>

                <!-- Annex Content -->
                <div style="margin-bottom: 20px;">
                    <label style="color: #9ca3af; font-size: 13px; font-weight: 600; display: block; margin-bottom: 8px;">
                        <i class="fas fa-file-alt" style="margin-right: 6px;"></i>
                        Annex Content
                    </label>
                    <textarea
                        id="annex-${letter}-content"
                        name="annex-${letter}-content"
                        rows="12"
                        placeholder="Enter annex content here...&#10;&#10;Use FM 5-0 formatting standards for military annexes."
                        style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 14px; color: #f8fafc; font-size: 14px; font-family: 'Courier New', monospace; line-height: 1.6; resize: vertical; transition: border-color 0.2s ease;">${content.content || ''}</textarea>
                    <div style="color: #6b7280; font-size: 12px; margin-top: 6px;">
                        <i class="fas fa-info-circle" style="margin-right: 4px;"></i>
                        Character count: <span id="annex-${letter}-char-count">${(content.content || '').length}</span>
                    </div>
                </div>

                <!-- Annex Status -->
                <div style="margin-bottom: 20px;">
                    <label style="color: #9ca3af; font-size: 13px; font-weight: 600; display: block; margin-bottom: 8px;">
                        <i class="fas fa-tasks" style="margin-right: 6px;"></i>
                        Status
                    </label>
                    <select
                        id="annex-${letter}-status"
                        name="annex-${letter}-status"
                        style="width: 100%; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 12px 14px; color: #f8fafc; font-size: 14px; cursor: pointer; transition: border-color 0.2s ease;">
                        <option value="NOT_STARTED" ${content.status === 'NOT_STARTED' ? 'selected' : ''}>Not Started</option>
                        <option value="IN_PROGRESS" ${content.status === 'IN_PROGRESS' ? 'selected' : ''}>In Progress</option>
                        <option value="COMPLETED" ${content.status === 'COMPLETED' ? 'selected' : ''}>Completed</option>
                        <option value="NOT_APPLICABLE" ${content.status === 'NOT_APPLICABLE' ? 'selected' : ''}>Not Applicable</option>
                    </select>
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 12px; padding-top: 16px; border-top: 1px solid #374151;">
                    <button class="clear-annex-btn" data-annex="${letter}"
                        style="flex: 1; background: #374151; color: #f8fafc; border: none; border-radius: 6px; padding: 10px 16px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all 0.2s ease;">
                        <i class="fas fa-eraser" style="margin-right: 6px;"></i>
                        Clear Content
                    </button>
                    <button class="close-editor-btn"
                        style="flex: 1; background: #3b82f6; color: white; border: none; border-radius: 6px; padding: 10px 16px; cursor: pointer; font-size: 13px; font-weight: 600; transition: all 0.2s ease;">
                        <i class="fas fa-check" style="margin-right: 6px;"></i>
                        Done Editing
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Attach event handlers
     */
    attachEventHandlers() {
        if (!this.container) return;

        // Attach portion marking handlers (Phase 3)
        this.attachPortionMarkingHandlers();

        // Annex card click handlers (left column)
        this.container.querySelectorAll('.annex-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const annexLetter = e.currentTarget.dataset.annex;
                const isActive = this.activeAnnexes.has(annexLetter);

                if (isActive) {
                    // If already active, open in editor
                    this.setCurrentlyEditingAnnex(annexLetter);
                } else {
                    // If not active, activate it and open in editor
                    this.activateAnnex(annexLetter);
                    this.setCurrentlyEditingAnnex(annexLetter);
                }
            });
        });

        // Quick select annex handlers (right column list)
        this.container.querySelectorAll('.quick-select-annex').forEach(item => {
            item.addEventListener('click', (e) => {
                const annexLetter = e.currentTarget.dataset.annex;
                this.setCurrentlyEditingAnnex(annexLetter);
            });
        });

        // Remove annex button handlers
        this.container.querySelectorAll('.remove-annex-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const annexLetter = e.currentTarget.dataset.annex;
                this.deactivateAnnex(annexLetter);
            });
        });

        // Clear annex content button
        this.container.querySelectorAll('.clear-annex-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const annexLetter = e.currentTarget.dataset.annex;
                if (confirm(`Clear all content for Annex ${annexLetter}?`)) {
                    this.clearAnnexContent(annexLetter);
                }
            });
        });

        // Close editor button
        this.container.querySelectorAll('.close-editor-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.setCurrentlyEditingAnnex(null);
            });
        });

        // Field change handlers for auto-save
        this.container.querySelectorAll('input, textarea, select').forEach(field => {
            field.addEventListener('blur', () => this.handleFieldChange(field));
            field.addEventListener('change', () => this.handleFieldChange(field));

            // Character counter for textarea
            if (field.tagName === 'TEXTAREA') {
                field.addEventListener('input', () => {
                    const letter = field.id.match(/annex-([A-Z])-content/)?.[1];
                    if (letter) {
                        const counter = document.getElementById(`annex-${letter}-char-count`);
                        if (counter) {
                            counter.textContent = field.value.length;
                        }
                    }
                });
            }
        });
    }

    /**
     * Override render to re-initialize portion marking after dynamic content changes
     */
    render() {
        // Call parent render
        super.render();

        // Re-initialize portion marking for dynamically rendered annex fields
        // This is necessary because annex editor fields are created on-demand
        if (this.currentlyEditingAnnex && this.initialized) {
            console.log(`📋 Re-initializing portion marking for Annex ${this.currentlyEditingAnnex} fields`);

            // Remove the attached flag to allow re-attachment
            if (this.container) {
                this.container.removeAttribute('data-portion-handlers-attached');
            }

            // Re-attach handlers (for change detection)
            this.attachPortionMarkingHandlers();

            // Re-initialize popovers (creates PortionMarkingPopover instances)
            this.initializePortionMarkingPopovers();
        }
    }

    /**
     * Set currently editing annex
     */
    setCurrentlyEditingAnnex(annexLetter) {
        this.currentlyEditingAnnex = annexLetter;

        // Re-render to update UI (will automatically re-initialize portion marking)
        this.render();
    }

    /**
     * Activate annex
     */
    activateAnnex(annexLetter) {
        this.activeAnnexes.add(annexLetter);
        
        // Initialize data if not exists
        if (!this.data[annexLetter]) {
            this.data[annexLetter] = {
                title: '',
                content: '',
                status: 'NOT_STARTED'
            };
        }

        // Emit activation event
        this.eventBus.emit('annex:activated', {
            annexLetter,
            annexTitle: this.annexDefinitions[annexLetter].title
        });

        // Re-render
        this.render();
    }

    /**
     * Deactivate annex
     */
    deactivateAnnex(annexLetter) {
        this.activeAnnexes.delete(annexLetter);
        delete this.data[annexLetter];

        // If this was the currently editing annex, clear it
        if (this.currentlyEditingAnnex === annexLetter) {
            this.currentlyEditingAnnex = null;
        }

        // Emit deactivation event
        this.eventBus.emit('annex:deactivated', {
            annexLetter,
            annexTitle: this.annexDefinitions[annexLetter].title
        });

        // Re-render
        this.render();
    }

    /**
     * Clear annex content (but keep it activated)
     */
    clearAnnexContent(annexLetter) {
        if (this.data[annexLetter]) {
            this.data[annexLetter] = {
                title: '',
                content: '',
                status: 'NOT_STARTED'
            };
        }

        // Re-render
        this.render();
    }

    /**
     * Get section data (override from BaseSectionComponent)
     */
    getData() {
        // Collect data from all active annexes
        const annexesData = {};

        this.activeAnnexes.forEach(letter => {
            const titleField = document.getElementById(`annex-${letter}-title`);
            const contentField = document.getElementById(`annex-${letter}-content`);
            const statusField = document.getElementById(`annex-${letter}-status`);

            if (titleField || contentField || statusField) {
                annexesData[letter] = {
                    title: titleField?.value || '',
                    content: contentField?.value || '',
                    status: statusField?.value || 'NOT_STARTED'
                };
            } else if (this.data[letter]) {
                // Use existing data if fields not found
                annexesData[letter] = this.data[letter];
            }
        });

        return annexesData;
    }

    /**
     * Set section data (override from BaseSectionComponent)
     */
    setData(data) {
        if (!data) return;

        this.data = { ...data };

        // Activate annexes that have data
        Object.keys(data).forEach(letter => {
            if (data[letter] && (data[letter].content || data[letter].title)) {
                this.activeAnnexes.add(letter);
            }
        });

        // Re-render with loaded data
        if (this.initialized) {
            this.render();
        }
    }

    /**
     * Update data (override from BaseSectionComponent)
     */
    updateData(data) {
        this.data = { ...this.data, ...data };

        // Emit update event
        this.eventBus.emit(`section:${this.sectionId}:updated`, {
            data: this.getData()
        });
    }

    /**
     * Clear section data (override from BaseSectionComponent)
     */
    clearData() {
        this.data = {};
        this.activeAnnexes.clear();

        if (this.initialized) {
            this.render();
        }
    }

    /**
     * Validate section (override from BaseSectionComponent)
     */
    validate() {
        const errors = [];
        const warnings = [];

        // Check required annexes
        this.validationRules.requiredAnnexes.forEach(letter => {
            if (!this.activeAnnexes.has(letter)) {
                warnings.push(`Required Annex ${letter} (${this.annexDefinitions[letter].title}) is not activated`);
            } else if (!this.data[letter]?.content) {
                warnings.push(`Required Annex ${letter} (${this.annexDefinitions[letter].title}) has no content`);
            }
        });

        return {
            valid: errors.length === 0,
            errors,
            warnings,
            sectionId: this.sectionId
        };
    }
}

export default AnnexesSection;

