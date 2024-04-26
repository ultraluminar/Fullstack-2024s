import { User } from "../models/userModel.js";

async function getAllUsers(request, response){
    const users = await User.findAll();
    response.json(users);
}

async function getCustomerByID(request, response){
    const id = request.params.id;
    const user = await User.findByPk(id);
    response.json(user);
}

async function addCustomer(request, response){
    const user_json = request.body; //requestToUserJson(request);
    const user = User.create(user_json);
    response.json();
}

/*
function requestToUserJson(request){
    return user_json = {
        id: request.body.id,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        dateOfBirth: request.body.dateOfBirth
    }
}
*/

export { getAllUsers, getCustomerByID, addCustomer }