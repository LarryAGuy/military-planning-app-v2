export function getDashboardView() {
  return `
    <div class="p-6 h-full overflow-y-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <!-- System Overview Card -->
        <div class="bg-gray-700 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-white mb-4">
            <i class="fas fa-tachometer-alt mr-2 text-blue-400"></i>
            System Overview
          </h3>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-300">Status:</span>
              <span class="text-green-400">Operational</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">Mode:</span>
              <span class="text-yellow-400">Training</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-300">Classification:</span>
              <span class="text-green-400">UNCLASSIFIED</span>
            </div>
          </div>
        </div>

        <!-- Quick Actions Card -->
        <div class="bg-gray-700 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-white mb-4">
            <i class="fas fa-bolt mr-2 text-yellow-400"></i>
            Quick Actions
          </h3>
          <div class="space-y-2">
            <button class="w-full text-left px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
              <i class="fas fa-plus mr-2"></i>New OPORD
            </button>
            <button class="w-full text-left px-3 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors">
              <i class="fas fa-project-diagram mr-2"></i>Start MDMP
            </button>
            <button class="w-full text-left px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded transition-colors">
              <i class="fas fa-eye mr-2"></i>Intel Analysis
            </button>
          </div>
        </div>

        <!-- Recent Activity Card -->
        <div class="bg-gray-700 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-white mb-4">
            <i class="fas fa-history mr-2 text-gray-400"></i>
            Recent Activity
          </h3>
          <div class="space-y-2 text-sm">
            <div class="text-gray-300">System initialized</div>
            <div class="text-gray-300">Training mode activated</div>
            <div class="text-gray-300">Plugins loaded</div>
          </div>
        </div>
      </div>

      <!-- Welcome Message -->
      <div class="bg-blue-900 border border-blue-700 rounded-lg p-6">
        <h2 class="text-xl font-bold text-white mb-4">
          Welcome to Military Planning App V2
        </h2>
        <p class="text-blue-100 mb-4">
          This is a modern, modular military planning application designed for training and operational use.
          Select a module from the navigation menu to begin planning operations.
        </p>
        <div class="flex space-x-4">
          <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
            Get Started
          </button>
          <button class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded transition-colors">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  `;
}

export function getLoadingState() {
  return `
    <div class="h-full flex items-center justify-center">
      <div class="text-center">
        <i class="fas fa-spinner fa-spin text-4xl text-gray-400 mb-4"></i>
        <p class="text-gray-400">Loading content...</p>
      </div>
    </div>
  `;
}

export function getUnknownModuleView(viewName) {
  return `
    <div class="p-6 h-full">
      <div class="text-center">
        <i class="fas fa-question-circle text-6xl text-gray-400 mb-4"></i>
        <h2 class="text-2xl font-bold text-white mb-4">Unknown Module</h2>
        <p class="text-gray-400 mb-6">The requested module "${viewName}" is not available.</p>
        <button class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors" onclick="window.location.reload()">
          Return to Dashboard
        </button>
      </div>
    </div>
  `;
}

export function renderDoctrinalContent(content) {
  return `
    <div class="p-6 h-full overflow-y-auto">
      <div class="w-full">
        ${content.doctrine}
        ${content.examples && content.examples.length > 0 ? `
          <div class="mt-8 border-t border-gray-700 pt-6">
            <h3 class="text-lg font-semibold text-yellow-400 mb-4">
              <i class="fas fa-lightbulb mr-2"></i>
              Examples
            </h3>
            <div class="space-y-4">
              ${content.examples.map(example => `
                <div class="bg-gray-800 border border-gray-600 rounded-lg p-4">
                  <h4 class="font-semibold text-yellow-400 mb-2">${example.title}</h4>
                  <p class="text-gray-300 text-sm">${example.content}</p>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

export function getErrorView(errorMessage) {
  return `
    <div class="h-full flex items-center justify-center">
      <div class="text-center">
        <i class="fas fa-exclamation-triangle text-4xl text-red-400 mb-4"></i>
        <h3 class="text-xl font-bold text-white mb-2">Error Loading View</h3>
        <p class="text-gray-400 mb-4">${errorMessage}</p>
        <button id="retry-btn" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors">
          <i class="fas fa-redo mr-2"></i>Retry
        </button>
      </div>
    </div>
  `;
}

export function getContentErrorView(data) {
  return `
    <div class="p-6 h-full flex items-center justify-center">
      <div class="text-center max-w-md">
        <i class="fas fa-exclamation-triangle text-6xl text-red-400 mb-4"></i>
        <h2 class="text-xl font-bold text-white mb-4">Content Loading Error</h2>
        <p class="text-gray-400 mb-4">
          Failed to load content for ${data.category}/${data.module}
        </p>
        <div class="bg-red-900 border border-red-700 rounded-lg p-4 mb-4">
          <p class="text-red-100 text-sm">${data.error}</p>
        </div>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors" onclick="location.reload()">
          <i class="fas fa-refresh mr-2"></i>
          Reload Page
        </button>
      </div>
    </div>
  `;
}

