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
                <div class="flex items-center justify-center min-h-[400px]">
                    <div class="text-center">
                        <i class="fas fa-spinner fa-spin text-4xl text-blue-400 mb-4"></i>
                        <p class="text-gray-300 text-lg">Loading Draft OPORD Tool...</p>
                        <p class="text-gray-500 text-sm mt-2">Initializing interactive OPORD creation interface</p>
                    </div>
                </div>
            </div><!-- Close draft-opord-content-area -->
        </div><!-- Close military-content -->
    `
};

export default draftOpordContent;
