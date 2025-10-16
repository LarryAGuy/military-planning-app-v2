import { APIClient } from '../utils/APIClient.js';
import { SecurityValidator } from '../utils/SecurityValidator.js';

export class WebhookManager {
    constructor() {
        this.webhooks = new Map();
        this.apiClient = new APIClient();
        this.securityValidator = new SecurityValidator();
        this.dodSystems = new Map();
    }

    async initialize() {
        console.log('🔗 Initializing WebhookManager...');

        await this.loadWebhookConfig();
        this.setupDoDSystems();
        this.startHealthChecks();

        console.log('✅ WebhookManager initialized');
    }

    async loadWebhookConfig() {
        try {
            const config = await import('../../config/webhooks.js');
            this.webhookConfig = config.default || config.getWebhookConfig?.() || config;
            console.log('✅ Webhook configuration loaded successfully');
        } catch (error) {
            console.warn('⚠️ No webhook config found, using defaults:', error.message);
            this.webhookConfig = this.getDefaultConfig();
        }
    }

    setupDoDSystems() {
        const dodSystems = [
            {
                name: 'palantir-gotham',
                endpoint: this.webhookConfig.palantir?.endpoint,
                auth: this.webhookConfig.palantir?.auth,
                capabilities: ['data-fusion', 'analytics', 'visualization']
            },
            {
                name: 'dcgs-a',
                endpoint: this.webhookConfig.dcgs?.endpoint,
                auth: this.webhookConfig.dcgs?.auth,
                capabilities: ['intelligence', 'surveillance', 'reconnaissance']
            },
            {
                name: 'joint-systems',
                endpoint: this.webhookConfig.joint?.endpoint,
                auth: this.webhookConfig.joint?.auth,
                capabilities: ['interoperability', 'data-sharing']
            }
        ];

        dodSystems.forEach(system => {
            if (system.endpoint) {
                this.dodSystems.set(system.name, system);
            }
        });
    }

    async registerWebhook(name, config) {
        if (!this.securityValidator.validateWebhookConfig(config)) {
            throw new Error('Invalid webhook configuration');
        }

        this.webhooks.set(name, {
            ...config,
            registered: new Date(),
            status: 'active'
        });

        console.log(`✅ Webhook registered: ${name}`);
    }

    async sendWebhook(systemName, data, options = {}) {
        const system = this.dodSystems.get(systemName);
        if (!system) {
            throw new Error(`DoD system not found: ${systemName}`);
        }

        try {
            const response = await this.apiClient.post(system.endpoint, data, {
                headers: {
                    'Authorization': system.auth,
                    'Content-Type': 'application/json',
                    'X-System-Integration': 'military-planning-v2'
                },
                ...options
            });

            return response;
        } catch (error) {
            console.error(`Webhook failed for ${systemName}:`, error);
            throw error;
        }
    }

    startHealthChecks() {
        setInterval(() => {
            this.checkSystemHealth();
        }, 30000); // Check every 30 seconds
    }

    async checkSystemHealth() {
        for (const [name, system] of this.dodSystems) {
            try {
                await this.apiClient.get(`${system.endpoint}/health`);
                system.status = 'healthy';
            } catch (error) {
                system.status = 'unhealthy';
                console.warn(`System ${name} health check failed:`, error.message);
            }
        }
    }

    getDefaultConfig() {
        return {
            palantir: { endpoint: null, auth: null },
            dcgs: { endpoint: null, auth: null },
            joint: { endpoint: null, auth: null }
        };
    }
}