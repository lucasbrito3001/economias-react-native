import RecordModel from '../models/record.model.js'

export async function createOne(req, res, next) {
    try {
        const { year, month, day, description, value, observation } = req.body
        const { id } = req.user

        const record = await RecordModel.create({ idUser: id, year, month, day, description, value, observation })

        return res.status(201).json({ status: true, record })
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
        const { id, type } = req.user

        const users = await RecordModel.find({ 
            ...(type !== 'admin' && { idUser: id })
        })

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
        const { id, type } = req.user

        const record = await RecordModel.findOne({
            id, 
            ...(type !== 'admin' && { idUser: id })
        })

        return res.status(200).json({ status: !!record, content: record || {} })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error
        })
    }
}

export async function updateOne(req, res, next) {

}