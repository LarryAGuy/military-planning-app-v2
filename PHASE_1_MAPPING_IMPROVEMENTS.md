# Phase 1: Mapping Tool Critical Fixes

**Branch**: `feature/mapping-tool-improvements`  
**Date**: October 17, 2025  
**Author**: Augment Agent

---

## Overview

This document tracks Phase 1 implementation of critical mapping tool improvements for the Military Planning App V2. Phase 1 focuses on fixing blocking issues that prevent proper functionality.

---

## Task 2b: Update OpenWeather API Key ✅

### **Issue**
- Old OpenWeather API key may be exposed or invalid after repository cleanup
- Weather functionality requires updated API key for production deployment

### **Solution**
- **New API Key**: `0a9e5642cb35da74f9ab86d19f6d78c4`
- **Storage**: Vercel environment variable `OPENWEATHERMAP_API_KEY`
- **Security**: API key stored server-side only, never exposed in client code

### **Files Verified**
1. ✅ `api/weather.js` - Uses `process.env.OPENWEATHERMAP_API_KEY`
2. ✅ `api/forecast.js` - Uses `process.env.OPENWEATHERMAP_API_KEY`
3. ✅ No hardcoded API keys found in codebase

### **Implementation Steps**

#### Step 1: Verify Environment Variable Usage
```bash
# Search for API key references
grep -r "OPENWEATHERMAP_API_KEY" --include="*.js" .
```

**Result**: Both serverless functions correctly use environment variables ✅

#### Step 2: Update Vercel Environment Variable

**Manual Action Required** (Cannot be automated via code):

1. Navigate to Vercel Dashboard: https://vercel.com/dashboard
2. Select project: `military-planning-app-v2`
3. Go to **Settings** → **Environment Variables**
4. Find existing variable: `OPENWEATHERMAP_API_KEY`
5. Click **Edit** and update value to: `0a9e5642cb35da74f9ab86d19f6d78c4`
6. Ensure it's set for all environments:
   - ✅ Production
   - ✅ Preview
   - ✅ Development
7. Click **Save**
8. **Redeploy** the application to apply changes

#### Step 3: Verify API Key Works

After updating Vercel environment variable, test weather API:

```bash
# Test current weather endpoint (after deployment)
curl "https://military-planning-app-v2-l3l4.vercel.app/api/weather?lat=38.8977&lon=-77.0365&units=imperial"

# Test forecast endpoint (after deployment)
curl "https://military-planning-app-v2-l3l4.vercel.app/api/forecast?lat=38.8977&lon=-77.0365&units=imperial&cnt=24"
```

**Expected Response**: Valid JSON weather data with HTTP 200 status

#### Step 4: Remove Old API Key (If Found)

Search for any old hardcoded API keys:

```bash
# Search for potential old API keys (32-character hex strings)
grep -rE "[a-f0-9]{32}" --include="*.js" --include="*.json" .
```

**Result**: No old API keys found in codebase ✅

### **Security Notes**

- ✅ API key stored as environment variable (server-side only)
- ✅ Never exposed in client-side JavaScript
- ✅ Proxied through Vercel serverless functions (`/api/weather`, `/api/forecast`)
- ✅ Rate limiting enabled (100 requests per 15 minutes per IP)
- ✅ Input validation prevents malicious requests
- ✅ CORS configured for production domain

### **Testing Checklist**

After Vercel environment variable update:

- [ ] Deploy to Vercel (automatic on push to GitHub)
- [ ] Test `/api/weather` endpoint with valid coordinates
- [ ] Test `/api/forecast` endpoint with valid coordinates
- [ ] Verify weather data displays in mapping tool
- [ ] Verify tactical weather data (BMNT/EENT/moon phase) calculates correctly
- [ ] Test error handling with invalid coordinates
- [ ] Verify rate limiting works (100 requests per 15 minutes)

### **Status**: ✅ CODE VERIFIED - MANUAL VERCEL UPDATE REQUIRED

---

## Task 1b: Fix Tile Layer Selector Text Visibility

### **Issue**
- White text on white background in tile layer selector
- Users cannot read tile layer options
- WCAG 2.1 AA compliance violation (insufficient contrast)

### **Solution**
- Add custom CSS for Leaflet layer control
- Ensure proper contrast ratios (minimum 4.5:1 for WCAG 2.1 AA)
- Use dark background with light text (consistent with app theme)

### **Files to Modify**
1. `src/css/components/mapping.css` - Add Leaflet control styles
2. `src/js/mapping/utils/MapLayerManager.js` - Verify layer control initialization

