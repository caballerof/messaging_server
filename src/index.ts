import * as http from 'http'
import config from '~/config'
import { getConnection } from './database'
import server from './server'
import 'reflect-metadata'
import * as WebSocket from 'ws'

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

/*** WebSocket server **/
const wss = new WebSocket.Server({ server: instanceServer })
let wsClient = null

wss.on('connection', (ws: WebSocket) => {
  ws.on('message', (message: string) => {
    //log the received message and send it back to the client
    console.log(`message from: ${message}`)
    ws.send(`message: ${message}`)
  })

  ws.on('disconnect', () => {
    console.log(`socket disconnected`)
  })

  wsClient = ws
})

export { wsClient }

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
