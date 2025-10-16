/**
 * JPP Step 2: Mission Analysis — Detailed Analysis Module (Dynamic Loader)
 * Uses dynamic import to load comprehensive doctrinal content module
 */

export const detailedAnalysisModule = {
  id: 'mission-analysis-detailed-analysis',
  title: 'Detailed Analysis',
  defaultExpanded: true,

  getContent() {
    // Return loading shell and dynamically load content
    setTimeout(async () => {
      const area = document.querySelector('#mission-analysis-detailed-content-area');
      if (!area) return;
      
      area.innerHTML = `
        <div style="padding:36px; text-align:center; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
          <div style="color:#10b981; font-size:16px; margin-bottom:10px;">
            <i class=\"fas fa-spinner fa-spin\" style=\"margin-right:8px;\"></i>
            Loading Detailed Analysis Content...
          </div>
          <div style="color:#9ca3af; font-size:12px;">UNCLASSIFIED</div>
        </div>`;

      try {
        const m = await import('./mission-analysis-detailed-analysis-content.js');
        const html = m.detailedAnalysisModule.getContent();
        setTimeout(() => { area.innerHTML = html; }, 200);
      } catch (e) {
        console.error('Failed to load detailed analysis content module:', e);
        setTimeout(() => {
          area.innerHTML = `<div style="padding:20px; background-color:#1f2937; border-radius:8px; border:1px solid #374151;">
            <h4 style="color:#ef4444; font-size:16px; font-weight:600; margin-bottom:12px;"><i class=\"fas fa-exclamation-triangle\" style=\"margin-right:8px;\"></i>Content Loading Error</h4>
            <p style=\"color:#d1d5db; font-size:14px; line-height:1.5; margin-bottom:8px;\">UNCLASSIFIED - Unable to load detailed analysis content.</p>
          </div>`;
        }, 200);
      }
    }, 0);

    return `
      <div id="mission-analysis-detailed-analysis" class="dashboard-widgets mb-12">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-size:18px; font-weight:600; color:white; margin:0; display:flex; align-items:center;">
            <i class="fas fa-search" style="margin-right:8px; color:#10b981; font-size:16px;"></i>
            Detailed Analysis
          </h3>
        </div>
        <div id="mission-analysis-detailed-content-area">
          <div class="bg-gray-800 border border-gray-600 rounded-lg p-8 text-center">
            <i class="fas fa-search text-green-400 text-3xl mb-4"></i>
            <h3 class="text-white text-xl font-semibold mb-2">Loading Content</h3>
            <p class="text-gray-300">Preparing detailed analysis content...</p>
          </div>
        </div>
      </div>
    `;
  },

  initialize() { return true; }
};

export default detailedAnalysisModule;
