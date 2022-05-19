import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, BaseEntity } from "typeorm";
import { Budge } from "./Budges";

@Entity('user')
export class User extends BaseEntity{

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