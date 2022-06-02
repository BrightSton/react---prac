import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import cardBox from "./modules/cardBox";
import thunk from "redux-thunk";

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({ cardBox });

const store = createStore(rootReducer, enhancer);

export default store;
