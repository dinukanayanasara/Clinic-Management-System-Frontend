import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../Reducer/RootReducer";
import { LogBox } from 'react-native';



export default function configureStore() {
  LogBox.ignoreAllLogs(true)

  return createStore(RootReducer, applyMiddleware(thunk));



}
