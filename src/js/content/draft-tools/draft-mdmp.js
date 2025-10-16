/**
 * Draft MDMP Tool
 * Interactive tool for creating draft MDMP documents and products
 */

export const draftMdmpContent = {
    title: "Draft MDMP",
    description: "Interactive tool for creating draft MDMP documents and planning products",
    doctrine: `
        <div class="military-content">
            <h2 class="text-xl font-bold text-white mb-4">Draft MDMP Creation Tool</h2>
            
            <div class="mb-6">
                <h3 class="text-lg font-semibold text-green-400 mb-3">Overview</h3>
                <p class="text-gray-300 mb-4">
                    The Draft MDMP tool provides a comprehensive digital workspace for conducting the 
                    Military Decision Making Process. This tool guides staff through all seven MDMP 
                    steps with integrated templates, automated product generation, and collaborative features.
                </p>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-blue-400 mb-3">MDMP Step Integration</h3>
                <p class="text-gray-300 mb-4">
                    The tool provides structured workflows for each of the seven MDMP steps with 
                    automated product generation and validation.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-blue-400 mb-2">MDMP Steps 1-4</h4>
                        <ol class="text-gray-300 text-sm list-decimal list-inside">
                            <li><strong>Receipt of Mission:</strong> Warning order generation</li>
                            <li><strong>Mission Analysis:</strong> 17-task completion tracking</li>
                            <li><strong>COA Development:</strong> Interactive COA builder</li>
                            <li><strong>COA Analysis:</strong> Digital wargaming tools</li>
                        </ol>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-blue-400 mb-2">MDMP Steps 5-7</h4>
                        <ol class="text-gray-300 text-sm list-decimal list-inside" start="5">
                            <li><strong>COA Comparison:</strong> Decision matrix tools</li>
                            <li><strong>COA Approval:</strong> Commander's guidance capture</li>
                            <li><strong>Orders Production:</strong> Automated OPORD generation</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-yellow-400 mb-3">Digital Planning Products</h3>
                <p class="text-gray-300 mb-4">
                    Automated generation of standard MDMP products with military formatting 
                    and doctrinal compliance.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-yellow-400 mb-2">
                            <i class="fas fa-chart-line mr-2"></i>
                            Analysis Products
                        </h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Mission analysis briefing</li>
                            <li>Intelligence preparation</li>
                            <li>Task analysis matrix</li>
                            <li>Risk assessment matrix</li>
                            <li>Time analysis worksheet</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-yellow-400 mb-2">
                            <i class="fas fa-route mr-2"></i>
                            COA Products
                        </h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>COA sketches and overlays</li>
                            <li>COA statements</li>
                            <li>Wargaming worksheets</li>
                            <li>Decision support templates</li>
                            <li>Synchronization matrices</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-yellow-400 mb-2">
                            <i class="fas fa-file-contract mr-2"></i>
                            Final Products
                        </h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Operation orders</li>
                            <li>Warning orders</li>
                            <li>Fragmentary orders</li>
                            <li>Briefing presentations</li>
                            <li>Planning timelines</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-purple-400 mb-3">Collaborative Planning Environment</h3>
                <p class="text-gray-300 mb-4">
                    Multi-user digital workspace enabling real-time staff collaboration throughout 
                    the MDMP process.
                </p>
                
                <div class="bg-gray-800 border-l-4 border-purple-500 p-4">
                    <h4 class="font-semibold text-purple-400 mb-2">Collaboration Features</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h5 class="font-semibold text-purple-300 mb-1">Staff Integration</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Role-based access control</li>
                                <li>Section-specific workspaces</li>
                                <li>Real-time editing and updates</li>
                                <li>Comment and annotation system</li>
                                <li>Task assignment and tracking</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-purple-300 mb-1">Process Management</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>MDMP step progression tracking</li>
                                <li>Milestone and deadline management</li>
                                <li>Approval workflow automation</li>
                                <li>Version control and history</li>
                                <li>Export and distribution tools</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-red-400 mb-3">Intelligence Integration</h3>
                <p class="text-gray-300 mb-4">
                    Integrated intelligence preparation tools supporting comprehensive mission analysis 
                    and enemy course of action development.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-red-400 mb-2">IPB Tools</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Terrain analysis templates</li>
                            <li>Weather impact assessments</li>
                            <li>Enemy situation templates</li>
                            <li>Event template builders</li>
                            <li>Decision support templates</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-red-400 mb-2">Threat Analysis</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Enemy COA development</li>
                            <li>Capability assessments</li>
                            <li>Threat integration matrices</li>
                            <li>Intelligence requirements</li>
                            <li>Collection plan generation</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-indigo-400 mb-3">Wargaming Simulation</h3>
                <p class="text-gray-300 mb-4">
                    Digital wargaming tools for systematic COA analysis with automated 
                    documentation and result tracking.
                </p>
                
                <div class="bg-gray-800 p-4 rounded">
                    <h4 class="font-semibold text-indigo-400 mb-2">Wargaming Capabilities</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h5 class="font-semibold text-indigo-300 mb-1">Methods</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Belt method</li>
                                <li>Avenue-in-depth</li>
                                <li>Box method</li>
                                <li>Time-step method</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-indigo-300 mb-1">Tools</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Digital map overlays</li>
                                <li>Unit movement tracking</li>
                                <li>Timeline synchronization</li>
                                <li>Resource calculations</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-indigo-300 mb-1">Outputs</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Wargaming results</li>
                                <li>Decision points</li>
                                <li>Branch plans</li>
                                <li>Risk assessments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-teal-400 mb-3">Template Library</h3>
                <p class="text-gray-300 mb-4">
                    Comprehensive library of MDMP templates for different operation types and 
                    unit echelons.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-teal-400 mb-2">Operation Templates</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Offensive operations planning</li>
                            <li>Defensive operations planning</li>
                            <li>Stability operations planning</li>
                            <li>Support operations planning</li>
                            <li>Training exercise planning</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-teal-400 mb-2">Echelon Templates</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Company-level planning</li>
                            <li>Battalion-level planning</li>
                            <li>Brigade-level planning</li>
                            <li>Division-level planning</li>
                            <li>Corps-level planning</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="bg-yellow-900 border border-yellow-700 rounded-lg p-4 mb-6">
                <h4 class="font-semibold text-yellow-400 mb-2">
                    <i class="fas fa-construction mr-2"></i>
                    Development Status
                </h4>
                <p class="text-yellow-100 mb-3">
                    The Draft MDMP creation tool is currently under development. This comprehensive 
                    digital planning environment will revolutionize military decision making processes.
                </p>
                <div class="bg-yellow-800 p-3 rounded">
                    <h5 class="font-semibold text-yellow-300 mb-2">Planned Features</h5>
                    <ul class="text-yellow-100 text-sm list-disc list-inside">
                        <li>Step-by-step MDMP workflow guidance</li>
                        <li>Automated product generation and formatting</li>
                        <li>Real-time collaborative planning environment</li>
                        <li>Integrated intelligence preparation tools</li>
                        <li>Digital wargaming and simulation capabilities</li>
                        <li>Comprehensive template library and customization</li>
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
                    ATP 5-0.1: Army Design Methodology<br>
                    FM 6-0: Commander and Staff Organization and Operations<br>
                    ATP 2-01.3: Intelligence Preparation of the Battlefield
                </p>
            </div>
        </div>
    `,
    
    examples: [
        {
            title: "Battalion Attack MDMP",
            content: "Complete MDMP workflow for battalion offensive operations with integrated wargaming..."
        },
        {
            title: "Brigade Defense MDMP",
            content: "Comprehensive MDMP process for brigade defensive operations with coalition considerations..."
        },
        {
            title: "Training Exercise MDMP",
            content: "Streamlined MDMP process for training exercises with safety integration and evaluation..."
        }
    ]
};

export default draftMdmpContent;
