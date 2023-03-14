import { getRepository } from 'typeorm'
import { APIException } from '~/app/api/helpers/exceptions/APIException'
import { Category } from '../models/categories.model'

async function listAllCategories() {
  try {
    const categoryRepository = getRepository(Category)

    const categories = await categoryRepository.find({
      select: ['id', 'name', 'description'],
    })

    return categories
  } catch (error) {
    throw new APIException(error, 'Data user error - list')
  }
}

async function listCategoryUsers(categoryId: number) {
  try {
    const categoryRepository = getRepository(Category)

    const categories = await categoryRepository.find({
      select: ['id', 'name', 'description'],
      relations: ['user'],
      where: {
        id: categoryId,
      },
    })

    return categories
  } catch (error) {
    throw new APIException(error, 'Data user error - list')
  }
}

async function listCategoryUsersWithChannels(categoryId: number) {
  try {
    const categoryRepository = getRepository(Category)

    const categories = await categoryRepository.find({
      select: ['id', 'name', 'description'],
      relations: ['user', 'user.channels'],
      where: {
        id: categoryId,
      },
    })

    return categories
  } catch (error) {
    throw new APIException(error, 'Data user error - list')
  }
}

export { listAllCategories, listCategoryUsers, listCategoryUsersWithChannels }
