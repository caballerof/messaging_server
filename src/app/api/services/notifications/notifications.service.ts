import { Category } from '~/database/models/categories.model'
import { Channel } from '~/database/models/channels.model'
import { Message } from '~/database/models/messages.model'
import { User } from '~/database/models/users.model'
import { listCategoryUsersWithChannels } from '~/database/transactions/categories.transactions'
import ContextNotification from '../notification_strategy/context'
import EmailNotification from '../notification_strategy/strategies/emailNotification'
import PushNotification from '../notification_strategy/strategies/pushNotification'
import SMSNotification from '../notification_strategy/strategies/smsNotification'
import { createLog } from '~/database/transactions/log.transactions'
import logger from '~/app/api/helpers/logging'
import { wsClient } from '~/index'

async function notify(message: Message, category: Category) {
  // Get all users subscribed to the category
  const categoryId = category.id

  const result = await listCategoryUsersWithChannels(categoryId)
  const users = result[0].user

  for (const user of users) {
    const { channels, id: userId } = user

    for (const channel of channels) {
      const { name, id: channelId } = channel

      const wasSent = await notifyMeThis(name, message.text)

      if (wasSent) {
        logNotification(message, category, channelId, userId)
      }
    }
  }
}

async function notifyMeThis(channel: string, message: string): Promise<boolean> {
  const context = new ContextNotification()

  if (channel === 'sms') {
    context.setNotificationStrategy(new SMSNotification())
  } else if (channel === 'email') {
    context.setNotificationStrategy(new EmailNotification())
  } else if (channel === 'push') {
    context.setNotificationStrategy(new PushNotification())
  }

  return context.sendNotification(message)
}

async function logNotification(message: Message, category: Category, channelId: number, userId: number) {
  const channel = await Channel.createQueryBuilder().select().where({ id: channelId }).getOne()
  const user = await User.createQueryBuilder().select().where({ id: userId }).getOne()
  const time = Date.now()

  const newLog = await createLog(time.toString(), user, channel, category, message)

  if (newLog) {
    logger.info(
      `${time} - User: ${user.name} - category: ${category.name} - channel: ${channel.name} - msg: ${message.text}`,
    )

    wsClient.send(JSON.stringify(newLog))
  } else {
    throw new Error('Error creating log')
  }
}

export { notify, logNotification }
