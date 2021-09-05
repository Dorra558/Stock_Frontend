import { postnewCommands, getAllCommands, updateCommands, deleteCommands } from "../services/api";
import { GET_COMMAND, ADD_COMMAND, PUT_COMMAND, DELETE_COMMAND } from "./types"


//get all commands 
export const getCommand = () => async(dispatch) => {

        try {
            const res = await getAllCommands();
            dispatch({
                type: GET_COMMAND,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }

    }
    // add new command

export const newCommand = (manager, nomProduit, categorie, quantité) => async(dispatch) => {
    try {
        const res = await postnewCommands(manager, nomProduit, categorie, quantité);
        dispatch({
            type: ADD_COMMAND,
            payload: res.data
        })
        console.log("Add commanddddd")
    } catch (error) {
        console.log(error);
    }
}

//delete Command

export const deleteCommand = (id) => async(dispatch) => {
    console.log("salut tous le monde", id)
    try {
        const res = await deleteCommands(id);

        dispatch({
            type: DELETE_COMMAND,
            payload: id
        })
        console.log("payload")
        dispatch(getCommand);
    } catch (error) {
        console.log(error);
    }
}

// update Command

export const updateCommand = (id, nomProduit, categorie, quantité, manager, dateCommand) => async(dispatch) => {
    try {
        const res = await updateCommands(id, { nomProduit, categorie, quantité, manager, dateCommand });

        dispatch({
            type: PUT_COMMAND,
            payload: res.data
        });
    } catch (error) {
        console.log(error);

    }
};