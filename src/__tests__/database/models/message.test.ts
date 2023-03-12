import { faker } from '@faker-js/faker'
import { Message } from '~/database/models/messages.model'

describe('Message Model', () => {
  it('should add message', async () => {
    const message = new Message()
    message.text = faker.commerce.productDescription()

    const setMessage = await message.save()
    const id = setMessage.id

    const newMessage = await Message.createQueryBuilder().select().where({ id }).getOne()

    expect(newMessage).not.toBeUndefined()
    expect(newMessage.id).toBe(setMessage.id)
    expect(newMessage.text).toBe(setMessage.text)
  })
})
