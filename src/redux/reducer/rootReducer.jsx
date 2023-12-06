import { userReducer } from "./reducer";
import { expenseReducer } from "./expenseReducer";
import { combineReducers } from "redux";
import {profileReducer} from "./profileReducer"
export const rootReducer = combineReducers({
  user : userReducer,
  expenseReducer,
  profileReducer
})