/**
 * DTG (Date-Time Group) Formatter Utility
 * 
 * Utilities for formatting, parsing, and validating military DTG format.
 * Format: DDHHMMZ MMM YYYY (e.g., "061200Z OCT 2025")
 * 
 * @example
 * const dtg = DTGFormatter.format(new Date());
 * // Returns: "061200Z OCT 2025"
 * 
 * const date = DTGFormatter.parse("061200Z OCT 2025");
 * // Returns: Date object
 */

export class DTGFormatter {
    /**
     * Format a Date object to military DTG format
     * @param {Date} date - Date object (uses UTC)
     * @returns {string} Formatted DTG (e.g., "061200Z OCT 2025")
     */
    static format(date) {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            console.error('DTGFormatter.format: Invalid date provided');
            return '';
        }
        
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const month = this.getMonthAbbr(date.getUTCMonth());
        const year = date.getUTCFullYear();
        
        return `${day}${hours}${minutes}Z ${month} ${year}`;
    }
    
    /**
     * Parse a DTG string to Date object
     * @param {string} dtg - DTG string (e.g., "061200Z OCT 2025")
     * @returns {Date|null} Date object or null if invalid
     */
    static parse(dtg) {
        if (typeof dtg !== 'string') {
            return null;
        }
        
        // Regex: DDHHMMZ MMM YYYY
        const regex = /^(\d{2})(\d{2})(\d{2})Z\s+([A-Z]{3})\s+(\d{4})$/;
        const match = dtg.trim().match(regex);
        
        if (!match) {
            return null;
        }
        
        const [, day, hours, minutes, monthAbbr, year] = match;
        const month = this.getMonthIndex(monthAbbr);
        
        if (month === -1) {
            return null;
        }
        
        // Validate ranges
        const dayNum = parseInt(day);
        const hoursNum = parseInt(hours);
        const minutesNum = parseInt(minutes);
        const yearNum = parseInt(year);
        
        if (dayNum < 1 || dayNum > 31) return null;
        if (hoursNum < 0 || hoursNum > 23) return null;
        if (minutesNum < 0 || minutesNum > 59) return null;
        if (yearNum < 1900 || yearNum > 2100) return null;
        
        try {
            const date = new Date(Date.UTC(yearNum, month, dayNum, hoursNum, minutesNum));
            
            // Verify the date is valid (handles invalid dates like Feb 30)
            if (date.getUTCDate() !== dayNum || date.getUTCMonth() !== month) {
                return null;
            }
            
            return date;
        } catch (error) {
            return null;
        }
    }
    
    /**
     * Validate DTG format
     * @param {string} dtg - DTG string
     * @returns {boolean} True if valid
     */
    static validate(dtg) {
        return this.parse(dtg) !== null;
    }
    
    /**
     * Get current DTG (now)
     * @returns {string} Current DTG
     */
    static now() {
        return this.format(new Date());
    }
    
    /**
     * Get month abbreviation from month index (0-11)
     * @param {number} monthIndex - Month index (0 = January, 11 = December)
     * @returns {string} Month abbreviation (e.g., "JAN")
     */
    static getMonthAbbr(monthIndex) {
        const months = [
            'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
            'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
        ];
        
        if (monthIndex < 0 || monthIndex > 11) {
            return 'JAN';
        }
        
        return months[monthIndex];
    }
    
    /**
     * Get month index from month abbreviation
     * @param {string} monthAbbr - Month abbreviation (e.g., "JAN")
     * @returns {number} Month index (0-11) or -1 if invalid
     */
    static getMonthIndex(monthAbbr) {
        const months = [
            'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
            'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
        ];
        
        return months.indexOf(monthAbbr.toUpperCase());
    }
    
    /**
     * Get full month name from abbreviation
     * @param {string} monthAbbr - Month abbreviation (e.g., "JAN")
     * @returns {string} Full month name (e.g., "January")
     */
    static getMonthName(monthAbbr) {
        const monthNames = {
            'JAN': 'January', 'FEB': 'February', 'MAR': 'March',
            'APR': 'April', 'MAY': 'May', 'JUN': 'June',
            'JUL': 'July', 'AUG': 'August', 'SEP': 'September',
            'OCT': 'October', 'NOV': 'November', 'DEC': 'December'
        };
        
        return monthNames[monthAbbr.toUpperCase()] || 'January';
    }
    
    /**
     * Format time component only (HHMM)
     * @param {number} hours - Hours (0-23)
     * @param {number} minutes - Minutes (0-59)
     * @returns {string} Formatted time (e.g., "1200")
     */
    static formatTime(hours, minutes) {
        const h = String(hours).padStart(2, '0');
        const m = String(minutes).padStart(2, '0');
        return `${h}${m}`;
    }
    
    /**
     * Parse time component (HHMM)
     * @param {string} time - Time string (e.g., "1200")
     * @returns {Object|null} Object with hours and minutes, or null if invalid
     */
    static parseTime(time) {
        if (typeof time !== 'string' || time.length !== 4) {
            return null;
        }
        
        const hours = parseInt(time.substring(0, 2));
        const minutes = parseInt(time.substring(2, 4));
        
        if (isNaN(hours) || isNaN(minutes)) {
            return null;
        }
        
        if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
            return null;
        }
        
        return { hours, minutes };
    }
    
    /**
     * Get days in month
     * @param {number} year - Year
     * @param {number} month - Month index (0-11)
     * @returns {number} Number of days in month
     */
    static getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }
    
    /**
     * Check if year is leap year
     * @param {number} year - Year
     * @returns {boolean} True if leap year
     */
    static isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    
    /**
     * Add days to a date
     * @param {Date} date - Starting date
     * @param {number} days - Number of days to add (can be negative)
     * @returns {Date} New date
     */
    static addDays(date, days) {
        const result = new Date(date);
        result.setUTCDate(result.getUTCDate() + days);
        return result;
    }
    
    /**
     * Add hours to a date
     * @param {Date} date - Starting date
     * @param {number} hours - Number of hours to add (can be negative)
     * @returns {Date} New date
     */
    static addHours(date, hours) {
        const result = new Date(date);
        result.setUTCHours(result.getUTCHours() + hours);
        return result;
    }
    
    /**
     * Get difference between two dates in days
     * @param {Date} date1 - First date
     * @param {Date} date2 - Second date
     * @returns {number} Difference in days
     */
    static getDaysDifference(date1, date2) {
        const msPerDay = 24 * 60 * 60 * 1000;
        return Math.round((date2 - date1) / msPerDay);
    }
    
    /**
     * Check if two DTGs are the same
     * @param {string} dtg1 - First DTG
     * @param {string} dtg2 - Second DTG
     * @returns {boolean} True if same
     */
    static isSame(dtg1, dtg2) {
        const date1 = this.parse(dtg1);
        const date2 = this.parse(dtg2);
        
        if (!date1 || !date2) return false;
        
        return date1.getTime() === date2.getTime();
    }
    
    /**
     * Check if DTG is in the past
     * @param {string} dtg - DTG string
     * @returns {boolean} True if in the past
     */
    static isPast(dtg) {
        const date = this.parse(dtg);
        if (!date) return false;
        
        return date < new Date();
    }
    
    /**
     * Check if DTG is in the future
     * @param {string} dtg - DTG string
     * @returns {boolean} True if in the future
     */
    static isFuture(dtg) {
        const date = this.parse(dtg);
        if (!date) return false;
        
        return date > new Date();
    }
    
    /**
     * Format DTG for display (with line break for mobile)
     * @param {string} dtg - DTG string
     * @returns {string} Formatted DTG with optional line break
     */
    static formatForDisplay(dtg) {
        return dtg; // Can be enhanced for responsive display
    }
}

