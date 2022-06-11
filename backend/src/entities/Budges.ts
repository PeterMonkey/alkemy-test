import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

enum operation {
    ingress,
    egress
}

@Entity('budge')
export class Budge extends BaseEntity {

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