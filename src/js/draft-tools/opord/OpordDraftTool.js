/**
 * OPORD Draft Tool
 * Main component for creating and editing OPORD drafts
 * Manages UI, form state, and coordination between sections
 *
 * @module OpordDraftTool
 */

import { OpordBuilder } from './OpordBuilder.js';
import { OpordValidator } from './OpordValidator.js';
import { OpordTemplates } from './OpordTemplates.js';
import { SituationSection } from './sections/SituationSection.js';
import { MissionSection } from './sections/MissionSection.js';
import { ExecutionSection } from './sections/ExecutionSection.js';
import { SustainmentSection } from './sections/SustainmentSection.js';
import { CommandControlSection } from './sections/CommandControlSection.js';
import { AnnexesSection } from './sections/AnnexesSection.js';
import { ClassificationManager } from '../classification/ClassificationManager.js';
import { PortionMarkingManager } from '../classification/PortionMarkingManager.js';
import { ClassificationUI } from '../classification/ClassificationUI.js';
import { DropdownMenu } from '../../components/DropdownMenu.js';
import { ClassificationPickerInline } from '../../components/ClassificationPickerInline.js';
import { DTGPicker } from '../../components/DTGPicker.js';
import { DTGFormatter } from '../../utils/dtg-formatter.js';
import { Modal } from '../../components/Modal.js';

// Constants for Phase 1 & Phase 2 visual feedback (Issue #8)
const FAB_TOOLTIP_DURATION_MS = 2000; // Duration to show FAB tooltip messages
const KEYBOARD_HINT_OFFSET_PX = 4;    // Vertical offset for keyboard hint positioning

export class OpordDraftTool {
    constructor(eventBus, draftManager) {
        this.eventBus = eventBus;
        this.draftManager = draftManager;
        this.builder = new OpordBuilder();
        this.validator = new OpordValidator();
        this.templates = new OpordTemplates();
        this.currentDraft = null;
        this.container = null;
        this.sections = new Map();
        this.expandedSections = new Set(['situation']); // Default: Situation expanded
        this.initializedSections = new Set(); // Track which sections have been initialized
        this.autoSaveDebounceTimer = null;
        this.autoSaveDebounceDelay = 2000; // 2 seconds
        this.initialized = false;
        this.handlersAttached = false; // Track if event handlers are attached
        this.isOpeningPopover = false; // Flag to prevent FAB reset during popover opening

        // Initialize classification components
        this.classificationManager = new ClassificationManager(eventBus);
        this.portionMarkingManager = new PortionMarkingManager(eventBus, this.classificationManager);
        this.classificationUI = new ClassificationUI(eventBus, this.classificationManager);

        // Initialize section components (pass portionMarkingManager for Phase 3 integration)
        this.situationSection = new SituationSection(eventBus, this.portionMarkingManager);
        this.missionSection = new MissionSection(eventBus, this.portionMarkingManager);
        this.executionSection = new ExecutionSection(eventBus, this.portionMarkingManager);
        this.sustainmentSection = new SustainmentSection(eventBus, this.portionMarkingManager);
        this.commandControlSection = new CommandControlSection(eventBus, this.portionMarkingManager);
        this.annexesSection = new AnnexesSection(eventBus, this.portionMarkingManager);

        // Header components (initialized after render)
        this.actionsDropdown = null;
        this.saveDropdown = null; // Save dropdown menu
        this.classificationPicker = null;
        this.dtgPicker = null;

        // Track last focused text field for FAB/keyboard shortcuts
        // (Clicking FAB steals focus, so we need to remember the last focused field)
        this.lastFocusedField = null;

        // Track unsaved changes
        this.lastSavedState = null; // JSON string of last saved draft state
        this.hasModifications = false; // Flag for unsaved changes
    }

    /**
     * Helper function to check if an element is a text input field (Issue #6)
     * Validates that the element is a textarea or a text-based input type
     * @param {HTMLElement} element - The element to check
     * @returns {boolean} True if element is a text input field
     */
    isTextInput(element) {
        if (!element) return false;

        if (element.tagName === 'TEXTAREA') {
            return true;
        }

        if (element.tagName === 'INPUT') {
            const type = (element.type || 'text').toLowerCase();
            // Only allow text-based input types
            const textInputTypes = ['text', 'search', 'url', 'tel', 'email', 'password'];
            return textInputTypes.includes(type);
        }

        return false;
    }

    /**
     * Initialize OPORD Draft Tool
     */
    async initialize(container) {
        if (this.initialized) {
            console.log('⚠️ OpordDraftTool already initialized');
            return;
        }

        console.log('📝 Initializing OpordDraftTool...');

        this.container = typeof container === 'string' ?
            document.querySelector(container) : container;

        if (!this.container) {
            throw new Error('Container element not found');
        }

        try {
            // Load expanded sections from localStorage
            this.loadExpandedSectionsState();

            // Setup event listeners
            this.setupEventListeners();

            // Render initial UI
            this.render();

            // Attach event handlers and initialize section components
            await this.attachEventHandlers();

            // Initialize FAB and keyboard shortcuts (Phase 1 of Hybrid Approach)
            this.initializeFloatingActionButton();
            this.initializeKeyboardShortcuts();

            this.initialized = true;
            console.log('✅ OpordDraftTool initialized');

            // Emit initialization event
            this.eventBus.emit('opord-tool:initialized', {
                timestamp: new Date().toISOString()
            });

        } catch (error) {
            console.error('❌ Failed to initialize OpordDraftTool:', error);
            throw error;
        }
    }

