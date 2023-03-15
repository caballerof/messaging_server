import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'
import { listLogs } from '~/database/transactions/log.transactions'

async function listAllLogs(req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const logs = await listLogs()

    res.status(httpStatus.OK).send(logs)
  } catch (error) {
    next(error)
  }
}

export { listAllLogs }
