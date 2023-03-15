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
    throw new Error(error)
  }
}

export { listUsers }
