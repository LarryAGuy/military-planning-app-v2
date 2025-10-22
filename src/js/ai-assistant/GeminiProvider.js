/**
 * GeminiProvider - Google Gemini 2.5 Flash AI Provider
 * 
 * Cloud-based AI provider using Google Gemini API via Vercel serverless function.
 * 
 * Features:
 * - Google Gemini 2.5 Flash model (fast, intelligent, multimodal)
 * - Free tier: 1,500 requests/day
 * - UNCLASSIFIED content only (classification-aware filtering)
 * - Automatic endpoint detection (localhost vs Vercel)
 * - Health check with API availability verification
 * - Comprehensive error handling
 * 
 * Provider Interface:
 * - generateResponse(message, context): Generate AI response
 * - checkHealth(): Verify provider availability
 * - getInfo(): Get provider metadata
 * 
 * @class GeminiProvider
 */

export class GeminiProvider {
    /**
     * Create a new GeminiProvider instance
     */
    constructor() {
        this.name = 'Gemini';
        this.type = 'cloud';
        this.model = 'gemini-2.5-flash';
        this.available = true;
        this.timeout = 30000; // 30 seconds
        this.apiEndpoint = this.getApiEndpoint();

        // Health check caching to avoid excessive API calls
        this.healthCheckCache = {
            status: null,           // true (healthy), false (unhealthy), null (not checked)
            timestamp: null,        // Last health check timestamp
            ttl: 5 * 60 * 1000     // Cache TTL: 5 minutes
        };

        console.log(`✅ GeminiProvider initialized (endpoint: ${this.apiEndpoint})`);
    }
    
    /**
     * Get API endpoint based on environment
     * @returns {string} API endpoint URL
     */
    getApiEndpoint() {
        // Check if running on Vercel deployment
        if (window.location.hostname.includes('vercel.app')) {
            return '/api/ai/gemini';
        }
        
        // Check if running on localhost:3000 (Vercel dev server)
        if (window.location.hostname === 'localhost' && window.location.port === '3000') {
            return '/api/ai/gemini';
        }
        
        // Default to production Vercel deployment
        return 'https://military-planning-app-v2.vercel.app/api/ai/gemini';
    }
    
