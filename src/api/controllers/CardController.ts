import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';
import Card from '../entity/Card';
import CardService from '../services/CardService';
import DeckService from '../services/DeckService';

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

    static post = asyncHandler(async (req: Request, res: Response) => {
        const cardService = new CardService();
        const deckService = new DeckService();
        const { title, deckId } = req.body;
        if (!title || !deckId) throw createError(400, 'Missing fields');
        const card = new Card();
        const deck = await deckService.get(deckId);
        card.title = title;
        const savedCard = await cardService.save(card);
        deck.cards.push(savedCard);
        deckService.save(deck);
        res.send(savedCard);
    })

    static put = asyncHandler(async (req: Request, res: Response) => {
        const cardService = new CardService();
        const deckService = new DeckService();
        const { title, deckId } = req.body;
        if (!title && !deckId) throw createError(400, 'Missing fields');
        const card = await cardService.get(req.params.id);
        if (title) card.title = title;
        if (deckId) {
            const deck = await deckService.get(deckId);
            deck.cards.push(card);
            deckService.save(deck);
        }
        const savedCard = await cardService.save(card);
        res.send(savedCard);
    })

    static delete = asyncHandler(async (req: Request, res: Response) => {
        const cardService = new CardService();
        const result = await cardService.delete(req.params.id);
        if (!result.affected) throw createError(404, 'Deck not found');
        res.status(204);
        res.send();
    })
}

export default CardController;