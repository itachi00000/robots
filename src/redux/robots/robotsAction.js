import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './robotsActionTypes';

// const localUrl = 'http://localhost:3000/robots'
const url = 'https://jsonplaceholder.typicode.com/users';

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  };
};

export const requestRobots = () => dispatch => {
  dispatch({
    type: REQUEST_ROBOTS_PENDING
  });
  fetch(url)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: REQUEST_ROBOTS_SUCCESS,
        payload: data
      })
    )
    .catch(error =>
      dispatch({
        type: REQUEST_ROBOTS_FAILED,
        payload: error
      })
    );
};
