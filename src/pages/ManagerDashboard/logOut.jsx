import React from 'react'
import {logoutUser} from '../../Redux/actions/authAction'
import { useDispatch, useSelector} from 'react-redux'
import LoginForm from '../../components/AuthForm/LoginForm'
import {Link} from 'react-router-dom'

function LogOut() {

    const dispatch = useDispatch()
    const user = useSelector((state) => state.authReducer.user) 
    console.log("home user",user)


    const logout =()=>{ 
        dispatch (logoutUser())
    }

    return (
        <div>
            <Link to="/login">    
            <button  onClick={logout()}>
                    LogOut
                </button>
            </Link>
           
        </div>
    )
}

export default LogOut
