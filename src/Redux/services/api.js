import axios from "axios";

const Api = axios.create({ baseURL: "http://localhost:4000/app/" });

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

//login Managers

function loginManager(email, password) {
    return Api.post("manager/loginManagers", { email, password });
}

//current manager
function getCurrentManager() {
    return Api.get("manager/currentManager");
}





export { postnewCommands, getAllCommands, updateCommands, deleteCommands, loginManager, getCurrentManager }
export default { postnewCommands, getAllCommands, updateCommands, deleteCommands, loginManager, getCurrentManager }