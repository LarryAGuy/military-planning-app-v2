/**
 * Division Echelon Analysis Module
 * Provides comprehensive analysis for division-level movement and maneuver operations
 */

import { getDivisionMovementManeuverAnalysis } from './analysis-division.js';

export const divisionTacticsModule = {
  getContent() {
    return getDivisionMovementManeuverAnalysis();
  }
};

export default divisionTacticsModule;
