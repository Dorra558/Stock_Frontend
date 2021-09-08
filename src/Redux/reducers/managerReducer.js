import { DELETE_MANAGER, GET_MANAGER, UPDATE_MANAGER, POPUP_DELETE, CLOSE_DELETE_CONFIRM } from "../actions/types"

const initialState = {
    gestion: [],
    loading: true,
    // confirmMessageDisplay: false,
    // itemToDelete: null
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
            //delete manager

        case DELETE_MANAGER:
            state = {
                ...state,
                gestion: [...state.gestion.filter(
                    data => data._id !== payload

                )],

            }
            console.log("hhhhhhh", state)

            // PopUp to delete a manager

            // case POPUP_DELETE:
            //     return {
            //         confirmMessageDisplay: true,
            //         itemToDelete: payload
            //     }
            // case CLOSE_DELETE_CONFIRM:
            //     return {
            //         confirmMessageDisplay: false,
            //         itemToDelete: null
            //     }


            //update manager
        case UPDATE_MANAGER:
            return {
                ...state,
                gestion: state.gestion.map(data => (data._id === payload._id ? payload : data))
            };

            // case UPDATE_MANAGER:
            //     state = {
            //         ...state,
            //         gestion: [state.gestion.map(data =>
            //             data._id === payload._id ? payload : data
            //         )]
            //     };
    }
    return state
}