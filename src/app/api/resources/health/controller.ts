import { NextFunction, Request, Response } from 'express'
import * as httpStatus from 'http-status'

import { HealthMessage } from '~/app/common/types'

async function healthController(req: Request, res: Response, next: NextFunction): Promise<any> {
  const upTime = process.uptime()

  const healthCheck: HealthMessage = {
    upTime: upTime,
    upTimeTranslate: `${(upTime / 60).toFixed(2)} minutos`,
    message: 'Everything going to be OK!',
    timestamp: Date.now(),
  }

  try {
    res.status(httpStatus.OK).send(healthCheck)
  } catch (error) {
    next(error)
  }
}

export default healthController
