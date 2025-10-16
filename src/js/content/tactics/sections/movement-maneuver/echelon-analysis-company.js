/**
 * Company Echelon Analysis Module
 * Provides comprehensive analysis for company-level movement and maneuver operations
 */

import { getCompanyMovementManeuverAnalysis } from './analysis-company.js';

export const companyTacticsModule = {
  getContent() {
    return getCompanyMovementManeuverAnalysis();
  }
};

export default companyTacticsModule;
