import Router from 'express-promise-router'

import { listCategories, listCategoryUsersById } from './controller'

const router = Router()

router.route('/').get(listCategories)
router.route('/:categoryId/users').get(listCategoryUsersById)

export default router
