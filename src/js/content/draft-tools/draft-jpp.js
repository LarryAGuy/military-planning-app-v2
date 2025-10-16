/**
 * Draft JPP Tool
 * Interactive tool for creating draft joint planning process documents
 */

export const draftJppContent = {
    title: "Draft JPP",
    description: "Interactive tool for creating draft joint planning process documents and products",
    doctrine: `
        <div class="military-content">
            <h2 class="text-xl font-bold text-white mb-4">Draft JPP Creation Tool</h2>
            
            <div class="mb-6">
                <h3 class="text-lg font-semibold text-green-400 mb-3">Overview</h3>
                <p class="text-gray-300 mb-4">
                    The Draft JPP tool provides a comprehensive digital environment for conducting joint 
                    planning processes. This tool integrates all seven JPP steps with multi-service 
                    collaboration, coalition coordination, and automated joint product generation.
                </p>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-blue-400 mb-3">Joint Planning Integration</h3>
                <p class="text-gray-300 mb-4">
                    The tool provides structured workflows for joint planning with integrated 
                    service component coordination and coalition partner collaboration.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-blue-400 mb-2">JPP Steps 1-4</h4>
                        <ol class="text-gray-300 text-sm list-decimal list-inside">
                            <li><strong>Planning Initiation:</strong> Strategic guidance analysis</li>
                            <li><strong>Mission Analysis:</strong> JIPOE and joint assessment</li>
                            <li><strong>COA Development:</strong> Joint operational design</li>
                            <li><strong>COA Analysis:</strong> Joint wargaming and evaluation</li>
                        </ol>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-blue-400 mb-2">JPP Steps 5-7</h4>
                        <ol class="text-gray-300 text-sm list-decimal list-inside" start="5">
                            <li><strong>COA Comparison:</strong> Joint decision analysis</li>
                            <li><strong>COA Approval:</strong> JFC decision and guidance</li>
                            <li><strong>Plan Development:</strong> Joint OPLAN creation</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-yellow-400 mb-3">Multi-Domain Operations Planning</h3>
                <p class="text-gray-300 mb-4">
                    Integrated planning tools for coordinating operations across all domains 
                    with service-specific capabilities and joint effects.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-yellow-400 mb-2">
                            <i class="fas fa-globe mr-2"></i>
                            Physical Domains
                        </h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Land operations planning</li>
                            <li>Maritime operations planning</li>
                            <li>Air operations planning</li>
                            <li>Space operations planning</li>
                            <li>Cyberspace operations</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-yellow-400 mb-2">
                            <i class="fas fa-network-wired mr-2"></i>
                            Cross-Domain Effects
                        </h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Information operations</li>
                            <li>Electronic warfare</li>
                            <li>Special operations integration</li>
                            <li>Intelligence operations</li>
                            <li>Psychological operations</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-yellow-400 mb-2">
                            <i class="fas fa-handshake mr-2"></i>
                            Joint Functions
                        </h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Command and control</li>
                            <li>Intelligence integration</li>
                            <li>Joint fires coordination</li>
                            <li>Movement and maneuver</li>
                            <li>Protection and sustainment</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-purple-400 mb-3">Service Component Integration</h3>
                <p class="text-gray-300 mb-4">
                    Comprehensive integration platform for all service components with 
                    role-based access and component-specific planning tools.
                </p>
                
                <div class="bg-gray-800 border-l-4 border-purple-500 p-4">
                    <h4 class="font-semibold text-purple-400 mb-2">Component Coordination</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <h5 class="font-semibold text-purple-300 mb-1">Service Components</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Army Forces (ARFOR) planning</li>
                                <li>Navy Forces (NAVFOR) planning</li>
                                <li>Air Forces (AFFOR) planning</li>
                                <li>Marine Forces (MARFOR) planning</li>
                                <li>Space Forces (SPACEFOR) planning</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-purple-300 mb-1">Functional Components</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Special Operations Command</li>
                                <li>Joint Intelligence Center</li>
                                <li>Joint Logistics Command</li>
                                <li>Joint Communications</li>
                                <li>Cyber Operations Center</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-red-400 mb-3">Coalition Planning Environment</h3>
                <p class="text-gray-300 mb-4">
                    Secure collaboration platform for multinational planning with partner 
                    nation integration and information sharing controls.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-red-400 mb-2">Coalition Features</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Partner nation workspaces</li>
                            <li>Multilingual interface support</li>
                            <li>Cultural consideration tools</li>
                            <li>Legal framework integration</li>
                            <li>Information sharing matrices</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-red-400 mb-2">Security Controls</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Classification level management</li>
                            <li>Foreign disclosure controls</li>
                            <li>Caveat and handling restrictions</li>
                            <li>Sanitization procedures</li>
                            <li>Releasability determinations</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-indigo-400 mb-3">Joint Intelligence Preparation</h3>
                <p class="text-gray-300 mb-4">
                    Comprehensive JIPOE tools integrating all-source intelligence with 
                    multi-domain threat analysis and operational environment assessment.
                </p>
                
                <div class="bg-gray-800 p-4 rounded">
                    <h4 class="font-semibold text-indigo-400 mb-2">JIPOE Capabilities</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <h5 class="font-semibold text-indigo-300 mb-1">Environment Analysis</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Operational environment</li>
                                <li>Physical geography</li>
                                <li>Human geography</li>
                                <li>Information environment</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-indigo-300 mb-1">Threat Assessment</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Adversary capabilities</li>
                                <li>Threat integration</li>
                                <li>Enemy COA development</li>
                                <li>Decision point analysis</li>
                            </ul>
                        </div>
                        <div>
                            <h5 class="font-semibold text-indigo-300 mb-1">Intelligence Products</h5>
                            <ul class="text-gray-300 list-disc list-inside">
                                <li>Situation templates</li>
                                <li>Event templates</li>
                                <li>Decision support templates</li>
                                <li>Collection requirements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-teal-400 mb-3">Joint Operational Design</h3>
                <p class="text-gray-300 mb-4">
                    Advanced operational design tools for developing joint operational approaches 
                    with systems thinking and design methodology integration.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-teal-400 mb-2">Design Elements</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Operational approach development</li>
                            <li>Lines of operation/effort</li>
                            <li>Decisive points identification</li>
                            <li>Center of gravity analysis</li>
                            <li>End state visualization</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-4 rounded">
                        <h4 class="font-semibold text-teal-400 mb-2">Design Tools</h4>
                        <ul class="text-gray-300 text-sm list-disc list-inside">
                            <li>Systems mapping tools</li>
                            <li>Causal loop diagrams</li>
                            <li>Operational concept graphics</li>
                            <li>Phasing and sequencing</li>
                            <li>Risk assessment matrices</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mb-6">
                <h3 class="text-lg font-semibold text-orange-400 mb-3">Joint Plan Products</h3>
                <p class="text-gray-300 mb-4">
                    Automated generation of joint planning products with standardized formatting 
                    and multi-format export capabilities.
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-gray-800 p-3 rounded">
                        <h4 class="font-semibold text-orange-400 mb-2 text-sm">Base Plans</h4>
                        <ul class="text-xs text-gray-300">
                            <li>Joint Operation Plans</li>
                            <li>Joint Operation Orders</li>
                            <li>Concept Plans</li>
                            <li>Fragmentary Orders</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-3 rounded">
                        <h4 class="font-semibold text-orange-400 mb-2 text-sm">Supporting Annexes</h4>
                        <ul class="text-xs text-gray-300">
                            <li>Task Organization (A)</li>
                            <li>Intelligence (B)</li>
                            <li>Operations (C)</li>
                            <li>Logistics (D)</li>
                        </ul>
                    </div>
                    <div class="bg-gray-800 p-3 rounded">
                        <h4 class="font-semibold text-orange-400 mb-2 text-sm">Briefing Products</h4>
                        <ul class="text-xs text-gray-300">
                            <li>Commander's briefings</li>
                            <li>Staff briefings</li>
                            <li>Decision briefings</li>
                            <li>Execution briefings</li>
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
                    The Draft JPP creation tool is currently under development. This advanced joint 
                    planning environment will provide unprecedented capabilities for joint and 
                    coalition operations planning.
                </p>
                <div class="bg-yellow-800 p-3 rounded">
                    <h5 class="font-semibold text-yellow-300 mb-2">Planned Features</h5>
                    <ul class="text-yellow-100 text-sm list-disc list-inside">
                        <li>Complete JPP workflow automation and guidance</li>
                        <li>Multi-service component integration platform</li>
                        <li>Coalition partner collaboration environment</li>
                        <li>Advanced JIPOE and operational design tools</li>
                        <li>Multi-domain operations planning capabilities</li>
                        <li>Automated joint product generation and distribution</li>
                    </ul>
                </div>
            </div>

            <div class="bg-blue-900 border border-blue-700 rounded-lg p-4">
                <h4 class="font-semibold text-blue-400 mb-2">
                    <i class="fas fa-info-circle mr-2"></i>
                    Doctrinal Reference
                </h4>
                <p class="text-blue-100 text-sm">
                    JP 5-0: Joint Planning<br>
                    JP 3-0: Joint Operations<br>
                    CJCSM 3122.01: Joint Operation Planning and Execution System<br>
                    JP 2-01.3: Joint Intelligence Preparation of the Operational Environment
                </p>
            </div>
        </div>
    `,
    
    examples: [
        {
            title: "Joint Task Force OPLAN",
            content: "Complete JPP workflow for joint task force operation plan with coalition integration..."
        },
        {
            title: "Multinational Peacekeeping JPP",
            content: "Joint planning process for multinational peacekeeping operation with complex ROE..."
        },
        {
            title: "Joint Strike Planning",
            content: "Rapid JPP process for time-sensitive joint strike operations with multi-domain effects..."
        }
    ]
};

export default draftJppContent;
