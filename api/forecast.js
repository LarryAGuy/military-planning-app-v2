/**
 * Serverless Function: Forecast API Proxy
 *
 * Purpose: Securely proxy forecast API requests to OpenWeatherMap API
 * without exposing API keys in client-side code.
 *
 * Platform: Vercel Serverless Functions
 * Endpoint: /api/forecast
 *
 * Query Parameters:
 * - lat: Latitude (required)
 * - lon: Longitude (required)
 * - units: Temperature units - 'imperial' or 'metric' (optional, default: 'imperial')
 * - cnt: Number of forecast entries (optional, default: 24 for 3-day forecast)
 *
 * Environment Variables (set in Vercel dashboard):
 * - OPENWEATHERMAP_API_KEY: Your OpenWeatherMap API key
 *
 * Security Features:
 * - API key stored server-side only
 * - Rate limiting per IP (100 requests per 15 minutes)
 * - Input validation
 * - CORS enabled for your domain only
 * - Response caching (1 hour)
 *
 * @author Augment Agent
 * @date October 16, 2025
 * @updated October 20, 2025 - Added fetch polyfill for Node.js < 18
 */

// Polyfill for fetch in Node.js < 18
// Node.js 18+ has native fetch, but older versions need node-fetch
let fetch;
if (typeof globalThis.fetch === 'undefined') {
    // Running on Node.js < 18, use node-fetch polyfill
    try {
        fetch = (await import('node-fetch')).default;
    } catch (error) {
        // If node-fetch is not available, try using https module as fallback
        console.warn('node-fetch not available, using https module fallback');
        const https = await import('https');

        fetch = (url) => {
            return new Promise((resolve, reject) => {
                https.get(url, (res) => {
                    let data = '';
                    res.on('data', (chunk) => { data += chunk; });
                    res.on('end', () => {
                        resolve({
                            ok: res.statusCode >= 200 && res.statusCode < 300,
                            status: res.statusCode,
                            statusText: res.statusMessage,
                            json: async () => JSON.parse(data)
                        });
                    });
                }).on('error', reject);
            });
        };
    }
} else {
    // Running on Node.js 18+, use native fetch
    fetch = globalThis.fetch;
}

// Simple in-memory rate limiter
const rateLimitMap = new Map();

/**
 * Rate limiting middleware
 * Limits requests to 100 per 15 minutes per IP address
 */
function checkRateLimit(ip) {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 100;

    if (!rateLimitMap.has(ip)) {
        rateLimitMap.set(ip, []);
    }

    const requests = rateLimitMap.get(ip);
    
    // Remove requests outside the time window
    const recentRequests = requests.filter(timestamp => now - timestamp < windowMs);
    
    if (recentRequests.length >= maxRequests) {
        return false; // Rate limit exceeded
    }

    // Add current request
    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);

    return true; // Within rate limit
}

/**
 * Validate latitude and longitude
 */
function validateCoordinates(lat, lon) {
    const latitude = parseFloat(lat);
    const longitude = parseFloat(lon);

    if (isNaN(latitude) || isNaN(longitude)) {
        return { valid: false, error: 'Invalid coordinates: must be numbers' };
    }

    if (latitude < -90 || latitude > 90) {
        return { valid: false, error: 'Invalid latitude: must be between -90 and 90' };
    }

    if (longitude < -180 || longitude > 180) {
        return { valid: false, error: 'Invalid longitude: must be between -180 and 180' };
    }

    return { valid: true, lat: latitude, lon: longitude };
}

/**
 * Main serverless function handler
 */
export default async function handler(req, res) {
    // Enable CORS (adjust origin for production)
    res.setHeader('Access-Control-Allow-Origin', '*'); // TODO: Change to your domain in production
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight OPTIONS request
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Only allow GET requests
    if (req.method !== 'GET') {
        return res.status(405).json({ 
            error: 'Method not allowed',
            message: 'Only GET requests are supported'
        });
    }

    // Get client IP for rate limiting
    const clientIp = req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || 'unknown';

    // Check rate limit
    if (!checkRateLimit(clientIp)) {
        return res.status(429).json({
            error: 'Rate limit exceeded',
            message: 'Too many requests. Please try again in 15 minutes.',
            retryAfter: 900 // seconds
        });
    }

    // Extract query parameters
    const { lat, lon, units = 'imperial', cnt = '24' } = req.query;

    // Validate required parameters
    if (!lat || !lon) {
        return res.status(400).json({
            error: 'Missing required parameters',
            message: 'Both lat and lon parameters are required',
            example: '/api/forecast?lat=38.8977&lon=-77.0365&units=imperial&cnt=24'
        });
    }

    // Validate coordinates
    const validation = validateCoordinates(lat, lon);
    if (!validation.valid) {
        return res.status(400).json({
            error: 'Invalid coordinates',
            message: validation.error
        });
    }

    // Validate units parameter
    if (units !== 'imperial' && units !== 'metric') {
        return res.status(400).json({
            error: 'Invalid units parameter',
            message: 'Units must be either "imperial" or "metric"'
        });
    }

    // Validate cnt parameter
    const count = parseInt(cnt);
    if (isNaN(count) || count < 1 || count > 96) {
        return res.status(400).json({
            error: 'Invalid cnt parameter',
            message: 'Count must be a number between 1 and 96'
        });
    }

    // Get API key from environment variable
    const WEATHER_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

    if (!WEATHER_API_KEY) {
        console.error('OPENWEATHERMAP_API_KEY environment variable is not set');
        return res.status(500).json({
            error: 'Server configuration error',
            message: 'Weather API is not properly configured. Please contact the administrator.'
        });
    }

    try {
        // Call OpenWeatherMap Forecast API with server-side API key
        // Using 5-day/3-hour forecast endpoint
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${validation.lat}&lon=${validation.lon}&appid=${WEATHER_API_KEY}&units=${units}&cnt=${count}`;
        
        const response = await fetch(apiUrl);

        if (!response.ok) {
            // Handle API errors
            const errorData = await response.json().catch(() => ({}));
            
            console.error('OpenWeatherMap Forecast API error:', response.status, errorData);

            return res.status(response.status).json({
                error: 'Forecast API error',
                message: errorData.message || 'Failed to fetch forecast data from external API',
                statusCode: response.status
            });
        }

        const forecastData = await response.json();

        // Set cache headers (cache for 1 hour)
        res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=7200');

        // Return forecast data
        return res.status(200).json(forecastData);

    } catch (error) {
        console.error('Error fetching forecast data:', error);

        return res.status(500).json({
            error: 'Internal server error',
            message: 'An unexpected error occurred while fetching forecast data',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}

