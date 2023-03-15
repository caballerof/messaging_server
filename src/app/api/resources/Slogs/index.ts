import Router from 'express-promise-router'

import { listAllLogs } from './controller'

const router = Router()

router.route('/').get(listAllLogs)

export default router
