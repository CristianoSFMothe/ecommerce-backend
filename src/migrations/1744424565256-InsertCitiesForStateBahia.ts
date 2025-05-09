import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertCitiesForStateBahia1744424565256
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const stateIdBahia = '92efcc5e-2c2e-47ef-85e7-5569f5461df5';

    await queryRunner.query(`
      INSERT INTO cities(name, state_id) VALUES
        ('Alvarães', '${stateIdBahia}'),
        ('Amaturá', '${stateIdBahia}'),
        ('Anamã', '${stateIdBahia}'),
        ('Anori', '${stateIdBahia}'),
        ('Apuí', '${stateIdBahia}'),
        ('Atalaia do Norte', '${stateIdBahia}'),
        ('Autazes', '${stateIdBahia}'),
        ('Barcelos', '${stateIdBahia}'),
        ('Barreirinha', '${stateIdBahia}'),
        ('Benjamin Constant', '${stateIdBahia}'),
        ('Beruri', '${stateIdBahia}'),
        ('Boa Vista do Ramos', '${stateIdBahia}'),
        ('Boca do Acre', '${stateIdBahia}'),
        ('Borba', '${stateIdBahia}'),
        ('Caapiranga', '${stateIdBahia}'),
        ('Canutama', '${stateIdBahia}'),
        ('Carauari', '${stateIdBahia}'),
        ('Careiro', '${stateIdBahia}'),
        ('Careiro da Várzea', '${stateIdBahia}'),
        ('Coari', '${stateIdBahia}'),
        ('Codajás', '${stateIdBahia}'),
        ('Eirunepé', '${stateIdBahia}'),
        ('Envira', '${stateIdBahia}'),
        ('Fonte Boa', '${stateIdBahia}'),
        ('Guajará', '${stateIdBahia}'),
        ('Humaitá', '${stateIdBahia}'),
        ('Ipixuna', '${stateIdBahia}'),
        ('Iranduba', '${stateIdBahia}'),
        ('Itacoatiara', '${stateIdBahia}'),
        ('Itamarati', '${stateIdBahia}'),
        ('Itapiranga', '${stateIdBahia}'),
        ('Japurá', '${stateIdBahia}'),
        ('Juruá', '${stateIdBahia}'),
        ('Jutaí', '${stateIdBahia}'),
        ('Lábrea', '${stateIdBahia}'),
        ('Manacapuru', '${stateIdBahia}'),
        ('Manaquiri', '${stateIdBahia}'),
        ('Manaus', '${stateIdBahia}'),
        ('Manicoré', '${stateIdBahia}'),
        ('Maraã', '${stateIdBahia}'),
        ('Maués', '${stateIdBahia}'),
        ('Nhamundá', '${stateIdBahia}'),
        ('Nova Olinda do Norte', '${stateIdBahia}'),
        ('Novo Airão', '${stateIdBahia}'),
        ('Novo Aripuanã', '${stateIdBahia}'),
        ('Parintins', '${stateIdBahia}'),
        ('Pauini', '${stateIdBahia}'),
        ('Presidente Figueiredo', '${stateIdBahia}'),
        ('Rio Preto da Eva', '${stateIdBahia}'),
        ('Santa Isabel do Rio Negro', '${stateIdBahia}'),
        ('Santo Antônio do Içá', '${stateIdBahia}'),
        ('São Gabriel da Cachoeira', '${stateIdBahia}'),
        ('São Paulo de Olivença', '${stateIdBahia}'),
        ('São Sebastião do Uatumã', '${stateIdBahia}'),
        ('Silves', '${stateIdBahia}'),
        ('Tabatinga', '${stateIdBahia}'),
        ('Tapauá', '${stateIdBahia}'),
        ('Tefé', '${stateIdBahia}'),
        ('Tonantins', '${stateIdBahia}'),
        ('Uarini', '${stateIdBahia}'),
        ('Urucará', '${stateIdBahia}'),
        ('Urucurituba', '${stateIdBahia}'),
        ('Boa Vista do Tupim', '${stateIdBahia}'),
        ('Bom Jesus da Lapa', '${stateIdBahia}'),
        ('Bom Jesus da Serra', '${stateIdBahia}'),
        ('Boninal', '${stateIdBahia}'),
        ('Bonito', '${stateIdBahia}'),
        ('Boquira', '${stateIdBahia}'),
        ('Botuporã', '${stateIdBahia}'),
        ('Brejões', '${stateIdBahia}'),
        ('Brejolândia', '${stateIdBahia}'),
        ('Brotas de Macaúbas', '${stateIdBahia}'),
        ('Brumado', '${stateIdBahia}'),
        ('Buerarema', '${stateIdBahia}'),
        ('Buritirama', '${stateIdBahia}'),
        ('Caatiba', '${stateIdBahia}'),
        ('Cabaceiras do Paraguaçu', '${stateIdBahia}'),
        ('Cachoeira', '${stateIdBahia}'),
        ('Caculé', '${stateIdBahia}'),
        ('Caém', '${stateIdBahia}'),
        ('Caetanos', '${stateIdBahia}'),
        ('Caetité', '${stateIdBahia}'),
        ('Cafarnaum', '${stateIdBahia}'),
        ('Cairu', '${stateIdBahia}'),
        ('Caldeirão Grande', '${stateIdBahia}'),
        ('Camacan', '${stateIdBahia}'),
        ('Camaçari', '${stateIdBahia}'),
        ('Camamu', '${stateIdBahia}'),
        ('Campo Alegre de Lourdes', '${stateIdBahia}'),
        ('Campo Formoso', '${stateIdBahia}'),
        ('Canápolis', '${stateIdBahia}'),
        ('Canarana', '${stateIdBahia}'),
        ('Canavieiras', '${stateIdBahia}'),
        ('Candeal', '${stateIdBahia}'),
        ('Candeias', '${stateIdBahia}'),
        ('Candiba', '${stateIdBahia}'),
        ('Cândido Sales', '${stateIdBahia}'),
        ('Cansanção', '${stateIdBahia}'),
        ('Canudos', '${stateIdBahia}'),
        ('Capela do Alto Alegre', '${stateIdBahia}'),
        ('Capim Grosso', '${stateIdBahia}'),
        ('Caraíbas', '${stateIdBahia}'),
        ('Caravelas', '${stateIdBahia}'),
        ('Cardeal da Silva', '${stateIdBahia}'),
        ('Carinhanha', '${stateIdBahia}'),
        ('Casa Nova', '${stateIdBahia}'),
        ('Castro Alves', '${stateIdBahia}'),
        ('Catolândia', '${stateIdBahia}'),
        ('Catu', '${stateIdBahia}'),
        ('Caturama', '${stateIdBahia}'),
        ('Central', '${stateIdBahia}'),
        ('Chorrochó', '${stateIdBahia}'),
        ('Cícero Dantas', '${stateIdBahia}'),
        ('Cipó', '${stateIdBahia}'),
        ('Coaraci', '${stateIdBahia}'),
        ('Cocos', '${stateIdBahia}'),
        ('Conceição da Feira', '${stateIdBahia}'),
        ('Conceição do Almeida', '${stateIdBahia}'),
        ('Conceição do Coité', '${stateIdBahia}'),
        ('Conceição do Jacuípe', '${stateIdBahia}'),
        ('Conde', '${stateIdBahia}'),
        ('Condeúba', '${stateIdBahia}'),
        ('Contendas do Sincorá', '${stateIdBahia}'),
        ('Coração de Maria', '${stateIdBahia}'),
        ('Cordeiros', '${stateIdBahia}'),
        ('Coribe', '${stateIdBahia}'),
        ('Coronel João Sá', '${stateIdBahia}'),
        ('Correntina', '${stateIdBahia}'),
        ('Cotegipe', '${stateIdBahia}'),
        ('Cravolândia', '${stateIdBahia}'),
        ('Crisópolis', '${stateIdBahia}'),
        ('Cristópolis', '${stateIdBahia}'),
        ('Cruz das Almas', '${stateIdBahia}'),
        ('Curaçá', '${stateIdBahia}'),
        ('Dário Meira', '${stateIdBahia}'),
        ('Dias d\`Ávila', '${stateIdBahia}'),
        ('Dom Basílio', '${stateIdBahia}'),
        ('Dom Macedo Costa', '${stateIdBahia}'),
        ('Elísio Medrado', '${stateIdBahia}'),
        ('Encruzilhada', '${stateIdBahia}'),
        ('Entre Rios', '${stateIdBahia}'),
        ('Érico Cardoso', '${stateIdBahia}'),
        ('Esplanada', '${stateIdBahia}'),
        ('Euclides da Cunha', '${stateIdBahia}'),
        ('Eunápolis', '${stateIdBahia}'),
        ('Fátima', '${stateIdBahia}'),
        ('Feira da Mata', '${stateIdBahia}'),
        ('Feira de Santana', '${stateIdBahia}'),
        ('Filadélfia', '${stateIdBahia}'),
        ('Firmino Alves', '${stateIdBahia}'),
        ('Floresta Azul', '${stateIdBahia}'),
        ('Formosa do Rio Preto', '${stateIdBahia}'),
        ('Gandu', '${stateIdBahia}'),
        ('Gavião', '${stateIdBahia}'),
        ('Gentio do Ouro', '${stateIdBahia}'),
        ('Glória', '${stateIdBahia}'),
        ('Gongogi', '${stateIdBahia}'),
        ('Governador Mangabeira', '${stateIdBahia}'),
        ('Guajeru', '${stateIdBahia}'),
        ('Guanambi', '${stateIdBahia}'),
        ('Guaratinga', '${stateIdBahia}'),
        ('Heliópolis', '${stateIdBahia}'),
        ('Iaçu', '${stateIdBahia}'),
        ('Ibiassucê', '${stateIdBahia}'),
        ('Ibicaraí', '${stateIdBahia}'),
        ('Ibicoara', '${stateIdBahia}'),
        ('Ibicuí', '${stateIdBahia}'),
        ('Ibipeba', '${stateIdBahia}'),
        ('Ibipitanga', '${stateIdBahia}'),
        ('Ibiquera', '${stateIdBahia}'),
        ('Ibirapitanga', '${stateIdBahia}'),
        ('Ibirapuã', '${stateIdBahia}'),
        ('Ibirataia', '${stateIdBahia}'),
        ('Ibitiara', '${stateIdBahia}'),
        ('Ibititá', '${stateIdBahia}'),
        ('Ibotirama', '${stateIdBahia}'),
        ('Ichu', '${stateIdBahia}'),
        ('Igaporã', '${stateIdBahia}'),
        ('Igrapiúna', '${stateIdBahia}'),
        ('Iguaí', '${stateIdBahia}'),
        ('Ilhéus', '${stateIdBahia}'),
        ('Inhambupe', '${stateIdBahia}'),
        ('Ipecaetá', '${stateIdBahia}'),
        ('Ipiaú', '${stateIdBahia}'),
        ('Ipirá', '${stateIdBahia}'),
        ('Ipupiara', '${stateIdBahia}'),
        ('Irajuba', '${stateIdBahia}'),
        ('Iramaia', '${stateIdBahia}'),
        ('Iraquara', '${stateIdBahia}'),
        ('Irará', '${stateIdBahia}'),
        ('Irecê', '${stateIdBahia}'),
        ('Itabela', '${stateIdBahia}'),
        ('Itaberaba', '${stateIdBahia}'),
        ('Itabuna', '${stateIdBahia}'),
        ('Itacaré', '${stateIdBahia}'),
        ('Itaeté', '${stateIdBahia}'),
        ('Itagi', '${stateIdBahia}'),
        ('Itagibá', '${stateIdBahia}'),
        ('Itagimirim', '${stateIdBahia}'),
        ('Itaguaçu da Bahia', '${stateIdBahia}'),
        ('Itaju do Colônia', '${stateIdBahia}'),
        ('Itajuípe', '${stateIdBahia}'),
        ('Itamaraju', '${stateIdBahia}'),
        ('Itamari', '${stateIdBahia}'),
        ('Itambé', '${stateIdBahia}'),
        ('Itanagra', '${stateIdBahia}'),
        ('Itanhém', '${stateIdBahia}'),
        ('Itaparica', '${stateIdBahia}'),
        ('Itapé', '${stateIdBahia}'),
        ('Itapebi', '${stateIdBahia}'),
        ('Itapetinga', '${stateIdBahia}'),
        ('Itapicuru', '${stateIdBahia}'),
        ('Itapitanga', '${stateIdBahia}'),
        ('Itaquara', '${stateIdBahia}'),
        ('Itarantim', '${stateIdBahia}'),
        ('Itatim', '${stateIdBahia}'),
        ('Itiruçu', '${stateIdBahia}'),
        ('Itiúba', '${stateIdBahia}'),
        ('Itororó', '${stateIdBahia}'),
        ('Ituaçu', '${stateIdBahia}'),
        ('Ituberá', '${stateIdBahia}'),
        ('Iuiú', '${stateIdBahia}'),
        ('Jaborandi', '${stateIdBahia}'),
        ('Jacaraci', '${stateIdBahia}'),
        ('Jacobina', '${stateIdBahia}'),
        ('Jaguaquara', '${stateIdBahia}'),
        ('Jaguarari', '${stateIdBahia}'),
        ('Jaguaripe', '${stateIdBahia}'),
        ('Jandaíra', '${stateIdBahia}'),
        ('Jequié', '${stateIdBahia}'),
        ('Jeremoabo', '${stateIdBahia}'),
        ('Jiquiriçá', '${stateIdBahia}'),
        ('Jitaúna', '${stateIdBahia}'),
        ('João Dourado', '${stateIdBahia}'),
        ('Juazeiro', '${stateIdBahia}'),
        ('Jucuruçu', '${stateIdBahia}'),
        ('Jussara', '${stateIdBahia}'),
        ('Jussari', '${stateIdBahia}'),
        ('Jussiape', '${stateIdBahia}'),
        ('Lafaiete Coutinho', '${stateIdBahia}'),
        ('Lagoa Real', '${stateIdBahia}'),
        ('Laje', '${stateIdBahia}'),
        ('Lajedão', '${stateIdBahia}'),
        ('Lajedinho', '${stateIdBahia}'),
        ('Lajedo do Tabocal', '${stateIdBahia}'),
        ('Lamarão', '${stateIdBahia}'),
        ('Lapão', '${stateIdBahia}'),
        ('Lauro de Freitas', '${stateIdBahia}'),
        ('Lençóis', '${stateIdBahia}'),
        ('Licínio de Almeida', '${stateIdBahia}'),
        ('Livramento de Nossa Senhora', '${stateIdBahia}'),
        ('Luís Eduardo Magalhães', '${stateIdBahia}'),
        ('Macajuba', '${stateIdBahia}'),
        ('Macarani', '${stateIdBahia}'),
        ('Macaúbas', '${stateIdBahia}'),
        ('Macururé', '${stateIdBahia}'),
        ('Madre de Deus', '${stateIdBahia}'),
        ('Maetinga', '${stateIdBahia}'),
        ('Maiquinique', '${stateIdBahia}'),
        ('Mairi', '${stateIdBahia}'),
        ('Malhada', '${stateIdBahia}'),
        ('Malhada de Pedras', '${stateIdBahia}'),
        ('Manoel Vitorino', '${stateIdBahia}'),
        ('Mansidão', '${stateIdBahia}'),
        ('Maracás', '${stateIdBahia}'),
        ('Maragogipe', '${stateIdBahia}'),
        ('Maraú', '${stateIdBahia}'),
        ('Marcionílio Souza', '${stateIdBahia}'),
        ('Mascote', '${stateIdBahia}'),
        ('Mata de São João', '${stateIdBahia}'),
        ('Matina', '${stateIdBahia}'),
        ('Medeiros Neto', '${stateIdBahia}'),
        ('Miguel Calmon', '${stateIdBahia}'),
        ('Milagres', '${stateIdBahia}'),
        ('Mirangaba', '${stateIdBahia}'),
        ('Mirante', '${stateIdBahia}'),
        ('Monte Santo', '${stateIdBahia}'),
        ('Morpará', '${stateIdBahia}'),
        ('Morro do Chapéu', '${stateIdBahia}'),
        ('Mortugaba', '${stateIdBahia}'),
        ('Mucugê', '${stateIdBahia}'),
        ('Mucuri', '${stateIdBahia}'),
        ('Mulungu do Morro', '${stateIdBahia}'),
        ('Mundo Novo', '${stateIdBahia}'),
        ('Muniz Ferreira', '${stateIdBahia}'),
        ('Muquém de São Francisco', '${stateIdBahia}'),
        ('Muritiba', '${stateIdBahia}'),
        ('Mutuípe', '${stateIdBahia}'),
        ('Nazaré', '${stateIdBahia}'),
        ('Nilo Peçanha', '${stateIdBahia}'),
        ('Nordestina', '${stateIdBahia}'),
        ('Nova Canaã', '${stateIdBahia}'),
        ('Nova Fátima', '${stateIdBahia}'),
        ('Nova Ibiá', '${stateIdBahia}'),
        ('Nova Itarana', '${stateIdBahia}'),
        ('Nova Redenção', '${stateIdBahia}'),
        ('Nova Soure', '${stateIdBahia}'),
        ('Nova Viçosa', '${stateIdBahia}'),
        ('Novo Horizonte', '${stateIdBahia}'),
        ('Novo Triunfo', '${stateIdBahia}'),
        ('Olindina', '${stateIdBahia}'),
        ('Oliveira dos Brejinhos', '${stateIdBahia}'),
        ('Ouriçangas', '${stateIdBahia}'),
        ('Ourolândia', '${stateIdBahia}'),
        ('Palmas de Monte Alto', '${stateIdBahia}'),
        ('Palmeiras', '${stateIdBahia}'),
        ('Paramirim', '${stateIdBahia}'),
        ('Paratinga', '${stateIdBahia}'),
        ('Paripiranga', '${stateIdBahia}'),
        ('Pau Brasil', '${stateIdBahia}'),
        ('Paulo Afonso', '${stateIdBahia}'),
        ('Pé de Serra', '${stateIdBahia}'),
        ('Pedrão', '${stateIdBahia}'),
        ('Pedro Alexandre', '${stateIdBahia}'),
        ('Piatã', '${stateIdBahia}'),
        ('Pilão Arcado', '${stateIdBahia}'),
        ('Pindaí', '${stateIdBahia}'),
        ('Pindobaçu', '${stateIdBahia}'),
        ('Pintadas', '${stateIdBahia}'),
        ('Piraí do Norte', '${stateIdBahia}'),
        ('Piripá', '${stateIdBahia}'),
        ('Piritiba', '${stateIdBahia}'),
        ('Planaltino', '${stateIdBahia}'),
        ('Planalto', '${stateIdBahia}'),
        ('Poções', '${stateIdBahia}'),
        ('Pojuca', '${stateIdBahia}'),
        ('Ponto Novo', '${stateIdBahia}'),
        ('Porto Seguro', '${stateIdBahia}'),
        ('Potiraguá', '${stateIdBahia}'),
        ('Prado', '${stateIdBahia}'),
        ('Presidente Dutra', '${stateIdBahia}'),
        ('Presidente Jânio Quadros', '${stateIdBahia}'),
        ('Presidente Tancredo Neves', '${stateIdBahia}'),
        ('Queimadas', '${stateIdBahia}'),
        ('Quijingue', '${stateIdBahia}'),
        ('Quixabeira', '${stateIdBahia}'),
        ('Rafael Jambeiro', '${stateIdBahia}'),
        ('Remanso', '${stateIdBahia}'),
        ('Retirolândia', '${stateIdBahia}'),
        ('Riachão das Neves', '${stateIdBahia}'),
        ('Riachão do Jacuípe', '${stateIdBahia}'),
        ('Riacho de Santana', '${stateIdBahia}'),
        ('Ribeira do Amparo', '${stateIdBahia}'),
        ('Ribeira do Pombal', '${stateIdBahia}'),
        ('Ribeirão do Largo', '${stateIdBahia}'),
        ('Rio de Contas', '${stateIdBahia}'),
        ('Rio do Antônio', '${stateIdBahia}'),
        ('Rio do Pires', '${stateIdBahia}'),
        ('Rio Real', '${stateIdBahia}'),
        ('Rodelas', '${stateIdBahia}'),
        ('Ruy Barbosa', '${stateIdBahia}'),
        ('Salinas da Margarida', '${stateIdBahia}'),
        ('Salvador', '${stateIdBahia}'),
        ('Santa Bárbara', '${stateIdBahia}'),
        ('Santa Brígida', '${stateIdBahia}'),
        ('Santa Cruz Cabrália', '${stateIdBahia}'),
        ('Santa Cruz da Vitória', '${stateIdBahia}'),
        ('Santa Inês', '${stateIdBahia}'),
        ('Santa Luzia', '${stateIdBahia}'),
        ('Santa Maria da Vitória', '${stateIdBahia}'),
        ('Santa Rita de Cássia', '${stateIdBahia}'),
        ('Santa Teresinha', '${stateIdBahia}'),
        ('Santaluz', '${stateIdBahia}'),
        ('Santana', '${stateIdBahia}'),
        ('Santanópolis', '${stateIdBahia}'),
        ('Santo Amaro', '${stateIdBahia}'),
        ('Santo Antônio de Jesus', '${stateIdBahia}'),
        ('Santo Estêvão', '${stateIdBahia}'),
        ('São Desidério', '${stateIdBahia}'),
        ('São Domingos', '${stateIdBahia}'),
        ('São Felipe', '${stateIdBahia}'),
        ('São Félix', '${stateIdBahia}'),
        ('São Félix do Coribe', '${stateIdBahia}'),
        ('São Francisco do Conde', '${stateIdBahia}'),
        ('São Gabriel', '${stateIdBahia}'),
        ('São Gonçalo dos Campos', '${stateIdBahia}'),
        ('São José da Vitória', '${stateIdBahia}'),
        ('São José do Jacuípe', '${stateIdBahia}'),
        ('São Miguel das Matas', '${stateIdBahia}'),
        ('São Sebastião do Passé', '${stateIdBahia}'),
        ('Sapeaçu', '${stateIdBahia}'),
        ('Sátiro Dias', '${stateIdBahia}'),
        ('Saubara', '${stateIdBahia}'),
        ('Saúde', '${stateIdBahia}'),
        ('Seabra', '${stateIdBahia}'),
        ('Sebastião Laranjeiras', '${stateIdBahia}'),
        ('Senhor do Bonfim', '${stateIdBahia}'),
        ('Sento Sé', '${stateIdBahia}'),
        ('Serra do Ramalho', '${stateIdBahia}'),
        ('Serra Dourada', '${stateIdBahia}'),
        ('Serra Preta', '${stateIdBahia}'),
        ('Serrinha', '${stateIdBahia}'),
        ('Serrolândia', '${stateIdBahia}'),
        ('Simões Filho', '${stateIdBahia}'),
        ('Sítio do Mato', '${stateIdBahia}'),
        ('Sítio do Quinto', '${stateIdBahia}'),
        ('Sobradinho', '${stateIdBahia}'),
        ('Souto Soares', '${stateIdBahia}'),
        ('Tabocas do Brejo Velho', '${stateIdBahia}'),
        ('Tanhaçu', '${stateIdBahia}'),
        ('Tanque Novo', '${stateIdBahia}'),
        ('Tanquinho', '${stateIdBahia}'),
        ('Taperoá', '${stateIdBahia}'),
        ('Tapiramutá', '${stateIdBahia}'),
        ('Teixeira de Freitas', '${stateIdBahia}'),
        ('Teodoro Sampaio', '${stateIdBahia}'),
        ('Teofilândia', '${stateIdBahia}'),
        ('Teolândia', '${stateIdBahia}'),
        ('Terra Nova', '${stateIdBahia}'),
        ('Tremedal', '${stateIdBahia}'),
        ('Tucano', '${stateIdBahia}'),
        ('Uauá', '${stateIdBahia}'),
        ('Ubaíra', '${stateIdBahia}'),
        ('Ubaitaba', '${stateIdBahia}'),
        ('Ubatã', '${stateIdBahia}'),
        ('Uibaí', '${stateIdBahia}'),
        ('Umburanas', '${stateIdBahia}'),
        ('Una', '${stateIdBahia}'),
        ('Urandi', '${stateIdBahia}'),
        ('Uruçuca', '${stateIdBahia}'),
        ('Utinga', '${stateIdBahia}'),
        ('Valença', '${stateIdBahia}'),
        ('Valente', '${stateIdBahia}'),
        ('Várzea da Roça', '${stateIdBahia}'),
        ('Várzea do Poço', '${stateIdBahia}'),
        ('Várzea Nova', '${stateIdBahia}'),
        ('Varzedo', '${stateIdBahia}'),
        ('Vera Cruz', '${stateIdBahia}'),
        ('Vereda', '${stateIdBahia}'),
        ('Vitória da Conquista', '${stateIdBahia}'),
        ('Wagner', '${stateIdBahia}'),
        ('Wanderley', '${stateIdBahia}'),
        ('Wenceslau Guimarães', '${stateIdBahia}'),
        ('Xique-Xique', '${stateIdBahia}');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const stateIdAmazonas = '6d705d1f-2a93-48e7-8ed5-f3fbd99f5ccf';
    await queryRunner.query(
      `DELETE FROM cities WHERE state_id = '${stateIdAmazonas}';`,
    );
  }
}
