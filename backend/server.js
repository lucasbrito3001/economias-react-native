import { app } from './src/core/app.js'
import { database } from './src/core/database.js'
import { readFileSync } from 'fs'

const configJson = readFileSync('./src/configs/config.json')
const config = JSON.parse(configJson)

const configEnv = config[process.env.NODE_ENV]

const port = configEnv.apiPort

const { startApp, stopApp } = app(port)
const { startConnection, stopConnection } = database()

async function startServer() {
    await startConnection()
    await startApp()
}

startServer()

process.on('SIGINT', async () => {
    console.log('\n\n[SYSTEM] Stopping the application...')
    await stopApp()
    await stopConnection()
})