import express from 'express';

import CardController from './controllers/CardController';

const router = express.Router();

router.get('/', CardController.getAll);

export default router;