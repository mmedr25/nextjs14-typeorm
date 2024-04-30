import { Column, Entity, OneToMany, PrimaryGeneratedColumn, type Relation } from "typeorm"
import SessionEntity from "./SessionEntity"
import AccountEntity from "./AccountEntity"
import { transformer } from "../utils/transformers"
import AbstractBaseEntity from "./abstract/AbstractBaseEntity"

@Entity({ name: "users" })
export  class UserEntity extends AbstractBaseEntity {

    @Column({ type: "varchar", nullable: true })
    name!: string | null

    // @Column({ type: "varchar", nullable: true })
    // password!: string | null

    @Column({ type: "varchar", nullable: true, unique: true })
    email!: string | null

    // @Column({ type: "varchar", nullable: true, transformer: transformer.date })
    // emailVerified!: string | null

    @Column({ type: "varchar", nullable: true })
    image!: string | null

    // @Column({ type: "varchar", nullable: true })
    // role!: string | null

    @OneToMany(() => SessionEntity, (session) => session.userId)
    sessions!: Relation<SessionEntity>[]

    @OneToMany(() => AccountEntity, (account) => account.userId)
    accounts!: Relation<AccountEntity>[]
}