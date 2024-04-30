import { Column, Entity } from "typeorm"
import { UserEntity } from "./UserEntity"
import AbstractBaseEntity from "./abstract/AbstractBaseEntity"

@Entity({ name: "haha" })
export default class TestMigrationEntity extends AbstractBaseEntity{
    @Column()
    provider!: string
}