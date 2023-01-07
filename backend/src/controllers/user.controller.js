import User from '../models/user.model.js'
import { hashString, compareString, generateToken } from '../services/util.service.js'

const responseUnexpected = { status: false, error: 'Erro inesperado, entre em contato com o administrador' }

export async function createUser(req, res, next) {
    try {
        const { name, email, password, type } = req.body

        const { status: statusHash, hash: hashedPassword } = await hashString(password)

        if(!statusHash) return res.status(450).json(responseUnexpected)

        const {
            _doc: {
                password: pass,
                ...user
            }
        } = await User.create({ name, email, password: hashedPassword, type })

        return res.status(201).json({ status: true, user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error
        })
    }
}

export async function loginUser(req, res, next) {
    try {
        const { email, password } = req.body

        const { _id: id, type, password: hashedPassword } = await User.findOne({ email }).select('+password')
        const { status: statusHash } = await compareString(password, hashedPassword)
        
        if(!statusHash) return res.status(450).json(responseUnexpected)

        const { status: statusJwt, token } = generateToken({ email, id, type })
        
        if(!statusJwt) return res.status(450).json(responseUnexpected)

        return res.status(200).json({ status: true, token })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error
        })
    }
}

export async function readAll(req, res, next) {
    try {
        const users = await User.find()

        return res.status(200).json({ status: true, content: users })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error
        })
    }
}

export async function readOne(req, res, next) {
    try {
        const { id } = req.params

        const user = await User.findById(id)

        return res.status(200).json({ status: true, content: user })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error
        })
    }
}

