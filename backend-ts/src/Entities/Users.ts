import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity()
export class Users {
  @PrimaryGeneratedColumn('increment')
  public id_user: number

  @Column('varchar')
  public nome: string

  @Column('varchar')
  public email: string

  @Column('varchar')
  public senha: string

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date

  @BeforeInsert()
  public createAt() {
    this.created_at = new Date()
  }

  @BeforeUpdate()
  public updatedAt() {
    this.updated_at = new Date()
  }

  @BeforeInsert()
  public async hashPassword() {
    this.senha = await bcrypt.hash(this.senha, 10)
  }
}
