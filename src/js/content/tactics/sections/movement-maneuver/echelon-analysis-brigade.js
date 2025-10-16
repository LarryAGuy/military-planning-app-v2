/**
 * Brigade Echelon Analysis Module
 * Provides comprehensive analysis for brigade-level movement and maneuver operations
 */

import { getBrigadeMovementManeuverAnalysis } from './analysis-brigade.js';

export const brigadeTacticsModule = {
  getContent() {
    return getBrigadeMovementManeuverAnalysis();
  }
};

export default brigadeTacticsModule;
