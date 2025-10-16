import { getArmyMovementManeuverAnalysis } from './analysis-army.js';

export const armyTacticsModule = {
  getContent(){
    return getArmyMovementManeuverAnalysis();
  }
};
export default armyTacticsModule;
