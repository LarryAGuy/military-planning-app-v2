# Serverless API Functions

**Purpose**: Secure API proxies for mapping and weather services  
**Platform**: Vercel Serverless Functions  
**Security**: API keys stored server-side only, never exposed to client

---

## Overview

This directory contains serverless functions that act as secure proxies for external APIs. API keys are stored as environment variables on the server and never exposed in client-side code.

---

## Deployment Instructions

### Option 1: Vercel (Recommended - Easiest Setup)

1. **Install Vercel CLI** (optional, can also use web interface):
   ```bash
   npm install -g vercel
   ```

2. **Create Vercel Account**:
   - Go to https://vercel.com/signup
   - Sign up with GitHub, GitLab, or Bitbucket
   - Free tier includes:
     - Unlimited deployments
     - 100 GB bandwidth/month
     - Serverless function executions

3. **Deploy via Web Interface** (No CLI required):
   - Push your code to GitHub
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel automatically detects the `api/` directory and deploys functions

4. **Set Environment Variables**:
   - In Vercel dashboard, go to Project Settings → Environment Variables
   - Add the following variables:
     ```
     OPENWEATHERMAP_API_KEY=your_openweathermap_api_key_here
     GEOAPIFY_API_KEY=your_geoapify_api_key_here
     ```
   - Click "Save"
   - Redeploy the project for changes to take effect

5. **Access Your API**:
   - Your functions will be available at:
     - `https://your-project.vercel.app/api/weather`
     - `https://your-project.vercel.app/api/forecast`

---

### Option 2: Netlify

1. **Create Netlify Account**:
   - Go to https://www.netlify.com/
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Rename `api/` to `netlify/functions/`**:
   - Netlify requires functions to be in `netlify/functions/` directory
   - Or create `netlify.toml` config file:
     ```toml
     [build]
       functions = "api"
     ```

3. **Deploy**:
   - Push code to GitHub
   - In Netlify dashboard, click "New site from Git"
   - Select your repository
   - Netlify automatically deploys

4. **Set Environment Variables**:
   - In Netlify dashboard, go to Site Settings → Environment Variables
   - Add:
     ```
     OPENWEATHERMAP_API_KEY=your_key_here
     GEOAPIFY_API_KEY=your_key_here
     ```

5. **Access Your API**:
   - Functions available at:
     - `https://your-site.netlify.app/.netlify/functions/weather`
     - `https://your-site.netlify.app/.netlify/functions/forecast`

---

### Option 3: AWS Lambda (Advanced)

**Note**: AWS Lambda requires more setup and is recommended only if you're already using AWS.

1. Install AWS CLI and configure credentials
2. Use AWS SAM or Serverless Framework to deploy
3. Set environment variables in Lambda console
4. Configure API Gateway for HTTP endpoints

**Not recommended for this project** due to complexity.

---

## API Endpoints

### 1. Weather API (`/api/weather`)

**Purpose**: Get current weather conditions for a location

**Method**: GET

**Query Parameters**:
- `lat` (required): Latitude (-90 to 90)
- `lon` (required): Longitude (-180 to 180)
- `units` (optional): `imperial` or `metric` (default: `imperial`)

**Example Request**:
```
GET /api/weather?lat=38.8977&lon=-77.0365&units=imperial
```

**Example Response**:
```json
{
  "coord": { "lon": -77.0365, "lat": 38.8977 },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "main": {
    "temp": 72.5,
    "feels_like": 70.2,
    "temp_min": 68.0,
    "temp_max": 76.0,
    "pressure": 1013,
    "humidity": 45
  },
  "visibility": 10000,
  "wind": {
    "speed": 5.82,
    "deg": 180
  },
  "clouds": { "all": 0 },
  "dt": 1697472000,
  "sys": {
    "country": "US",
    "sunrise": 1697454000,
    "sunset": 1697495000
  },
  "timezone": -14400,
  "name": "Washington"
}
```

**Error Responses**:
- `400 Bad Request`: Missing or invalid parameters
- `429 Too Many Requests`: Rate limit exceeded (100 requests per 15 minutes)
- `500 Internal Server Error`: Server or API error

---

### 2. Forecast API (`/api/forecast`)

**Purpose**: Get 3-day weather forecast for a location

**Method**: GET

**Query Parameters**:
- `lat` (required): Latitude (-90 to 90)
- `lon` (required): Longitude (-180 to 180)
- `units` (optional): `imperial` or `metric` (default: `imperial`)
- `cnt` (optional): Number of forecast entries (default: 24 for 3-day forecast)

**Example Request**:
```
GET /api/forecast?lat=38.8977&lon=-77.0365&units=imperial&cnt=24
```

