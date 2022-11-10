import * as types from "./actionType";






export const getData = (dispatch) => {
  try {
    return dispatch({ type: types.GET_PRODCTS_LS });
  } catch {
    return null;
  }
};
