import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertRootInUser1682873898501 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    INSERT INTO public."user"(
        name, email, cpf, type_user, phone, password)
        VALUES ('admin', 'admin@admin.com', '12345678901', 2, '31925325252', '$2b$10$nVTrxcM59M0M8PWPG4h/8eoIOng.XzIUTwn8fzBgVBsBbAnOxe3Ce');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
    DELETE FROM public."user"
        WHERE email like 'root@root.com';
    `);
  }
}
