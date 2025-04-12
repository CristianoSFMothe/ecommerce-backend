import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateAcre1744423781550
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdAcre = 'c3f260a3-b7d6-4c82-bf2a-9668a1369402';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Acrelândia', '${stateIdAcre}'),
        ('Assis Brasil', '${stateIdAcre}'),
        ('Brasiléia', '${stateIdAcre}'),
        ('Bujari', '${stateIdAcre}'),
        ('Capixaba', '${stateIdAcre}'),
        ('Cruzeiro do Sul', '${stateIdAcre}'),
        ('Epitaciolândia', '${stateIdAcre}'),
        ('Feijó', '${stateIdAcre}'),
        ('Jordão', '${stateIdAcre}'),
        ('Mâncio Lima', '${stateIdAcre}'),
        ('Manoel Urbano', '${stateIdAcre}'),
        ('Marechal Thaumaturgo', '${stateIdAcre}'),
        ('Plácido de Castro', '${stateIdAcre}'),
        ('Porto Acre', '${stateIdAcre}'),
        ('Porto Walter', '${stateIdAcre}'),
        ('Rio Branco', '${stateIdAcre}'),
        ('Rodrigues Alves', '${stateIdAcre}'),
        ('Santa Rosa do Purus', '${stateIdAcre}'),
        ('Sena Madureira', '${stateIdAcre}'),
        ('Senador Guiomard', '${stateIdAcre}'),
        ('Tarauacá', '${stateIdAcre}'),
        ('Xapuri', '${stateIdAcre}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdAcre = 'c3f260a3-b7d6-4c82-bf2a-9668a1369402';

    await queryRunner.query(`
      DELETE FROM cities WHERE state_id = '${stateIdAcre}';
    `);
  }
}
