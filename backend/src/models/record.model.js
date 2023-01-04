import mongoose from 'mongoose'
const { Schema, model } = mongoose

const recordSchema = new Schema({
    idUser: { 
        type: String,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    observation: { 
        type: String,
        required: true
    }
});

const Record = model("Record", recordSchema);

export default Record;