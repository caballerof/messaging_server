import { getRepository } from 'typeorm'
import { Message } from '../models/messages.model'

async function createMessage(text: string): Promise<Message> {
  const messageRepository = getRepository(Message)

  const message = new Message()
  message.text = text

  const savedMessage = await messageRepository.save(message)
  return savedMessage
}

export { createMessage }
