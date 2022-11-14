import { Schema, Model } from 'mongoose'

const User = new Schema({
    name: String,
    login: String,
    password: String
})