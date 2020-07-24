import express from 'express';

import DeckController from './controllers/DeckController';

const router = express.Router();

router.get('/deck/', DeckController.getAll);
router.get('/deck/:id', DeckController.get);
router.post('/deck/', DeckController.post);
router.put('/deck/:id', DeckController.put);

export default router;