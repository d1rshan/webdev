import mongoose from "mongoose";

const connectDB = async (MONGODB_URI) => {
    try {
        await mongoose.connect(`${MONGODB_URI}/loldb`)
        console.log("MongoDB connected!")
    } catch (error) {
        console.log("MongoDB connection failed!",error)
    }
}

export {connectDB}