import { combineReducers } from "redux";
import auth from "./auth";
import home from "./home";
import payment from "./payment";

export default combineReducers({
  auth,
  home,
  payment
});