import mongoose from "mongoose"


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGODB connected succesfuly!!");
        
    } catch (error) {
        console.error("MONGODB connection failed!");
        process.exit(1); // 1 mean exit with failure, 0 means exit with success
    }
}