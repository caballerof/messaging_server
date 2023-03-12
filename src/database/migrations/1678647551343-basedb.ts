import { MigrationInterface, QueryRunner } from 'typeorm'

export class basedb1678647551343 implements MigrationInterface {
  name = 'basedb1678647551343'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "app"."user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying(50) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "app"."category" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" character varying(50) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "app"."message" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE NULL, CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "app"."log" ("id" SERIAL NOT NULL, "time" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE NOT NULL, "userId" integer, "channelId" integer, "categoryId" integer, "messageId" integer, CONSTRAINT "PK_350604cbdf991d5930d9e618fbd" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "app"."channel" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" character varying(50) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP WITH TIME ZONE NULL, CONSTRAINT "PK_590f33ee6ee7d76437acf362e39" PRIMARY KEY ("id"))`,
    )
    await queryRunner.query(
      `CREATE TABLE "app"."user_categories_category" ("userId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_5a62c2d9eba0ec02cda365b9ab7" PRIMARY KEY ("userId", "categoryId"))`,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_331665e2e7d360bf2b715dfeea" ON "app"."user_categories_category" ("userId") `,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_936afd72159ca6d1143ab3d66a" ON "app"."user_categories_category" ("categoryId") `,
    )
    await queryRunner.query(
      `CREATE TABLE "app"."user_channels_channel" ("userId" integer NOT NULL, "channelId" integer NOT NULL, CONSTRAINT "PK_01cb58c2f493472e335712d76c7" PRIMARY KEY ("userId", "channelId"))`,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_9c701cabd952769d5c75844343" ON "app"."user_channels_channel" ("userId") `,
    )
    await queryRunner.query(
      `CREATE INDEX "IDX_ab9fe5d9528e30e09b462c345d" ON "app"."user_channels_channel" ("channelId") `,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."log" ADD CONSTRAINT "FK_cea2ed3a494729d4b21edbd2983" FOREIGN KEY ("userId") REFERENCES "app"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."log" ADD CONSTRAINT "FK_a98faeeb17ecc31e8726de68916" FOREIGN KEY ("channelId") REFERENCES "app"."channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."log" ADD CONSTRAINT "FK_3c35e0a8b2c3c8736c7b6e64d3f" FOREIGN KEY ("categoryId") REFERENCES "app"."category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."log" ADD CONSTRAINT "FK_29cb2127fa3f0a437ddcdc171dd" FOREIGN KEY ("messageId") REFERENCES "app"."message"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."user_categories_category" ADD CONSTRAINT "FK_331665e2e7d360bf2b715dfeea9" FOREIGN KEY ("userId") REFERENCES "app"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."user_categories_category" ADD CONSTRAINT "FK_936afd72159ca6d1143ab3d66af" FOREIGN KEY ("categoryId") REFERENCES "app"."category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."user_channels_channel" ADD CONSTRAINT "FK_9c701cabd952769d5c75844343c" FOREIGN KEY ("userId") REFERENCES "app"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."user_channels_channel" ADD CONSTRAINT "FK_ab9fe5d9528e30e09b462c345d2" FOREIGN KEY ("channelId") REFERENCES "app"."channel"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "app"."user_channels_channel" DROP CONSTRAINT "FK_ab9fe5d9528e30e09b462c345d2"`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."user_channels_channel" DROP CONSTRAINT "FK_9c701cabd952769d5c75844343c"`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."user_categories_category" DROP CONSTRAINT "FK_936afd72159ca6d1143ab3d66af"`,
    )
    await queryRunner.query(
      `ALTER TABLE "app"."user_categories_category" DROP CONSTRAINT "FK_331665e2e7d360bf2b715dfeea9"`,
    )
    await queryRunner.query(`ALTER TABLE "app"."log" DROP CONSTRAINT "FK_29cb2127fa3f0a437ddcdc171dd"`)
    await queryRunner.query(`ALTER TABLE "app"."log" DROP CONSTRAINT "FK_3c35e0a8b2c3c8736c7b6e64d3f"`)
    await queryRunner.query(`ALTER TABLE "app"."log" DROP CONSTRAINT "FK_a98faeeb17ecc31e8726de68916"`)
    await queryRunner.query(`ALTER TABLE "app"."log" DROP CONSTRAINT "FK_cea2ed3a494729d4b21edbd2983"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_ab9fe5d9528e30e09b462c345d"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_9c701cabd952769d5c75844343"`)
    await queryRunner.query(`DROP TABLE "app"."user_channels_channel"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_936afd72159ca6d1143ab3d66a"`)
    await queryRunner.query(`DROP INDEX "public"."IDX_331665e2e7d360bf2b715dfeea"`)
    await queryRunner.query(`DROP TABLE "app"."user_categories_category"`)
    await queryRunner.query(`DROP TABLE "app"."channel"`)
    await queryRunner.query(`DROP TABLE "app"."log"`)
    await queryRunner.query(`DROP TABLE "app"."message"`)
    await queryRunner.query(`DROP TABLE "app"."category"`)
    await queryRunner.query(`DROP TABLE "app"."user"`)
  }
}
