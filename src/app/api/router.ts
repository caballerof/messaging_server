import * as express from 'express'

import healthRouter from '~/app/api/resources/health'

const router = express.Router()

router.use('/health', healthRouter)

export default router
