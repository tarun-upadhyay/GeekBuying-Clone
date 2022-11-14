import * as types from "./actionType";

import data from "../db.json";
export const addData = (dispatch) => {
  return dispatch({ type: types.ADD_PRODUCTS_LS, payload: data.products });
};
export const addNewData = (params) => (dispatch) => {
  return dispatch({ type: types.ADD_NEW_PRODUCT, payload: params });
};
export const deleteData = (parms) => (dispatch) => {
  return dispatch({ type: types.DEL_PRODUCTS_LS, payload: parms });
};
export const editData = (params) => (dispatch) =>{
  return dispatch({type: types.EDIT_PRODUCTS_LS, payload: params})
}
export const detailPage = (params)=>(dispatch)=>{
  return dispatch({type: types.DETAIL_PAGE, payload: params})
}
export const addToCart = (params)=>(dispatch)=>{
  return dispatch({type: types.ADD_TO_CART, payload: params})
}
export const deleteFromCart = (params)=>(dispatch)=>{
  return dispatch({type: types.DEL_TO_CART, payload: params});
}
export const shoppingDone = (dispatch)=>{
  return dispatch({type: types.SHOPPING_DONE})
}
export const handleOrderDone = (dispatch)=>{
return dispatch({type: types.HANDLE_ORDER})
}
export const AcceptingOrder = (params)=> (dispatch)=>{
return dispatch({type: types.ACCEPT_ORDER, payload: params})
}