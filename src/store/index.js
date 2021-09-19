import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import createRootReducer from "../reducers";

export const store = createStore(createRootReducer(), applyMiddleware(thunk));