    /**
     * Initialize Floating Action Button (FAB) for portion marking
     * Phase 1 of Hybrid Approach (FAB + Keyboard Shortcuts + Inline Badges)
     */
    initializeFloatingActionButton() {
        console.log('🔧 Initializing Floating Action Button...');

        // Create FAB element
        const fab = document.createElement('button');
        fab.id = 'opord-portion-marking-fab';
        fab.className = 'portion-marking-fab';
        fab.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span style="margin-left: 8px; font-size: 14px; font-weight: 500;">Mark</span>
        `;
        fab.setAttribute('aria-label', 'Apply portion marking (Ctrl+M)');
        fab.setAttribute('title', 'Apply portion marking (Ctrl+M)');
        fab.setAttribute('type', 'button'); // Prevent form submission

        // Append to document.body for proper fixed positioning
        // (Appending to container can break fixed positioning if container has transform/overflow)
        document.body.appendChild(fab);
        console.log('✅ FAB appended to document.body');

        // Store event handlers for cleanup in destroy()
        this.fabClickHandler = () => {
            console.log('🖱️ FAB clicked!');
            this.handleFABClick();
        };
        this.fabMouseEnterHandler = () => this.handleFABHover(true);
        this.fabMouseLeaveHandler = () => this.handleFABHover(false);

        // Attach event handlers
        fab.addEventListener('click', this.fabClickHandler);
        fab.addEventListener('mouseenter', this.fabMouseEnterHandler);
        fab.addEventListener('mouseleave', this.fabMouseLeaveHandler);
        console.log('✅ FAB event listeners attached');

        // Store reference
        this.fab = fab;

        // Track focused text fields globally (for FAB and keyboard shortcuts)
        // This is necessary because clicking the FAB steals focus from the text field
        this.focusTrackingHandler = (event) => {
            const target = event.target;
            if (this.container.contains(target) && this.isTextInput(target)) {
                this.lastFocusedField = target;
                console.log('📝 Focused field tracked:', target.id || target.name);

                // Update FAB position to follow focused field
                this.updateFABPosition(target);
            }
        };

        // Track blur events to return FAB to default position
        this.focusBlurHandler = (event) => {
            const target = event.target;
            if (this.container.contains(target) && this.isTextInput(target)) {
                // Longer delay to allow popover to fully open and be detected
                setTimeout(() => {
                    // Don't reset FAB position if:
                    // 1. We're currently opening a popover (flag set), OR
                    // 2. A popover is open (user is interacting with portion marking), OR
                    // 3. A field is still focused

                    if (this.isOpeningPopover) {
                        console.log('📝 Opening popover, keeping FAB position');
                        return; // Keep FAB in current position
                    }

                    const popoverOpen = document.querySelector('.portion-marking-popover[style*="display: block"]');
                    if (popoverOpen) {
                        console.log('📝 Popover open, keeping FAB position');
                        return; // Keep FAB in current position
                    }

                    const activeElement = document.activeElement;
                    const isFieldFocused = activeElement && this.container.contains(activeElement) && this.isTextInput(activeElement);

                    if (!isFieldFocused) {
                        console.log('📝 No field focused and no popover open, returning FAB to default position');
                        this.resetFABPosition();
                        this.lastFocusedField = null; // Clear last focused field
                    }
                }, 200); // Increased from 100ms to 200ms
            }
        };

        // Listen for focus events on the entire document (using capture phase)
        document.addEventListener('focusin', this.focusTrackingHandler, true);
        document.addEventListener('focusout', this.focusBlurHandler, true);

        // Add global click handler to detect clicks outside fields
        this.globalClickHandler = (event) => {
            // Check if click is outside all text fields and no popover is open
            const clickedElement = event.target;
            const isTextField = this.isTextInput(clickedElement);
            const isInsideContainer = this.container.contains(clickedElement);
            const popoverOpen = document.querySelector('.portion-marking-popover[style*="display: block"]');

            if (!isTextField && isInsideContainer && !popoverOpen && !this.isOpeningPopover) {
                // User clicked inside container but not on a text field
                // Reset FAB to default position
                console.log('📝 Click outside fields detected, resetting FAB');
                this.resetFABPosition();
                this.lastFocusedField = null;
            }
        };
        document.addEventListener('click', this.globalClickHandler);

        // Add listener for portion marking workflow completion
        this.portionMarkingCompleteHandler = (event) => {
            console.log('📝 Portion marking workflow complete, resetting FAB');
            console.log('   Field ID:', event.detail?.fieldId);
            this.resetFABPosition();
            this.lastFocusedField = null;
        };
        document.addEventListener('portion-marking:workflow-complete', this.portionMarkingCompleteHandler);

        // Add listener for sidebar toggle events
        this.sidebarToggleHandler = () => {
            console.log('📝 Sidebar toggled, adjusting FAB position');
            // Only reset if FAB is in default position (not following a field)
            if (!this.lastFocusedField) {
                this.resetFABPosition();
            }
        };
        this.eventBus.on('sidebar:toggled', this.sidebarToggleHandler);

        // Add listener for window resize to adjust FAB position
        this.windowResizeHandler = () => {
            // Debounce resize events
            clearTimeout(this.resizeDebounceTimer);
            this.resizeDebounceTimer = setTimeout(() => {
                console.log('📝 Window resized, adjusting FAB position');
                if (!this.lastFocusedField) {
                    this.resetFABPosition();
                }
            }, 250);
        };
        window.addEventListener('resize', this.windowResizeHandler);

        // Initialize FAB in default position
        this.resetFABPosition();

        console.log('✅ Floating Action Button initialized with dynamic positioning');
    }

    /**
     * Update FAB position to follow focused field
     * @param {HTMLElement} field - The focused text field
     */
    updateFABPosition(field) {
        if (!this.fab || !field) return;

        const fieldRect = field.getBoundingClientRect();
        const fabRect = this.fab.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const margin = 16;

        // Check if field is in Annexes section (position FAB to the left)
        // Annex fields have IDs like "annex-A-title", "annex-A-content", etc.
        const fieldId = field.id || field.name || '';
        const isAnnexField = fieldId.startsWith('annex-') || field.closest('.annexes-section-container') !== null;

        console.log('🔍 Field detection:', {
            fieldId,
            isAnnexField,
            hasAnnexContainer: field.closest('.annexes-section-container') !== null
        });

        let top, left;

        if (isAnnexField) {
            // Position FAB to the left of the field
            top = fieldRect.top + (fieldRect.height / 2) - (fabRect.height / 2);
            left = fieldRect.left - fabRect.width - 12;

            // If not enough space on left, position on right
            if (left < margin) {
                left = fieldRect.right + 12;
                console.log('📍 Positioning FAB to RIGHT of annex field (not enough space on left)');
            } else {
                console.log('📍 Positioning FAB to LEFT of annex field');
            }
        } else {
            // Position FAB below the field
            top = fieldRect.bottom + 8;
            left = fieldRect.left;

            // If not enough space below, position above
            if (top + fabRect.height > viewportHeight - margin) {
                top = fieldRect.top - fabRect.height - 8;
                console.log('📍 Positioning FAB ABOVE field (not enough space below)');
            } else {
                console.log('📍 Positioning FAB BELOW field');
            }
        }

        // Ensure FAB stays within viewport horizontally
        if (left + fabRect.width > viewportWidth - margin) {
            left = viewportWidth - fabRect.width - margin;
        }
        if (left < margin) {
            left = margin;
        }

        // Ensure FAB stays within viewport vertically
        if (top < margin) {
            top = margin;
        }
        if (top + fabRect.height > viewportHeight - margin) {
            top = viewportHeight - fabRect.height - margin;
        }

        // Apply position with smooth transition
        this.fab.style.top = `${top}px`;
        this.fab.style.left = `${left}px`;
        this.fab.style.right = 'auto'; // Override default right positioning
        this.fab.style.bottom = 'auto'; // Override default bottom positioning

        console.log('✅ FAB positioned at:', { top, left });
    }

    /**
     * Reset FAB to default position (bottom-right corner of viewport)
     * Uses viewport-fixed positioning with sidebar-aware horizontal offset
     */
    resetFABPosition() {
        if (!this.fab) return;

        // Check if right sidebar exists and is visible
        const rightSidebar = document.getElementById('right-sidebar');
        let sidebarWidth = 0;

        if (rightSidebar) {
            const sidebarRect = rightSidebar.getBoundingClientRect();
            const sidebarStyle = window.getComputedStyle(rightSidebar);

            // Check if sidebar is visible (not hidden off-screen)
            // On tablet/mobile, sidebar is positioned off-screen when closed
            const isVisible = sidebarRect.right > 0 && sidebarStyle.display !== 'none';

            if (isVisible) {
                sidebarWidth = sidebarRect.width;
            }
        }

        // Calculate FAB position
        const margin = 24;

        // Vertical: Fixed to viewport bottom (always 24px from bottom)
        const bottom = margin;

        // Horizontal: Sidebar-aware (shift left to avoid sidebar overlap)
        const right = sidebarWidth + margin;

        // Apply position
        this.fab.style.top = 'auto';
        this.fab.style.left = 'auto';
        this.fab.style.right = `${right}px`;
        this.fab.style.bottom = `${bottom}px`;

        console.log('✅ FAB reset to default position (viewport-fixed, sidebar-aware)');
        console.log('   Sidebar width:', sidebarWidth);
        console.log('   FAB position:', { bottom: `${bottom}px`, right: `${right}px` });
    }

    /**
     * Handle FAB click
     */
    handleFABClick() {
        console.log('🔍 handleFABClick() called');
        console.log('   lastFocusedField:', this.lastFocusedField);

        // Use lastFocusedField instead of document.activeElement
        // (Clicking FAB steals focus, so we need to use the last focused field)
        const focusedField = this.lastFocusedField;

        // Check if we have a valid focused field
        if (focusedField && this.container.contains(focusedField) && this.isTextInput(focusedField)) {
            console.log('✅ Valid focused field found:', focusedField.id || focusedField.name);

            // Set flag to prevent FAB reset during popover opening
            this.isOpeningPopover = true;
            console.log('🔒 Set isOpeningPopover flag to prevent FAB reset');

            // Store current FAB position to maintain it while popover is open
            this.fabPositionBeforePopover = {
                top: this.fab.style.top,
                left: this.fab.style.left,
                right: this.fab.style.right,
                bottom: this.fab.style.bottom
            };

            this.openPortionMarkingForField(focusedField);

            // Clear flag after popover has had time to open
            setTimeout(() => {
                this.isOpeningPopover = false;
                console.log('🔓 Cleared isOpeningPopover flag');
            }, 500);
        } else {
            console.log('❌ No valid focused field');
            console.log('   focusedField exists:', !!focusedField);
            console.log('   container contains field:', focusedField ? this.container.contains(focusedField) : 'N/A');
            console.log('   is text input:', focusedField ? this.isTextInput(focusedField) : 'N/A');
            this.showFABTooltip('Please focus a text field first');
        }
    }

    /**
     * Open portion marking popover for a specific field
     * @param {HTMLElement} field - The text field to apply portion marking to
     */
    openPortionMarkingForField(field) {
        console.log('🔍 openPortionMarkingForField() called');
        console.log('   field:', field);

        const fieldName = field.id || field.name;
        console.log('   fieldName:', fieldName);

        if (!fieldName) {
            console.error('❌ Field has no id or name attribute:', field);
            this.showFABTooltip('Cannot identify this field');
            return;
        }

        // Find the popover instance for this field
        // Search across all section components
        let popover = null;
        let sectionWithPopover = null;

        // Check each section for the popover
        const sections = [
            this.situationSection,
            this.missionSection,
            this.executionSection,
            this.sustainmentSection,
            this.commandControlSection,
            this.annexesSection
        ];

        for (const section of sections) {
            if (section && section.portionMarkingPopovers) {
                popover = section.portionMarkingPopovers.get(fieldName);
                if (popover) {
                    sectionWithPopover = section.sectionId;
                    break;
                }
            }
        }

        console.log('   Popover found:', !!popover);
        console.log('   Section:', sectionWithPopover);

        if (!popover) {
            // Field doesn't have portion marking support
            console.log('❌ No portion marking popover found for field:', fieldName);
            this.showFABTooltip('This field does not support portion marking');
            return;
        }

        // Open the popover directly
        console.log('✅ Opening popover for:', fieldName);
        popover.open();
        console.log('✅ Popover opened');
    }

    /**
     * Show tooltip near FAB
     * @param {string} message - Tooltip message
     */
    showFABTooltip(message) {
        // Clear existing tooltip and timeout (Issue #4)
        if (this.fabTooltipTimeout) {
            clearTimeout(this.fabTooltipTimeout);
            this.fabTooltipTimeout = null;
        }
        if (this.fabTooltip && this.fabTooltip.parentNode) {
            this.fabTooltip.remove();
            this.fabTooltip = null;
        }

        // Create tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'fab-tooltip';
        tooltip.textContent = message;
        document.body.appendChild(tooltip);

        // Store reference for cleanup
        this.fabTooltip = tooltip;

        // Auto-remove after configured duration (Issue #8)
        this.fabTooltipTimeout = setTimeout(() => {
            if (this.fabTooltip && this.fabTooltip.parentNode) {
                this.fabTooltip.remove();
            }
            this.fabTooltip = null;
            this.fabTooltipTimeout = null;
        }, FAB_TOOLTIP_DURATION_MS);
    }

    /**
     * Initialize keyboard shortcuts for portion marking
     * Ctrl+M (or Cmd+M on Mac) opens portion marking popover for focused field
     */
    initializeKeyboardShortcuts() {
        // Store event handlers for cleanup in destroy()
        this.keydownHandler = (e) => {
            // Check for Ctrl+M (or Cmd+M on Mac)
            if ((e.ctrlKey || e.metaKey) && e.key === 'm' && !e.shiftKey) {
                e.preventDefault(); // Prevent browser default

                // Try document.activeElement first, fallback to lastFocusedField
                let focusedField = document.activeElement;

                // If activeElement is not a valid text field, use lastFocusedField
                if (!this.isTextInput(focusedField) || !this.container.contains(focusedField)) {
                    focusedField = this.lastFocusedField;
                }

                // Only handle if we have a valid field
                if (focusedField && this.container.contains(focusedField) && this.isTextInput(focusedField)) {
                    this.openPortionMarkingForField(focusedField);
                }
                // Silently ignore if no field focused (standard keyboard shortcut behavior)
            }
        };

        this.focusHandler = (e) => {
            // Only show keyboard hint for text input fields (Issue #6)
            if (this.isTextInput(e.target)) {
                this.showKeyboardHint(e.target);
            }
        };

        this.blurHandler = (e) => {
            // Only hide keyboard hint for text input fields (Issue #6)
            if (this.isTextInput(e.target)) {
                this.hideKeyboardHint(e.target);
            }
        };

        // Add event listeners
        document.addEventListener('keydown', this.keydownHandler);
        this.container.addEventListener('focus', this.focusHandler, true);
        this.container.addEventListener('blur', this.blurHandler, true);

        console.log('✅ Keyboard shortcuts initialized (Ctrl+M)');
    }

    /**
     * Handle FAB hover for field highlighting (Phase 2)
     * @param {boolean} isHovering - Whether FAB is being hovered
     */
    handleFABHover(isHovering) {
        const focusedField = document.activeElement;

        // Only highlight if a text input field within OPORD is focused (Issue #6)
        if (this.container.contains(focusedField) && this.isTextInput(focusedField)) {
            if (isHovering) {
                focusedField.classList.add('fab-hover-highlight');
            } else {
                focusedField.classList.remove('fab-hover-highlight');
            }
        }
    }

    /**
     * Show keyboard hint tooltip for a field (Phase 2)
     * @param {HTMLElement} field - The text field that received focus
     */
    showKeyboardHint(field) {
        // Don't show hint if field doesn't support portion marking
        const fieldName = field.id || field.name;
        if (!fieldName) return;

        const button = this.container.querySelector(`[data-field-name="${fieldName}"]`);
        if (!button) return;

        // Remove existing hint if any
        this.hideKeyboardHint(field);

        // Issue #5: Validate field is still in DOM and focused before positioning
        if (!field.isConnected || !document.contains(field)) {
            return; // Field no longer in DOM
        }

        if (document.activeElement !== field) {
            return; // Field no longer focused
        }

        // Create keyboard hint
        const hint = document.createElement('div');
        hint.className = 'keyboard-hint';
        hint.textContent = 'Press Ctrl+M to mark';
        hint.setAttribute('data-field-id', fieldName);

        // Position hint below field (Issue #8: Use named constant for offset)
        const fieldRect = field.getBoundingClientRect();

        // Use fixed positioning instead of absolute to avoid container positioning issues (Issue #7)
        hint.style.position = 'fixed';
        hint.style.top = `${fieldRect.bottom + KEYBOARD_HINT_OFFSET_PX}px`;
        hint.style.left = `${fieldRect.left}px`;
        hint.style.zIndex = '9999'; // Ensure hint appears above other elements

        // Append to body instead of container to avoid layout issues
        document.body.appendChild(hint);

        // Store reference
        field.keyboardHint = hint;
    }

    /**
     * Hide keyboard hint tooltip for a field (Phase 2)
     * @param {HTMLElement} field - The text field that lost focus
     */
    hideKeyboardHint(field) {
        if (field.keyboardHint) {
            // Check if element still has a parent before removing
            if (field.keyboardHint.parentNode) {
                try {
                    field.keyboardHint.remove();
                } catch (e) {
                    // Silently catch NotFoundError if element was already removed
                    if (e.name !== 'NotFoundError') {
                        console.error('Error removing keyboard hint:', e);
                    }
                }
            }
            field.keyboardHint = null;
        }

        // Also remove any orphaned hints for this field (check both container and body)
        const fieldName = field.id || field.name;
        if (fieldName) {
            // Check in document.body (hints are now appended to body)
            const orphanedHints = document.querySelectorAll(`.keyboard-hint[data-field-id="${fieldName}"]`);
            orphanedHints.forEach(hint => {
                // Only remove if element still has a parent (not already removed)
                if (hint.parentNode) {
                    try {
                        hint.remove();
                    } catch (e) {
                        // Silently catch NotFoundError if element was already removed
                        if (e.name !== 'NotFoundError') {
                            console.error('Error removing orphaned hint:', e);
                        }
                    }
                }
            });
        }
    }

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Listen for draft creation
        this.eventBus.on('draft:created', (data) => {
            if (data.type === 'opord') {
                this.loadDraft(data.draft);
            }
        });

        // Listen for draft loading
        this.eventBus.on('draft:loaded', (data) => {
            if (data.draft.type === 'opord') {
                this.loadDraft(data.draft);
            }
        });

        // Listen for draft saving
        this.eventBus.on('draft:saved', (data) => {
            if (data.draft.type === 'opord') {
                this.showSaveNotification('Draft saved successfully');
            }
        });

        // Listen for classification changes
        // This updates the dynamic classification badge in the header
        this.eventBus.on('classification:changed', (data) => {
            this.handleClassificationChange(data);
        });

        // Listen for portion marking banner updates (Phase 3)
        // This updates the classification banner when portion markings change
        this.eventBus.on('portion-marking:banner-updated', (data) => {
            this.handlePortionMarkingBannerUpdate(data);
        });

        // Listen for validation errors and show an inline alert (Phase 5/6)
        this.eventBus.on('classification:validation-error', (error) => {
            try {
                this.showValidationError(error);
            } catch (e) {
                console.error('Failed to display validation error', e, error);
            }
        });

        console.log('📡 OPORD Draft Tool event listeners registered');
    }

    /**
     * Render OPORD Draft Tool UI
     */
    render() {
        if (!this.container) return;

        // Get current classification for banner
        const currentClassification = this.classificationManager.getCurrentClassification();
        const bannerText = currentClassification.bannerText;
        const bgColor = this.classificationManager.getClassificationColor();
        const textColor = this.classificationManager.getTextColor();

        const html = `
            <style>
                .toolbar-btn:hover {
                    opacity: 0.9;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
                }
                .toolbar-btn:active {
                    transform: translateY(0);
                }
                .classification-banner {
                    width: 100%;
                    padding: 12px 20px;
                    text-align: center;
                    font-weight: 700;
                    font-size: 16px;
                    letter-spacing: 1px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                }
            </style>
            <div id="opord-draft-tool" class="draft-tool-container" style="background: #0f172a; min-height: 100vh; padding: 20px;">
                <!-- Header (with consolidated buttons) -->
                <div class="draft-tool-header" style="margin-bottom: 20px;">
                    ${this.renderHeader()}
                </div>

                <!-- Classification Banner (Full Width) -->
                <div class="classification-banner" style="background: ${bgColor}; color: ${textColor};">
                    ${bannerText}
                </div>

                <!-- Main Content Area -->
                <div class="draft-tool-content" style="display: grid; grid-template-columns: 1fr; gap: 24px;">
                    <!-- OPORD Sections (Accordion) -->
                    <div class="opord-sections">
                        ${this.renderSections()}
                    </div>
                </div>

                <!-- Save Status Indicator -->
                <div id="save-status" class="save-status" style="position: fixed; bottom: 20px; right: 20px; padding: 12px 20px; background: #1f2937; border: 1px solid #374151; border-radius: 8px; display: none;">
                    <span id="save-status-text" style="color: #f8fafc; font-size: 14px;"></span>
                </div>
            </div>
        `;

        this.container.innerHTML = html;
    }

    /**
     * Render header section (optimized for space)
     * Note: Classification badge removed - now displayed as full-width banner above sections
     */
    renderHeader() {
        const title = this.currentDraft?.metadata?.title || '';
        const dtg = this.currentDraft?.metadata?.dtg || DTGFormatter.now();

        return `
            <div class="opord-header" style="background: linear-gradient(135deg, #1f2937 0%, #111827 100%); border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                <!-- Title Row: Heading + Actions -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                    <h1 style="color: #f8fafc; font-size: 20px; font-weight: 700; margin: 0; display: flex; align-items: center; gap: 10px;">
                        <i class="fas fa-file-alt" style="color: #3b82f6; font-size: 18px;"></i>
                        Draft OPORD
                    </h1>

                    <div style="display: flex; align-items: center; gap: 8px;">
                        <!-- Save Dropdown Container (positioned wrapper) -->
                        <div style="position: relative;">
                            <!-- Save Dropdown Trigger -->
                            <button id="btn-save-draft" style="background: #8b5cf6; color: white; padding: 8px 16px; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-save" style="font-size: 12px;"></i>
                                Save
                                <i class="fas fa-chevron-down dropdown-chevron" style="font-size: 10px;"></i>
                            </button>
                        </div>

                        <!-- Classification Picker Container (positioned wrapper) -->
                        <div style="position: relative;">
                            <!-- Classification Picker Button -->
                            <button id="classification-picker-button" style="background: #5cb85c; color: white; padding: 8px 16px; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-shield-alt" style="font-size: 12px;"></i>
                                Select Classification
                            </button>
                        </div>

                        <!-- Actions Dropdown Container (positioned wrapper) -->
                        <div style="position: relative;">
                            <!-- Actions Dropdown Trigger -->
                            <button id="actions-dropdown-trigger" style="background: #374151; color: #e2e8f0; padding: 8px 16px; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.2s;">
                                <i class="fas fa-ellipsis-v" style="font-size: 12px;"></i>
                                Actions
                                <i class="fas fa-chevron-down dropdown-chevron" style="font-size: 10px;"></i>
                            </button>
                        </div>

                    </div>
                </div>

                <!-- Metadata Row: Title Input + DTG Input -->
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 12px;">
                    <!-- Title Input with Character Counter -->
                    <div>
                        <label style="color: #9ca3af; font-size: 12px; font-weight: 600; display: block; margin-bottom: 6px;">
                            OPORD Title
                        </label>
                        <input type="text" id="draft-title" value="${title}"
                            maxlength="200"
                            style="width: 100%; background: #0f172a; border: 1px solid #4a5568; border-radius: 6px; padding: 10px 12px; color: #f8fafc; font-size: 14px; transition: all 0.2s;"
                            placeholder="Enter OPORD title (e.g., OPORD 25-001 - OPERATION EXAMPLE)">
                        <div id="title-char-counter" style="color: #6b7280; font-size: 11px; margin-top: 4px;">
                            0 / 200 characters
                        </div>
                    </div>

                    <!-- DTG Input with Picker -->
                    <div>
                        <label style="color: #9ca3af; font-size: 12px; font-weight: 600; display: block; margin-bottom: 6px;">
                            Date-Time Group (DTG)
                        </label>
                        <div style="position: relative;">
                            <input type="text" id="draft-dtg" value="${dtg}"
                                style="width: 100%; background: #0f172a; border: 1px solid #4a5568; border-radius: 6px; padding: 10px 12px; color: #f8fafc; font-size: 14px; font-family: 'Courier New', monospace; font-weight: 700; transition: all 0.2s;"
                                placeholder="DDHHMMZ MMM YYYY"
                                readonly>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render toolbar section (buttons now in header)
     */
    renderToolbar() {
        return ''; // Buttons consolidated into header
    }

    /**
     * Render OPORD sections (accordion)
     */
    renderSections() {
        const sections = [
            { id: 'situation', title: '1. Situation', icon: 'fa-map-marked-alt', color: '#3b82f6' },
            { id: 'mission', title: '2. Mission', icon: 'fa-bullseye', color: '#10b981' },
            { id: 'execution', title: '3. Execution', icon: 'fa-tasks', color: '#f59e0b' },
            { id: 'sustainment', title: '4. Sustainment', icon: 'fa-boxes', color: '#8b5cf6' },
            { id: 'commandControl', title: '5. Command and Signal', icon: 'fa-broadcast-tower', color: '#ec4899' },
            { id: 'annexes', title: '6. Annexes', icon: 'fa-folder-open', color: '#f59e0b' }
        ];

        return sections.map(section => this.renderSection(section)).join('');
    }

    /**
     * Render individual section
     */
    renderSection(section) {
        const isExpanded = this.expandedSections.has(section.id);
        const content = this.currentDraft?.content?.[section.id] || {};

        return `
            <div class="opord-section" data-section="${section.id}" style="background: #1f2937; border: 1px solid #374151; border-radius: 12px; margin-bottom: 16px; overflow: hidden;">
                <!-- Section Header (Clickable) -->
                <div class="section-header" data-section="${section.id}"
                    style="padding: 20px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; background: linear-gradient(135deg, #1f2937 0%, #111827 100%);">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <i class="fas ${section.icon}" style="color: ${section.color}; font-size: 20px;"></i>
                        <h3 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin: 0;">${section.title}</h3>
                    </div>
                    <i class="fas fa-chevron-${isExpanded ? 'up' : 'down'}" style="color: #9ca3af; font-size: 16px;"></i>
                </div>

                <!-- Section Content (Collapsible) -->
                <div class="section-content" data-section="${section.id}"
                    style="display: ${isExpanded ? 'block' : 'none'}; padding: 20px; border-top: 1px solid #374151;">
                    <div id="section-${section.id}-content">
                        ${this.renderSectionForm(section.id, content)}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render section form (uses section components)
     */
    renderSectionForm(sectionId, content) {
        // Use section component if available
        if (sectionId === 'situation' || sectionId === 'mission' || sectionId === 'execution' ||
            sectionId === 'sustainment' || sectionId === 'commandControl' || sectionId === 'annexes') {
            // Convert camelCase to kebab-case for container ID (commandControl -> command-control)
            const containerIdBase = sectionId === 'commandControl' ? 'command-control' : sectionId;
            return `<div id="section-${containerIdBase}-container"></div>`;
        }

        // Fallback to textarea for sections not yet implemented
        return `
            <textarea id="section-${sectionId}-textarea"
                class="section-textarea"
                data-section="${sectionId}"
                style="width: 100%; min-height: 200px; background: #0f172a; border: 1px solid #374151; border-radius: 6px; padding: 12px; color: #f8fafc; font-size: 14px; font-family: monospace; line-height: 1.6; resize: vertical;"
                placeholder="Enter ${sectionId} content...">${JSON.stringify(content, null, 2)}</textarea>
        `;
    }

    /**
     * Get classification color (uses ClassificationManager)
     */
    getClassificationColor(classification) {
        return this.classificationManager.getClassificationColor(classification);
    }

    /**
     * Load expanded sections state from localStorage
     */
    loadExpandedSectionsState() {
        try {
            const saved = localStorage.getItem('opord-expanded-sections');
            if (saved) {
                this.expandedSections = new Set(JSON.parse(saved));
            }
        } catch (error) {
            console.warn('⚠️ Failed to load expanded sections state:', error);
        }
    }

    /**
     * Save expanded sections state to localStorage
     */
    saveExpandedSectionsState() {
        try {
            localStorage.setItem('opord-expanded-sections',
                JSON.stringify(Array.from(this.expandedSections)));
        } catch (error) {
            console.warn('⚠️ Failed to save expanded sections state:', error);
        }
    }

    /**
     * Attach event handlers after rendering
     */
    async attachEventHandlers() {
        // Guard: Only attach handlers once to prevent memory leaks and duplicate listeners
        if (this.handlersAttached) {
            console.warn('⚠️ Event handlers already attached, skipping re-attachment');
            return;
        }

        // Section header click handlers (toggle expand/collapse)
        document.querySelectorAll('.section-header').forEach(header => {
            header.addEventListener('click', (e) => {
                const sectionId = e.currentTarget.dataset.section;
                this.toggleSection(sectionId);
            });
        });

        // Initialize header components
        this.initializeHeaderComponents();

        // Header field change handlers (with auto-save)
        const titleInput = document.getElementById('draft-title');
        if (titleInput) {
            titleInput.addEventListener('input', () => this.updateCharacterCounter());
            titleInput.addEventListener('blur', () => this.handleFieldChange());
            // Initialize character counter
            this.updateCharacterCounter();
        }

        // Section textarea blur handlers (with auto-save)
        document.querySelectorAll('.section-textarea').forEach(textarea => {
            textarea.addEventListener('blur', () => this.handleFieldChange());
        });

        // Initialize section components (only once)
        await this.initializeSectionComponents();

        // Mark handlers as attached
        this.handlersAttached = true;
        console.log('✅ Event handlers attached successfully');
    }

    /**
     * Initialize header components (dropdown, classification picker, DTG picker)
     */
    initializeHeaderComponents() {
        // Initialize Save Dropdown
        this.initializeSaveDropdown();

        // Initialize Actions Dropdown
        this.initializeActionsDropdown();

        // Initialize Classification Picker
        this.initializeClassificationPicker();

        // Initialize DTG Picker
        this.initializeDTGPicker();
    }

    /**
     * Initialize Actions Dropdown
     */
    initializeActionsDropdown() {
        const trigger = document.getElementById('actions-dropdown-trigger');
        if (!trigger) {
            console.warn('⚠️ Actions dropdown trigger not found');
            return;
        }

        this.actionsDropdown = new DropdownMenu({
            trigger: trigger,
            items: [
                { id: 'new', icon: 'fas fa-plus', label: 'New OPORD' },
                { id: 'load', icon: 'fas fa-folder-open', label: 'Load Draft' },
                { type: 'divider' },
                { id: 'template', icon: 'fas fa-file-import', label: 'Use Template' },
                { id: 'validate', icon: 'fas fa-check-circle', label: 'Validate Draft' },
                { type: 'divider' },
                { id: 'export', icon: 'fas fa-download', label: 'Export OPORD' }
            ],
            onSelect: (itemId) => {
                switch (itemId) {
                    case 'new':
                        this.handleNewDraft();
                        break;
                    case 'load':
                        this.handleLoadDraft();
                        break;
                    case 'template':
                        this.handleUseTemplate();
                        break;
                    case 'validate':
                        this.handleValidateDraft();
                        break;
                    case 'export':
                        this.handleExportDraft();
                        break;
                }
            },
            position: 'bottom-right'
        });

        console.log('✅ Actions dropdown initialized');
    }

    /**
     * Initialize Save Dropdown
     */
    initializeSaveDropdown() {
        const button = document.getElementById('btn-save-draft');
        if (!button) {
            console.warn('⚠️ Save button not found');
            return;
        }

        // Build save items dynamically based on available features
        const saveItems = [
            { id: 'save-local', icon: 'fas fa-hdd', label: 'Save Locally' }
        ];

        // Add File System option if supported
        if (this.draftManager.storageManager.isFileSystemAPISupported()) {
            saveItems.push({
                id: 'save-filesystem',
                icon: 'fas fa-file-export',
                label: 'Save to File System'
            });
        }

        saveItems.push({
            id: 'save-cloud',
            icon: 'fas fa-cloud',
            label: 'Save to Cloud',
            disabled: true
        });

        this.saveDropdown = new DropdownMenu({
            trigger: button,
            items: saveItems,
            onSelect: (itemId) => {
                switch (itemId) {
                    case 'save-local':
                        this.handleSaveLocally();
                        break;
                    case 'save-filesystem':
                        this.handleSaveToFileSystem();
                        break;
                    case 'save-cloud':
                        this.handleSaveToCloud();
                        break;
                }
            },
            position: 'bottom-left'
        });

        console.log('✅ Save dropdown initialized');
    }

    /**
     * Initialize Classification Picker (inline dropdown)
     */
    initializeClassificationPicker() {
        // Apply classification state from current draft before rendering
        try {
            if (this.currentDraft) {
                // Level
                if (this.currentDraft.classification) {
                    this.classificationManager.setClassificationLevel(this.currentDraft.classification);
                }
                // Dissemination controls
                (this.currentDraft.disseminationControls || []).forEach(c => this.classificationManager.addDisseminationControl(c));
                // SCI compartments
                (this.currentDraft.sciCompartments || []).forEach(c => this.classificationManager.addSCICompartment(c));
                // Release controls
                (this.currentDraft.releaseControls || []).forEach(c => this.classificationManager.addReleaseControl(c));
                // Handling caveats
                (this.currentDraft.handlingCaveats || []).forEach(c => this.classificationManager.addHandlingCaveat(c));
                // Release authority
                if (this.currentDraft.releaseAuthority) {
                    this.classificationManager.setReleaseAuthority(this.currentDraft.releaseAuthority);
                }
            }
        } catch (e) {
            console.warn('⚠️ Could not apply draft classification state:', e);
        }

        // Get classification picker button
        const button = document.getElementById('classification-picker-button');
        if (!button) {
            console.warn('⚠️ Classification picker button not found');
            return;
        }

        // Create classification picker
        this.classificationPicker = new ClassificationPickerInline({
            button: button,
            classificationManager: this.classificationManager,
            portionMarkingManager: this.portionMarkingManager,
            onApply: () => {
                console.log('🔐 Classification applied');
                this.handleFieldChange(); // Trigger auto-save
            }
        });

        // Update button color on classification change
        this.eventBus.on('classification:changed', (data) => {
            this.updateClassificationButton();
        });

        // Set initial button color
        this.updateClassificationButton();

        console.log('✅ Classification picker initialized');
    }

    /**
     * Update classification button color based on current classification
     */
    updateClassificationButton() {
        const button = document.getElementById('classification-picker-button');
        if (!button) return;

        const bgColor = this.classificationManager.getClassificationColor();
        const textColor = this.classificationManager.getTextColor();

        button.style.background = bgColor;
        button.style.color = textColor;
    }

    /**
     * Initialize DTG Picker
     */
    initializeDTGPicker() {
        const dtgInput = document.getElementById('draft-dtg');
        if (!dtgInput) {
            console.warn('⚠️ DTG input not found');
            return;
        }

        const initialDTG = this.currentDraft?.metadata?.dtg || DTGFormatter.now();

        this.dtgPicker = new DTGPicker({
            input: dtgInput,
            initialDTG: initialDTG,
            onSelect: (dtg) => {
                console.log('📅 DTG selected:', dtg);
                // Update current draft
                if (this.currentDraft && this.currentDraft.metadata) {
                    this.currentDraft.metadata.dtg = dtg;
                }
                // Trigger auto-save
                this.handleFieldChange();
            }
        });

        console.log('✅ DTG picker initialized');
    }

    /**
     * Update character counter for title input
     */
    updateCharacterCounter() {
        const titleInput = document.getElementById('draft-title');
        const counter = document.getElementById('title-char-counter');

        if (titleInput && counter) {
            const length = titleInput.value.length;
            const maxLength = titleInput.maxLength || 200;
            counter.textContent = `${length} / ${maxLength} characters`;

            // Change color when approaching limit
            if (length > maxLength * 0.9) {
                counter.style.color = '#f59e0b'; // Orange warning
            } else if (length >= maxLength) {
                counter.style.color = '#ef4444'; // Red at limit
            } else {
                counter.style.color = '#6b7280'; // Default gray
            }
        }
    }

    /**
     * Initialize classification UI (state only, no rendering)
     * Updated for comprehensive DoD/IC classification system
     */
    async initializeClassificationUI() {
        try {
            // Set classification from current draft (separated controls)
            if (this.currentDraft && this.currentDraft.classification) {
                // Set classification level
                this.classificationManager.setClassificationLevel(this.currentDraft.classification);

                // Add dissemination controls
                if (this.currentDraft.disseminationControls) {
                    this.currentDraft.disseminationControls.forEach(control => {
                        this.classificationManager.addDisseminationControl(control);
                    });
                }

                // Add SCI compartments
                if (this.currentDraft.sciCompartments) {
                    this.currentDraft.sciCompartments.forEach(compartment => {
                        this.classificationManager.addSCICompartment(compartment);
                    });
                }

                // Add release controls
                if (this.currentDraft.releaseControls) {
                    this.currentDraft.releaseControls.forEach(control => {
                        this.classificationManager.addReleaseControl(control);
                    });
                }

                // Add handling caveats
                if (this.currentDraft.handlingCaveats) {
                    this.currentDraft.handlingCaveats.forEach(caveat => {
                        this.classificationManager.addHandlingCaveat(caveat);
                    });
                }

                // Set release authority
                if (this.currentDraft.releaseAuthority) {
                    this.classificationManager.setReleaseAuthority(this.currentDraft.releaseAuthority);
                }
            }

            // Create a temporary container for ClassificationUI initialization
            // (required for internal state setup, but not displayed in header)
            const tempContainer = document.createElement('div');
            tempContainer.style.display = 'none';
            document.body.appendChild(tempContainer);

            await this.classificationUI.initialize(tempContainer);

            // Remove temp container after initialization
            document.body.removeChild(tempContainer);

            console.log('✅ Classification UI state initialized');
        } catch (error) {
            console.error('❌ Error initializing classification UI:', error);
        }
    }

    /**
     * Handle classification change
     * Updated for comprehensive DoD/IC classification system
     */
    handleClassificationChange(data) {
        // Update classification banner with full marking
        // Use getClassificationColor() without parameters to get current state
        // This ensures TS//SCI yellow logic works correctly
        const banner = document.querySelector('.classification-banner');
        if (banner) {
            banner.textContent = data.bannerText;
            banner.style.background = this.classificationManager.getClassificationColor();
            banner.style.color = this.classificationManager.getTextColor();
        }

        // Reduced logging: Only log if classification actually changed
        // (Prevents excessive logging from duplicate events)
        if (!this._lastClassification || this._lastClassification !== data.bannerText) {
            console.log('📋 Classification updated:', data.bannerText);
            this._lastClassification = data.bannerText;
        }

        // Update draft classification if draft exists (separated controls)
        if (this.currentDraft) {
            this.currentDraft.classification = data.level;
            this.currentDraft.disseminationControls = data.disseminationControls || [];
            this.currentDraft.sciCompartments = data.sciCompartments || [];
            this.currentDraft.releaseControls = data.releaseControls || [];
            this.currentDraft.handlingCaveats = data.handlingCaveats || [];
            this.currentDraft.releaseAuthority = data.releaseAuthority || '';

            // Trigger auto-save
            this.handleFieldChange();
        }
    }

    /**
     * Handle portion marking banner update (Phase 3)
     * Updates classification banner when portion markings change
     * This is triggered by PortionMarkingManager when overall classification is updated
     */
    handlePortionMarkingBannerUpdate(data) {
        // Get the current classification state from ClassificationManager
        // This includes the properly formatted banner text
        const currentClassification = this.classificationManager.getCurrentClassification();

        // Update classification banner with highest portion marking
        const banner = document.querySelector('.classification-banner');
        if (banner) {
            banner.textContent = currentClassification.bannerText;
            banner.style.background = this.classificationManager.getClassificationColor();
            banner.style.color = this.classificationManager.getTextColor();
        }

        // Reduced logging: Only log if banner actually changed
        // (Prevents excessive logging from duplicate events)
        if (!this._lastPortionMarkingBanner || this._lastPortionMarkingBanner !== currentClassification.bannerText) {
            console.log('📋 Portion marking banner updated:', currentClassification.bannerText, 'from portion marking:', data.portionMarking);
            this._lastPortionMarkingBanner = currentClassification.bannerText;
        }

        // Update draft classification if draft exists
        if (this.currentDraft) {
            this.currentDraft.classification = currentClassification.level;
            this.currentDraft.disseminationControls = currentClassification.disseminationControls || [];
            this.currentDraft.sciCompartments = currentClassification.sciCompartments || [];
            this.currentDraft.releaseControls = currentClassification.releaseControls || [];
            this.currentDraft.handlingCaveats = currentClassification.handlingCaveats || [];
            this.currentDraft.releaseAuthority = currentClassification.releaseAuthority || '';

            // Trigger auto-save
            this.handleFieldChange();
        }
    }

    /**
     * Display a validation error toast below the classification banner
     */
    showValidationError(error) {
        // Build message
        const msg = (error && (error.details || error.message)) || 'Classification validation error';

        // Find or create toast container
        let toast = document.getElementById('validation-error-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'validation-error-toast';
            toast.setAttribute('role', 'alert');
            toast.style.position = 'fixed';
            toast.style.top = '70px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.background = '#7f1d1d';
            toast.style.color = '#fee2e2';
            toast.style.border = '1px solid #ef4444';
            toast.style.padding = '10px 14px';
            toast.style.borderRadius = '8px';
            toast.style.boxShadow = '0 6px 16px rgba(0,0,0,0.4)';
            toast.style.zIndex = '9999';
            toast.style.maxWidth = '900px';
            toast.style.fontSize = '13px';
            document.body.appendChild(toast);
        }

        toast.textContent = `Validation Error: ${msg}`;
        toast.style.display = 'block';

        // Auto-hide after 7 seconds
        clearTimeout(this.__validationToastTimer);
        this.__validationToastTimer = setTimeout(() => {
            if (toast) toast.style.display = 'none';
        }, 7000);
    }

    /**
     * Initialize section components after rendering
     */
    async initializeSectionComponents() {
        // Initialize Situation section if container exists and section is expanded
        const situationContainer = document.getElementById('section-situation-container');
        if (situationContainer && this.expandedSections.has('situation')) {
            try {
                await this.situationSection.initialize(situationContainer);

                // Load current draft data into section
                if (this.currentDraft && this.currentDraft.content && this.currentDraft.content.situation) {
                    this.situationSection.setData(this.currentDraft.content.situation);
                }

                this.initializedSections.add('situation');
                console.log('✅ Situation section component initialized');
            } catch (error) {
                console.error('❌ Failed to initialize Situation section:', error);
            }
        }

        // Initialize Mission section if container exists and section is expanded
        const missionContainer = document.getElementById('section-mission-container');
        if (missionContainer && this.expandedSections.has('mission')) {
            try {
                await this.missionSection.initialize(missionContainer);

                // Load current draft data into section
                if (this.currentDraft && this.currentDraft.content && this.currentDraft.content.mission) {
                    this.missionSection.setData(this.currentDraft.content.mission);
                }

                this.initializedSections.add('mission');
                console.log('✅ Mission section component initialized');
            } catch (error) {
                console.error('❌ Failed to initialize Mission section:', error);
            }
        }

        // Initialize Execution section if container exists and section is expanded
        const executionContainer = document.getElementById('section-execution-container');
        if (executionContainer && this.expandedSections.has('execution')) {
            try {
                await this.executionSection.initialize(executionContainer);

                // Load current draft data into section
                if (this.currentDraft && this.currentDraft.content && this.currentDraft.content.execution) {
                    this.executionSection.setData(this.currentDraft.content.execution);
                }

                this.initializedSections.add('execution');
                console.log('✅ Execution section component initialized');
            } catch (error) {
                console.error('❌ Failed to initialize Execution section:', error);
            }
        }

        // Initialize Sustainment section if container exists and section is expanded
        const sustainmentContainer = document.getElementById('section-sustainment-container');
        if (sustainmentContainer && this.expandedSections.has('sustainment')) {
            try {
                await this.sustainmentSection.initialize(sustainmentContainer);

                // Load current draft data into section
                if (this.currentDraft && this.currentDraft.content && this.currentDraft.content.sustainment) {
                    this.sustainmentSection.setData(this.currentDraft.content.sustainment);
                }

                this.initializedSections.add('sustainment');
                console.log('✅ Sustainment section component initialized');
            } catch (error) {
                console.error('❌ Failed to initialize Sustainment section:', error);
            }
        }

        // Initialize Command and Control section if container exists and section is expanded
        const commandControlContainer = document.getElementById('section-command-control-container');
        if (commandControlContainer && this.expandedSections.has('command-control')) {
            try {
                await this.commandControlSection.initialize(commandControlContainer);

                // Load current draft data into section
                if (this.currentDraft && this.currentDraft.content && this.currentDraft.content['command-control']) {
                    this.commandControlSection.setData(this.currentDraft.content['command-control']);
                }

                this.initializedSections.add('commandControl');
                console.log('✅ Command and Control section component initialized');
            } catch (error) {
                console.error('❌ Failed to initialize Command and Control section:', error);
            }
        }
    }

    /**
     * Initialize a single section component on-demand
     * Called when a section is expanded for the first time
     */
    async initializeSectionComponent(sectionId) {
        // Check if already initialized
        if (this.initializedSections.has(sectionId)) {
            console.log(`⏭️ Skipping ${sectionId} - already initialized`);
            return;
        }

        console.log(`🔧 Initializing ${sectionId} section component...`);
        console.log(`   Current initializedSections:`, Array.from(this.initializedSections));

        try {
            switch (sectionId) {
                case 'situation': {
                    const container = document.getElementById('section-situation-container');
                    if (container) {
                        await this.situationSection.initialize(container);
                        if (this.currentDraft?.content?.situation) {
                            this.situationSection.setData(this.currentDraft.content.situation);
                        }
                        this.initializedSections.add('situation');
                        console.log('✅ Situation section component initialized');
                    }
                    break;
                }
                case 'mission': {
                    const container = document.getElementById('section-mission-container');
                    if (container) {
                        await this.missionSection.initialize(container);
                        if (this.currentDraft?.content?.mission) {
                            this.missionSection.setData(this.currentDraft.content.mission);
                        }
                        this.initializedSections.add('mission');
                        console.log('✅ Mission section component initialized');
                    }
                    break;
                }
                case 'execution': {
                    const container = document.getElementById('section-execution-container');
                    if (container) {
                        await this.executionSection.initialize(container);
                        if (this.currentDraft?.content?.execution) {
                            this.executionSection.setData(this.currentDraft.content.execution);
                        }
                        this.initializedSections.add('execution');
                        console.log('✅ Execution section component initialized');
                    }
                    break;
                }
                case 'sustainment': {
                    const container = document.getElementById('section-sustainment-container');
                    if (container) {
                        await this.sustainmentSection.initialize(container);
                        if (this.currentDraft?.content?.sustainment) {
                            this.sustainmentSection.setData(this.currentDraft.content.sustainment);
                        }
                        this.initializedSections.add('sustainment');
                        console.log('✅ Sustainment section component initialized');
                    }
                    break;
                }
                case 'commandControl': {
                    const container = document.getElementById('section-command-control-container');
                    if (container) {
                        await this.commandControlSection.initialize(container);
                        if (this.currentDraft?.content?.['command-control']) {
                            this.commandControlSection.setData(this.currentDraft.content['command-control']);
                        }
                        this.initializedSections.add('commandControl');
                        console.log('✅ Command and Control section component initialized');
                    }
                    break;
                }
                case 'annexes': {
                    const container = document.getElementById('section-annexes-container');
                    if (container) {
                        await this.annexesSection.initialize(container);
                        if (this.currentDraft?.content?.annexes) {
                            this.annexesSection.setData(this.currentDraft.content.annexes);
                        }
                        this.initializedSections.add('annexes');
                        console.log('✅ Annexes section component initialized');
                    }
                    break;
                }
                default:
                    console.warn(`⚠️ Unknown section: ${sectionId}`);
            }
        } catch (error) {
            console.error(`❌ Failed to initialize ${sectionId} section:`, error);
        }
    }

    /**
     * Toggle section expand/collapse
     * Directly manipulates DOM instead of full re-render to prevent re-initialization
     */
    async toggleSection(sectionId) {
        // Toggle expanded state
        const isExpanding = !this.expandedSections.has(sectionId);

        if (isExpanding) {
            this.expandedSections.add(sectionId);
        } else {
            this.expandedSections.delete(sectionId);
        }

        // Save state to localStorage
        this.saveExpandedSectionsState();

        // Find the section element
        const sectionElement = this.container.querySelector(`.opord-section[data-section="${sectionId}"]`);

        if (!sectionElement) {
            console.error(`❌ Section element not found: ${sectionId}`);
            return;
        }

        // Find the content and chevron elements
        const contentElement = sectionElement.querySelector('.section-content');
        const chevronElement = sectionElement.querySelector('.section-header i.fa-chevron-down, .section-header i.fa-chevron-up');

        if (!contentElement) {
            console.error(`❌ Content element not found: ${sectionId}`);
            return;
        }

        if (isExpanding) {
            // Expand section
            contentElement.style.display = 'block';

            // Change chevron from down to up
            if (chevronElement) {
                chevronElement.classList.remove('fa-chevron-down');
                chevronElement.classList.add('fa-chevron-up');
            }

            console.log(`📂 Expanded: ${sectionId}`);

            // Initialize section component if not already initialized
            if (!this.initializedSections.has(sectionId)) {
                await this.initializeSectionComponent(sectionId);
            }
        } else {
            // Collapse section
            contentElement.style.display = 'none';

            // Change chevron from up to down
            if (chevronElement) {
                chevronElement.classList.remove('fa-chevron-up');
                chevronElement.classList.add('fa-chevron-down');
            }

            console.log(`📁 Collapsed: ${sectionId}`);
        }
    }

    /**
     * Expand sections that have content
     * Used when applying templates to ensure content is visible
     * @param {Object} content - Content object with section data
     */
    expandSectionsWithContent(content) {
        if (!content) return;

        // List of section IDs to check
        const sectionIds = ['situation', 'mission', 'execution', 'sustainment', 'commandControl', 'annexes'];

        sectionIds.forEach(sectionId => {
            const sectionContent = content[sectionId];

            // Check if section has meaningful content
            const hasContent = sectionContent && (
                (typeof sectionContent === 'object' && Object.keys(sectionContent).length > 0) ||
                (typeof sectionContent === 'string' && sectionContent.trim().length > 0)
            );

            if (hasContent) {
                this.expandedSections.add(sectionId);
                console.log(`📂 Auto-expanding section with content: ${sectionId}`);
            }
        });

        // Save expanded sections state
        this.saveExpandedSectionsState();
    }

    /**
     * Load draft into tool
     * Re-renders the entire UI with the loaded draft data
     */
    async loadDraft(draft) {
        this.currentDraft = draft;

        // Reset handlers flag to allow re-attachment after re-render
        this.handlersAttached = false;

        // Re-render with new draft data
        this.render();

        // Re-attach event handlers and initialize section components
        await this.attachEventHandlers();

        console.log(`📂 Draft loaded into OPORD tool: ${draft.id}`);
    }

    /**
     * Show save notification
     */
    showSaveNotification(message) {
        const statusEl = document.getElementById('save-status');
        const textEl = document.getElementById('save-status-text');

        if (statusEl && textEl) {
            textEl.textContent = message;
            statusEl.style.display = 'block';

            setTimeout(() => {
                statusEl.style.display = 'none';
            }, 3000);
        }
    }

    /**
     * Handle field change (trigger debounced auto-save)
     */
    handleFieldChange() {
        // Mark as modified
        this.hasModifications = true;

        // Clear existing timer
        if (this.autoSaveDebounceTimer) {
            clearTimeout(this.autoSaveDebounceTimer);
        }

        // Set new timer
        this.autoSaveDebounceTimer = setTimeout(() => {
            this.autoSave();
        }, this.autoSaveDebounceDelay);
    }

    /**
     * Auto-save current draft
     */
    async autoSave() {
        if (!this.currentDraft) return;

        try {
            // Update draft with current form values
            this.updateDraftFromForm();

            // Mark as modified
            this.currentDraft.modified = true;

            // Emit save event
            this.eventBus.emit('draft:save', { draft: this.currentDraft });

            this.showSaveNotification('Auto-saving...');
        } catch (error) {
            console.error('❌ Auto-save failed:', error);
        }
    }

    /**
     * Update draft object from form values
     */
    updateDraftFromForm() {
        if (!this.currentDraft) return;

        // Update metadata
        const titleEl = document.getElementById('draft-title');
        const dtgEl = document.getElementById('draft-dtg');
        const classificationEl = document.getElementById('draft-classification');

        if (titleEl) this.currentDraft.metadata.title = titleEl.value;
        if (dtgEl) this.currentDraft.metadata.dtg = dtgEl.value;
        if (classificationEl) this.currentDraft.classification = classificationEl.value;

        // Update section content from section components
        if (this.situationSection && this.situationSection.initialized) {
            this.currentDraft.content.situation = this.situationSection.getData();
        }

        if (this.missionSection && this.missionSection.initialized) {
            this.currentDraft.content.mission = this.missionSection.getData();
        }

        if (this.executionSection && this.executionSection.initialized) {
            this.currentDraft.content.execution = this.executionSection.getData();
        }

        if (this.sustainmentSection && this.sustainmentSection.initialized) {
            this.currentDraft.content.sustainment = this.sustainmentSection.getData();
        }

        if (this.commandControlSection && this.commandControlSection.initialized) {
            this.currentDraft.content['command-control'] = this.commandControlSection.getData();
        }

        if (this.annexesSection && this.annexesSection.initialized) {
            this.currentDraft.content.annexes = this.annexesSection.getData();
        }

        // Update section content from textareas (for sections not yet implemented)
        document.querySelectorAll('.section-textarea').forEach(textarea => {
            const sectionId = textarea.dataset.section;
            try {
                this.currentDraft.content[sectionId] = JSON.parse(textarea.value);
            } catch (error) {
                // If JSON parse fails, store as string
                this.currentDraft.content[sectionId] = { text: textarea.value };
            }
        });
    }

    /**
     * Destroy the OPORD Draft Tool and clean up resources
     */
    destroy() {
        console.log('🗑️ Destroying OpordDraftTool...');

        // Destroy header components
        if (this.actionsDropdown) {
            this.actionsDropdown.destroy();
            this.actionsDropdown = null;
        }

        if (this.classificationPicker) {
            this.classificationPicker.destroy();
            this.classificationPicker = null;
        }

        if (this.dtgPicker) {
            this.dtgPicker.destroy();
            this.dtgPicker = null;
        }

        // Clean up keyboard shortcuts event listeners (Issue #1)
        if (this.keydownHandler) {
            document.removeEventListener('keydown', this.keydownHandler);
            this.keydownHandler = null;
        }
        if (this.focusHandler && this.container) {
            this.container.removeEventListener('focus', this.focusHandler, true);
            this.focusHandler = null;
        }
        if (this.blurHandler && this.container) {
            this.container.removeEventListener('blur', this.blurHandler, true);
            this.blurHandler = null;
        }

        // Clean up FAB tooltip (Issue #4)
        if (this.fabTooltipTimeout) {
            clearTimeout(this.fabTooltipTimeout);
            this.fabTooltipTimeout = null;
        }
        if (this.fabTooltip && this.fabTooltip.parentNode) {
            this.fabTooltip.remove();
            this.fabTooltip = null;
        }

        // Clean up keyboard hints (Issue #3)
        // Hints are now appended to document.body, so clean them up from there
        const allKeyboardHints = document.querySelectorAll('.keyboard-hint');
        allKeyboardHints.forEach(hint => {
            if (hint.parentNode) {
                hint.remove();
            }
        });

        // Also clear references on fields
        if (this.container) {
            const allFields = this.container.querySelectorAll('textarea, input');
            allFields.forEach(field => {
                if (field.keyboardHint) {
                    field.keyboardHint = null;
                }
            });
        }

        // Remove FAB with event listeners (Issue #2)
        if (this.fab) {
            this.fab.removeEventListener('click', this.fabClickHandler);
            this.fab.removeEventListener('mouseenter', this.fabMouseEnterHandler);
            this.fab.removeEventListener('mouseleave', this.fabMouseLeaveHandler);
            this.fab.remove();
            this.fab = null;
            this.fabClickHandler = null;
            this.fabMouseEnterHandler = null;
            this.fabMouseLeaveHandler = null;
        }

        // Remove focus tracking handlers
        if (this.focusTrackingHandler) {
            document.removeEventListener('focusin', this.focusTrackingHandler, true);
            this.focusTrackingHandler = null;
        }
        if (this.focusBlurHandler) {
            document.removeEventListener('focusout', this.focusBlurHandler, true);
            this.focusBlurHandler = null;
        }
        if (this.globalClickHandler) {
            document.removeEventListener('click', this.globalClickHandler);
            this.globalClickHandler = null;
        }
        if (this.portionMarkingCompleteHandler) {
            document.removeEventListener('portion-marking:workflow-complete', this.portionMarkingCompleteHandler);
            this.portionMarkingCompleteHandler = null;
        }
        if (this.sidebarToggleHandler) {
            this.eventBus.off('sidebar:toggled', this.sidebarToggleHandler);
            this.sidebarToggleHandler = null;
        }
        if (this.windowResizeHandler) {
            window.removeEventListener('resize', this.windowResizeHandler);
            this.windowResizeHandler = null;
        }
        if (this.resizeDebounceTimer) {
            clearTimeout(this.resizeDebounceTimer);
            this.resizeDebounceTimer = null;
        }

        // Clear last focused field reference
        this.lastFocusedField = null;

        // Destroy classification UI
        if (this.classificationUI) {
            this.classificationUI.destroy();
        }

        // Destroy section components
        if (this.situationSection) {
            this.situationSection.destroy();
        }
        if (this.missionSection) {
            this.missionSection.destroy();
        }
        if (this.executionSection) {
            this.executionSection.destroy();
        }
        if (this.sustainmentSection) {
            this.sustainmentSection.destroy();
        }
        if (this.commandControlSection) {
            this.commandControlSection.destroy();
        }
        if (this.annexesSection) {
            this.annexesSection.destroy();
        }

        // Clear container
        if (this.container) {
            this.container.innerHTML = '';
        }

        // Reset state
        this.initialized = false;
        this.handlersAttached = false;
        this.currentDraft = null;

        console.log('✅ OpordDraftTool destroyed');
    }

    // ========================================
    // FEATURE HANDLERS
    // ========================================

    /**
     * Collect all draft data from form and sections
     * @returns {Object} Complete draft object ready for saving
     */
    collectDraftData() {
        // Initialize currentDraft if it doesn't exist
        if (!this.currentDraft) {
            console.log('📝 Initializing new draft for data collection');
            this.currentDraft = {
                id: null, // Will be generated during save
                type: 'opord',
                metadata: {},
                content: {},
                created: new Date().toISOString(),
                version: 1,
                status: 'draft'
            };
        }

        // Update draft from form first
        this.updateDraftFromForm();

        // Add classification data
        const classificationData = this.classificationManager.getCurrentClassification();

        // Create complete draft object
        const draftData = {
            ...this.currentDraft,
            classification: classificationData.level,
            disseminationControls: classificationData.disseminationControls || [],
            sciCompartments: classificationData.sciCompartments || [],
            sapPrograms: classificationData.sapPrograms || [],
            releaseControls: classificationData.releaseControls || [],
            handlingCaveats: classificationData.handlingCaveats || [],
            releaseAuthority: classificationData.releaseAuthority || '',
            modified: new Date().toISOString()
        };

        return draftData;
    }

    /**
     * Handle Save Locally
     * Saves draft to browser storage (IndexedDB/FileSystem)
     */
    async handleSaveLocally() {
        console.log('💾 Saving draft locally...');

        try {
            // Show loading notification
            this.showSaveNotification('Saving draft...');

            // Collect all draft data
            const draftData = this.collectDraftData();
            if (!draftData) {
                throw new Error('Failed to collect draft data');
            }

            // Ensure draft has an ID
            if (!draftData.id) {
                draftData.id = this.generateDraftId();
                draftData.created = new Date().toISOString();
            }

            // Save to storage manager
            await this.draftManager.storageManager.saveDraft(draftData);

            // Update current draft reference
            this.currentDraft = draftData;

            // Update last saved state
            this.lastSavedState = JSON.stringify(draftData);
            this.hasModifications = false;

            // Show success notification
            this.showSaveNotification('✅ Draft saved successfully');

            console.log('✅ Draft saved locally:', draftData.id);

        } catch (error) {
            console.error('❌ Failed to save draft locally:', error);
            this.showSaveNotification('❌ Failed to save draft: ' + error.message);
        }
    }

    /**
     * Handle Save to File System
     * Saves draft to user's local file system using File System Access API
     */
    async handleSaveToFileSystem() {
        console.log('📁 Saving draft to file system...');

        try {
            // Show loading notification
            this.showSaveNotification('Saving to file system...');

            // Collect all draft data
            const draftData = this.collectDraftData();
            if (!draftData) {
                throw new Error('Failed to collect draft data');
            }

            // Ensure draft has an ID
            if (!draftData.id) {
                draftData.id = this.generateDraftId();
                draftData.created = new Date().toISOString();
            }

            // Generate suggested filename
            const title = draftData.title || 'Untitled';
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
            const suggestedFilename = `OPORD_Draft_${title}_${timestamp}.json`;

            // Save to file system
            const savedFilename = await this.draftManager.storageManager.saveDraftToFileSystem(
                draftData,
                suggestedFilename
            );

            if (savedFilename) {
                // Update current draft reference
                this.currentDraft = draftData;

                // Update last saved state
                this.lastSavedState = JSON.stringify(draftData);
                this.hasModifications = false;

                // Show success notification
                this.showSaveNotification(`✅ Saved to: ${savedFilename}`);

                console.log('✅ Draft saved to file system:', savedFilename);
            } else {
                // User cancelled
                this.showSaveNotification('ℹ️ Save cancelled');
            }

        } catch (error) {
            console.error('❌ Failed to save draft to file system:', error);

            // Show user-friendly error message
            let errorMessage = 'Failed to save to file system';
            if (error.message.includes('not supported')) {
                errorMessage = 'File System API not supported in this browser';
            } else if (error.message.includes('permission')) {
                errorMessage = 'Permission denied to access file system';
            }

            this.showSaveNotification(`❌ ${errorMessage}`);
        }
    }

    /**
     * Handle Save to Cloud (OneDrive)
     */
    async handleSaveToCloud() {
        console.log('☁️ Save to Cloud clicked');

        // Check if authenticated
        if (!this.isCloudAuthenticated()) {
            this.showCloudAuthModal();
            return;
        }

        try {
            this.showSaveNotification('Saving to cloud...');

            // Collect draft data
            const draftData = this.collectDraftData();
            if (!draftData) {
                throw new Error('Failed to collect draft data');
            }

            // Generate ID if needed
            if (!draftData.id) {
                draftData.id = this.generateDraftId();
                draftData.created = new Date().toISOString();
            }

            // Save to cloud storage (simulated with localStorage)
            await this.saveToCloudStorage(draftData);

            // Update current draft
            this.currentDraft = draftData;

            // Update last saved state
            this.lastSavedState = JSON.stringify(draftData);
            this.hasModifications = false;

            // Show success notification
            this.showSaveNotification('✅ Draft saved to cloud successfully');

            console.log('✅ Draft saved to cloud:', draftData.id);

        } catch (error) {
            console.error('❌ Failed to save to cloud:', error);
            this.showSaveNotification('❌ Failed to save to cloud: ' + error.message);
        }
    }

    /**
     * Check if user is authenticated for cloud storage
     * @returns {boolean} True if authenticated
     */
    isCloudAuthenticated() {
        const auth = localStorage.getItem('cloud_auth');
        if (!auth) return false;

        try {
            const authData = JSON.parse(auth);
            return authData.authenticated === true;
        } catch {
            return false;
        }
    }

    /**
     * Show cloud authentication modal
     */
    showCloudAuthModal() {
        const modal = new Modal({
            title: '☁️ Cloud Storage Authentication',
            content: `
                <div style="padding: 20px; color: #e2e8f0;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <i class="fas fa-cloud" style="font-size: 64px; color: #3b82f6; margin-bottom: 16px;"></i>
                        <h3 style="margin: 0 0 8px 0; color: #e2e8f0; font-size: 18px; font-weight: 600;">
                            Connect to Cloud Storage
                        </h3>
                        <p style="margin: 0; color: #9ca3af; font-size: 14px;">
                            Authenticate to save and load OPORDs from cloud storage
                        </p>
                    </div>

                    <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                        <h4 style="margin: 0 0 12px 0; color: #e2e8f0; font-size: 15px; font-weight: 600;">
                            <i class="fas fa-info-circle" style="color: #3b82f6; margin-right: 6px;"></i>
                            Simulated Cloud Storage
                        </h4>
                        <p style="margin: 0; color: #9ca3af; font-size: 13px; line-height: 1.5;">
                            This is a simulated cloud storage system for demonstration purposes.
                            In production, this would integrate with Microsoft OneDrive using MSAL OAuth2.
                        </p>
                    </div>

                    <div style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px;">
                        <label style="display: block; margin-bottom: 8px; color: #e2e8f0; font-size: 14px; font-weight: 600;">
                            User Email
                        </label>
                        <input id="cloud-email" type="email" placeholder="user@example.mil" style="width: 100%; padding: 10px; background: #111827; border: 1px solid #374151; border-radius: 6px; color: #e2e8f0; font-size: 14px;" value="demo@example.mil">
                    </div>
                </div>
            `,
            buttons: [
                {
                    label: 'Connect',
                    type: 'primary',
                    icon: 'fas fa-cloud',
                    onClick: () => {
                        const email = document.getElementById('cloud-email')?.value;
                        this.authenticateCloud(email);
                        modal.close();
                    }
                },
                {
                    label: 'Cancel',
                    type: 'secondary',
                    onClick: () => modal.close()
                }
            ]
        });

        modal.open();
    }

    /**
     * Authenticate cloud storage
     * @param {string} email - User email
     */
    authenticateCloud(email) {
        const authData = {
            authenticated: true,
            email: email || 'demo@example.mil',
            timestamp: new Date().toISOString()
        };

        localStorage.setItem('cloud_auth', JSON.stringify(authData));
        this.showSaveNotification('✅ Cloud authentication successful');

        // Retry save
        setTimeout(() => {
            this.handleSaveToCloud();
        }, 500);
    }

    /**
     * Save draft to cloud storage
     * @param {Object} draft - Draft data
     */
    async saveToCloudStorage(draft) {
        // Simulate cloud storage with localStorage prefix
        const cloudDrafts = JSON.parse(localStorage.getItem('cloud_opord_drafts') || '[]');

        // Check if draft already exists
        const existingIndex = cloudDrafts.findIndex(d => d.id === draft.id);

        if (existingIndex >= 0) {
            // Update existing
            cloudDrafts[existingIndex] = draft;
        } else {
            // Add new
            cloudDrafts.push(draft);
        }

        localStorage.setItem('cloud_opord_drafts', JSON.stringify(cloudDrafts));

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    /**
     * Generate unique draft ID
     * @returns {string} Unique draft ID
     */
    generateDraftId() {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2, 9);
        return `opord-${timestamp}-${random}`;
    }

    /**
     * Check if current draft has unsaved changes
     * @returns {boolean} True if there are unsaved changes
     */
    hasUnsavedChanges() {
        if (!this.currentDraft) return false;

        // If hasModifications flag is set, there are unsaved changes
        if (this.hasModifications) return true;

        // Compare current state with last saved state
        if (!this.lastSavedState) return true; // No saved state means unsaved

        try {
            const currentState = JSON.stringify(this.collectDraftData());
            return currentState !== this.lastSavedState;
        } catch (error) {
            console.error('Error checking unsaved changes:', error);
            return false;
        }
    }

    /**
     * Show unsaved changes warning modal
     * @param {Function} onSaveAndContinue - Callback for "Save and Continue"
     * @param {Function} onDiscardAndContinue - Callback for "Discard and Continue"
     * @returns {Modal} The warning modal
     */
    showUnsavedChangesWarning(onSaveAndContinue, onDiscardAndContinue) {
        const modal = new Modal({
            title: '⚠️ Unsaved Changes',
            content: `
                <div style="padding: 20px; color: #e2e8f0;">
                    <p style="margin-bottom: 16px; font-size: 15px;">
                        You have unsaved changes in the current draft. What would you like to do?
                    </p>
                    <div style="background: #1f2937; border: 1px solid #374151; border-radius: 6px; padding: 12px; margin-top: 12px;">
                        <p style="margin: 0; font-size: 13px; color: #9ca3af;">
                            <i class="fas fa-info-circle" style="color: #3b82f6; margin-right: 6px;"></i>
                            Unsaved changes will be lost if you discard them.
                        </p>
                    </div>
                </div>
            `,
            buttons: [
                {
                    label: 'Save and Continue',
                    type: 'primary',
                    icon: 'fas fa-save',
                    onClick: () => {
                        modal.close();
                        onSaveAndContinue();
                    }
                },
                {
                    label: 'Discard and Continue',
                    type: 'secondary',
                    icon: 'fas fa-trash',
                    onClick: () => {
                        modal.close();
                        onDiscardAndContinue();
                    }
                },
                {
                    label: 'Cancel',
                    type: 'secondary',
                    icon: 'fas fa-times',
                    onClick: () => {
                        modal.close();
                    }
                }
            ],
            closeOnOverlayClick: false,
            closeOnEscape: true
        });

        modal.open();
        return modal;
    }

    /**
     * Handle Load Draft
     * Opens modal to load saved drafts from local storage or cloud
     */
    async handleLoadDraft() {
        console.log('📂 Load Draft clicked');

        // Check for unsaved changes
        if (this.hasUnsavedChanges()) {
            this.showUnsavedChangesWarning(
                // Save and Continue
                async () => {
                    await this.handleSaveLocally();
                    this.showLoadModal();
                },
                // Discard and Continue
                () => {
                    this.hasModifications = false;
                    this.showLoadModal();
                }
            );
        } else {
            this.showLoadModal();
        }
    }

    /**
     * Handle Load from File System
     * Loads draft from user's local file system using File System Access API
     */
    async handleLoadFromFileSystem() {
        console.log('📁 Loading draft from file system...');

        try {
            // Show loading notification
            this.showSaveNotification('Opening file picker...');

            // Load from file system
            const draft = await this.draftManager.storageManager.loadDraftFromFileSystem();

            if (draft) {
                // Validate draft structure
                if (!draft.type || draft.type !== 'opord') {
                    throw new Error('Invalid OPORD draft file');
                }

                // Load draft into tool
                await this.loadDraft(draft);

                // Update last saved state
                this.lastSavedState = JSON.stringify(draft);
                this.hasModifications = false;

                // Show success notification
                this.showSaveNotification('✅ Draft loaded successfully');

                // Close any open modals
                document.querySelectorAll('.modal').forEach(modal => {
                    if (modal.style.display !== 'none') {
                        const closeBtn = modal.querySelector('.modal-close');
                        if (closeBtn) closeBtn.click();
                    }
                });

                console.log('✅ Draft loaded from file system:', draft.id);
            } else {
                // User cancelled
                this.showSaveNotification('ℹ️ Load cancelled');
            }

        } catch (error) {
            console.error('❌ Failed to load draft from file system:', error);

            // Show user-friendly error message
            let errorMessage = 'Failed to load from file system';
            if (error.message.includes('not supported')) {
                errorMessage = 'File System API not supported in this browser';
            } else if (error.message.includes('Invalid')) {
                errorMessage = 'Invalid OPORD draft file';
            } else if (error.message.includes('JSON')) {
                errorMessage = 'Invalid JSON format';
            }

            this.showSaveNotification(`❌ ${errorMessage}`);
        }
    }

    /**
     * Show load modal with draft list
     */
    async showLoadModal() {
        // Create modal content container
        const contentDiv = document.createElement('div');
        contentDiv.style.cssText = 'min-height: 400px; max-height: 600px; overflow-y: auto;';

        // Create tabs
        const tabsHTML = `
            <div style="display: flex; border-bottom: 2px solid #374151; margin-bottom: 20px;">
                <button id="load-tab-local" class="load-tab active" style="flex: 1; padding: 12px; background: #1f2937; color: #f8fafc; border: none; border-bottom: 3px solid #8b5cf6; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                    <i class="fas fa-hdd" style="margin-right: 6px;"></i>
                    Local Storage
                </button>
                <button id="load-tab-cloud" class="load-tab" style="flex: 1; padding: 12px; background: #1f2937; color: #6b7280; border: none; border-bottom: 3px solid transparent; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                    <i class="fas fa-cloud" style="margin-right: 6px;"></i>
                    Cloud Storage
                </button>
            </div>
            <div id="load-content-local" class="load-content" style="display: block;"></div>
            <div id="load-content-cloud" class="load-content" style="display: none;"></div>
        `;

        contentDiv.innerHTML = tabsHTML;

        // Add "Load from File System" button if supported
        if (this.draftManager.storageManager.isFileSystemAPISupported()) {
            const fileSystemButton = document.createElement('button');
            fileSystemButton.innerHTML = `
                <i class="fas fa-file-import" style="margin-right: 8px;"></i>
                Load from File System
            `;
            fileSystemButton.style.cssText = `
                width: 100%;
                padding: 12px 20px;
                background: #10b981;
                color: white;
                border: none;
                border-radius: 6px;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
                margin-bottom: 20px;
            `;
            fileSystemButton.addEventListener('mouseenter', () => {
                fileSystemButton.style.background = '#059669';
            });
            fileSystemButton.addEventListener('mouseleave', () => {
                fileSystemButton.style.background = '#10b981';
            });
            fileSystemButton.addEventListener('click', async () => {
                await this.handleLoadFromFileSystem();
            });

            // Insert button before tabs
            contentDiv.insertBefore(fileSystemButton, contentDiv.firstChild);
        }

        // Setup tab switching
        const localTab = contentDiv.querySelector('#load-tab-local');
        const cloudTab = contentDiv.querySelector('#load-tab-cloud');
        const localContent = contentDiv.querySelector('#load-content-local');
        const cloudContent = contentDiv.querySelector('#load-content-cloud');

        localTab.addEventListener('click', () => {
            localTab.style.color = '#f8fafc';
            localTab.style.borderBottomColor = '#8b5cf6';
            cloudTab.style.color = '#6b7280';
            cloudTab.style.borderBottomColor = 'transparent';
            localContent.style.display = 'block';
            cloudContent.style.display = 'none';
        });

        cloudTab.addEventListener('click', () => {
            cloudTab.style.color = '#f8fafc';
            cloudTab.style.borderBottomColor = '#8b5cf6';
            localTab.style.color = '#6b7280';
            localTab.style.borderBottomColor = 'transparent';
            cloudContent.style.display = 'block';
            localContent.style.display = 'none';
            // Load cloud drafts when tab is clicked
            this.loadCloudDraftsList(cloudContent);
        });

        // Create modal
        const modal = new Modal({
            title: '📂 Load OPORD Draft',
            content: contentDiv,
            buttons: [
                {
                    label: 'Close',
                    type: 'secondary',
                    onClick: () => modal.close()
                }
            ],
            closeOnOverlayClick: true,
            closeOnEscape: true
        });

        modal.open();

        // Load local drafts
        await this.loadLocalDraftsList(localContent);
    }

    /**
     * Load and display list of local drafts
     * @param {HTMLElement} container - Container element to render drafts list
     */
    async loadLocalDraftsList(container) {
        try {
            // Show loading state
            container.innerHTML = `
                <div style="padding: 40px; text-align: center; color: #9ca3af;">
                    <i class="fas fa-spinner fa-spin" style="font-size: 32px; margin-bottom: 12px;"></i>
                    <p>Loading drafts...</p>
                </div>
            `;

            // Get drafts from storage
            const drafts = await this.draftManager.storageManager.listDrafts({ type: 'opord' });

            // Sort by modified date (newest first)
            drafts.sort((a, b) => new Date(b.modified) - new Date(a.modified));

            if (drafts.length === 0) {
                container.innerHTML = `
                    <div style="padding: 40px; text-align: center; color: #6b7280;">
                        <i class="fas fa-folder-open" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;"></i>
                        <p style="font-size: 15px; margin-bottom: 8px;">No saved drafts found</p>
                        <p style="font-size: 13px; color: #9ca3af;">Create and save a draft to see it here.</p>
                    </div>
                `;
                return;
            }

            // Render drafts table
            const tableHTML = `
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; color: #e2e8f0;">
                        <thead>
                            <tr style="background: #1f2937; border-bottom: 2px solid #374151;">
                                <th style="padding: 12px; text-align: left; font-weight: 600; font-size: 13px; color: #9ca3af;">Operation Name</th>
                                <th style="padding: 12px; text-align: left; font-weight: 600; font-size: 13px; color: #9ca3af;">Date Saved</th>
                                <th style="padding: 12px; text-align: left; font-weight: 600; font-size: 13px; color: #9ca3af;">Classification</th>
                                <th style="padding: 12px; text-align: center; font-weight: 600; font-size: 13px; color: #9ca3af;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${drafts.map(draft => this.renderDraftRow(draft)).join('')}
                        </tbody>
                    </table>
                </div>
            `;

            container.innerHTML = tableHTML;

            // Attach event listeners using event delegation
            const rows = container.querySelectorAll('.draft-row');
            rows.forEach(row => {
                // Add hover effect
                row.addEventListener('mouseenter', () => {
                    row.style.background = '#1f2937';
                });
                row.addEventListener('mouseleave', () => {
                    row.style.background = 'transparent';
                });
            });

            // Attach button event listeners
            const loadBtns = container.querySelectorAll('.load-draft-btn');
            const deleteBtns = container.querySelectorAll('.delete-draft-btn');

            loadBtns.forEach(btn => {
                const draftId = btn.getAttribute('data-draft-id');
                // Add hover effect
                btn.addEventListener('mouseenter', () => {
                    btn.style.background = '#7c3aed';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.background = '#8b5cf6';
                });
                // Add click handler
                btn.addEventListener('click', () => this.loadSelectedDraft(draftId));
            });

            deleteBtns.forEach(btn => {
                const draftId = btn.getAttribute('data-draft-id');
                // Add hover effect
                btn.addEventListener('mouseenter', () => {
                    btn.style.background = '#dc2626';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.background = '#ef4444';
                });
                // Add click handler
                btn.addEventListener('click', () => this.deleteLocalDraft(draftId, container));
            });

        } catch (error) {
            console.error('❌ Failed to load drafts list:', error);
            container.innerHTML = `
                <div style="padding: 40px; text-align: center; color: #ef4444;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 32px; margin-bottom: 12px;"></i>
                    <p>Failed to load drafts: ${error.message}</p>
                </div>
            `;
        }
    }

    /**
     * Render a single draft row
     * @param {Object} draft - Draft object
     * @returns {string} HTML for draft row
     */
    renderDraftRow(draft) {
        const title = draft.metadata?.title || 'Untitled OPORD';
        const modified = new Date(draft.modified).toLocaleString();
        const classification = draft.classification || 'UNCLASSIFIED';

        // Get classification color
        const classColors = {
            'UNCLASSIFIED': '#007A33',
            'CUI': '#502B85',
            'CONFIDENTIAL': '#0033A0',
            'SECRET': '#C8102E',
            'TOP SECRET': '#FF671F'
        };
        const bgColor = classColors[classification] || '#6b7280';

        return `
            <tr class="draft-row" data-draft-id="${draft.id}" style="border-bottom: 1px solid #374151; transition: background 0.2s;">
                <td style="padding: 12px;">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px;">${title}</div>
                    <div style="font-size: 12px; color: #9ca3af;">ID: ${draft.id}</div>
                </td>
                <td style="padding: 12px; font-size: 13px; color: #9ca3af;">
                    ${modified}
                </td>
                <td style="padding: 12px;">
                    <span style="display: inline-block; padding: 4px 8px; background: ${bgColor}; color: white; border-radius: 4px; font-size: 11px; font-weight: 700;">
                        ${classification}
                    </span>
                </td>
                <td style="padding: 12px; text-align: center;">
                    <button class="load-draft-btn" data-draft-id="${draft.id}" style="background: #8b5cf6; color: white; padding: 6px 12px; border: none; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; margin-right: 6px; transition: all 0.2s;">
                        <i class="fas fa-folder-open" style="margin-right: 4px;"></i>
                        Load
                    </button>
                    <button class="delete-draft-btn" data-draft-id="${draft.id}" style="background: #ef4444; color: white; padding: 6px 12px; border: none; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                        <i class="fas fa-trash" style="margin-right: 4px;"></i>
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }

    /**
     * Load selected draft
     * @param {string} draftId - Draft ID to load
     */
    async loadSelectedDraft(draftId) {
        try {
            console.log('📂 Loading draft:', draftId);

            // Show loading notification
            this.showSaveNotification('Loading draft...');

            // Load draft from storage
            const draft = await this.draftManager.storageManager.loadDraft(draftId);

            if (!draft) {
                throw new Error('Draft not found');
            }

            // Load draft into tool
            await this.loadDraft(draft);

            // Update last saved state
            this.lastSavedState = JSON.stringify(draft);
            this.hasModifications = false;

            // Show success notification
            this.showSaveNotification('✅ Draft loaded successfully');

            // Close any open modals
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display !== 'none') {
                    const closeBtn = modal.querySelector('.modal-close');
                    if (closeBtn) closeBtn.click();
                }
            });

