import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation } from "typeorm"
import { UserEntity } from "./UserEntity"
import { transformer } from "../utils/transformers"
// import UserEntity from "./UserEntity"
// import { transformer } from "../utils/transformers"

@Entity({ name: "accounts" })
export default class AccountEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @Column({ type: "uuid" })
    userId!: string

    @Column()
    type!: string

    @Column()
    provider!: string

    @Column()
    providerAccountId!: string

    @Column({ type: "varchar", nullable: true })
    refresh_token!: string | null

    @Column({ type: "varchar", nullable: true })
    access_token!: string | null

    @Column({
        nullable: true,
        type: "bigint",
        transformer: transformer.bigint,
    })
    expires_at!: number | null

    @Column({ type: "varchar", nullable: true })
    token_type!: string | null

    @Column({ type: "varchar", nullable: true })
    scope!: string | null

    @Column({ type: "varchar", nullable: true })
    id_token!: string | null

    @Column({ type: "varchar", nullable: true })
    session_state!: string | null

    @Column({ type: "varchar", nullable: true })
    oauth_token_secret!: string | null

    @Column({ type: "varchar", nullable: true })
    oauth_token!: string | null

    @ManyToOne(() => UserEntity, (user) => user.accounts, {
        createForeignKeyConstraints: true,
    })
    user!: Relation<UserEntity>
}