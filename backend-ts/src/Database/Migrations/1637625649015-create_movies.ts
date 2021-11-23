import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createMovies1637625649015 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'filmes',
        columns: [
          {
            name: 'id_filme',
            type: 'int',
            isPrimary: true,
            isNullable: false
          },
          {
            name: 'nome',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'sinopse',
            type: 'text',
            isNullable: false
          },
          {
            name: 'ano_lancamento',
            type: 'date',
            isNullable: false
          },
          {
            name: 'faturamento',
            type: 'decimal'
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: false
          },
          {
            name: 'poster',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'id_genero',
            type: 'int',
            isNullable: false
          },
          {
            name: 'updated_at',
            type: 'timestamp'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('filmes')
  }
}
