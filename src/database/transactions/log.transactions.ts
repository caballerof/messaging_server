import { getRepository } from 'typeorm'
import { APIException } from '~/app/api/helpers/exceptions/APIException'
import { Category } from '../models/categories.model'
import { Channel } from '../models/channels.model'
import { Log } from '../models/logs.model'
import { Message } from '../models/messages.model'
import { User } from '../models/users.model'
import * as httpStatus from 'http-status'

async function listLogs() {
  try {
    const logRepository = getRepository(Log)
    const logs = await logRepository.find({
      relations: ['user', 'channel', 'category', 'message'],
      order: {
        time: 'DESC',
      },
    })

    return logs
  } catch (error) {
    throw new APIException(error, 'Data log error - list')
  }
}

async function createLog(
  time: string,
  user: User,
  channel: Channel,
  category: Category,
  message: Message,
): Promise<Log> {
  try {
    const messageRepository = getRepository(Log)

    const log = new Log()
    log.time = time
    log.user = user
    log.channel = channel
    log.category = category
    log.message = message

    const savedMessage = await messageRepository.save(log)
    return savedMessage
  } catch (error) {
    throw new APIException(error, 'Data log error', httpStatus.INTERNAL_SERVER_ERROR)
  }
}

export { createLog, listLogs }
