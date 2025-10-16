// src/js/workspace/errors/ContentErrorView.js
export function renderContentError(contentArea, { category, module, error }) {
  if (!contentArea) return;
  const msg = (error && (error.message || error.toString())) || 'Unknown error';
  contentArea.innerHTML = `<div style="color:#f87171">Failed to load ${category}/${module}: ${msg}</div>`;
}

