export class SecurityValidator {
    constructor() {
        this.allowedDomains = [
            'localhost',
            '127.0.0.1',
            '*.mil',
            '*.gov'
        ];

        this.blockedPatterns = [
            /javascript:/i,
            /data:/i,
            /vbscript:/i,
            /<script/i,
            /on\w+=/i,
            /eval\(/i,
            /function\(/i
        ];

        this.classificationLevels = [
            'UNCLASSIFIED',
            'CUI',
            'CONFIDENTIAL',
            'SECRET',
            'TOP SECRET'
        ];
    }

    validateWebhookConfig(config) {
        if (!config || typeof config !== 'object') {
            return false;
        }

        // Validate required fields
        if (!config.endpoint || typeof config.endpoint !== 'string') {
            return false;
        }

        // Validate endpoint URL
        if (!this.validateURL(config.endpoint)) {
            return false;
        }

        // Validate authentication if present
        if (config.auth && !this.validateAuthToken(config.auth)) {
            return false;
        }

        return true;
    }

    validateURL(url) {
        try {
            const urlObj = new URL(url);

            // Check protocol
            if (!['http:', 'https:'].includes(urlObj.protocol)) {
                return false;
            }

            // Check domain against allowed list
            if (!this.isDomainAllowed(urlObj.hostname)) {
                return false;
            }

            return true;
        } catch (error) {
            return false;
        }
    }

    isDomainAllowed(hostname) {
        return this.allowedDomains.some(domain => {
            if (domain.startsWith('*.')) {
                const suffix = domain.substring(2);
                return hostname.endsWith(suffix);
            }
            return hostname === domain;
        });
    }

    validateAuthToken(token) {
        if (!token || typeof token !== 'string') {
            return false;
        }

        // Check minimum length
        if (token.length < 16) {
            return false;
        }

        // Check for suspicious patterns
        return !this.containsSuspiciousPatterns(token);
    }

    containsSuspiciousPatterns(input) {
        return this.blockedPatterns.some(pattern => pattern.test(input));
    }

    validateClassificationLevel(level) {
        if (!level || typeof level !== 'string') {
            return false;
        }

        return this.classificationLevels.includes(level.toUpperCase());
    }

    sanitizeUserInput(input) {
        if (typeof input !== 'string') {
            return input;
        }

        return input
            .replace(/[<>]/g, '')
            .replace(/javascript:/gi, '')
            .replace(/on\w+=/gi, '')
            .replace(/eval\(/gi, '')
            .trim();
    }

    validateCSRFToken(token, expectedToken) {
        if (!token || !expectedToken) {
            return false;
        }

        return token === expectedToken;
    }

    validateSessionToken(token) {
        if (!token || typeof token !== 'string') {
            return false;
        }

        // Basic token format validation
        const parts = token.split('.');
        if (parts.length !== 3) {
            return false;
        }

        return true;
    }

    validatePermissions(userPermissions, requiredPermissions) {
        if (!Array.isArray(userPermissions) || !Array.isArray(requiredPermissions)) {
            return false;
        }

        return requiredPermissions.every(permission =>
            userPermissions.includes(permission)
        );
    }

    validateIPAddress(ip) {
        const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        const ipv6Regex = /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;

        return ipv4Regex.test(ip) || ipv6Regex.test(ip);
    }

    isSecureContext() {
        return window.isSecureContext || window.location.protocol === 'https:';
    }

    validateFileUpload(file, allowedTypes = [], maxSize = 10 * 1024 * 1024) {
        if (!file || !(file instanceof File)) {
            return { valid: false, error: 'Invalid file' };
        }

        if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
            return { valid: false, error: 'File type not allowed' };
        }

        if (file.size > maxSize) {
            return { valid: false, error: 'File size exceeds limit' };
        }

        return { valid: true };
    }

    generateSecurityHeaders() {
        return {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
            'Referrer-Policy': 'strict-origin-when-cross-origin'
        };
    }
}