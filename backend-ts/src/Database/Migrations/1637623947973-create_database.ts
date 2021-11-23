import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class createDatabase1637623947973 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'genero',
        columns: [
          {
            name: 'id_genero',
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
            name: 'created_at',
            type: 'timestamp',
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
    await queryRunner.dropTable('genero')
  }
}
