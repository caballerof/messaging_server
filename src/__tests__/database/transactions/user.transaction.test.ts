import { listAllUsers } from '~/database/transactions/user.transaction'
import { createUser } from '~/__tests__/utils/create_user'

describe('User transactions', () => {
  it('Should list user', async () => {
    const result = await listAllUsers()

    const user = createUser()
    await user.save()

    const resultAfter = await listAllUsers()

    expect(result.length).toBeLessThan(resultAfter.length)
  })
})
