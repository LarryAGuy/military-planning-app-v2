/**
 * Group Echelon Analysis Module
 * Provides comprehensive analysis for group-level movement and maneuver operations
 */

import { getGroupMovementManeuverAnalysis } from './analysis-group.js';

export const groupTacticsModule = {
  getContent() {
    return getGroupMovementManeuverAnalysis();
  }
};

export default groupTacticsModule;
