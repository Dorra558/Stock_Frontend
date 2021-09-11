import { ADD_PRODUCT, GET_PRODUCT, PUT_PRODUCT, DELETE_PRODUCT, GET_PROD } from "./types";
import {postnewProducts, getAllProducts, deleteProducts, updateProducts, getProductManager} from '../services/api'
import axios from 'axios'

//****************get all products*************
export const getProduct = () => async(dispatch) => {

    try {
        const res = await getAllProducts();
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }

}


// get produit by id of manager 
export const getProductId = () => async(dispatch) => {

    try {
        const res = await getProductManager();
        dispatch({
            type: GET_PROD,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
    }

}

//Add new products

export const newProduct = (manager, categorie, nomProduct,  quantité, prix, dateExpirProduct) => async(dispatch) => {
    try {
        // postnewProducts(manager, categorie, nomProduct,  quantité, prix, dateExpirProduct);
        const res = await axios.post("http://localhost:4000/app/product/addProducts",{manager, categorie, nomProduct, quantité, prix, dateExpirProduct});
        dispatch({
            type: ADD_PRODUCT,
            payload: res.data
        })
        console.log("Add commanddddd")
    } catch (error) {
        console.log(error);
    }
}

