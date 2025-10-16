/**
 * DTG (Date-Time Group) Picker Component
 * 
 * Interactive calendar and time picker for military DTG format.
 * Displays calendar widget with month/year navigation and time selector.
 * 
 * @example
 * const picker = new DTGPicker({
 *     input: document.getElementById('dtg-input'),
 *     onSelect: (dtg) => console.log('Selected:', dtg)
 * });
 */

import { DTGFormatter } from '../utils/dtg-formatter.js';

export class DTGPicker {
    /**
     * Create a DTG picker
     * @param {Object} options - Configuration options
     * @param {HTMLElement} options.input - Input element to attach picker to
     * @param {Function} options.onSelect - Callback when DTG is selected
     * @param {string} options.initialDTG - Initial DTG value
     */
    constructor(options) {
        this.input = options.input;
        this.onSelect = options.onSelect || (() => {});
        this.initialDTG = options.initialDTG || DTGFormatter.now();
        
        // Parse initial DTG or use current date
        this.selectedDate = DTGFormatter.parse(this.initialDTG) || new Date();
        this.viewDate = new Date(this.selectedDate); // Date being viewed in calendar
        
        this.pickerElement = null;
        this.isOpen = false;
        
        // Bind methods
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        
        this.init();
    }
    
    /**
     * Initialize the picker
     */
    init() {
        // Create picker element
        this.createPicker();
        
        // Attach input click handler
        if (this.input) {
            this.input.addEventListener('click', this.handleInputClick);
            this.input.setAttribute('readonly', 'true');
            this.input.style.cursor = 'pointer';
        }
    }
    
    /**
     * Create picker element
     */
    createPicker() {
        this.pickerElement = document.createElement('div');
        this.pickerElement.className = 'dtg-picker';
        this.pickerElement.style.display = 'none';
        
        this.pickerElement.innerHTML = `
            <div class="dtg-picker-header">
                <button class="dtg-picker-nav" data-action="prev-year" title="Previous Year">
                    <i class="fas fa-angle-double-left"></i>
                </button>
                <button class="dtg-picker-nav" data-action="prev-month" title="Previous Month">
                    <i class="fas fa-angle-left"></i>
                </button>
                <div class="dtg-picker-current">
                    <span class="dtg-picker-month"></span>
                    <span class="dtg-picker-year"></span>
                </div>
                <button class="dtg-picker-nav" data-action="next-month" title="Next Month">
                    <i class="fas fa-angle-right"></i>
                </button>
                <button class="dtg-picker-nav" data-action="next-year" title="Next Year">
                    <i class="fas fa-angle-double-right"></i>
                </button>
            </div>
            <div class="dtg-picker-calendar">
                <div class="dtg-picker-weekdays">
                    <div class="dtg-picker-weekday">S</div>
                    <div class="dtg-picker-weekday">M</div>
                    <div class="dtg-picker-weekday">T</div>
                    <div class="dtg-picker-weekday">W</div>
                    <div class="dtg-picker-weekday">T</div>
                    <div class="dtg-picker-weekday">F</div>
                    <div class="dtg-picker-weekday">S</div>
                </div>
                <div class="dtg-picker-days"></div>
            </div>
            <div class="dtg-picker-time">
                <label class="dtg-picker-time-label">
                    <span>Time (UTC):</span>
                    <div class="dtg-picker-time-inputs">
                        <input type="number" class="dtg-picker-hours" min="0" max="23" placeholder="HH">
                        <span class="dtg-picker-time-separator">:</span>
                        <input type="number" class="dtg-picker-minutes" min="0" max="59" placeholder="MM">
                        <span class="dtg-picker-time-zone">Z</span>
                    </div>
                </label>
            </div>
            <div class="dtg-picker-preview">
                <span class="dtg-picker-preview-label">DTG:</span>
                <span class="dtg-picker-preview-value"></span>
            </div>
            <div class="dtg-picker-footer">
                <button class="dtg-picker-btn btn-today" data-action="today">
                    <i class="fas fa-calendar-day"></i> Today
                </button>
                <button class="dtg-picker-btn btn-apply" data-action="apply">
                    <i class="fas fa-check"></i> Apply
                </button>
                <button class="dtg-picker-btn btn-cancel" data-action="cancel">
                    <i class="fas fa-times"></i> Cancel
                </button>
            </div>
        `;
        
        // Position picker relative to input
        if (this.input && this.input.parentElement) {
            this.input.parentElement.style.position = 'relative';
            this.input.parentElement.appendChild(this.pickerElement);
        } else {
            document.body.appendChild(this.pickerElement);
        }
        
        // Attach event listeners
        this.attachPickerListeners();
    }
    
