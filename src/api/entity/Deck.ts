import {Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Deck {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    title: string;

    @Column("int")
    size: number;
}

export default Deck;