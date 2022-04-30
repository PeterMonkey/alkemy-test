import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";

enum operation {
    ingress,
    egress
}

@Entity('budge')
export class Budge {

    @PrimaryColumn()
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