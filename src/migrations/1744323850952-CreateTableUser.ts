import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUser1744323850952 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '100',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '150',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'varchar',
            length: '14',
            isNullable: false,
            isUnique: true,
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '20',
            isNullable: true,
          },
          {
            name: 'date_of_birth',
            type: 'timestamp',
            length: '10',
            isNullable: false,
          },
          {
            name: 'age',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'type_user',
            type: 'enum',
            enum: ['USER', 'ADMIN', 'SELLER'],
            isNullable: false,
            default: `'USER'`,
          },
          {
            name: 'gender',
            type: 'enum',
            enum: ['MALE', 'FEMALE'],
            isNullable: false,
            default: `'MALE'`,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
