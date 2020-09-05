import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Card from '../entity/Card';

@Entity()
export class Deck {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    title: string;

    @OneToMany(type => Card, card => card.deck)
    cards: Card[];

}

export default Deck;