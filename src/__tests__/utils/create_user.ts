import { faker } from '@faker-js/faker'
import { User } from '~/database/models/users.model'

export function createUser(): User {
  const modelUser = new User()

  modelUser.name = faker.company.name()
  modelUser.email = faker.internet.email()
  modelUser.phoneNumber = faker.phone.number()

  return modelUser
}
