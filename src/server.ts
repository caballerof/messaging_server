import * as bodyParser from 'body-parser'
import * as compression from 'compression'
import * as cors from 'cors'
import * as express from 'express'
import { Request, Response } from 'express'
import helmet from 'helmet'
import * as httpStatus from 'http-status'
import * as morgan from 'morgan'

import config from '~/config'

import { handleErrors } from '~/app/api/middlewares/error'
import router from '~/app/api/router'

const app = express()

app.use(
  morgan(config.LOGGING.TYPE, {
    skip: (req: Request, res: Response) => res.statusCode < httpStatus.BAD_REQUEST,
    stream: process.stderr,
  }),
)

app.use(
  morgan(config.LOGGING.TYPE, {
    skip: (req: Request, res: Response) => res.statusCode >= httpStatus.BAD_GATEWAY,
    stream: process.stdout,
  }),
)

// Setting various HTTP headers
app.use(helmet())
app.use(cors())
app.use(compression())
app.use(bodyParser.json())

app.use(router)
app.use(function (req, res) {
  res.json({
    message: 'Invalid Request - Try different route',
    code: 404,
  })
})

app.use(handleErrors)

export default app
