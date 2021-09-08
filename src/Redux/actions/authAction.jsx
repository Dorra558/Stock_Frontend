
import {LOGIN_SUCCESS, FAILED_LOGIN, CURRENT_MANAGER,  AUTHENTIFICATION_ERROR, REGISTER_SUCCESS, FAILED_REGISTER, LOGOUT} from './types'
import axios from 'axios'
import {loginManager, getCurrentManager, RegisterManager} from '../services/api'
import  setAuthToken from '../services/AuthToken'

export const register = (
  nomCompletManager,
  email,
  password,
  AdrDepot,
  tel,
  role
) => async dispatch => {
  try {
    const res = await axios.post("http://localhost:4000/app/manager/registerManagers", {nomCompletManager, AdrDepot, tel, email, password, role:"manager" })
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadManager());
    console.log("register")
  } catch (err) {
    const error = err.response.data.msg;
     dispatch({
      type: FAILED_REGISTER
    });
  }
};




export const loginManagers = (email, password) => async dispatch => {
    try {
      const res = await loginManager(email,password)   
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      dispatch(loadManager());
    } catch (err) {
      const error = err.response.data.msg;
       
      dispatch({
        type: FAILED_LOGIN
      });
    }
    console.log("loginn")
  };

  export const loadManager = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }
  
    try {
      const res = await axios.get("http://localhost:4000/app/manager/currentManager")
      dispatch({
        type: CURRENT_MANAGER,
        payload: res.data
      });
      console.log("get the current manager",res.data)
    } catch (err) {
      dispatch({
        type: AUTHENTIFICATION_ERROR
      });
    }
  }; 
  
  // export const logoutUser = () => dispatch => {
  //   dispatch({ type: LOGOUT });
  //   console.log('logout')
  // };