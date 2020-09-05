import express from 'express';

import DeckController from './controllers/DeckController';
import CardController from './controllers/CardController';

const router = express.Router();

router.get('/deck', DeckController.getAll);
router.get('/deck/:id', DeckController.get);
router.post('/deck', DeckController.post);
router.put('/deck/:id', DeckController.put);
router.delete('/deck/:id', DeckController.delete);

router.get('/card', CardController.getAll);
router.get('/card/:id', CardController.get);
router.post('/card', CardController.post);
router.put('/card/:id', CardController.put);
router.delete('/card/:id', CardController.delete);

export default router;