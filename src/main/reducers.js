import { combineReducers } from "redux";
import layoutReducer from "../components/layout/layoutReducer";

const rootReducer = combineReducers({
  layout: layoutReducer,
});

export default rootReducer;
