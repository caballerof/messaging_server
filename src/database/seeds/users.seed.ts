import { faker } from '@faker-js/faker'

interface IUser {
  name: string
  email: string
  phoneNumber: string
}

export function getFakeUser(): IUser {
  return {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
  }
}

export function usersSeed(quantity: number): IUser[] {
  const users = []

  for (let x = 0; x < quantity; x++) {
    users.push(getFakeUser())
  }

  return users
}
