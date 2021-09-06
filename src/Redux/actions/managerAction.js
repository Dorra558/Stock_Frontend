import { getAllManagers } from '../services/api'
import { GET_MANAGER } from './types'



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