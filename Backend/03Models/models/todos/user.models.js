import mongoose, { mongo } from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    gmail: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "password must be entered!"],
    }
},{timestamps: true});

export const User = mongoose.model("User",userSchema)