import express from 'express';

import {getIdentifications, getIdentification, createIdentification, patchIdentification, deleteIdentification} from '../controllers/identifications';

import auth from '../middleware/auth';

const router = express.Router();

// All routes in here are starting with /identification
router.get('/',auth, getIdentifications);
router.get('/:id', auth, getIdentification);
router.post('/', auth, createIdentification);
router.patch('/:id',auth, patchIdentification);
router.delete('/:id',auth, deleteIdentification);

export default router;