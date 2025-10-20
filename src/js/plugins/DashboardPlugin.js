export class DashboardPlugin {
    constructor() {
        this.name = 'Dashboard';
        this.version = '2.0.0';
        this.description = 'Military Planning Dashboard with operational overview and quick access tools';
        this.eventBus = null;
        this.container = null;
        this.widgets = new Map();
    }

    async initialize() {
        console.log('📊 Initializing DashboardPlugin...');
        
        // Get EventBus from global API
        this.eventBus = window.MilitaryPlanningPluginAPI;
        
        // Register dashboard navigation
        this.registerNavigation();
        
        // Listen for navigation events
        this.setupEventListeners();
        
        console.log('✅ DashboardPlugin initialized');
    }

    registerNavigation() {
        this.eventBus.emit('navigation:register', {
            id: 'dashboard',
            label: 'Dashboard',
            icon: 'fas fa-tachometer-alt',
            order: 1,
            plugin: this.name
        });
    }

    setupEventListeners() {
        this.eventBus.on('navigation:activated', (data) => {
            if (data.id === 'dashboard') {
                this.activate();
            }
        });

        this.eventBus.on('workspace:ready', (data) => {
            if (data.activePlugin === 'dashboard') {
                this.render();
            }
        });
    }

    async activate() {
        console.log('📊 Activating Dashboard...');
        
        this.eventBus.emit('workspace:change', {
            plugin: this.name,
            title: 'Military Planning Dashboard',
            content: this.generateDashboardHTML()
        });

        // Initialize widgets after DOM is ready
        setTimeout(() => {
            this.initializeWidgets();
        }, 100);
    }

    generateDashboardHTML() {
        return `
            <div class="dashboard-container h-full overflow-y-auto">
                <!-- Dashboard Header -->
                <div class="dashboard-header mb-6">
                    <div class="flex items-center justify-between">
                        <div>
                            <h1 class="text-2xl font-bold text-white mb-2">
                                <i class="fas fa-tachometer-alt mr-2 text-blue-400"></i>
                                Military Planning Dashboard
                            </h1>
                            <p class="text-gray-400">Operational overview and planning tools</p>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="text-right">
                                <div class="text-sm text-gray-400">Current Operation</div>
                                <div class="text-white font-semibold">TRAINING EXERCISE</div>
                            </div>
                            <div class="text-right">
                                <div class="text-sm text-gray-400">Phase</div>
                                <div class="text-white font-semibold">PLANNING</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="quick-actions mb-6">
                    <h2 class="text-lg font-semibold text-white mb-3">
                        <i class="fas fa-bolt mr-2 text-yellow-400"></i>
                        Quick Actions
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <button class="quick-action-btn bg-blue-600 hover:bg-blue-700 p-4 rounded-lg transition-colors" data-action="new-opord">
                            <i class="fas fa-file-alt text-2xl mb-2"></i>
                            <div class="font-semibold">New OPORD</div>
                            <div class="text-sm opacity-80">Create Operation Order</div>
                        </button>
                        <button class="quick-action-btn bg-green-600 hover:bg-green-700 p-4 rounded-lg transition-colors" data-action="mdmp-process">
                            <i class="fas fa-project-diagram text-2xl mb-2"></i>
                            <div class="font-semibold">MDMP Process</div>
                            <div class="text-sm opacity-80">Military Decision Making</div>
                        </button>
                        <button class="quick-action-btn bg-purple-600 hover:bg-purple-700 p-4 rounded-lg transition-colors" data-action="mission-analysis">
                            <i class="fas fa-search text-2xl mb-2"></i>
                            <div class="font-semibold">Mission Analysis</div>
                            <div class="text-sm opacity-80">Analyze Mission Requirements</div>
                        </button>
                        <button class="quick-action-btn bg-red-600 hover:bg-red-700 p-4 rounded-lg transition-colors" data-action="threat-assessment">
                            <i class="fas fa-shield-alt text-2xl mb-2"></i>
                            <div class="font-semibold">Threat Assessment</div>
                            <div class="text-sm opacity-80">Enemy Analysis</div>
                        </button>
                    </div>
                </div>

                <!-- Dashboard Widgets -->
                <div class="dashboard-widgets grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Recent Activities Widget -->
                    <div class="widget bg-gray-800 rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-white mb-4">
                            <i class="fas fa-history mr-2 text-green-400"></i>
                            Recent Activities
                        </h3>
                        <div id="recent-activities" class="space-y-3">
                            <div class="activity-item flex items-center space-x-3 p-3 bg-gray-700 rounded">
                                <i class="fas fa-file-alt text-blue-400"></i>
                                <div class="flex-1">
                                    <div class="text-white font-medium">OPORD Draft Created</div>
                                    <div class="text-gray-400 text-sm">Training Exercise Alpha - 2 hours ago</div>
                                </div>
                            </div>
                            <div class="activity-item flex items-center space-x-3 p-3 bg-gray-700 rounded">
                                <i class="fas fa-users text-green-400"></i>
                                <div class="flex-1">
                                    <div class="text-white font-medium">Team Assignment Updated</div>
                                    <div class="text-gray-400 text-sm">Platoon Alpha assignments - 4 hours ago</div>
                                </div>
                            </div>
                            <div class="activity-item flex items-center space-x-3 p-3 bg-gray-700 rounded">
                                <i class="fas fa-map text-yellow-400"></i>
                                <div class="flex-1">
                                    <div class="text-white font-medium">Mission Analysis Completed</div>
                                    <div class="text-gray-400 text-sm">Sector Bravo reconnaissance - 6 hours ago</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- System Status Widget -->
                    <div class="widget bg-gray-800 rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-white mb-4">
                            <i class="fas fa-server mr-2 text-blue-400"></i>
                            System Status
                        </h3>
                        <div class="space-y-4">
                            <div class="status-item flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                                    <span class="text-white">Security Systems</span>
                                </div>
                                <span class="text-green-400 font-semibold">Operational</span>
                            </div>
                            <div class="status-item flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                                    <span class="text-white">Network Connectivity</span>
                                </div>
                                <span class="text-green-400 font-semibold">Connected</span>
                            </div>
                            <div class="status-item flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <span class="text-white">Plugin Systems</span>
                                </div>
                                <span class="text-yellow-400 font-semibold">Loading</span>
                            </div>
                            <div class="status-item flex items-center justify-between">
                                <div class="flex items-center space-x-2">
                                    <div class="w-3 h-3 bg-blue-400 rounded-full"></div>
                                    <span class="text-white">AI Assistant</span>
                                </div>
                                <span class="text-blue-400 font-semibold">Initializing</span>
                            </div>
                        </div>
                    </div>

                    <!-- Planning Tools Widget -->
                    <div class="widget bg-gray-800 rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-white mb-4">
                            <i class="fas fa-tools mr-2 text-purple-400"></i>
                            Planning Tools
                        </h3>
                        <div class="grid grid-cols-2 gap-3">
                            <button class="tool-btn bg-gray-700 hover:bg-gray-600 p-3 rounded transition-colors" data-tool="opord-builder">
                                <i class="fas fa-file-alt text-blue-400 mb-2"></i>
                                <div class="text-sm font-medium text-white">OPORD Builder</div>
                            </button>
                            <button class="tool-btn bg-gray-700 hover:bg-gray-600 p-3 rounded transition-colors" data-tool="mdmp-wizard">
                                <i class="fas fa-magic text-green-400 mb-2"></i>
                                <div class="text-sm font-medium text-white">MDMP Wizard</div>
                            </button>
                            <button class="tool-btn bg-gray-700 hover:bg-gray-600 p-3 rounded transition-colors" data-tool="mapping-tool">
                                <i class="fas fa-map-marked-alt text-cyan-400 mb-2"></i>
                                <div class="text-sm font-medium text-white">Mapping Tool</div>
                            </button>
                            <button class="tool-btn bg-gray-700 hover:bg-gray-600 p-3 rounded transition-colors" data-tool="weather-tool">
                                <i class="fas fa-cloud-sun text-orange-400 mb-2"></i>
                                <div class="text-sm font-medium text-white">Weather Tool</div>
                            </button>
                            <button class="tool-btn bg-gray-700 hover:bg-gray-600 p-3 rounded transition-colors" data-tool="mapping-weather-tool">
                                <i class="fas fa-globe text-teal-400 mb-2"></i>
                                <div class="text-sm font-medium text-white">Map & Weather</div>
                            </button>
                            <button class="tool-btn bg-gray-700 hover:bg-gray-600 p-3 rounded transition-colors" data-tool="mission-tracker">
                                <i class="fas fa-tasks text-yellow-400 mb-2"></i>
                                <div class="text-sm font-medium text-white">Mission Tracker</div>
                            </button>
                        </div>
                    </div>

                    <!-- Mission Overview Widget -->
                    <div class="widget bg-gray-800 rounded-lg p-6">
                        <h3 class="text-lg font-semibold text-white mb-4">
                            <i class="fas fa-flag mr-2 text-red-400"></i>
                            Mission Overview
                        </h3>
                        <div class="space-y-4">
                            <div class="mission-stat">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-gray-400">Active Operations</span>
                                    <span class="text-white font-bold">3</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-2">
                                    <div class="bg-blue-500 h-2 rounded-full" style="width: 60%"></div>
                                </div>
                            </div>
                            <div class="mission-stat">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-gray-400">Planning Phase</span>
                                    <span class="text-white font-bold">75%</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-2">
                                    <div class="bg-green-500 h-2 rounded-full" style="width: 75%"></div>
                                </div>
                            </div>
                            <div class="mission-stat">
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-gray-400">Resource Allocation</span>
                                    <span class="text-white font-bold">85%</span>
                                </div>
                                <div class="w-full bg-gray-700 rounded-full h-2">
                                    <div class="bg-yellow-500 h-2 rounded-full" style="width: 85%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    initializeWidgets() {
        // Initialize quick action buttons
        const quickActionBtns = document.querySelectorAll('.quick-action-btn');
        quickActionBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const action = e.currentTarget.dataset.action;
                this.handleQuickAction(action);
            });
        });

        // Initialize tool buttons
        const toolBtns = document.querySelectorAll('.tool-btn');
        toolBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tool = e.currentTarget.dataset.tool;
                this.handleToolAction(tool);
            });
        });

        // Update system status
        this.updateSystemStatus();
    }

    handleQuickAction(action) {
        console.log(`Dashboard quick action: ${action}`);
        
        switch (action) {
            case 'new-opord':
                this.eventBus.emit('navigation:activate', { id: 'opord' });
                break;
            case 'mdmp-process':
                this.eventBus.emit('navigation:activate', { id: 'mdmp' });
                break;
            case 'mission-analysis':
                this.eventBus.emit('tool:open', { tool: 'mission-analysis' });
                break;
            case 'threat-assessment':
                this.eventBus.emit('tool:open', { tool: 'threat-assessment' });
                break;
            default:
                console.log(`Unknown quick action: ${action}`);
        }
    }

    handleToolAction(tool) {
        console.log(`Dashboard tool action: ${tool}`);

        // Handle mapping and weather tools specially
        switch (tool) {
            case 'mapping-tool':
                this.openMappingTool();
                break;
            case 'weather-tool':
                this.openWeatherTool();
                break;
            case 'mapping-weather-tool':
                this.openMappingWeatherTool();
                break;
            default:
                this.eventBus.emit('tool:open', { tool });
        }
    }

    async openMappingTool() {
        console.log('📍 Opening Mapping Tool...');

        // Dynamically import MapTool
        try {
            const { MapTool } = await import('../mapping/MapTool.js');

            // Create modal container
            const modal = this.createToolModal('Tactical Mapping Tool', 'mapping-tool-modal');

            // Create map container
            const mapContainer = document.createElement('div');
            mapContainer.id = 'mapping-tool-container';
            mapContainer.style.height = '600px';
            modal.querySelector('.modal-body').appendChild(mapContainer);

            // Initialize map tool
            const mapTool = new MapTool();
            await mapTool.initialize('mapping-tool-container');

            console.log('✅ Mapping Tool opened successfully');
        } catch (error) {
            console.error('❌ Error opening Mapping Tool:', error);
            alert('Failed to open Mapping Tool. Please try again.');
        }
    }

    async openWeatherTool() {
        console.log('🌤️ Opening Weather Tool...');

        // Dynamically import WeatherTool
        try {
            const { WeatherTool } = await import('../weather/WeatherTool.js');

            // Create modal container
            const modal = this.createToolModal('Weather & Tactical Data Tool', 'weather-tool-modal');

            // Create weather container
            const weatherContainer = document.createElement('div');
            weatherContainer.id = 'weather-tool-container';
            modal.querySelector('.modal-body').appendChild(weatherContainer);

            // Initialize weather tool
            const weatherTool = new WeatherTool();
            await weatherTool.initialize();

            // Add weather display HTML
            weatherContainer.innerHTML = weatherTool.createWeatherDisplayHTML();

            console.log('✅ Weather Tool opened successfully');
        } catch (error) {
            console.error('❌ Error opening Weather Tool:', error);
            alert('Failed to open Weather Tool. Please try again.');
        }
    }

    async openMappingWeatherTool() {
        console.log('🗺️ Opening Mapping & Weather Tool...');

        // Dynamically import MappingWeatherTool
        try {
            const { MappingWeatherTool } = await import('../mapping-weather/MappingWeatherTool.js');

            // Create modal container
            const modal = this.createToolModal('Mapping & Weather Tool', 'mapping-weather-tool-modal', 'max-w-7xl');

            // Create combined container
            const container = document.createElement('div');
            container.id = 'mapping-weather-tool-container';
            container.className = 'mapping-weather-display side-by-side';
            container.innerHTML = `
                <div class="map-section">
                    <div id="mapping-weather-map-container" style="height: 500px;"></div>
                </div>
                <div class="weather-section" id="mapping-weather-weather-container">
                    <!-- Coordinate converter and weather data will be inserted here -->
                </div>
            `;
            modal.querySelector('.modal-body').appendChild(container);

            // Initialize combined tool
            const mappingWeatherTool = new MappingWeatherTool();
            await mappingWeatherTool.initialize('mapping-weather-map-container');

            // Insert coordinate converter HTML
            const weatherContainer = document.getElementById('mapping-weather-weather-container');
            if (weatherContainer) {
                const coordConverterHTML = mappingWeatherTool.getCoordinateConverterHTML();
                weatherContainer.innerHTML = coordConverterHTML;

                // Attach DOM event listeners after HTML is inserted
                mappingWeatherTool.getCoordinateConverterUI().attachDOMEventListeners();
            }

            console.log('✅ Mapping & Weather Tool opened successfully');
        } catch (error) {
            console.error('❌ Error opening Mapping & Weather Tool:', error);
            alert('Failed to open Mapping & Weather Tool. Please try again.');
        }
    }

    createToolModal(title, id, sizeClass = 'max-w-6xl') {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.id = id;
        overlay.className = 'fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50';

        // Create modal content
        overlay.innerHTML = `
            <div class="bg-gray-800 rounded-lg ${sizeClass} w-full mx-4 max-h-[90vh] overflow-hidden flex flex-col">
                <div class="modal-header flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 class="text-xl font-bold text-white">${title}</h2>
                    <button class="modal-close text-gray-400 hover:text-white text-2xl">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body p-6 overflow-y-auto flex-1">
                    <!-- Tool content will be inserted here -->
                </div>
            </div>
        `;

        // Add to document
        document.body.appendChild(overlay);

        // Add close button event listener (CSP-compliant)
        const closeBtn = overlay.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                overlay.remove();
            });
        }

        return overlay;
    }

    updateSystemStatus() {
        // This would typically fetch real system status
        // For now, we'll simulate status updates
        setTimeout(() => {
            this.eventBus.emit('system:status-updated', {
                plugins: 'operational',
                ai: 'ready'
            });
        }, 2000);
    }

    destroy() {
        console.log('📊 Destroying DashboardPlugin...');
        // Clean up event listeners and resources
        this.widgets.clear();
    }
}

export default DashboardPlugin;
