import { combineReducers } from 'redux';

// reducers
import { searchRobots, requestRobots } from './robots/robotsReducer';

export default combineReducers({
  searchRobots,
  requestRobots
});