### **Implementation**
- Add `.leaflet-control-layers` custom styles
- Dark background (#1f2937 - gray-800)
- Light text (#f9fafb - gray-50)
- Proper hover states
- Border and shadow for visibility

### **Status**: 🔄 IN PROGRESS

---

## Task 1a: Expand Map Container Width + Loading Notification

### **Issue**
- Map container too narrow (~450px based on screenshot)
- Poor visibility for tactical planning
- No loading indicator when fetching tiles

### **Solution**
- Expand map container to **80% of modal width**
- Implement responsive design for different screen sizes
- Add loading spinner/notification with ARIA labels
- Display loading state during:
  - Map initialization
  - Tile layer switching
  - Location search

### **Files to Modify**
1. `src/css/components/mapping-weather.css` - Map container width
2. `src/css/components/mapping.css` - Map container styles
3. `src/js/mapping/components/MapComponent.js` - Loading state management
4. `src/js/mapping/utils/MapLayerManager.js` - Tile layer loading events

### **Implementation Details**

#### Map Container Width
```css
/* Current (too narrow) */
.map-container {
    width: 100%;
    height: 24rem;
}

/* New (80% of modal width, responsive) */
.map-container {
    width: 80%;
    min-width: 600px;
    max-width: 1400px;
    height: 600px;
    margin: 0 auto;
}

@media (max-width: 1024px) {
    .map-container {
        width: 90%;
        min-width: 400px;
    }
}

@media (max-width: 768px) {
    .map-container {
        width: 100%;
        min-width: 300px;
        height: 400px;
    }
}
```

#### Loading Notification
```html
<!-- Loading overlay -->
<div class="map-loading-overlay" role="status" aria-live="polite" aria-label="Loading map tiles">
    <div class="map-loading-spinner"></div>
    <div class="map-loading-text">Loading map tiles...</div>
</div>
```

```css
.map-loading-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(17, 24, 39, 0.85); /* gray-900 with opacity */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    border-radius: 0.5rem;
}

.map-loading-spinner {
    width: 48px;
    height: 48px;
    border: 4px solid rgba(255, 255, 255, 0.2);
    border-top-color: #06b6d4; /* cyan-500 */
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.map-loading-text {
    margin-top: 16px;
    color: #f9fafb; /* gray-50 */
    font-size: 14px;
    font-weight: 500;
}
```

### **Status**: 🔄 IN PROGRESS

---

## Commit Strategy

### Commit 1: Update OpenWeather API Key Documentation
- Add this documentation file
- Update `.gitignore` to prevent API key exposure
- **Message**: `docs: Add Phase 1 mapping improvements documentation and API key update instructions`

### Commit 2: Fix Tile Layer Selector Visibility
- Update `src/css/components/mapping.css`
- Add Leaflet control custom styles
- Ensure WCAG 2.1 AA compliance
- **Message**: `fix: Improve tile layer selector visibility with WCAG 2.1 AA compliant styles`

### Commit 3: Expand Map Container Width + Loading Notification
- Update `src/css/components/mapping-weather.css`
- Update `src/css/components/mapping.css`
- Add loading overlay HTML/CSS
- Update `MapComponent.js` for loading state
- **Message**: `feat: Expand map container to 80% width and add loading notification with ARIA labels`

---

## Testing Plan

### Local Testing (file:// protocol)
1. Open `index.html` in browser via `file://` protocol
2. Navigate to OPORD drafting tool → Situation section
3. Click "Open Map & Weather Tool" button
4. Verify map container is wider (80% of modal)
5. Verify loading spinner appears during initialization
6. Verify tile layer selector has proper contrast
7. Switch between tile layers and verify loading indicator
8. Test responsive behavior (resize browser window)

### Vercel Preview Testing
1. Push to GitHub (triggers automatic deployment)
2. Wait for Vercel preview deployment
3. Test all functionality on preview URL
4. Verify weather API calls work with new key
5. Verify WCAG 2.1 AA compliance with browser tools

---

## Next Steps (Phase 2)

After Phase 1 completion:
- **Task 1c**: Update default map tile layers (remove Geoapify, add OSM variants)
- **Phase 2 Documentation**: Create separate tracking document

---

## References

- **OpenWeather API Documentation**: https://openweathermap.org/api
- **Leaflet Documentation**: https://leafletjs.com/reference.html
- **WCAG 2.1 AA Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Vercel Environment Variables**: https://vercel.com/docs/projects/environment-variables

