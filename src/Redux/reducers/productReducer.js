import { ADD_PRODUCT, GET_PRODUCT, PUT_PRODUCT, DELETE_PRODUCT, GET_PROD } from "../actions/types";

const initialState = {
    produitss: [],
    loading: true
}

export const productReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_PRODUCT:
            state = {
                ...state,
                produitss: payload,
                loading: false
            }
            break;
            console.log(state)

        case GET_PROD:
            state = {
                ...state,
                produitss: payload,
                loading: false
            }
            break;
        case ADD_PRODUCT:
            state = {
                ...state,
                produitss: [...state.produitss, payload],
                loading: false

            }
            console.log("loading of command state", state)
            break;

    }
    return state
}