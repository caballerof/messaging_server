import Router from 'express-promise-router'

import healthController from '~/app/api/resources/health/controller'

const router = Router()

router.route('/').get(healthController)

export default router
