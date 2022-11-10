import * as types from './actionType';

import data from "../db.json"
export const addData = (dispatch)=>{
    return dispatch({type: types.ADD_PRODUCTS_LS, payload: data})
};