import mongoose from 'mongoose'

function database() {
    async function startConnection() {
        console.log('[DATABASE] ------------------')

        try {
            console.log('> Trying to connect to database')
            await mongoose.connect('mongodb://localhost:27017/test');
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