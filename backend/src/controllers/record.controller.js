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
        const { id: idUser, type } = req.user
        const { id } = req.params

        const record = await RecordModel.findOne({
            _id: id,
            ...(type !== 'admin' && { idUser })
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
    try {
        const { id: idUser, type } = req.user
        const { id } = req.params
        const record = req.body
        
        console.log(id, record)

        const updatedRecord = await RecordModel.updateOne({
            _id: id, 
            ...(type !== 'admin' && { idUser })
        }, record)

        if(updatedRecord.matchedCount === 0) return res.status(404).json({ status: false, error: 'Record not found' })
        if(updatedRecord.modifiedCount === 0) return res.status(404).json({ status: false, error: 'Record found, but not updated' })
        
        return res.status(200).json({ status: !!updatedRecord, content: 'Record updated succesfully' || {} })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error: 'Internal server error, contact the administrator'
        })
    }
}

export async function deleteOne(req, res, next) {
    try {
        const { id: idUser, type } = req.user
        const { id } = req.params

        const deletedRecord = await RecordModel.deleteOne({
            _id: id, 
            ...(type !== 'admin' && { idUser })
        })

        if(deletedRecord.deletedCount === 0) return res.status(404).json({ status: false, error: 'Record not found' })
        
        return res.status(200).json({ status: !!deletedRecord, content: 'Record deleted succesfully' || {} })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error
        })
    }
}