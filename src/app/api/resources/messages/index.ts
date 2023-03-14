import Router from 'express-promise-router'

import { addMessage } from '~/app/api/resources/messages/controller'
import validationFabricator from '../../middlewares/validation'
import validationSchemaMessage from './validation'

const router = Router()

router.route('/').post(validationFabricator(validationSchemaMessage, 'body'), addMessage)

export default router
