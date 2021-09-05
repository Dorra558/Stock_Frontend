  import { combineReducers } from "redux";
  import { commandReducer } from "./commandReducer"
  import { authReducer } from './authReducer'

  export const rootReducer = combineReducers({
      commandReducer,
      authReducer
  })