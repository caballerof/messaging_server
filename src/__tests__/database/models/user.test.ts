import { createUser } from '~/__tests__/utils/create_user'
import { User } from '~/database/models/users.model'

describe('User Model', () => {
  it('should add User', async () => {
    const user = createUser()
    const setUser = await user.save()
    const id = setUser.id

    const newUser = await User.createQueryBuilder().select().where({ id }).getOne()

    expect(newUser).not.toBeUndefined()
    expect(newUser.id).toBe(setUser.id)
    expect(newUser.name).toBe(setUser.name)
  })
})
