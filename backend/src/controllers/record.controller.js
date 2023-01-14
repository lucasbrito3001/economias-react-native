import RecordModel from '../models/record.model.js'

export async function createOne(req, res, next, model = RecordModel) {
    try {
        const { year, month, day, description, value, observation } = req.body
        const { id } = req.user

        const record = await model.create({ idUser: id, year, month, day, description, value, observation })

        return res.status(201).json({ status: true, record })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error
        })
    }
}

export async function readAll(req, res, next, model = RecordModel) {
    try {
        const { id, type } = req.user

        const users = await model.find({ 
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

export async function readOne(req, res, next, model = RecordModel) {
    try {
        const { id: idUser, type } = req.user
        const { id } = req.params

        const record = await model.findOne({
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

export async function updateOne(req, res, next, model = RecordModel) {
    try {
        const { id: idUser, type } = req.user
        const { id } = req.params
        const record = req.body
        
        console.log(id, record)

        const updatedRecord = await model.updateOne({
            _id: id, 
            ...(type !== 'admin' && { idUser })
        }, record)

        if(updatedRecord.matchedCount === 0) return res.status(404).json({ status: false, error: 'Registro não encontrado' })
        if(updatedRecord.modifiedCount === 0) return res.status(404).json({ status: false, error: 'Registro encontrado, mas não houveram mudanças' })
        
        return res.status(200).json({ status: !!updatedRecord, content: 'Registro atualizado com sucesso' || {} })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error: 'Erro interno do servidor, entrar em contato com o administrador'
        })
    }
}

export async function deleteOne(req, res, next, model = RecordModel) {
    try {
        const { id: idUser, type } = req.user
        const { id } = req.params

        const deletedRecord = await model.deleteOne({
            _id: id, 
            ...(type !== 'admin' && { idUser })
        })

        if(deletedRecord.deletedCount === 0) return res.status(404).json({ status: false, error: 'Registro não encontrado' })
        
        return res.status(200).json({ status: !!deletedRecord, content: 'Registro deletado com sucesso' || {} })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ 
            status: false,
            error
        })
    }
}