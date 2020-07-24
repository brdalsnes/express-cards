import { getRepository, Repository } from 'typeorm';
import Deck from '../entity/Deck';

class DeckService {
    private deckRepository: Repository<Deck>;
    constructor() {
        this.deckRepository = getRepository(Deck);
    }

    getAll = () => this.deckRepository.find();

    get = (id: string) => this.deckRepository.findOne(id);

    create = (deck: Deck) => this.deckRepository.save(deck);
}

export default DeckService;