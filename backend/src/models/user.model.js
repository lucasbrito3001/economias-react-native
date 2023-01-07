import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Nome obrigatório"]
    },
    type: {
        type: String,
        required: [true, "Tipo de usuário obrigatório"],
    },
    email: {
        type: String,
        required: [true, "Email obrigatório"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Senha obrigatória"],
        select: false
    }
})

const User = model('User', userSchema)

export default User
