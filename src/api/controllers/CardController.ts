import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Card from '../entity/Card';

class CardController {
    static getAll = async (_req: Request, res: Response) => {
        const cardRepository = getRepository(Card);
        const cards = await cardRepository.find();
        res.send(cards);
    }
}

export default CardController;