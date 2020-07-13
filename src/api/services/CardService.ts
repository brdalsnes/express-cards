import { getRepository, Repository } from 'typeorm';
import Card from '../entity/Card';

class CardService {
    private cardRepository: Repository<Card>;
    constructor() {
        this.cardRepository = getRepository(Card);
    }

    getAll = () => this.cardRepository.find();

    get = (id: string) => this.cardRepository.findOne(id)
}

export default CardService;