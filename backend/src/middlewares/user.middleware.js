import UserModel from '../models/user.model.js'
import { checkValidToken } from '../services/util.service.js'

export async function findUserMiddleware(req, res, next) {
    try {
        const { email } = req.body

        const user = await UserModel.findOne({ email })

        if(user) return res.status(400).json({
            status: false,
            error: 'This email already exists'
        })

        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ 
            status: false,
            error
        })
    }
}

export function userLoggedMiddleware(req, res, next) {
    try {
        const { authorization: token } = req.headers

        const { status: statusDecoded, decodedInfos } = checkValidToken(token)

        if(!statusDecoded) return res.status(401).json({
            status: false,
            error: 'User unauthorized, please log in and try again'
        })

        req.user = decodedInfos
        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error
        })
    }
}