import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStatePernambuco1744510215776
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdPernambuco = 'd06094c1-b1d4-41a3-9c29-fc9942451484';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Abreu e Lima', '${stateIdPernambuco}'),
        ('Afogados da Ingazeira', '${stateIdPernambuco}'),
        ('Afrânio', '${stateIdPernambuco}'),
        ('Agrestina', '${stateIdPernambuco}'),
        ('Água Preta', '${stateIdPernambuco}'),
        ('Águas Belas', '${stateIdPernambuco}'),
        ('Alagoinha', '${stateIdPernambuco}'),
        ('Aliança', '${stateIdPernambuco}'),
        ('Altinho', '${stateIdPernambuco}'),
        ('Amaraji', '${stateIdPernambuco}'),
        ('Angelim', '${stateIdPernambuco}'),
        ('Araçoiaba', '${stateIdPernambuco}'),
        ('Araripina', '${stateIdPernambuco}'),
        ('Arcoverde', '${stateIdPernambuco}'),
        ('Barra de Guabiraba', '${stateIdPernambuco}'),
        ('Barreiros', '${stateIdPernambuco}'),
        ('Belém de Maria', '${stateIdPernambuco}'),
        ('Belém de São Francisco', '${stateIdPernambuco}'),
        ('Belo Jardim', '${stateIdPernambuco}'),
        ('Betânia', '${stateIdPernambuco}'),
        ('Bezerros', '${stateIdPernambuco}'),
        ('Bodocó', '${stateIdPernambuco}'),
        ('Bom Conselho', '${stateIdPernambuco}'),
        ('Bom Jardim', '${stateIdPernambuco}'),
        ('Bonito', '${stateIdPernambuco}'),
        ('Brejão', '${stateIdPernambuco}'),
        ('Brejinho', '${stateIdPernambuco}'),
        ('Brejo da Madre de Deus', '${stateIdPernambuco}'),
        ('Buenos Aires', '${stateIdPernambuco}'),
        ('Buíque', '${stateIdPernambuco}'),
        ('Cabo de Santo Agostinho', '${stateIdPernambuco}'),
        ('Cabrobó', '${stateIdPernambuco}'),
        ('Cachoeirinha', '${stateIdPernambuco}'),
        ('Caetés', '${stateIdPernambuco}'),
        ('Calçado', '${stateIdPernambuco}'),
        ('Calumbi', '${stateIdPernambuco}'),
        ('Camaragibe', '${stateIdPernambuco}'),
        ('Camocim de São Félix', '${stateIdPernambuco}'),
        ('Camutanga', '${stateIdPernambuco}'),
        ('Canhotinho', '${stateIdPernambuco}'),
        ('Capoeiras', '${stateIdPernambuco}'),
        ('Carnaíba', '${stateIdPernambuco}'),
        ('Carnaubeira da Penha', '${stateIdPernambuco}'),
        ('Carpina', '${stateIdPernambuco}'),
        ('Caruaru', '${stateIdPernambuco}'),
        ('Casinhas', '${stateIdPernambuco}'),
        ('Catende', '${stateIdPernambuco}'),
        ('Cedro', '${stateIdPernambuco}'),
        ('Chã de Alegria', '${stateIdPernambuco}'),
        ('Chã Grande', '${stateIdPernambuco}'),
        ('Condado', '${stateIdPernambuco}'),
        ('Correntes', '${stateIdPernambuco}'),
        ('Cortês', '${stateIdPernambuco}'),
        ('Cumaru', '${stateIdPernambuco}'),
        ('Cupira', '${stateIdPernambuco}'),
        ('Custódia', '${stateIdPernambuco}'),
        ('Dormentes', '${stateIdPernambuco}'),
        ('Escada', '${stateIdPernambuco}'),
        ('Exu', '${stateIdPernambuco}'),
        ('Feira Nova', '${stateIdPernambuco}'),
        ('Fernando de Noronha', '${stateIdPernambuco}'),
        ('Ferreiros', '${stateIdPernambuco}'),
        ('Flores', '${stateIdPernambuco}'),
        ('Floresta', '${stateIdPernambuco}'),
        ('Frei Miguelinho', '${stateIdPernambuco}'),
        ('Gameleira', '${stateIdPernambuco}'),
        ('Garanhuns', '${stateIdPernambuco}'),
        ('Glória do Goitá', '${stateIdPernambuco}'),
        ('Goiana', '${stateIdPernambuco}'),
        ('Granito', '${stateIdPernambuco}'),
        ('Gravatá', '${stateIdPernambuco}'),
        ('Iati', '${stateIdPernambuco}'),
        ('Ibimirim', '${stateIdPernambuco}'),
        ('Ibirajuba', '${stateIdPernambuco}'),
        ('Igarassu', '${stateIdPernambuco}'),
        ('Iguaraci', '${stateIdPernambuco}'),
        ('Ilha de Itamaracá', '${stateIdPernambuco}'),
        ('Inajá', '${stateIdPernambuco}'),
        ('Ingazeira', '${stateIdPernambuco}'),
        ('Ipojuca', '${stateIdPernambuco}'),
        ('Ipubi', '${stateIdPernambuco}'),
        ('Itacuruba', '${stateIdPernambuco}'),
        ('Itaíba', '${stateIdPernambuco}'),
        ('Itambé', '${stateIdPernambuco}'),
        ('Itapetim', '${stateIdPernambuco}'),
        ('Itapissuma', '${stateIdPernambuco}'),
        ('Itaquitinga', '${stateIdPernambuco}'),
        ('Jaboatão dos Guararapes', '${stateIdPernambuco}'),
        ('Jaqueira', '${stateIdPernambuco}'),
        ('Jataúba', '${stateIdPernambuco}'),
        ('Jatobá', '${stateIdPernambuco}'),
        ('João Alfredo', '${stateIdPernambuco}'),
        ('Joaquim Nabuco', '${stateIdPernambuco}'),
        ('Jucati', '${stateIdPernambuco}'),
        ('Jupi', '${stateIdPernambuco}'),
        ('Jurema', '${stateIdPernambuco}'),
        ('Lagoa do Carro', '${stateIdPernambuco}'),
        ('Lagoa do Itaenga', '${stateIdPernambuco}'),
        ('Lagoa do Ouro', '${stateIdPernambuco}'),
        ('Lagoa dos Gatos', '${stateIdPernambuco}'),
        ('Lagoa Grande', '${stateIdPernambuco}'),
        ('Lajedo', '${stateIdPernambuco}'),
        ('Limoeiro', '${stateIdPernambuco}'),
        ('Macaparana', '${stateIdPernambuco}'),
        ('Machados', '${stateIdPernambuco}'),
        ('Manari', '${stateIdPernambuco}'),
        ('Maraial', '${stateIdPernambuco}'),
        ('Mirandiba', '${stateIdPernambuco}'),
        ('Moreilândia', '${stateIdPernambuco}'),
        ('Moreno', '${stateIdPernambuco}'),
        ('Nazaré da Mata', '${stateIdPernambuco}'),
        ('Olinda', '${stateIdPernambuco}'),
        ('Orobó', '${stateIdPernambuco}'),
        ('Orocó', '${stateIdPernambuco}'),
        ('Ouricuri', '${stateIdPernambuco}'),
        ('Palmares', '${stateIdPernambuco}'),
        ('Palmeirina', '${stateIdPernambuco}'),
        ('Panelas', '${stateIdPernambuco}'),
        ('Paranatama', '${stateIdPernambuco}'),
        ('Parnamirim', '${stateIdPernambuco}'),
        ('Passira', '${stateIdPernambuco}'),
        ('Paudalho', '${stateIdPernambuco}'),
        ('Paulista', '${stateIdPernambuco}'),
        ('Pedra', '${stateIdPernambuco}'),
        ('Pesqueira', '${stateIdPernambuco}'),
        ('Petrolândia', '${stateIdPernambuco}'),
        ('Petrolina', '${stateIdPernambuco}'),
        ('Poção', '${stateIdPernambuco}'),
        ('Pombos', '${stateIdPernambuco}'),
        ('Primavera', '${stateIdPernambuco}'),
        ('Quipapá', '${stateIdPernambuco}'),
        ('Quixaba', '${stateIdPernambuco}'),
        ('Recife', '${stateIdPernambuco}'),
        ('Riacho das Almas', '${stateIdPernambuco}'),
        ('Ribeirão', '${stateIdPernambuco}'),
        ('Rio Formoso', '${stateIdPernambuco}'),
        ('Sairé', '${stateIdPernambuco}'),
        ('Salgadinho', '${stateIdPernambuco}'),
        ('Salgueiro', '${stateIdPernambuco}'),
        ('Saloá', '${stateIdPernambuco}'),
        ('Sanharó', '${stateIdPernambuco}'),
        ('Santa Cruz', '${stateIdPernambuco}'),
        ('Santa Cruz da Baixa Verde', '${stateIdPernambuco}'),
        ('Santa Cruz do Capibaribe', '${stateIdPernambuco}'),
        ('Santa Filomena', '${stateIdPernambuco}'),
        ('Santa Maria da Boa Vista', '${stateIdPernambuco}'),
        ('Santa Maria do Cambucá', '${stateIdPernambuco}'),
        ('Santa Terezinha', '${stateIdPernambuco}'),
        ('São Benedito do Sul', '${stateIdPernambuco}'),
        ('São Bento do Una', '${stateIdPernambuco}'),
        ('São Caitano', '${stateIdPernambuco}'),
        ('São João', '${stateIdPernambuco}'),
        ('São Joaquim do Monte', '${stateIdPernambuco}'),
        ('São José da Coroa Grande', '${stateIdPernambuco}'),
        ('São José do Belmonte', '${stateIdPernambuco}'),
        ('São José do Egito', '${stateIdPernambuco}'),
        ('São Lourenço da Mata', '${stateIdPernambuco}'),
        ('São Vicente Ferrer', '${stateIdPernambuco}'),
        ('Serra Talhada', '${stateIdPernambuco}'),
        ('Serrita', '${stateIdPernambuco}'),
        ('Sertânia', '${stateIdPernambuco}'),
        ('Sirinhaém', '${stateIdPernambuco}'),
        ('Solidão', '${stateIdPernambuco}'),
        ('Surubim', '${stateIdPernambuco}'),
        ('Tabira', '${stateIdPernambuco}'),
        ('Tacaimbó', '${stateIdPernambuco}'),
        ('Tacaratu', '${stateIdPernambuco}'),
        ('Tamandaré', '${stateIdPernambuco}'),
        ('Taquaritinga do Norte', '${stateIdPernambuco}'),
        ('Terezinha', '${stateIdPernambuco}'),
        ('Terra Nova', '${stateIdPernambuco}'),
        ('Timbaúba', '${stateIdPernambuco}'),
        ('Toritama', '${stateIdPernambuco}'),
        ('Tracunhaém', '${stateIdPernambuco}'),
        ('Trindade', '${stateIdPernambuco}'),
        ('Triunfo', '${stateIdPernambuco}'),
        ('Tupanatinga', '${stateIdPernambuco}'),
        ('Tuparetama', '${stateIdPernambuco}'),
        ('Venturosa', '${stateIdPernambuco}'),
        ('Verdejante', '${stateIdPernambuco}'),
        ('Vertente do Lério', '${stateIdPernambuco}'),
        ('Vertentes', '${stateIdPernambuco}'),
        ('Vicência', '${stateIdPernambuco}'),
        ('Vitória de Santo Antão', '${stateIdPernambuco}'),
        ('Xexéu', '${stateIdPernambuco}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdPernambuco = 'd06094c1-b1d4-41a3-9c29-fc9942451484';

    await queryRunner.query(`
      DELETE FROM cities WHERE state_id = '${stateIdPernambuco}';
    `);
  }
}
