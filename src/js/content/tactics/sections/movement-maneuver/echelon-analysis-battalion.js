/**
 * Battalion Echelon Analysis Module
 * Provides comprehensive analysis for battalion-level movement and maneuver operations
 */

import { getBattalionMovementManeuverAnalysis } from './analysis-battalion.js';

export const battalionTacticsModule = {
  getContent() {
    return getBattalionMovementManeuverAnalysis();
  }
};

export default battalionTacticsModule;
