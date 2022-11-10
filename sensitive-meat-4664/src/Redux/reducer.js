import { getLocalData } from "../Utils/localStorageData";
import * as types from "."
const initialState = {
    adminProd : getLocalData("adminproduct") || [],

}
export const reducer = (initialState, action)=>{
    const { type, payload } = action;
    switch(type){
        case types.GET_PRODCTS_LS:
            return{
                ...initialState,

            }
    }
}