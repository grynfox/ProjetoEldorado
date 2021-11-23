import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm'

export class createFKs1637633212426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'filmes',
      new TableForeignKey({
        columnNames: ['id_genero'],
        referencedColumnNames: ['id_genero'],
        referencedTableName: 'genero',
        name: 'fk_news_category'
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    1
    await queryRunner.dropForeignKey('filmes', 'fk_news_category')
  }
}
