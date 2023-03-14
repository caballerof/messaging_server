import * as Joi from 'joi'
import { Message } from '~/database/models/messages.model'

const validationSchemaMessage = Joi.object<Message>({
  text: Joi.string().required(),
  category: Joi.number().required(),
})

export default validationSchemaMessage
