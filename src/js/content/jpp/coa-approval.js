/**
 * JPP Step 6: COA Approval
 * Joint force commander decision and refined planning guidance
 */

// Import detailed analysis module for pre-loading
import { detailedAnalysisModule } from './sections/coa-approval-detailed-analysis.js';

export const coaApprovalContent = {
    title: "Step 6: COA Approval",
    description: "Joint force commander decision and refined planning guidance",
    icon: "fas fa-check-circle",
    color: "#f59e0b",
    
    getContent() {
        return `
            <div class="military-content">
                <!-- Standardized Header Section -->
                <div style="background-color:#1f2937; border:1px solid #374151; border-radius:8px; padding:16px; margin-bottom:16px; box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);">
                    <div style="display:flex; align-items:center; justify-content:space-between;">
                        <div style="flex:1; padding-right:16px;">
                            <h1 style="font-size:20px; font-weight:bold; color:white; margin-bottom:4px;">
                                <i class="fas fa-check-circle" style="margin-right:8px; color:#f59e0b;"></i>
                                6. COA Approval
                            </h1>
                            <p style="font-size:14px; color:#9ca3af;">Joint force commander decision and refined planning guidance</p>
                        </div>
                        <div style="background-color:#1e3a8a; border:1px solid #1d4ed8; border-radius:8px; padding:8px; min-width:192px; flex-shrink:0;">
                            <div style="color:#dbeafe; font-size:12px; line-height:1.4;">
                                <div>JP 5-0 (2017), Chapter 4, Para 4-6 — COA Approval</div>
                                <div>JP 3-0 (2018), Chapter 4 — Joint Decision Making</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Universal Button Navigation System -->
                <div id="universal-jpp-coa-approval-nav" style="margin-bottom:24px;">
                    <!-- Universal buttons will be injected here by UniversalCOAApprovalButtons -->
                </div>

                <!-- Dynamic Content Area -->
                <div id="coa-approval-content-area" style="min-height:400px;">
                    <!-- Pre-loaded default content: Detailed Analysis -->
                    ${detailedAnalysisModule.getContent()}
                </div>
            </div>
        `;
    }
};

export default coaApprovalContent;
