import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
);

store.dispatch({ type: "AUTH_CHECK" });

store.subscribe(() => {
  const storeData = store.getState();
  window.sessionStorage.setItem("level-store", JSON.stringify(storeData));
});

export default store;