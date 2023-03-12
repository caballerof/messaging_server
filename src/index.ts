import * as http from 'http'
import config from '~/config'
import { getConnection } from './database'
import server from './server'
import 'reflect-metadata'

const PORT = config.SERVER_PORT || '3000'

async function onStart(): Promise<any> {
  try {
    await getConnection()
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.log(err)
    throw err
  }
}

const instanceServer = http.createServer(server)

instanceServer.listen(PORT, onStart)
// tslint:disable-next-line:no-console
console.log('********************')
console.log(` Running on port ${PORT}
       .---.
      /     \\
      \\.@-@./
      /\`\\_/\`\\
     //  _  \\\\
    | \\     )|_
   /\`\\_'>  <_/ \\
jgs\\__/'---'\\__/`)
