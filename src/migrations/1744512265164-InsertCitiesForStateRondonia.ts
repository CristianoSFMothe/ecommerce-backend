import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateRondonia1744512265164
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdRondonia = '94c6fd55-0059-4423-9cf2-dc7a24ebd785';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Alta Floresta d\`Oeste', '${stateIdRondonia}'),
        ('Alto Alegre dos Parecis', '${stateIdRondonia}'),
        ('Alto Paraíso', '${stateIdRondonia}'),
        ('Alvorada d\`Oeste', '${stateIdRondonia}'),
        ('Ariquemes', '${stateIdRondonia}'),
        ('Buritis', '${stateIdRondonia}'),
        ('Cabixi', '${stateIdRondonia}'),
        ('Cacaulândia', '${stateIdRondonia}'),
        ('Cacoal', '${stateIdRondonia}'),
        ('Campo Novo de Rondônia', '${stateIdRondonia}'),
        ('Candeias do Jamari', '${stateIdRondonia}'),
        ('Castanheiras', '${stateIdRondonia}'),
        ('Cerejeiras', '${stateIdRondonia}'),
        ('Chupinguaia', '${stateIdRondonia}'),
        ('Colorado do Oeste', '${stateIdRondonia}'),
        ('Corumbiara', '${stateIdRondonia}'),
        ('Costa Marques', '${stateIdRondonia}'),
        ('Cujubim', '${stateIdRondonia}'),
        ('Espigão d\`Oeste', '${stateIdRondonia}'),
        ('Governador Jorge Teixeira', '${stateIdRondonia}'),
        ('Guajará-Mirim', '${stateIdRondonia}'),
        ('Itapuã do Oeste', '${stateIdRondonia}'),
        ('Jaru', '${stateIdRondonia}'),
        ('Ji-Paraná', '${stateIdRondonia}'),
        ('Machadinho d\`Oeste', '${stateIdRondonia}'),
        ('Ministro Andreazza', '${stateIdRondonia}'),
        ('Mirante da Serra', '${stateIdRondonia}'),
        ('Monte Negro', '${stateIdRondonia}'),
        ('Nova Brasilândia d\`Oeste', '${stateIdRondonia}'),
        ('Nova Mamoré', '${stateIdRondonia}'),
        ('Nova União', '${stateIdRondonia}'),
        ('Novo Horizonte do Oeste', '${stateIdRondonia}'),
        ('Ouro Preto do Oeste', '${stateIdRondonia}'),
        ('Parecis', '${stateIdRondonia}'),
        ('Pimenta Bueno', '${stateIdRondonia}'),
        ('Pimenteiras do Oeste', '${stateIdRondonia}'),
        ('Porto Velho', '${stateIdRondonia}'),
        ('Presidente Médici', '${stateIdRondonia}'),
        ('Primavera de Rondônia', '${stateIdRondonia}'),
        ('Rio Crespo', '${stateIdRondonia}'),
        ('Rolim de Moura', '${stateIdRondonia}'),
        ('Santa Luzia d\`Oeste', '${stateIdRondonia}'),
        ('São Felipe d\`Oeste', '${stateIdRondonia}'),
        ('São Francisco do Guaporé', '${stateIdRondonia}'),
        ('São Miguel do Guaporé', '${stateIdRondonia}'),
        ('Seringueiras', '${stateIdRondonia}'),
        ('Teixeirópolis', '${stateIdRondonia}'),
        ('Theobroma', '${stateIdRondonia}'),
        ('Urupá', '${stateIdRondonia}'),
        ('Vale do Anari', '${stateIdRondonia}'),
        ('Vale do Paraíso', '${stateIdRondonia}'),
        ('Vilhena', '${stateIdRondonia}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdRondonia = '94c6fd55-0059-4423-9cf2-dc7a24ebd785';

    await queryRunner.query(`
      DELETE FROM cities WHERE state_id = '${stateIdRondonia}';
    `);
  }
}
