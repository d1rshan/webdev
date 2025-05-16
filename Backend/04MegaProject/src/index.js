// require('dotenv').config({path: '../env'})  // to load environment variables
//  If you want more consistency (using import only do this)
import dotenv from "dotenv"
dotenv.config({
    path: './env'
}) 

import connectDB from "./db/index.js"

connectDB()









// // APPROACH 1
// import express from "express"
// const app = express()

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error) =>{
//             console.log("ERROR: ",error)
//             throw error
//         })

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listennig on port ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ",error)
//         throw error
//     }
// })