**Example Response**:
```json
{
  "cod": "200",
  "message": 0,
  "cnt": 24,
  "list": [
    {
      "dt": 1697472000,
      "main": {
        "temp": 72.5,
        "feels_like": 70.2,
        "temp_min": 68.0,
        "temp_max": 76.0,
        "pressure": 1013,
        "humidity": 45
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "wind": {
        "speed": 5.82,
        "deg": 180
      },
      "dt_txt": "2024-10-16 12:00:00"
    }
    // ... more forecast entries
  ],
  "city": {
    "name": "Washington",
    "coord": { "lat": 38.8977, "lon": -77.0365 },
    "country": "US",
    "timezone": -14400
  }
}
```

---

## Security Features

### 1. API Key Protection
- ✅ API keys stored as environment variables (server-side only)
- ✅ Never exposed in client-side code
- ✅ Never committed to version control

### 2. Rate Limiting
- ✅ 100 requests per 15 minutes per IP address
- ✅ Prevents API abuse and excessive costs
- ✅ Returns `429 Too Many Requests` when limit exceeded

### 3. Input Validation
- ✅ Validates latitude/longitude ranges
- ✅ Validates units parameter
- ✅ Validates count parameter
- ✅ Returns `400 Bad Request` for invalid input

### 4. CORS Configuration
- ✅ CORS headers configured
- ⚠️ **TODO**: Change `Access-Control-Allow-Origin` from `*` to your domain in production

### 5. Response Caching
- ✅ Responses cached for 1 hour (`s-maxage=3600`)
- ✅ Stale-while-revalidate for 2 hours
- ✅ Reduces API calls and improves performance

---

## Getting API Keys

### OpenWeatherMap API Key

1. Go to https://openweathermap.org/api
2. Click "Sign Up" (free account)
3. Verify your email
4. Go to API Keys section
5. Copy your API key
6. Free tier includes:
   - 1,000 API calls per day
   - Current weather data
   - 5-day/3-hour forecast
   - 16-day daily forecast

**Note**: Free tier may not be sufficient for high-traffic public websites. Monitor usage and upgrade to paid tier if needed.

### Geoapify API Key

1. Go to https://www.geoapify.com/
2. Click "Get Started for Free"
3. Sign up for free account
4. Go to API Keys section
5. Copy your API key
6. Free tier includes:
   - 3,000 API calls per day
   - Map tiles
   - Geocoding
   - Routing

---

## Local Development

For local development without deploying to Vercel:

1. **Create `.env` file** in project root:
   ```
   OPENWEATHERMAP_API_KEY=your_key_here
   GEOAPIFY_API_KEY=your_key_here
   ```

2. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

3. **Run locally**:
   ```bash
   vercel dev
   ```

4. **Access functions locally**:
   - `http://localhost:3000/api/weather`
   - `http://localhost:3000/api/forecast`

---

## Monitoring and Debugging

### Vercel Dashboard

- View function logs in Vercel dashboard
- Monitor function execution time
- Track bandwidth usage
- View error rates

### Error Logging

All errors are logged to console with details:
- Request parameters
- API response status
- Error messages

In development mode, error details are included in API responses.

---

## Cost Considerations

### Free Tier Limits

**Vercel**:
- ✅ 100 GB bandwidth/month
- ✅ 100 GB-hours serverless function execution/month
- ✅ Unlimited deployments

**OpenWeatherMap**:
- ✅ 1,000 API calls/day (free tier)
- ⚠️ May need paid tier for high-traffic websites

**Geoapify**:
- ✅ 3,000 API calls/day (free tier)
- ⚠️ May need paid tier for high-traffic websites

### Recommendations

1. **Start with free tier** and monitor usage
2. **Implement aggressive caching** (already included)
3. **Monitor API usage** in Vercel dashboard
4. **Upgrade to paid tier** if free tier is insufficient
5. **Consider rate limiting** to prevent abuse

---

## Troubleshooting

### "Server configuration error" message

**Cause**: Environment variables not set

**Solution**:
1. Go to Vercel dashboard → Project Settings → Environment Variables
2. Add `OPENWEATHERMAP_API_KEY` and `GEOAPIFY_API_KEY`
3. Redeploy the project

### "Rate limit exceeded" message

**Cause**: Too many requests from same IP

**Solution**:
- Wait 15 minutes before trying again
- Implement client-side caching to reduce requests

### CORS errors in browser

**Cause**: CORS headers not properly configured

**Solution**:
1. Update `Access-Control-Allow-Origin` in function code
2. Change from `*` to your domain (e.g., `https://yourdomain.com`)
3. Redeploy

---

**Last Updated**: October 16, 2025  
**Author**: Augment Agent  
**Status**: ✅ Ready for deployment

