/**
 * OPORD Examples - Framework Module (no detailed content)
 * Provides clean header + knowledge box and an empty content area for future work
 */

const examplesModule = {
  title: 'OPORD Examples',
  description: 'Complete OPORD examples by echelon level',

  doctrine: `
    <div class="military-content h-full overflow-y-auto">
      <!-- Header -->
      <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px; box-shadow:0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div style="flex:1; padding-right:16px;">
            <h1 style="font-size:20px; font-weight:bold; color:white; margin:0 0 4px 0;">
              <i class="fas fa-file-contract" style="margin-right:8px; color:#60a5fa;"></i>
              OPORD Examples
            </h1>
            <p style="font-size:14px; color:#9ca3af;">Complete OPORD examples by echelon level</p>
          </div>
          <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:8px; min-width:220px; flex-shrink:0;">
            <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
              <div>FM 5-0 (Nov 2024), Appendix C — Operation Order Format</div>
              <div>FM 6-0 (May 2022), Chapter 2 — Mission Command</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Three-Tier Navigation Container -->
      <div id="universal-examples-nav" style="margin-bottom:16px;"></div>

      <!-- Empty Content Area for future development -->
      <div id="examples-content-area"></div>
    </div>
  `,

  getContent() { return this.doctrine; },

  async initialize() {
    // Ensure required containers exist
    const nav = document.getElementById('universal-examples-nav');
    const area = document.getElementById('examples-content-area');
    if (!nav || !area) {
      console.warn('OPORD Examples: required containers not found');
      return false;
    }

    try {
      // Delegate navigation rendering to the UniversalExamplesButtons system
      const { UniversalExamplesButtons } = await import('./UniversalExamplesButtons.js');
      const examplesButtons = new UniversalExamplesButtons();
      await examplesButtons.initialize();

      // Expose for debugging
      window.universalExamplesButtons = examplesButtons;

      // Auto-load a sensible default echelon (Platoon)
      examplesButtons.selectEchelon('tactical', 'platoon');

      console.log('✅ OPORD Examples (framework + universal buttons) initialized');
      return true;
    } catch (err) {
      console.error('❌ Failed to initialize UniversalExamplesButtons from examples.js:', err);
      return false;
    }
  }
};

export default examplesModule;

