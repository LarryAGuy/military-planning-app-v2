// Global application configuration
// Phase G — Switch Over and Cleanup: enable router by default (staged)
// This remains overrideable at runtime (e.g., via DevTools or other config loaders)
(function initGlobalConfig(){
  try {
    window.__config = window.__config || {};
    if (typeof window.__config.USE_WORKSPACE_ROUTER === 'undefined') {
      window.__config.USE_WORKSPACE_ROUTER = true; // default on
    }
    console.log('⚙️ appConfig loaded: USE_WORKSPACE_ROUTER =', window.__config.USE_WORKSPACE_ROUTER);
  } catch (e) {
    // In very constrained environments window may be unavailable; log gracefully
    // but do not throw to avoid breaking startup
    // eslint-disable-next-line no-console
    console.warn('appConfig: unable to set global flag', e);
  }
})();

// Export to ensure module is evaluated
export const CONFIG_LOADED = true;

