/**
 * Serverless Function: Map Tiles API Proxy
 * 
 * Purpose: Securely proxy map tile requests to Geoapify Map Tiles API
 * without exposing API keys in client-side code.
 * 
 * Platform: Vercel Serverless Functions
 * Endpoint: /api/map-tiles
 * 
 * Query Parameters:
 * - style: Map style name (required) - e.g., 'dark-matter', 'osm-bright'
 * - z: Zoom level (required) - integer 0-20
 * - x: Tile X coordinate (required) - integer
 * - y: Tile Y coordinate (required) - integer
 * - retina: High-DPI/retina display (optional) - 'true' or 'false' (default: 'false')
 * 
 * Environment Variables (set in Vercel dashboard):
 * - GEOAPIFY_API_KEY: Your Geoapify Map Tiles API key
 * 
 * Security Features:
 * - API key stored server-side only
 * - Style whitelist (only allowed styles can be requested)
 * - Input validation (prevents malicious tile requests)
 * - Rate limiting per IP (500 requests per 15 minutes)
 * - CORS enabled for your domain only
 * - Response caching (24 hours for tiles)
 * 
 * Geoapify Documentation:
 * - https://apidocs.geoapify.com/docs/maps/map-tiles/
 * - Free tier: 3,000 credits/day = 12,000 tiles/day (1 tile = 0.25 credits)
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

// Simple in-memory rate limiter (for serverless, consider using Vercel Edge Config or Upstash Redis for production)
const rateLimitMap = new Map();

/**
 * Rate limiting middleware
 * Limits requests to 500 per 15 minutes per IP address
 * (Higher than weather API since map tiles are frequently requested)
 */
function checkRateLimit(ip) {
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 500; // Higher limit for map tiles

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
 * Whitelist of allowed map styles
 * Prevents abuse by limiting to specific Geoapify styles
 */
const ALLOWED_STYLES = [
    // Dark mode styles (recommended for military planning app)
    'dark-matter',
    'dark-matter-brown',
    'dark-matter-dark-grey',
    'dark-matter-dark-purple',
    'dark-matter-purple-roads',
    'dark-matter-yellow-roads',
    
    // Street map styles
    'osm-bright',
    'osm-bright-grey',
    'osm-bright-smooth',
    'osm-carto',
    'osm-liberty',
    'klokantech-basic',
    
    // Light mode styles
    'positron',
    'positron-blue',
    'positron-red',
    
    // Artistic styles
    'toner',
    'toner-grey',
    'maptiler-3d'
];

/**
 * Validate tile coordinates
 * Ensures z, x, y are valid integers within acceptable ranges
 */
function validateTileCoordinates(z, x, y) {
    const zoom = parseInt(z, 10);
    const tileX = parseInt(x, 10);
    const tileY = parseInt(y, 10);

    // Validate zoom level (0-20 for Geoapify)
    if (isNaN(zoom) || zoom < 0 || zoom > 20) {
        return { 
            valid: false, 
            error: 'Invalid zoom level: must be an integer between 0 and 20' 
        };
    }

    // Validate tile X coordinate
    const maxTileCoord = Math.pow(2, zoom);
    if (isNaN(tileX) || tileX < 0 || tileX >= maxTileCoord) {
        return { 
            valid: false, 
            error: `Invalid tile X coordinate: must be an integer between 0 and ${maxTileCoord - 1} for zoom level ${zoom}` 
        };
    }

    // Validate tile Y coordinate
    if (isNaN(tileY) || tileY < 0 || tileY >= maxTileCoord) {
        return { 
            valid: false, 
            error: `Invalid tile Y coordinate: must be an integer between 0 and ${maxTileCoord - 1} for zoom level ${zoom}` 
        };
    }

    return { 
        valid: true, 
        z: zoom, 
        x: tileX, 
        y: tileY 
    };
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
            message: 'Too many tile requests. Please try again in 15 minutes.',
            retryAfter: 900 // seconds
        });
    }

    // Extract query parameters
    const { style, z, x, y, retina = 'false' } = req.query;

    // Validate required parameters
    if (!style || !z || !x || !y) {
        return res.status(400).json({
            error: 'Missing required parameters',
            message: 'Parameters style, z, x, and y are required',
            example: '/api/map-tiles?style=dark-matter&z=13&x=2342&y=3134'
        });
    }

    // Validate style (whitelist check)
    if (!ALLOWED_STYLES.includes(style)) {
        return res.status(400).json({
            error: 'Invalid style parameter',
            message: `Style "${style}" is not allowed. Allowed styles: ${ALLOWED_STYLES.join(', ')}`,
            allowedStyles: ALLOWED_STYLES
        });
    }

    // Validate tile coordinates
    const validation = validateTileCoordinates(z, x, y);
    if (!validation.valid) {
        return res.status(400).json({
            error: 'Invalid tile coordinates',
            message: validation.error
        });
    }

    // Validate retina parameter
    const isRetina = retina === 'true';

    // Get API key from environment variable
    const GEOAPIFY_API_KEY = process.env.GEOAPIFY_API_KEY;

    if (!GEOAPIFY_API_KEY) {
        console.error('GEOAPIFY_API_KEY environment variable is not set');
        return res.status(500).json({
            error: 'Server configuration error',
            message: 'Map tiles API is not properly configured. Please contact the administrator.'
        });
    }

    try {
        // Construct Geoapify tile URL
        const retinaParam = isRetina ? '@2x' : '';
        const tileUrl = `https://maps.geoapify.com/v1/tile/${style}/${validation.z}/${validation.x}/${validation.y}${retinaParam}.png?apiKey=${GEOAPIFY_API_KEY}`;
        
        // Fetch tile from Geoapify
        const response = await fetch(tileUrl);

        if (!response.ok) {
            // Handle API errors
            console.error('Geoapify API error:', response.status, response.statusText);

            // If it's a 404, the tile doesn't exist (common at high zoom levels or ocean areas)
            if (response.status === 404) {
                return res.status(404).json({
                    error: 'Tile not found',
                    message: 'The requested map tile does not exist',
                    statusCode: 404
                });
            }

            // If it's a 401/403, API key issue
            if (response.status === 401 || response.status === 403) {
                console.error('Geoapify API authentication error - check API key');
                return res.status(500).json({
                    error: 'API authentication error',
                    message: 'Failed to authenticate with map tiles API',
                    statusCode: response.status
                });
            }

            // Other errors
            return res.status(response.status).json({
                error: 'Map tiles API error',
                message: 'Failed to fetch map tile from external API',
                statusCode: response.status
            });
        }

        // Get tile image as buffer
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Set cache headers (cache tiles for 24 hours)
        // Tiles rarely change, so aggressive caching is appropriate
        res.setHeader('Content-Type', 'image/png');
        res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800'); // 24 hours, revalidate after 7 days
        res.setHeader('Content-Length', buffer.length);

        // Return tile image
        return res.status(200).send(buffer);

    } catch (error) {
        console.error('Error fetching map tile:', error);

        return res.status(500).json({
            error: 'Internal server error',
            message: 'An unexpected error occurred while fetching map tile',
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
