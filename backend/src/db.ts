import { DataSource } from "typeorm";
import { Budge } from "./entities/Budges";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "backend",
    database: "postgres",
    synchronize: true,
    entities: [Budge],
})