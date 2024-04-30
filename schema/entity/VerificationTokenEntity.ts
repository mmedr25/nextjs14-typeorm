import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"
import { transformer } from "../utils/transformers"

@Entity({ name: "verification_tokens" })
export default class VerificationTokenEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string
  
    @Column()
    token!: string
  
    @Column()
    identifier!: string
  
    @Column({ transformer: transformer.date })
    expires!: string
}