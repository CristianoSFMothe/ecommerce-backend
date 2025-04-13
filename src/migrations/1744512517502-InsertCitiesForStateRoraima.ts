import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateRoraima1744512517502
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdRoraima = '2b0d83a9-524f-4212-8d95-1437fcfc53e0';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Alto Alegre', '${stateIdRoraima}'),
        ('Amajari', '${stateIdRoraima}'),
        ('Boa Vista', '${stateIdRoraima}'),
        ('Bonfim', '${stateIdRoraima}'),
        ('Cantá', '${stateIdRoraima}'),
        ('Caracaraí', '${stateIdRoraima}'),
        ('Caroebe', '${stateIdRoraima}'),
        ('Iracema', '${stateIdRoraima}'),
        ('Mucajaí', '${stateIdRoraima}'),
        ('Normandia', '${stateIdRoraima}'),
        ('Pacaraima', '${stateIdRoraima}'),
        ('Rorainópolis', '${stateIdRoraima}'),
        ('São João da Baliza', '${stateIdRoraima}'),
        ('São Luiz', '${stateIdRoraima}'),
        ('Uiramutã', '${stateIdRoraima}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdRoraima = '2b0d83a9-524f-4212-8d95-1437fcfc53e0';

    await queryRunner.query(`
      DELETE FROM cities WHERE state_id = '${stateIdRoraima}';
    `);
  }
}
