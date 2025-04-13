import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertStates1744423656700 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO states (id, name, uf) VALUES
        ('c3f260a3-b7d6-4c82-bf2a-9668a1369402', 'Acre', 'AC'),
        ('e3dc3f6f-9d24-4a75-8013-abc4be4f749e', 'Alagoas', 'AL'),
        ('6d705d1f-2a93-48e7-8ed5-f3fbd99f5ccf', 'Amazonas', 'AM'),
        ('f77ae183-76e4-4764-b5ee-1cf3ff471f95', 'Amapá', 'AP'),
        ('92efcc5e-2c2e-47ef-85e7-5569f5461df5', 'Bahia', 'BA'),
        ('e53d1c34-8577-41a1-8596-f2fddfd70cb5', 'Ceará', 'CE'),
        ('2f658169-e46e-4c63-b7de-d88c45dc42b1', 'Distrito Federal', 'DF'),
        ('bc91a57f-ca49-42e7-abde-6cf34a0fe1d2', 'Espírito Santo', 'ES'),
        ('a1f81c63-9c30-46f1-a4bb-f8b476eea010', 'Goiás', 'GO'),
        ('adb2b4fa-e63a-4433-9cb0-bbdc3b33d0b5', 'Maranhão', 'MA'),
        ('df6bc32a-92d4-4691-b8ba-ec3fa2b27c10', 'Minas Gerais', 'MG'),
        ('126e7c88-c3e2-4199-a4ad-187110f352d5', 'Mato Grosso do Sul', 'MS'),
        ('64a2b6c4-c020-4a86-b8a5-3fa92c0629fc', 'Mato Grosso', 'MT'),
        ('c185c45e-3f6d-4f20-857a-70b1f358c370', 'Pará', 'PA'),
        ('b6de0e29-8660-4e58-9dfb-c3172a9079e6', 'Paraíba', 'PB'),
        ('d06094c1-b1d4-41a3-9c29-fc9942451484', 'Pernambuco', 'PE'),
        ('1e95ac7f-c3d3-4e4c-b1b3-7d65ae8bb2fd', 'Piauí', 'PI'),
        ('926a897b-e272-473f-8c66-6c8dc0adddab', 'Paraná', 'PR'),
        ('b71b7d6f-9861-4d0b-b1f4-d3de5538e771', 'Rio de Janeiro', 'RJ'),
        ('3e69f59d-79ec-41eb-8de5-f14e31c2ab3e', 'Rio Grande do Norte', 'RN'),
        ('94c6fd55-0059-4423-9cf2-dc7a24ebd785', 'Rondônia', 'RO'),
        ('2b0d83a9-524f-4212-8d95-1437fcfc53e0', 'Roraima', 'RR'),
        ('c2394216-c1dc-4d42-9fe1-1444e57ff9d9', 'Rio Grande do Sul', 'RS'),
        ('5279a78c-2706-4e84-bd0b-5b5c994de0d5', 'Santa Catarina', 'SC'),
        ('301fa5f0-8312-4bc6-a223-15569cfc8722', 'Sergipe', 'SE'),
        ('f8d648e6-6e29-4372-9a93-d279217a5ebd', 'São Paulo', 'SP'),
        ('5fa749ef-9d9a-4037-97c6-f145e3809a7d', 'Tocantins', 'TO');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM states;
    `);
  }
}
