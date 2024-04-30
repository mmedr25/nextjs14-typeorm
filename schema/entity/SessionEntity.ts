import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, type Relation } from "typeorm"
import { UserEntity } from "./UserEntity"
import { transformer } from "../utils/transformers"


@Entity({ name: "sessions" })
export default class SessionEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string
  
    @Column({ unique: true })
    sessionToken!: string
  
    @Column({ type: "uuid" })
    userId!: string
  
    @Column({ transformer: transformer.date })
    expires!: string
  
    @ManyToOne(() => UserEntity, (user) => user.sessions)
    user!: Relation<UserEntity>
}