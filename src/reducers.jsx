import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
  searchField: ''
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { searchField: action.payload, ...state };
    default:
      return state;
  }
};
