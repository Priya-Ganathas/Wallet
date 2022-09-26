import {GET_USER_DATA} from './actionTypes'

export const getUserData = data => {
    return dispatch => {
      dispatch({type: GET_USER_DATA, user: data});
    };
  };