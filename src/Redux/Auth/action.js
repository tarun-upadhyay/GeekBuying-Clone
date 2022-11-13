import * as types from "./actionType";

export const loginRequest = (params) => (dispatch) => {
  return dispatch({ type: types.LOGIN_REQUEST, payload: params });
};
export const signUpRequest = (params) => (dispatch) => {
  return dispatch({ type: types.SIGNUP_REQUEST, payload: params });
};
