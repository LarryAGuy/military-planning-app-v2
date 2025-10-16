/**
 * Draft OPORD Tool
 * Interactive tool for creating draft operation orders
 */

export const draftOpordContent = {
    title: "Draft OPORD",
    description: "Interactive tool for creating draft operation orders",
    doctrine: `
        <div class="military-content">
            <!-- Universal Draft OPORD Navigation Container (Required by DraftToolsInitializer) -->
            <div id="universal-draft-opord-nav" class="mb-4"></div>

            <!-- Draft OPORD Content Area (Required by DraftToolsInitializer) -->
            <div id="draft-opord-content-area">
                <h2 class="text-xl font-bold text-white mb-4">Draft OPORD Creation Tool</h2>

                <div class="mb-6">
                    <h3 class="text-lg font-semibold text-green-400 mb-3">Overview</h3>
                    <p class="text-gray-300 mb-4">
                        The Draft OPORD tool provides an interactive interface for creating draft operation orders
                        following FM 5-0 format and standards. This tool guides users through the five-paragraph
                        OPORD structure with built-in templates and military formatting.
                    </p>
                </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-blue-400 mb-3">OPORD Structure</h3>
                <p class="text-gray-300 mb-4">
                    The tool follows the standard five-paragraph OPORD format as prescribed by FM 5-0.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-blue-400 mb-2">OPORD Paragraphs</h4>
                        <ol class="text-gray-300 text-sm list-decimal list-inside">
                            <li><strong>Situation:</strong> Enemy, friendly, and environmental factors</li>
                            <li><strong>Mission:</strong> Clear, concise mission statement</li>
                            <li><strong>Execution:</strong> Concept of operations and tasks</li>
                            <li><strong>Sustainment:</strong> Logistics and personnel support</li>
                            <li><strong>Command & Control:</strong> C2 structure and communications</li>
                        </ol>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-blue-400 mb-2">Supporting Elements</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Task Organization</li>
                            <li>Time and Date Group</li>
                            <li>References and Maps</li>
                            <li>Annexes A through L, T</li>
                            <li>Distribution List</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-yellow-400 mb-3">Draft Creation Features</h3>
                <p class="text-gray-300 mb-4">
                    The Draft OPORD tool includes advanced features to streamline the creation process 
                    and ensure doctrinal compliance.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-yellow-400 mb-2">
                            <i class="fas fa-magic mr-2"></i>
                            Auto-Generation
                        </h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Mission statement builder</li>
                            <li>Task organization generator</li>
                            <li>Time synchronization matrix</li>
                            <li>Coordinating instructions</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-yellow-400 mb-2">
                            <i class="fas fa-check-circle mr-2"></i>
                            Validation
                        </h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>FM 5-0 compliance checking</li>
                            <li>Required field validation</li>
                            <li>Format standardization</li>
                            <li>Military terminology verification</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-yellow-400 mb-2">
                            <i class="fas fa-download mr-2"></i>
                            Export Options
                        </h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>PDF generation</li>
                            <li>Word document export</li>
                            <li>PowerPoint briefing slides</li>
                            <li>Digital distribution formats</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-purple-400 mb-3">Template Library</h3>
                <p class="text-gray-300 mb-4">
                    Access pre-built templates for common operation types and unit echelons.
                </p>
                
                <div class="bg-gray-800 border-l-4 border-purple-500 p-4">
                    <h4 class="font-semibold text-purple-400 mb-2">Available Templates</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h5 class="font-semibold text-purple-300 mb-1">Operation Types</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Offensive Operations</li>
                                <li>Defensive Operations</li>
                                <li>Stability Operations</li>
                                <li>Defense Support of Civil Authorities</li>
                                <li>Training Exercises</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-purple-300 mb-1">Unit Echelons</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Squad/Team Level</li>
                                <li>Platoon Level</li>
                                <li>Company Level</li>
                                <li>Battalion Level</li>
                                <li>Brigade Level</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-red-400 mb-3">Classification Management</h3>
                <p class="text-gray-300 mb-4">
                    Integrated classification system ensures proper security marking and handling 
                    of draft operation orders.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-red-400 mb-2">Classification Features</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Automatic classification detection</li>
                            <li>Portion marking assistance</li>
                            <li>Banner generation</li>
                            <li>Caveat management</li>
                            <li>Declassification guidance</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-red-400 mb-2">Security Compliance</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>DoW 5200.1-R compliance</li>
                            <li>OPSEC considerations</li>
                            <li>Information sharing controls</li>
                            <li>Foreign disclosure guidance</li>
                            <li>Sanitization procedures</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-indigo-400 mb-3">Collaboration Tools</h3>
                <p class="text-gray-300 mb-4">
                    Built-in collaboration features enable staff coordination and review processes.
                </p>
                
                <div class="bg-gray-800 p-4 rounded">
                    <h4 class="font-semibold text-indigo-400 mb-2">Collaboration Features</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h5 class="font-semibold text-indigo-300 mb-1">Review Process</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Multi-user editing</li>
                                <li>Comment system</li>
                                <li>Change tracking</li>
                                <li>Approval workflow</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-indigo-300 mb-1">Staff Coordination</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Section assignments</li>
                                <li>Task notifications</li>
                                <li>Progress tracking</li>
                                <li>Deadline management</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-indigo-300 mb-1">Version Control</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Draft versioning</li>
                                <li>Revision history</li>
                                <li>Rollback capability</li>
                                <li>Merge conflict resolution</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-yellow-900 border border-yellow-700 rounded-lg p-4 mb-6">
                <h4 class="font-semibold text-yellow-400 mb-2">
                    <i class="fas fa-construction mr-2"></i>
                    Development Status
                </h4>
                <p class="text-yellow-100 mb-3">
                    The Draft OPORD creation tool is currently under development. This advanced 
                    interactive planning tool will provide comprehensive OPORD drafting capabilities.
                </p>
                <div class="bg-yellow-800 p-3 rounded">
                    <h5 class="font-semibold text-yellow-300 mb-2">Planned Features</h5>
                    <ul class="text-yellow-100 text-sm list-disc list-inside">
                        <li>Interactive form-based OPORD creation</li>
                        <li>Real-time collaboration and editing</li>
                        <li>Automated formatting and validation</li>
                        <li>Template library with customization options</li>
                        <li>Export to multiple formats (PDF, DOCX, PPTX)</li>
                        <li>Integration with classification systems</li>
                    </ul>
                </div>
            </div>

            <div class="bg-blue-900 border border-blue-700 rounded-lg p-4">
                <h4 class="font-semibold text-blue-400 mb-2">
                    <i class="fas fa-info-circle mr-2"></i>
                    Doctrinal Reference
                </h4>
                <p class="text-blue-100 text-sm">
                    FM 5-0: The Operations Process<br>
                    ADP 5-0: The Operations Process<br>
                    FM 6-0: Commander and Staff Organization and Operations<br>
                    AR 25-30: The Army Publishing Program
                </p>
            </div>
            </div><!-- Close draft-opord-content-area -->
        </div><!-- Close military-content -->
    `
};

export default draftOpordContent;
