import slugify from 'slugify'
import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
  AfterLoad
} from 'typeorm'
import { Genero } from './Genero'

@Entity()
export default class Filmes {
  @PrimaryGeneratedColumn('increment')
  public id: number

  @Column('varchar')
  public nome: string

  @Column('text')
  public sinopse: string

  @Column('varchar')
  public poster: string

  @Column('varchar')
  public ano_lancamento: Date

  @Column('varchar')
  public faturamento: Number

  @ManyToOne(() => Genero)
  @JoinColumn({
    name: 'id_genero',
    referencedColumnName: 'id_genero'
  })
  public genero: Genero

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date

  public full_path: string

  @BeforeInsert()
  public createAt() {
    this.created_at = new Date()
  }

  @BeforeUpdate()
  public updatedAt() {
    this.updated_at = new Date()
  }
}
