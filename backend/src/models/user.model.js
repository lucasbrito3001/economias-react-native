import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    name: String,
    login: String,
    password: String
})

const User = model('User', userSchema)