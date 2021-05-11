import express from 'express';

import {getPasswords, getPassword, createPassword, patchPassword, deletePassword} from '../controllers/passwords.js';

import auth from '../middleware/auth';

const router = express.Router();

// All routes in here are starting with /passwords
router.get('/',auth, getPasswords);
router.get('/:id', auth, getPassword);
router.post('/', auth, createPassword);
router.patch('/:id',auth, patchPassword);
router.delete('/:id',auth, deletePassword);

export default router;