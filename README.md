# Military Planning App V2

A modern ES6-only military planning application with plugin architecture and DoD system integration capabilities.

## Features

- **Pure ES6 Architecture**: Modern modular JavaScript with no legacy code
- **Plugin System**: Extensible architecture for OPORD, MDMP, and custom plugins
- **DoD Integration**: Webhook system for Palantir, DCGS-A, and Joint systems
- **Multi-Level Security**: Dynamic security classification and authentication
- **Military UI/UX**: Dark theme with military color coding and typography
- **Local Execution**: Runs locally without web servers for military operational requirements
- **Reusable Components**: Modern UI components (DropdownMenu, Modal, DTGPicker, ClassificationBadge)
- **Accessibility First**: Full keyboard navigation, ARIA attributes, screen reader support
- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes

## Architecture

- **AppCore**: Main application controller with component management
- **PluginManager**: Dynamic plugin loading and registration system
- **WebhookManager**: DoD system integration endpoints
- **SecurityManager**: Classification handling and authentication
- **Event-Driven**: Decoupled components with EventBus communication

## Directory Structure

```
Military Planning App V2/
├── index.html                 # Main application entry point
├── src/
│   └── js/
│       ├── app.js             # Application initialization
│       ├── modules/           # Core system modules
│       ├── components/        # UI components
│       ├── utils/             # Utility classes
│       └── plugins/           # Plugin implementations
├── config/                    # Configuration files
├── fonts/                     # Military fonts and styling
├── assets/                    # Static resources
└── tests/                     # Test files
```

## Development

This application requires a modern web server for ES6 module support during development.

## Recent Updates

### OPORD Draft Tool Header Refactoring (v2.0)
The OPORD Draft Tool header has been completely refactored for improved usability and space efficiency:

- **41% Space Reduction**: Header height reduced from 157px to 92px
- **Modern UI Components**: New reusable components for dropdown menus, modals, and pickers
- **Enhanced UX**: Cleaner layout with better visual hierarchy
- **Improved Accessibility**: Full keyboard navigation and screen reader support
- **Responsive Design**: Works seamlessly on all device sizes

**New Components**:
- `DropdownMenu`: Reusable dropdown with keyboard navigation
- `Modal`: Accessible modal dialog with focus management
- `ClassificationBadge`: Compact classification display with modal editing
- `DTGPicker`: Interactive Date-Time Group picker with calendar
- `DTGFormatter`: Military DTG formatting and validation utility

See `HEADER_REFACTORING_MIGRATION.md` for migration guide and usage examples.

## Components

### Core Components
- **DropdownMenu** (`src/js/components/DropdownMenu.js`): Accessible dropdown menu with keyboard navigation
- **Modal** (`src/js/components/Modal.js`): Modal dialog with overlay and focus trapping
- **ClassificationBadge** (`src/js/components/ClassificationBadge.js`): Compact classification level display
- **DTGPicker** (`src/js/components/DTGPicker.js`): Interactive military Date-Time Group picker

### Utilities
- **DTGFormatter** (`src/js/utils/dtg-formatter.js`): Military DTG format handling (DDHHMMZ MMM YYYY)

All components are fully reusable, accessible (WCAG 2.1 AA), and responsive. See individual component files for detailed documentation.

## Security

The application implements multi-level security with automatic classification detection based on network domain (.mil/.gov) and supports DoD security requirements.