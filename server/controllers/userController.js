// TODO: manually choose orm here
import { getAll, get, add, remove, update } from "../orms/sequelize/models/userModel.js";

async function getAllUsers(request, response){
    try {
        const users = await getAll();
        response.status(200).json({ users: users });
    } catch (error){
        console.log('Unable to get all Users\n', error);
        response.status(500).json({ error: 'Unable to get all Users' })
    }
}

async function getUser(request, response){
    try {
        const id = request.params.id;
        const user = await get(id);
        if (user){
            response.status(200).json({ user: user });
        } else {
            response.status(404).json({ error: `User where id=${id} not Found` });
        }
    } catch (error){
        console.log('Unable to get User\n', error)
        response.status(500).json({ error: 'Unable to get User' })
    }
}

async function addUser(request, response){
    try {
        const user_json = requestToUserJson(request);
        const user = await add(user_json);
        response.status(201).json({ success: `User where firstName=${user_json.firstName} added successfully` });
    } catch (error){
        console.log('Unable to add User\n', error);
        response.status(500).json({ error: 'Unable to add User' })
    }
}

async function updateUser(request, response){
    try {
        const id = request.params.id;
        const user_json = requestToUserJson(request);
        const user = await get(id);
        if (user){
            await update(user_json, id);
            response.status(200).json({ success: `User where id=${id} updated successfully` });
        } else {
            response.status(404).json({ error: `User where id=${id} not Found` });
        }
    } catch (error){
        console.log('Unable to update User', error)
        response.status(500).json({ error: 'Unable to update User' })
    }
}

async function deleteUser(request, response){
    try {
        const id = request.params.id;
        const user = await get(id);
        if (user){
            await remove(id)
            response.status(200).json({ success: `User where id=${id} deleted successfully` });
        } else {
            response.status(404).json({ error: `User where id=${id} not Found` });
        }
    } catch (error){
    console.log('Unable to delete User', error)
    response.status(500).json({ error: 'Unable to delete User' })
    }
}


function requestToUserJson(request){
    return {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        dateOfBirth: request.body.dateOfBirth
    }
}


export { getAllUsers, getUser, addUser, updateUser, deleteUser }