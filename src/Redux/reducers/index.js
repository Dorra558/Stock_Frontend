  import { combineReducers } from "redux";
  import { commandReducer } from "./commandReducer"
  import { authReducer } from './authReducer'
  import { managerReducer } from './managerReducer'

  export const rootReducer = combineReducers({
      commandReducer,
      authReducer,
      managerReducer
  })