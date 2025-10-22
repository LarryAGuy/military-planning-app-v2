import { SystemMonitor } from '../utils/SystemMonitor.js';
import { AiProviderManager } from '../ai-assistant/AiProviderManager.js';

export class RightSidebarComponent {
    constructor(container, eventBus) {
        this.container = typeof container === 'string' ? document.querySelector(container) : container;
        this.eventBus = eventBus;
        this.collapsed = false;
        this.sections = new Map();
        this.systemMonitor = new SystemMonitor(eventBus);
        this.aiProviderManager = null; // Initialize in async initialize()
        this.operationInfo = {
            operation: 'TRAINING EXERCISE',
            phase: 'PLANNING',
            user: 'SYSTEM USER'
        };
    }

    async initialize() {
        console.log('📊 Initializing RightSidebarComponent...');

        this.render();
        this.setupEventListeners();
        this.initializeSections();
        this.systemMonitor.startMonitoring();

        // Initialize AI Provider Manager with EventBus instance
        this.aiProviderManager = new AiProviderManager(this.eventBus);
        console.log('🤖 AI Provider Manager initialized');

        console.log('✅ RightSidebarComponent initialized');
    }

    render() {
        this.container.innerHTML = this.generateTemplate();
    }

    generateTemplate() {
        return `
            <div class="h-full flex flex-col bg-gray-800 border-l border-gray-700">
                <div class="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
                    <h3 class="text-lg font-semibold text-white">System Info</h3>
                    <button id="sidebar-toggle" class="text-gray-400 hover:text-white transition-colors" title="Toggle Sidebar">
                        <i class="fas fa-chevron-right transform transition-transform duration-200"></i>
                    </button>
                </div>
                <div class="flex-1 overflow-y-auto">
                    ${this.generateSystemStatusSection()}
                    ${this.generateOperationInfoSection()}
                    ${this.generateAIAssistantSection()}
                </div>
            </div>
        `;
    }

    generateSystemStatusSection() {
        return `
            <div class="section-container" data-section="system-status">
                <div class="section-header p-3 bg-gray-750 border-b border-gray-600 cursor-pointer">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <i class="fas fa-server text-blue-400"></i>
                            <span class="font-semibold text-white">System Status</span>
                        </div>
                        <i class="fas fa-chevron-down section-toggle transform transition-transform duration-200"></i>
                    </div>
                </div>
                <div class="section-content p-3 space-y-3">
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-400">Security:</span>
                        <div class="flex items-center space-x-2">
                            <div id="security-status" class="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span class="text-green-400">Operational</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-400">Network:</span>
                        <div class="flex items-center space-x-2">
                            <div id="network-status" class="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span class="text-green-400">Connected</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-400">Plugins:</span>
                        <div class="flex items-center space-x-2">
                            <div id="plugin-status" class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span class="text-yellow-400">Loading</span>
                        </div>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-400">Uptime:</span>
                        <span id="system-uptime" class="text-white font-mono">00:00:00</span>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-400">Memory:</span>
                        <span id="memory-usage" class="text-white font-mono">0 MB</span>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-400">Connections:</span>
                        <span id="active-connections" class="text-white font-mono">0</span>
                    </div>
                </div>
            </div>
        `;
    }



    generateOperationInfoSection() {
        return `
            <div class="section-container" data-section="operation-info">
                <div class="section-header p-3 bg-gray-750 border-b border-gray-600 cursor-pointer">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <i class="fas fa-flag text-yellow-400"></i>
                            <span class="font-semibold text-white">Operation Info</span>
                        </div>
                        <i class="fas fa-chevron-down section-toggle transform transition-transform duration-200"></i>
                    </div>
                </div>
                <div class="section-content p-3 space-y-3">
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-400">Operation:</span>
                        <span id="current-operation" class="text-white font-semibold">TRAINING EXERCISE</span>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-400">Phase:</span>
                        <span id="current-phase" class="text-white font-semibold">PLANNING</span>
                    </div>
                    <div class="flex items-center justify-between text-sm">
                        <span class="text-gray-400">User:</span>
                        <span id="user-info" class="text-white font-semibold">SYSTEM USER</span>
                    </div>
                </div>
            </div>
        `;
    }

