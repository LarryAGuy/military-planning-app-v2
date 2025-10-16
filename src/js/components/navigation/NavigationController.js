// src/js/components/navigation/NavigationController.js
// Controller extracted to support slimming NavigationComponent without behavior change

export class NavigationController {
  constructor(component) {
    this.component = component; // reference to NavigationComponent instance
  }

  // Optional helpers for future delegation; currently unused to avoid behavior changes
  // Example: render helpers could be moved here incrementally.
  // keep under 300 lines
}

