
import {LOGIN_SUCCESS, FAILED_LOGIN, CURRENT_MANAGER,  AUTHENTIFICATION_ERROR} from './types'
import axios from 'axios'
import {loginManager, getCurrentManager} from '../services/api'
import  setAuthToken from '../services/AuthToken'


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
  
