import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateRioDeJaneiro1744511688643
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdRioDeJaneiro = 'b71b7d6f-9861-4d0b-b1f4-d3de5538e771';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Angra dos Reis', '${stateIdRioDeJaneiro}'),
        ('Aperibé', '${stateIdRioDeJaneiro}'),
        ('Araruama', '${stateIdRioDeJaneiro}'),
        ('Areal', '${stateIdRioDeJaneiro}'),
        ('Armação dos Búzios', '${stateIdRioDeJaneiro}'),
        ('Arraial do Cabo', '${stateIdRioDeJaneiro}'),
        ('Barra do Piraí', '${stateIdRioDeJaneiro}'),
        ('Barra Mansa', '${stateIdRioDeJaneiro}'),
        ('Belford Roxo', '${stateIdRioDeJaneiro}'),
        ('Bom Jardim', '${stateIdRioDeJaneiro}'),
        ('Bom Jesus do Itabapoana', '${stateIdRioDeJaneiro}'),
        ('Cabo Frio', '${stateIdRioDeJaneiro}'),
        ('Cachoeiras de Macacu', '${stateIdRioDeJaneiro}'),
        ('Cambuci', '${stateIdRioDeJaneiro}'),
        ('Campos dos Goytacazes', '${stateIdRioDeJaneiro}'),
        ('Cantagalo', '${stateIdRioDeJaneiro}'),
        ('Carapebus', '${stateIdRioDeJaneiro}'),
        ('Cardoso Moreira', '${stateIdRioDeJaneiro}'),
        ('Carmo', '${stateIdRioDeJaneiro}'),
        ('Casimiro de Abreu', '${stateIdRioDeJaneiro}'),
        ('Comendador Levy Gasparian', '${stateIdRioDeJaneiro}'),
        ('Conceição de Macabu', '${stateIdRioDeJaneiro}'),
        ('Cordeiro', '${stateIdRioDeJaneiro}'),
        ('Duas Barras', '${stateIdRioDeJaneiro}'),
        ('Duque de Caxias', '${stateIdRioDeJaneiro}'),
        ('Engenheiro Paulo de Frontin', '${stateIdRioDeJaneiro}'),
        ('Guapimirim', '${stateIdRioDeJaneiro}'),
        ('Iguaba Grande', '${stateIdRioDeJaneiro}'),
        ('Itaboraí', '${stateIdRioDeJaneiro}'),
        ('Itaguaí', '${stateIdRioDeJaneiro}'),
        ('Italva', '${stateIdRioDeJaneiro}'),
        ('Itaocara', '${stateIdRioDeJaneiro}'),
        ('Itaperuna', '${stateIdRioDeJaneiro}'),
        ('Itatiaia', '${stateIdRioDeJaneiro}'),
        ('Japeri', '${stateIdRioDeJaneiro}'),
        ('Laje do Muriaé', '${stateIdRioDeJaneiro}'),
        ('Macaé', '${stateIdRioDeJaneiro}'),
        ('Macuco', '${stateIdRioDeJaneiro}'),
        ('Magé', '${stateIdRioDeJaneiro}'),
        ('Mangaratiba', '${stateIdRioDeJaneiro}'),
        ('Maricá', '${stateIdRioDeJaneiro}'),
        ('Mendes', '${stateIdRioDeJaneiro}'),
        ('Mesquita', '${stateIdRioDeJaneiro}'),
        ('Miguel Pereira', '${stateIdRioDeJaneiro}'),
        ('Miracema', '${stateIdRioDeJaneiro}'),
        ('Natividade', '${stateIdRioDeJaneiro}'),
        ('Nilópolis', '${stateIdRioDeJaneiro}'),
        ('Niterói', '${stateIdRioDeJaneiro}'),
        ('Nova Friburgo', '${stateIdRioDeJaneiro}'),
        ('Nova Iguaçu', '${stateIdRioDeJaneiro}'),
        ('Paracambi', '${stateIdRioDeJaneiro}'),
        ('Paraíba do Sul', '${stateIdRioDeJaneiro}'),
        ('Parati', '${stateIdRioDeJaneiro}'),
        ('Paty do Alferes', '${stateIdRioDeJaneiro}'),
        ('Petrópolis', '${stateIdRioDeJaneiro}'),
        ('Pinheiral', '${stateIdRioDeJaneiro}'),
        ('Piraí', '${stateIdRioDeJaneiro}'),
        ('Porciúncula', '${stateIdRioDeJaneiro}'),
        ('Porto Real', '${stateIdRioDeJaneiro}'),
        ('Quatis', '${stateIdRioDeJaneiro}'),
        ('Queimados', '${stateIdRioDeJaneiro}'),
        ('Quissamã', '${stateIdRioDeJaneiro}'),
        ('Resende', '${stateIdRioDeJaneiro}'),
        ('Rio Bonito', '${stateIdRioDeJaneiro}'),
        ('Rio Claro', '${stateIdRioDeJaneiro}'),
        ('Rio das Flores', '${stateIdRioDeJaneiro}'),
        ('Rio das Ostras', '${stateIdRioDeJaneiro}'),
        ('Rio de Janeiro', '${stateIdRioDeJaneiro}'),
        ('Santa Maria Madalena', '${stateIdRioDeJaneiro}'),
        ('Santo Antônio de Pádua', '${stateIdRioDeJaneiro}'),
        ('São Fidélis', '${stateIdRioDeJaneiro}'),
        ('São Francisco de Itabapoana', '${stateIdRioDeJaneiro}'),
        ('São Gonçalo', '${stateIdRioDeJaneiro}'),
        ('São João da Barra', '${stateIdRioDeJaneiro}'),
        ('São João de Meriti', '${stateIdRioDeJaneiro}'),
        ('São José de Ubá', '${stateIdRioDeJaneiro}'),
        ('São José do Vale do Rio Pret', '${stateIdRioDeJaneiro}'),
        ('São Pedro da Aldeia', '${stateIdRioDeJaneiro}'),
        ('São Sebastião do Alto', '${stateIdRioDeJaneiro}'),
        ('Sapucaia', '${stateIdRioDeJaneiro}'),
        ('Saquarema', '${stateIdRioDeJaneiro}'),
        ('Seropédica', '${stateIdRioDeJaneiro}'),
        ('Silva Jardim', '${stateIdRioDeJaneiro}'),
        ('Sumidouro', '${stateIdRioDeJaneiro}'),
        ('Tanguá', '${stateIdRioDeJaneiro}'),
        ('Teresópolis', '${stateIdRioDeJaneiro}'),
        ('Trajano de Morais', '${stateIdRioDeJaneiro}'),
        ('Três Rios', '${stateIdRioDeJaneiro}'),
        ('Valença', '${stateIdRioDeJaneiro}'),
        ('Varre-Sai', '${stateIdRioDeJaneiro}'),
        ('Vassouras', '${stateIdRioDeJaneiro}'),
        ('Volta Redonda', '${stateIdRioDeJaneiro}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdRioDeJaneiro = 'b71b7d6f-9861-4d0b-b1f4-d3de5538e771';

    await queryRunner.query(`
      DELETE FROM cities WHERE state_id = '${stateIdRioDeJaneiro}';
    `);
  }
}
