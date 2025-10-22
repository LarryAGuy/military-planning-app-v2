/**
 * HuggingFaceProvider - Cloud AI provider using IBM Granite 3.3 8B Instruct
 * 
 * Provides AI responses via Hugging Face Inference API through Vercel serverless function.
 * 
 * Features:
 * - IBM Granite 3.3 8B Instruct model
 * - Serverless function integration
 * - Health checks (API availability)
 * - Timeout handling (30s max)
 * - Error handling with fallback support
 * - Rate limiting awareness
 * 
 * @class HuggingFaceProvider
 */

export class HuggingFaceProvider {
    constructor() {
        this.name = 'HuggingFace';
        this.type = 'cloud';
        // NOTE: IBM Granite 3.3 8B not available via free Inference API
        // Using Microsoft Phi-3-mini-4k-instruct (3.8B) as alternative
        this.model = 'microsoft/Phi-3-mini-4k-instruct';
        this.available = true;
        this.timeout = 30000; // 30 seconds

        // Determine API endpoint based on environment
        this.apiEndpoint = this.getApiEndpoint();
    }

    /**
     * Get API endpoint based on environment
     * @returns {string} API endpoint URL
     */
    getApiEndpoint() {
        // Check if running on Vercel deployment
        if (window.location.hostname.includes('vercel.app')) {
            return '/api/ai/huggingface';
        }
        
        // Check if running on localhost with Vercel dev server
        if (window.location.hostname === 'localhost' && window.location.port === '3000') {
            return '/api/ai/huggingface';
        }
        
        // For local development with static server, use Vercel deployment URL
        // This will be updated after deployment
        return 'https://military-planning-app-v2.vercel.app/api/ai/huggingface';
    }

    /**
     * Generate AI response using Hugging Face API
     * @param {string} message - User message
     * @param {Object} context - Context object (workspace, classification, etc.)
     * @returns {Promise<Object>} Response object
     */
    async generateResponse(message, context = {}) {
        console.log('🤖 HuggingFaceProvider generating response...', { message, context });
        
        const startTime = Date.now();
        
        try {
            // Create abort controller for timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), this.timeout);
            
            // Call serverless function
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message,
                    context
                }),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            // Check response status
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                
                // Handle rate limiting
                if (response.status === 429) {
                    throw new Error(`Rate limit exceeded. Reset time: ${errorData.resetTime || 'unknown'}`);
                }
                
                // Handle other errors
                throw new Error(errorData.message || `API error: ${response.status}`);
            }
            
            // Parse response
            const data = await response.json();
            
            const duration = Date.now() - startTime;
            console.log(`✅ HuggingFace response generated in ${duration}ms`);
            
            return {
                content: data.content,
                provider: this.name,
                model: this.model,
                timestamp: data.timestamp || new Date().toISOString()
            };
            
        } catch (error) {
            const duration = Date.now() - startTime;
            console.error(`❌ HuggingFace error after ${duration}ms:`, error);
            
            // Handle timeout
            if (error.name === 'AbortError') {
                throw new Error('Request timeout (30s exceeded)');
            }
            
            // Re-throw error for provider manager to handle
            throw error;
        }
    }

    /**
     * Check provider health
     * @returns {Promise<boolean>} Health status
     */
    async checkHealth() {
        try {
            console.log('🏥 Checking HuggingFace provider health...');
            
            // Create abort controller for timeout (5s for health check)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            
            // Send minimal health check request
            const response = await fetch(this.apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: 'health check',
                    context: {}
                }),
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            // Consider healthy if we get any response (even rate limit)
            // Rate limit means API is working, just at capacity
            const isHealthy = response.status === 200 || response.status === 429;
            
            console.log(`🏥 HuggingFace provider health: ${isHealthy ? '✅ Healthy' : '❌ Unhealthy'}`);
            
            return isHealthy;
            
        } catch (error) {
            console.error('❌ HuggingFace health check failed:', error);
            return false;
        }
    }

    /**
     * Get provider information
     * @returns {Object} Provider info
     */
    getInfo() {
        return {
            name: this.name,
            type: this.type,
            model: this.model,
            available: this.available,
            timeout: this.timeout,
            description: 'Cloud AI provider using Microsoft Phi-3-mini-4k-instruct (3.8B) via Hugging Face Inference API',
            features: [
                'Microsoft Phi-3-mini-4k-instruct (3.8B parameters)',
                'Optimized for instruction-following',
                'Serverless function integration',
                'Rate limiting (300 requests/hour)',
                'Timeout handling (30s max)',
                'Context-aware responses'
            ],
            limitations: [
                'UNCLASSIFIED content only',
                'Rate limited (300 requests/hour)',
                'Requires internet connection',
                'Cloud-based (not suitable for classified networks)'
            ],
            cost: 'Free tier (Hugging Face Inference API)'
        };
    }

    /**
     * Get rate limit status from last response
     * @returns {Object|null} Rate limit info
     */
    getRateLimitStatus() {
        // This would be populated from response headers
        // For now, return null (can be enhanced later)
        return null;
    }

    /**
     * Test connection to API endpoint
     * @returns {Promise<boolean>} Connection status
     */
    async testConnection() {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);
            
            const response = await fetch(this.apiEndpoint, {
                method: 'OPTIONS',
                signal: controller.signal
            });
            
            clearTimeout(timeoutId);
            
            return response.ok || response.status === 200 || response.status === 204;
            
        } catch (error) {
            console.error('❌ Connection test failed:', error);
            return false;
        }
    }

    /**
     * Get estimated response time
     * @returns {number} Estimated response time in milliseconds
     */
    getEstimatedResponseTime() {
        // IBM Granite 3.3 8B typically responds in 2-5 seconds
        return 3000;
    }

    /**
     * Check if provider supports streaming
     * @returns {boolean} Streaming support
     */
    supportsStreaming() {
        return false; // Not implemented in Phase 3
    }

    /**
     * Get provider capabilities
     * @returns {Object} Capabilities
     */
    getCapabilities() {
        return {
            maxTokens: 500,
            temperature: 0.7,
            topP: 0.9,
            streaming: false,
            contextWindow: 8192,
            languages: ['en'],
            specializations: [
                'Military planning',
                'OPORD creation',
                'MDMP process',
                'JPP process',
                'Tactical analysis',
                'Doctrinal references'
            ]
        };
    }
}

