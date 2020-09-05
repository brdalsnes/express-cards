import { getRepository, Repository } from 'typeorm';
import Deck from '../entity/Deck';

class DeckService {
    private deckRepository: Repository<Deck>;
    constructor() {
        this.deckRepository = getRepository(Deck);
    }

    getAll = () => this.deckRepository.find();

    get = (id: string) => this.deckRepository.findOne(id, { relations: ['cards'] });

    save = (deck: Deck) => this.deckRepository.save(deck);

    delete = (id: string) => this.deckRepository.delete(id);
}

export default DeckService;