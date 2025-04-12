import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateCeara1744426536613
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdCeara = 'e53d1c34-8577-41a1-8596-f2fddfd70cb5';

    await queryRunner.query(`
            INSERT INTO cities("name", "state_id") VALUES
            ('Abaiara', '${stateIdCeara}'),
            ('Acarape', '${stateIdCeara}'),
            ('Acaraú', '${stateIdCeara}'),
            ('Acopiara', '${stateIdCeara}'),
            ('Aiuaba', '${stateIdCeara}'),
            ('Alcântaras', '${stateIdCeara}'),
            ('Altaneira', '${stateIdCeara}'),
            ('Alto Santo', '${stateIdCeara}'),
            ('Amontada', '${stateIdCeara}'),
            ('Antonina do Norte', '${stateIdCeara}'),
            ('Apuiarés', '${stateIdCeara}'),
            ('Aquiraz', '${stateIdCeara}'),
            ('Aracati', '${stateIdCeara}'),
            ('Aracoiaba', '${stateIdCeara}'),
            ('Ararendá', '${stateIdCeara}'),
            ('Araripe', '${stateIdCeara}'),
            ('Aratuba', '${stateIdCeara}'),
            ('Arneiroz', '${stateIdCeara}'),
            ('Assaré', '${stateIdCeara}'),
            ('Aurora', '${stateIdCeara}'),
            ('Baixio', '${stateIdCeara}'),
            ('Banabuiú', '${stateIdCeara}'),
            ('Barbalha', '${stateIdCeara}'),
            ('Barreira', '${stateIdCeara}'),
            ('Barro', '${stateIdCeara}'),
            ('Barroquinha', '${stateIdCeara}'),
            ('Baturité', '${stateIdCeara}'),
            ('Beberibe', '${stateIdCeara}'),
            ('Bela Cruz', '${stateIdCeara}'),
            ('Boa Viagem', '${stateIdCeara}'),
            ('Brejo Santo', '${stateIdCeara}'),
            ('Camocim', '${stateIdCeara}'),
            ('Campos Sales', '${stateIdCeara}'),
            ('Canindé', '${stateIdCeara}'),
            ('Capistrano', '${stateIdCeara}'),
            ('Caridade', '${stateIdCeara}'),
            ('Cariré', '${stateIdCeara}'),
            ('Caririaçu', '${stateIdCeara}'),
            ('Cariús', '${stateIdCeara}'),
            ('Carnaubal', '${stateIdCeara}'),
            ('Cascavel', '${stateIdCeara}'),
            ('Catarina', '${stateIdCeara}'),
            ('Catunda', '${stateIdCeara}'),
            ('Caucaia', '${stateIdCeara}'),
            ('Cedro', '${stateIdCeara}'),
            ('Chaval', '${stateIdCeara}'),
            ('Choró', '${stateIdCeara}'),
            ('Chorozinho', '${stateIdCeara}'),
            ('Coreaú', '${stateIdCeara}'),
            ('Crateús', '${stateIdCeara}'),
            ('Crato', '${stateIdCeara}'),
            ('Croatá', '${stateIdCeara}'),
            ('Cruz', '${stateIdCeara}'),
            ('Deputado Irapuan Pinheiro', '${stateIdCeara}'),
            ('Ererê', '${stateIdCeara}'),
            ('Eusébio', '${stateIdCeara}'),
            ('Farias Brito', '${stateIdCeara}'),
            ('Forquilha', '${stateIdCeara}'),
            ('Fortaleza', '${stateIdCeara}'),
            ('Fortim', '${stateIdCeara}'),
            ('Frecheirinha', '${stateIdCeara}'),
            ('General Sampaio', '${stateIdCeara}'),
            ('Graça', '${stateIdCeara}'),
            ('Granja', '${stateIdCeara}'),
            ('Granjeiro', '${stateIdCeara}'),
            ('Groaíras', '${stateIdCeara}'),
            ('Guaiúba', '${stateIdCeara}'),
            ('Guaraciaba do Norte', '${stateIdCeara}'),
            ('Guaramiranga', '${stateIdCeara}'),
            ('Hidrolândia', '${stateIdCeara}'),
            ('Horizonte', '${stateIdCeara}'),
            ('Ibaretama', '${stateIdCeara}'),
            ('Ibiapina', '${stateIdCeara}'),
            ('Ibicuitinga', '${stateIdCeara}'),
            ('Icapuí', '${stateIdCeara}'),
            ('Icó', '${stateIdCeara}'),
            ('Iguatu', '${stateIdCeara}'),
            ('Independência', '${stateIdCeara}'),
            ('Ipaporanga', '${stateIdCeara}'),
            ('Ipaumirim', '${stateIdCeara}'),
            ('Ipu', '${stateIdCeara}'),
            ('Ipueiras', '${stateIdCeara}'),
            ('Iracema', '${stateIdCeara}'),
            ('Irauçuba', '${stateIdCeara}'),
            ('Itaiçaba', '${stateIdCeara}'),
            ('Itaitinga', '${stateIdCeara}'),
            ('Itapagé', '${stateIdCeara}'),
            ('Itapipoca', '${stateIdCeara}'),
            ('Itapiúna', '${stateIdCeara}'),
            ('Itarema', '${stateIdCeara}'),
            ('Itatira', '${stateIdCeara}'),
            ('Jaguaretama', '${stateIdCeara}'),
            ('Jaguaribara', '${stateIdCeara}'),
            ('Jaguaribe', '${stateIdCeara}'),
            ('Jaguaruana', '${stateIdCeara}'),
            ('Jardim', '${stateIdCeara}'),
            ('Jati', '${stateIdCeara}'),
            ('Jijoca de Jericoacoara', '${stateIdCeara}'),
            ('Juazeiro do Norte', '${stateIdCeara}'),
            ('Jucás', '${stateIdCeara}'),
            ('Lavras da Mangabeira', '${stateIdCeara}'),
            ('Limoeiro do Norte', '${stateIdCeara}'),
            ('Madalena', '${stateIdCeara}'),
            ('Maracanaú', '${stateIdCeara}'),
            ('Maranguape', '${stateIdCeara}'),
            ('Marco', '${stateIdCeara}'),
            ('Martinópole', '${stateIdCeara}'),
            ('Massapê', '${stateIdCeara}'),
            ('Mauriti', '${stateIdCeara}'),
            ('Meruoca', '${stateIdCeara}'),
            ('Milagres', '${stateIdCeara}'),
            ('Milhã', '${stateIdCeara}'),
            ('Miraíma', '${stateIdCeara}'),
            ('Missão Velha', '${stateIdCeara}'),
            ('Mombaça', '${stateIdCeara}'),
            ('Monsenhor Tabosa', '${stateIdCeara}'),
            ('Morada Nova', '${stateIdCeara}'),
            ('Moraújo', '${stateIdCeara}'),
            ('Morrinhos', '${stateIdCeara}'),
            ('Mucambo', '${stateIdCeara}'),
            ('Mulungu', '${stateIdCeara}'),
            ('Nova Olinda', '${stateIdCeara}'),
            ('Nova Russas', '${stateIdCeara}'),
            ('Novo Oriente', '${stateIdCeara}'),
            ('Ocara', '${stateIdCeara}'),
            ('Orós', '${stateIdCeara}'),
            ('Pacajus', '${stateIdCeara}'),
            ('Pacatuba', '${stateIdCeara}'),
            ('Pacoti', '${stateIdCeara}'),
            ('Pacujá', '${stateIdCeara}'),
            ('Palhano', '${stateIdCeara}'),
            ('Palmácia', '${stateIdCeara}'),
            ('Paracuru', '${stateIdCeara}'),
            ('Paraipaba', '${stateIdCeara}'),
            ('Parambu', '${stateIdCeara}'),
            ('Paramoti', '${stateIdCeara}'),
            ('Pedra Branca', '${stateIdCeara}'),
            ('Penaforte', '${stateIdCeara}'),
            ('Pentecoste', '${stateIdCeara}'),
            ('Pereiro', '${stateIdCeara}'),
            ('Pindoretama', '${stateIdCeara}'),
            ('Piquet Carneiro', '${stateIdCeara}'),
            ('Pires Ferreira', '${stateIdCeara}'),
            ('Poranga', '${stateIdCeara}'),
            ('Porteiras', '${stateIdCeara}'),
            ('Potengi', '${stateIdCeara}'),
            ('Potiretama', '${stateIdCeara}'),
            ('Quiterianópolis', '${stateIdCeara}'),
            ('Quixadá', '${stateIdCeara}'),
            ('Quixelô', '${stateIdCeara}'),
            ('Quixeramobim', '${stateIdCeara}'),
            ('Quixeré', '${stateIdCeara}'),
            ('Redenção', '${stateIdCeara}'),
            ('Reriutaba', '${stateIdCeara}'),
            ('Russas', '${stateIdCeara}'),
            ('Saboeiro', '${stateIdCeara}'),
            ('Salitre', '${stateIdCeara}'),
            ('Santa Quitéria', '${stateIdCeara}'),
            ('Santana do Acaraú', '${stateIdCeara}'),
            ('Santana do Cariri', '${stateIdCeara}'),
            ('São Benedito', '${stateIdCeara}'),
            ('São Gonçalo do Amarante', '${stateIdCeara}'),
            ('São João do Jaguaribe', '${stateIdCeara}'),
            ('São Luís do Curu', '${stateIdCeara}'),
            ('Senador Pompeu', '${stateIdCeara}'),
            ('Senador Sá', '${stateIdCeara}'),
            ('Sobral', '${stateIdCeara}'),
            ('Solonópole', '${stateIdCeara}'),
            ('Tabuleiro do Norte', '${stateIdCeara}'),
            ('Tamboril', '${stateIdCeara}'),
            ('Tarrafas', '${stateIdCeara}'),
            ('Tauá', '${stateIdCeara}'),
            ('Tejuçuoca', '${stateIdCeara}'),
            ('Tianguá', '${stateIdCeara}'),
            ('Trairi', '${stateIdCeara}'),
            ('Tururu', '${stateIdCeara}'),
            ('Ubajara', '${stateIdCeara}'),
            ('Umari', '${stateIdCeara}'),
            ('Umirim', '${stateIdCeara}'),
            ('Uruburetama', '${stateIdCeara}'),
            ('Uruoca', '${stateIdCeara}'),
            ('Varjota', '${stateIdCeara}'),
            ('Várzea Alegre', '${stateIdCeara}'),
            ('Viçosa do Ceará', '${stateIdCeara}');
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdCeara = 'e53d1c34-8577-41a1-8596-f2fddfd70cb5';

    await queryRunner.query(`
            DELETE FROM cities WHERE state_id = '${stateIdCeara}';
        `);
  }
}
