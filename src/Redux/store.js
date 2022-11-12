import { reducer } from "./reducer";

import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";




export const store = legacy_createStore(reducer, applyMiddleware(thunk));