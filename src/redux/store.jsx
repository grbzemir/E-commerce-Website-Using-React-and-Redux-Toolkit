import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { drawerReducer } from "./reducers/drawer";
import { productsReducer } from "./reducers/products";

// Başlangıç durumunu ifade eden
let initialState = {};

// Sayfanın tüm durumumu burada topluyorum
const reducers = combineReducers({
    // reducer1,
    // reducer2,
    // reducer3,
    drawer: drawerReducer,
    products: productsReducer,
});

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
