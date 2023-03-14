import { MigrationInterface, QueryRunner } from 'typeorm'

export class addcategoryid1678752095996 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE "app"."message" ADD "categoryId" integer`)
    queryRunner.query(
      `ALTER TABLE "app"."message" ADD CONSTRAINT "FK_7eaf14b0211d5bfb62feb9c97b6" FOREIGN KEY ("categoryId") REFERENCES "app"."category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // TODO: add drop changes
  }
}
