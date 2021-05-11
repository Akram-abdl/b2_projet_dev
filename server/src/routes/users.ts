import express from 'express';

import {signin, signup, getUsers, getUser, createUser, patchUser, deleteUser} from '../controllers/users.js';

const router = express.Router();

// All routes in here are starting with /users

router.post('/signin', signin);
router.post('/signup', signup);

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch('/:id', patchUser);
router.delete('/:id', deleteUser);

export default router;