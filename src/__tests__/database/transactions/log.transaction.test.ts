import { faker } from '@faker-js/faker'
import { assert } from 'console'
import { Category } from '~/database/models/categories.model'
import { Channel } from '~/database/models/channels.model'
import { Log } from '~/database/models/logs.model'
import { Message } from '~/database/models/messages.model'
import { listLogs } from '~/database/transactions/log.transactions'
import { createUser } from '~/__tests__/utils/create_user'

describe('Log Transaction', () => {
  it('Add new log', async () => {
    const user = createUser()
    const newUser = await user.save()

    const message = new Message()
    message.text = faker.commerce.productDescription()
    const newMessage = await message.save()

    const category = await Category.createQueryBuilder().select().getOne()
    const channel = await Channel.createQueryBuilder().select().getOne()

    const time = Date.now()

    const log = new Log()
    log.time = time.toString()
    log.user = newUser
    log.channel = channel
    log.category = category
    log.message = newMessage
    const result = await log.save()

    expect(log.id).toEqual(result.id)
    expect(log.category).toEqual(result.category)
  })

  it('Retrieve log', async () => {
    const logsBefore = await listLogs()

    const user = createUser()
    const newUser = await user.save()

    const message = new Message()
    message.text = faker.commerce.productDescription()
    const newMessage = await message.save()

    const category = await Category.createQueryBuilder().select().getOne()
    const channel = await Channel.createQueryBuilder().select().getOne()

    const time = Date.now()

    const log = new Log()
    log.time = time.toString()
    log.user = newUser
    log.channel = channel
    log.category = category
    log.message = newMessage
    await log.save()

    const logsAfter = await listLogs()

    expect(logsBefore.length).toBeLessThan(logsAfter.length)
  })
})
