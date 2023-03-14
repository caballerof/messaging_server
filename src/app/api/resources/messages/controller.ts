import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'
import { createMessage } from '~/database/transactions/message.transaction'

async function addMessage(req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const { text, category } = req.body

    const { savedMessage, category: newCategory } = await createMessage(text, category)

    res.status(httpStatus.OK).send(savedMessage)
  } catch (error) {
    next(error)
  }
}

export { addMessage }