            console.log('✅ Draft loaded:', draftId);

        } catch (error) {
            console.error('❌ Failed to load draft:', error);
            this.showSaveNotification('❌ Failed to load draft: ' + error.message);
        }
    }

    /**
     * Delete local draft
     * @param {string} draftId - Draft ID to delete
     * @param {HTMLElement} container - Container to refresh after deletion
     */
    async deleteLocalDraft(draftId, container) {
        // Show confirmation dialog
        const confirmModal = new Modal({
            title: '⚠️ Confirm Deletion',
            content: `
                <div style="padding: 20px; color: #e2e8f0;">
                    <p style="margin-bottom: 16px; font-size: 15px;">
                        Are you sure you want to delete this draft?
                    </p>
                    <div style="background: #1f2937; border: 1px solid #374151; border-radius: 6px; padding: 12px;">
                        <p style="margin: 0; font-size: 13px; color: #9ca3af;">
                            <i class="fas fa-exclamation-triangle" style="color: #ef4444; margin-right: 6px;"></i>
                            This action cannot be undone.
                        </p>
                    </div>
                </div>
            `,
            buttons: [
                {
                    label: 'Delete',
                    type: 'primary',
                    icon: 'fas fa-trash',
                    onClick: async () => {
                        confirmModal.close();
                        await this.performDeleteDraft(draftId, container);
                    }
                },
                {
                    label: 'Cancel',
                    type: 'secondary',
                    onClick: () => confirmModal.close()
                }
            ]
        });

        confirmModal.open();
    }

    /**
     * Perform draft deletion
     * @param {string} draftId - Draft ID to delete
     * @param {HTMLElement} container - Container to refresh after deletion
     */
    async performDeleteDraft(draftId, container) {
        try {
            console.log('🗑️ Deleting draft:', draftId);

            // Delete from storage
            await this.draftManager.storageManager.deleteDraft(draftId);

            // Refresh drafts list
            await this.loadLocalDraftsList(container);

            // Show success notification
            this.showSaveNotification('✅ Draft deleted successfully');

            console.log('✅ Draft deleted:', draftId);

        } catch (error) {
            console.error('❌ Failed to delete draft:', error);
            this.showSaveNotification('❌ Failed to delete draft: ' + error.message);
        }
    }

    /**
     * Load and display list of cloud drafts
     * @param {HTMLElement} container - Container element to render drafts list
     */
    async loadCloudDraftsList(container) {
        try {
            // Check if authenticated
            if (!this.isCloudAuthenticated()) {
                container.innerHTML = `
                    <div style="padding: 40px; text-align: center; color: #9ca3af;">
                        <i class="fas fa-cloud" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;"></i>
                        <p style="font-size: 15px; margin-bottom: 16px;">Not connected to cloud storage</p>
                        <button id="cloud-auth-btn" style="background: #3b82f6; color: white; padding: 10px 20px; border: none; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            <i class="fas fa-cloud" style="margin-right: 6px;"></i>
                            Connect to Cloud
                        </button>
                    </div>
                `;

                // Add event listeners for auth button
                const authBtn = container.querySelector('#cloud-auth-btn');
                if (authBtn) {
                    authBtn.addEventListener('mouseenter', () => {
                        authBtn.style.background = '#2563eb';
                    });
                    authBtn.addEventListener('mouseleave', () => {
                        authBtn.style.background = '#3b82f6';
                    });
                    authBtn.addEventListener('click', () => {
                        this.showCloudAuthModal();
                    });
                }
                return;
            }

            // Show loading state
            container.innerHTML = `
                <div style="padding: 40px; text-align: center; color: #9ca3af;">
                    <i class="fas fa-spinner fa-spin" style="font-size: 32px; margin-bottom: 12px;"></i>
                    <p>Loading cloud drafts...</p>
                </div>
            `;

            // Load cloud drafts
            const cloudDrafts = JSON.parse(localStorage.getItem('cloud_opord_drafts') || '[]');

            if (cloudDrafts.length === 0) {
                container.innerHTML = `
                    <div style="padding: 40px; text-align: center; color: #9ca3af;">
                        <i class="fas fa-cloud" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;"></i>
                        <p style="font-size: 15px; margin-bottom: 8px;">No cloud drafts found</p>
                        <p style="font-size: 13px; color: #6b7280;">Save a draft to cloud storage to see it here.</p>
                    </div>
                `;
                return;
            }

            // Sort by modified date (newest first)
            cloudDrafts.sort((a, b) => new Date(b.modified) - new Date(a.modified));

            // Create drafts table
            const tableHTML = `
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="border-bottom: 2px solid #374151;">
                            <th style="padding: 12px; text-align: left; font-weight: 600; font-size: 13px; color: #9ca3af;">Title</th>
                            <th style="padding: 12px; text-align: left; font-weight: 600; font-size: 13px; color: #9ca3af;">Modified</th>
                            <th style="padding: 12px; text-align: left; font-weight: 600; font-size: 13px; color: #9ca3af;">Classification</th>
                            <th style="padding: 12px; text-align: center; font-weight: 600; font-size: 13px; color: #9ca3af;">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cloudDrafts.map(draft => this.createCloudDraftRow(draft)).join('')}
                    </tbody>
                </table>
            `;

            container.innerHTML = tableHTML;

            // Attach event listeners using event delegation
            const rows = container.querySelectorAll('.cloud-draft-row');
            rows.forEach(row => {
                // Add hover effect
                row.addEventListener('mouseenter', () => {
                    row.style.background = '#1f2937';
                });
                row.addEventListener('mouseleave', () => {
                    row.style.background = 'transparent';
                });
            });

            // Attach button event listeners
            const loadBtns = container.querySelectorAll('.load-cloud-draft-btn');
            const deleteBtns = container.querySelectorAll('.delete-cloud-draft-btn');

            loadBtns.forEach(btn => {
                const draftId = btn.getAttribute('data-draft-id');
                // Add hover effect
                btn.addEventListener('mouseenter', () => {
                    btn.style.background = '#7c3aed';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.background = '#8b5cf6';
                });
                // Add click handler
                btn.addEventListener('click', () => this.loadCloudDraft(draftId));
            });

            deleteBtns.forEach(btn => {
                const draftId = btn.getAttribute('data-draft-id');
                // Add hover effect
                btn.addEventListener('mouseenter', () => {
                    btn.style.background = '#dc2626';
                });
                btn.addEventListener('mouseleave', () => {
                    btn.style.background = '#ef4444';
                });
                // Add click handler
                btn.addEventListener('click', () => this.deleteCloudDraft(draftId, container));
            });

        } catch (error) {
            console.error('❌ Failed to load cloud drafts:', error);
            container.innerHTML = `
                <div style="padding: 40px; text-align: center; color: #ef4444;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 32px; margin-bottom: 12px;"></i>
                    <p>Failed to load cloud drafts</p>
                    <p style="font-size: 13px; margin-top: 8px; color: #9ca3af;">${error.message}</p>
                </div>
            `;
        }
    }

    /**
     * Create cloud draft row HTML
     * @param {Object} draft - Draft data
     * @returns {string} HTML string for draft row
     */
    createCloudDraftRow(draft) {
        const title = draft.metadata?.title || 'Untitled OPORD';
        const modified = new Date(draft.modified).toLocaleString();
        const classification = draft.classification || 'UNCLASSIFIED';

        // Get classification color
        const classColors = {
            'UNCLASSIFIED': '#007A33',
            'CUI': '#502B85',
            'CONFIDENTIAL': '#0033A0',
            'SECRET': '#C8102E',
            'TOP SECRET': '#FF671F'
        };
        const bgColor = classColors[classification] || '#6b7280';

        return `
            <tr class="cloud-draft-row" data-draft-id="${draft.id}" style="border-bottom: 1px solid #374151; transition: background 0.2s;">
                <td style="padding: 12px;">
                    <div style="font-weight: 600; font-size: 14px; margin-bottom: 4px;">
                        <i class="fas fa-cloud" style="color: #3b82f6; margin-right: 6px;"></i>
                        ${title}
                    </div>
                    <div style="font-size: 12px; color: #9ca3af;">ID: ${draft.id}</div>
                </td>
                <td style="padding: 12px; font-size: 13px; color: #9ca3af;">
                    ${modified}
                </td>
                <td style="padding: 12px;">
                    <span style="display: inline-block; padding: 4px 8px; background: ${bgColor}; color: white; border-radius: 4px; font-size: 11px; font-weight: 700;">
                        ${classification}
                    </span>
                </td>
                <td style="padding: 12px; text-align: center;">
                    <button class="load-cloud-draft-btn" data-draft-id="${draft.id}" style="background: #8b5cf6; color: white; padding: 6px 12px; border: none; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; margin-right: 6px; transition: all 0.2s;">
                        <i class="fas fa-cloud-download-alt" style="margin-right: 4px;"></i>
                        Load
                    </button>
                    <button class="delete-cloud-draft-btn" data-draft-id="${draft.id}" style="background: #ef4444; color: white; padding: 6px 12px; border: none; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                        <i class="fas fa-trash" style="margin-right: 4px;"></i>
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }

    /**
     * Load cloud draft
     * @param {string} draftId - Draft ID to load
     */
    async loadCloudDraft(draftId) {
        try {
            console.log('☁️ Loading cloud draft:', draftId);

            // Show loading notification
            this.showSaveNotification('Loading cloud draft...');

            // Load draft from cloud storage
            const cloudDrafts = JSON.parse(localStorage.getItem('cloud_opord_drafts') || '[]');
            const draft = cloudDrafts.find(d => d.id === draftId);

            if (!draft) {
                throw new Error('Cloud draft not found');
            }

            // Load draft into tool
            await this.loadDraft(draft);

            // Update last saved state
            this.lastSavedState = JSON.stringify(draft);
            this.hasModifications = false;

            // Show success notification
            this.showSaveNotification('✅ Cloud draft loaded successfully');

            // Close any open modals
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display !== 'none') {
                    const closeBtn = modal.querySelector('.modal-close');
                    if (closeBtn) closeBtn.click();
                }
            });

            console.log('✅ Cloud draft loaded:', draftId);

        } catch (error) {
            console.error('❌ Failed to load cloud draft:', error);
            this.showSaveNotification('❌ Failed to load cloud draft: ' + error.message);
        }
    }

    /**
     * Delete cloud draft
     * @param {string} draftId - Draft ID to delete
     * @param {HTMLElement} container - Container to refresh after deletion
     */
    async deleteCloudDraft(draftId, container) {
        // Show confirmation dialog
        const confirmModal = new Modal({
            title: '⚠️ Confirm Deletion',
            content: `
                <div style="padding: 20px; color: #e2e8f0;">
                    <p style="margin-bottom: 16px; font-size: 15px;">
                        Are you sure you want to delete this cloud draft?
                    </p>
                    <div style="background: #1f2937; border: 1px solid #374151; border-radius: 6px; padding: 12px;">
                        <p style="margin: 0; font-size: 13px; color: #9ca3af;">
                            <i class="fas fa-exclamation-triangle" style="color: #f59e0b; margin-right: 6px;"></i>
                            This action cannot be undone.
                        </p>
                    </div>
                </div>
            `,
            buttons: [
                {
                    label: 'Delete',
                    type: 'danger',
                    onClick: () => {
                        this.performDeleteCloudDraft(draftId, container);
                        confirmModal.close();
                    }
                },
                {
                    label: 'Cancel',
                    type: 'secondary',
                    onClick: () => confirmModal.close()
                }
            ]
        });

        confirmModal.open();
    }

    /**
     * Perform cloud draft deletion
     * @param {string} draftId - Draft ID to delete
     * @param {HTMLElement} container - Container to refresh after deletion
     */
    async performDeleteCloudDraft(draftId, container) {
        try {
            console.log('🗑️ Deleting cloud draft:', draftId);

            // Delete from cloud storage
            const cloudDrafts = JSON.parse(localStorage.getItem('cloud_opord_drafts') || '[]');
            const filteredDrafts = cloudDrafts.filter(d => d.id !== draftId);
            localStorage.setItem('cloud_opord_drafts', JSON.stringify(filteredDrafts));

            // Refresh cloud drafts list
            await this.loadCloudDraftsList(container);

            // Show success notification
            this.showSaveNotification('✅ Cloud draft deleted successfully');

            console.log('✅ Cloud draft deleted:', draftId);

        } catch (error) {
            console.error('❌ Failed to delete cloud draft:', error);
            this.showSaveNotification('❌ Failed to delete cloud draft: ' + error.message);
        }
    }

    /**
     * Check if current draft has any content
     * @returns {boolean} True if draft has content
     */
    hasContent() {
        if (!this.currentDraft) return false;

        // Check title
        const titleEl = document.getElementById('draft-title');
        if (titleEl && titleEl.value.trim()) return true;

        // Check all sections for content
        const sections = [
            this.situationSection,
            this.missionSection,
            this.executionSection,
            this.sustainmentSection,
            this.commandControlSection,
            this.annexesSection
        ];

        for (const section of sections) {
            if (section && section.initialized) {
                const data = section.getData();
                // Check if section has any non-empty values
                if (data && typeof data === 'object') {
                    const hasData = Object.values(data).some(value => {
                        if (typeof value === 'string') return value.trim() !== '';
                        if (typeof value === 'object' && value !== null) {
                            return Object.values(value).some(v =>
                                typeof v === 'string' ? v.trim() !== '' : !!v
                            );
                        }
                        return !!value;
                    });
                    if (hasData) return true;
                }
            }
        }

        return false;
    }

    /**
     * Handle New OPORD
     * Creates a new blank OPORD draft
     */
    async handleNewDraft() {
        console.log('📄 New OPORD clicked');

        // Check if current draft has content
        if (this.hasContent()) {
            this.showUnsavedChangesWarning(
                // Save and Continue
                async () => {
                    await this.handleSaveLocally();
                    this.createNewDraft();
                },
                // Discard and Continue
                () => {
                    this.createNewDraft();
                }
            );
        } else {
            this.createNewDraft();
        }
    }

    /**
     * Create new blank OPORD draft
     */
    createNewDraft() {
        console.log('📄 Creating new OPORD draft...');

        try {
            // Clear title
            const titleEl = document.getElementById('draft-title');
            if (titleEl) titleEl.value = '';

            // Reset DTG to current date/time
            const dtgEl = document.getElementById('draft-dtg');
            if (dtgEl) {
                const newDTG = DTGFormatter.now();
                dtgEl.value = newDTG;
                if (this.dtgPicker) {
                    this.dtgPicker.selectedDate = DTGFormatter.parse(newDTG) || new Date();
                }
            }

            // Reset classification to UNCLASSIFIED
            this.classificationManager.resetClassification();
            this.updateClassificationButton();

            // Clear portion markings
            this.portionMarkingManager.clearAll();

            // Emit event to notify sections to reset
            this.eventBus.emit('draft:new', {
                timestamp: new Date().toISOString()
            });

            // Reset all sections
            const sections = [
                this.situationSection,
                this.missionSection,
                this.executionSection,
                this.sustainmentSection,
                this.commandControlSection,
                this.annexesSection
            ];

            sections.forEach(section => {
                if (section && section.initialized) {
                    // Clear section data
                    if (typeof section.clearData === 'function') {
                        section.clearData();
                    } else {
                        // Manually clear fields
                        const container = section.container;
                        if (container) {
                            container.querySelectorAll('input, textarea, select').forEach(field => {
                                if (field.type === 'checkbox' || field.type === 'radio') {
                                    field.checked = false;
                                } else {
                                    field.value = '';
                                }
                            });
                        }
                    }
                }
            });

            // Create new draft object
            this.currentDraft = {
                id: this.generateDraftId(),
                type: 'opord',
                classification: 'UNCLASSIFIED',
                disseminationControls: [],
                sciCompartments: [],
                sapPrograms: [],
                releaseControls: [],
                handlingCaveats: [],
                releaseAuthority: '',
                metadata: {
                    title: '',
                    author: 'Unknown',
                    unit: '',
                    dtg: DTGFormatter.now()
                },
                content: {
                    situation: {},
                    mission: {},
                    execution: {},
                    sustainment: {},
                    'command-control': {},
                    annexes: {}
                },
                created: new Date().toISOString(),
                modified: new Date().toISOString(),
                version: 1,
                status: 'draft'
            };

            // Reset tracking flags
            this.lastSavedState = null;
            this.hasModifications = false;

            // Show success notification
            this.showSaveNotification('✅ New OPORD created');

            console.log('✅ New OPORD draft created');

        } catch (error) {
            console.error('❌ Failed to create new OPORD:', error);
            this.showSaveNotification('❌ Failed to create new OPORD: ' + error.message);
        }
    }

    /**
     * Handle Use Template
     * Opens template selection modal
     */
    async handleUseTemplate() {
        console.log('📋 Templates clicked');

        // Check if current draft has content
        if (this.hasContent()) {
            this.showUnsavedChangesWarning(
                // Save and Continue
                async () => {
                    await this.handleSaveLocally();
                    this.showTemplateModal();
                },
                // Discard and Continue
                () => {
                    this.showTemplateModal();
                }
            );
        } else {
            this.showTemplateModal();
        }
    }

    /**
     * Show template selection modal
     */
    showTemplateModal() {
        const modal = new Modal({
            title: '📋 OPORD Templates',
            content: this.createTemplateModalContent(),
            showFooter: false,
            onOpen: () => {
                // Apply width styles to .modal-content element to override CSS constraints
                const modalContent = document.querySelector('.modal-content');
                if (modalContent) {
                    modalContent.style.setProperty('max-width', '1100px', 'important');
                    modalContent.style.setProperty('width', '100%', 'important');
                }
                this.initializeTemplateModal();
            }
        });

        modal.open();
    }

    /**
     * Create template modal content
     * @returns {string} HTML content
     */
    createTemplateModalContent() {
        return `
            <div>
                <!-- Tabs -->
                <div style="display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 2px solid #374151;">
                    <button id="template-tab-doctrinal" class="template-tab active" data-tab="doctrinal" style="padding: 12px 24px; background: transparent; border: none; color: #9ca3af; font-weight: 600; font-size: 14px; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.2s;">
                        <i class="fas fa-book" style="margin-right: 6px;"></i>
                        Doctrinal Templates
                    </button>
                    <button id="template-tab-custom" class="template-tab" data-tab="custom" style="padding: 12px 24px; background: transparent; border: none; color: #9ca3af; font-weight: 600; font-size: 14px; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.2s;">
                        <i class="fas fa-user" style="margin-right: 6px;"></i>
                        Custom Templates
                    </button>
                </div>

                <!-- Tab Content -->
                <div id="template-content-doctrinal" class="template-content" style="display: block;">
                    <div id="doctrinal-templates-list"></div>
                </div>

                <div id="template-content-custom" class="template-content" style="display: none;">
                    <div style="margin-bottom: 20px;">
                        <button id="save-as-template-btn" style="background: #8b5cf6; color: white; padding: 10px 20px; border: none; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            <i class="fas fa-save" style="margin-right: 6px;"></i>
                            Save Current as Template
                        </button>
                    </div>
                    <div id="custom-templates-list"></div>
                </div>
            </div>
        `;
    }

    /**
     * Initialize template modal
     */
    initializeTemplateModal() {
        // Tab switching
        document.querySelectorAll('.template-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.currentTarget.dataset.tab;

                // Update tab styles
                document.querySelectorAll('.template-tab').forEach(t => {
                    t.classList.remove('active');
                    t.style.color = '#9ca3af';
                    t.style.borderBottomColor = 'transparent';
                });
                e.currentTarget.classList.add('active');
                e.currentTarget.style.color = '#8b5cf6';
                e.currentTarget.style.borderBottomColor = '#8b5cf6';

                // Show/hide content
                document.querySelectorAll('.template-content').forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById(`template-content-${tabName}`).style.display = 'block';

                // Re-render templates when switching tabs to ensure they persist
                if (tabName === 'doctrinal') {
                    this.loadDoctrinalTemplates();
                } else if (tabName === 'custom') {
                    this.loadCustomTemplates();
                }
            });
        });

        // Load doctrinal templates initially
        this.loadDoctrinalTemplates();

        // Load custom templates initially
        this.loadCustomTemplates();

        // Save as template button
        const saveBtn = document.getElementById('save-as-template-btn');
        if (saveBtn) {
            saveBtn.addEventListener('mouseenter', () => {
                saveBtn.style.background = '#7c3aed';
            });
            saveBtn.addEventListener('mouseleave', () => {
                saveBtn.style.background = '#8b5cf6';
            });
            saveBtn.addEventListener('click', () => this.saveAsTemplate());
        }
    }

    /**
     * Load doctrinal templates
     */
    loadDoctrinalTemplates() {
        const container = document.getElementById('doctrinal-templates-list');
        if (!container) return;

        const templates = this.templates.getAllTemplates();

        // Filter for doctrinal templates (generic ones)
        const doctrinalTemplates = templates.filter(t =>
            ['blank', 'offensive', 'defensive', 'reconnaissance', 'security'].includes(t.id)
        );

        const html = `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;">
                ${doctrinalTemplates.map(template => this.renderTemplateCard(template)).join('')}
            </div>
        `;

        container.innerHTML = html;

        // Attach event listeners using event delegation
        const cards = container.querySelectorAll('.template-card');
        cards.forEach(card => {
            // Add hover effect to card
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = '#8b5cf6';
            });
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = '#374151';
            });
        });

        // Attach button event listeners
        const btns = container.querySelectorAll('.apply-template-btn');
        btns.forEach(btn => {
            const templateId = btn.getAttribute('data-template-id');
            // Add hover effect
            btn.addEventListener('mouseenter', () => {
                btn.style.background = '#7c3aed';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.background = '#8b5cf6';
            });
            // Add click handler
            btn.addEventListener('click', () => this.applyTemplate(templateId));
        });
    }

    /**
     * Render template card
     * @param {Object} template - Template object
     * @returns {string} HTML for template card
     */
    renderTemplateCard(template) {
        const typeColors = {
            'Generic': '#6b7280',
            'Offensive': '#dc2626',
            'Defensive': '#2563eb',
            'Reconnaissance': '#16a34a',
            'Security': '#f59e0b'
        };
        const bgColor = typeColors[template.operationType] || '#6b7280';

        return `
            <div class="template-card" data-template-id="${template.id}" style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; transition: all 0.2s;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                    <h4 style="margin: 0; color: #e2e8f0; font-size: 15px; font-weight: 600;">${template.name}</h4>
                    <span style="display: inline-block; padding: 3px 8px; background: ${bgColor}; color: white; border-radius: 4px; font-size: 10px; font-weight: 700;">
                        ${template.operationType}
                    </span>
                </div>
                <p style="margin: 0 0 12px 0; color: #9ca3af; font-size: 13px; line-height: 1.5;">
                    ${template.description}
                </p>
                <button class="apply-template-btn" data-template-id="${template.id}" style="width: 100%; background: #8b5cf6; color: white; padding: 8px 16px; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                    <i class="fas fa-check" style="margin-right: 6px;"></i>
                    Apply Template
                </button>
            </div>
        `;
    }

    /**
     * Apply template
     * @param {string} templateId - Template ID to apply
     * @param {boolean} isCustom - Whether this is a custom template
     */
    async applyTemplate(templateId, isCustom = false) {
        try {
            console.log('📋 Applying template:', templateId);

            let templateData;

            if (isCustom) {
                // Load from localStorage
                const customTemplates = JSON.parse(localStorage.getItem('opord_custom_templates') || '[]');
                templateData = customTemplates.find(t => t.id === templateId);
            } else {
                // Load from OpordTemplates
                templateData = this.templates.getTemplate(templateId);
            }

            if (!templateData) {
                throw new Error('Template not found');
            }

            // Initialize currentDraft if it doesn't exist
            if (!this.currentDraft) {
                console.log('📝 Initializing new draft for template application');
                this.currentDraft = {
                    id: this.generateDraftId(), // Generated on template application
                    type: 'opord',
                    classification: 'UNCLASSIFIED',
                    disseminationControls: [],
                    sciCompartments: [],
                    sapPrograms: [],
                    releaseControls: [],
                    handlingCaveats: [],
                    releaseAuthority: '',
                    metadata: {
                        title: '',
                        dtg: '',
                        references: '',
                        timezone: 'Z'
                    },
                    content: {
                        situation: {},
                        mission: {},
                        execution: {},
                        sustainment: {},
                        'command-control': {},
                        annexes: {}
                    },
                    created: new Date().toISOString(),
                    modified: new Date().toISOString(),
                    version: 1,
                    status: 'draft'
                };
            }

            // Ensure draft has an ID (safety in case an existing draft lacked one)
            if (!this.currentDraft.id) {
                this.currentDraft.id = this.generateDraftId();
                if (!this.currentDraft.created) this.currentDraft.created = new Date().toISOString();
            }


            // Apply template data to current draft
            if (templateData.metadata) {
                const titleEl = document.getElementById('draft-title');
                if (titleEl && templateData.metadata.title) {
                    titleEl.value = templateData.metadata.title;
                }

                const dtgEl = document.getElementById('draft-dtg');
                if (dtgEl && templateData.metadata.dtg) {
                    dtgEl.value = templateData.metadata.dtg;
                }
            }

            // Apply classification
            if (templateData.classification) {
                this.classificationManager.setClassificationLevel(templateData.classification);
                this.updateClassificationButton();
            }

            // Apply content to sections
            if (templateData.content) {
                // Update current draft
                this.currentDraft.content = { ...templateData.content };

                // Expand all sections that have content from the template
                this.expandSectionsWithContent(templateData.content);

                // Reload sections with template data
                await this.loadDraft({
                    ...this.currentDraft,
                    content: templateData.content
                });
            }

            // Close modal
            document.querySelectorAll('.modal').forEach(modal => {
                if (modal.style.display !== 'none') {
                    const closeBtn = modal.querySelector('.modal-close');
                    if (closeBtn) closeBtn.click();
                }
            });

            // Show success notification
            this.showSaveNotification('✅ Template applied successfully');

            console.log('✅ Template applied:', templateId);

        } catch (error) {
            console.error('❌ Failed to apply template:', error);
            this.showSaveNotification('❌ Failed to apply template: ' + error.message);
        }
    }

    /**
     * Load custom templates
     */
    loadCustomTemplates() {
        const container = document.getElementById('custom-templates-list');
        if (!container) return;

        const customTemplates = JSON.parse(localStorage.getItem('opord_custom_templates') || '[]');

        if (customTemplates.length === 0) {
            container.innerHTML = `
                <div style="padding: 40px; text-align: center; color: #6b7280;">
                    <i class="fas fa-folder-open" style="font-size: 48px; margin-bottom: 16px; opacity: 0.3;"></i>
                    <p style="font-size: 15px; margin-bottom: 8px;">No custom templates found</p>
                    <p style="font-size: 13px; color: #9ca3af;">Save your current OPORD as a template to see it here.</p>
                </div>
            `;
            return;
        }

        const html = `
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;">
                ${customTemplates.map(template => this.renderCustomTemplateCard(template)).join('')}
            </div>
        `;

        container.innerHTML = html;

        // Attach event listeners using event delegation
        const cards = container.querySelectorAll('.custom-template-card');
        cards.forEach(card => {
            // Add hover effect to card
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = '#8b5cf6';
            });
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = '#374151';
            });
        });

        // Attach button event listeners
        const applyBtns = container.querySelectorAll('.apply-custom-template-btn');
        const deleteBtns = container.querySelectorAll('.delete-custom-template-btn');

        applyBtns.forEach(btn => {
            const templateId = btn.getAttribute('data-template-id');
            // Add hover effect
            btn.addEventListener('mouseenter', () => {
                btn.style.background = '#7c3aed';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.background = '#8b5cf6';
            });
            // Add click handler
            btn.addEventListener('click', () => this.applyTemplate(templateId, true));
        });

        deleteBtns.forEach(btn => {
            const templateId = btn.getAttribute('data-template-id');
            // Add hover effect
            btn.addEventListener('mouseenter', () => {
                btn.style.background = '#dc2626';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.background = '#ef4444';
            });
            // Add click handler
            btn.addEventListener('click', () => this.deleteCustomTemplate(templateId));
        });
    }

    /**
     * Render custom template card
     * @param {Object} template - Template object
     * @returns {string} HTML for template card
     */
    renderCustomTemplateCard(template) {
        const created = new Date(template.created).toLocaleDateString();

        return `
            <div class="custom-template-card" data-template-id="${template.id}" style="background: #1f2937; border: 1px solid #374151; border-radius: 8px; padding: 16px; transition: all 0.2s;">
                <div style="margin-bottom: 12px;">
                    <h4 style="margin: 0 0 4px 0; color: #e2e8f0; font-size: 15px; font-weight: 600;">${template.name}</h4>
                    <p style="margin: 0; color: #9ca3af; font-size: 12px;">Created: ${created}</p>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="apply-custom-template-btn" data-template-id="${template.id}" style="flex: 1; background: #8b5cf6; color: white; padding: 8px 16px; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                        <i class="fas fa-check" style="margin-right: 6px;"></i>
                        Apply
                    </button>
                    <button class="delete-custom-template-btn" data-template-id="${template.id}" style="background: #ef4444; color: white; padding: 8px 12px; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }

    /**
     * Save current draft as template
     */
    async saveAsTemplate() {
        // Prompt for template name
        const name = prompt('Enter template name:');
        if (!name || !name.trim()) return;

        try {
            console.log('💾 Saving as template:', name);

            // Collect current draft data
            const draftData = this.collectDraftData();
            if (!draftData) {
                throw new Error('Failed to collect draft data');
            }

            // Create template object
            const template = {
                id: `custom-${Date.now()}`,
                name: name.trim(),
                created: new Date().toISOString(),
                metadata: draftData.metadata,
                classification: draftData.classification,
                content: draftData.content
            };

            // Save to localStorage
            const customTemplates = JSON.parse(localStorage.getItem('opord_custom_templates') || '[]');
            customTemplates.push(template);
            localStorage.setItem('opord_custom_templates', JSON.stringify(customTemplates));

            // Reload custom templates list
            this.loadCustomTemplates();

            // Show success notification
            this.showSaveNotification('✅ Template saved successfully');

            console.log('✅ Template saved:', template.id);

        } catch (error) {
            console.error('❌ Failed to save template:', error);
            this.showSaveNotification('❌ Failed to save template: ' + error.message);
        }
    }

    /**
     * Delete custom template
     * @param {string} templateId - Template ID to delete
     */
    async deleteCustomTemplate(templateId) {
        const confirmModal = new Modal({
            title: '⚠️ Confirm Deletion',
            content: `
                <div style="padding: 20px; color: #e2e8f0;">
                    <p style="margin-bottom: 16px; font-size: 15px;">
                        Are you sure you want to delete this template?
                    </p>
                    <div style="background: #1f2937; border: 1px solid #374151; border-radius: 6px; padding: 12px;">
                        <p style="margin: 0; font-size: 13px; color: #9ca3af;">
                            <i class="fas fa-exclamation-triangle" style="color: #ef4444; margin-right: 6px;"></i>
                            This action cannot be undone.
                        </p>
                    </div>
                </div>
            `,
            buttons: [
                {
                    label: 'Delete',
                    type: 'primary',
                    icon: 'fas fa-trash',
                    onClick: async () => {
                        confirmModal.close();
                        await this.performDeleteCustomTemplate(templateId);
                    }
                },
                {
                    label: 'Cancel',
                    type: 'secondary',
                    onClick: () => confirmModal.close()
                }
            ]
        });

        confirmModal.open();
    }

    /**
     * Perform custom template deletion
     * @param {string} templateId - Template ID to delete
     */
    async performDeleteCustomTemplate(templateId) {
        try {
            console.log('🗑️ Deleting template:', templateId);

            // Load templates
            const customTemplates = JSON.parse(localStorage.getItem('opord_custom_templates') || '[]');

            // Filter out deleted template
            const updatedTemplates = customTemplates.filter(t => t.id !== templateId);

            // Save back to localStorage
            localStorage.setItem('opord_custom_templates', JSON.stringify(updatedTemplates));

            // Reload custom templates list
            this.loadCustomTemplates();

            // Show success notification
            this.showSaveNotification('✅ Template deleted successfully');

            console.log('✅ Template deleted:', templateId);

        } catch (error) {
            console.error('❌ Failed to delete template:', error);
            this.showSaveNotification('❌ Failed to delete template: ' + error.message);
        }
    }

    /**
     * Handle Validate Draft
     * Opens validation modal with results and export preview
     */
    async handleValidateDraft() {
        console.log('✅ Validate Draft clicked');

        // Run validation
        const validationResults = this.validateDraft();

        // Show validation modal
        this.showValidationModal(validationResults);
    }

    /**
     * Validate draft
     * @returns {Object} Validation results
     */
    validateDraft() {
        const results = {
            passed: 0,
            failed: 0,
            warnings: 0,
            checks: []
        };

        // Update draft from form
        this.updateDraftFromForm();

        // 1. Mission Statement Validation
        const missionCheck = this.validateMissionStatement();
        results.checks.push(missionCheck);
        if (missionCheck.status === 'pass') results.passed++;
        else if (missionCheck.status === 'fail') results.failed++;
        else results.warnings++;

        // 2. Commander's Intent Validation
        const intentCheck = this.validateCommandersIntent();
        results.checks.push(intentCheck);
        if (intentCheck.status === 'pass') results.passed++;
        else if (intentCheck.status === 'fail') results.failed++;
        else results.warnings++;

        // 3. Classification Consistency
        const classCheck = this.validateClassification();
        results.checks.push(classCheck);
        if (classCheck.status === 'pass') results.passed++;
        else if (classCheck.status === 'fail') results.failed++;
        else results.warnings++;

        // 4. DTG Format Validation
        const dtgCheck = this.validateDTG();
        results.checks.push(dtgCheck);
        if (dtgCheck.status === 'pass') results.passed++;
        else if (dtgCheck.status === 'fail') results.failed++;
        else results.warnings++;

        // 5. Military Terminology Check
        const termCheck = this.validateTerminology();
        results.checks.push(termCheck);
        if (termCheck.status === 'pass') results.passed++;
        else if (termCheck.status === 'fail') results.failed++;
        else results.warnings++;

        return results;
    }

    /**
     * Validate mission statement
     * @returns {Object} Validation check result
     */
    validateMissionStatement() {
        const mission = this.currentDraft?.content?.mission || {};
        const issues = [];

        if (!mission.who || !mission.who.trim()) issues.push('Missing "Who" (unit)');
        if (!mission.what || !mission.what.trim()) issues.push('Missing "What" (task)');
        if (!mission.when || !mission.when.trim()) issues.push('Missing "When" (time)');
        if (!mission.where || !mission.where.trim()) issues.push('Missing "Where" (location)');
        if (!mission.why || !mission.why.trim()) issues.push('Missing "Why" (purpose)');

        return {
            name: 'Mission Statement',
            status: issues.length === 0 ? 'pass' : issues.length <= 2 ? 'warning' : 'fail',
            message: issues.length === 0
                ? 'Mission statement is complete with all 5 elements (Who, What, When, Where, Why)'
                : `Mission statement incomplete: ${issues.join(', ')}`,
            details: issues
        };
    }

    /**
     * Validate commander's intent
     * @returns {Object} Validation check result
     */
    validateCommandersIntent() {
        const execution = this.currentDraft?.content?.execution || {};
        const issues = [];

        if (!execution.intentPurpose || !execution.intentPurpose.trim()) {
            issues.push('Missing Purpose');
        }
        if (!execution.intentMethod || !execution.intentMethod.trim()) {
            issues.push('Missing Method');
        }
        if (!execution.intentEndState || !execution.intentEndState.trim()) {
            issues.push('Missing End State');
        }

        return {
            name: "Commander's Intent",
            status: issues.length === 0 ? 'pass' : issues.length === 1 ? 'warning' : 'fail',
            message: issues.length === 0
                ? "Commander's intent is complete with Purpose, Method, and End State"
                : `Commander's intent incomplete: ${issues.join(', ')}`,
            details: issues
        };
    }

    /**
     * Validate classification
     * @returns {Object} Validation check result
     */
    validateClassification() {
        const classification = this.classificationManager.getCurrentClassification();
        const issues = [];

        // Check if classification level is set
        if (!classification.level || classification.level === 'UNCLASSIFIED') {
            return {
                name: 'Classification Consistency',
                status: 'pass',
                message: 'OPORD is UNCLASSIFIED - no classification issues',
                details: []
            };
        }

        // Check for portion markings consistency
        const portionMarkings = this.portionMarkingManager.getAllMarkings();
        if (portionMarkings.length === 0) {
            issues.push('No portion markings found - classified content should have portion markings');
        }

        return {
            name: 'Classification Consistency',
            status: issues.length === 0 ? 'pass' : 'warning',
            message: issues.length === 0
                ? 'Classification is consistent'
                : issues.join('; '),
            details: issues
        };
    }

    /**
     * Validate DTG format
     * @returns {Object} Validation check result
     */
    validateDTG() {
        const dtgEl = document.getElementById('draft-dtg');
        const dtg = dtgEl ? dtgEl.value : '';

        if (!dtg || !dtg.trim()) {
            return {
                name: 'DTG Format',
                status: 'fail',
                message: 'DTG is missing',
                details: ['DTG (Date-Time Group) is required']
            };
        }

        // DTG format: DDHHMMZ MMM YY (e.g., 151200Z OCT 25)
        const dtgRegex = /^\d{6}[A-Z]\s+[A-Z]{3}\s+\d{2}$/;
        if (!dtgRegex.test(dtg)) {
            return {
                name: 'DTG Format',
                status: 'fail',
                message: 'DTG format is invalid',
                details: ['DTG must be in format: DDHHMMZ MMM YY (e.g., 151200Z OCT 25)']
            };
        }

        return {
            name: 'DTG Format',
            status: 'pass',
            message: 'DTG format is valid',
            details: []
        };
    }

    /**
     * Validate military terminology
     * @returns {Object} Validation check result
     */
    validateTerminology() {
        const issues = [];
        const warnings = [];

        // Check for common civilian terms that should be military
        const content = JSON.stringify(this.currentDraft?.content || {}).toLowerCase();

        if (content.includes('soldiers') && !content.includes('personnel')) {
            warnings.push('Consider using "personnel" instead of "soldiers" for joint operations');
        }

        if (content.includes('enemy') && !content.includes('opfor') && !content.includes('threat')) {
            warnings.push('Consider using doctrinal terms like "OPFOR" or "threat forces"');
        }

        return {
            name: 'Military Terminology',
            status: warnings.length === 0 ? 'pass' : 'warning',
            message: warnings.length === 0
                ? 'Military terminology is appropriate'
                : 'Some terminology suggestions available',
            details: warnings
        };
    }

    /**
     * Show validation modal
     * @param {Object} validationResults - Validation results
     */
    showValidationModal(validationResults) {
        const modal = new Modal({
            title: '✅ OPORD Validation',
            content: this.createValidationModalContent(validationResults),
            showFooter: false,
            onOpen: () => {
                // Apply width styles to .modal-content element to override CSS constraints
                const modalContent = document.querySelector('.modal-content');
                if (modalContent) {
                    modalContent.style.setProperty('max-width', '1100px', 'important');
                    modalContent.style.setProperty('width', '100%', 'important');
                }
                this.initializeValidationModal();
            }
        });

        modal.open();
    }

    /**
     * Create validation modal content
     * @param {Object} validationResults - Validation results
     * @returns {string} HTML content
     */
    createValidationModalContent(validationResults) {
        return `
            <div>
                <!-- Tabs -->
                <div style="display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 2px solid #374151;">
                    <button id="validation-tab-results" class="validation-tab active" data-tab="results" style="padding: 12px 24px; background: transparent; border: none; color: #9ca3af; font-weight: 600; font-size: 14px; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.2s;">
                        <i class="fas fa-check-circle" style="margin-right: 6px;"></i>
                        Validation Results
                    </button>
                    <button id="validation-tab-preview" class="validation-tab" data-tab="preview" style="padding: 12px 24px; background: transparent; border: none; color: #9ca3af; font-weight: 600; font-size: 14px; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.2s;">
                        <i class="fas fa-file-alt" style="margin-right: 6px;"></i>
                        Export Preview
                    </button>
                </div>

                <!-- Tab Content -->
                <div id="validation-content-results" class="validation-content" style="display: block;">
                    ${this.renderValidationResults(validationResults)}
                </div>

                <div id="validation-content-preview" class="validation-content" style="display: none;">
                    ${this.renderExportPreview()}
                </div>
            </div>
        `;
    }

    /**
     * Initialize validation modal
     */
    initializeValidationModal() {
        // Tab switching
        document.querySelectorAll('.validation-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                const tabName = e.currentTarget.dataset.tab;

                // Update tab styles
                document.querySelectorAll('.validation-tab').forEach(t => {
                    t.classList.remove('active');
                    t.style.color = '#9ca3af';
                    t.style.borderBottomColor = 'transparent';
                });
                e.currentTarget.classList.add('active');
                e.currentTarget.style.color = '#8b5cf6';
                e.currentTarget.style.borderBottomColor = '#8b5cf6';

                // Show/hide content
                document.querySelectorAll('.validation-content').forEach(content => {
                    content.style.display = 'none';
                });
                document.getElementById(`validation-content-${tabName}`).style.display = 'block';
            });
        });
    }

    /**
     * Render validation results
     * @param {Object} results - Validation results
     * @returns {string} HTML content
     */
    renderValidationResults(results) {
        const overallStatus = results.failed === 0 ? 'pass' : results.failed <= 2 ? 'warning' : 'fail';
        const statusColors = {
            pass: '#16a34a',
            warning: '#f59e0b',
            fail: '#ef4444'
        };
        const statusIcons = {
            pass: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            fail: 'fa-times-circle'
        };

        return `
            <!-- Summary -->
            <div style="background: #1f2937; border: 2px solid ${statusColors[overallStatus]}; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                    <i class="fas ${statusIcons[overallStatus]}" style="font-size: 32px; color: ${statusColors[overallStatus]};"></i>
                    <div>
                        <h3 style="margin: 0; color: #e2e8f0; font-size: 18px; font-weight: 700;">
                            ${overallStatus === 'pass' ? 'OPORD Validation Passed' : overallStatus === 'warning' ? 'OPORD Validation Passed with Warnings' : 'OPORD Validation Failed'}
                        </h3>
                        <p style="margin: 4px 0 0 0; color: #9ca3af; font-size: 14px;">
                            ${results.passed} passed, ${results.warnings} warnings, ${results.failed} failed
                        </p>
                    </div>
                </div>
            </div>

            <!-- Checks -->
            <div style="display: flex; flex-direction: column; gap: 12px;">
                ${results.checks.map(check => this.renderValidationCheck(check)).join('')}
            </div>
        `;
    }

    /**
     * Render validation check
     * @param {Object} check - Validation check
     * @returns {string} HTML content
     */
    renderValidationCheck(check) {
        const statusColors = {
            pass: '#16a34a',
            warning: '#f59e0b',
            fail: '#ef4444'
        };
        const statusIcons = {
            pass: 'fa-check-circle',
            warning: 'fa-exclamation-triangle',
            fail: 'fa-times-circle'
        };

        return `
            <div style="background: #1f2937; border: 1px solid #374151; border-left: 4px solid ${statusColors[check.status]}; border-radius: 6px; padding: 16px;">
                <div style="display: flex; align-items: start; gap: 12px;">
                    <i class="fas ${statusIcons[check.status]}" style="font-size: 20px; color: ${statusColors[check.status]}; margin-top: 2px;"></i>
                    <div style="flex: 1;">
                        <h4 style="margin: 0 0 6px 0; color: #e2e8f0; font-size: 15px; font-weight: 600;">${check.name}</h4>
                        <p style="margin: 0 0 8px 0; color: #9ca3af; font-size: 14px;">${check.message}</p>
                        ${check.details && check.details.length > 0 ? `
                            <ul style="margin: 0; padding-left: 20px; color: #9ca3af; font-size: 13px;">
                                ${check.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        ` : ''}
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Render export preview
     * @returns {string} HTML content
     */
    renderExportPreview() {
        const classification = this.classificationManager.getCurrentClassification();
        const banner = this.classificationManager.generateBannerText();
        const titleEl = document.getElementById('draft-title');
        const title = titleEl ? titleEl.value : 'UNTITLED OPORD';
        const dtgEl = document.getElementById('draft-dtg');
        const dtg = dtgEl ? dtgEl.value : '';

        return `
            <div style="background: white; color: black; padding: 40px; border-radius: 8px; font-family: 'Times New Roman', serif; max-height: 600px; overflow-y: auto;">
                <!-- Classification Banner (Top) -->
                <div style="text-align: center; font-weight: bold; font-size: 14px; padding: 8px; background: ${this.getClassificationColor(classification.level)}; color: white; margin-bottom: 20px;">
                    ${banner}
                </div>

                <!-- Header -->
                <div style="text-align: center; margin-bottom: 30px;">
                    <div style="font-size: 12px; margin-bottom: 10px;">HEADQUARTERS</div>
                    <div style="font-size: 12px; margin-bottom: 10px;">${this.currentDraft?.metadata?.unit || '[UNIT]'}</div>
                    <div style="font-size: 12px; margin-bottom: 10px;">${this.currentDraft?.metadata?.location || '[LOCATION]'}</div>
                    <div style="font-size: 12px; margin-bottom: 20px;">${dtg}</div>
                    <div style="font-size: 14px; font-weight: bold;">${title}</div>
                </div>

                <!-- References -->
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: bold;">References:</div>
                    <div style="margin-left: 20px;">
                        <div>a. FM 5-0, Planning and Orders Production, November 2024</div>
                        <div>b. FM 3-90, Offense and Defense, April 2013</div>
                    </div>
                </div>

                <!-- Time Zone -->
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: bold;">Time Zone Used Throughout the Order:</div>
                    <div style="margin-left: 20px;">ZULU</div>
                </div>

                <!-- Task Organization -->
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: bold;">Task Organization:</div>
                    <div style="margin-left: 20px;">[See Annex A (Task Organization)]</div>
                </div>

                <!-- 1. SITUATION -->
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: bold;">1. SITUATION</div>
                    <div style="margin-left: 20px;">
                        <div style="margin-bottom: 10px;">
                            <div style="font-weight: bold;">a. Enemy Forces:</div>
                            <div style="margin-left: 20px;">${this.currentDraft?.content?.situation?.enemyComposition || '[Enemy composition and disposition]'}</div>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <div style="font-weight: bold;">b. Friendly Forces:</div>
                            <div style="margin-left: 20px;">${this.currentDraft?.content?.situation?.higherMission || '[Higher headquarters mission]'}</div>
                        </div>
                    </div>
                </div>

                <!-- 2. MISSION -->
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: bold;">2. MISSION</div>
                    <div style="margin-left: 20px;">${this.currentDraft?.content?.mission?.fullStatement || '[Mission statement]'}</div>
                </div>

                <!-- 3. EXECUTION -->
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: bold;">3. EXECUTION</div>
                    <div style="margin-left: 20px;">
                        <div style="margin-bottom: 10px;">
                            <div style="font-weight: bold;">a. Commander's Intent:</div>
                            <div style="margin-left: 20px;">
                                <div><strong>Purpose:</strong> ${this.currentDraft?.content?.execution?.intentPurpose || '[Purpose]'}</div>
                                <div><strong>Method:</strong> ${this.currentDraft?.content?.execution?.intentMethod || '[Method]'}</div>
                                <div><strong>End State:</strong> ${this.currentDraft?.content?.execution?.intentEndState || '[End State]'}</div>
                            </div>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <div style="font-weight: bold;">b. Scheme of Maneuver:</div>
                            <div style="margin-left: 20px;">${this.currentDraft?.content?.execution?.schemeOfManeuver || '[Scheme of maneuver]'}</div>
                        </div>
                    </div>
                </div>

                <!-- 4. SUSTAINMENT -->
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: bold;">4. SUSTAINMENT</div>
                    <div style="margin-left: 20px;">[See Annex F (Sustainment)]</div>
                </div>

                <!-- 5. COMMAND AND SIGNAL -->
                <div style="margin-bottom: 20px;">
                    <div style="font-weight: bold;">5. COMMAND AND SIGNAL</div>
                    <div style="margin-left: 20px;">
                        <div style="margin-bottom: 10px;">
                            <div style="font-weight: bold;">a. Command:</div>
                            <div style="margin-left: 20px;">${this.currentDraft?.content?.commandControl?.commandLocation || '[Command post location]'}</div>
                        </div>
                        <div style="margin-bottom: 10px;">
                            <div style="font-weight: bold;">b. Signal:</div>
                            <div style="margin-left: 20px;">[See Annex H (Signal)]</div>
                        </div>
                    </div>
                </div>

                <!-- Signature Block -->
                <div style="margin-top: 40px; text-align: center;">
                    <div style="margin-bottom: 60px;"></div>
                    <div style="border-top: 1px solid black; display: inline-block; padding-top: 5px; min-width: 200px;">
                        ${this.currentDraft?.metadata?.commander || '[COMMANDER NAME]'}
                    </div>
                    <div>${this.currentDraft?.metadata?.commanderRank || '[RANK]'}</div>
                </div>

                <!-- Classification Banner (Bottom) -->
                <div style="text-align: center; font-weight: bold; font-size: 14px; padding: 8px; background: ${this.getClassificationColor(classification.level)}; color: white; margin-top: 20px;">
                    ${banner}
                </div>
            </div>
        `;
    }

    /**
     * Get classification color
     * @param {string} level - Classification level
     * @returns {string} Color code
     */
    getClassificationColor(level) {
        const colors = {
            'UNCLASSIFIED': '#007A33',
            'CUI': '#502B85',
            'CONFIDENTIAL': '#0033A0',
            'SECRET': '#C8102E',
            'TOP SECRET': '#FF671F'
        };
        return colors[level] || '#007A33';
    }

    /**
     * Handle Export Draft
     * Opens export modal with PACE format options
     */
    async handleExportDraft() {
        console.log('📤 Export Draft clicked');

        // Show export modal
        this.showExportModal();
    }

    /**
     * Show export modal
     */
    showExportModal() {
        // Store modal reference to prevent garbage collection
        this.exportModal = new Modal({
            title: '📤 Export OPORD',
            content: this.createExportModalContent(),
            showFooter: false
        });

        this.exportModal.open();

        // Attach event listeners after modal opens
        setTimeout(() => {
            this.initializeExportModal();
        }, 100);
    }

    /**
     * Create export modal content
     * @returns {string} HTML content
     */
    createExportModalContent() {
        return `
            <div style="max-width: 700px; width: 100%;">
                <div style="margin-bottom: 20px; padding: 16px; background: #1f2937; border: 1px solid #374151; border-radius: 8px;">
                    <h4 style="margin: 0 0 8px 0; color: #e2e8f0; font-size: 15px; font-weight: 600;">
                        <i class="fas fa-info-circle" style="color: #3b82f6; margin-right: 6px;"></i>
                        PACE Export Formats
                    </h4>
                    <p style="margin: 0; color: #9ca3af; font-size: 13px; line-height: 1.5;">
                        PACE (Primary, Alternate, Contingency, Emergency) ensures document accessibility across different systems and scenarios.
                    </p>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                    <!-- PDF (Primary) -->
                    <div style="background: #1f2937; border: 2px solid #3b82f6; border-radius: 8px; padding: 20px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <div style="width: 48px; height: 48px; background: #3b82f6; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-file-pdf" style="font-size: 24px; color: white;"></i>
                            </div>
                            <div>
                                <h4 style="margin: 0; color: #e2e8f0; font-size: 15px; font-weight: 600;">PDF</h4>
                                <p style="margin: 0; color: #3b82f6; font-size: 12px; font-weight: 600;">PRIMARY</p>
                            </div>
                        </div>
                        <p style="margin: 0 0 16px 0; color: #9ca3af; font-size: 13px;">
                            Professional format with classification banners and AR 25-50 formatting.
                        </p>
                        <button id="export-pdf-btn" style="width: 100%; background: #3b82f6; color: white; padding: 10px 16px; border: none; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            <i class="fas fa-download" style="margin-right: 6px;"></i>
                            Export to PDF
                        </button>
                    </div>

                    <!-- DOCX (Alternate) -->
                    <div style="background: #1f2937; border: 2px solid #8b5cf6; border-radius: 8px; padding: 20px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <div style="width: 48px; height: 48px; background: #8b5cf6; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-file-word" style="font-size: 24px; color: white;"></i>
                            </div>
                            <div>
                                <h4 style="margin: 0; color: #e2e8f0; font-size: 15px; font-weight: 600;">DOCX</h4>
                                <p style="margin: 0; color: #8b5cf6; font-size: 12px; font-weight: 600;">ALTERNATE</p>
                            </div>
                        </div>
                        <p style="margin: 0 0 16px 0; color: #9ca3af; font-size: 13px;">
                            Editable format for Microsoft Word and compatible applications.
                        </p>
                        <button id="export-docx-btn" style="width: 100%; background: #8b5cf6; color: white; padding: 10px 16px; border: none; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            <i class="fas fa-download" style="margin-right: 6px;"></i>
                            Export to DOCX
                        </button>
                    </div>

                    <!-- RTF (Contingency) -->
                    <div style="background: #1f2937; border: 2px solid #f59e0b; border-radius: 8px; padding: 20px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <div style="width: 48px; height: 48px; background: #f59e0b; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-file-alt" style="font-size: 24px; color: white;"></i>
                            </div>
                            <div>
                                <h4 style="margin: 0; color: #e2e8f0; font-size: 15px; font-weight: 600;">RTF</h4>
                                <p style="margin: 0; color: #f59e0b; font-size: 12px; font-weight: 600;">CONTINGENCY</p>
                            </div>
                        </div>
                        <p style="margin: 0 0 16px 0; color: #9ca3af; font-size: 13px;">
                            Universal format compatible with most word processors.
                        </p>
                        <button id="export-rtf-btn" style="width: 100%; background: #f59e0b; color: white; padding: 10px 16px; border: none; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            <i class="fas fa-download" style="margin-right: 6px;"></i>
                            Export to RTF
                        </button>
                    </div>

                    <!-- TXT (Emergency) -->
                    <div style="background: #1f2937; border: 2px solid #6b7280; border-radius: 8px; padding: 20px;">
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                            <div style="width: 48px; height: 48px; background: #6b7280; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                                <i class="fas fa-file-text" style="font-size: 24px; color: white;"></i>
                            </div>
                            <div>
                                <h4 style="margin: 0; color: #e2e8f0; font-size: 15px; font-weight: 600;">TXT</h4>
                                <p style="margin: 0; color: #6b7280; font-size: 12px; font-weight: 600;">EMERGENCY</p>
                            </div>
                        </div>
                        <p style="margin: 0 0 16px 0; color: #9ca3af; font-size: 13px;">
                            Plain text format for maximum compatibility and minimal size.
                        </p>
                        <button id="export-txt-btn" style="width: 100%; background: #6b7280; color: white; padding: 10px 16px; border: none; border-radius: 6px; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s;">
                            <i class="fas fa-download" style="margin-right: 6px;"></i>
                            Export to TXT
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * Initialize export modal
     * Uses event delegation to prevent event listener loss after PDF export
     */
    initializeExportModal() {
        // Get modal body for event delegation
        const modalBody = document.querySelector('.modal-body');
        if (!modalBody) {
            console.error('❌ Modal body not found');
            return;
        }

        // Remove any existing export listeners to prevent duplicates
        if (this.exportModalClickHandler) {
            modalBody.removeEventListener('click', this.exportModalClickHandler);
        }

        // Create click handler with event delegation
        this.exportModalClickHandler = (e) => {
            const target = e.target.closest('button');
            if (!target) return;

            const btnId = target.id;

            // Prevent default to avoid any interference
            e.preventDefault();
            e.stopPropagation();

            switch (btnId) {
                case 'export-pdf-btn':
                    this.exportToPDF();
                    break;
                case 'export-docx-btn':
                    this.exportToDOCX();
                    break;
                case 'export-rtf-btn':
                    this.exportToRTF();
                    break;
                case 'export-txt-btn':
                    this.exportToTXT();
                    break;
            }
        };

        // Attach delegated click handler
        modalBody.addEventListener('click', this.exportModalClickHandler);

        // Add hover effects using event delegation
        const pdfBtn = document.getElementById('export-pdf-btn');
        const docxBtn = document.getElementById('export-docx-btn');
        const rtfBtn = document.getElementById('export-rtf-btn');
        const txtBtn = document.getElementById('export-txt-btn');

        if (pdfBtn) {
            pdfBtn.addEventListener('mouseenter', () => {
                pdfBtn.style.background = '#2563eb';
            });
            pdfBtn.addEventListener('mouseleave', () => {
                pdfBtn.style.background = '#3b82f6';
            });
        }

        if (docxBtn) {
            docxBtn.addEventListener('mouseenter', () => {
                docxBtn.style.background = '#7c3aed';
            });
            docxBtn.addEventListener('mouseleave', () => {
                docxBtn.style.background = '#8b5cf6';
            });
        }

        if (rtfBtn) {
            rtfBtn.addEventListener('mouseenter', () => {
                rtfBtn.style.background = '#d97706';
            });
            rtfBtn.addEventListener('mouseleave', () => {
                rtfBtn.style.background = '#f59e0b';
            });
        }

        if (txtBtn) {
            txtBtn.addEventListener('mouseenter', () => {
                txtBtn.style.background = '#4b5563';
            });
            txtBtn.addEventListener('mouseleave', () => {
                txtBtn.style.background = '#6b7280';
            });
        }
    }

    /**
     * Generate filename for export
     * @param {string} extension - File extension
     * @returns {string} Filename
     */
    generateFilename(extension) {
        const titleEl = document.getElementById('draft-title');
        const title = titleEl ? titleEl.value.trim() : '';
        const dtgEl = document.getElementById('draft-dtg');
        const dtg = dtgEl ? dtgEl.value.trim().replace(/\s+/g, '_') : '';

        let filename = 'OPORD';
        if (title) {
            const cleanTitle = title.replace(/[^a-zA-Z0-9\s-]/g, '').replace(/\s+/g, '_');
            filename += `_${cleanTitle}`;
        }
        if (dtg) {
            filename += `_${dtg}`;
        }
        filename += `.${extension}`;

        return filename;
    }

    /**
     * Generate OPORD content HTML
     * @returns {string} HTML content
     */
    generateOpordHTML() {
        const classification = this.classificationManager.getCurrentClassification();
        const banner = this.classificationManager.generateBannerText();
        const titleEl = document.getElementById('draft-title');
        const title = titleEl ? titleEl.value : 'UNTITLED OPORD';
        const dtgEl = document.getElementById('draft-dtg');
        const dtg = dtgEl ? dtgEl.value : '';

        return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${title}</title>
    <style>
        @page {
            margin: 1in;
        }
        body {
            font-family: 'Times New Roman', serif;
            font-size: 12pt;
            line-height: 1.5;
            color: black;
        }
        .classification-banner {
            text-align: center;
            font-weight: bold;
            font-size: 14pt;
            padding: 8px;
            background: ${this.getClassificationColor(classification.level)};
            color: white;
            margin-bottom: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .section {
            margin-bottom: 20px;
        }
        .section-title {
            font-weight: bold;
            margin-bottom: 10px;
        }
        .subsection {
            margin-left: 20px;
            margin-bottom: 10px;
        }
        .signature-block {
            margin-top: 60px;
            text-align: center;
        }
        .signature-line {
            border-top: 1px solid black;
            display: inline-block;
            padding-top: 5px;
            min-width: 200px;
        }
    </style>
</head>
<body>
    <!-- Classification Banner (Top) -->
    <div class="classification-banner">${banner}</div>

    <!-- Header -->
    <div class="header">
        <div>HEADQUARTERS</div>
        <div>${this.currentDraft?.metadata?.unit || '[UNIT]'}</div>
        <div>${this.currentDraft?.metadata?.location || '[LOCATION]'}</div>
        <div>${dtg}</div>
        <br>
        <div style="font-size: 14pt; font-weight: bold;">${title}</div>
    </div>

    <!-- References -->
    <div class="section">
        <div class="section-title">References:</div>
        <div class="subsection">
            <div>a. FM 5-0, Planning and Orders Production, November 2024</div>
            <div>b. FM 3-90, Offense and Defense, April 2013</div>
        </div>
    </div>

    <!-- Time Zone -->
    <div class="section">
        <div class="section-title">Time Zone Used Throughout the Order:</div>
        <div class="subsection">ZULU</div>
    </div>

    <!-- Task Organization -->
    <div class="section">
        <div class="section-title">Task Organization:</div>
        <div class="subsection">[See Annex A (Task Organization)]</div>
    </div>

    <!-- 1. SITUATION -->
    <div class="section">
        <div class="section-title">1. SITUATION</div>
        <div class="subsection">
            <div style="margin-bottom: 10px;">
                <div style="font-weight: bold;">a. Enemy Forces:</div>
                <div class="subsection">${this.currentDraft?.content?.situation?.enemyComposition || '[Enemy composition and disposition]'}</div>
            </div>
            <div style="margin-bottom: 10px;">
                <div style="font-weight: bold;">b. Friendly Forces:</div>
                <div class="subsection">${this.currentDraft?.content?.situation?.higherMission || '[Higher headquarters mission]'}</div>
            </div>
        </div>
    </div>

    <!-- 2. MISSION -->
    <div class="section">
        <div class="section-title">2. MISSION</div>
        <div class="subsection">${this.currentDraft?.content?.mission?.fullStatement || '[Mission statement]'}</div>
    </div>

    <!-- 3. EXECUTION -->
    <div class="section">
        <div class="section-title">3. EXECUTION</div>
        <div class="subsection">
            <div style="margin-bottom: 10px;">
                <div style="font-weight: bold;">a. Commander's Intent:</div>
                <div class="subsection">
                    <div><strong>Purpose:</strong> ${this.currentDraft?.content?.execution?.intentPurpose || '[Purpose]'}</div>
                    <div><strong>Method:</strong> ${this.currentDraft?.content?.execution?.intentMethod || '[Method]'}</div>
                    <div><strong>End State:</strong> ${this.currentDraft?.content?.execution?.intentEndState || '[End State]'}</div>
                </div>
            </div>
            <div style="margin-bottom: 10px;">
                <div style="font-weight: bold;">b. Scheme of Maneuver:</div>
                <div class="subsection">${this.currentDraft?.content?.execution?.schemeOfManeuver || '[Scheme of maneuver]'}</div>
            </div>
        </div>
    </div>

    <!-- 4. SUSTAINMENT -->
    <div class="section">
        <div class="section-title">4. SUSTAINMENT</div>
        <div class="subsection">[See Annex F (Sustainment)]</div>
    </div>

    <!-- 5. COMMAND AND SIGNAL -->
    <div class="section">
        <div class="section-title">5. COMMAND AND SIGNAL</div>
        <div class="subsection">
            <div style="margin-bottom: 10px;">
                <div style="font-weight: bold;">a. Command:</div>
                <div class="subsection">${this.currentDraft?.content?.commandControl?.commandLocation || '[Command post location]'}</div>
            </div>
            <div style="margin-bottom: 10px;">
                <div style="font-weight: bold;">b. Signal:</div>
                <div class="subsection">[See Annex H (Signal)]</div>
            </div>
        </div>
    </div>

    <!-- Signature Block -->
    <div class="signature-block">
        <div style="margin-bottom: 60px;"></div>
        <div class="signature-line">
            ${this.currentDraft?.metadata?.commander || '[COMMANDER NAME]'}
        </div>
        <div>${this.currentDraft?.metadata?.commanderRank || '[RANK]'}</div>
    </div>

    <!-- Classification Banner (Bottom) -->
    <div class="classification-banner">${banner}</div>
</body>
</html>
        `;
    }

    /**
     * Export to PDF
     */
    exportToPDF() {
        try {
            console.log('📄 Exporting to PDF...');

            // Generate HTML content
            const html = this.generateOpordHTML();

            // Create a new window for printing
            const printWindow = window.open('', '_blank');
            if (!printWindow) {
                throw new Error('Failed to open print window. Please allow popups.');
            }

            printWindow.document.write(html);
            printWindow.document.close();

            // Wait for content to load, then print
            printWindow.onload = () => {
                printWindow.print();

                // Return focus to main window after print dialog
                setTimeout(() => {
                    window.focus();
                }, 100);
            };

            this.showSaveNotification('✅ Opening print dialog for PDF export');
            console.log('✅ PDF export initiated');

        } catch (error) {
            console.error('❌ Failed to export to PDF:', error);
            this.showSaveNotification('❌ Failed to export to PDF: ' + error.message);
        }
    }

    /**
     * Export to DOCX
     */
    exportToDOCX() {
        try {
            console.log('📄 Exporting to DOCX...');

            // Generate HTML content
            const html = this.generateOpordHTML();

            // Create blob with HTML content
            const blob = new Blob([html], { type: 'application/msword' });

            // Create download link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = this.generateFilename('doc');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            this.showSaveNotification('✅ DOCX file downloaded');
            console.log('✅ DOCX export complete');

        } catch (error) {
            console.error('❌ Failed to export to DOCX:', error);
            this.showSaveNotification('❌ Failed to export to DOCX: ' + error.message);
        }
    }

    /**
     * Export to RTF
     */
    exportToRTF() {
        try {
            console.log('📄 Exporting to RTF...');

            // Generate RTF content
            const rtf = this.generateOpordRTF();

            // Create blob with RTF content
            const blob = new Blob([rtf], { type: 'application/rtf' });

            // Create download link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = this.generateFilename('rtf');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            this.showSaveNotification('✅ RTF file downloaded');
            console.log('✅ RTF export complete');

        } catch (error) {
            console.error('❌ Failed to export to RTF:', error);
            this.showSaveNotification('❌ Failed to export to RTF: ' + error.message);
        }
    }

    /**
     * Export to TXT
     */
    exportToTXT() {
        try {
            console.log('📄 Exporting to TXT...');

            // Generate plain text content
            const txt = this.generateOpordTXT();

            // Create blob with text content
            const blob = new Blob([txt], { type: 'text/plain' });

            // Create download link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = this.generateFilename('txt');
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            this.showSaveNotification('✅ TXT file downloaded');
            console.log('✅ TXT export complete');

        } catch (error) {
            console.error('❌ Failed to export to TXT:', error);
            this.showSaveNotification('❌ Failed to export to TXT: ' + error.message);
        }
    }

    /**
     * Generate OPORD RTF content
     * @returns {string} RTF content
     */
    generateOpordRTF() {
        const classification = this.classificationManager.getCurrentClassification();
        const banner = this.classificationManager.generateBannerText();
        const titleEl = document.getElementById('draft-title');
        const title = titleEl ? titleEl.value : 'UNTITLED OPORD';
        const dtgEl = document.getElementById('draft-dtg');
        const dtg = dtgEl ? dtgEl.value : '';

        return `{\\rtf1\\ansi\\deff0
{\\fonttbl{\\f0 Times New Roman;}}
{\\colortbl;\\red0\\green0\\blue0;\\red255\\green255\\blue255;}
\\paperw12240\\paperh15840\\margl1440\\margr1440\\margt1440\\margb1440
\\f0\\fs24

{\\pard\\qc\\b\\fs28 ${banner}\\par}
\\par
{\\pard\\qc HEADQUARTERS\\par}
{\\pard\\qc ${this.currentDraft?.metadata?.unit || '[UNIT]'}\\par}
{\\pard\\qc ${this.currentDraft?.metadata?.location || '[LOCATION]'}\\par}
{\\pard\\qc ${dtg}\\par}
\\par
{\\pard\\qc\\b\\fs32 ${title}\\par}
\\par\\par

{\\pard\\b References:\\par}
{\\pard\\li720 a. FM 5-0, Planning and Orders Production, November 2024\\par}
{\\pard\\li720 b. FM 3-90, Offense and Defense, April 2013\\par}
\\par

{\\pard\\b Time Zone Used Throughout the Order:\\par}
{\\pard\\li720 ZULU\\par}
\\par

{\\pard\\b Task Organization:\\par}
{\\pard\\li720 [See Annex A (Task Organization)]\\par}
\\par

{\\pard\\b 1. SITUATION\\par}
{\\pard\\li720\\b a. Enemy Forces:\\par}
{\\pard\\li1440 ${this.currentDraft?.content?.situation?.enemyComposition || '[Enemy composition and disposition]'}\\par}
{\\pard\\li720\\b b. Friendly Forces:\\par}
{\\pard\\li1440 ${this.currentDraft?.content?.situation?.higherMission || '[Higher headquarters mission]'}\\par}
\\par

{\\pard\\b 2. MISSION\\par}
{\\pard\\li720 ${this.currentDraft?.content?.mission?.fullStatement || '[Mission statement]'}\\par}
\\par

{\\pard\\b 3. EXECUTION\\par}
{\\pard\\li720\\b a. Commander's Intent:\\par}
{\\pard\\li1440\\b Purpose:\\b0  ${this.currentDraft?.content?.execution?.intentPurpose || '[Purpose]'}\\par}
{\\pard\\li1440\\b Method:\\b0  ${this.currentDraft?.content?.execution?.intentMethod || '[Method]'}\\par}
{\\pard\\li1440\\b End State:\\b0  ${this.currentDraft?.content?.execution?.intentEndState || '[End State]'}\\par}
{\\pard\\li720\\b b. Scheme of Maneuver:\\par}
{\\pard\\li1440 ${this.currentDraft?.content?.execution?.schemeOfManeuver || '[Scheme of maneuver]'}\\par}
\\par

{\\pard\\b 4. SUSTAINMENT\\par}
{\\pard\\li720 [See Annex F (Sustainment)]\\par}
\\par

{\\pard\\b 5. COMMAND AND SIGNAL\\par}
{\\pard\\li720\\b a. Command:\\par}
{\\pard\\li1440 ${this.currentDraft?.content?.commandControl?.commandLocation || '[Command post location]'}\\par}
{\\pard\\li720\\b b. Signal:\\par}
{\\pard\\li1440 [See Annex H (Signal)]\\par}
\\par\\par\\par

{\\pard\\qc _________________________________\\par}
{\\pard\\qc ${this.currentDraft?.metadata?.commander || '[COMMANDER NAME]'}\\par}
{\\pard\\qc ${this.currentDraft?.metadata?.commanderRank || '[RANK]'}\\par}
\\par

{\\pard\\qc\\b\\fs28 ${banner}\\par}
}`;
    }

    /**
     * Generate OPORD plain text content
     * @returns {string} Plain text content
     */
    generateOpordTXT() {
        const classification = this.classificationManager.getCurrentClassification();
        const banner = this.classificationManager.generateBannerText();
        const titleEl = document.getElementById('draft-title');
        const title = titleEl ? titleEl.value : 'UNTITLED OPORD';
        const dtgEl = document.getElementById('draft-dtg');
        const dtg = dtgEl ? dtgEl.value : '';

        return `${banner}
${'='.repeat(banner.length)}

HEADQUARTERS
${this.currentDraft?.metadata?.unit || '[UNIT]'}
${this.currentDraft?.metadata?.location || '[LOCATION]'}
${dtg}

${title}

References:
  a. FM 5-0, Planning and Orders Production, November 2024
  b. FM 3-90, Offense and Defense, April 2013

Time Zone Used Throughout the Order:
  ZULU

Task Organization:
  [See Annex A (Task Organization)]

1. SITUATION

  a. Enemy Forces:
    ${this.currentDraft?.content?.situation?.enemyComposition || '[Enemy composition and disposition]'}

  b. Friendly Forces:
    ${this.currentDraft?.content?.situation?.higherMission || '[Higher headquarters mission]'}

2. MISSION

  ${this.currentDraft?.content?.mission?.fullStatement || '[Mission statement]'}

3. EXECUTION

  a. Commander's Intent:
    Purpose: ${this.currentDraft?.content?.execution?.intentPurpose || '[Purpose]'}
    Method: ${this.currentDraft?.content?.execution?.intentMethod || '[Method]'}
    End State: ${this.currentDraft?.content?.execution?.intentEndState || '[End State]'}

  b. Scheme of Maneuver:
    ${this.currentDraft?.content?.execution?.schemeOfManeuver || '[Scheme of maneuver]'}

4. SUSTAINMENT

  [See Annex F (Sustainment)]

5. COMMAND AND SIGNAL

  a. Command:
    ${this.currentDraft?.content?.commandControl?.commandLocation || '[Command post location]'}

  b. Signal:
    [See Annex H (Signal)]


_________________________________
${this.currentDraft?.metadata?.commander || '[COMMANDER NAME]'}
${this.currentDraft?.metadata?.commanderRank || '[RANK]'}

${banner}
${'='.repeat(banner.length)}
`;
    }
}

export default OpordDraftTool;

