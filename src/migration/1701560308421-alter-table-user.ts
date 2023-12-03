import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUser1701560308421 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
          ALTER TABLE public.user
          ADD CONSTRAINT unique_email UNIQUE (email);
          
          ALTER TABLE public.user
          ADD CONSTRAINT unique_cpf UNIQUE (cpf);   
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
