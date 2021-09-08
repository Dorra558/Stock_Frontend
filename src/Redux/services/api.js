import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:4000/app/" });

//*****************************API COMMANDS********************************************************* */
//add command
function postnewCommands(nomProduit, categorie, quantité, manager, dateCommand) {
    return Api.post("command/addCommands", { nomProduit, categorie, quantité, manager, dateCommand });
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


export { postnewCommands, getAllCommands, updateCommands, deleteCommands, loginManager, getCurrentManager, getAllManagers, RegisterManager, deleteManagers, updateManagers }
export default { postnewCommands, getAllCommands, updateCommands, deleteCommands, loginManager, getCurrentManager, getAllManagers, RegisterManager, deleteManagers, updateManagers }