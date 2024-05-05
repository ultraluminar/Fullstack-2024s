import express from 'express';

import { getAllUsers, getUser, addUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);

router.post('/', addUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);


export { router }