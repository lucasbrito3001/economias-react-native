import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String },
    login: { type: String },
    password: { type: String } 
});

const User = model("User", userSchema);

export default User;