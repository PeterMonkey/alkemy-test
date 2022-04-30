import { DataSource } from "typeorm";
import { Budge } from "./entities/Budges";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "backend",
    database: "postgres",
    synchronize: true,
    entities: [Budge, User],
})