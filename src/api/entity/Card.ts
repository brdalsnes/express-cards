import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Deck from './Deck';

@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    title: string;

    @ManyToOne(type => Deck, deck => deck.cards)
    deck: Deck;
}

export default Card;