    /**
     * Attach event listeners to picker elements
     */
    attachPickerListeners() {
        // Navigation buttons
        this.pickerElement.querySelectorAll('[data-action]').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = button.dataset.action;
                this.handleAction(action);
            });
        });
        
        // Time inputs
        const hoursInput = this.pickerElement.querySelector('.dtg-picker-hours');
        const minutesInput = this.pickerElement.querySelector('.dtg-picker-minutes');
        
        hoursInput.addEventListener('input', () => this.handleTimeChange());
        minutesInput.addEventListener('input', () => this.handleTimeChange());
        
        // Prevent picker from closing when clicking inside
        this.pickerElement.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
    
    /**
     * Handle action button clicks
     */
    handleAction(action) {
        switch (action) {
            case 'prev-year':
                this.viewDate.setUTCFullYear(this.viewDate.getUTCFullYear() - 1);
                this.renderCalendar();
                break;
            case 'prev-month':
                this.viewDate.setUTCMonth(this.viewDate.getUTCMonth() - 1);
                this.renderCalendar();
                break;
            case 'next-month':
                this.viewDate.setUTCMonth(this.viewDate.getUTCMonth() + 1);
                this.renderCalendar();
                break;
            case 'next-year':
                this.viewDate.setUTCFullYear(this.viewDate.getUTCFullYear() + 1);
                this.renderCalendar();
                break;
            case 'today':
                this.selectedDate = new Date();
                this.viewDate = new Date(this.selectedDate);
                this.renderCalendar();
                this.updateTimeInputs();
                this.updatePreview();
                break;
            case 'apply':
                this.apply();
                break;
            case 'cancel':
                this.close();
                break;
        }
    }
    
    /**
     * Handle input click
     */
    handleInputClick(e) {
        e.stopPropagation();
        this.toggle();
    }
    
    /**
     * Handle document click (close picker)
     */
    handleDocumentClick(e) {
        if (this.isOpen && !this.pickerElement.contains(e.target) && e.target !== this.input) {
            this.close();
        }
    }
    
    /**
     * Handle keyboard navigation
     */
    handleKeyDown(e) {
        if (e.key === 'Escape') {
            this.close();
        }
    }
    
    /**
     * Open picker
     */
    open() {
        if (this.isOpen) return;
        
        this.isOpen = true;
        this.pickerElement.style.display = 'block';
        
        // Parse current input value
        if (this.input && this.input.value) {
            const parsed = DTGFormatter.parse(this.input.value);
            if (parsed) {
                this.selectedDate = parsed;
                this.viewDate = new Date(parsed);
            }
        }
        
        this.renderCalendar();
        this.updateTimeInputs();
        this.updatePreview();
        
        // Attach document listeners
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    
    /**
     * Close picker
     */
    close() {
        if (!this.isOpen) return;
        
        this.isOpen = false;
        this.pickerElement.style.display = 'none';
        
        // Remove document listeners
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    
    /**
     * Toggle picker open/closed
     */
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
    
    /**
     * Apply selected DTG
     */
    apply() {
        const dtg = DTGFormatter.format(this.selectedDate);
        
        if (this.input) {
            this.input.value = dtg;
        }
        
        this.onSelect(dtg);
        this.close();
    }
    
    /**
     * Render calendar for current view date
     */
    renderCalendar() {
        // Update header
        const monthElement = this.pickerElement.querySelector('.dtg-picker-month');
        const yearElement = this.pickerElement.querySelector('.dtg-picker-year');

        const monthAbbr = DTGFormatter.getMonthAbbr(this.viewDate.getUTCMonth());
        monthElement.textContent = DTGFormatter.getMonthName(monthAbbr);
        yearElement.textContent = this.viewDate.getUTCFullYear();

        // Render days
        this.renderDays();
    }

    /**
     * Render calendar days
     */
    renderDays() {
        const daysContainer = this.pickerElement.querySelector('.dtg-picker-days');
        daysContainer.innerHTML = '';

        const year = this.viewDate.getUTCFullYear();
        const month = this.viewDate.getUTCMonth();

        // Get first day of month (0 = Sunday, 6 = Saturday)
        const firstDay = new Date(Date.UTC(year, month, 1)).getUTCDay();

        // Get number of days in month
        const daysInMonth = DTGFormatter.getDaysInMonth(year, month);

        // Get number of days in previous month
        const prevMonth = month === 0 ? 11 : month - 1;
        const prevYear = month === 0 ? year - 1 : year;
        const daysInPrevMonth = DTGFormatter.getDaysInMonth(prevYear, prevMonth);

        // Render previous month's trailing days
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = daysInPrevMonth - i;
            const dayElement = this.createDayElement(day, prevMonth, prevYear, true);
            daysContainer.appendChild(dayElement);
        }

        // Render current month's days
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = this.createDayElement(day, month, year, false);
            daysContainer.appendChild(dayElement);
        }

        // Render next month's leading days to fill grid
        const totalCells = daysContainer.children.length;
        const remainingCells = 42 - totalCells; // 6 rows × 7 days
        const nextMonth = month === 11 ? 0 : month + 1;
        const nextYear = month === 11 ? year + 1 : year;

        for (let day = 1; day <= remainingCells; day++) {
            const dayElement = this.createDayElement(day, nextMonth, nextYear, true);
            daysContainer.appendChild(dayElement);
        }
    }

    /**
     * Create day element
     */
    createDayElement(day, month, year, isOtherMonth) {
        const dayElement = document.createElement('button');
        dayElement.className = 'dtg-picker-day';
        dayElement.textContent = day;

        if (isOtherMonth) {
            dayElement.classList.add('other-month');
        }

        // Check if this is the selected date
        if (!isOtherMonth &&
            day === this.selectedDate.getUTCDate() &&
            month === this.selectedDate.getUTCMonth() &&
            year === this.selectedDate.getUTCFullYear()) {
            dayElement.classList.add('selected');
        }

        // Check if this is today
        const today = new Date();
        if (day === today.getUTCDate() &&
            month === today.getUTCMonth() &&
            year === today.getUTCFullYear()) {
            dayElement.classList.add('today');
        }

        // Attach click handler
        dayElement.addEventListener('click', () => {
            this.selectDate(day, month, year);
        });

        return dayElement;
    }

    /**
     * Select a date
     */
    selectDate(day, month, year) {
        // Update selected date (preserve time)
        this.selectedDate.setUTCFullYear(year);
        this.selectedDate.setUTCMonth(month);
        this.selectedDate.setUTCDate(day);

        // Update view date if selecting from other month
        if (month !== this.viewDate.getUTCMonth() || year !== this.viewDate.getUTCFullYear()) {
            this.viewDate.setUTCFullYear(year);
            this.viewDate.setUTCMonth(month);
        }

        this.renderCalendar();
        this.updatePreview();
    }

    /**
     * Handle time input changes
     */
    handleTimeChange() {
        const hoursInput = this.pickerElement.querySelector('.dtg-picker-hours');
        const minutesInput = this.pickerElement.querySelector('.dtg-picker-minutes');

        let hours = parseInt(hoursInput.value) || 0;
        let minutes = parseInt(minutesInput.value) || 0;

        // Clamp values
        hours = Math.max(0, Math.min(23, hours));
        minutes = Math.max(0, Math.min(59, minutes));

        // Update inputs
        hoursInput.value = String(hours).padStart(2, '0');
        minutesInput.value = String(minutes).padStart(2, '0');

        // Update selected date
        this.selectedDate.setUTCHours(hours);
        this.selectedDate.setUTCMinutes(minutes);

        this.updatePreview();
    }

    /**
     * Update time inputs from selected date
     */
    updateTimeInputs() {
        const hoursInput = this.pickerElement.querySelector('.dtg-picker-hours');
        const minutesInput = this.pickerElement.querySelector('.dtg-picker-minutes');

        hoursInput.value = String(this.selectedDate.getUTCHours()).padStart(2, '0');
        minutesInput.value = String(this.selectedDate.getUTCMinutes()).padStart(2, '0');
    }

    /**
     * Update DTG preview
     */
    updatePreview() {
        const previewElement = this.pickerElement.querySelector('.dtg-picker-preview-value');
        const dtg = DTGFormatter.format(this.selectedDate);
        previewElement.textContent = dtg;
    }

    /**
     * Destroy picker and clean up
     */
    destroy() {
        if (this.input) {
            this.input.removeEventListener('click', this.handleInputClick);
        }

        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('keydown', this.handleKeyDown);

        if (this.pickerElement) {
            this.pickerElement.remove();
        }
    }
}

