import Router from 'express-promise-router'

import { listAllUsers } from './constoller'

const router = Router()

router.route('/').get(listAllUsers)

export default router
