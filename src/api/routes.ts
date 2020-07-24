import express from 'express';

import CardController from './controllers/CardController';

const router = express.Router();

router.get('/', CardController.getAll);
router.get('/:id', CardController.get);
router.post('/', CardController.post);

export default router;