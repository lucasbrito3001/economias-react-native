import mongoose from 'mongoose'
const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "name required"]
    },
    email: {
        type: String,
        required: [true, "email required"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "password required"],
        select: false
    }
})

const User = model('User', userSchema)

export default User
