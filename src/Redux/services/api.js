import axios from "axios";
import jwt_decode from "jwt-decode";

const Api = axios.create({ baseURL: "http://localhost:4000/app/" });



//*****************************API COMMANDS********************************************************* */
//add command
function postnewCommands(manager, nomProduit, categorie, quantité, dateCommand) {
    return Api.post("command/addCommands", { manager, nomProduit, categorie, quantité, dateCommand });
}

//get command
function getAllCommands() {
    return Api.get("command/getCommands");
}


// delete command
function deleteCommands(id) {
    return Api.delete(`command/${id}`);
}

//edit command
function updateCommands(id) {
    return Api.put(`command/${id}`);
}

//*****************************API PRODUCTS********************************************************* */
//add command
function postnewProducts(manager, categorie, nomProduct, quantité, prix, dateExpirProduct) {
    return Api.post("product/addProducts", { manager, categorie, nomProduct, quantité, prix, dateExpirProduct });
}

//get command
function getAllProducts() {
    return Api.get("product/getProducts");
}


// delete command
function deleteProducts(id) {
    return Api.delete(`product/${id}`);
}

//edit command
function updateProducts(id) {
    return Api.put(`product/${id}`);
}


//


//********************************LOGIN AND REGISTER OF MANAGERS************************************************************* */


// Register Managers by the Admin

function RegisterManager(nomCompletManager, AdrDepot, tel, email, password) {
    return Api.post("manager/registerManagers", { nomCompletManager, AdrDepot, tel, email, password });
}

//login Managers

function loginManager(email, password) {
    return Api.post("manager/loginManagers", { email, password });
}

//current manager
function getCurrentManager() {
    return Api.get("manager/currentManager");
}
// *********************************************Order by id of manager*************************************
function getOrderManager() {
    return Api.get(`manager/currentManagerOrder/${jwt_decode(localStorage.getItem('token'))._id}`)
}
////***************************************** */ product manager by id manager***********************************************
function getProductManager() {

    return Api.get(`manager/currentManagerProduct/${jwt_decode(localStorage.getItem('token'))._id}`)
}


//*********************************API MANAGERS****************************************************************** */
function getAllManagers() {
    return Api.get("manager/getManagers");
}

function deleteManagers(id) {
    return Api.delete(`manager/${id}`)
}

function updateManagers(id) {
    return Api.put(`manager/${id}`)
}


export { postnewCommands, getAllCommands, updateCommands, deleteCommands, loginManager, getCurrentManager, getAllManagers, RegisterManager, deleteManagers, updateManagers, getOrderManager, postnewProducts, getAllProducts, deleteProducts, updateProducts, getProductManager }
export default { postnewCommands, getAllCommands, updateCommands, deleteCommands, loginManager, getCurrentManager, getAllManagers, RegisterManager, deleteManagers, getOrderManager, updateManagers, postnewProducts, getAllProducts, deleteProducts, updateProducts, getProductManager }