import { LOGIN_SUCCESS, FAILED_LOGIN, CURRENT_MANAGER, REGISTER_SUCCESS, AUTHENTIFICATION_ERROR, FAILED_REGISTER, LOGOUT } from '../actions/types'


// login reducer
const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    user: null,
    loading: true
}

export const authReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        //sign in manager


        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
            console.log(state)

        case AUTHENTIFICATION_ERROR:
        case FAILED_REGISTER:
        case FAILED_LOGIN:
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            };

        case CURRENT_MANAGER:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        default:
            return state
    }

}