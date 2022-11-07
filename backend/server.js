import { app } from './src/app.js'
import config from './src/config/config.json' assert { type: "json" }

import dotenv from 'dotenv'

dotenv.config()

const configEnv = config[process.env.SERVER_ENV]

const port = configEnv.apiPort

const { startApp, stopApp } = app(port)

startApp()