import { combineReducers } from "redux";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  // Add your reducers here
  user_info: UserReducer,
});

export default RootReducer;
