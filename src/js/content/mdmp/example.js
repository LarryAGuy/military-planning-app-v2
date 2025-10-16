/**
 * MDMP Example Library (Framework Placeholder)
 * Provides a minimal content module so ContentLoader can successfully import mdmp/example.js
 * This is scaffolding only; detailed MDMP examples will be populated in future iterations.
 */

export const exampleContent = {
  title: "MDMP: Example Library",
  description: "Framework scaffolding - MDMP example library placeholder",
  doctrine: `
    <div class="military-content h-full overflow-y-auto">
      <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px; box-shadow:0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06);">
        <div style="display:flex; align-items:center; justify-content:space-between;">
          <div style="flex:1; padding-right:16px;">
            <h1 style="font-size:20px; font-weight:bold; color:white; margin-bottom:4px;">
              <i class="fas fa-clipboard-list" style="margin-right:8px; color:#7c3aed;"></i>
              MDMP Example Library
            </h1>
            <p style="font-size:14px; color:#9ca3af;">Framework scaffolding - content to be populated in future development phases.</p>
          </div>
          <div style="background-color:#1e3a8a; border:1px solid #2563eb; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
            <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
              <div>FM 5-0 (Nov 2024), MDMP Overview</div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid" style="display:grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap:12px;">
        <div style="background-color:#111827; border:1px solid #374151; border-radius:8px; padding:16px;">
          <h3 style="color:#ffffff; font-size:16px; font-weight:600; margin:0 0 8px 0; display:flex; align-items:center;">
            <i class="fas fa-info-circle" style="color:#16a34a; margin-right:8px;"></i>
            Status
          </h3>
          <p style="color:#d1d5db; font-size:14px; margin:0;">This is a placeholder module created to resolve a missing file error (mdmp/example.js). The full MDMP Example Library will be implemented in a future update.</p>
        </div>
        <div style="background-color:#111827; border:1px solid #374151; border-radius:8px; padding:16px;">
          <h3 style="color:#ffffff; font-size:16px; font-weight:600; margin:0 0 8px 0; display:flex; align-items:center;">
            <i class="fas fa-tasks" style="color:#1d4ed8; margin-right:8px;"></i>
            Planned Features
          </h3>
          <ul style="color:#d1d5db; font-size:14px; margin:0; padding-left:18px; line-height:1.5;">
            <li>Comprehensive MDMP process examples (Steps 1–7)</li>
            <li>Echelon-specific example sets (Platoon → Theater)</li>
            <li>Integrated doctrinal references and quick links</li>
            <li>Downloadable templates and products</li>
          </ul>
        </div>
      </div>
    </div>
  `,
};

export default exampleContent;

