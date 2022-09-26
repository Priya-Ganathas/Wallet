import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  userData: [],
};

const getUserData = (state, action) => {
  return updateObject(state, {
    userData: action.user,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_DATA:
      return getUserData(state, action);
    default:
      return state;
  }
};

export default reducer;
