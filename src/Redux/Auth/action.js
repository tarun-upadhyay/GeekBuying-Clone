import * as types from "./actionType";

export const loginRequest = (params) => (dispatch) => {
  return dispatch({ type: types.LOGIN_REQUEST, payload: params });
};
export const signUpRequest = (params) => (dispatch) => {
  return dispatch({ type: types.SIGNUP_REQUEST, payload: params });
};

export const adminLoginRequest = (params)=>(dispatch)=>{
  return dispatch({type: types.ADMIN_LOGIN, payload: params})
}
export const logOut = (dispatch)=>{
  return dispatch({type: types.LOGOUT})
}