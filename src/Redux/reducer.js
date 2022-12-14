import { getLocalData, saveData } from "../Utils/localStorageData";
import * as types from "./actionType";
const initialState = {
  products: getLocalData("products_data") || [],
  details: [],
  cart: getLocalData("cart") || [],
  order: getLocalData("order") || [],
  orderAuth: getLocalData("orderAuth") || false,
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ADD_PRODUCTS_LS:
      if (getLocalData("products_data")) {
        return {
          ...oldState,
        };
      } else {
        saveData("products_data", payload);
        return {
          ...oldState,
          products: payload,
        };
      }

    case types.ADD_NEW_PRODUCT:
      let newitem = [...oldState.products, payload];
      saveData("products_data", newitem);

      return {
        ...oldState,
        products: newitem,
      };
    case types.DEL_PRODUCTS_LS:
      let afterdel = [
        ...oldState.products.filter((el) => el.title !== payload.title),
      ];
      saveData("products_data", afterdel);
      return {
        ...oldState,
        products: afterdel,
      };
    case types.EDIT_PRODUCTS_LS:
      const before = [...oldState.products];
      let after = [payload];
      let res = before.map((obj) => after.find((o) => o.id === obj.id) || obj);
      saveData("products_data", res);
      return {
        ...oldState,
        products: res,
      };
    case types.DETAIL_PAGE:
      return {
        ...oldState,
        details: payload,
      };
    case types.ADD_TO_CART:
      let cartStore = [...oldState.cart];
      let check = cartStore.filter((el) => el.title === payload.title);
      console.log(check);
      if (check.length > 0) {
        alert("already present inside the cart")
        return oldState;
      } else {
        cartStore.push(payload);
        saveData("cart", cartStore);
        return {
          ...oldState,
          cart: cartStore,
        };
      }
      case types.DEL_TO_CART:
        let aferdel = [...oldState.cart.filter((el)=> el.title !== payload.title)];
        saveData("cart", aferdel)
        return{
          ...oldState,
          cart: aferdel,
        }
        case types.SHOPPING_DONE:
          saveData("cart", [])
          saveData("orderAuth", true)
          return{
            ...oldState,
            orderAuth: true,
            cart: []
          }
          case types.HANDLE_ORDER:
            saveData("order", oldState.cart)
            return{
              ...oldState,
              order: oldState.cart,
            }
            case types.ACCEPT_ORDER:
              saveData("order", payload)
              return{
                ...oldState,
                order: payload
              }

    default:
      return oldState;
  }
};
