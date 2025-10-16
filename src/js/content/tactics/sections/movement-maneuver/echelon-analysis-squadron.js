/**
 * Squadron Echelon Analysis Module
 * Provides comprehensive analysis for squadron-level movement and maneuver operations
 */

import { getSquadronMovementManeuverAnalysis } from './analysis-squadron.js';

export const squadronTacticsModule = {
  getContent() {
    return getSquadronMovementManeuverAnalysis();
  }
};

export default squadronTacticsModule;
