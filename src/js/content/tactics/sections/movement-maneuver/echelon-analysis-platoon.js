/**
 * Platoon Echelon Analysis Module
 * Provides comprehensive analysis for platoon-level movement and maneuver operations
 */

import { getPlatoonMovementManeuverAnalysis } from './analysis-platoon.js';

export const platoonTacticsModule = {
  getContent() {
    return getPlatoonMovementManeuverAnalysis();
  }
};

export default platoonTacticsModule;
