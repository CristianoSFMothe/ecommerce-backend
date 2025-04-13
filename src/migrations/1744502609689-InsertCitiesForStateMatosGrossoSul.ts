import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateMatosGrossoSul1744502609689
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdMatoGrossoSul = '126e7c88-c3e2-4199-a4ad-187110f352d5';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Água Clara', '${stateIdMatoGrossoSul}'),
        ('Alcinópolis', '${stateIdMatoGrossoSul}'),
        ('Amambaí', '${stateIdMatoGrossoSul}'),
        ('Anastácio', '${stateIdMatoGrossoSul}'),
        ('Anaurilândia', '${stateIdMatoGrossoSul}'),
        ('Angélica', '${stateIdMatoGrossoSul}'),
        ('Antônio João', '${stateIdMatoGrossoSul}'),
        ('Aparecida do Taboado', '${stateIdMatoGrossoSul}'),
        ('Aquidauana', '${stateIdMatoGrossoSul}'),
        ('Aral Moreira', '${stateIdMatoGrossoSul}'),
        ('Bandeirantes', '${stateIdMatoGrossoSul}'),
        ('Bataguassu', '${stateIdMatoGrossoSul}'),
        ('Bataiporã', '${stateIdMatoGrossoSul}'),
        ('Bela Vista', '${stateIdMatoGrossoSul}'),
        ('Bodoquena', '${stateIdMatoGrossoSul}'),
        ('Bonito', '${stateIdMatoGrossoSul}'),
        ('Brasilândia', '${stateIdMatoGrossoSul}'),
        ('Caarapó', '${stateIdMatoGrossoSul}'),
        ('Camapuã', '${stateIdMatoGrossoSul}'),
        ('Campo Grande', '${stateIdMatoGrossoSul}'),
        ('Caracol', '${stateIdMatoGrossoSul}'),
        ('Cassilândia', '${stateIdMatoGrossoSul}'),
        ('Chapadão do Sul', '${stateIdMatoGrossoSul}'),
        ('Corguinho', '${stateIdMatoGrossoSul}'),
        ('Coronel Sapucaia', '${stateIdMatoGrossoSul}'),
        ('Corumbá', '${stateIdMatoGrossoSul}'),
        ('Costa Rica', '${stateIdMatoGrossoSul}'),
        ('Coxim', '${stateIdMatoGrossoSul}'),
        ('Deodápolis', '${stateIdMatoGrossoSul}'),
        ('Dois Irmãos do Buriti', '${stateIdMatoGrossoSul}'),
        ('Douradina', '${stateIdMatoGrossoSul}'),
        ('Dourados', '${stateIdMatoGrossoSul}'),
        ('Eldorado', '${stateIdMatoGrossoSul}'),
        ('Fátima do Sul', '${stateIdMatoGrossoSul}'),
        ('Figueirão', '${stateIdMatoGrossoSul}'),
        ('Glória de Dourados', '${stateIdMatoGrossoSul}'),
        ('Guia Lopes da Laguna', '${stateIdMatoGrossoSul}'),
        ('Iguatemi', '${stateIdMatoGrossoSul}'),
        ('Inocência', '${stateIdMatoGrossoSul}'),
        ('Itaporã', '${stateIdMatoGrossoSul}'),
        ('Itaquiraí', '${stateIdMatoGrossoSul}'),
        ('Ivinhema', '${stateIdMatoGrossoSul}'),
        ('Japorã', '${stateIdMatoGrossoSul}'),
        ('Jaraguari', '${stateIdMatoGrossoSul}'),
        ('Jardim', '${stateIdMatoGrossoSul}'),
        ('Jateí', '${stateIdMatoGrossoSul}'),
        ('Juti', '${stateIdMatoGrossoSul}'),
        ('Ladário', '${stateIdMatoGrossoSul}'),
        ('Laguna Carapã', '${stateIdMatoGrossoSul}'),
        ('Maracaju', '${stateIdMatoGrossoSul}'),
        ('Miranda', '${stateIdMatoGrossoSul}'),
        ('Mundo Novo', '${stateIdMatoGrossoSul}'),
        ('Naviraí', '${stateIdMatoGrossoSul}'),
        ('Nioaque', '${stateIdMatoGrossoSul}'),
        ('Nova Alvorada do Sul', '${stateIdMatoGrossoSul}'),
        ('Nova Andradina', '${stateIdMatoGrossoSul}'),
        ('Novo Horizonte do Sul', '${stateIdMatoGrossoSul}'),
        ('Paranaíba', '${stateIdMatoGrossoSul}'),
        ('Paranhos', '${stateIdMatoGrossoSul}'),
        ('Pedro Gomes', '${stateIdMatoGrossoSul}'),
        ('Ponta Porã', '${stateIdMatoGrossoSul}'),
        ('Porto Murtinho', '${stateIdMatoGrossoSul}'),
        ('Ribas do Rio Pardo', '${stateIdMatoGrossoSul}'),
        ('Rio Brilhante', '${stateIdMatoGrossoSul}'),
        ('Rio Negro', '${stateIdMatoGrossoSul}'),
        ('Rio Verde de Mato Grosso', '${stateIdMatoGrossoSul}'),
        ('Rochedo', '${stateIdMatoGrossoSul}'),
        ('Santa Rita do Pardo', '${stateIdMatoGrossoSul}'),
        ('São Gabriel do Oeste', '${stateIdMatoGrossoSul}'),
        ('Selvíria', '${stateIdMatoGrossoSul}'),
        ('Sete Quedas', '${stateIdMatoGrossoSul}'),
        ('Sidrolândia', '${stateIdMatoGrossoSul}'),
        ('Sonora', '${stateIdMatoGrossoSul}'),
        ('Tacuru', '${stateIdMatoGrossoSul}'),
        ('Taquarussu', '${stateIdMatoGrossoSul}'),
        ('Terenos', '${stateIdMatoGrossoSul}'),
        ('Três Lagoas', '${stateIdMatoGrossoSul}'),
        ('Vicentina', '${stateIdMatoGrossoSul}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdMatoGrossoSul = '126e7c88-c3e2-4199-a4ad-187110f352d5';

    await queryRunner.query(`
      DELETE FROM cities WHERE state_id = '${stateIdMatoGrossoSul}';
    `);
  }
}
