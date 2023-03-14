import { getRepository } from 'typeorm'
import { Category } from '../models/categories.model'
import { Message } from '../models/messages.model'

interface ICreateMessage {
  savedMessage: Message
  category: Category
}

async function createMessage(text: string, categoryId: number): Promise<ICreateMessage> {
  try {
    const messageRepository = getRepository(Message)
    const category = await Category.createQueryBuilder().select().where({ id: categoryId }).getOne()

    const message = new Message()
    message.text = text
    message.category = category

    const savedMessage = await messageRepository.save(message)
    return { savedMessage, category }
  } catch (error) {
    throw new Error(error)
  }
}

export { createMessage }
