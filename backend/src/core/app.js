import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { userRoutes } from '../routes/index.js'

function app(port) {
    const app = express()
    let server = null

    async function startApp() {
        console.log('\n[APP] -----------------------')

        console.log('> Setting dependencies...')
        app.use(morgan('dev'))
        app.use(cors())

        app.use('/users', userRoutes)

        console.log('> Starting server...')
        server = app.listen(port, () => console.log(`> Done! The app is running on port: ${port}`))
    }
    
    async function stopApp() {
        console.log('\n[APP] -----------------------')

        console.log('> Stopping server...')
        await server.close(() => console.log('> Done! The app is stopped'))
    }

    return { startApp, stopApp }
}

export { app }