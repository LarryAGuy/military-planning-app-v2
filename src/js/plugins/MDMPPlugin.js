export class MDMPPlugin {
    constructor() {
        this.name = 'MDMP';
        this.version = '2.0.0';
        this.description = 'Military Decision Making Process (MDMP) planning tool';
        this.eventBus = null;
        this.container = null;
        this.currentStep = 1;
        this.mdmpData = {
            mission: '',
            timeAvailable: '',
            steps: {
                1: { title: 'Receipt of Mission', completed: false, data: {} },
                2: { title: 'Mission Analysis', completed: false, data: {} },
                3: { title: 'COA Development', completed: false, data: {} },
                4: { title: 'COA Analysis', completed: false, data: {} },
                5: { title: 'COA Comparison', completed: false, data: {} },
                6: { title: 'COA Approval', completed: false, data: {} },
                7: { title: 'Orders Production', completed: false, data: {} }
            }
        };
    }

    async initialize() {
        console.log('🎯 Initializing MDMPPlugin...');
        
        // Get EventBus from global API
        this.eventBus = window.MilitaryPlanningPluginAPI;
        
        // Register MDMP navigation
        this.registerNavigation();
        
        // Listen for navigation events
        this.setupEventListeners();
        
        console.log('✅ MDMPPlugin initialized');
    }

    registerNavigation() {
        this.eventBus.emit('navigation:register', {
            id: 'mdmp',
            label: 'MDMP',
            icon: 'fas fa-project-diagram',
            description: 'Military Decision Making Process (MDMP) planning tool',
            order: 3,
            plugin: this.name
        });
    }

    setupEventListeners() {
        this.eventBus.on('navigation:activated', (data) => {
            if (data.id === 'mdmp') {
                this.activate();
            }
        });

        this.eventBus.on('workspace:ready', (data) => {
            if (data.activePlugin === 'mdmp') {
                // Plugin is ready - workspace will handle content display
                console.log('🎯 MDMP Plugin workspace ready');
            }
        });
    }

    async activate() {
        console.log('🎯 Activating MDMP Plugin...');
        
        this.eventBus.emit('workspace:change', {
            plugin: this.name,
            title: 'Military Decision Making Process (MDMP)',
            content: this.generateMDMPHTML()
        });

        // Initialize MDMP interface after DOM is ready
        setTimeout(() => {
            this.initializeMDMPInterface();
        }, 100);
    }

    generateMDMPHTML() {
        return `
            <div class="mdmp-container h-full flex flex-col">
                <!-- MDMP Header -->
                <div class="mdmp-header bg-gray-800 p-4 border-b border-gray-700 flex-shrink-0">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-4">
                            <h1 class="text-xl font-bold text-white">
                                <i class="fas fa-project-diagram mr-2 text-green-400"></i>
                                Military Decision Making Process (MDMP)
                            </h1>
                            <div class="progress-badge px-3 py-1 bg-blue-600 text-white text-sm font-bold rounded">
                                Step ${this.currentStep} of 7
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button id="mdmp-save" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                                <i class="fas fa-save mr-2"></i>Save Progress
                            </button>
                            <button id="mdmp-export" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">
                                <i class="fas fa-download mr-2"></i>Export Analysis
                            </button>
                        </div>
                    </div>
                    
                    <!-- MDMP Progress Bar -->
                    <div class="w-full bg-gray-700 rounded-full h-2 mb-4">
                        <div class="bg-green-500 h-2 rounded-full transition-all duration-300" 
                             style="width: ${(this.currentStep / 7) * 100}%"></div>
                    </div>
                    
                    <!-- Mission Info -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                            <label class="text-gray-400">Mission:</label>
                            <input id="mdmp-mission" type="text" value="${this.mdmpData.mission}" 
                                   class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white"
                                   placeholder="Enter mission statement...">
                        </div>
                        <div>
                            <label class="text-gray-400">Time Available:</label>
                            <input id="mdmp-time" type="text" value="${this.mdmpData.timeAvailable}" 
                                   class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white"
                                   placeholder="Time available for planning...">
                        </div>
                    </div>
                </div>

                <!-- MDMP Content -->
                <div class="mdmp-content flex-1 flex overflow-hidden">
                    <!-- Step Navigation -->
                    <div class="mdmp-nav w-80 bg-gray-800 border-r border-gray-700 overflow-y-auto flex-shrink-0">
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-white mb-4">MDMP Steps</h3>
                            <nav class="space-y-2">
                                ${this.generateStepNavigation()}
                            </nav>
                        </div>
                        
                        <!-- MDMP Tools -->
                        <div class="p-4 border-t border-gray-700">
                            <h4 class="text-sm font-semibold text-gray-400 mb-3">MDMP TOOLS</h4>
                            <div class="space-y-2">
                                <button class="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded transition-colors" data-tool="time-analysis">
                                    <i class="fas fa-clock mr-2"></i>Time Analysis
                                </button>
                                <button class="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded transition-colors" data-tool="coa-matrix">
                                    <i class="fas fa-table mr-2"></i>COA Matrix
                                </button>
                                <button class="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded transition-colors" data-tool="decision-matrix">
                                    <i class="fas fa-chart-bar mr-2"></i>Decision Matrix
                                </button>
                                <button class="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded transition-colors" data-tool="wargaming">
                                    <i class="fas fa-chess mr-2"></i>Wargaming
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Step Content -->
                    <div class="mdmp-step-content flex-1 flex flex-col overflow-hidden">
                        <div class="step-header bg-gray-750 p-4 border-b border-gray-600 flex-shrink-0">
                            <div class="flex items-center justify-between">
                                <div>
                                    <h2 id="current-step-title" class="text-lg font-semibold text-white">
                                        Step ${this.currentStep}: ${this.mdmpData.steps[this.currentStep].title}
                                    </h2>
                                    <p class="text-gray-400 text-sm mt-1">
                                        ${this.getStepDescription(this.currentStep)}
                                    </p>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <button id="prev-step" class="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-sm" 
                                            ${this.currentStep === 1 ? 'disabled' : ''}>
                                        <i class="fas fa-chevron-left mr-1"></i>Previous
                                    </button>
                                    <button id="next-step" class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                                            ${this.currentStep === 7 ? 'disabled' : ''}>
                                        Next<i class="fas fa-chevron-right ml-1"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        <div class="step-content flex-1 p-4 overflow-y-auto">
                            <div class="max-w-6xl">
                                <div id="step-editor">
                                    ${this.generateStepContent(this.currentStep)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateStepNavigation() {
        return Object.entries(this.mdmpData.steps).map(([stepNum, step]) => {
            const isActive = parseInt(stepNum) === this.currentStep;
            const isCompleted = step.completed;
            
            return `
                <button class="step-nav-btn w-full text-left px-3 py-3 rounded transition-colors ${
                    isActive ? 'bg-green-600 text-white' : 
                    isCompleted ? 'bg-blue-600 text-white' : 
                    'text-gray-300 hover:bg-gray-700'
                }" data-step="${stepNum}">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <div class="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                isCompleted ? 'bg-green-500' : 
                                isActive ? 'bg-white text-green-600' : 
                                'bg-gray-600'
                            }">
                                ${isCompleted ? '✓' : stepNum}
                            </div>
                            <div>
                                <div class="font-medium">Step ${stepNum}</div>
                                <div class="text-xs opacity-80">${step.title}</div>
                            </div>
                        </div>
                        ${isCompleted ? '<i class="fas fa-check-circle text-green-400"></i>' : ''}
                    </div>
                </button>
            `;
        }).join('');
    }

    generateStepContent(stepNum) {
        switch (stepNum) {
            case 1:
                return this.generateReceiptOfMissionContent();
            case 2:
                return this.generateMissionAnalysisContent();
            case 3:
                return this.generateCOADevelopmentContent();
            case 4:
                return this.generateCOAAnalysisContent();
            case 5:
                return this.generateCOAComparisonContent();
            case 6:
                return this.generateCOAApprovalContent();
            case 7:
                return this.generateOrdersProductionContent();
            default:
                return '<div class="text-white">Step content not available</div>';
        }
    }

    generateReceiptOfMissionContent() {
        return `
            <div class="space-y-6">
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-envelope-open text-blue-400 mr-2"></i>
                        Receipt of Mission
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Mission Received From</label>
                            <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                                   placeholder="Higher headquarters unit...">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Mission Statement</label>
                            <textarea class="w-full h-24 bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                                      placeholder="Complete mission statement as received..."></textarea>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-gray-400 text-sm mb-2">Time Received</label>
                                <input type="datetime-local" class="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white">
                            </div>
                            <div>
                                <label class="block text-gray-400 text-sm mb-2">Time Available for Planning</label>
                                <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                                       placeholder="e.g., 6 hours">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-clock text-yellow-400 mr-2"></i>
                        Initial Time Analysis
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-gray-700 rounded p-4">
                            <h4 class="text-white font-medium mb-2">1/3 - 2/3 Rule</h4>
                            <div class="text-sm text-gray-300">
                                <div>Planning Time: <span class="text-white font-mono">2 hours</span></div>
                                <div>Subordinate Time: <span class="text-white font-mono">4 hours</span></div>
                            </div>
                        </div>
                        <div class="bg-gray-700 rounded p-4">
                            <h4 class="text-white font-medium mb-2">Key Timelines</h4>
                            <div class="text-sm text-gray-300">
                                <div>OPORD Complete: <span class="text-white font-mono">--:--</span></div>
                                <div>Rehearsals: <span class="text-white font-mono">--:--</span></div>
                            </div>
                        </div>
                        <div class="bg-gray-700 rounded p-4">
                            <h4 class="text-white font-medium mb-2">Critical Events</h4>
                            <div class="text-sm text-gray-300">
                                <div>H-Hour: <span class="text-white font-mono">--:--</span></div>
                                <div>SP Time: <span class="text-white font-mono">--:--</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateMissionAnalysisContent() {
        return `
            <div class="space-y-6">
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-search text-green-400 mr-2"></i>
                        Mission Analysis
                    </h3>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                            <h4 class="text-white font-medium mb-3">Specified Tasks</h4>
                            <textarea class="w-full h-32 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Tasks explicitly stated in the mission..."></textarea>
                        </div>
                        <div>
                            <h4 class="text-white font-medium mb-3">Implied Tasks</h4>
                            <textarea class="w-full h-32 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Tasks not explicitly stated but must be performed..."></textarea>
                        </div>
                        <div>
                            <h4 class="text-white font-medium mb-3">Essential Tasks</h4>
                            <textarea class="w-full h-32 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Tasks critical to mission success..."></textarea>
                        </div>
                        <div>
                            <h4 class="text-white font-medium mb-3">Constraints</h4>
                            <textarea class="w-full h-32 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Limitations placed on the unit..."></textarea>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-bullseye text-red-400 mr-2"></i>
                        Restated Mission
                    </h3>
                    <textarea class="w-full h-24 bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                              placeholder="Restated mission based on analysis..."></textarea>
                </div>
            </div>
        `;
    }

    generateCOADevelopmentContent() {
        return `
            <div class="space-y-6">
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-lightbulb text-yellow-400 mr-2"></i>
                        Course of Action Development
                    </h3>
                    <div class="flex items-center justify-between mb-4">
                        <p class="text-gray-400">Develop multiple feasible COAs</p>
                        <button class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm">
                            <i class="fas fa-plus mr-1"></i>Add COA
                        </button>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="bg-gray-700 rounded-lg p-4">
                            <div class="flex items-center justify-between mb-3">
                                <h4 class="text-white font-medium">COA 1: Direct Approach</h4>
                                <div class="flex items-center space-x-2">
                                    <span class="text-xs bg-green-600 text-white px-2 py-1 rounded">VIABLE</span>
                                    <button class="text-red-400 hover:text-red-300">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-gray-400 text-xs mb-1">Concept</label>
                                    <textarea class="w-full h-20 bg-gray-600 border border-gray-500 rounded p-2 text-white text-sm" 
                                              placeholder="COA concept..."></textarea>
                                </div>
                                <div>
                                    <label class="block text-gray-400 text-xs mb-1">Key Tasks</label>
                                    <textarea class="w-full h-20 bg-gray-600 border border-gray-500 rounded p-2 text-white text-sm" 
                                              placeholder="Key tasks for this COA..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateCOAAnalysisContent() {
        return `
            <div class="space-y-6">
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-chess text-purple-400 mr-2"></i>
                        COA Analysis (Wargaming)
                    </h3>
                    <div class="bg-blue-900 border border-blue-600 rounded-lg p-4 mb-4">
                        <h4 class="text-white font-semibold mb-2">Wargaming Process</h4>
                        <p class="text-blue-200 text-sm">
                            Test each COA against enemy capabilities and likely reactions
                        </p>
                    </div>
                    
                    <div class="space-y-4">
                        <div class="bg-gray-700 rounded p-4">
                            <h4 class="text-white font-medium mb-3">COA 1 Analysis</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label class="block text-gray-400 text-sm mb-1">Advantages</label>
                                    <textarea class="w-full h-20 bg-gray-600 border border-gray-500 rounded p-2 text-white text-sm" 
                                              placeholder="Advantages of this COA..."></textarea>
                                </div>
                                <div>
                                    <label class="block text-gray-400 text-sm mb-1">Disadvantages</label>
                                    <textarea class="w-full h-20 bg-gray-600 border border-gray-500 rounded p-2 text-white text-sm" 
                                              placeholder="Disadvantages and risks..."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateCOAComparisonContent() {
        return `
            <div class="space-y-6">
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-balance-scale text-cyan-400 mr-2"></i>
                        COA Comparison
                    </h3>
                    <div class="overflow-x-auto">
                        <table class="w-full text-sm">
                            <thead>
                                <tr class="border-b border-gray-600">
                                    <th class="text-left text-gray-400 p-2">Evaluation Criteria</th>
                                    <th class="text-center text-gray-400 p-2">COA 1</th>
                                    <th class="text-center text-gray-400 p-2">COA 2</th>
                                    <th class="text-center text-gray-400 p-2">COA 3</th>
                                </tr>
                            </thead>
                            <tbody class="text-white">
                                <tr class="border-b border-gray-700">
                                    <td class="p-2">Suitability</td>
                                    <td class="text-center p-2">
                                        <select class="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </td>
                                    <td class="text-center p-2">
                                        <select class="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </td>
                                    <td class="text-center p-2">
                                        <select class="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-700">
                                    <td class="p-2">Feasibility</td>
                                    <td class="text-center p-2">
                                        <select class="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </td>
                                    <td class="text-center p-2">
                                        <select class="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </td>
                                    <td class="text-center p-2">
                                        <select class="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr class="border-b border-gray-700">
                                    <td class="p-2">Acceptability</td>
                                    <td class="text-center p-2">
                                        <select class="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </td>
                                    <td class="text-center p-2">
                                        <select class="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </td>
                                    <td class="text-center p-2">
                                        <select class="bg-gray-700 border border-gray-600 rounded px-2 py-1">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        `;
    }

    generateCOAApprovalContent() {
        return `
            <div class="space-y-6">
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-check-circle text-green-400 mr-2"></i>
                        COA Approval
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Recommended COA</label>
                            <select class="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white">
                                <option>COA 1: Direct Approach</option>
                                <option>COA 2: Alternative Approach</option>
                                <option>COA 3: Contingency Approach</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Justification</label>
                            <textarea class="w-full h-32 bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                                      placeholder="Justification for recommended COA..."></textarea>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Commander's Guidance</label>
                            <textarea class="w-full h-24 bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                                      placeholder="Additional guidance from commander..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateOrdersProductionContent() {
        return `
            <div class="space-y-6">
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-file-alt text-blue-400 mr-2"></i>
                        Orders Production
                    </h3>
                    <div class="space-y-4">
                        <div class="bg-blue-900 border border-blue-600 rounded-lg p-4">
                            <h4 class="text-white font-semibold mb-2">Ready to Generate OPORD</h4>
                            <p class="text-blue-200 text-sm mb-3">
                                Based on the approved COA, generate the Operation Order
                            </p>
                            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                                <i class="fas fa-file-alt mr-2"></i>Generate OPORD
                            </button>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 class="text-white font-medium mb-3">Supporting Documents</h4>
                                <div class="space-y-2">
                                    <div class="flex items-center justify-between bg-gray-700 rounded p-3">
                                        <span class="text-white text-sm">Annex A - Task Organization</span>
                                        <button class="text-blue-400 hover:text-blue-300">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </div>
                                    <div class="flex items-center justify-between bg-gray-700 rounded p-3">
                                        <span class="text-white text-sm">Annex B - Intelligence</span>
                                        <button class="text-blue-400 hover:text-blue-300">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 class="text-white font-medium mb-3">Distribution List</h4>
                                <textarea class="w-full h-32 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                          placeholder="Units to receive the OPORD..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getStepDescription(stepNum) {
        const descriptions = {
            1: 'Receive and analyze the mission from higher headquarters',
            2: 'Conduct detailed analysis of the mission and develop understanding',
            3: 'Develop multiple feasible courses of action',
            4: 'Analyze each COA through wargaming process',
            5: 'Compare COAs using evaluation criteria',
            6: 'Present recommendation and receive commander approval',
            7: 'Produce the operation order and supporting documents'
        };
        return descriptions[stepNum] || '';
    }

    initializeMDMPInterface() {
        // Step navigation
        const stepBtns = document.querySelectorAll('.step-nav-btn');
        stepBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const step = parseInt(e.currentTarget.dataset.step);
                this.switchStep(step);
            });
        });

        // Previous/Next buttons
        const prevBtn = document.getElementById('prev-step');
        const nextBtn = document.getElementById('next-step');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.currentStep > 1) {
                    this.switchStep(this.currentStep - 1);
                }
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (this.currentStep < 7) {
                    this.switchStep(this.currentStep + 1);
                }
            });
        }

        // Save and export buttons
        const saveBtn = document.getElementById('mdmp-save');
        const exportBtn = document.getElementById('mdmp-export');
        
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveMDMP());
        }
        
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportMDMP());
        }

        // Tool buttons
        const toolBtns = document.querySelectorAll('[data-tool]');
        toolBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tool = e.currentTarget.dataset.tool;
                this.handleToolAction(tool);
            });
        });
    }

    switchStep(stepNum) {
        this.currentStep = stepNum;
        
        // Update progress bar
        const progressBar = document.querySelector('.bg-green-500');
        if (progressBar) {
            progressBar.style.width = `${(stepNum / 7) * 100}%`;
        }
        
        // Update progress badge
        const progressBadge = document.querySelector('.progress-badge');
        if (progressBadge) {
            progressBadge.textContent = `Step ${stepNum} of 7`;
        }
        
        // Update step title
        const titleElement = document.getElementById('current-step-title');
        if (titleElement) {
            titleElement.textContent = `Step ${stepNum}: ${this.mdmpData.steps[stepNum].title}`;
        }
        
        // Update step content
        const editorElement = document.getElementById('step-editor');
        if (editorElement) {
            editorElement.innerHTML = this.generateStepContent(stepNum);
        }
        
        // Update navigation
        const navBtns = document.querySelectorAll('.step-nav-btn');
        navBtns.forEach(btn => {
            btn.classList.remove('bg-green-600', 'text-white');
            btn.classList.add('text-gray-300', 'hover:bg-gray-700');
        });
        
        const activeBtn = document.querySelector(`[data-step="${stepNum}"]`);
        if (activeBtn) {
            activeBtn.classList.add('bg-green-600', 'text-white');
            activeBtn.classList.remove('text-gray-300', 'hover:bg-gray-700');
        }
        
        // Update prev/next buttons
        const prevBtn = document.getElementById('prev-step');
        const nextBtn = document.getElementById('next-step');
        
        if (prevBtn) {
            prevBtn.disabled = stepNum === 1;
        }
        
        if (nextBtn) {
            nextBtn.disabled = stepNum === 7;
        }
    }

    saveMDMP() {
        console.log('Saving MDMP progress...');
        this.eventBus.emit('mdmp:saved', { data: this.mdmpData });
        this.showNotification('MDMP progress saved successfully', 'success');
    }

    exportMDMP() {
        console.log('Exporting MDMP analysis...');
        this.eventBus.emit('mdmp:exported', { data: this.mdmpData });
        this.showNotification('MDMP analysis exported successfully', 'success');
    }

    handleToolAction(tool) {
        console.log(`MDMP tool action: ${tool}`);
        this.eventBus.emit('tool:open', { tool, context: 'mdmp' });
    }

    showNotification(message, type = 'info') {
        console.log(`${type.toUpperCase()}: ${message}`);
    }

    destroy() {
        console.log('🎯 Destroying MDMPPlugin...');
        // Clean up event listeners and resources
    }
}

export default MDMPPlugin;
