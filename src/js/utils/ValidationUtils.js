export class ValidationUtils {
    constructor() {
        this.patterns = {
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            militaryEmail: /^[^\s@]+@(.*\.mil|.*\.gov)$/,
            phone: /^\+?[\d\s\-\(\)]+$/,
            militaryTime: /^([01]?[0-9]|2[0-3])[0-5][0-9]$/,
            coordinates: /^-?([1-8]?[0-9]\.{1}\d{1,6}$|90\.{1}0{1,6}$)/,
            classification: /^(UNCLASSIFIED|CUI|CONFIDENTIAL|SECRET|TOP SECRET)$/i,
            uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
        };
    }

    validateEmail(email) {
        if (!email || typeof email !== 'string') {
            return { valid: false, error: 'Email is required and must be a string' };
        }

        if (!this.patterns.email.test(email)) {
            return { valid: false, error: 'Invalid email format' };
        }

        return { valid: true };
    }

    validateMilitaryEmail(email) {
        const basicValidation = this.validateEmail(email);
        if (!basicValidation.valid) {
            return basicValidation;
        }

        if (!this.patterns.militaryEmail.test(email)) {
            return { valid: false, error: 'Email must be from .mil or .gov domain' };
        }

        return { valid: true };
    }

    validatePassword(password, requirements = {}) {
        const defaults = {
            minLength: 8,
            requireUppercase: true,
            requireLowercase: true,
            requireNumbers: true,
            requireSpecialChars: true
        };

        const config = { ...defaults, ...requirements };

        if (!password || typeof password !== 'string') {
            return { valid: false, error: 'Password is required and must be a string' };
        }

        if (password.length < config.minLength) {
            return { valid: false, error: `Password must be at least ${config.minLength} characters long` };
        }

        if (config.requireUppercase && !/[A-Z]/.test(password)) {
            return { valid: false, error: 'Password must contain at least one uppercase letter' };
        }

        if (config.requireLowercase && !/[a-z]/.test(password)) {
            return { valid: false, error: 'Password must contain at least one lowercase letter' };
        }

        if (config.requireNumbers && !/\d/.test(password)) {
            return { valid: false, error: 'Password must contain at least one number' };
        }

        if (config.requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return { valid: false, error: 'Password must contain at least one special character' };
        }

        return { valid: true };
    }

    validateClassification(classification) {
        if (!classification || typeof classification !== 'string') {
            return { valid: false, error: 'Classification is required and must be a string' };
        }

        if (!this.patterns.classification.test(classification)) {
            return { valid: false, error: 'Invalid classification level' };
        }

        return { valid: true };
    }

    validateCoordinates(lat, lon) {
        if (typeof lat !== 'number' || typeof lon !== 'number') {
            return { valid: false, error: 'Coordinates must be numbers' };
        }

        if (lat < -90 || lat > 90) {
            return { valid: false, error: 'Latitude must be between -90 and 90' };
        }

        if (lon < -180 || lon > 180) {
            return { valid: false, error: 'Longitude must be between -180 and 180' };
        }

        return { valid: true };
    }

    validateMilitaryTime(time) {
        if (!time || typeof time !== 'string') {
            return { valid: false, error: 'Military time is required and must be a string' };
        }

        if (!this.patterns.militaryTime.test(time)) {
            return { valid: false, error: 'Invalid military time format (HHMM)' };
        }

        return { valid: true };
    }

    validateUUID(uuid) {
        if (!uuid || typeof uuid !== 'string') {
            return { valid: false, error: 'UUID is required and must be a string' };
        }

        if (!this.patterns.uuid.test(uuid)) {
            return { valid: false, error: 'Invalid UUID format' };
        }

        return { valid: true };
    }

    validateRequired(value, fieldName = 'Field') {
        if (value === null || value === undefined || value === '') {
            return { valid: false, error: `${fieldName} is required` };
        }

        return { valid: true };
    }

    validateLength(value, min = 0, max = Infinity, fieldName = 'Field') {
        if (typeof value !== 'string') {
            return { valid: false, error: `${fieldName} must be a string` };
        }

        if (value.length < min) {
            return { valid: false, error: `${fieldName} must be at least ${min} characters long` };
        }

        if (value.length > max) {
            return { valid: false, error: `${fieldName} must be no more than ${max} characters long` };
        }

        return { valid: true };
    }

    validateObject(obj, schema) {
        const errors = [];

        for (const [field, rules] of Object.entries(schema)) {
            const value = obj[field];

            for (const rule of rules) {
                const result = rule(value);
                if (!result.valid) {
                    errors.push({ field, error: result.error });
                }
            }
        }

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

    sanitizeInput(input) {
        if (typeof input !== 'string') {
            return input;
        }

        return input
            .replace(/[<>]/g, '') // Remove potential HTML tags
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .replace(/on\w+=/gi, '') // Remove event handlers
            .trim();
    }
}