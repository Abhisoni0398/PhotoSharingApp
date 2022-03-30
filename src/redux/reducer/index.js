import { combineReducers } from "redux";
import auth from "./auth/auth";

const allReducers = combineReducers({
  auth,
});

const rootReducer = (state, action) => {
  return allReducers(state, action);
};

export default rootReducer;
