import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateSaoPaulo1744517071039
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdSaoPaulo = 'f8d648e6-6e29-4372-9a93-d279217a5ebd';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Amparo de São Francisco', '${stateIdSaoPaulo}'),
        ('Aquidabã', '${stateIdSaoPaulo}'),
        ('Aracaju', '${stateIdSaoPaulo}'),
        ('Arauá', '${stateIdSaoPaulo}'),
        ('Areia Branca', '${stateIdSaoPaulo}'),
        ('Barra dos Coqueiros', '${stateIdSaoPaulo}'),
        ('Boquim', '${stateIdSaoPaulo}'),
        ('Brejo Grande', '${stateIdSaoPaulo}'),
        ('Campo do Brito', '${stateIdSaoPaulo}'),
        ('Canhoba', '${stateIdSaoPaulo}'),
        ('Canindé de São Francisco', '${stateIdSaoPaulo}'),
        ('Capela', '${stateIdSaoPaulo}'),
        ('Carira', '${stateIdSaoPaulo}'),
        ('Carmópolis', '${stateIdSaoPaulo}'),
        ('Cedro de São João', '${stateIdSaoPaulo}'),
        ('Cristinápolis', '${stateIdSaoPaulo}'),
        ('Cumbe', '${stateIdSaoPaulo}'),
        ('Divina Pastora', '${stateIdSaoPaulo}'),
        ('Estância', '${stateIdSaoPaulo}'),
        ('Feira Nova', '${stateIdSaoPaulo}'),
        ('Frei Paulo', '${stateIdSaoPaulo}'),
        ('Gararu', '${stateIdSaoPaulo}'),
        ('General Maynard', '${stateIdSaoPaulo}'),
        ('Gracho Cardoso', '${stateIdSaoPaulo}'),
        ('Ilha das Flores', '${stateIdSaoPaulo}'),
        ('Indiaroba', '${stateIdSaoPaulo}'),
        ('Itabaiana', '${stateIdSaoPaulo}'),
        ('Itabaianinha', '${stateIdSaoPaulo}'),
        ('Itabi', '${stateIdSaoPaulo}'),
        ('Itaporanga d\`Ajuda', '${stateIdSaoPaulo}'),
        ('Japaratuba', '${stateIdSaoPaulo}'),
        ('Japoatã', '${stateIdSaoPaulo}'),
        ('Lagarto', '${stateIdSaoPaulo}'),
        ('Laranjeiras', '${stateIdSaoPaulo}'),
        ('Macambira', '${stateIdSaoPaulo}'),
        ('Malhada dos Bois', '${stateIdSaoPaulo}'),
        ('Malhador', '${stateIdSaoPaulo}'),
        ('Maruim', '${stateIdSaoPaulo}'),
        ('Moita Bonita', '${stateIdSaoPaulo}'),
        ('Monte Alegre de Sergipe', '${stateIdSaoPaulo}'),
        ('Muribeca', '${stateIdSaoPaulo}'),
        ('Neópolis', '${stateIdSaoPaulo}'),
        ('Nossa Senhora Aparecida', '${stateIdSaoPaulo}'),
        ('Nossa Senhora da Glória', '${stateIdSaoPaulo}'),
        ('Nossa Senhora das Dores', '${stateIdSaoPaulo}'),
        ('Nossa Senhora de Lourdes', '${stateIdSaoPaulo}'),
        ('Nossa Senhora do Socorro', '${stateIdSaoPaulo}'),
        ('Pacatuba', '${stateIdSaoPaulo}'),
        ('Pedra Mole', '${stateIdSaoPaulo}'),
        ('Pedrinhas', '${stateIdSaoPaulo}'),
        ('Pinhão', '${stateIdSaoPaulo}'),
        ('Pirambu', '${stateIdSaoPaulo}'),
        ('Poço Redondo', '${stateIdSaoPaulo}'),
        ('Poço Verde', '${stateIdSaoPaulo}'),
        ('Porto da Folha', '${stateIdSaoPaulo}'),
        ('Propriá', '${stateIdSaoPaulo}'),
        ('Riachão do Dantas', '${stateIdSaoPaulo}'),
        ('Riachuelo', '${stateIdSaoPaulo}'),
        ('Ribeirópolis', '${stateIdSaoPaulo}'),
        ('Rosário do Catete', '${stateIdSaoPaulo}'),
        ('Salgado', '${stateIdSaoPaulo}'),
        ('Santa Luzia do Itanhy', '${stateIdSaoPaulo}'),
        ('Santa Rosa de Lima', '${stateIdSaoPaulo}'),
        ('Santana do São Francisco', '${stateIdSaoPaulo}'),
        ('Santo Amaro das Brotas', '${stateIdSaoPaulo}'),
        ('São Cristóvão', '${stateIdSaoPaulo}'),
        ('São Domingos', '${stateIdSaoPaulo}'),
        ('São Francisco', '${stateIdSaoPaulo}'),
        ('São Miguel do Aleixo', '${stateIdSaoPaulo}'),
        ('Simão Dias', '${stateIdSaoPaulo}'),
        ('Siriri', '${stateIdSaoPaulo}'),
        ('Telha', '${stateIdSaoPaulo}'),
        ('Tobias Barreto', '${stateIdSaoPaulo}'),
        ('Tomar do Geru', '${stateIdSaoPaulo}'),
        ('Umbaúba', '${stateIdSaoPaulo}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdSaoPaulo = 'f8d648e6-6e29-4372-9a93-d279217a5ebd';

    await queryRunner.query(`
      DELETE FROM cities WHERE state_id = '${stateIdSaoPaulo}';
    `);
  }
}
