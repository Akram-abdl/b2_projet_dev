import express from 'express';

import {getUsers, getUser, createUser, deleteUser, patchUser} from '../controllers/users.js';

const router = express.Router();

// All routes in here are starting with /users
router.get('/', getUsers);

router.get('/:id', getUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);

router.patch('/:id', patchUser);

export default router;