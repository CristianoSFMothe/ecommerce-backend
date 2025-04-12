import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateAlagoas1744424057090
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdAlagoas = 'bc91a57f-ca49-42e7-abde-6cf34a0fe1d2';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Água Branca', '${stateIdAlagoas}'),
        ('Anadia', '${stateIdAlagoas}'),
        ('Arapiraca', '${stateIdAlagoas}'),
        ('Atalaia', '${stateIdAlagoas}'),
        ('Barra de São Miguel', '${stateIdAlagoas}'),
        ('Batalha', '${stateIdAlagoas}'),
        ('Belém', '${stateIdAlagoas}'),
        ('Belo Monte', '${stateIdAlagoas}'),
        ('Boa Vista do Lagamar', '${stateIdAlagoas}'),
        ('Coité do Nóia', '${stateIdAlagoas}'),
        ('Colônia Leopoldina', '${stateIdAlagoas}'),
        ('Coruripe', '${stateIdAlagoas}'),
        ('Craíbas', '${stateIdAlagoas}'),
        ('Delmiro Gouveia', '${stateIdAlagoas}'),
        ('Dois Riachos', '${stateIdAlagoas}'),
        ('Estrela de Alagoas', '${stateIdAlagoas}'),
        ('Feira Grande', '${stateIdAlagoas}'),
        ('Maceió', '${stateIdAlagoas}'),
        ('Major Isidoro', '${stateIdAlagoas}'),
        ('Maragogi', '${stateIdAlagoas}'),
        ('Marechal Deodoro', '${stateIdAlagoas}'),
        ('Maribondo', '${stateIdAlagoas}'),
        ('Monteirópolis', '${stateIdAlagoas}'),
        ('Murici', '${stateIdAlagoas}'),
        ('Palmeira dos Índios', '${stateIdAlagoas}'),
        ('Penedo', '${stateIdAlagoas}'),
        ('Piaçabuçu', '${stateIdAlagoas}'),
        ('Pilar', '${stateIdAlagoas}'),
        ('Poço das Trincheiras', '${stateIdAlagoas}'),
        ('Porto Calvo', '${stateIdAlagoas}'),
        ('Porto de Pedras', '${stateIdAlagoas}'),
        ('Quebrangulo', '${stateIdAlagoas}'),
        ('Rio Largo', '${stateIdAlagoas}'),
        ('Roteiro', '${stateIdAlagoas}'),
        ('Santa Luzia do Norte', '${stateIdAlagoas}'),
        ('Santana do Ipanema', '${stateIdAlagoas}'),
        ('Santana do Mundaú', '${stateIdAlagoas}'),
        ('São José da Laje', '${stateIdAlagoas}'),
        ('São José do Rio Largo', '${stateIdAlagoas}'),
        ('São Luís do Quitunde', '${stateIdAlagoas}'),
        ('São Miguel dos Campos', '${stateIdAlagoas}'),
        ('São Miguel dos Milagres', '${stateIdAlagoas}'),
        ('São Sebastião', '${stateIdAlagoas}'),
        ('Satuba', '${stateIdAlagoas}'),
        ('Senador Rui Palmeira', '${stateIdAlagoas}'),
        ('Tanque d\`Arca', '${stateIdAlagoas}'),
        ('Teotônio Vilela', '${stateIdAlagoas}'),
        ('União dos Palmares', '${stateIdAlagoas}'),
        ('Viçosa', '${stateIdAlagoas}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdAlagoas = 'bc91a57f-ca49-42e7-abde-6cf34a0fe1d2';

    await queryRunner.query(`
      DELETE FROM cities WHERE state_id = '${stateIdAlagoas}';
    `);
  }
}