    /**
     * Generate AI response from user message
     * @param {string} message - User message
     * @param {Object} context - Context object with workspace, classification, operation, phase
     * @returns {Promise<Object>} Response object with content, provider, model, timestamp
     */
    async generateResponse(message, context = {}) {
        console.log(`🤖 GeminiProvider: Generating response for message: "${message.substring(0, 50)}..."`);
        console.log('📋 Context:', context);
        
        try {
            // Create request body
            const requestBody = {
                message: message,
                context: context
            };
            
            // Call serverless function
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody),
                signal: AbortSignal.timeout(this.timeout)
            });
            
            // Check response status
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                
                // Handle rate limiting
                if (response.status === 429) {
                    throw new Error(`Rate limit exceeded. ${errorData.message || 'Please try again later.'}`);
                }
                
                // Handle server errors
                if (response.status >= 500) {
                    throw new Error(`Server error: ${errorData.message || 'Please try again later.'}`);
                }
                
                // Handle client errors
                throw new Error(`API error: ${errorData.message || response.statusText}`);
            }
            
            // Parse response
            const data = await response.json();
            
            console.log('✅ GeminiProvider: Response generated successfully');
            
            return {
                content: data.content,
                provider: data.provider || this.name,
                model: data.model || this.model,
                timestamp: data.timestamp || new Date().toISOString()
            };
            
        } catch (error) {
            console.error('❌ GeminiProvider: Error generating response:', error);
            
            // Handle timeout errors
            if (error.name === 'TimeoutError' || error.name === 'AbortError') {
                throw new Error('Request timeout. The AI service took too long to respond.');
            }
            
            // Handle network errors
            if (error.message.includes('fetch')) {
                throw new Error('Network error. Please check your internet connection.');
            }
            
            // Re-throw other errors
            throw error;
        }
    }
    
    /**
     * Check provider health and availability (with caching)
     * @param {boolean} forceCheck - Force health check even if cached result is available
     * @returns {Promise<boolean>} Health status (true if healthy, false otherwise)
     */
    async checkHealth(forceCheck = false) {
        const now = Date.now();

        // Return cached result if available and not expired
        if (!forceCheck && this.healthCheckCache.status !== null && this.healthCheckCache.timestamp) {
            const age = now - this.healthCheckCache.timestamp;
            if (age < this.healthCheckCache.ttl) {
                const remainingSeconds = Math.floor((this.healthCheckCache.ttl - age) / 1000);
                console.log(`🏥 GeminiProvider: Using cached health status (${this.healthCheckCache.status ? 'healthy' : 'unhealthy'}, expires in ${remainingSeconds}s)`);
                return this.healthCheckCache.status;
            }
        }

        console.log('🏥 GeminiProvider: Running health check...');

        try {
            // Send a simple test message
            const testMessage = 'Hello';
            const testContext = {
                workspace: 'dashboard',
                classification: 'UNCLASSIFIED'
            };

            const response = await this.generateResponse(testMessage, testContext);

            // Verify response has content
            if (!response.content || response.content.trim().length === 0) {
                console.error('❌ GeminiProvider: Health check failed - Empty response from API');
                this.healthCheckCache.status = false;
                this.healthCheckCache.timestamp = now;
                return false;
            }

            console.log('✅ GeminiProvider: Health check passed');
            this.healthCheckCache.status = true;
            this.healthCheckCache.timestamp = now;
            return true;

        } catch (error) {
            console.error('❌ GeminiProvider: Health check failed:', error);

            // Cache unhealthy status
            this.healthCheckCache.status = false;
            this.healthCheckCache.timestamp = now;
            return false;
        }
    }
    
    /**
     * Get provider information
     * @returns {Object} Provider metadata
     */
    getInfo() {
        return {
            name: this.name,
            type: this.type,
            model: this.model,
            description: 'Google Gemini 2.5 Flash - Fast, intelligent, multimodal AI model',
            capabilities: [
                'Text generation',
                'Multimodal understanding',
                'Fast response times',
                'Doctrinal military planning guidance'
            ],
            limitations: [
                'UNCLASSIFIED content only',
                'Rate limited (1,500 requests/day)',
                'Requires internet connection',
                'Cloud-based (data sent to Google servers)'
            ],
            pricing: {
                tier: 'Free',
                limit: '1,500 requests/day',
                cost: '$0'
            },
            classification: {
                maxLevel: 'UNCLASSIFIED',
                cloudBased: true,
                warning: 'Do not use for classified content'
            },
            endpoint: this.apiEndpoint,
            timeout: this.timeout,
            available: this.available
        };
    }
    
    /**
     * Check if provider supports given classification level
     * @param {string} classification - Classification level (e.g., 'UNCLASSIFIED', 'CONFIDENTIAL')
     * @returns {boolean} True if classification is supported
     */
    supportsClassification(classification) {
        // Gemini provider only supports UNCLASSIFIED content
        return classification === 'UNCLASSIFIED';
    }
    
    /**
     * Get provider display name for UI
     * @returns {string} Display name
     */
    getDisplayName() {
        return `${this.name} (${this.model})`;
    }
    
    /**
     * Get provider status for UI (includes health check cache status)
     * @returns {Object} Status information
     */
    getStatus() {
        const now = Date.now();
        const cacheAge = this.healthCheckCache.timestamp ? now - this.healthCheckCache.timestamp : null;
        const cacheExpired = cacheAge !== null && cacheAge >= this.healthCheckCache.ttl;

        return {
            available: this.available,
            healthy: this.healthCheckCache.status,
            lastCheck: this.healthCheckCache.timestamp ? new Date(this.healthCheckCache.timestamp).toISOString() : null,
            cacheAge: cacheAge ? Math.floor(cacheAge / 1000) : null, // seconds
            cacheExpired: cacheExpired,
            message: this.getStatusMessage()
        };
    }

    /**
     * Get human-readable status message
     * @returns {string} Status message
     */
    getStatusMessage() {
        if (!this.available) {
            return 'Provider unavailable';
        }

        if (this.healthCheckCache.status === null) {
            return 'Health status unknown (not checked yet)';
        }

        if (this.healthCheckCache.status === true) {
            return 'Healthy and available';
        }

        if (this.healthCheckCache.status === false) {
            return 'Unhealthy (API may be overloaded or experiencing issues)';
        }
    }
    
    /**
     * Get provider icon class for UI
     * @returns {string} Icon class (Font Awesome)
     */
    getIconClass() {
        return 'fas fa-cloud'; // Cloud icon for cloud-based provider
    }
    
    /**
     * Get provider color for UI
     * @returns {string} Color hex code
     */
    getColor() {
        return '#4285F4'; // Google blue
    }
}

