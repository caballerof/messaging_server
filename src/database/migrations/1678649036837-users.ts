import { MigrationInterface, QueryRunner } from 'typeorm'
import { usersSeed } from '../seeds/users.seed'

export class users1678649036837 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const users = usersSeed(5)

    let query = 'INSERT INTO "app"."user" (name, email, "phoneNumber") VALUES '

    for (const user of users) {
      const value = `('${user.name}', '${user.email}', '${user.phoneNumber}'),`
      query += value
    }

    let fixedQuery = query.substring(0, query.length - 1)
    fixedQuery += ';'
    await queryRunner.query(fixedQuery)
  }

  public async down(_: QueryRunner): Promise<void> {
    // do nothing
  }
}
