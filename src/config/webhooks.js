/**
 * Webhook Configuration for Military Planning App V2
 * Defines webhook endpoints and integration settings for military systems
 */

export default {
    // Development environment settings
    development: {
        enabled: false,
        baseUrl: 'http://localhost:8080',
        timeout: 5000,
        retries: 3,
        endpoints: {
            // Local development webhooks (disabled by default)
            opordCreated: {
                url: '/webhooks/opord/created',
                method: 'POST',
                enabled: false
            },
            mdmpCompleted: {
                url: '/webhooks/mdmp/completed',
                method: 'POST',
                enabled: false
            },
            classificationChanged: {
                url: '/webhooks/classification/changed',
                method: 'POST',
                enabled: false
            }
        }
    },

    // Production environment settings
    production: {
        enabled: true,
        baseUrl: process.env.WEBHOOK_BASE_URL || 'https://api.military-planning.mil',
        timeout: 10000,
        retries: 5,
        authentication: {
            type: 'bearer',
            token: process.env.WEBHOOK_AUTH_TOKEN
        },
        endpoints: {
            // DoD System Integrations
            opordCreated: {
                url: '/api/v1/webhooks/opord/created',
                method: 'POST',
                enabled: true,
                classification: 'SECRET',
                network: 'SIPR'
            },
            mdmpCompleted: {
                url: '/api/v1/webhooks/mdmp/completed',
                method: 'POST',
                enabled: true,
                classification: 'SECRET',
                network: 'SIPR'
            },
            classificationChanged: {
                url: '/api/v1/webhooks/classification/changed',
                method: 'POST',
                enabled: true,
                classification: 'SECRET',
                network: 'SIPR'
            },
            // Additional military system integrations
            palantirGotham: {
                url: '/api/v1/integrations/palantir/gotham',
                method: 'POST',
                enabled: false,
                classification: 'TOP SECRET',
                network: 'JWICS'
            },
            dcgsA: {
                url: '/api/v1/integrations/dcgs-a',
                method: 'POST',
                enabled: false,
                classification: 'SECRET',
                network: 'SIPR'
            },
            cpof: {
                url: '/api/v1/integrations/cpof',
                method: 'POST',
                enabled: false,
                classification: 'SECRET',
                network: 'SIPR'
            }
        }
    },

    // Security settings
    security: {
        // Allowed domains for webhook callbacks
        allowedDomains: [
            'localhost',
            '*.mil',
            '*.army.mil',
            '*.navy.mil',
            '*.af.mil',
            '*.marines.mil',
            '*.uscg.mil',
            '*.spaceforce.mil'
        ],
        
        // Required headers for webhook requests
        requiredHeaders: {
            'User-Agent': 'MilitaryPlanningApp/2.0',
            'X-Classification-Level': 'SECRET',
            'X-Network-Type': 'SIPR'
        },
        
        // SSL/TLS requirements
        ssl: {
            required: true,
            verifyPeer: true,
            verifyHost: true,
            minVersion: 'TLSv1.2'
        }
    },

    // Retry configuration
    retry: {
        maxAttempts: 5,
        backoffStrategy: 'exponential',
        initialDelay: 1000,
        maxDelay: 30000,
        jitter: true
    },

    // Logging configuration
    logging: {
        enabled: true,
        level: 'info',
        includePayload: false, // Security: Don't log classified payloads
        includeHeaders: false,  // Security: Don't log authentication headers
        auditTrail: true
    },

    // Rate limiting
    rateLimit: {
        enabled: true,
        maxRequests: 100,
        windowMs: 60000, // 1 minute
        skipSuccessfulRequests: false
    },

    // Payload validation
    validation: {
        enabled: true,
        maxPayloadSize: 1048576, // 1MB
        allowedContentTypes: [
            'application/json',
            'application/xml',
            'text/plain'
        ],
        schemas: {
            opordCreated: {
                type: 'object',
                required: ['id', 'title', 'classification', 'dtg'],
                properties: {
                    id: { type: 'string' },
                    title: { type: 'string' },
                    classification: { 
                        type: 'string',
                        enum: ['UNCLASSIFIED', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET']
                    },
                    dtg: { type: 'string', pattern: '^[0-9]{6}Z [A-Z]{3} [0-9]{2}$' }
                }
            },
            mdmpCompleted: {
                type: 'object',
                required: ['id', 'mission', 'selectedCOA', 'participants'],
                properties: {
                    id: { type: 'string' },
                    mission: { type: 'string' },
                    selectedCOA: { type: 'string' },
                    participants: { type: 'array', items: { type: 'string' } }
                }
            }
        }
    },

    // Event types and their configurations
    eventTypes: {
        'opord:created': {
            description: 'Triggered when a new OPORD is created',
            classification: 'SECRET',
            retention: '7 years',
            auditRequired: true
        },
        'opord:updated': {
            description: 'Triggered when an OPORD is modified',
            classification: 'SECRET',
            retention: '7 years',
            auditRequired: true
        },
        'opord:deleted': {
            description: 'Triggered when an OPORD is deleted',
            classification: 'SECRET',
            retention: '7 years',
            auditRequired: true
        },
        'mdmp:started': {
            description: 'Triggered when MDMP process begins',
            classification: 'SECRET',
            retention: '5 years',
            auditRequired: true
        },
        'mdmp:completed': {
            description: 'Triggered when MDMP process completes',
            classification: 'SECRET',
            retention: '5 years',
            auditRequired: true
        },
        'classification:changed': {
            description: 'Triggered when document classification changes',
            classification: 'SECRET',
            retention: '10 years',
            auditRequired: true
        },
        'user:login': {
            description: 'Triggered when user authenticates',
            classification: 'CONFIDENTIAL',
            retention: '3 years',
            auditRequired: true
        },
        'system:error': {
            description: 'Triggered when system errors occur',
            classification: 'UNCLASSIFIED',
            retention: '1 year',
            auditRequired: false
        }
    },

    // Integration-specific settings
    integrations: {
        office365: {
            enabled: false,
            clientId: process.env.O365_CLIENT_ID,
            tenantId: process.env.O365_TENANT_ID,
            scopes: ['Files.ReadWrite', 'Sites.ReadWrite.All'],
            classification: 'CONFIDENTIAL'
        },
        sharepoint: {
            enabled: false,
            siteUrl: process.env.SHAREPOINT_SITE_URL,
            listName: 'Military Planning Documents',
            classification: 'SECRET'
        },
        teams: {
            enabled: false,
            webhookUrl: process.env.TEAMS_WEBHOOK_URL,
            classification: 'CONFIDENTIAL'
        }
    },

    // Monitoring and health checks
    monitoring: {
        healthCheck: {
            enabled: true,
            interval: 300000, // 5 minutes
            timeout: 5000,
            endpoint: '/health'
        },
        metrics: {
            enabled: true,
            endpoint: '/metrics',
            includeSystemMetrics: true,
            includeApplicationMetrics: true
        }
    }
};

// Environment-specific configuration getter
export function getWebhookConfig() {
    const environment = process.env.NODE_ENV || 'development';
    const config = webhookConfig[environment] || webhookConfig.development;
    
    return {
        ...config,
        security: webhookConfig.security,
        retry: webhookConfig.retry,
        logging: webhookConfig.logging,
        rateLimit: webhookConfig.rateLimit,
        validation: webhookConfig.validation,
        eventTypes: webhookConfig.eventTypes,
        integrations: webhookConfig.integrations,
        monitoring: webhookConfig.monitoring
    };
}

// Webhook URL builder utility
export function buildWebhookUrl(endpoint, baseUrl = null) {
    const config = getWebhookConfig();
    const base = baseUrl || config.baseUrl;
    return `${base}${endpoint}`;
}

// Webhook payload validator
export function validateWebhookPayload(eventType, payload) {
    const config = getWebhookConfig();
    
    if (!config.validation.enabled) {
        return { valid: true };
    }
    
    const schema = config.validation.schemas[eventType];
    if (!schema) {
        return { valid: false, error: `No schema defined for event type: ${eventType}` };
    }
    
    // Basic validation (in production, use a proper JSON schema validator)
    if (schema.required) {
        for (const field of schema.required) {
            if (!(field in payload)) {
                return { valid: false, error: `Missing required field: ${field}` };
            }
        }
    }
    
    return { valid: true };
}
