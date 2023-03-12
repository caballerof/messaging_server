import * as Joi from 'joi'
import { IdField } from '~/app/common/types'

export const validationSchemaId = Joi.object<IdField>({
  id: Joi.string().uuid().required(),
})
