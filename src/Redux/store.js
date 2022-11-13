import { reducer as AppReducer } from "./reducer";
import { reducer as AuthReducer } from "./Auth/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({AppReducer, AuthReducer});




export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));