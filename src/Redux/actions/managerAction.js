import axios from 'axios';
import { getAllManagers, deleteManagers, updateManagers } from '../services/api'
import { GET_MANAGER, DELETE_MANAGER, UPDATE_MANAGER, POPUP_DELETE, CLOSE_DELETE_CONFIRM } from './types'


//



//get all commands 
export const getGestionnaire = () => async(dispatch) => {

    try {
        const res = await getAllManagers();
        dispatch({
            type: GET_MANAGER,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }

}

// delete manager


export const deleteManager = (id) => async(dispatch) => {
    console.log("salut tous le monde", id)
    try {
        const res = await deleteManagers(id);

        dispatch({
            type: DELETE_MANAGER,
            payload: id
        })
        console.log("payload")
        dispatch(getAllManagers);
    } catch (error) {
        console.log(error);
    }
}

// PopUp to delete manage
// export const deleteConfirmMsg = (id) => ({
//     type: POPUP_DELETE,
//     payload: id
// })

export const closeConfirmMsg = (id) => ({
    type: CLOSE_DELETE_CONFIRM,
})

// Update manager

export const updateManager = (
    id,
    nomCompletManager,
    email,
    AdrDepot,
    tel,

) => async dispatch => {
    try {
        const res = await axios.put(`http://localhost:4000/app/manager/${id}`, { nomCompletManager, email, AdrDepot, tel });
        dispatch({
            type: UPDATE_MANAGER,
            payload: res.data
        });
        console.log("manager updated")
    } catch (error) {
        console.log(error);
    }
};