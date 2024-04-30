"use node"
import "reflect-metadata"
import { DataSource, EntitySchema } from "typeorm"
import { classLoader } from "./loader"

const isProduction = process.env.NODE_ENV === "production"

export const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "photo",
    synchronize: !isProduction,
    logging: !isProduction,
    migrationsRun: false,
    entities: classLoader("entity") as EntitySchema[],
    migrations: classLoader("migration") as Function[],
    subscribers: [],
    installExtensions: true
})