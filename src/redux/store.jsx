import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

// Başlangıç durumunu ifade eden
let initialState = {};

// Sayfanın tüm durumumu burada topluyorum
const reducers = combineReducers({
    // reducer1,
    // reducer2,
    // reducer3,
});

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
