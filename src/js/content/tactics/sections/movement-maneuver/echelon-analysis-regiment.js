/**
 * Regiment Echelon Analysis Module
 * Provides comprehensive analysis for regiment-level movement and maneuver operations
 */

import { getRegimentMovementManeuverAnalysis } from './analysis-regiment.js';

export const regimentTacticsModule = {
  getContent() {
    return getRegimentMovementManeuverAnalysis();
  }
};

export default regimentTacticsModule;