    generateAIAssistantSection() {
        return `
            <div class="section-container" data-section="ai-assistant">
                <div class="section-header p-3 bg-gray-750 border-b border-gray-600 cursor-pointer">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <i class="fas fa-robot text-purple-400"></i>
                            <span class="font-semibold text-white">AI Assistant</span>
                            <span class="text-xs bg-purple-600 text-white px-2 py-1 rounded">BETA</span>
                        </div>
                        <i class="fas fa-chevron-down section-toggle transform transition-transform duration-200"></i>
                    </div>
                </div>
                <div class="section-content p-0">
                    <!-- Chat Messages Area -->
                    <div id="ai-chat-messages" class="h-48 overflow-y-auto p-3 space-y-2 bg-gray-850" style="scroll-behavior: smooth;">
                        <div class="flex items-start space-x-2" data-message-id="welcome">
                            <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <i class="fas fa-robot text-xs text-white"></i>
                            </div>
                            <div class="bg-gray-700 rounded-lg p-2 max-w-full">
                                <p class="text-sm text-white">Hello! I'm your AI planning assistant. I can help with:</p>
                                <ul class="text-xs text-gray-300 mt-1 space-y-1">
                                    <li>• OPORD development and analysis</li>
                                    <li>• Mission planning guidance</li>
                                    <li>• Tactical recommendations</li>
                                    <li>• Military doctrine references</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <!-- Chat Input Area -->
                    <div class="p-3 border-t border-gray-600">
                        <div class="flex space-x-2">
                            <textarea
                                id="ai-chat-input"
                                rows="3"
                                placeholder="Type your message... (Shift+Enter for new line, Enter to send)"
                                class="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-y"
                                style="min-height: 60px; max-height: 150px;"
                            ></textarea>
                            <button
                                id="ai-chat-send"
                                class="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg transition-colors"
                            >
                                <i class="fas fa-paper-plane text-sm"></i>
                            </button>
                        </div>
                        <div class="flex items-center justify-between mt-2">
                            <div class="flex items-center space-x-2">
                                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span class="text-xs text-gray-400">Operational</span>
                            </div>
                            <button
                                id="ai-chat-clear"
                                class="text-xs text-gray-400 hover:text-white transition-colors"
                            >
                                Clear Chat
                            </button>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div class="p-3 border-t border-gray-600">
                        <div class="text-xs text-gray-400 mb-2">Quick Actions:</div>
                        <div class="grid grid-cols-2 gap-2">
                            <button class="ai-quick-action bg-gray-700 hover:bg-gray-600 text-white text-xs py-2 px-3 rounded transition-colors" data-action="OPORD Help">
                                <i class="fas fa-file-alt mr-1"></i>OPORD Help
                            </button>
                            <button class="ai-quick-action bg-gray-700 hover:bg-gray-600 text-white text-xs py-2 px-3 rounded transition-colors" data-action="Tactical Guide">
                                <i class="fas fa-map mr-1"></i>Tactical Guide
                            </button>
                            <button class="ai-quick-action bg-gray-700 hover:bg-gray-600 text-white text-xs py-2 px-3 rounded transition-colors" data-action="Doctrine Ref">
                                <i class="fas fa-book mr-1"></i>Doctrine Ref
                            </button>
                            <button class="ai-quick-action bg-gray-700 hover:bg-gray-600 text-white text-xs py-2 px-3 rounded transition-colors" data-action="Suggestions">
                                <i class="fas fa-lightbulb mr-1"></i>Suggestions
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    setupEventListeners() {
        // Sidebar toggle functionality
        const toggleBtn = document.getElementById('sidebar-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                this.toggleSidebar();
            });
        }

        // Section collapse/expand functionality
        const sectionHeaders = this.container.querySelectorAll('.section-header');
        sectionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                this.toggleSection(header.parentElement);
            });
        });

        // Listen for system monitor updates
        this.eventBus.on('system:uptime-updated', (data) => {
            this.updateUptimeDisplay(data);
        });

        this.eventBus.on('system:memory-updated', (data) => {
            this.updateMemoryDisplay(data);
        });

        // Listen for status changes
        this.eventBus.on('security:status-changed', (data) => {
            this.updateSecurityStatus(data);
        });

        this.eventBus.on('network:status-changed', (data) => {
            this.updateNetworkStatus(data);
        });

        this.eventBus.on('plugin:status-changed', (data) => {
            this.updatePluginStatus(data);
        });

        // Listen for operation changes
        this.eventBus.on('operation:changed', (data) => {
            this.updateOperationInfo(data);
        });

        this.eventBus.on('user:changed', (data) => {
            this.updateUserInfo(data);
        });

        // AI Chat Interface Event Listeners (Framework for future implementation)
        this.setupAIChatListeners();

        // Responsive behavior setup
        this.setupResponsiveBehavior();
    }

    setupAIChatListeners() {
        // Chat input handling
        const chatInput = document.getElementById('ai-chat-input');
        const chatSend = document.getElementById('ai-chat-send');
        const chatClear = document.getElementById('ai-chat-clear');

        if (chatInput && chatSend) {
            // Keyboard shortcuts: Enter to send, Shift+Enter for new line
            chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendAIMessage();
                }
                // Shift+Enter allows default behavior (new line)
            });

            // Send button click
            chatSend.addEventListener('click', () => {
                this.sendAIMessage();
            });
        }

        if (chatClear) {
            chatClear.addEventListener('click', () => {
                this.clearAIChat();
            });
        }

        // Quick action buttons
        const quickActionButtons = document.querySelectorAll('.ai-quick-action');
        quickActionButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const action = button.dataset.action;
                this.handleAIQuickAction(action);
            });
        });
    }

    /**
     * Send AI message
     */
    async sendAIMessage() {
        const chatInput = document.getElementById('ai-chat-input');
        const message = chatInput?.value.trim();

        if (!message) {
            return;
        }

        console.log('📤 AI Message:', message);

        // Add user message
        this.addAIMessage({
            role: 'user',
            content: message,
            timestamp: new Date().toISOString()
        });

        // Clear input
        chatInput.value = '';

        // Emit event
        this.eventBus.emit('ai:message-sent', { message });

        // Generate AI response using provider
        try {
            const context = this.gatherContext();
            const response = await this.aiProviderManager.generateResponse(message, context);

            this.addAIMessage({
                role: 'assistant',
                content: response.content,
                timestamp: new Date().toISOString()
            });
        } catch (error) {
            console.error('❌ AI Error:', error);
            this.addAIMessage({
                role: 'assistant',
                content: 'I apologize, but I encountered an error processing your request. Please try again or rephrase your question.',
                timestamp: new Date().toISOString()
            });
        }
    }

    /**
     * Clear AI chat history
     */
    clearAIChat() {
        if (!confirm('Are you sure you want to clear the chat history?')) {
            return;
        }

        const messagesArea = document.getElementById('ai-chat-messages');
        if (messagesArea) {
            // Remove all messages except welcome message
            const messages = messagesArea.querySelectorAll('[data-message-id]:not([data-message-id="welcome"])');
            messages.forEach(msg => msg.remove());

            console.log('🗑️ AI Chat cleared');
            this.eventBus.emit('ai:chat-cleared');
        }
    }

    /**
     * Handle quick action button clicks
     * @param {string} action - Action name
     */
    handleAIQuickAction(action) {
        console.log('⚡ AI Quick Action:', action);

        const chatInput = document.getElementById('ai-chat-input');
        if (!chatInput) return;

        // Map actions to predefined messages
        const actionMessages = {
            'OPORD Help': 'How do I create an OPORD?',
            'Tactical Guide': 'What tactical considerations should I include?',
            'Doctrine Ref': 'What are the relevant doctrinal references?',
            'Suggestions': 'What suggestions do you have for my current planning task?'
        };

        const message = actionMessages[action];
        if (message) {
            // Auto-populate and send
            chatInput.value = message;
            this.sendAIMessage();
        }

        this.eventBus.emit('ai:quick-action', { action });
    }

    /**
     * Add AI message to chat
     * @param {Object} message - Message object with role, content, timestamp
     */
    addAIMessage(message) {
        const messagesArea = document.getElementById('ai-chat-messages');
        if (!messagesArea) return;

        // Format timestamp
        const date = new Date(message.timestamp);
        const timeStr = date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });

        // Escape HTML to prevent XSS
        const escapeHtml = (text) => {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        };

        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = 'flex items-start space-x-2';
        messageEl.dataset.messageId = `msg-${Date.now()}`;
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateY(10px)';
        messageEl.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        if (message.role === 'user') {
            messageEl.innerHTML = `
                <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-user text-xs text-white"></i>
                </div>
                <div class="bg-gray-700 rounded-lg p-2 max-w-full border-l-4 border-blue-500">
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-xs text-gray-400">You</span>
                        <span class="text-xs text-gray-500">${timeStr}</span>
                    </div>
                    <p class="text-sm text-white">${escapeHtml(message.content)}</p>
                </div>
            `;
        } else {
            messageEl.innerHTML = `
                <div class="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <i class="fas fa-robot text-xs text-white"></i>
                </div>
                <div class="bg-gray-700 rounded-lg p-2 max-w-full border-l-4 border-purple-500">
                    <div class="flex items-center justify-between mb-1">
                        <span class="text-xs text-gray-400">AI Assistant</span>
                        <span class="text-xs text-gray-500">${timeStr}</span>
                    </div>
                    <p class="text-sm text-white">${escapeHtml(message.content)}</p>
                </div>
            `;
        }

        messagesArea.appendChild(messageEl);

        // Trigger animation
        setTimeout(() => {
            messageEl.style.opacity = '1';
            messageEl.style.transform = 'translateY(0)';
        }, 10);

        // Auto-scroll to bottom
        messagesArea.scrollTop = messagesArea.scrollHeight;
    }

    /**
     * Gather context for AI provider
     * @returns {Object} Context object
     */
    gatherContext() {
        // Detect current workspace from URL or active tool
        const currentPath = window.location.hash || '';
        let workspace = 'default';

        if (currentPath.includes('opord-draft') || currentPath.includes('draft-opord')) {
            workspace = 'opord-draft';
        } else if (currentPath.includes('mdmp')) {
            workspace = 'mdmp';
        } else if (currentPath.includes('jpp')) {
            workspace = 'jpp';
        } else if (currentPath.includes('tactics')) {
            workspace = 'tactics';
        } else if (currentPath.includes('battle-drills')) {
            workspace = 'battle-drills';
        }

        // Get classification from classification banner (if available)
        let classification = 'UNCLASSIFIED';
        const classificationBanner = document.querySelector('.classification-banner');
        if (classificationBanner) {
            const bannerText = classificationBanner.textContent || '';
            if (bannerText.includes('TOP SECRET')) {
                classification = 'TOP SECRET';
            } else if (bannerText.includes('SECRET')) {
                classification = 'SECRET';
            } else if (bannerText.includes('CONFIDENTIAL')) {
                classification = 'CONFIDENTIAL';
            }
        }

        // Get operation info
        const { operation, phase, user } = this.operationInfo;

        return {
            workspace,
            classification,
            operation,
            phase,
            user,
            timestamp: new Date().toISOString()
        };
    }

    setupResponsiveBehavior() {
        // Floating Action Button for tablet/mobile
        const sidebarFab = document.getElementById('sidebar-fab');
        if (sidebarFab) {
            sidebarFab.addEventListener('click', () => {
                this.toggleMobileSidebar();
            });
        }

        // Handle window resize for responsive behavior
        window.addEventListener('resize', () => {
            this.handleResize();
        });

        // Close sidebar when clicking outside on tablet/mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1365) {
                const sidebar = document.getElementById('right-sidebar');
                const fab = document.getElementById('sidebar-fab');

                if (sidebar && fab &&
                    !sidebar.contains(e.target) &&
                    !fab.contains(e.target) &&
                    sidebar.classList.contains('sidebar-open')) {
                    this.closeMobileSidebar();
                }
            }
        });

        // Initial responsive setup
        this.handleResize();
    }

    toggleMobileSidebar() {
        const sidebar = document.getElementById('right-sidebar');
        const body = document.body;

        if (sidebar) {
            const isOpen = sidebar.classList.contains('sidebar-open');

            if (isOpen) {
                this.closeMobileSidebar();
            } else {
                this.openMobileSidebar();
            }
        }
    }

    openMobileSidebar() {
        const sidebar = document.getElementById('right-sidebar');
        const body = document.body;

        if (sidebar) {
            sidebar.classList.add('sidebar-open');
            if (window.innerWidth <= 1365) {
                body.classList.add('sidebar-overlay');
            }
            this.eventBus.emit('sidebar:mobile-opened');
        }
    }

    closeMobileSidebar() {
        const sidebar = document.getElementById('right-sidebar');
        const body = document.body;

        if (sidebar) {
            sidebar.classList.remove('sidebar-open');
            body.classList.remove('sidebar-overlay');
            this.eventBus.emit('sidebar:mobile-closed');
        }
    }

    handleResize() {
        const sidebar = document.getElementById('right-sidebar');
        const body = document.body;
        const width = window.innerWidth;

        if (sidebar) {
            // Reset mobile classes on desktop
            if (width > 1365) {
                sidebar.classList.remove('sidebar-open');
                body.classList.remove('sidebar-overlay');
            }

            // Auto-collapse sections on laptop sizes
            if (width >= 1366 && width <= 1599) {
                this.autoCollapseForLaptop();
            } else {
                this.restoreDefaultSections();
            }
        }
    }

    autoCollapseForLaptop() {
        const operationSection = this.container.querySelector('[data-section="operation-info"]');
        const aiSection = this.container.querySelector('[data-section="ai-assistant"]');

        if (operationSection && this.sections.get('operation-info')?.expanded) {
            this.collapseSection(operationSection);
            this.sections.get('operation-info').expanded = false;
        }

        if (aiSection && this.sections.get('ai-assistant')?.expanded) {
            this.collapseSection(aiSection);
            this.sections.get('ai-assistant').expanded = false;
        }
    }

    restoreDefaultSections() {
        // Restore default section states for larger screens
        const criticalSections = ['system-status'];

        this.sections.forEach((sectionData, sectionId) => {
            const shouldBeExpanded = criticalSections.includes(sectionId);

            if (shouldBeExpanded && !sectionData.expanded) {
                this.expandSection(sectionData.element);
                sectionData.expanded = true;
            }
        });
    }

    initializeSections() {
        // Initialize section states (expanded by default for critical sections)
        const criticalSections = ['system-status'];
        const sections = this.container.querySelectorAll('.section-container');

        sections.forEach(section => {
            const sectionId = section.dataset.section;
            const isExpanded = criticalSections.includes(sectionId);

            this.sections.set(sectionId, {
                element: section,
                expanded: isExpanded,
                critical: criticalSections.includes(sectionId)
            });

            if (!isExpanded) {
                this.collapseSection(section);
            }
        });
    }



    updateUptimeDisplay(data) {
        const uptimeElement = document.getElementById('system-uptime');
        if (uptimeElement) {
            uptimeElement.textContent = data.uptime;
        }
    }

    updateMemoryDisplay(data) {
        const memoryElement = document.getElementById('memory-usage');
        if (memoryElement) {
            memoryElement.textContent = data.usedFormatted;
        }
    }

    toggleSidebar() {
        this.collapsed = !this.collapsed;
        const toggleIcon = document.querySelector('#sidebar-toggle i');

        if (this.collapsed) {
            this.container.style.width = '50px';
            this.container.querySelector('.flex-1').style.display = 'none';
            if (toggleIcon) {
                toggleIcon.classList.remove('fa-chevron-right');
                toggleIcon.classList.add('fa-chevron-left');
            }
        } else {
            this.container.style.width = '300px';
            this.container.querySelector('.flex-1').style.display = 'block';
            if (toggleIcon) {
                toggleIcon.classList.remove('fa-chevron-left');
                toggleIcon.classList.add('fa-chevron-right');
            }
        }

        this.eventBus.emit('sidebar:toggled', { collapsed: this.collapsed });
    }

    toggleSection(sectionElement) {
        const sectionId = sectionElement.dataset.section;
        const sectionData = this.sections.get(sectionId);

        if (sectionData) {
            if (sectionData.expanded) {
                this.collapseSection(sectionElement);
            } else {
                this.expandSection(sectionElement);
            }

            sectionData.expanded = !sectionData.expanded;
        }
    }

    collapseSection(sectionElement) {
        const content = sectionElement.querySelector('.section-content');
        const toggle = sectionElement.querySelector('.section-toggle');

        if (content) {
            content.style.display = 'none';
        }

        if (toggle) {
            toggle.classList.add('rotate-180');
        }
    }

    expandSection(sectionElement) {
        const content = sectionElement.querySelector('.section-content');
        const toggle = sectionElement.querySelector('.section-toggle');

        if (content) {
            content.style.display = 'block';
        }

        if (toggle) {
            toggle.classList.remove('rotate-180');
        }
    }

    updateConnectionsDisplay(count) {
        const connectionsElement = document.getElementById('active-connections');
        if (connectionsElement) {
            connectionsElement.textContent = count.toString();
        }
    }

    updateSecurityStatus(data) {
        const statusElement = document.getElementById('security-status');
        const textElement = statusElement?.nextElementSibling;

        if (statusElement && textElement) {
            statusElement.className = `w-2 h-2 rounded-full ${this.systemMonitor.getStatusColor(data.status)}`;
            textElement.textContent = data.status || 'Unknown';
        }
    }

    updateNetworkStatus(data) {
        const statusElement = document.getElementById('network-status');
        const textElement = statusElement?.nextElementSibling;

        if (statusElement && textElement) {
            statusElement.className = `w-2 h-2 rounded-full ${this.systemMonitor.getStatusColor(data.status)}`;
            textElement.textContent = data.status || 'Unknown';
        }
    }

    updatePluginStatus(data) {
        const statusElement = document.getElementById('plugin-status');
        const textElement = statusElement?.nextElementSibling;

        if (statusElement && textElement) {
            statusElement.className = `w-2 h-2 rounded-full ${this.systemMonitor.getStatusColor(data.status)}`;
            textElement.textContent = `${data.count || 0} Loaded`;
        }
    }

    updateOperationInfo(data) {
        if (data.operation) {
            const operationElement = document.getElementById('current-operation');
            if (operationElement) {
                operationElement.textContent = data.operation.toUpperCase();
            }
        }

        if (data.phase) {
            const phaseElement = document.getElementById('current-phase');
            if (phaseElement) {
                phaseElement.textContent = data.phase.toUpperCase();
            }
        }
    }

    updateUserInfo(data) {
        if (data.username) {
            const userElement = document.getElementById('user-info');
            if (userElement) {
                userElement.textContent = data.username.toUpperCase();
            }
        }
    }

    destroy() {
        // Clean up system monitor
        if (this.systemMonitor) {
            this.systemMonitor.destroy();
        }
    }
}