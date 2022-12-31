import User from '../models/user.model.js'

export async function readAll(req, res, _next) {
    try {
        const users = await User.find()
    
        res.body = { statusCode: 200, status: true, content: users, message: 'ok' }

        res.status(200).send(users)
    } catch (error) {
        res.send(500).status()    
    }

}

export async function readById(req, res, _next) {
    return await User.findById('123')
}

export function createOne(req, res, _next) {

}

export function updateOne(req, res, _next) {

}

export function deleteOne(req, res, _next) {
    
}