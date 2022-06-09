import { createStore, combineReducers } from "redux";

import notice from "./modules/notice";

const rootReducer = combineReducers({ notice });

const store = createStore(rootReducer);
//rootReducer를 store에 넣어줌

export default store;
