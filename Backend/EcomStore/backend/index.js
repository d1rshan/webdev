// packages
import path from 'path'
import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

// Utils
import { connectDB } from './config/db.js'

dotenv.config()
const PORT = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get("/",(req,res) => {
    res.send("Hi from backend")
})

app.listen(PORT,() => console.log(`Server running on ${PORT}...`))

//MONGODB_URI=mongodb+srv://darshan:darshan123@cluster0.6bnidiv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
