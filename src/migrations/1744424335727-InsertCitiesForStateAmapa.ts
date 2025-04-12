import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateAmapa1744424335727
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdAmapa = 'f77ae183-76e4-4764-b5ee-1cf3ff471f95';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Amapá', '${stateIdAmapa}'),
        ('Calçoene', '${stateIdAmapa}'),
        ('Cutias', '${stateIdAmapa}'),
        ('Ferreira Gomes', '${stateIdAmapa}'),
        ('Itaubal', '${stateIdAmapa}'),
        ('Laranjal do Jari', '${stateIdAmapa}'),
        ('Macapá', '${stateIdAmapa}'),
        ('Mazagão', '${stateIdAmapa}'),
        ('Oiapoque', '${stateIdAmapa}'),
        ('Pedra Branca do Amaparí', '${stateIdAmapa}'),
        ('Porto Grande', '${stateIdAmapa}'),
        ('Pracuúba', '${stateIdAmapa}'),
        ('Santana', '${stateIdAmapa}'),
        ('Serra do Navio', '${stateIdAmapa}'),
        ('Tartarugalzinho', '${stateIdAmapa}'),
        ('Vitória do Jari', '${stateIdAmapa}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdAmapa = 'f77ae183-76e4-4764-b5ee-1cf3ff471f95';
    await queryRunner.query(
      `DELETE FROM cities WHERE state_id = '${stateIdAmapa}';`,
    );
  }
}
