import { connectDB } from "./db/connectDB.js"
// import { createDoc } from "./models/Movie.js" 
import dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGODB_URI

connectDB(MONGODB_URI)

// createDoc()

app.listen(PORT, () => {
    console.log("Server listening on port ",PORT,"...")
})