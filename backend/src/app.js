import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

function app(port) {
    const app = express()
    let server = null

    function startApp() {
        app.use(morgan('dev'))
        app.use(cors())
        server = app.listen(port, `The app is running - ${port}`)
    }
    
    function stopApp() {
        server.close(() => debug('The app is stopped'))
    }

    return { startApp, stopApp }
}

export { app }