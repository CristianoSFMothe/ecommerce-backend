import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddCityStateRelationship1632857456219
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('cities');

    if (table) {
      const foreignKey = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf('state_id') !== -1,
      );

      if (!foreignKey) {
        await queryRunner.createForeignKey(
          'cities',
          new TableForeignKey({
            columnNames: ['state_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'states',
          }),
        );
      }
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('cities');

    if (table) {
      const foreignKey = table.foreignKeys.find(
        (fk) => fk.columnNames.indexOf('state_id') !== -1,
      );
      if (foreignKey) {
        await queryRunner.dropForeignKey('cities', foreignKey);
      }
    }
  }
}
