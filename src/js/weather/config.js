/**
 * Weather Module Configuration
 * 
 * Purpose: Centralized configuration for weather functionality
 * 
 * @author Augment Agent
 * @date October 16, 2025
 */

export const WeatherConfig = {
    /**
     * API endpoints (serverless proxies)
     */
    api: {
        weather: '/api/weather',
        forecast: '/api/forecast'
    },

    /**
     * Default settings
     */
    defaults: {
        units: 'imperial', // 'imperial', 'metric', 'standard'
        forecastDays: 3,
        forecastEntries: 24, // 3 days * 8 entries per day (3-hour intervals)
        refreshInterval: 3600000 // 1 hour in milliseconds
    },

    /**
     * Unit systems
     */
    units: {
        imperial: {
            name: 'Imperial',
            temperature: '°F',
            speed: 'mph',
            pressure: 'inHg',
            visibility: 'mi',
            precipitation: 'in'
        },
        metric: {
            name: 'Metric',
            temperature: '°C',
            speed: 'm/s',
            pressure: 'hPa',
            visibility: 'km',
            precipitation: 'mm'
        },
        standard: {
            name: 'Standard (Kelvin)',
            temperature: 'K',
            speed: 'm/s',
            pressure: 'hPa',
            visibility: 'km',
            precipitation: 'mm'
        }
    },

    /**
     * Weather condition icons mapping
     * Maps OpenWeatherMap icon codes to Font Awesome icons
     */
    icons: {
        '01d': 'fa-sun',           // clear sky day
        '01n': 'fa-moon',          // clear sky night
        '02d': 'fa-cloud-sun',     // few clouds day
        '02n': 'fa-cloud-moon',    // few clouds night
        '03d': 'fa-cloud',         // scattered clouds
        '03n': 'fa-cloud',
        '04d': 'fa-cloud',         // broken clouds
        '04n': 'fa-cloud',
        '09d': 'fa-cloud-showers-heavy', // shower rain
        '09n': 'fa-cloud-showers-heavy',
        '10d': 'fa-cloud-sun-rain', // rain day
        '10n': 'fa-cloud-moon-rain', // rain night
        '11d': 'fa-bolt',          // thunderstorm
        '11n': 'fa-bolt',
        '13d': 'fa-snowflake',     // snow
        '13n': 'fa-snowflake',
        '50d': 'fa-smog',          // mist
        '50n': 'fa-smog'
    },

    /**
     * Weather condition colors
     */
    colors: {
        clear: '#fbbf24',      // Yellow
        clouds: '#9ca3af',     // Gray
        rain: '#3b82f6',       // Blue
        thunderstorm: '#8b5cf6', // Purple
        snow: '#e0f2fe',       // Light blue
        mist: '#6b7280'        // Dark gray
    },

    /**
     * Tactical data configuration
     */
    tactical: {
        // BMNT/EENT calculation
        twilight: {
            nautical: -12,  // Nautical twilight angle
            civil: -6,      // Civil twilight angle
            astronomical: -18 // Astronomical twilight angle
        },
        
        // Moon phase names
        moonPhases: [
            'New Moon',
            'Waxing Crescent',
            'First Quarter',
            'Waxing Gibbous',
            'Full Moon',
            'Waning Gibbous',
            'Last Quarter',
            'Waning Crescent'
        ],

        // Visibility categories (military)
        visibilityCategories: {
            excellent: { min: 10, label: 'Excellent', color: '#10b981' },
            good: { min: 5, max: 10, label: 'Good', color: '#84cc16' },
            moderate: { min: 2, max: 5, label: 'Moderate', color: '#eab308' },
            poor: { min: 1, max: 2, label: 'Poor', color: '#f97316' },
            veryPoor: { max: 1, label: 'Very Poor', color: '#dc2626' }
        },

        // Wind speed categories (Beaufort scale adapted)
        windCategories: {
            calm: { max: 1, label: 'Calm', color: '#10b981' },
            light: { min: 1, max: 7, label: 'Light', color: '#84cc16' },
            moderate: { min: 7, max: 15, label: 'Moderate', color: '#eab308' },
            fresh: { min: 15, max: 25, label: 'Fresh', color: '#f97316' },
            strong: { min: 25, max: 40, label: 'Strong', color: '#dc2626' },
            gale: { min: 40, label: 'Gale', color: '#7c2d12' }
        }
    },

    /**
     * Cache configuration
     */
    cache: {
        enabled: true,
        duration: 3600000, // 1 hour in milliseconds
        storageKey: 'weather_cache'
    },

    /**
     * Feature flags
     */
    features: {
        enableCurrentWeather: true,
        enableForecast: true,
        enableTacticalData: true,
        enableCache: true,
        enableOfflineMode: true
    },

    /**
     * UI configuration
     */
    ui: {
        cardBackgroundColor: '#1f2937', // Gray-800
        cardTextColor: '#ffffff',
        cardBorderRadius: '0.5rem',
        cardPadding: '1rem',
        iconSize: '3rem',
        temperatureSize: '2rem',
        labelSize: '0.875rem'
    },

    /**
     * Error messages
     */
    errors: {
        apiError: 'Failed to fetch weather data. Please try again.',
        networkError: 'Network error. Please check your connection.',
        invalidCoordinates: 'Invalid coordinates provided.',
        cacheError: 'Failed to access weather cache.',
        rateLimitExceeded: 'Rate limit exceeded. Please try again later.'
    },

    /**
     * Success messages
     */
    messages: {
        weatherLoaded: 'Weather data loaded successfully',
        forecastLoaded: 'Forecast data loaded successfully',
        cacheUpdated: 'Weather cache updated',
        offlineMode: 'Using cached weather data (offline mode)'
    },

    /**
     * Validation rules
     */
    validation: {
        latitude: {
            min: -90,
            max: 90
        },
        longitude: {
            min: -180,
            max: 180
        },
        forecastDays: {
            min: 1,
            max: 5
        }
    },

    /**
     * EXTENSION HOOK: MDMP-specific weather configuration
     * Used in Phase 8 for MDMP integration
     */
    mdmp: {
        enableWeatherTimeline: true,
        timelineIntervals: [0, 6, 12, 18, 24, 48, 72], // Hours
        enableWeatherImpactAnalysis: true,
        impactCategories: ['mobility', 'visibility', 'communications', 'aviation']
    },

    /**
     * EXTENSION HOOK: JPP-specific weather configuration
     * Used in Phase 9 for JPP integration
     */
    jpp: {
        enableTheaterWeather: true,
        enableMultiLocationWeather: true,
        maxLocations: 10,
        enableWeatherPatterns: true
    }
};

export default WeatherConfig;

