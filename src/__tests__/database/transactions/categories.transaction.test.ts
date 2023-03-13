import { listAllCategories } from '~/database/transactions/categories.transactions'

describe('Categories transactions', () => {
  it('Should list all categories', async () => {
    const categories = await listAllCategories()

    expect(categories.length).not.toBeFalsy()
    expect(categories.length).toEqual(3)
  })
})
