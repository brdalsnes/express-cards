import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';
import CardService from '../services/CardService';

class CardController {
    static getAll = asyncHandler(async (_req: Request, res: Response) => {
        const cardService = new CardService();
        const cards = await cardService.getAll()
        res.send(cards);
    })

    static get = asyncHandler(async (req: Request, res: Response) => {
        const cardService = new CardService();
        const card = await cardService.get(req.params.id);
        if (!card) throw createError(400, 'Card not found');
        res.send(card);
    })
}

export default CardController;