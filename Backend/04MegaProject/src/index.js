// require('dotenv').config({path: '../env'})  // to load environment variables
//  If you want more consistency (using import only do this)
import dotenv from "dotenv"
dotenv.config({
    path: './env'
}) 

import connectDB from "./db/index.js"
import { app } from "./app.js"

// coz connectDB is an async function we either call an async function using await (inside async function)
// or call it with .then().catch()
connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () =>{
        console.log(`Server running at port: ${process.env.PORT}`)
    })
})
.catch((error) =>{
    console.log("MongoDB Connection Failed!!!",error)
})









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