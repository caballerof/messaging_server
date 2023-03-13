import { faker } from '@faker-js/faker'
import { createMessage } from '~/database/transactions/message.transaction'

describe('Message transactions', () => {
  it('Should insert message', async () => {
    const text = faker.commerce.productDescription()
    const result = await createMessage(text)

    expect(result).not.toBeFalsy()
    expect(result.text).toEqual(text)
  })
})
