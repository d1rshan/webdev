import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}


const connection: ConnectionObject = {}

// in ts void is different from C, C++..
// here it means it does not care what type of data is being returned ig
async function connectDB(): Promise<void>{
    // perform check to prevent database choking even though mongodb allows multiple connections
    if (connection.isConnected){
        console.log("Already connected to database")
        return
    }

    try {
      const db =  await mongoose.connect(process.env.MONGO_URI || "")
      connection.isConnected = db.connections[0].readyState
      console.log("MongoDB connected succesfully")
    } catch (error) {
        console.log("Database connection failed",error)
        process.exit(1) // exit with failure
    }
}

export default connectDB