/**
 * Vercel Serverless Function - Hugging Face Inference API Integration
 * 
 * Provides secure server-side access to Hugging Face Inference API for
 * IBM Granite 3.3 8B Instruct model.
 * 
 * Features:
 * - Rate limiting (300 requests/hour per IP)
 * - Request timeout (30 seconds)
 * - Error handling with appropriate HTTP status codes
 * - CORS support for localhost and Vercel deployment
 * - Request validation
 * 
 * Environment Variables:
 * - HUGGINGFACE_API_KEY: Hugging Face API key for authentication
 * 
 * @param {Request} req - Vercel request object
 * @param {Response} res - Vercel response object
 */

// Rate limiting storage (in-memory, resets on cold start)
const rateLimitStore = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const RATE_LIMIT_MAX_REQUESTS = 300;

// Hugging Face API configuration
// NOTE: IBM Granite 3.3 8B is not available via free Inference API
// Using Microsoft Phi-3-mini-4k-instruct (3.8B) as alternative
// This model is smaller but available via free tier and optimized for instruction-following
const HF_API_URL = 'https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct';
const HF_MODEL_NAME = 'microsoft/Phi-3-mini-4k-instruct';
const HF_TIMEOUT = 30000; // 30 seconds

/**
 * Check rate limit for IP address
 * @param {string} ip - Client IP address
 * @returns {Object} Rate limit status
 */
function checkRateLimit(ip) {
    const now = Date.now();
    const key = `ratelimit:${ip}`;
    
    // Get or create rate limit entry
    let entry = rateLimitStore.get(key);
    
    if (!entry) {
        entry = {
            count: 0,
            resetTime: now + RATE_LIMIT_WINDOW
        };
        rateLimitStore.set(key, entry);
    }
    
    // Reset if window expired
    if (now > entry.resetTime) {
        entry.count = 0;
        entry.resetTime = now + RATE_LIMIT_WINDOW;
    }
    
    // Check if limit exceeded
    if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
        return {
            allowed: false,
            remaining: 0,
            resetTime: entry.resetTime
        };
    }
    
    // Increment count
    entry.count++;
    
    return {
        allowed: true,
        remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
        resetTime: entry.resetTime
    };
}

/**
 * Call Hugging Face Inference API with timeout
 * @param {string} message - User message
 * @param {Object} context - Context object
 * @returns {Promise<Object>} API response
 */
async function callHuggingFaceAPI(message, context) {
    const apiKey = process.env.HUGGINGFACE_API_KEY;
    
    if (!apiKey) {
        throw new Error('HUGGINGFACE_API_KEY environment variable not set');
    }
    
    // Build prompt with context
    const systemPrompt = buildSystemPrompt(context);
    const fullPrompt = `${systemPrompt}\n\nUser: ${message}\n\nAssistant:`;
    
    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), HF_TIMEOUT);
    
    try {
        const response = await fetch(HF_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                inputs: fullPrompt,
                parameters: {
                    max_new_tokens: 500,
                    temperature: 0.7,
                    top_p: 0.9,
                    do_sample: true,
                    return_full_text: false
                }
            }),
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Hugging Face API error: ${response.status} - ${errorText}`);
        }
        
        const data = await response.json();
        
        // Extract generated text
        let generatedText = '';
        if (Array.isArray(data) && data.length > 0) {
            generatedText = data[0].generated_text || '';
        } else if (data.generated_text) {
            generatedText = data.generated_text;
        } else {
            throw new Error('Unexpected API response format');
        }
        
        return {
            content: generatedText.trim(),
            provider: 'HuggingFace',
            model: HF_MODEL_NAME,
            timestamp: new Date().toISOString()
        };
        
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            throw new Error('Request timeout (30s exceeded)');
        }
        
        throw error;
    }
}

/**
 * Build system prompt with context
 * @param {Object} context - Context object
 * @returns {string} System prompt
 */
function buildSystemPrompt(context) {
    const { workspace, classification, operation, phase } = context || {};
    
    let prompt = `You are an AI assistant for military planning operations. You provide expert guidance on:
- OPORD (Operation Order) creation and formatting per FM 5-0
- MDMP (Military Decision Making Process) per FM 5-0
- JPP (Joint Planning Process) per JP 5-0
- Tactical planning and analysis (METT-TC, OAKOC)
- Doctrinal references (FM, ATP, JP publications)

