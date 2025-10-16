/**
 * Corps Echelon Analysis Module
 * Provides comprehensive analysis for corps-level movement and maneuver operations
 */

import { getCorpsMovementManeuverAnalysis } from './analysis-corps.js';

export const corpsTacticsModule = {
  getContent() {
    return getCorpsMovementManeuverAnalysis();
  }
};

export default corpsTacticsModule;
