import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'
import { listUsers } from '~/database/transactions/user.transaction'

async function listAllUsers(req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const users = await listUsers()

    res.status(httpStatus.OK).send(users)
  } catch (error) {
    next(error)
  }
}

export { listAllUsers }
