import express from 'express';

import {getPasswords, getPassword, createPassword, patchPassword, deletePassword} from '../controllers/passwords.js';

const router = express.Router();

// All routes in here are starting with /passwords
router.get('/', getPasswords);
router.get('/:id', getPassword);
router.post('/', createPassword);
router.patch('/:id', patchPassword);
router.delete('/:id', deletePassword);

export default router;