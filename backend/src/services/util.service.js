import { readFileSync } from 'fs'

const configJson = readFileSync('./src/configs/config.json')
const config = JSON.parse(configJson)

const {
    jwtSecret
} = config[process.env.NODE_ENV]

export async function hashString(library, string) {
    try {
        const saltRounds = 10
        const hash = await library.hash(string, saltRounds)

        return {
            status: true,
            hash
        }
    } catch (error) {
        console.log(error)
        return {
            status: false,
            error
        }
    }
}

export async function compareString(library, string, hash) {
    try {
        const result = await library.compare(string, hash)

        return {
            status: result
        }
    } catch (error) {
        console.log(error)
        return {
            status: false,
            error
        }
    }
}

export function generateToken(library, infosToSave, secret = jwtSecret) {
    try {
        const token = library.sign(
            infosToSave,
            secret,
            { expiresIn: '4h' }
        )

        return {
            status: true,
            token
        }
    } catch (error) {
        console.log(error)
        return {
            status: false,
            error
        }
    }
}

export function checkValidToken(library, token, secret = jwtSecret) {
    try {
        const tokenReplaced = token.replace('Bearer ', '')

        const decodedInfos = library.verify(tokenReplaced, secret)

        return {
            status: true,
            decodedInfos
        }
    } catch (error) {
        console.log(error)
        return {
            status: false,
            error
        }
    }
}