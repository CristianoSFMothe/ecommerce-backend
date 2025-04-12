import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateEspiritoSanto1744427639065
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdEspiritoSanto = 'bc91a57f-ca49-42e7-abde-6cf34a0fe1d2';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Afonso Cláudio', '${stateIdEspiritoSanto}'),
        ('Água Doce do Norte', '${stateIdEspiritoSanto}'),
        ('Águia Branca', '${stateIdEspiritoSanto}'),
        ('Alegre', '${stateIdEspiritoSanto}'),
        ('Alfredo Chaves', '${stateIdEspiritoSanto}'),
        ('Alto Rio Novo', '${stateIdEspiritoSanto}'),
        ('Anchieta', '${stateIdEspiritoSanto}'),
        ('Apiacá', '${stateIdEspiritoSanto}'),
        ('Aracruz', '${stateIdEspiritoSanto}'),
        ('Atilio Vivacqua', '${stateIdEspiritoSanto}'),
        ('Baixo Guandu', '${stateIdEspiritoSanto}'),
        ('Barra de São Francisco', '${stateIdEspiritoSanto}'),
        ('Boa Esperança', '${stateIdEspiritoSanto}'),
        ('Bom Jesus do Norte', '${stateIdEspiritoSanto}'),
        ('Brejetuba', '${stateIdEspiritoSanto}'),
        ('Cachoeiro de Itapemirim', '${stateIdEspiritoSanto}'),
        ('Cariacica', '${stateIdEspiritoSanto}'),
        ('Castelo', '${stateIdEspiritoSanto}'),
        ('Colatina', '${stateIdEspiritoSanto}'),
        ('Conceição da Barra', '${stateIdEspiritoSanto}'),
        ('Conceição do Castelo', '${stateIdEspiritoSanto}'),
        ('Divino de São Lourenço', '${stateIdEspiritoSanto}'),
        ('Domingos Martins', '${stateIdEspiritoSanto}'),
        ('Dores do Rio Preto', '${stateIdEspiritoSanto}'),
        ('Ecoporanga', '${stateIdEspiritoSanto}'),
        ('Fundão', '${stateIdEspiritoSanto}'),
        ('Governador Lindenberg', '${stateIdEspiritoSanto}'),
        ('Guaçuí', '${stateIdEspiritoSanto}'),
        ('Guarapari', '${stateIdEspiritoSanto}'),
        ('Ibatiba', '${stateIdEspiritoSanto}'),
        ('Ibiraçu', '${stateIdEspiritoSanto}'),
        ('Ibitirama', '${stateIdEspiritoSanto}'),
        ('Iconha', '${stateIdEspiritoSanto}'),
        ('Irupi', '${stateIdEspiritoSanto}'),
        ('Itaguaçu', '${stateIdEspiritoSanto}'),
        ('Itapemirim', '${stateIdEspiritoSanto}'),
        ('Itarana', '${stateIdEspiritoSanto}'),
        ('Iúna', '${stateIdEspiritoSanto}'),
        ('Jaguaré', '${stateIdEspiritoSanto}'),
        ('Jerônimo Monteiro', '${stateIdEspiritoSanto}'),
        ('João Neiva', '${stateIdEspiritoSanto}'),
        ('Laranja da Terra', '${stateIdEspiritoSanto}'),
        ('Linhares', '${stateIdEspiritoSanto}'),
        ('Mantenópolis', '${stateIdEspiritoSanto}'),
        ('Marataízes', '${stateIdEspiritoSanto}'),
        ('Marechal Floriano', '${stateIdEspiritoSanto}'),
        ('Marilândia', '${stateIdEspiritoSanto}'),
        ('Mimoso do Sul', '${stateIdEspiritoSanto}'),
        ('Montanha', '${stateIdEspiritoSanto}'),
        ('Mucurici', '${stateIdEspiritoSanto}'),
        ('Muniz Freire', '${stateIdEspiritoSanto}'),
        ('Muqui', '${stateIdEspiritoSanto}'),
        ('Nova Venécia', '${stateIdEspiritoSanto}'),
        ('Pancas', '${stateIdEspiritoSanto}'),
        ('Pedro Canário', '${stateIdEspiritoSanto}'),
        ('Pinheiros', '${stateIdEspiritoSanto}'),
        ('Piúma', '${stateIdEspiritoSanto}'),
        ('Ponto Belo', '${stateIdEspiritoSanto}'),
        ('Presidente Kennedy', '${stateIdEspiritoSanto}'),
        ('Rio Bananal', '${stateIdEspiritoSanto}'),
        ('Rio Novo do Sul', '${stateIdEspiritoSanto}'),
        ('Santa Leopoldina', '${stateIdEspiritoSanto}'),
        ('Santa Maria de Jetibá', '${stateIdEspiritoSanto}'),
        ('Santa Teresa', '${stateIdEspiritoSanto}'),
        ('São Domingos do Norte', '${stateIdEspiritoSanto}'),
        ('São Gabriel da Palha', '${stateIdEspiritoSanto}'),
        ('São José do Calçado', '${stateIdEspiritoSanto}'),
        ('São Mateus', '${stateIdEspiritoSanto}'),
        ('São Roque do Canaã', '${stateIdEspiritoSanto}'),
        ('Serra', '${stateIdEspiritoSanto}'),
        ('Sooretama', '${stateIdEspiritoSanto}'),
        ('Vargem Alta', '${stateIdEspiritoSanto}'),
        ('Venda Nova do Imigrante', '${stateIdEspiritoSanto}'),
        ('Viana', '${stateIdEspiritoSanto}'),
        ('Vila Pavão', '${stateIdEspiritoSanto}'),
        ('Vila Valério', '${stateIdEspiritoSanto}'),
        ('Vila Velha', '${stateIdEspiritoSanto}'),
        ('Vitória', '${stateIdEspiritoSanto}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdEspiritoSanto = 'bc91a57f-ca49-42e7-abde-6cf34a0fe1d2';

    await queryRunner.query(`
      DELETE FROM cities WHERE state_id = '${stateIdEspiritoSanto}';
    `);
  }
}
