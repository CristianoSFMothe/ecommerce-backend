import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateDF1744427295658 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdDF = '2f658169-e46e-4c63-b7de-d88c45dc42b1';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Brasília', '${stateIdDF}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdDF = '2f658169-e46e-4c63-b7de-d88c45dc42b1';

    await queryRunner.query(`
      DELETE FROM cities WHERE state_id = '${stateIdDF}';
    `);
  }
}
