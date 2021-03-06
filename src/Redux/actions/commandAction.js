import { postnewCommands, getAllCommands, updateCommands, deleteCommands, getOrderManager } from "../services/api";
import { GET_COMMAND, ADD_COMMAND, PUT_COMMAND, DELETE_COMMAND, GET_ORDER } from "./types"
import axios from 'axios'
import jwt_decode from "jwt-decode";



// get command by id
export const getCommandId = (manager_id, categorie) => async dispatch => {
    try {
        const res = manager_id ?
            await axios.get(`http://localhost:4000/app/command/getCommands?manager_id=${manager_id}`) :
            categorie ?
            await axios.get(`http://localhost:4000/app/command/getCommands?categorie=${categorie}`) :
            getAllCommands()

        dispatch({
            type: GET_COMMAND,
            payload: res.data
        });
        console.log("res.data", res.data)
    } catch (error) {
        console.log(error);
    }
};



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

// get command by id of manager
export const getOrderId = () => async(dispatch) => {

        try {
            const res = await getOrderManager();
            dispatch({
                type: GET_ORDER,
                payload: res.data
            })
        } catch (error) {
            console.log(error);
        }

    }
    // add new command

export const newCommand = (manager, nomProduit, categorie, quantité, statut) => async(dispatch) => {
    try {
        // axios.post ("http://localhost:4000/app/command/addCommands",{manager, nomProduit, categorie, quantité, statut});
        const res = await axios.post("http://localhost:4000/app/command/addCommands", { manager, nomProduit, categorie, quantité, statut });
        dispatch({
            type: ADD_COMMAND,
            payload: res.data
        })
        console.log("Add commandddd")
    } catch (error) {
        console.log(error);
    }
}

//delete Command

export const deleteCommand = (id) => async(dispatch) => {

    const x = localStorage.getItem("token")
    var ID = jwt_decode(x)._id
    console.log("salut tous le monde", ID)

    try {
        const res = await axios.delete(`http://localhost:4000/app/command/${ID}`)

        dispatch({
            type: DELETE_COMMAND,
            payload: ID
        })
        console.log("payload")
        dispatch(getOrderId);
    } catch (error) {
        console.log(error);
    }
}

// update Command

export const updateCommand = (
    id,
    manager,
    nomProduit,
    categorie,
    quantité,
    statut
) => async(dispatch) => {
    try {
        const res = await await axios.put(`http://localhost:4000/app/command/${id}`, { manager, nomProduit, categorie, quantité, statut });

        dispatch({
            type: PUT_COMMAND,
            payload: res.data
        });
        console.log("ressssss", res.data)

    } catch (error) {
        console.log("error to update", error);

    }
};

//update statut of command


// export const updateStatCmd = (id, nomProduit, categorie, quantité, dateCommand) => async(dispatch) => {
//     try {
//         const res = await updateCommands(id, { nomProduit, categorie, quantité, dateCommand });

//         dispatch({
//             type: PUT_COMMAND,
//             payload: res.data
//         });


//     } catch (error) {
//         console.log("error to update", error);

//     }
// };