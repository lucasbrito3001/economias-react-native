import mongoose from 'mongoose'

import { readFileSync } from 'fs'

const configJson = readFileSync('./src/configs/config.json')
const config = JSON.parse(configJson)

const configEnv = config[process.env.NODE_ENV]

function database() {
    async function startConnection() {
        console.log('[DATABASE] ------------------')

        try {
            console.log('> Trying to connect to database')
            await mongoose.connect(configEnv.databaseConnectionString);
            console.log('> Done! Connected')
        } catch (error) {
            console.log('ERROR > ', error)
        }
    }

    async function stopConnection() {
        console.log('[DATABASE] ------------------')

        try {
            console.log('> Stopping database...')
            await mongoose.connection.close()
            console.log('> Done! The database is stopped')
        } catch (error) {
            console.log('ERROR > ', error)
        }
    }

    return { startConnection, stopConnection }
}

export { database }