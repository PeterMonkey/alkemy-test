import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

enum operation {
    ingress,
    egress
}

@Entity('budge')
export class Budge {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    amount: number

    @Column()
    concept: string

    @CreateDateColumn()
    date: Date

    @Column()
    type: operation
}