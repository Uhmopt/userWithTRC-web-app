import { combineReducers, createStore, applyMiddleware  } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers";

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

store.subscribe(() => {
  const storeData = store.getState();
  window.sessionStorage.setItem("project-store", JSON.stringify(storeData));
});

// const token = localStorage.getItem("access_token");
// if (token) {
//   store.dispatch({ type: "AUTH_CHECK" });
// }

export default store;
