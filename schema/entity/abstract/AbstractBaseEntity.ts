import { PrimaryGeneratedColumn } from "typeorm";

export default abstract class AbstractBaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string
}