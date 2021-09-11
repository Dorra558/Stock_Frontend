  import { combineReducers } from "redux";
  import { commandReducer } from "./commandReducer"
  import { authReducer } from './authReducer'
  import { managerReducer } from './managerReducer'
  import { productReducer } from './productReducer'

  export const rootReducer = combineReducers({
      commandReducer,
      authReducer,
      managerReducer,
      productReducer
  })