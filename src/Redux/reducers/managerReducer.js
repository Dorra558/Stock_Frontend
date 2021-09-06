import { GET_MANAGER } from "../actions/types"

const initialState = {
    gestion: [],
    loading: true
}

export const managerReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        //get manager
        case GET_MANAGER:
            state = {
                ...state,
                gestion: payload,
                loading: false
            }
            console.log(state)
            break;
    }
    return state
}