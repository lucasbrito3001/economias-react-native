import RecordModel from '../models/record.model.js'
import { hashString, compareString, generateToken } from '../services/util.service.js'

const responseUnexpected = { status: false, error: 'Unexpected error, contact the administrator' }

export async function upsertRecord(req, res, next) {
    try {
        const { year, month, day, description, value, observation } = req.body

        const recordByMonth = RecordModel.find({ month })

        return res.status(201).json({ status: true, user })
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
        const users = await RecordModel.find()

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

