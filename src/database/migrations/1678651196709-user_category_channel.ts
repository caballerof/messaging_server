import { MigrationInterface, QueryRunner } from 'typeorm'
import { Category } from '../models/categories.model'
import { Channel } from '../models/channels.model'
import { User } from '../models/users.model'

export class userCategoryChannel1678651196709 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const categories: Category[] = await queryRunner.query(`SELECT * FROM "app"."category"`)
    const channels: Channel[] = await queryRunner.query(`SELECT * FROM "app"."channel"`)
    const users: User[] = await queryRunner.query(`SELECT * FROM "app"."user"`)

    let queryCategories = 'INSERT INTO "app"."user_categories_category" ("userId", "categoryId") VALUES '

    for (const user of users) {
      let maxVal = Math.floor(Math.random() * (categories.length + 1))
      const minVal = Math.floor(Math.random() * maxVal)
      maxVal = maxVal === 0 ? ++maxVal : maxVal
      let values = ''

      for (let x = minVal; x < maxVal; x++) {
        values += `(${user.id},${categories[x].id}),`
      }

      queryCategories += values
    }

    let fixedQueryCategories = queryCategories.slice(0, -1)
    fixedQueryCategories += ';'
    await queryRunner.query(fixedQueryCategories)

    // ****** Insert channel - user relation
    let queryChannel = 'INSERT INTO "app".user_channels_channel("userId", "channelId") VALUES '

    for (const user of users) {
      let maxVal = Math.floor(Math.random() * (channels.length + 1))
      const minVal = Math.floor(Math.random() * maxVal)
      maxVal = maxVal === 0 ? ++maxVal : maxVal
      let values = ''

      for (let x = minVal; x < maxVal; x++) {
        values += `(${user.id},${channels[x].id}),`
      }

      queryChannel += values
    }

    let fixedQueryChannels = queryChannel.slice(0, -1)
    fixedQueryChannels += ';'
    await queryRunner.query(fixedQueryChannels)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // do nothing
  }
}
