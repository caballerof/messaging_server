import { ConnectionOptions } from 'typeorm'
import config from './src/config'

const {
  DB: { NAME, PASSWORD, PORT, USER, HOST },
} = config

const connectionOptions: ConnectionOptions = {
  cli: {
    entitiesDir: 'src/database/models',
    migrationsDir: 'src/database/migrations',
  },
  database: NAME,
  entities: ['src/database/models/*.ts'],
  host: HOST,
  logging: false,
  migrations: ['src/database/migrations/*.ts'],
  password: PASSWORD,
  port: PORT,
  synchronize: true,
  type: 'postgres',
  username: USER,
}

export default connectionOptions
