// src/js/workspace/utils/BrowserTiming.js
export function detectBrowser() {
  const ua = navigator.userAgent || '';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Edg')) return 'Edge';
  if (ua.includes('Chrome')) return 'Chrome';
  return 'Other';
}
export function scheduleInitialize(browser, fn) {
  // In Jest/test environments, schedule immediately to make tests deterministic
  // globalThis.jest is populated by tests/setup.js
  if (typeof globalThis !== 'undefined' && globalThis.jest) {
    return setTimeout(fn, 0);
  }
  if (browser === 'Edge') return setTimeout(fn, 10);
  if (browser === 'Chrome') return setTimeout(fn, 25);
  if (browser === 'Firefox') {
    setTimeout(fn, 50); setTimeout(fn, 150); return setTimeout(fn, 300);
  }
  return setTimeout(fn, 100);
}

