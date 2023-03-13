import Router from 'express-promise-router'

import { listCategories } from './controller'

const router = Router()

router.route('/').get(listCategories)

export default router
