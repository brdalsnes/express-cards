import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import createError from 'http-errors';
import DeckService from '../services/DeckService';
import Deck from '../entity/Deck';

class DeckController {
    static getAll = asyncHandler(async (_req: Request, res: Response) => {
        const deckService = new DeckService();
        const decks = await deckService.getAll()
        res.send(decks);
    })

    static get = asyncHandler(async (req: Request, res: Response) => {
        const deckService = new DeckService();
        const deck = await deckService.get(req.params.id);
        if (!deck) throw createError(404, 'Deck not found');
        res.send(deck);
    })

    static post = asyncHandler(async (req: Request, res: Response) => {
        const deckService = new DeckService();
        const { title, size } = req.body;
        if (!title || !size ) throw createError(400, 'Missing fields');
        const deck = new Deck();
        deck.title = title;
        deck.size = size;
        const savedDeck = await deckService.create(deck);
        res.send(savedDeck);
    })

    static put = asyncHandler(async (req: Request, res: Response) => {
        const deckService = new DeckService();
        const deck = await deckService.get(req.params.id);
        if (!deck) throw createError(400, 'Deck not found');
        const { title, size } = req.body;
        if (!title || !size ) throw createError(400, 'Missing fields');
        deck.title = title;
        deck.size = size;
        const savedDeck = await deckService.create(deck);
        res.send(savedDeck);
    })

    static delete = asyncHandler(async (req: Request, res: Response) => {
        const deckService = new DeckService();
        const result = await deckService.delete(req.params.id);
        if (!result.affected) throw createError(404, 'Deck not found');
        res.status(204);
        res.send();
    })
}

export default DeckController;