import { getRepository } from 'typeorm'
import { User } from '../models/users.model'

async function listUsers() {
  try {
    const userRepository = getRepository(User)
    const questions = await userRepository.find({
      relations: ['categories', 'channels'],
    })

    return questions
  } catch (error) {
    console.log('🚀 ~ file: message.transaction.ts:17 ~ createMessage ~ error:', error)
    throw new Error(error)
  }
}

export { listUsers }
