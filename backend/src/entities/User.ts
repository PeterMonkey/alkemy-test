import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { Budge } from "./Budges";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToOne(() => Budge)
    @JoinColumn()
    budge: Budge
}