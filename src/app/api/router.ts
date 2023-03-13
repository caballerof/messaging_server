import * as express from 'express'

import healthRouter from '~/app/api/resources/health'
import messagesRouter from './resources/messages'
import categoriesRouter from './resources/categories'

const router = express.Router()

router.use('/health', healthRouter)
router.use('/messages', messagesRouter)
router.use('/categories', categoriesRouter)

export default router