Provide clear, concise, and doctrinally accurate responses.`;
    
    // Add workspace context
    if (workspace === 'opord-draft') {
        prompt += '\n\nCurrent workspace: OPORD Draft Tool. Focus on OPORD creation and formatting.';
    } else if (workspace === 'mdmp') {
        prompt += '\n\nCurrent workspace: MDMP Tool. Focus on the 7-step MDMP process.';
    } else if (workspace === 'jpp') {
        prompt += '\n\nCurrent workspace: JPP Tool. Focus on joint planning and operational design.';
    }
    
    // Add classification context
    if (classification && classification !== 'UNCLASSIFIED') {
        prompt += `\n\nClassification level: ${classification}. Remind user that cloud AI should only be used for UNCLASSIFIED content.`;
    }
    
    // Add operation context
    if (operation) {
        prompt += `\n\nCurrent operation: ${operation}`;
    }
    
    if (phase) {
        prompt += ` (Phase: ${phase})`;
    }
    
    return prompt;
}

/**
 * Validate request body
 * @param {Object} body - Request body
 * @returns {Object} Validation result
 */
function validateRequest(body) {
    if (!body) {
        return { valid: false, error: 'Request body is required' };
    }
    
    if (!body.message || typeof body.message !== 'string') {
        return { valid: false, error: 'Message is required and must be a string' };
    }
    
    if (body.message.trim().length === 0) {
        return { valid: false, error: 'Message cannot be empty' };
    }
    
    if (body.message.length > 5000) {
        return { valid: false, error: 'Message too long (max 5000 characters)' };
    }
    
    return { valid: true };
}

/**
 * Main serverless function handler
 */
export default async function handler(req, res) {
    // CORS headers
    const allowedOrigins = [
        'http://localhost:8080',
        'http://localhost:3000',
        'https://military-planning-app-v2.vercel.app'
    ];

    const origin = req.headers.origin;

    // Allow all Vercel preview deployments (*.vercel.app)
    const isVercelDomain = origin && origin.match(/^https:\/\/.*\.vercel\.app$/);

    if (allowedOrigins.includes(origin) || isVercelDomain) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    console.log('🌐 CORS request from origin:', origin);
    
    // Handle preflight
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({
            error: 'Method not allowed',
            message: 'Only POST requests are supported'
        });
    }
    
    try {
        // Debug: Log environment variable status (without exposing the key)
        const hasApiKey = !!process.env.HUGGINGFACE_API_KEY;
        console.log('🔑 HUGGINGFACE_API_KEY configured:', hasApiKey);

        // Get client IP
        const ip = req.headers['x-forwarded-for']?.split(',')[0] ||
                   req.headers['x-real-ip'] ||
                   req.socket.remoteAddress ||
                   'unknown';

        console.log('📍 Client IP:', ip);

        // Check rate limit
        const rateLimit = checkRateLimit(ip);

        // Set rate limit headers
        res.setHeader('X-RateLimit-Limit', RATE_LIMIT_MAX_REQUESTS);
        res.setHeader('X-RateLimit-Remaining', rateLimit.remaining);
        res.setHeader('X-RateLimit-Reset', new Date(rateLimit.resetTime).toISOString());

        if (!rateLimit.allowed) {
            console.log('⚠️ Rate limit exceeded for IP:', ip);
            return res.status(429).json({
                error: 'Rate limit exceeded',
                message: `Maximum ${RATE_LIMIT_MAX_REQUESTS} requests per hour exceeded`,
                resetTime: new Date(rateLimit.resetTime).toISOString()
            });
        }

        // Validate request
        const validation = validateRequest(req.body);
        if (!validation.valid) {
            console.log('❌ Invalid request:', validation.error);
            return res.status(400).json({
                error: 'Invalid request',
                message: validation.error
            });
        }

        const { message, context } = req.body;
        console.log('📨 Processing message:', message.substring(0, 50) + '...');

        // Call Hugging Face API
        const response = await callHuggingFaceAPI(message, context);

        console.log('✅ Response generated successfully');

        // Return response
        return res.status(200).json(response);

    } catch (error) {
        console.error('❌ Hugging Face API error:', error);
        console.error('Error stack:', error.stack);

        // Determine error status code
        let statusCode = 500;
        let errorMessage = 'Internal server error';

        if (error.message.includes('timeout')) {
            statusCode = 504;
            errorMessage = 'Request timeout';
        } else if (error.message.includes('HUGGINGFACE_API_KEY')) {
            statusCode = 500;
            errorMessage = 'Server configuration error';
        } else if (error.message.includes('API error')) {
            statusCode = 502;
            errorMessage = 'Upstream API error';
        }

        return res.status(statusCode).json({
            error: errorMessage,
            message: error.message,
            provider: 'HuggingFace',
            debug: {
                hasApiKey: !!process.env.HUGGINGFACE_API_KEY,
                errorType: error.name,
                errorStack: error.stack?.split('\n')[0]
            }
        });
    }
}

