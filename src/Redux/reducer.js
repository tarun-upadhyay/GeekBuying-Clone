import { getLocalData, saveData } from "../Utils/localStorageData";
import * as types from "./actionType";
const initialState = {
  products: getLocalData("products_data") || [],
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_PRODUCTS_LS:
      saveData("products_data", payload);
      return {
        ...oldState,
        products: payload,
      };
      case types.GET_PRODCTS_LS:
        return{
            ...oldState,
            products: payload,
        }
    default:
      return oldState;
  }
};
