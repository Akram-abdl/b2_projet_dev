import express from 'express';

import {getUsers, getUser, createUser, patchUser, deleteUser} from '../controllers/users.js';

const router = express.Router();

// All routes in here are starting with /users
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

export default router;