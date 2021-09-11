import { GET_COMMAND, ADD_COMMAND, PUT_COMMAND, DELETE_COMMAND, GET_ORDER } from "../actions/types"

const initialState = {
    datas: [],
    loading: true
}

export const commandReducer = (state = initialState, action) => {



    const { type, payload } = action
    switch (type) {
        //get command
        case GET_COMMAND:
            state = {
                ...state,
                datas: payload,
                loading: false
            }
            break;
            console.log(state)
        case GET_ORDER:
            state = {
                ...state,
                datas: payload,
                loading: false
            }
            break;


            //add command
        case ADD_COMMAND:
            state = {
                ...state,
                datas: [...state.datas, payload],
                loading: false

            }
            console.log("loading of command state", state)
            break;

            //delete command

        case DELETE_COMMAND:
            state = {
                ...state,
                datas: [...state.datas.filter(
                    data => data._id !== payload

                )],

            }
            console.log("hhhhhhh", state)
            break;

            //update command
        case PUT_COMMAND:
            return state.map((command) => {
                if (command.id === payload.id) {
                    return {
                        ...command,
                        ...payload,
                    };
                } else {
                    return command;
                }
            });




    }
    return state
}