import {Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Card {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    title: string;
}

export default Card;