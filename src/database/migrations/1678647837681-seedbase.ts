import { MigrationInterface, QueryRunner } from 'typeorm'
import { CategorySeed } from '../seeds/categories.seed'
import { ChannelSeed } from '../seeds/channels.seed'

export class seedbse1678647837681 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const [sports, finance, movies] = CategorySeed
    const [sms, email, push] = ChannelSeed

    await queryRunner.query(
      `INSERT INTO "app"."category" (name, description) VALUES
                ('${sports.name}', '${sports.description}'),
                ('${finance.name}', '${finance.description}'),
                ('${movies.name}', '${movies.description}');`,
    )

    await queryRunner.query(
      `INSERT INTO "app"."channel" (name, description) VALUES
                  ('${sms.name}', '${sms.description}'),
                  ('${email.name}', '${email.description}'),
                  ('${push.name}', '${push.description}');`,
    )
  }

  public async down(_: QueryRunner): Promise<void> {
    // do nothing
  }
}
