import { getTheaterMovementManeuverAnalysis } from './analysis-theater.js';

export const theaterTacticsModule = {
  getContent(){
    return getTheaterMovementManeuverAnalysis();
  }
};
export default theaterTacticsModule;
