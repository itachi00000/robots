import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

// middlewares
const logger = createLogger();
const middlewares = [logger, thunk];

// reducers
// const rootReducer = combineReducers({ robots.searchRobots, robots.requestRobots });

const store = createStore(rootReducer, applyMiddleware(...middlewares));
export default store;
