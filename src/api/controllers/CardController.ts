import { Request, Response } from 'express';
import CardService from '../services/CardService';

class CardController {
    static getAll = async (_req: Request, res: Response) => {
        const cardService = new CardService();
        const cards = await cardService.getAll()
        res.send(cards);
    }

    static get = async (req: Request, res: Response) => {
        const cardService = new CardService();
        const card = await cardService.get(req.params.id);
        res.send(card);
    }
}

export default CardController;