import { getRepository } from 'typeorm'
import { User } from '../models/users.model'

async function listUsers() {
  const userRepository = getRepository(User)
  const questions = await userRepository.find({
    relations: ['categories', 'channels'],
  })

  return questions
}

export { listUsers }
