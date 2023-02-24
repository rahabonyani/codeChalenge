import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";
import { persistStore } from "redux-persist";

const middleWares = [thunk];

const store = createStore(
    rootReducer(),
    process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(...middleWares))
        : compose(applyMiddleware(...middleWares))
);


export const persistor = persistStore(store as any);

export default store;
