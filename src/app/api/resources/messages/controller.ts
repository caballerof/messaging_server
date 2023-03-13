import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'

async function addMessage(req: Request, res: Response, next: NextFunction): Promise<any> {
  try {
    const text = req?.body?.text
    console.log('🚀 ~ file: controller.ts:7 ~ addMessage ~ text:', text)
    res.status(httpStatus.OK).send(text)
  } catch (error) {
    next(error)
  }
}

export { addMessage }
