import * as express from 'express'

import healthRouter from '~/app/api/resources/health'
import messagesRouter from './resources/messages'
import categoriesRouter from './resources/categories'
import userRouter from '~/app/api/resources/users'
import logsRouter from '~/app/api/resources/logs'

const router = express.Router()

router.use('/health', healthRouter)
router.use('/messages', messagesRouter)
router.use('/categories', categoriesRouter)
router.use('/users', userRouter)
router.use('/logs', logsRouter)

export default router
