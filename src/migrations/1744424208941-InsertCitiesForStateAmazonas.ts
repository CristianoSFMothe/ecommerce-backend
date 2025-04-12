import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateAmazonas1744424208941
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdAmazonas = '6d705d1f-2a93-48e7-8ed5-f3fbd99f5ccf';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Alvarães', '${stateIdAmazonas}'),
        ('Amaturá', '${stateIdAmazonas}'),
        ('Anamã', '${stateIdAmazonas}'),
        ('Anori', '${stateIdAmazonas}'),
        ('Apuí', '${stateIdAmazonas}'),
        ('Atalaia do Norte', '${stateIdAmazonas}'),
        ('Autazes', '${stateIdAmazonas}'),
        ('Barcelos', '${stateIdAmazonas}'),
        ('Barreirinha', '${stateIdAmazonas}'),
        ('Benjamin Constant', '${stateIdAmazonas}'),
        ('Beruri', '${stateIdAmazonas}'),
        ('Boa Vista do Ramos', '${stateIdAmazonas}'),
        ('Boca do Acre', '${stateIdAmazonas}'),
        ('Borba', '${stateIdAmazonas}'),
        ('Caapiranga', '${stateIdAmazonas}'),
        ('Canutama', '${stateIdAmazonas}'),
        ('Carauari', '${stateIdAmazonas}'),
        ('Careiro', '${stateIdAmazonas}'),
        ('Careiro da Várzea', '${stateIdAmazonas}'),
        ('Coari', '${stateIdAmazonas}'),
        ('Codajás', '${stateIdAmazonas}'),
        ('Eirunepé', '${stateIdAmazonas}'),
        ('Envira', '${stateIdAmazonas}'),
        ('Fonte Boa', '${stateIdAmazonas}'),
        ('Guajará', '${stateIdAmazonas}'),
        ('Humaitá', '${stateIdAmazonas}'),
        ('Ipixuna', '${stateIdAmazonas}'),
        ('Iranduba', '${stateIdAmazonas}'),
        ('Itacoatiara', '${stateIdAmazonas}'),
        ('Itamarati', '${stateIdAmazonas}'),
        ('Itapiranga', '${stateIdAmazonas}'),
        ('Japurá', '${stateIdAmazonas}'),
        ('Juruá', '${stateIdAmazonas}'),
        ('Jutaí', '${stateIdAmazonas}'),
        ('Lábrea', '${stateIdAmazonas}'),
        ('Manacapuru', '${stateIdAmazonas}'),
        ('Manaquiri', '${stateIdAmazonas}'),
        ('Manaus', '${stateIdAmazonas}'),
        ('Manicoré', '${stateIdAmazonas}'),
        ('Maraã', '${stateIdAmazonas}'),
        ('Maués', '${stateIdAmazonas}'),
        ('Nhamundá', '${stateIdAmazonas}'),
        ('Nova Olinda do Norte', '${stateIdAmazonas}'),
        ('Novo Airão', '${stateIdAmazonas}'),
        ('Novo Aripuanã', '${stateIdAmazonas}'),
        ('Parintins', '${stateIdAmazonas}'),
        ('Pauini', '${stateIdAmazonas}'),
        ('Presidente Figueiredo', '${stateIdAmazonas}'),
        ('Rio Preto da Eva', '${stateIdAmazonas}'),
        ('Santa Isabel do Rio Negro', '${stateIdAmazonas}'),
        ('Santo Antônio do Içá', '${stateIdAmazonas}'),
        ('São Gabriel da Cachoeira', '${stateIdAmazonas}'),
        ('São Paulo de Olivença', '${stateIdAmazonas}'),
        ('São Sebastião do Uatumã', '${stateIdAmazonas}'),
        ('Silves', '${stateIdAmazonas}'),
        ('Tabatinga', '${stateIdAmazonas}'),
        ('Tapauá', '${stateIdAmazonas}'),
        ('Tefé', '${stateIdAmazonas}'),
        ('Tonantins', '${stateIdAmazonas}'),
        ('Uarini', '${stateIdAmazonas}'),
        ('Urucará', '${stateIdAmazonas}'),
        ('Urucurituba', '${stateIdAmazonas}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdAmazonas = '6d705d1f-2a93-48e7-8ed5-f3fbd99f5ccf';
    await queryRunner.query(
      `DELETE FROM cities WHERE state_id = '${stateIdAmazonas}';`,
    );
  }
}
