import { NextFunction, Request, Response } from 'express'
import { parameterToValid } from '~/app/common/types'
import { InvalidParameter } from '../helpers/exceptions/invalidParameter'

const validationFabricator = (schema, property: parameterToValid) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = schema.validate(req[property], { abortEarly: false })
      const { error } = result

      if (error == null) {
        next()
      } else {
        const { details } = result.error
        const message = details.map((detail) => ({
          message: detail.message,
          valueSent: detail.context.value,
        }))

        throw new InvalidParameter({ message, place: property })
      }
    } catch (error) {
      next(error)
    }
  }
}
export default validationFabricator
