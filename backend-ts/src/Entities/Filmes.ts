import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate
} from 'typeorm'
@Entity()
export default class Filmes {
  @PrimaryGeneratedColumn('increment')
  public id_genero: number

  @Column('varchar')
  public nome: string

  @CreateDateColumn()
  public created_at?: Date

  @UpdateDateColumn()
  public updated_at?: Date

  @BeforeInsert()
  public createAt() {
    this.created_at = new Date()
  }

  @BeforeUpdate()
  public updatedAt() {
    this.updated_at = new Date()
  }
}
