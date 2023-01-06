import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

// routes
import { userRoutes, recordRoutes } from '../routes/index.js'

function app(port) {
    const app = express()
    let server = null

    async function startApp() {
        console.log('\n[APP] -----------------------')

        console.log('> Setting dependencies...')
        app.use(express.json())
        app.use(morgan('dev'))
        app.use(cors())
        app.use((req, res, next) => {
            res.setHeader("Access-Control-Allow-Origin", "*")
            next()
        })

        app.use('/user', userRoutes)
        app.use('/record', recordRoutes)

        app.get('/', (req, res) => {
            return res.status(200).json({
                status: true,
                message: "Hello world, welcome to the SempreVerde API!"
            })
        })

        console.log('> Starting server...')
        server = app.listen(port, () => console.log(`> Done! The app is running on port: ${port}\n`))
    }
    
    async function stopApp() {
        console.log('\n[APP] -----------------------')

        console.log('> Stopping server...')
        await server.close(() => console.log('> Done! The app is stopped'))
    }

    return { startApp, stopApp }
}

export { app }