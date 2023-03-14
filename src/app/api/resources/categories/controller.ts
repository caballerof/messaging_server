import { NextFunction, Request, Response } from 'express'
import { listAllCategories, listCategoryUsers } from '~/database/transactions/categories.transactions'
import * as httpStatus from 'http-status'

async function listCategories(req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const categories = await listAllCategories()

    res.status(httpStatus.OK).send(categories)
  } catch (error) {
    next(error)
  }
}

async function listCategoryUsersById(req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const { categoryId } = req.params

    const categories = await listCategoryUsers(Number(categoryId))

    res.status(httpStatus.OK).send(categories)
  } catch (error) {
    next(error)
  }
}

export { listCategories, listCategoryUsersById }
