export default {
    // Palantir Gotham/Foundry Integration
    palantir: {
        endpoint: process.env.PALANTIR_ENDPOINT || null,
        auth: process.env.PALANTIR_AUTH_TOKEN || null,
        timeout: 30000,
        retries: 3,
        capabilities: [
            'data-fusion',
            'analytics',
            'visualization',
            'ontology-management'
        ]
    },

    // DCGS-A Integration
    dcgs: {
        endpoint: process.env.DCGS_ENDPOINT || null,
        auth: process.env.DCGS_AUTH_TOKEN || null,
        timeout: 45000,
        retries: 2,
        capabilities: [
            'intelligence-analysis',
            'surveillance-data',
            'reconnaissance-reports',
            'threat-assessment'
        ]
    },

    // Joint Service Systems
    joint: {
        endpoint: process.env.JOINT_SYSTEMS_ENDPOINT || null,
        auth: process.env.JOINT_SYSTEMS_AUTH || null,
        timeout: 30000,
        retries: 3,
        capabilities: [
            'interoperability',
            'data-sharing',
            'cross-service-coordination'
        ]
    },

    // AI/ML Integration Endpoints
    aiml: {
        endpoint: process.env.AIML_ENDPOINT || 'https://api.military-ai.mil/v1',
        auth: process.env.AIML_AUTH_TOKEN || null,
        timeout: 60000,
        retries: 1,
        capabilities: [
            'predictive-analysis',
            'pattern-recognition',
            'decision-support',
            'automated-planning'
        ]
    },

    // Security Configuration
    security: {
        requireTLS: true,
        validateCertificates: true,
        allowedDomains: [
            '*.mil',
            '*.gov',
            'localhost'
        ],
        blockedDomains: [],
        encryptPayloads: true
    }
};