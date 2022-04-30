import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    id: string

    @Column()
    email: string

    @Column()
    password: string
}