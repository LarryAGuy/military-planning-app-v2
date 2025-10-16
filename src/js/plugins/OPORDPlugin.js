export class OPORDPlugin {
    constructor() {
        this.name = 'OPORD';
        this.version = '2.0.0';
        this.description = 'Operation Order (OPORD) planning and development tool';
        this.eventBus = null;
        this.container = null;
        this.currentSection = 'situation';
        this.opordData = {
            classification: 'UNCLASSIFIED',
            operation: 'TRAINING EXERCISE',
            dtg: new Date().toISOString().substr(0, 16).replace('T', ' ') + 'Z',
            unit: 'TRAINING UNIT',
            sections: {
                situation: { title: '1. SITUATION', content: '' },
                mission: { title: '2. MISSION', content: '' },
                execution: { title: '3. EXECUTION', content: '' },
                sustainment: { title: '4. SUSTAINMENT', content: '' },
                command: { title: '5. COMMAND AND CONTROL', content: '' }
            }
        };
    }

    async initialize() {
        console.log('📋 Initializing OPORDPlugin...');
        
        // Get EventBus from global API
        this.eventBus = window.MilitaryPlanningPluginAPI;
        
        // Register OPORD navigation
        this.registerNavigation();
        
        // Listen for navigation events
        this.setupEventListeners();
        
        console.log('✅ OPORDPlugin initialized');
    }

    registerNavigation() {
        this.eventBus.emit('navigation:register', {
            id: 'opord',
            label: 'OPORD',
            icon: 'fas fa-file-alt',
            description: 'Operation Order (OPORD) planning and development tool',
            order: 2,
            plugin: this.name
        });
    }

    setupEventListeners() {
        this.eventBus.on('navigation:activated', (data) => {
            if (data.id === 'opord') {
                this.activate();
            }
        });

        this.eventBus.on('workspace:ready', (data) => {
            if (data.activePlugin === 'opord') {
                // Plugin is ready - workspace will handle content display
                console.log('📋 OPORD Plugin workspace ready');
            }
        });
    }

    async activate() {
        console.log('📋 Activating OPORD Plugin...');
        
        this.eventBus.emit('workspace:change', {
            plugin: this.name,
            title: 'Operation Order (OPORD)',
            content: this.generateOPORDHTML()
        });

        // Initialize OPORD interface after DOM is ready
        setTimeout(() => {
            this.initializeOPORDInterface();
        }, 100);
    }

    generateOPORDHTML() {
        return `
            <div class="opord-container h-full flex flex-col">
                <!-- OPORD Header -->
                <div class="opord-header bg-gray-800 p-4 border-b border-gray-700 flex-shrink-0">
                    <div class="flex items-center justify-between mb-4">
                        <div class="flex items-center space-x-4">
                            <h1 class="text-xl font-bold text-white">
                                <i class="fas fa-file-alt mr-2 text-blue-400"></i>
                                Operation Order (OPORD)
                            </h1>
                            <div class="classification-badge px-3 py-1 bg-green-600 text-white text-sm font-bold rounded">
                                ${this.opordData.classification}
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <button id="opord-save" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">
                                <i class="fas fa-save mr-2"></i>Save
                            </button>
                            <button id="opord-export" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">
                                <i class="fas fa-download mr-2"></i>Export
                            </button>
                        </div>
                    </div>
                    
                    <!-- OPORD Info -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div>
                            <label class="text-gray-400">Operation:</label>
                            <input id="opord-operation" type="text" value="${this.opordData.operation}" 
                                   class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white">
                        </div>
                        <div>
                            <label class="text-gray-400">DTG:</label>
                            <input id="opord-dtg" type="text" value="${this.opordData.dtg}" 
                                   class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white">
                        </div>
                        <div>
                            <label class="text-gray-400">Unit:</label>
                            <input id="opord-unit" type="text" value="${this.opordData.unit}" 
                                   class="w-full bg-gray-700 border border-gray-600 rounded px-3 py-1 text-white">
                        </div>
                    </div>
                </div>

                <!-- OPORD Content -->
                <div class="opord-content flex-1 flex overflow-hidden">
                    <!-- Section Navigation -->
                    <div class="opord-nav w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto flex-shrink-0">
                        <div class="p-4">
                            <h3 class="text-lg font-semibold text-white mb-4">OPORD Sections</h3>
                            <nav class="space-y-2">
                                ${this.generateSectionNavigation()}
                            </nav>
                        </div>
                        
                        <!-- Quick Tools -->
                        <div class="p-4 border-t border-gray-700">
                            <h4 class="text-sm font-semibold text-gray-400 mb-3">QUICK TOOLS</h4>
                            <div class="space-y-2">
                                <button class="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded transition-colors" data-tool="mission-analysis">
                                    <i class="fas fa-search mr-2"></i>Mission Analysis
                                </button>
                                <button class="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded transition-colors" data-tool="enemy-template">
                                    <i class="fas fa-users mr-2"></i>Enemy Template
                                </button>
                                <button class="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded transition-colors" data-tool="timeline">
                                    <i class="fas fa-clock mr-2"></i>Timeline Builder
                                </button>
                                <button class="w-full text-left px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 rounded transition-colors" data-tool="annexes">
                                    <i class="fas fa-paperclip mr-2"></i>Annexes
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Section Editor -->
                    <div class="opord-editor flex-1 flex flex-col overflow-hidden">
                        <div class="editor-header bg-gray-750 p-4 border-b border-gray-600 flex-shrink-0">
                            <h2 id="current-section-title" class="text-lg font-semibold text-white">
                                ${this.opordData.sections[this.currentSection].title}
                            </h2>
                            <p class="text-gray-400 text-sm mt-1">
                                ${this.getSectionDescription(this.currentSection)}
                            </p>
                        </div>
                        
                        <div class="editor-content flex-1 p-4 overflow-y-auto">
                            <div class="max-w-4xl">
                                <!-- Section Content Editor -->
                                <div id="section-editor">
                                    ${this.generateSectionEditor(this.currentSection)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateSectionNavigation() {
        return Object.entries(this.opordData.sections).map(([key, section]) => `
            <button class="section-nav-btn w-full text-left px-3 py-2 rounded transition-colors ${key === this.currentSection ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}" 
                    data-section="${key}">
                <i class="fas fa-file-text mr-2"></i>
                ${section.title}
            </button>
        `).join('');
    }

    generateSectionEditor(sectionKey) {
        const section = this.opordData.sections[sectionKey];
        
        switch (sectionKey) {
            case 'situation':
                return this.generateSituationEditor();
            case 'mission':
                return this.generateMissionEditor();
            case 'execution':
                return this.generateExecutionEditor();
            case 'sustainment':
                return this.generateSustainmentEditor();
            case 'command':
                return this.generateCommandEditor();
            default:
                return `
                    <div class="bg-gray-800 rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-white mb-4">${section.title}</h3>
                        <textarea class="w-full h-96 bg-gray-700 border border-gray-600 rounded p-4 text-white resize-none" 
                                  placeholder="Enter ${section.title.toLowerCase()} content...">${section.content}</textarea>
                    </div>
                `;
        }
    }

    generateSituationEditor() {
        return `
            <div class="space-y-6">
                <!-- Enemy Forces -->
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-users text-red-400 mr-2"></i>
                        Enemy Forces
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Composition</label>
                            <textarea class="w-full h-24 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Enemy unit composition and strength..."></textarea>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Disposition</label>
                            <textarea class="w-full h-24 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Enemy positions and deployment..."></textarea>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Capabilities</label>
                            <textarea class="w-full h-24 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Enemy capabilities and equipment..."></textarea>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Most Likely COA</label>
                            <textarea class="w-full h-24 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Enemy most likely course of action..."></textarea>
                        </div>
                    </div>
                </div>

                <!-- Friendly Forces -->
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-flag text-blue-400 mr-2"></i>
                        Friendly Forces
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Higher Unit Mission</label>
                            <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Higher headquarters mission statement..."></textarea>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-gray-400 text-sm mb-2">Adjacent Units</label>
                                <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                          placeholder="Adjacent unit positions and missions..."></textarea>
                            </div>
                            <div>
                                <label class="block text-gray-400 text-sm mb-2">Supporting Units</label>
                                <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                          placeholder="Supporting units and attachments..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Environment -->
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-globe text-green-400 mr-2"></i>
                        Environment (OAKOC)
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Observation & Fields of Fire</label>
                            <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Visibility and engagement areas..."></textarea>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Avenues of Approach</label>
                            <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Routes for movement and attack..."></textarea>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Key Terrain</label>
                            <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Critical terrain features..."></textarea>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Obstacles & Cover</label>
                            <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="Natural and man-made obstacles..."></textarea>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateMissionEditor() {
        return `
            <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4">
                    <i class="fas fa-bullseye text-yellow-400 mr-2"></i>
                    Mission Statement
                </h3>
                <div class="space-y-4">
                    <div class="bg-blue-900 border border-blue-600 rounded-lg p-4">
                        <h4 class="text-white font-semibold mb-2">Mission Format: WHO, WHAT, WHEN, WHERE, WHY</h4>
                        <p class="text-blue-200 text-sm">
                            [Unit] [Task] [Purpose] in order to [End State] NLT [Time] at [Location]
                        </p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Who (Unit)</label>
                            <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                                   placeholder="1st Platoon, Alpha Company...">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">What (Task)</label>
                            <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                                   placeholder="Conducts movement to contact...">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">When (Time)</label>
                            <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                                   placeholder="NLT 060800MAR25">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Where (Location)</label>
                            <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                                   placeholder="Grid 12345678 to 87654321">
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-gray-400 text-sm mb-2">Why (Purpose)</label>
                        <textarea class="w-full h-24 bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                                  placeholder="In order to secure the objective and establish defensive positions..."></textarea>
                    </div>
                    
                    <div class="border-t border-gray-600 pt-4">
                        <label class="block text-gray-400 text-sm mb-2">Complete Mission Statement</label>
                        <textarea class="w-full h-32 bg-gray-700 border border-gray-600 rounded p-3 text-white font-mono" 
                                  placeholder="The complete mission statement will be generated here..."></textarea>
                    </div>
                </div>
            </div>
        `;
    }

    generateExecutionEditor() {
        return `
            <div class="space-y-6">
                <!-- Commander's Intent -->
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-eye text-purple-400 mr-2"></i>
                        Commander's Intent
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Purpose</label>
                            <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="The purpose of this operation is to..."></textarea>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">Method</label>
                            <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="We will accomplish this by..."></textarea>
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-2">End State</label>
                            <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-3 text-white text-sm" 
                                      placeholder="The desired end state is..."></textarea>
                        </div>
                    </div>
                </div>

                <!-- Concept of Operations -->
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-project-diagram text-green-400 mr-2"></i>
                        Concept of Operations
                    </h3>
                    <textarea class="w-full h-40 bg-gray-700 border border-gray-600 rounded p-3 text-white" 
                              placeholder="Describe the overall concept of how the operation will be conducted..."></textarea>
                </div>

                <!-- Tasks to Subordinate Units -->
                <div class="bg-gray-800 rounded-lg p-6">
                    <h3 class="text-lg font-semibold text-white mb-4">
                        <i class="fas fa-tasks text-blue-400 mr-2"></i>
                        Tasks to Subordinate Units
                    </h3>
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                            <h4 class="text-white font-medium">Unit Tasks</h4>
                            <button class="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                                <i class="fas fa-plus mr-1"></i>Add Task
                            </button>
                        </div>
                        <div class="space-y-3">
                            <div class="bg-gray-700 rounded p-4">
                                <div class="flex items-center justify-between mb-2">
                                    <span class="text-white font-medium">1st Squad</span>
                                    <button class="text-red-400 hover:text-red-300">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                                <textarea class="w-full h-16 bg-gray-600 border border-gray-500 rounded p-2 text-white text-sm" 
                                          placeholder="Task for 1st Squad..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateSustainmentEditor() {
        return `
            <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4">
                    <i class="fas fa-boxes text-orange-400 mr-2"></i>
                    Sustainment
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="text-white font-medium mb-3">Logistics</h4>
                        <div class="space-y-3">
                            <div>
                                <label class="block text-gray-400 text-sm mb-1">Supply</label>
                                <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-2 text-white text-sm" 
                                          placeholder="Supply requirements and procedures..."></textarea>
                            </div>
                            <div>
                                <label class="block text-gray-400 text-sm mb-1">Transportation</label>
                                <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-2 text-white text-sm" 
                                          placeholder="Transportation assets and routes..."></textarea>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 class="text-white font-medium mb-3">Personnel Services</h4>
                        <div class="space-y-3">
                            <div>
                                <label class="block text-gray-400 text-sm mb-1">Medical</label>
                                <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-2 text-white text-sm" 
                                          placeholder="Medical support and evacuation..."></textarea>
                            </div>
                            <div>
                                <label class="block text-gray-400 text-sm mb-1">Maintenance</label>
                                <textarea class="w-full h-20 bg-gray-700 border border-gray-600 rounded p-2 text-white text-sm" 
                                          placeholder="Equipment maintenance procedures..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateCommandEditor() {
        return `
            <div class="bg-gray-800 rounded-lg p-6">
                <h3 class="text-lg font-semibold text-white mb-4">
                    <i class="fas fa-satellite-dish text-cyan-400 mr-2"></i>
                    Command and Control
                </h3>
                <div class="space-y-6">
                    <div>
                        <h4 class="text-white font-medium mb-3">Command</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-gray-400 text-sm mb-1">Command Post Location</label>
                                <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white text-sm" 
                                       placeholder="Grid coordinates...">
                            </div>
                            <div>
                                <label class="block text-gray-400 text-sm mb-1">Succession of Command</label>
                                <textarea class="w-full h-16 bg-gray-700 border border-gray-600 rounded p-2 text-white text-sm" 
                                          placeholder="Chain of command..."></textarea>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-medium mb-3">Control</h4>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-gray-400 text-sm mb-1">Communications</label>
                                <textarea class="w-full h-24 bg-gray-700 border border-gray-600 rounded p-2 text-white text-sm" 
                                          placeholder="Primary and alternate communication methods..."></textarea>
                            </div>
                            <div>
                                <label class="block text-gray-400 text-sm mb-1">Reports</label>
                                <textarea class="w-full h-24 bg-gray-700 border border-gray-600 rounded p-2 text-white text-sm" 
                                          placeholder="Required reports and timelines..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getSectionDescription(sectionKey) {
        const descriptions = {
            situation: 'Enemy forces, friendly forces, and environmental considerations',
            mission: 'Clear, concise statement of the task and purpose',
            execution: 'Commander\'s intent, concept of operations, and tasks to subordinate units',
            sustainment: 'Logistics and personnel services support',
            command: 'Command relationships and control measures'
        };
        return descriptions[sectionKey] || '';
    }

    initializeOPORDInterface() {
        // Section navigation
        const sectionBtns = document.querySelectorAll('.section-nav-btn');
        sectionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.currentTarget.dataset.section;
                this.switchSection(section);
            });
        });

        // Save and export buttons
        const saveBtn = document.getElementById('opord-save');
        const exportBtn = document.getElementById('opord-export');
        
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.saveOPORD());
        }
        
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportOPORD());
        }

        // Quick tools
        const toolBtns = document.querySelectorAll('[data-tool]');
        toolBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tool = e.currentTarget.dataset.tool;
                this.handleToolAction(tool);
            });
        });
    }

    switchSection(sectionKey) {
        this.currentSection = sectionKey;
        
        // Update navigation
        const navBtns = document.querySelectorAll('.section-nav-btn');
        navBtns.forEach(btn => {
            btn.classList.remove('bg-blue-600', 'text-white');
            btn.classList.add('text-gray-300', 'hover:bg-gray-700');
        });
        
        const activeBtn = document.querySelector(`[data-section="${sectionKey}"]`);
        if (activeBtn) {
            activeBtn.classList.add('bg-blue-600', 'text-white');
            activeBtn.classList.remove('text-gray-300', 'hover:bg-gray-700');
        }
        
        // Update section title and content
        const titleElement = document.getElementById('current-section-title');
        const editorElement = document.getElementById('section-editor');
        
        if (titleElement) {
            titleElement.textContent = this.opordData.sections[sectionKey].title;
        }
        
        if (editorElement) {
            editorElement.innerHTML = this.generateSectionEditor(sectionKey);
        }
    }

    saveOPORD() {
        console.log('Saving OPORD...');
        this.eventBus.emit('opord:saved', { data: this.opordData });
        
        // Show success message
        this.showNotification('OPORD saved successfully', 'success');
    }

    exportOPORD() {
        console.log('Exporting OPORD...');
        this.eventBus.emit('opord:exported', { data: this.opordData });
        
        // Show success message
        this.showNotification('OPORD exported successfully', 'success');
    }

    handleToolAction(tool) {
        console.log(`OPORD tool action: ${tool}`);
        this.eventBus.emit('tool:open', { tool, context: 'opord' });
    }

    showNotification(message, type = 'info') {
        // This would typically show a toast notification
        console.log(`${type.toUpperCase()}: ${message}`);
    }

    destroy() {
        console.log('📋 Destroying OPORDPlugin...');
        // Clean up event listeners and resources
    }
}

export default OPORDPlugin;
