/**
 * AiProviderManager - Manages AI provider selection and response generation
 *
 * Orchestrates multiple AI providers with:
 * - Provider selection logic with health checks
 * - Fallback cascade (HuggingFace → Ollama → Fallback)
 * - Classification-aware provider filtering
 * - EventBus integration for cross-component communication
 *
 * @class AiProviderManager
 * @param {EventBus} eventBus - EventBus instance for cross-component communication
 */
import { FallbackProvider } from './FallbackProvider.js';
import { HuggingFaceProvider } from './HuggingFaceProvider.js';

export class AiProviderManager {
    constructor(eventBus) {
        this.eventBus = eventBus;
        this.providers = new Map();
        this.currentProvider = null;

        // Initialize providers
        this.initializeProviders();
    }

    /**
     * Initialize available providers
     */
    initializeProviders() {
        console.log('🔧 Initializing AI providers...');

        // Phase 2: Fallback provider (rule-based, always available)
        const fallbackProvider = new FallbackProvider();
        this.providers.set('fallback', fallbackProvider);

        // Phase 3: HuggingFace provider (IBM Granite 3.3 8B, UNCLASSIFIED only)
        const huggingFaceProvider = new HuggingFaceProvider();
        this.providers.set('huggingface', huggingFaceProvider);

        // Phase 6: Ollama provider (local inference, all classifications)
        // const ollamaProvider = new OllamaProvider();
        // this.providers.set('ollama', ollamaProvider);

        console.log(`✅ Initialized ${this.providers.size} provider(s):`, Array.from(this.providers.keys()));
    }

    /**
     * Select appropriate provider based on context
     * @param {Object} context - Workspace context
     * @returns {Promise<Object>} Selected provider
     */
    async selectProvider(context = {}) {
        console.log('🔍 Selecting AI provider...', context);

        const { classification } = context;

        // Classification-aware filtering
        // No cloud APIs for SECRET/TOP SECRET
        const allowCloudProviders = this.isCloudAllowed(classification);

        // Provider priority cascade
        const providerPriority = allowCloudProviders
            ? ['huggingface', 'ollama', 'fallback']  // Cloud allowed
            : ['ollama', 'fallback'];                 // Cloud NOT allowed

        // Select first healthy provider
        for (const providerName of providerPriority) {
            const provider = this.providers.get(providerName);
            
            if (!provider) {
                continue; // Provider not initialized yet
            }

            const isHealthy = await this.checkProviderHealth(provider);
            
            if (isHealthy) {
                this.currentProvider = provider;
                console.log(`✅ Selected provider: ${provider.name}`);
                
                // Emit event
                this.eventBus.emit('ai:provider-selected', {
                    provider: provider.name,
                    type: provider.type,
                    classification: classification || 'UNCLASSIFIED'
                });

                return provider;
            }
        }

        // Should never reach here (Fallback is always healthy)
        throw new Error('No healthy AI provider available');
    }

    /**
     * Check if cloud providers are allowed based on classification
     * @param {string} classification - Classification level
     * @returns {boolean} True if cloud providers allowed
     */
    isCloudAllowed(classification) {
        if (!classification) {
            return true; // Default to UNCLASSIFIED
        }

        const normalizedClassification = classification.toUpperCase();

        // Cloud providers NOT allowed for classified content
        const restrictedLevels = ['CONFIDENTIAL', 'SECRET', 'TOP SECRET', 'TS'];

        return !restrictedLevels.some(level => normalizedClassification.includes(level));
    }

    /**
     * Check provider health
     * @param {Object} provider - Provider instance
     * @returns {Promise<boolean>} Health status
     */
    async checkProviderHealth(provider) {
        try {
            const isHealthy = await provider.checkHealth();
            console.log(`🏥 Provider ${provider.name} health:`, isHealthy ? '✅ Healthy' : '❌ Unhealthy');
            return isHealthy;
        } catch (error) {
            console.error(`❌ Provider ${provider.name} health check failed:`, error);
            return false;
        }
    }

    /**
     * Generate AI response
     * @param {string} message - User message
     * @param {Object} context - Workspace context
     * @returns {Promise<Object>} AI response
     */
    async generateResponse(message, context = {}) {
        console.log('💬 Generating AI response...', { message, context });

        try {
            // Select provider
            const provider = await this.selectProvider(context);

            // Generate response
            const startTime = Date.now();
            const response = await provider.generateResponse(message, context);
            const duration = Date.now() - startTime;

            console.log(`✅ Response generated in ${duration}ms by ${provider.name}`);

            // Emit event
            this.eventBus.emit('ai:response-received', {
                provider: provider.name,
                duration,
                messageLength: response.content.length
            });

            return response;

        } catch (error) {
            console.error('❌ AI response generation failed:', error);

            // Emit error event
            this.eventBus.emit('ai:error', {
                error: error.message,
                message,
                context
            });

            // Fallback error response
            return {
                content: 'I apologize, but I encountered an error processing your request. Please try again or rephrase your question.',
                provider: 'error',
                timestamp: new Date().toISOString(),
                error: error.message
            };
        }
    }

    /**
     * Get all available providers
     * @returns {Array<Object>} Provider information
     */
    getAvailableProviders() {
        const providers = [];
        
        for (const [name, provider] of this.providers) {
            providers.push({
                name,
                info: provider.getInfo()
            });
        }

        return providers;
    }

    /**
     * Get current provider
     * @returns {Object|null} Current provider
     */
    getCurrentProvider() {
        return this.currentProvider;
    }

    /**
     * Force provider selection
     * @param {string} providerName - Provider name
     * @returns {boolean} Success status
     */
    forceProvider(providerName) {
        const provider = this.providers.get(providerName);
        
        if (!provider) {
            console.error(`❌ Provider ${providerName} not found`);
            return false;
        }

        this.currentProvider = provider;
        console.log(`🔧 Forced provider: ${provider.name}`);

        this.eventBus.emit('ai:provider-selected', {
            provider: provider.name,
            type: provider.type,
            forced: true
        });

        return true;
    }

    /**
     * Get provider statistics
     * @returns {Object} Provider statistics
     */
    getStatistics() {
        return {
            totalProviders: this.providers.size,
            availableProviders: Array.from(this.providers.keys()),
            currentProvider: this.currentProvider?.name || null
        };
    }
}

