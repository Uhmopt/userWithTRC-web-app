import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

store.subscribe(() => {
  const storeData = store.getState();
  console.log( storeData, "STOER" );
  window.sessionStorage.setItem("mya-store", JSON.stringify(storeData));
});

// const token = localStorage.getItem("access_token");
// if (token) {
//   store.dispatch({ type: "AUTH_CHECK" });
// }

export default store;