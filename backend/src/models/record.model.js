import { Schema, model } from "mongoose";

const recordSchema = new Schema({
    idUser: { type: String },
    month: { type: Number },
    year: { type: Number },
    records: [
        {
            description: { type: String },
            value: { type: Number },
            observation: { type: String }
        },
    ]
});

const Record = model("User", recordSchema);

export default Record;